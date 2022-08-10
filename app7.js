var app = /** @class */ (function () {
    function app(a, b) {
        this.a = a;
        this.b = b;
    }
    // name="om prakash"
    app.prototype.getname = function () {
        return (this.a);
    };
    app.prototype.gotname = function () {
        console.log(this.b);
    };
    return app;
}());
var d = new app(8, "op");
console.log(d.getname());
console.log(d.gotname());
