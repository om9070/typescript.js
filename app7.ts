class app{
    a:number;
    b:string
    constructor(a:number,b:string){
        this.a=a
        this.b=b
    }
    // name="om prakash"
    getname():number
    {
    return(this.a);
        
    }

    gotname():void
    {
    console.log(this.b);
        
    }
}
let d=new app(8,"op");
console.log(d.getname())
console.log(d.gotname())

