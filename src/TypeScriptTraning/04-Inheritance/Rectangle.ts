import { Shape } from "./Shape"

export class Rectangle extends Shape{
    private _width:number;
    private _length:number;

    constructor(theX: number, theY: number, width:number, length: number){

        super(theX, theY);
        this._width = width;
        this._length = length;

    }

    public getWidthProp():number{
        return this._width;
    }

    public setWidth(width: number) {
        return this._width = width;
    }

    public getLengthProp():number{
        return this._length;
    }

    public setLengthProp(length: number) {
        return this._length = length;
    }

    public getInfo(): string {
        return super.getInfo() + `, Length = ${this._length} , Width = ${this._width}`;
    }
}