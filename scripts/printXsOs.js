const xsOsBoard = document.getElementById('xs-os-board');
const headers = xsOsBoard.getElementsByTagName('th');

let playerOneTurn = true;

[...headers].forEach(header => {
    header.addEventListener("click", () => {
        if(header.innerHTML.trim() !== "") return;

        if (playerOneTurn) {
            header.innerHTML = "<p class='winky-sans text-amber-900 font-medium text-6xl'>&Cross;</p>"

            playerOneTurn = false;
        } else {
            header.innerHTML += "<p class='winky-sans text-amber-900 font-medium text-6xl'>&#8413;</p>"

            playerOneTurn = true;
        }
    });
});