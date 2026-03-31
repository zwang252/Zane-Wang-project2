import SudokuContext from "../context/SudokuContext";
import "./Board.css";

function Board() {
  return (
    <SudokuContext.Consumer>
      {({
        board,
        fixed,
        time,
        finished,
        handleChange,
        newGame,
        resetGame,
        isValidMove,
        subRows,
        subCols
      }) => (
        <div>
          <h2>Time: {time}s</h2>

          <div className="board">
            {board.map((row, r) => (
              <div key={r} className="row">
                {row.map((cell, c) => {
                  const invalid = !isValidMove(board, r, c, cell);

                  return (
                    <input
                      key={c}
                      className={`cell
                        ${fixed[r][c] ? "fixed" : ""}
                        ${invalid ? "invalid" : ""}
                        ${c % subCols === 0 ? "border-left" : ""}
                        ${r % subRows === 0 ? "border-top" : ""}
                        ${(c + 1) % subCols === 0 ? "border-right" : ""}
                        ${(r + 1) % subRows === 0 ? "border-bottom" : ""}
                      `}
                      value={cell === 0 ? "" : cell}
                      onChange={(e) => handleChange(r, c, e.target.value)}
                      disabled={fixed[r][c] || finished}
                    />
                  );
                })}
              </div>
            ))}
          </div>

          {finished && <h2>🎉 Congratulations!</h2>}

          <button onClick={newGame}>New Game</button>
          <button onClick={resetGame}>Reset</button>
        </div>
      )}
    </SudokuContext.Consumer>
  );
}

export default Board;