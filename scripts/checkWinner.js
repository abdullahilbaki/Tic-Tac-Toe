const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinner = () => {
  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    const valueA = boardState[a];
    if (valueA && valueA === boardState[b] && valueA === boardState[c]) {
      return valueA;
    }
  }
  return null;
};
