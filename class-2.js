class Counter {
  constructor(runEvery5Times) {
    this.counter = 0;
    this.callback = runEvery5Times;
  }

  increase() {
    // function in class - ho need to use 'function'
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      // console.log('Yo!'); // class 내에 바로 리턴값을 쓰는 것은 좋지 않음
      // 콜백함수쓰기
      this.callback && this.callback(this.counter);
    }
  }
}
function printSomething(num) {
  console.log(`Yo! + ${num}`);
}
function alertNum(num) {
  alert(`Yo! + ${num}`);
}

const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);

printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();

alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
