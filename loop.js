//for loop

for(let i=1;i<=5;i++){
    console.log("pranjal1");
}
let sum=0;
for(let i=1;i<=5;i++){
    sum=sum+i;
    console.log(sum);
}

//for of loop

let st="pranjal";
for(let i of st){
    console.log(i);
}

//for in loop

let student={
    name:"pranjal",
    age :20,
    cgpa:11,
};
for (let i in student){
    console.log(i,student[i]);
}