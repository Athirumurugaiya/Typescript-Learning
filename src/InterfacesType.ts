interface Rectangle {
  heights: number;
  width: number;
}

const rectangle: Rectangle = {
  heights: 10,
  width: 20,
};

console.log(rectangle);

//Extended Interfaces

interface colouredRectangle extends Rectangle {
  color: string;
}

const ColouredRectangle: colouredRectangle = {
  heights: 10,
  width: 20,
  color: "red",
};
