class Sample {
  names: string | undefined;
}

const person = new Sample();
person.names = "Jane";

console.log(person.names);

class Sample2 {
  public methodOne() {
    console.log("MethodOne");
  }
  public constructor() {
    console.log("constructor");
  }
}

const sam = new Sample2();
sam.methodOne();

class Sample3 {
  public methodOne() {
    console.log("MethodOne");
  }
  public constructor(name: string) {
    console.log("constructor");
  }
}

class Sample4 {
  public methodOne() {
    console.log("MethodOne");
  }
  public constructor(private name: string) {
    console.log("constructor");
  }
}
