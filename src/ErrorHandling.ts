function throwNumber() {
  throw 123;
}

try {
  throwNumber();
} catch (err) {
  console.log(err); // 123
}
    