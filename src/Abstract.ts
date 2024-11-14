class AbstractSample {
  public testMethod() {
    console.log("test method");
  }
}
class AbstractSample2 extends AbstractSample {
  public override testMethod(): void {
    console.log("test method One");
  }
}

var asd = new AbstractSample2();

asd.testMethod();

abstract class AbstractSample3 {
  public abstract testmethod(): number;
}

class AbstractSample4 implements AbstractSample3 {
  public testmethod(): number {
    throw new Error("Method not implemented.");
  }
}
