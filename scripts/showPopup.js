const showWinPopup = (winner) => {
  const playerText = winner === "X" ? "1 (X)" : "2 (O)";

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
    customClass: { popup: "winky-sans" },
  }).then((result) => {
    if (result.isConfirmed) {
      location.reload();
    }
  });
};

const showDrawPopup = () => {
  Swal.fire({
    title: "🤝 It's a draw!",
    text: "Nobody loses... or wins. Play again?",
    icon: "info",
    showCancelButton: true,
    confirmButtonText: "Let's go!",
    cancelButtonText: "I'm done",
    confirmButtonColor: "#f59e0b",
    background: "#fde68a",
    color: "#78350f",
    customClass: { popup: "winky-sans" },
  }).then((result) => {
    if (result.isConfirmed) {
      location.reload();
    }
  });
};