class Staff{
    name : string;
    email : string;
    age : number;
    constructor(name:string
                ,email:string
                ,
                age:number) {
        this.name=name;
        this.age=age;
        this.email=email;
    }
    getName():string{
        return this.name;
    }
    getEmail():string{
        return this.email;
    }
    getAge():number{
        return this.age
    }
    setName(name : string){
        this.name = name;
    }
    setEmail(email:string){
        this.email=email;
    }
    setAge(age : number){
        this.age=age;
    }
}
let staff = new Staff('Staff1',"staff@gmail.com",20)
let nameStaff = staff.getName();
console.log(nameStaff);
staff.setName('Staff2');
let currentNameStaff = staff.getName();


console.log(currentNameStaff);