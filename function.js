function sum(a,b){
    console.log(a+b);
}
sum(90,80)  

//arrow function
const mul=(a,b)=> {
    console.log(a*b);
}
mul(90,80)

//forEach loop in array
   let arr=[1,2,3,4,5,6,7];
   arr.forEach(function printval(val){
    console.log(val);
   });

   //print square
    let ar=[1,2,3,4,5,6,7];
    ar.forEach(val=>{
        let r=val*val;
        console.log(r);
    });

    //map methods
    let nums=[45,56,67,78,89,90];
    let newa=nums.map(val=>{
        return val*val;
    });
    console.log(newa);