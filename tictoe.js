let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGame= document.querySelector("#new");
let msgc=document.querySelector(".msgc");
let msg=document.querySelector("#msg");
 let turn0=true;
 
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    
    }
};
const resetGame=()=>{
    turn0=true;
    enableBoxes();
 msgc.classList.add("hide");
}

    boxes.forEach((box)=>{
        box.addEventListener("click",()=>{
            console.log("box clicked");
            if(turn0){
                box.innerText="O";
                turn0=false;
            
            }
            else{
                box.innerText="X";
                turn0=true;
            }
            box.disabled=true;
            check();
        });
    });
   
    const showWinner=(winner)=>{
        msg.innerText=`congratualtion winner is ${winner}`;
      msgc.classList.remove("hide");  
    disableBoxes();
    };

 const check=() =>{
    for (let pattern of winPattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!=""&&pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val&&pos2val===pos3val){
                console.log("winner",pos1val);

                showWinner(pos1val);
            }
        }
    }
 };
 newGame.addEventListener("click",resetGame);
 reset.addEventListener("click",resetGame);
 