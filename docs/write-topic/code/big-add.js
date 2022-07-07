function bigAdd(a, b) {
  a = String(a);
  b = String(b);
  const maxLen = Math.max(a.length, b.length);
  //长度短的前面补0
  a = a.padStart(maxLen, 0);
  b = b.padStart(maxLen, 0);
  let sum = "";
  let val = 0;
  let f = 0; //进位
  let i = maxLen - 1;
  while (i >= 0) {
    val = parseInt(a[i]) + parseInt(b[i]) + f;
    f = (val / 10) | 0;
    sum = (val % 10) + sum;
    i--;
  }
  //如果最后还需要进一位
  if (f !== 0) {
    sum = "" + f + sum;
  }
  return sum;
}
let a = "9007199254740991";
let b = "1234567899999999999";

console.log(bigAdd(a, b));
