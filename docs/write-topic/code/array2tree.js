const data = [
  { pid: 1, id: 2, name: "一级" },
  { pid: 2, id: 3, name: "二级" },
  { pid: 3, id: 4, name: "三级" },
  { pid: 4, id: 5, name: "四级" },
  { pid: 4, id: 6, name: "五级" },
  { pid: 4, id: 7, name: "六级" },
];
//方式一循环
const arr2tree = (arr) => {
  const map = {};
  const tree = [];
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    map[arr[i].id] = arr[i];
  }

  for (const key in map) {
    const val = map[key];
    if (val.pid === 1) {
      tree.push(val);
    } else {
      if (!map[val.pid].children) {
        map[val.pid].children = [];
      }
      map[val.pid].children.push(val);
    }
  }
  return tree;
};
console.log(arr2tree(data));
//方式二递归

const arr2tree2 = (arr) => {
  function r(pid) {
    return arr.filter((item) => {
      if (item.pid === pid) {
        item.children = r(item.pid);
        return true;
      }
    });
  }
  return r(1);
};
