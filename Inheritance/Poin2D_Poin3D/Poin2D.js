"use strict";
exports.__esModule = true;
exports.Poin2D = void 0;
var Poin2D = /** @class */ (function () {
    function Poin2D(x, y) {
        this.x = x;
        this.y = y;
    }
    Poin2D.prototype.getX = function () {
        return this.x;
    };
    Poin2D.prototype.getY = function () {
        return this.y;
    };
    Poin2D.prototype.setX = function (x) {
        this.x = x;
    };
    Poin2D.prototype.setY = function (y) {
        this.y = y;
    };
    Poin2D.prototype.getXY = function () {
        return { x: this.x, y: this.y
        };
    };
    Poin2D.prototype.setXY = function (x, y) {
        this.x = x, this.y = y;
    };
    return Poin2D;
}());
exports.Poin2D = Poin2D;
