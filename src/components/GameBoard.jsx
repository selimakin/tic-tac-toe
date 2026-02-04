import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const copyArray = [...prevGameBoard.map((innerArr) => [...innerArr])];
      copyArray[rowIndex][colIndex] = "X";
      return copyArray;
    });
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <ol key={rowIndex}>
          {row.map((playerSymbol, colIndex) => (
            <button
              onClick={() => handleSelectSquare(rowIndex, colIndex)}
              key={colIndex}
            >
              {playerSymbol}
            </button>
          ))}
        </ol>
      ))}
    </ol>
  );
}
