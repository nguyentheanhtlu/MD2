import {Circle} from "./Circle";

class Cylinder extends Circle{
    height : number
     constructor(radius :number,
                 color : string,
                 height : number,
                 ) {
        super(radius,color);
        this.height=height;
    }
    getVolume():number{
        return super.getArea()*this.height;
    }
}
let cylinder1 = new Cylinder(2,"green",8);
console.log(cylinder1.getVolume());