//Partial
interface Point {
  x: number;
  y: number;
}

let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;

//Required
interface Point1 {
  x: number;
  y: number;
  model?: string;
}

let myCar: Required<Point1> = {
  x: 0,
  y: 0,
  model: "Toyota", // `Required` forces mileage to be defined
};

//Record's a shortcut to defining an object type with a specific key type and value type.

const nameAgeMap: Record<string, number> = {
  Alice: 21,
  Bob: 25,
};

//Omit removes keys from an object type.
interface Person {
  name: string;
  age: number;
  location: string;
}

const bob: Omit<Person, "age" | "location"> = {
  name: "",
  // `Omit` has removed age and location from the type and they can't be defined here
};
