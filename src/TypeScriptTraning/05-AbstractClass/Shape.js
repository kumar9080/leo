"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    constructor(theX, theY) {
        this._X = theX;
        this._Y = theY;
    }
    get X() {
        return this._X;
    }
    set X(value) {
        this._X = value;
    }
    get Y() {
        return this._Y;
    }
    set Y(value) {
        this._Y = value;
    }
    getInfo() {
        return `X = ${this._X} , Y = ${this._Y}`;
    }
}
exports.Shape = Shape;
