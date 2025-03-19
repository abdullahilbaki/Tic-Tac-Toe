const playAgain = document.getElementById("play-again");

playAgain.addEventListener("click", () => {
    [...headers].forEach(header => {
        header.innerHTML = "";
    });

    boardState = Array(9).fill("");
    playerOneTurn = true;
    gameOver = false;

    caption.innerHTML = `<p class="mb-4 winky-sans text-amber-900 text-2xl">Player 1 to move: &#9932;</p>`;
    xsOsBoard.prepend(caption);

});