function task1(next) {
  setTimeout(() => {
    console.log(1);
    next();
  }, 1000);
}

function task2(next) {
  console.log(2);
  next();
}

function task3(next) {
  setTimeout(() => {
    console.log(3);
    next();
  }, 200);
}
//递归实现
function runTask(tasks) {
  function step(index) {
    if (index < tasks.length) {
      tasks[index](() => {
        step(index + 1);
      });
    }
  }
  step(0);
}
//promise实现
async function runTask2(tasks) {
  const len = tasks.length;
  for (const task of tasks) {
    await new Promise((reslove) => {
      task(reslove);
    });
  }
}
