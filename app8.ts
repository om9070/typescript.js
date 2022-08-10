class Parent{
    name:string;
    setname(name):void
    {
        this.name=name;
    }
}
class Child extends Parent{
  
    getname():string{
        return this.name
    }
}
let c1=new Child();
c1.setname("i like orange")
console.log(c1.getname())