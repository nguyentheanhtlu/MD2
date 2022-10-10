"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name, scoreMath, scoreEL, scoreLite) {
        this.name = name;
        this.scoreEL = scoreEL;
        this.scoreLite = scoreLite;
        this.scoreMath = scoreMath;
    }
    Student.prototype.getScoreMath = function () {
        return this.scoreMath;
    };
    Student.prototype.getScoreEL = function () {
        return this.scoreEL;
    };
    Student.prototype.getScoreLite = function () {
        return this.scoreLite;
    };
    Student.prototype.getRank = function () {
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
    return Student;
}());
exports.Student = Student;
