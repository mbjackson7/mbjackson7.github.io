import { useState, useEffect } from "react";
import StandardPage from "../components/wrappers/StandardPage";
import { v4 as uuidv4 } from "uuid";

export default function Resume() {
  const [board, setBoard] = useState([]);
  const [id, setId] = useState("");
  const [time, setTime] = useState(0);
  const [maxStrikes, setMaxStrikes] = useState(3);
  const [strikes, setStrikes] = useState(0);
  const [remaining, setRemaining] = useState(81);
  const [selectedSpace, setSelectedSpace] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    let id = localStorage.getItem("id");
    if (id === null) {
      id = uuidv4();
      setId(id);
      localStorage.setItem("id", id);
    } else {
      setId(id);
      resumeGame(id);
    }
  }, []);

  const Space = (props) => {
    const [className, setClassName] = useState(props.className);
    useEffect(() => {
      if (props.index == props.selectedSpace) {
        setClassName(`${className} bg-tertiary`);
      }
    }, []);
    const toggleSelection = (key) => {
      console.log(key);
      props.setSpace(key);
    };
    return (
      <div
        key={props.index}
        className={className}
        onClick={() => toggleSelection(props.index)}
      >
        {props.num === 0 ? "" : props.num}
      </div>
    );
  };

  const Board = (props) => {
    if (board.length === 0) {
      return;
    }
    return board.map((num, index) => {
      let row = Math.floor(index / 9);
      let col = index % 9;
      let className = `grid place-items-center text-xl h-full row-start-${
        row + 1
      } col-start-${col + 1} border ${col % 3 == 0 ? "border-l-2" : ""} ${
        col % 3 == 2 ? "border-r-2" : ""
      } ${row % 3 == 0 ? "border-t-2" : ""} ${
        row % 3 == 2 ? "border-b-2" : ""
      } border-black`;
      return (
        <Space
          num={num}
          index={index}
          className={className}
          setSpace={props.setSpace}
          selectedSpace={selectedSpace}
        />
      );
    });
  };

  const Choice = (props) => {
    let className = `grid place-items-center text-xl col-start-${props.num}`;
    return (
      <div className={className} onClick={() => props.check(props.num)}>
        {props.num}
      </div>
    );
  };

  const renderChoices = (check) => {
    let choices = [];
    for (let i = 1; i <= 9; i++) {
      choices.push(<Choice num={i} check={check} />);
    }
    return choices;
  };

  const fetchBoard = async (id, difficulty) => {
    const response = await fetch(
      `https://sudoku-production-d97b.up.railway.app/start/${id}/${difficulty}`
    );
    const data = await response.json();
    console.log(data);
    setBoard(data.board);
    setRemaining(data.remaining);
    setMaxStrikes(data.maxStrikes);
    setGameOver(false);
  };

  const resumeGame = async (id) => {
    const response = await fetch(
      `https://sudoku-production-d97b.up.railway.app/resume/${id}`
    );
    const data = await response.json();
    if (data.board === null) {
      id = uuidv4();
      setId(id);
      localStorage.setItem("id", id);
      return;
    }
    setBoard(data.board);
    setRemaining(data.remaining);
    setMaxStrikes(data.maxStrikes);
    setStrikes(data.strikes);
  };

  const check = async (num) => {
    if (selectedSpace === null) {
      return;
    }
    const row = Math.floor(selectedSpace / 9);
    const col = selectedSpace % 9;
    const response = await fetch(
      `https://sudoku-production-d97b.up.railway.app/check/${id}/${row}/${col}/${num}`
    );
    const data = await response.json();
    setBoard(data.board);
    setRemaining(data.remaining);
    setStrikes(data.strikes);
    setSelectedSpace(null);
    if (data.remaining === 0) {
      setGameOver(true);
    }
    if (data.gameOver) {
      setGameOver(true);
    }
  };

  const hint = async () => {
    const response = await fetch(
      `https://sudoku-production-d97b.up.railway.app/hint/${id}`
    );
    const data = await response.json();
    setBoard(data.board);
    setRemaining(data.remaining);
    if (data.remaining === 0) {
      setGameOver(true);
    }
  };

  const solve = async () => {
    const response = await fetch(
      `https://sudoku-production-d97b.up.railway.app/solve/${id}`
    );
    const data = await response.json();
    setBoard(data.board);
    setRemaining(0);
    setGameOver(true);
  };

  const reset = () => {
    solve();
    setBoard(null);
    setStrikes(0);
    setId(uuidv4());
    setGameOver(false);
  };

  return (
    <StandardPage>
      <div className="h-full w-full flex flex-col align-middle items-center justify-center p-5">
        {board ? (
          <div>
            <div className="grid grid-cols-9 grid-rows-9 text-center aspect-square max-w-[70vmin] w-[70vmin] h-[70vmin] border-2 m-2">
              <Board
                setSpace={setSelectedSpace}
                selectedSpace={selectedSpace}
              />
            </div>
            <div className="grid grid-cols-9 grid-rows-1 text-center max-w-[70vmin] w-[70vmin] m-2">
              {renderChoices(check)}
            </div>
            {!gameOver ? (
              <div className="flex flex-row justify-center gap-5 max-w-[70vmin] w-[70vmin] m-2">
                <button className="h-10 w-20 bg-tertiary border" onClick={hint}>
                  Hint
                </button>
                <button
                  className="h-10 w-20 bg-tertiary border"
                  onClick={solve}
                >
                  Solve
                </button>
              </div>
            ) : (
              <div className="flex flex-row justify-center gap-5 max-w-[70vmin] w-[70vmin] m-2">
                <button
                  className="h-10 w-20 bg-tertiary border"
                  onClick={reset}
                >
                  Reset
                </button>
              </div>
            )}
            <div className="flex flex-row justify-between max-w-[70vmin] w-[70vmin] m-2">
              <div className="flex flex-col">
                <p>Remaining: {remaining}</p>
                <p>Strikes: {strikes}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <p>Sudoku</p>
            <div className="h-full w-full flex items-center justify-center gap-5 p-5">
              <button
                className="h-10 w-20 bg-quaternary border"
                onClick={() => fetchBoard(id, 55)}
              >
                Easy
              </button>
              <button
                className="h-10 w-20 bg-tertiary border"
                onClick={() => fetchBoard(id, 40)}
              >
                Medium
              </button>
              <button
                className="h-10 w-20 bg-secondary border"
                onClick={() => fetchBoard(id, 15)}
              >
                Hard
              </button>
            </div>
          </div>
        )}
      </div>
    </StandardPage>
  );
}
