interface usertype{
    name:string,
    class:number,
    getname:()=>string
    
}
let users={
    name:"om prakash",
    class:50,
    getname:function(){
        return "oo baba kha chla"
    }

}
console.log(users.getname())