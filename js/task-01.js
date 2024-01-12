/* Number of categories: 3
Category: Animals.Elements: 4
Category: Products.Elements: 3
Category: Technologies.Elements: 5*/

const list = document.querySelector('#categories')
console.log(`Number of categories:${list.children.length}`);
const elements = document.querySelectorAll('.item')

const li = elements.forEach(element => {
    console.log(`Categories: ${element.firstElementChild.textContent} 
    Elements: ${element.lastElementChild.children.length}`);
});