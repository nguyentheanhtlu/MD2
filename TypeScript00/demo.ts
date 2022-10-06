import {Employee} from "./QuanlithongtinNV";
import {EmployeeManager} from "./employeeManager";

let em = new Employee('ABC','male','01-01-01','abc@gmail.com',1234)
let em2 = new Employee('Khanh','male','01-01-01','abc@gmail.com',1234)
let emManager = new EmployeeManager()

emManager.addEmployee(em)
emManager.addEmployee(em2)
// console.log(emManager.showList());
emManager.deleteEmployee(0);
console.log(emManager.showList());