// async & await
// clear style of using promise :)

// 1. async

// using promise
// function fetchUser() {
//   // do network request in 10 secs...
//   // return 'ellie'; -> 동기 처리가 되기 때문에 이 함수가 처리되기 전에는 아무것도 실행되지 않는 문제가 발생
//   return new Promise((resolve, reject) => {
//     resolve('ellie'); // resolve 나 reject를 호출하지 않고 바로 리턴해버리면 pending 상태가 됨
//   });
// }

// simpler solution using async
async function fetchUser() {
  return 'ellie';
} // async라는 키워드를 쓰면 promise로 만들어줌 (*synthetic sugar)

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await (async가 붙은 함수 안에서만 쓸 수 있음)
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return '🍎';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}

// a similar callback hell

// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }

// make it better using async and await
async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  // if each promise is executed instead of executing getApple/getBanana directely, they both execute at the same time(saves time)
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
} // 이렇게 병렬적으로 수행하는 경우에는 이렇게 쓰지 않고 밑의 방법을 쓴다.(3)

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then(
    (fruits) => fruits.join(' + ') // 배열을 스트링으로 전달
  );
}
pickAllFruits().then(console.log);

// 어떤 것이든 상관없이 먼저 실행되는 값을 리턴
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
