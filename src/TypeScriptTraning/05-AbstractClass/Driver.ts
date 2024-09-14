import { Rectangle } from "./Rectangle";
import { Circle } from "./Circle";
import { Shape } from "./Shape";

let myCircle = new Circle(5, 10, 12);
console.log(`Circle Area = `+ myCircle.getInfo());

let myRectangle = new Rectangle(13,11,10,20);
console.log(`Rectangle Area = `+ myRectangle.getInfo());

let theShapes: Shape[] = [];
theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let shape of theShapes){
    console.log(shape.getInfo());
    console.log(shape.calculateArea());
}
