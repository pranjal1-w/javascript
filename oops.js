class car {
    constructor (){
        console.log("create new obj");
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop"); // to start type  fortuner.start()  
    }
}
let fortuner=new car();

//inheritance

class parent{
    constructor(){
        this.species="homosapiens";
    }
   hello(){
    console.log("hello");  //// to start type  pranjalobj.hello()
   }
   sleep(){
    console.log("sleep");
   }
}
class engineer extends parent{
    constructor(branch){
        super(); //to invoke parent class constructor
        this.branch="branch";
    }
    work(){
        console.log("working");  // to start type  pranjalobj.work()
    }
}
let pranjalobj=new engineer();