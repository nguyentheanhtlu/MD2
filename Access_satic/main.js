"use strict";
exports.__esModule = true;
var StudentManager_1 = require("./StudentManager");
var Student_1 = require("./Student");
var student1 = new Student_1.Student('trung', 8, 9, 7);
var student2 = new Student_1.Student('yen', 8, 9, 10);
var studentManager = new StudentManager_1.StudentManager();
studentManager.add(student1);
studentManager.add(student2);
console.log(studentManager.count());
