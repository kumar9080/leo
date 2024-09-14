"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    constructor(theX, theY) {
        this._theyX = theX;
        this._theyY = theY;
    }
    getXParam() {
        return this._theyX;
    }
    setXParam(theX) {
        this._theyX = theX;
    }
    getYParam() {
        return this._theyY;
    }
    setYParam(theY) {
        this._theyY = theY;
    }
    getInfo() {
        return `X = ${this._theyX}  Y = ${this._theyY}`;
    }
}
exports.Shape = Shape;
