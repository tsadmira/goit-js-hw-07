function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const background = document.querySelector("body");
const text = document.querySelector(".color");
const btn = document.querySelector(".change-color");

function handleClick() {
  const randomColor = getRandomHexColor();
  background.style.backgroundColor = `${randomColor}`;
  text.textContent = `${randomColor}`;
}

btn.addEventListener("click", handleClick);