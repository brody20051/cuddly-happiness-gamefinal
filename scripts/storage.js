export function saveBest(time) {
  localStorage.setItem("bestTime", time);
}

export function getBest() {
  return localStorage.getItem("bestTime");
}
