//loop  in array

let f=["lala","pala","hala"];
for(let i=0;i<f.length;i++){
    console.log(i);
}

//for of loop
let fu=["lala","pala","hala"];
for(let gu of fu ){
    console.log(gu.toUpperCase());
}

//array method

let fug=["lala","pala","hala"];
fug.push("hola");
console.log(fug);
console.log(fug.toString());

//concatenation
let gugu=fu.concat(fug);
console.log(gugu);

//unshit
let fufu=fu.unshift("pela");
console.log(fufu);

//slice
let p=["pranjal","aaradhya","ayyush"];
console.log(p.slice(1,3));

//splice
let j=[1,2,3,4,5,6,7];
j.splice(3,1,9);
