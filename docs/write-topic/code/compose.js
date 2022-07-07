function compose(...args) {
  return function (val) {
    let i = args.length - 1;
    while (i >= 0) {
      val = args[i](val);
      i--;
    }
    return val;
  };
}
//reduce实现
function compose2(...args) {
  return function (val) {
    return args.reduce((pre, cur) => cur(pre), val);
  };
}

// 用法如下:
function fn1(x) {
  return x + 1;
}
function fn2(x) {
  return x + 2;
}
function fn3(x) {
  return x + 3;
}
function fn4(x) {
  return x + 4;
}
const a = compose2(fn1, fn2, fn3, fn4);
console.log(a(1)); // 1+4+3+2+1=11
