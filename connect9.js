var usersutils;
(function (usersutils) {
    var Parent = /** @class */ (function () {
        function Parent() {
        }
        Parent.prototype.setname = function (name) {
            return this.name = name;
        };
        return Parent;
    }());
    usersutils.Parent = Parent;
})(usersutils || (usersutils = {}));
