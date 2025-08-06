let btn = document.querySelector('button');
let h1 = document.querySelector('h1')
let p= document.querySelector('p')




// btn.addEventListener('click', function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = 'blue';
// })

// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="red";
// }
// h1.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);
// btn.addEventListener("click",changeColor);
btn.addEventListener("click",function(event){
    console.log(event); 
    console.log("click")
});