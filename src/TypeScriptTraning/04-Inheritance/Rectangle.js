"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.Shape {
    constructor(theX, theY, width, length) {
        super(theX, theY);
        this._width = width;
        this._length = length;
    }
    getWidthProp() {
        return this._width;
    }
    setWidth(width) {
        return this._width = width;
    }
    getLengthProp() {
        return this._length;
    }
    setLengthProp(length) {
        return this._length = length;
    }
    getInfo() {
        return super.getInfo() + `, Length = ${this._length} , Width = ${this._width}`;
    }
}
exports.Rectangle = Rectangle;
