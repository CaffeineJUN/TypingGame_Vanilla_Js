console.log(window);

// single element
// const form = document.getElementById('todo-form');
const form = document.querySelector("#todo-form");
console.log(form);

// multiple element
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

