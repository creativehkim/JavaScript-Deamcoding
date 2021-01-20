// 1. Use strict
// added in ES 5
// use this for Vanila JavaScript.
'use strict';

// 2. Variable
// let (added in ES6)
let globalName = 'global name';
{
  let name = 'hyunji';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);
