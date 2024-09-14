"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rectangle_1 = require("./Rectangle");
const Circle_1 = require("./Circle");
let myCircle = new Circle_1.Circle(5, 10, 12);
console.log(`Circle Area = ` + myCircle.getInfo());
let myRectangle = new Rectangle_1.Rectangle(13, 11, 10, 20);
console.log(`Rectangle Area = ` + myRectangle.getInfo());
let theShapes = [];
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (let shape of theShapes) {
    console.log(shape.getInfo());
    console.log(shape.calculateArea());
}
