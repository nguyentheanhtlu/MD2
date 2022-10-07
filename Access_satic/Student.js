"use strict";
exports.__esModule = true;
exports.student = void 0;
var student = /** @class */ (function () {
    function student(name, scoreMath, scoreEL, scoreLite) {
        this.name = name;
        this.scoreEL = scoreEL;
        this.scoreLite = scoreLite;
        this.scoreMath = scoreMath;
    }
    student.prototype.getScoreMath = function () {
        return this.scoreMath;
    };
    student.prototype.getScoreEL = function () {
        return this.getScoreEL();
    };
    student.prototype.getScoreLite = function () {
        return this.getScoreLite();
    };
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
