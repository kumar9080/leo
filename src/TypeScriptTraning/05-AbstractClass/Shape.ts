export abstract class Shape{
    private _X: number;
    private _Y: number;

    constructor(theX: number, theY:number){
        this._X = theX;
        this._Y = theY;
    }

    public get X(): number {
        return this._X;
    }
    public set X(value: number) {
        this._X = value;
    }

    public get Y(): number {
        return this._Y;
    }
    public set Y(value: number) {
        this._Y = value;
    }

    public getInfo(): string{
        return `X = ${this._X} , Y = ${this._Y}`;
    }

    abstract calculateArea(): number;
}