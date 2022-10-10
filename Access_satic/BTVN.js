"use strict";
exports.__esModule = true;
exports.BTVN = void 0;
var BTVN = /** @class */ (function () {
    function BTVN() {
        this.arr1 = [];
        this.arr2 = [];
        this.arr3 = [];
        this.arr = [];
    }
    BTVN.prototype.add = function (student) {
        this.arr.push(student);
    };
    BTVN.prototype.count = function () {
        for (var i = 0; i < this.arr.length; i++) {
            var avg = ((this.arr[i].getScoreLite() + this.arr[i].getScoreMath() + this.arr[i].getScoreEL()) / 3);
            if (avg >= 8) {
                this.arr1.push(this.arr[i]);
            }
            else if (avg >= 6) {
                this.arr2.push(this.arr[i]);
            }
            else {
                this.arr3.push(this.arr[i]);
            }
        }
        return "arr1:".concat(this.arr1.length, ", arr2:").concat(this.arr2.length, ", arr3:").concat(this.arr3.length);
    };
    return BTVN;
}());
exports.BTVN = BTVN;
