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
///   <reference path="./connect9.ts"/>
var usersutils;
(function (usersutils) {
    var users = /** @class */ (function (_super) {
        __extends(users, _super);
        function users() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        users.prototype.getname = function () {
            return this.name;
        };
        return users;
    }(usersutils.Parent));
    usersutils.users = users;
})(usersutils || (usersutils = {}));
var ut = new usersutils.users();
ut.setname("brushully");
console.log(ut.getname());
//frist create outfile then run 
//tsc app9.ts --outfile out.js
//then created automatically out.js file
//node out.js
