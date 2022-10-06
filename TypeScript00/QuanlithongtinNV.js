"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(name, gender, date, email, phone) {
        this.date = date;
        this.email = email;
        this.gender = gender;
        this.name = name;
        this.phone = phone;
    }
    Employee.prototype.getName = function () {
        return this.name;
    };
    return Employee;
}());
exports.Employee = Employee;
