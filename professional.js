"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, weight, height, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    Professional.prototype.toString = function () {
        var newTostring = "Name:   ".concat(this.name, "  \n            Age:   ").concat(this.age, "  \n            Weight:   ").concat(this.weight, "  \n            Height:  ").concat(this.height, "\n            IsRetired:   ").concat(this.isRetired, "  \n            Nationality:   ").concat(this.nationality, "  \n            OscarNumber:  ").concat(this.oscarsNumber, "\n            Profession:   ").concat(this.profession);
        return newTostring;
    };
    return Professional;
}());
exports.Professional = Professional;
