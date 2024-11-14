//Inheritance using implements

interface Shape {
  getArea: () => number;
}

class Rectangless implements Shape {
  public constructor(
    protected readonly widths: number,
    protected readonly height: number
  ) {}

  public getArea(): number {
    return this.widths * this.height;
  }
}

//Inheritance using extends
interface Shape {
  getArea: () => number;
}

class Rectangles implements Shape {
  public constructor(
    protected readonly widths: number,
    protected readonly height: number
  ) {}

  public getArea(): number {
    return this.widths * this.height;
  }
}

class Square extends Rectangless {
  public constructor(widths: number) {
    super(widths, widths);
  }

  // getArea gets inherited from Rectangle
}
