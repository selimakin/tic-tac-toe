export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <ol key={rowIndex}>
          {row.map((playerSymbol, colIndex) => (
            <button
              onClick={() => onSelectSquare(rowIndex, colIndex)}
              key={colIndex}
              disabled={playerSymbol !== null}
            >
              {playerSymbol}
            </button>
          ))}
        </ol>
      ))}
    </ol>
  );
}
