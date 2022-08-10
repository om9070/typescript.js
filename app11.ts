enum Days{
    // mon="next data",tue="prevoues data"
    wed=5,thu,fri,sat,sun
}

// let whichday:Days;
// // whichday=Days.mon
// console.log(whichday)

function whichday(day:Days){
    return day;

}
console.log(whichday(Days.sat))