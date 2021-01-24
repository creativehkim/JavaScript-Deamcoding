'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2]; // more common way

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // first index
console.log(fruits[fruits.length - 1]); // last index

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach - 배열안에 들어있는 value 들마다 내가 전달한 함수를 출력
fruits.forEach((fruit, index) => console.log(fruit, index));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('🍋');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
console.log(fruits);

// NOTE: shift, unshift are slower than pop, push
// -> adding to the end which is empty is easier

// splice: remove an item by index position
fruits.push('🍓', '🍑', '🍒');
console.log(fruits);
fruits.splice(1, 1); //(index, the number of items)
console.log(fruits);
fruits.splice(1, 1, '🍉', '🥑');
console.log(fruits);

// combine two arrays
const fruits2 = ['🍍', '🍇'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍋')); // -1: there's no such item in the array
console.log(fruits.indexOf('🍉')); // 1
console.log(fruits.indexOf('🥥')); // -1

// includes
console.log(fruits.includes('🥝')); // false
console.log(fruits.includes('🍍')); // false

// lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎'));
