import { useState, useEffect } from "react";
import StandardPage from "../components/wrappers/StandardPage";
import { v4 as uuidv4 } from "uuid";

export default function Resume() {
  const [board, setBoard] = useState([]);
  const [difficulty, setDifficulty] = useState("55");
  const [id, setId] = useState("");
  const [time, setTime] = useState(0);
  const [maxStrikes, setMaxStrikes] = useState(3);
  const [strikes, setStrikes] = useState(0);
  const [remaining, setRemaining] = useState(81);

  useEffect(() => {
    let id = localStorage.getItem("id");
    if (id === null) {
      id = uuidv4();
      localStorage.setItem("id", id);
    } else {
      setId(id);
      resumeGame(id);
    }
  }, []);



  const RenderBoard = () => {
    if (board.length === 0) {
      return;
    }
    return board.map((num, index) => {
      let row = Math.floor(index / 9);
      let col = index % 9;
      console.log(num, index, row, col);
      let className = `align-middle row-start-${row+1} col-start-${col+1} border-2 border-black`;
      return (
        <div key={index} className={className}>
          {num === 0 ? "" : num}
        </div>
      );
    })
  }

  const fetchBoard = async (id, difficulty) => {
    const response = await fetch(`https://sudoku-production-d97b.up.railway.app/start/${id}/${difficulty}`);
    const data = await response.json();
    console.log(data)
    setBoard(data.board);
    setRemaining(data.remaining);
    setMaxStrikes(data.maxStrikes);
  }

  const resumeGame = async (id) => {
    const response = await fetch(`https://sudoku-production-d97b.up.railway.app/resume/${id}`);
    const data = await response.json();
    console.log(data)
    setBoard(data.board);
    setRemaining(data.remaining);
    setMaxStrikes(data.maxStrikes);
    setStrikes(data.strikes);
  }

  return (
    <StandardPage>
      <div className="h-full w-full flex justify-center m-5">
        { board ?
          <div className="grid grid-cols-9 grid-rows-9 justify-center text-center aspect-square h-1/2">
            <RenderBoard/>
          </div>
          :
          <button onClick={() => fetchBoard(id, difficulty)}>Start</button>
        }
      </div>
    </StandardPage>
  );
}
