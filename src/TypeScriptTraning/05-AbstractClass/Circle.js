"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    constructor(theX, theY, theRadius) {
        super(theX, theY);
        this._radius = theRadius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
    getInfo() {
        return super.getInfo() + ` Radius = ${this.radius}`;
    }
    calculateArea() {
        let circleArea = Math.PI * Math.pow(this._radius, 2);
        return circleArea;
    }
}
exports.Circle = Circle;
