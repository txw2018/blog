const obj = {
  a: {
    b: 1,
    c: 2,
    d: { e: 5 },
  },

  b: [1, 3, { a: 2, b: 3 }],
  c: 3,
};
const isObject = (val) => {
  return typeof val === "object" && val !== null;
};

const flatten = (data) => {
  const stack = [];
  const map = {};
  function dfs(obj) {
    Object.keys(obj).forEach((key) => {
      stack.push(key);
      if (isObject(obj[key])) {
        dfs(obj[key]);
      } else {
        const newKey = stack.join(".").replace(/.(\d+)/g, (_, $1) => `[${$1}]`);
        map[newKey] = obj[key];
      }
      stack.pop(key);
    });
  }
  dfs(data);
  return map;
};
