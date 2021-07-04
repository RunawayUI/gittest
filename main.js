"use strict";

const obj = {
    name: "Anton",
    age: 19,
    isMarried: true
};

console.log(obj.name);

let arr = ['first.jpg', 'second.png', 5, {}, []];
console.log(arr[0]);

const category = 'toys';

//Интерполяция `` + ${...}
console.log(`https://someurl.com/${category}/5`);

const user = "Anton";

alert(`Привет, ${user}`);