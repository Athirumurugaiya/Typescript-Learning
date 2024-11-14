interface Persons {
  name: string;
  age: number;
}
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(per: Persons, property: keyof Persons) {
  console.log(`Printing person property ${property}: "${per[property]}"`);
}
let persons = {
  name: "Max",
  age: 27,
};
printPersonProperty(persons, "age"); // Printing person property name: "Max"
