"use strict";
exports.__esModule = true;
exports.EmployeeManager = void 0;
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
        this.employeeArray = [];
    }
    EmployeeManager.prototype.showList = function () {
        return this.employeeArray;
    };
    EmployeeManager.prototype.addEmployee = function (employee) {
        this.employeeArray.push(employee);
    };
    EmployeeManager.prototype.deleteEmployee = function (index) {
        this.employeeArray.splice(index, 1);
    };
    return EmployeeManager;
}());
exports.EmployeeManager = EmployeeManager;
