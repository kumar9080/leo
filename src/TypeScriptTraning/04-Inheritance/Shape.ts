export class Shape {

    private _theyX: number;
    private _theyY: number;

    constructor(theX: number, theY: number){
        this._theyX = theX;
        this._theyY = theY;
    }

    public getXParam(): number{
        return this._theyX;
    }

    public setXParam(theX: number) {
        this._theyX = theX;
    }

    public getYParam() : number{
        return this._theyY;
    }

    public setYParam(theY: number){
        this._theyY = theY;
    }

    public getInfo(): string{
        return `X = ${this._theyX}  Y = ${this._theyY}`;
    }

}