function printHello(): void {
  console.log("Hello");
}

function add(x: number, y: number): number {
  return x + y;
}

var a = add(2, 2);
console.log(a);

function Sub(x: number, y: number = 10): number {
  var c = x - y;

  return c;
}

console.log("" + Sub(200));

function mul(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}

console.log(mul(2, 3, 4, 5, 5, 6, 6, 4));
