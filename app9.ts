 ///   <reference path="./connect9.ts"/>
 namespace usersutils{
   export  class users extends Parent {
         getname(){
             return this.name
         }
     }
 }

 let ut=new usersutils.users();
 ut.setname("brushully")
 console.log(ut.getname())


 //frist create outfile then run 
 //tsc app9.ts --outfile out.js
 //then created automatically out.js file
 //node out.js
 