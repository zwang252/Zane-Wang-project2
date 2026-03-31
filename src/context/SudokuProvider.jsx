import { useState, useEffect } from "react";
import SudokuContext from "./SudokuContext";

export default function SudokuProvider({ children, size = 9 }) {
  const subRows = size === 9 ? 3 : 2;
  const subCols = size === 9 ? 3 : 3;
  const maxNum = size;

  const [board, setBoard] = useState([]);
  const [solution, setSolution] = useState([]);
  const [fixed, setFixed] = useState([]);
  const [time, setTime] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (finished) return;
    const interval = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, [finished]);

  useEffect(() => {
    newGame();
  }, [size]);

  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

  const isValid = (b, r, c, num) => {
    for (let i = 0; i < size; i++) {
      if (b[r][i] === num || b[i][c] === num) return false;
    }

    const boxRow = Math.floor(r / subRows) * subRows;
    const boxCol = Math.floor(c / subCols) * subCols;

    for (let i = 0; i < subRows; i++) {
      for (let j = 0; j < subCols; j++) {
        if (b[boxRow + i][boxCol + j] === num) return false;
      }
    }

    return true;
  };

  const generateFullBoard = () => {
    const b = Array(size).fill().map(() => Array(size).fill(0));

    const fill = () => {
      for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
          if (b[r][c] === 0) {
            for (let num of shuffle([...Array(size).keys()].map(n => n + 1))) {
              if (isValid(b, r, c, num)) {
                b[r][c] = num;
                if (fill()) return true;
                b[r][c] = 0;
              }
            }
            return false;
          }
        }
      }
      return true;
    };

    fill();
    return b;
  };

  const removeCells = (full) => {
    let puzzle = full.map(r => [...r]);
    let removeCount = size === 9 ? size * size - 29 : Math.floor(size * size / 2);

    while (removeCount > 0) {
      let r = Math.floor(Math.random() * size);
      let c = Math.floor(Math.random() * size);
      if (puzzle[r][c] !== 0) {
        puzzle[r][c] = 0;
        removeCount--;
      }
    }

    return puzzle;
  };

  const newGame = () => {
    const full = generateFullBoard();
    const puzzle = removeCells(full);

    setBoard(puzzle.map(r => [...r]));
    setSolution(full);
    setFixed(puzzle.map(r => r.map(c => c !== 0)));
    setTime(0);
    setFinished(false);
  };

  const resetGame = () => {
    setBoard(solution.map((row, i) =>
      row.map((val, j) => (fixed[i][j] ? val : 0))
    ));
    setTime(0);
    setFinished(false);
  };

  const isValidMove = (b, r, c, num) => {
    if (num === 0) return true;

    for (let i = 0; i < size; i++) {
      if (i !== c && b[r][i] === num) return false;
      if (i !== r && b[i][c] === num) return false;
    }

    const boxRow = Math.floor(r / subRows) * subRows;
    const boxCol = Math.floor(c / subCols) * subCols;

    for (let i = 0; i < subRows; i++) {
      for (let j = 0; j < subCols; j++) {
        let rr = boxRow + i;
        let cc = boxCol + j;
        if ((rr !== r || cc !== c) && b[rr][cc] === num) return false;
      }
    }

    return true;
  };

  const handleChange = (r, c, val) => {
    if (fixed[r][c] || finished) return;

    if (val === "") val = 0;
    else val = parseInt(val);

    if (val < 0 || val > maxNum || isNaN(val)) return;

    const newBoard = board.map(row => [...row]);
    newBoard[r][c] = val;

    setBoard(newBoard);
    checkComplete(newBoard);
  };

  const checkComplete = (b) => {
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (b[r][c] === 0 || !isValidMove(b, r, c, b[r][c])) return;
      }
    }
    setFinished(true);
  };

  return (
    <SudokuContext.Provider value={{
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
    }}>
      {children}
    </SudokuContext.Provider>
  );
}