var carss: { type: string; model: number } = { type: "Ford", model: 2 };

carss.type = "Toyota";

// Type Inference
var car = { engine: "V8" };

car.engine = "V6";
//car.engine = 2; throws error as the types don't match.

//Optional
var cars: { type: string; model?: number } = { type: "Ford" };
cars.model = 1;

//indexed types
var nameAge: { [Index: string]: number } = {};
nameAge.Jack = 1;
