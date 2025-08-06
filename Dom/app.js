// let smallImages =document.getElementsByClassName("oldImg");
// for(let i =0;i<smallImages.length;i++){
//     // console.dir(smallImages[i].src);
//     smallImages[i].src="asset/card1img.jpeg";
//     console.log(`value of image no ${i} is change  to${smallImages[i].src}`);


// }



// console.dir(document.querySelector("div a"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));

// // for  all querySelector
// console.dir(document.querySelectorAll(".oldImg"));


let links = document.querySelectorAll(".box a");
for(link of links){
    link.style.color = "yellow";
}
