export class Employee {

    name:string;
    gender: string;
    date : string;
    email: string;
    phone: number;
    constructor(name:string,
    gender: string,
    date : string,
    email: string,
    phone: number) {
        this.date=date;
        this.email=email;
        this.gender=gender;
        this.name=name;
        this.phone=phone;
    }
    getName():string{
       return this.name;
    }
}