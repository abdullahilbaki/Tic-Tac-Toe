const showWinPopup = (winner) => {
  const playerText = winner === "X" ? "1 (X)" : "2 (O)";
  caption.innerHTML = `<p class="mb-4 winky-sans text-amber-900 text-2xl">🎉 Player ${playerText} wins!</p>`;

  Swal.fire({
    title: `🎉 Player ${playerText} wins!`,
    text: "Do you want to play again?",
    icon: "success",
    showCancelButton: true,
    confirmButtonText: "Yes! 🎮",
    cancelButtonText: "No, thanks",
    confirmButtonColor: "#f59e0b",
    cancelButtonColor: "#d33",
    background: "#fde68a",
    color: "#78350f",
    customClass: {
      popup: "winky-sans",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      location.reload();
    } else {
      Swal.fire({
        title: "👋 Alright!",
        text: "Thanks for playing!",
        icon: "info",
        confirmButtonText: "Bye 👋",
        confirmButtonColor: "#f59e0b",
        background: "#fef3c7",
        color: "#78350f",
        customClass: {
          popup: "winky-sans",
        },
      });
    }
  });
};

const showDrawPopup = () => {
  caption.innerHTML = `<p class="mb-4 winky-sans text-amber-900 text-2xl">🤝 It's a draw!</p>`;
  Swal.fire({
    title: "🤝 It's a draw!",
    text: "Nobody loses... or wins. Play again?",
    icon: "info",
    confirmButtonText: "Let's go!",
    showCancelButton: true,
    customClass: {
      popup: "winky-sans",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      location.reload();
    } else {
      Swal.fire({
        title: "👋 Alright!",
        text: "Thanks for playing!",
        icon: "info",
        confirmButtonText: "Bye 👋",
        confirmButtonColor: "#f59e0b",
        background: "#fef3c7",
        color: "#78350f",
        customClass: {
          popup: "winky-sans",
        },
      });
    }
  });
};
