const xsOsBoard = document.getElementById('xs-os-board');
const headers = xsOsBoard.getElementsByTagName('th');
const caption = document.createElement("caption");

let boardState = Array(9).fill("");
let playerOneTurn = true;
let gameOver = false;

caption.innerHTML = `<p class="mb-4 winky-sans text-amber-900 text-2xl">Player 1 to move: &#9932;</p>`;
xsOsBoard.prepend(caption);


[...headers].forEach((header, index) => {
    header.addEventListener("click", () => {
        if (boardState[index] !== "" || gameOver) return;

        if (playerOneTurn) {
            header.innerHTML = "<p class='winky-sans text-amber-900 font-medium text-6xl'>&Cross;</p>"
            boardState[index] = "X";

            if (!checkWinner()) {
                caption.innerHTML = `<p class="mb-4 winky-sans text-amber-900 text-2xl">Player 2 to move: 0</p>`;
                xsOsBoard.prepend(caption);
                playerOneTurn = false;
            } else {
                gameOver = true;
            }
        } else {
            header.innerHTML = "<p class='winky-sans text-amber-900 font-medium text-6xl'>&#8413;</p>"
            boardState[index] = "O";

            if (!checkWinner()) {
                caption.innerHTML = `<p class="mb-4 winky-sans text-amber-900 text-2xl">Player 1 to move: &#9932;</p>`;
                xsOsBoard.prepend(caption);
                playerOneTurn = true;
            } else {
                gameOver = true;
            }
        }

        if (boardState.every(cell => cell !== "") && !checkWinner()) {
            caption.innerHTML = `<p class="mb-4 winky-sans text-amber-900 text-2xl">🤝 It's a draw!</p>`;
            xsOsBoard.prepend(caption);
            gameOver = true;

            Swal.fire({
                title: '🤝 It\'s a draw!',
                text: 'Nobody loses... or wins. Play again?',
                icon: 'info',
                confirmButtonText: 'Let\'s go!',
                showCancelButton: true,
                customClass: {
                    popup: 'winky-sans'
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    location.reload(); 
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
        }

        console.log(boardState);
    });
});

