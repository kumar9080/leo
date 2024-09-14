"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    constructor(theX, theY, radii) {
        super(theX, theY);
        this._radius = radii;
    }
    getRadius() {
        return this._radius;
    }
    setRadius(radii) {
        this._radius = radii;
    }
    getInfo() {
        return super.getInfo() + `, Radius = ${this._radius}`;
    }
}
exports.Circle = Circle;
