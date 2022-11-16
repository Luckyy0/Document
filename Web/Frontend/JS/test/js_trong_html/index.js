let counter = 1;
let b = 0;

// alert(++a + ++a);
const SetCounter = function (x) {
  if (typeof x === "function") counter = x(counter);
  else counter = x;

  console.log(counter);
};

SetCounter((preCounter) => preCounter + 1);
SetCounter((preCounter) => preCounter + 1);
SetCounter((preCounter) => preCounter + 1);
const df = function (x) {
  SetCounter(x + 1);
  SetCounter(x + 1);
  SetCounter(x + 1);
};
df(1);
