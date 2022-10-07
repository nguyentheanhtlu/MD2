import {Shape} from "./Shape";

class Triangle extends Shape{
    side1 : number;
    side2 : number;
    side3 : number;
    constructor(name : string,
                color : string,
                side1 : number,
                side2 : number,
                side3 : number) {
        super(name,color);
        this.side1=side1;
        this.side2=side2;
        this.side3=side3;
    }
    getSide1(){
        return this.side1;
    }
    getSide2(){
        return this.side2;
    }
    getSide3(){
        return this.side3;
    }
    setSide1(side1){
        this.side1=side1;
    }
    setSide2(side2){
        this.side2 = side2;
    }
    setSide3(side3){
        this.side3 = side3;
    }
    getArea(){
        let p = ((this.side1+this.side2+this.side3)/2);
        let s = p*(p-this.side1)*(p-this.side2)*(p - this.side3);
        return Math.sqrt(s);
    }
    getPerimeter(){
        return this.side1+this.side2+this.side3;
    }

}
let tamgiac = new Triangle('hinhvuong','green',3,4,5);
console.log(tamgiac.getPerimeter());