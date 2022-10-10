import {Employee} from "./Employee";
export class EmployeeManager {
    employeeArray: Employee[] = [];
    constructor() {
    }
    showList(){
        return this.employeeArray;}
    addEmployee(employee :Employee){
        this.employeeArray.push(employee);
    }
    deleteEmployee(employee: Employee){
        let deleteE = this.find(employee);
        if (deleteE!==-1) {
            this.employeeArray.splice(deleteE, 1);
        }
    }
    find(employee: Employee): number {
        let pos = -1;
        this.employeeArray.forEach((item,index)=>{
            if (item===employee) {
                pos = index;
            }
        });
        return pos;
    }
    updateADD(employee : Employee){
        let update = this.find(employee);
        if ( update !== -1){
            this.employeeArray[update].setAddress('khanh');
        } else {
            console.log('k thay');
        }
    }
}