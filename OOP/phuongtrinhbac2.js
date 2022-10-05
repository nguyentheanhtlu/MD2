class  QuadraticEquation{
    a;
    b;
    c;
    constructor(a,b,c) {
        this.a=a;
        this.b=b;
        this.c=c;
    }
    getDiscriminant(){
       return ((this.b*this.b)-(4*this.a*this.c));
    }
    getNumber(){
        if (this.getDiscriminant()>0){
            let x1 = (-this.b + Math.pow(this.getDiscriminant(),0.5))/ (2*this.a);
            let x2 = (-this.b - Math.pow(this.getDiscriminant(),0.5))/ (2*this.a);
            return (x1+' '+x2);
        }
        else if(this.getDiscriminant()===0){
            let x3 = (-this.b)/ (2*this.a);
            return x3;
        }
        else {
            return  ('The equation has no roots');
        }

    }
}

let number = new QuadraticEquation(1,-5,4);
console.log(number.getNumber());


