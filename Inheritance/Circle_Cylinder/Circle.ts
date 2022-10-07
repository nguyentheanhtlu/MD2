export class Circle{
    public radius:number;
    public color:string;
    constructor( radius :number,
                 color : string) {
        this.radius=radius;
        this.color=color;
    }
    getRadius(){
        return this.radius;
    }
    getColor(){
        return this.color;
    }
    setRadius(radius:number):void{
        this.radius = radius;
    }
    setColor(color:string):void{
        this.color=color;
    }
    getArea():number{
        return this.radius*this.radius*Math.PI;
    }

}