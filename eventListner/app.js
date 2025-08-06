let btn=document.querySelectorAll("button");
console.dir(btn);


// btn.onclick=function(){
// //     console.log("button click");
// //     console.log("anas khan")
// // }
// alert("button click");
// }
// for(btn of btn){
//     btn.onclick=sayHello;
//     btn.onmouseenter=function(){
//         console.log("mouse enter");
       
//     };
// }

function sayHello(){
    alert("hello");
}
// btn.onclick=sayHello;
function sayName(){
    alert("anas khan");
}


//eventListner

for(btn of btn){
    // btn.addEventListener("click",sayHello);
    // btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick",function(){
        console.log("double click");
    });

}