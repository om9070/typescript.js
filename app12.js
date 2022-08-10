// let s1=Symbol("d1")
// let s2=Symbol()
// console.warn(s1)
var demof1 = Symbol("d1");
var demo = /** @class */ (function () {
    function demo() {
    }
    demo.prototype[demof1] = function () {
        return "some data";
    };
    return demo;
}());
var d = new demo();
console.log(d[demof1]());
