let gameSeq=[];
let userSeq=[];
let level=0;
let btns=["yellow","red","green","purple"];

let started=false;
let h2= document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game started");
        started=true;
        levelUp();
    }
        
});
function levelUp(){
    userSeq=[];
    level++;
    h2.innerHTML=`Level ${level}`;
    

    let randomNum=Math.floor(Math.random()*4);
    let randomColor=btns[randomNum];
    let randomBtn=document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log("Game sequence: ", gameSeq);
    gameFlash(randomBtn);

}


function checkAns(idx){
 
   if(userSeq[idx]===gameSeq[idx]){
        // console.log("Correct answer");  
        if(userSeq.length===gameSeq.length){
            setTimeout(levelUp,1000);
        }}
    else{
        h2.innerHTML=`Game Over! You reached level ${level}. Press any key to restart.`;
        document.querySelector("body").style.backgroundColor="red";
        setInterval(function(){
            document.querySelector("body").style.backgroundColor="white";
        }, 500);;
        reset();
    }

} 

// let btn=document.querySelectorAll(".btn");
function gameFlash(btn){
    console.log("Button flashed");
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 1000);
}




function UserFlash(btn){
    console.log("Button flashed");
    btn.classList.add("Userflash");
    setTimeout(function(){
        btn.classList.remove("Userflash");
    }, 1000);
}




function btnPress(btn){
    console.log("Button pressed");
    
    UserFlash(this);

    user=this.getAttribute("id");
    userSeq.push(user);
    checkAns(userSeq.length-1);
} 

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
   
   
}