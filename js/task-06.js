// Напиши скрипт, який під час втрати фокусу на інпуті 
// (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// <input  type="text"  id="validation-input"  data-length="6"  
// 55placeholder="Please enter 6 symbols"/>
// 	•	Яка кількість символів повинна бути в інпуті, 
//     зазначається в його атрибуті data-length.
// 	•	Якщо введена правильна кількість символів, то border інпуту стає зеленим,
//     якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, 
// які ми вже додали у вихідні файли завдання.

const input = document.querySelector('#validation-input');

input.addEventListener('blur', handler);
function handler(evt){
    if(evt.currentTarget.value.length.toString() === input.getAttribute('data-length').toString()){
        input.classList.add('valid');
    } else {
        input.classList.add('invalid');
    }
}
