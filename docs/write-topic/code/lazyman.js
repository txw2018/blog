class _LazyMan {
  constructor(name) {
    this.name = name;
    this.tasks = [];
    this.tasks.push(() => {
      console.log("Hi This is " + this.name);
      this.next();
    });
    setTimeout(() => {
      this.next();
    });
  }
  next() {
    const task = this.tasks.shift();
    task?.();
  }
  sleep(time) {
    this.tasks.push(() => {
      setTimeout(() => {
        this.next();
      }, time * 1000);
    });
    return this;
  }
  eat(food) {
    this.tasks.push(() => {
      console.log("Eat " + food);
      this.next();
    });
    return this;
  }
  sleepFirst(time) {
    this.tasks.unshift(() => {
      setTimeout(() => {
        this.next();
      }, time * 1000);
    });
    return this;
  }
}

function LazyMan(name) {
  return new _LazyMan(name);
}

LazyMan("Hank").sleep(5).eat("supper").sleepFirst(5);
