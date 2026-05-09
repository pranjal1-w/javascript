 // for new event go to mdn reference
 //onclick is an event
 let btn1=document.querySelector("#btn1");
 btn1.onclick=()=>{  //another way of using onclick
    console.log("button was clicked");
    let a=25;   
    a++
    console.log(a);
 };
 btn1.onclick=()=>{
    console.log("hehehe");  //jab do bar onclick use ho toh nche se aakhri wala execute hota h
 };
 btn1.onclick=(e)=>{
    console.log(e); //event object ki value retun aayi hai
 };
    btn1.onclick=(evt)=>{//ye sab object ke value me likha hota h
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    
 };

 //event listener
 btn1.addEventListener("click",(evt)=>{ //ye dono event ek sath kr rha h upar wala bhi aur listener wala bhi 
console.log("button was pushed");
console.log(evt); //event ka object return hua
 });


 // to remove event listener bas add ki jagah remove likh do

 let modebtn=document.querySelector("#mode");
 let currmode="light";
 modebtn.addEventListener("click",()=>{
    if(currmode==="light"){
        currmode="dark";
        document.querySelector("body").style.backgroundColor="gold";
    }
    else{
        currmode="light";
        document.querySelector("body").style.backgroundColor="silver";
    }
    console.log(currmode);
 });


 