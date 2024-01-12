// Напиши скрипт створення і очищення колекції елементів.
//  Користувач вводить кількість елементів в input і натискає кнопку 
//  Створити, після чого рендериться колекція. Натисненням на кнопку 
//  Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число. 
// Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.
// 	•	Розміри найпершого <div> - 30px на 30px.
// 	•	Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// 	•	Всі елементи повинні мати випадковий колір фону у форматі HEX. 
//   Використовуй готову функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const saveBtn = document.querySelector('button[data-create]');
const closeBtn = document.querySelector('button[data-destroy]');
const jsInput = document.querySelector('.js-input');
const divCreated = document.querySelector('#boxes')
console.dir(divCreated);

closeBtn.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  jsInput.value = '';
  divCreated.textContent = '';
  step = 10;
}
let amount = 0;
saveBtn.addEventListener('click', handler2);
function handler2() {
  amount = jsInput.value;
  createBoxes(amount)
}
let step = 10;
function createBoxes(amount){
  for(let i = 1; i <= amount; i++, step+=10){
    const newDiv = document.createElement("div");
    newDiv.style.background = getRandomHexColor()
    newDiv.style.display = "flex";
    newDiv.style.width = `${20+step}px`
    newDiv.style.height = `${20+step}px`
    divCreated.append(newDiv)
  }
}