document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("currentYear");
  const currentYear = new Date().getFullYear();

  yearSpan.textContent = currentYear;

  // redirection
  setTimeout(function () {
    window.location.href = "https://discord.gg/mcnAf8eSZ8";
  }, 1200);
});
