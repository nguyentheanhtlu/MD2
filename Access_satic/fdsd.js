"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.student = void 0;
var student = /** @class */ (function () {
    function student(name, scoreMath, scoreEL, scoreLite) {
        this.name = name;
        this.scoreEL = scoreEL;
        this.scoreLite = scoreLite;
        this.scoreMath = scoreMath;
    }
    student.prototype.getRank = function () {
        var arg = ((this.scoreMath + this.scoreEL + this.scoreLite) / 3);
        if (arg >= 8) {
            return 'loai gioi';
        }
        else if (arg >= 6) {
            return 'kha';
        }
        else {
            return 'tb';
        }
    };
    return student;
}());
exports.student = student;
