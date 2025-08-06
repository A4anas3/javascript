let inp= document.querySelector("#inp");
let li = document.querySelector("ul");
let btn = document.querySelector("button");

btn.addEventListener("click", function(event){
    let item= document.createElement("li");
    console.log(inp.value);

  let dbtn=document.createElement("button");
    dbtn.innerText = "delete";
    dbtn.classList.add("delete");

   

    item.innerText = inp.value;
    li.appendChild(item);
     item.appendChild(dbtn);
    inp.value = "";
  

    
    
        li.addEventListener("click",function(event){
            if(event.target.nodeName === "BUTTON"){
                let pare = event.target.parentElement;
                pare.remove();
            }

    });



//     let deleteBtns = document.querySelectorAll(".delete");
//     deleteBtns.forEach(function(dbtn){
//         dbtn.addEventListener("click",function(event){
//             event.stopPropagation();
//             let pare=this.parentElement;
//             pare.remove();

//     });
// });
});