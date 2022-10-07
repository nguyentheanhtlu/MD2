"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var Poin2D_1 = require("./Poin2D");
var Poin3D = /** @class */ (function (_super) {
    __extends(Poin3D, _super);
    function Poin3D(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        return _this;
    }
    Poin3D.prototype.getZ = function () {
        return this.z;
    };
    Poin3D.prototype.setZ = function (z) {
        this.z = z;
    };
    Poin3D.prototype.getXYZ = function () {
        return __assign(__assign({}, _super.prototype.getXY.call(this)), { z: this.z });
    };
    Poin3D.prototype.setXYZ = function (x, y, z) {
        _super.prototype.setXY.call(this, x, y), this.z = z;
    };
    return Poin3D;
}(Poin2D_1.Poin2D));
var yen = new Poin3D(1, 6, 8);
console.log(yen.getXYZ());
