const xsOsBoard = document.getElementById("xs-os-board");
const headers = xsOsBoard.getElementsByTagName("th");
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
      header.innerHTML =
        "<p class='winky-sans text-amber-900 text-5xl'>&#9932;</p>";
      boardState[index] = "X";
    } else {
      header.innerHTML =
        "<p class='winky-sans text-amber-900 text-6xl'>&#2918;</p>";
      boardState[index] = "O";
    }

    setTimeout(() => {
      const winner = checkWinner();
      if (winner) {
        gameOver = true;
        showWinPopup(winner);
        return;
      }

      if (boardState.every((cell) => cell !== "")) {
        gameOver = true;
        showDrawPopup();
        return;
      }

      playerOneTurn = !playerOneTurn;
      caption.innerHTML = playerOneTurn
        ? `<p class="mb-4 winky-sans text-amber-900 text-2xl">Player 1 to move: &#9932;</p>`
        : `<p class="mb-4 winky-sans text-amber-900 text-2xl">Player 2 to move: &#2918;</p>`;
      xsOsBoard.prepend(caption);
    }, 50);

    console.log(boardState);
  });
});
