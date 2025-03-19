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
            caption.innerHTML = `<p class="mb-4 winky-sans text-amber-900 text-2xl">🎉 Player ${valueA === 'X' ? '1 (X)' : '2 (O)'} wins!</p>`;

            Swal.fire({
                title: `🎉 Player ${valueA === 'X' ? '1 (X)' : '2 (O)'} wins!`,
                text: 'Do you want to play again?',
                icon: 'success',
                showCancelButton: true,
                confirmButtonText: 'Yes! 🎮',
                cancelButtonText: 'No, thanks',
                confirmButtonColor: '#f59e0b',
                cancelButtonColor: '#d33',
                background: '#fde68a',
                color: '#78350f',
                customClass: {
                    popup: 'winky-sans'
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    location.reload(); // Restart game
                } else if (result.isDismissed) {
                    Swal.fire({
                        title: '👋 Alright!',
                        text: 'Thanks for playing!',
                        icon: 'info',
                        confirmButtonText: 'Bye 👋',
                        confirmButtonColor: '#f59e0b',
                        background: '#fef3c7',
                        color: '#78350f',
                        customClass: {
                            popup: 'winky-sans'
                        }
                    });
                }
            });



            return true;
        }
    }

    return false;
}