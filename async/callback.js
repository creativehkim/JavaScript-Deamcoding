'use strict';

// JavaScript is synchronous.
// Execute the code block in order after hoisting.
// hoisting: var, function declaration
console.log('1'); // synchronous
setTimeout(() => console.log('2'), 1000); // asynchronous
console.log('3'); // synchronous

// Synchronous callback
function printImmediately(print) {
  print();
} // this function declaration is hoisted(to the top)

printImmediately(() => console.log('hello')); // synchronous

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
} // this function declaration is also hoisted(to the top)

printWithDelay(() => console.log('async callback'), 2000); // asynchronous

//Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    });
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(user, (userWithRole) => {
      alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
    }),
      (error) => {
        console.log(error);
      };
  },
  (error) => {
    cconsole.log(error);
  }
);
