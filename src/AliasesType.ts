type caryear = number;
type carType = string;
type carModel = string;
type car = {
  year: caryear;
  type: carType;
  model: carModel;
};

const CarYear: caryear = 2001;
const CarType: carType = "Toyota";
const CarModel: carModel = "Corolla";

const Car: car = {
  year: CarYear,
  type: CarType,
  model: CarModel,
};

console.log(Car.model);
console.log(Car.type);
console.log(Car.year);
