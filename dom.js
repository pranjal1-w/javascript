//dom manipulation
let f=document.getElementById("pr");
console.dir(f);

//by class

let a=document.getElementsByClassName("pg");
console.dir(a);
console.log(a);

//ny tag

// let d=document.getElementsByTagName("p");
// console.dir(d);
// console.log(d);

//attributes
let y=document.querySelector("div");
console.dir(y);

let para=document.querySelector("p");
console.log(para.getAttribute("class"));

//setattribute
console.log(para.setAttributes("class","newclass"));
