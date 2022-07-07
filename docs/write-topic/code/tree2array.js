const tree = [
  {
    id: 1,
    text: "节点1",
    parentId: 0,
    children: [
      {
        id: 2,
        text: "节点1_1",
        parentId: 1,
      },
    ],
  },
];

const tree2arr = (tree) => {
  const arr = [];
  function r(tree) {
    tree.forEach((item) => {
      if (item.children) {
        r(item.children);
        delete item.children;
      }
      arr.push(item);
    });
  }
  r(tree);

  return arr;
};
console.log(tree2arr(tree));
