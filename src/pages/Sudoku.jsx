import { useState, useEffect } from "react";
import StandardPage from "../components/wrappers/StandardPage";
import { v4 as uuidv4 } from "uuid";
import Loading from "../components/Loading";

export default function Resume() {
  const [board, setBoard] = useState(null);
  const [id, setId] = useState("");
  const [time, setTime] = useState(0);
  const [maxStrikes, setMaxStrikes] = useState(3);
  const [strikes, setStrikes] = useState(0);
  const [remaining, setRemaining] = useState(81);
  const [selectedSpace, setSelectedSpace] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectionColor, setSelectionColor] = useState("bg-tertiary");
  const [boardColor, setBoardColor] = useState("bg-bg");

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

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  useEffect(() => {
    if (gameOver) {
      if (strikes === maxStrikes) {
        setBoardColor("bg-secondary");
      }
      if (remaining === 0) {
        setBoardColor("bg-quaternary");
      }
    } else {
      setBoardColor("bg-bg");
    }
  }, [gameOver]);

  useEffect(() => {
    setSelectionColor("bg-tertiary");
  }, [selectedSpace]);

  const handleKeyDown = (e) => {
    if (e.key >= 1 && e.key <= 9) {
      check(parseInt(e.key));
    }
  };

  const Space = (props) => {
    const [className, setClassName] = useState(props.className);
    useEffect(() => {
      if (props.index == props.selectedSpace) {
        setClassName(`${className} ${selectionColor}`);
      }
    }, []);
    const toggleSelection = (key) => {
      console.log(key);
      props.setSpace(key);
    };
    return (
      <button
        key={props.index}
        className={className}
        onClick={() => toggleSelection(props.index)}
      >
        {props.num === 0 ? "" : props.num}
      </button>
    );
  };

  const Board = (props) => {
    if (board.length === 0) {
      return;
    }
    return board.map((num, index) => {
      let row = Math.floor(index / 9);
      let col = index % 9;
      return (
        <Space
          num={num}
          index={index}
          className={`grid place-items-center text-[3.5vmin] min-h-[7.7vmin] h-full row-start-${
            row + 1
          } col-start-${col + 1} border ${col % 3 == 0 ? "border-l-2" : ""} ${
            col % 3 == 2 ? "border-r-2" : ""
          } ${row % 3 == 0 ? "border-t-2" : ""} ${
            row % 3 == 2 ? "border-b-2" : ""
          } border-black`}
          setSpace={props.setSpace}
          selectedSpace={selectedSpace}
        />
      );
    });
  };

  const Choice = (props) => {
    let className = `grid place-items-center text-xl col-start-${props.num} ${
      selectedSpace !== null ? "" : "text-gray"
    } ${board[selectedSpace] === 0 ? "" : "text-gray"}`;
    return (
      <button className={className} onClick={() => props.check(props.num)}>
        {props.num}
      </button>
    );
  };

  const renderChoices = (check) => {
    let choices = [];
    for (let i = 1; i <= 9; i++) {
      choices.push(<Choice num={i} check={check} />);
    }
    return choices;
  };

  const StyledButton = (props) => {
    return (
      <button
        className={`h-10 w-20 ${
          props.color ? props.color : "bg-tertiary"
        } border`}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
  };

  const fetchBoard = async (id, difficulty) => {
    setLoading(true);
    const response = await fetch(
      `https://sudoku-production-d97b.up.railway.app/start/${id}/${difficulty}`
    );
    const data = await response.json();
    if (data.board === null) {
      resumeGame(localStorage.hetItem("id"));
    }
    setBoard(data.board);
    setRemaining(data.remaining);
    setMaxStrikes(data.max_strikes);
    setGameOver(false);
    setLoading(false);
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
      setBoard(null);
      return;
    }
    setBoard(data.board);
    setRemaining(data.remaining);
    setMaxStrikes(data.max_strikes);
    if (data.strikes !== undefined) {
      setStrikes(data.strikes);
    }
  };

  const check = async (num) => {
    if (selectedSpace === null) {
      return;
    }
    if (board[selectedSpace] !== 0) {
      return;
    }
    const row = Math.floor(selectedSpace / 9);
    const col = selectedSpace % 9;
    const response = await fetch(
      `https://sudoku-production-d97b.up.railway.app/check/${id}/${row}/${col}/${num}`
    );
    const data = await response.json();
    console.log(data);
    setBoard(data.board);
    setRemaining(data.remaining);
    console.log(data.strikes)
    setStrikes(data.strikes);
    if (data.game_over) {
      setGameOver(true);
    }
    if (strikes < data.strikes) {
      setSelectionColor("bg-secondary");
      await sleep(200);
      setSelectionColor("bg-tertiary");
    }
    setSelectedSpace(null);
  };

  const hint = async () => {
    const response = await fetch(
      `https://sudoku-production-d97b.up.railway.app/hint/${id}`
    );
    const data = await response.json();
    setBoard(data.board);
    setRemaining(data.remaining);
    setSelectedSpace(null);
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
    setGameOver(true);
  };

  const reset = () => {
    solve();
    setBoard(null);
    setStrikes(0);
    let id = uuidv4();
    setId(id);
    localStorage.setItem("id", id);
    setSelectedSpace(null);
    setGameOver(false);
  };

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return (
    <StandardPage>
      {loading ? (
        <Loading />
      ) : (
        <div className="h-full w-full flex flex-col align-middle items-center justify-center pt-5">
          {board ? (
            <div>
              <div className={`grid grid-cols-9 grid-rows-9 text-center aspect-square max-w-[70vmin] w-[70vmin] h-[70vmin] border-2 m-2 ${boardColor}`}>
                <Board
                  setSpace={setSelectedSpace}
                  selectedSpace={selectedSpace}
                />
              </div>
              <div
                className={`grid grid-cols-9 grid-rows-1 text-center max-w-[70vmin] w-[70vmin] m-2 `}
              >
                {renderChoices(check)}
              </div>
              {!gameOver ? (
                <div className="flex flex-row justify-center gap-5 max-w-[70vmin] w-[70vmin] m-2">
                  <StyledButton onClick={hint}>Hint</StyledButton>
                  <StyledButton onClick={solve}>Solve</StyledButton>
                </div>
              ) : (
                <div className="flex flex-row justify-center gap-5 max-w-[70vmin] w-[70vmin] m-2">
                  <StyledButton onClick={reset}>Reset</StyledButton>
                </div>
              )}
              <div className="flex flex-row justify-between max-w-[70vmin] w-[70vmin] m-2">
                <div className="flex flex-col">
                  <p>Remaining: {remaining}</p>
                  <p>
                    Strikes: {strikes}/{maxStrikes}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <p>Sudoku</p>
              <div className="h-full w-full flex items-center justify-center gap-5 p-5">
                <StyledButton
                  color="bg-quaternary"
                  onClick={() => fetchBoard(id, 55)}
                >
                  Easy
                </StyledButton>
                <StyledButton
                  color="bg-tertiary"
                  onClick={() => fetchBoard(id, 40)}
                >
                  Medium
                </StyledButton>
                <StyledButton
                  color="bg-secondary"
                  onClick={() => fetchBoard(id, 15)}
                >
                  Hard
                </StyledButton>
              </div>
            </div>
          )}
        </div>
      )}
    </StandardPage>
  );
}
