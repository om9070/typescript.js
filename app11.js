var Days;
(function (Days) {
    // mon="next data",tue="prevoues data"
    Days[Days["wed"] = 5] = "wed";
    Days[Days["thu"] = 6] = "thu";
    Days[Days["fri"] = 7] = "fri";
    Days[Days["sat"] = 8] = "sat";
    Days[Days["sun"] = 9] = "sun";
})(Days || (Days = {}));
// let whichday:Days;
// // whichday=Days.mon
// console.log(whichday)
function whichday(day) {
    return day;
}
console.log(whichday(Days.sat));
