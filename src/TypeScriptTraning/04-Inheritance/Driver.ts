import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let myShape = new Shape(4,5);
console.log(myShape.getInfo());

let myCircle = new Circle(7, 9, 3);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(7, 9 , 2 , 6);
console.log(myRectangle.getInfo());