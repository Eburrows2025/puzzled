
const playButton = document.getElementById("play-button");
const backButton = document.getElementById("back-button");
const guessInput = document.getElementById("guess-input");
const submitGuess = document.getElementById("submit-guess");
const feedback = document.getElementById("feedback");
const puzzleContainer = document.getElementById("puzzle-container");

let streak = localStorage.getItem("puzzled_streak") || 0;
let tries = localStorage.getItem("puzzled_tries") || 0;
const answer = "envelope";

playButton.onclick = () => {
  document.getElementById("lobby-screen").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");
};

submitGuess.onclick = () => {
  const guess = guessInput.value.trim().toLowerCase();
  tries++;
  if (guess === answer) {
    feedback.textContent = "Correct!";
    streak++;
    localStorage.setItem("puzzled_streak", streak);
    localStorage.setItem("puzzled_tries", tries);
    setTimeout(() => {
      document.getElementById("game-screen").classList.add("hidden");
      document.getElementById("stats-screen").classList.remove("hidden");
      document.getElementById("streak").textContent = streak;
      document.getElementById("tries").textContent = tries;
    }, 1000);
  } else {
    feedback.textContent = "Try again!";
    localStorage.setItem("puzzled_tries", tries);
  }
};

backButton.onclick = () => {
  document.getElementById("stats-screen").classList.add("hidden");
  document.getElementById("lobby-screen").classList.remove("hidden");
};
