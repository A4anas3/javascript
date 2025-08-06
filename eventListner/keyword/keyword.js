let input= document.querySelector("input");

let p=document.querySelector("p");
//keyup
// input.addEventListener("keydown",function(event){
//     // console.log("key was pressed");
//     // console.log(event.key);
//      console.log(event.code);
//      if(event.code=="ArrowUp"){
//         console.log("bacword");
//      }
//      else if(event.code=="ArrowDown"){
//         console.log("down");
//      }
//      else if(event.code=="ArrowLeft"){
//         console.log("left")
//      }else if(event.code=="ArrowRight"){
//         console.log("right");
//      }
// });
input.addEventListener("input",function(event){
    console.log(input.value);
    p.innerText=input.value;});