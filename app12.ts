// let s1=Symbol("d1")
// let s2=Symbol()
// console.warn(s1)
let demof1=Symbol("d1")
class demo{
    [demof1]()
    {
        return "some data"
    }
}

let d=new demo();
console.log(d[demof1]())
