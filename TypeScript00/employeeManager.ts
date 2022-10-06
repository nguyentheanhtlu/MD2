import {Employee} from "./QuanlithongtinNV";

export class EmployeeManager{
     employeeArray: Employee[] = []
    constructor() {
    }

    showList(){
         return this.employeeArray;
    }
    addEmployee(employee :Employee){
        this.employeeArray.push(employee);
    }

    deleteEmployee(index){
         this.employeeArray.splice(index,1);
    }
}