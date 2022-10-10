export class Employee{
    surname : string;
    name :string;
    date : string;
    address: string;
    job : string;
    constructor(surname : string,
               name : string,
               date : string,
               address : string,
               job : string) {
        this.address=address;
        this.job=job;
        this.date= date;
        this.name=name;
        this.surname=surname;
    }
    setAddress(address){
        this.address= address;
    }
    setJob(job){
        this.job=job;
    }
    setData(date){
        this.date = date;
    }
    setName(name){
        this.name=name;
    }
    setSurname(surname){
        this.surname=surname;
    }
}