"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var datepicker_component_1 = require('./datepicker.component');
var Md2Datepicker = (function () {
    function Md2Datepicker() {
        this.dt = new Date();
        this.minDate = null;
        this.formats = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY', 'shortDate'];
        this.format = this.formats[0];
        this.dateOptions = {
            formatYear: 'YY',
            startingDay: 1
        };
        this.show = false;
    }
    Md2Datepicker.prototype.showDatepicker = function () {
        this.show = true;
    };
    Md2Datepicker.prototype.hideDatepicker = function () {
        var _this = this;
        setTimeout(function () {
            _this.show = false;
        }, 125);
    };
    Md2Datepicker.prototype.getDate = function () {
        return this.dt && this.dt.getTime() || new Date().getTime();
    };
    Md2Datepicker = __decorate([
        core_1.Component({
            selector: 'md2-datepicker',
            template: "\n        <input (click)=\"showDatepicker()\" (blur)=\"hideDatepicker()\" type=\"text\" value=\"{{ getDate() | date:'fullDate'}}\" style=\"display: block;\" />\n        <div *ngIf=\"show\" style=\"display: inline-block; min-height:290px;\">\n            <datepicker [(ngModel)]=\"dt\" [minDate]=\"minDate\" [showWeeks]=\"true\"></datepicker>\n        </div>\n  \t\t\t",
            directives: [datepicker_component_1.DatePickerComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], Md2Datepicker);
    return Md2Datepicker;
}());
exports.Md2Datepicker = Md2Datepicker;
//# sourceMappingURL=Md2Datepicker.js.map