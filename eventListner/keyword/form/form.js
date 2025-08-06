let fr=document.querySelector("form");

// fr.addEventListener("submit",function(event){
//     event.preventDefault();
//     console.log("submitted");

//     alert("form subitted");
// });

fr.addEventListener("submit",function(event){
    event.preventDefault();
    // let inp = document.querySelector("input");
    // let inp = document.querySelector("#user");
    // let inp2 = document.querySelector("#pass");
    // console.dir(inp);
  


    // console.dir(fr);
    // let inp = this.elements[0];
    // let inp2 = this.elements[1];
    //   console.log(inp.value);
    // console.log(inp2.value);
// 


    //  alert("form submitted with value: " + inp.value + " and password: " + inp2.value);

});
let input = document.querySelector("#user");
input.addEventListener("change", function(){
    console.log("input changed to: " ,this.value);
});
input.addEventListener("input", function(){
    console.log("input changed to: " ,this.value);
});