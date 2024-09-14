import { Shape } from "./Shape";

export class Rectangle extends Shape{
    private _width: number;
    private _length: number;

    constructor(theX: number, theyY:number, theWidth: number, theLength: number){
        super(theX,theyY)
        this._width = theWidth;
        this._length = theLength;
    }

    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }

    public get length(): number {
        return this._length;
    }
    public set length(value: number) {
        this._length = value;
    }

    calculateArea(): number {
        let area = this._length * this._width;
        return area;
    }
}