"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.Shape {
    constructor(theX, theyY, theWidth, theLength) {
        super(theX, theyY);
        this._width = theWidth;
        this._length = theLength;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
    calculateArea() {
        let area = this._length * this._width;
        return area;
    }
}
exports.Rectangle = Rectangle;
