let aiLevels = [];
let currentUser = null;

const startBtn = document.getElementById("startBtn");
const launchBtn = document.getElementById("launchBtn");
const resetBtn = document.getElementById("resetBtn");

const loginBtn = document.getElementById("loginBtn");
const usernameInput = document.getElementById("username");

const statusText = document.getElementById("status");
const timeDisplay = document.getElementById("time");

const lights = document.querySelectorAll(".light");

const playerCar = document.getElementById("playerCar");
const aiCar = document.getElementById("aiCar");

let startTime;
let greenLight = false;
let gameActive = false;

/* FETCH JSON DATA */
fetch("scripts/data.json")
  .then(res => res.json())
  .then(data => {
    aiLevels = data.aiLevels;
    console.log("AI Levels Loaded:", aiLevels);
  });

/* LOGIN */
loginBtn.addEventListener("click", () => {
  const name = usernameInput.value;

  if (!name) {
    alert("Enter a name");
    return;
  }

  currentUser = name;
  sessionStorage.setItem("user", name);

  statusText.textContent = `Welcome ${name}`;
});

/* LOAD SESSION */
const savedUser = sessionStorage.getItem("user");
if (savedUser) {
  currentUser = savedUser;
  statusText.textContent = `Welcome back ${savedUser}`;
}

/* EVENTS */
startBtn.addEventListener("click", startGame);
launchBtn.addEventListener("click", handleLaunch);
resetBtn.addEventListener("click", resetGame);

/* START GAME */
function startGame() {
  if (!currentUser) {
    alert("Login first!");
    return;
  }

  resetGame();
  gameActive = true;
  launchBtn.disabled = false;

  const delay = Math.random() * 2000 + 1000;

  setTimeout(() => lights[2].classList.add("active"), delay);
  setTimeout(() => lights[3].classList.add("active"), delay + 500);
  setTimeout(() => lights[4].classList.add("active"), delay + 1000);

  setTimeout(() => {
    lights[5].classList.add("active");
    greenLight = true;
    startTime = performance.now();
    statusText.textContent = "GO!!!";
    aiLaunch();
  }, delay + 1500);
}

/* PLAYER */
function handleLaunch() {
  if (!gameActive) return;

  if (!greenLight) {
    statusText.textContent = "RED LIGHT!";
    return;
  }

  const reaction = (performance.now() - startTime) / 1000;
  timeDisplay.textContent = reaction.toFixed(3);

  launchCar(playerCar, reaction);
  checkWinner(reaction);

  /* JSON OUTPUT */
  const raceData = {
    user: currentUser,
    reactionTime: reaction,
    time: new Date().toISOString()
  };

  console.log("Race Data:", JSON.stringify(raceData, null, 2));

  gameActive = false;
}

/* AI */
function aiLaunch() {
  const level = aiLevels[1] || { min: 0.15, max: 0.3 };

  const aiReaction =
    Math.random() * (level.max - level.min) + level.min;

  setTimeout(() => {
    launchCar(aiCar, aiReaction);
  }, aiReaction * 1000);
}

/* MOVE CAR */
function launchCar(car, reaction) {
  car.classList.remove("fast", "perfect");

  if (reaction < 0.1) car.classList.add("perfect");
  else if (reaction < 0.2) car.classList.add("fast");

  car.style.transform = "translateX(800px)";
}

/* RESULT */
function checkWinner(playerReaction) {
  const aiReaction = Math.random() * 0.3 + 0.1;

  setTimeout(() => {
    if (playerReaction < aiReaction) {
      statusText.textContent = "YOU WIN!";
    } else {
      statusText.textContent = "YOU LOSE!";
    }
  }, 1500);
}

/* RESET */
function resetGame() {
  lights.forEach(l => l.classList.remove("active"));
  playerCar.style.transform = "translateX(0)";
  aiCar.style.transform = "translateX(0)";
  launchBtn.disabled = true;
  greenLight = false;
  gameActive = false;
  statusText.textContent = "Ready";
  timeDisplay.textContent = "0.000";
}

/* CONSOLE HINT */
console.log("💡 Hint: Enter a username to play!");
