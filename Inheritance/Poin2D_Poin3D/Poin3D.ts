import {Poin2D} from "./Poin2D";

class Poin3D extends Poin2D{
    z : number;
    constructor(x : number,
                y : number,
                z : number) {
        super(x ,y);
        this.z = z ;
    }
    getZ(): number{
        return this.z;
    }
    setZ(z){
        this.z=z;
    }
    getXYZ(): object {
        return {...super.getXY(), z : this.z}
    }
    setXYZ(x: number, y : number, z: number): void{
        super.setXY(x,y),this.z=z;
    }
}
let yen = new Poin3D(1,6,8);
console.log(yen.getXYZ());