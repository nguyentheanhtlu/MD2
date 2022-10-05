var Staff = /** @class */ (function () {
    function Staff(name, email, age) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    Staff.prototype.getName = function () {
        return this.name;
    };
    Staff.prototype.getEmail = function () {
        return this.email;
    };
    Staff.prototype.getAge = function () {
        return this.age;
    };
    Staff.prototype.setName = function (name) {
        this.name = name;
    };
    Staff.prototype.setEmail = function (email) {
        this.email = email;
    };
    Staff.prototype.setAge = function (age) {
        this.age = age;
    };
    return Staff;
}());
var staff = new Staff('Staff1', "staff@gmail.com", 20);
var nameStaff = staff.getName();
console.log(nameStaff);
staff.setName('Staff2');
var currentNameStaff = staff.getName();
console.log(currentNameStaff);
