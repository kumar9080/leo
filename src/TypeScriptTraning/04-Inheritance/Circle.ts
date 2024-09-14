import { Shape } from "./Shape";

export class Circle extends Shape{
    private _radius: number;

    constructor(theX:number, theY:number ,radii: number){
        super(theX, theY)
        this._radius = radii;
    }

    public getRadius(): number{
        return this._radius;
    }

    public setRadius(radii: number){
        this._radius = radii;
    }

    getInfo():string {
        return super.getInfo() + `, Radius = ${this._radius}`;
    }
}