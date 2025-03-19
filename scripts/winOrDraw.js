const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


const checkWinner = () => {
    for (combo of winningCombos) {
        const [a, b, c] = combo;
        const valueA = boardState[a];
        const valueB = boardState[b];
        const valueC = boardState[c];

        if (valueA && valueA === valueB && valueA === valueC) {
            caption.innerHTML = `<p class="mb-4 winky-sans text-amber-900 text-2xl">🎉 Player ${valueA === 'X' ? '1' : '2'} wins!</p>`;
            
            return true;
        }
    }

    return false;
}