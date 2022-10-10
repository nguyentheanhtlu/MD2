import {StudentManager} from "./StudentManager";
import {Student} from "./Student";

let student1 = new Student('trung',8,9,7);
let student2 = new Student('yen',8,9,10);

let studentManager = new StudentManager();
studentManager.add(student1);
studentManager.add(student2);
console.log(studentManager.count());