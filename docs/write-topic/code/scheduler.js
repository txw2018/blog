const { resolve } = require("path");

class Scheduler {
  constructor(limit) {
    this.tasks = [];
    this.limit = limit;
  }
  next() {
    const task = this.tasks.shift();
    task?.();
  }
  add(time, msg) {
    this.tasks.push(() => {
      this.sleep(time).then(() => {
        console.log(msg);
        this.next();
      });
    });
  }
  sleep(time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  }
  start() {
    for (let i = 0; i < this.limit; i++) {
      this.next();
    }
  }
}
const scheduler = new Scheduler(2);
const addTask = (time, msg) => {
  scheduler.add(time, msg);
};
addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
scheduler.start();
