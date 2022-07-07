const map = {
  red: "红色",
  green: "绿色",
  yellow: "黄色",
};
const task = (light, time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(map[light]);
      resolve();
    }, time * 1000);
  });
};

const runTasks = async () => {
  await task("red", 3);
  await task("green", 1);
  await task("yellow", 2);
  runTasks();
};

runTasks();
