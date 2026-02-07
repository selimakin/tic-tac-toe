const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
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
