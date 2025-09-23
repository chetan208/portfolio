let gitbutton1=document.querySelector(".gitbutton1");
let viewdemo1=document.querySelector(".viewdemo1");
let projectcard1=document.querySelector(".projectcard1");

projectcard1.addEventListener("click" ,()=>{
   window.open("https://mentisdictionary.netlify.app/","_blank");
})

gitbutton1.addEventListener("click",()=>{
    window.open("https://github.com/chetan208/dictionary","_blank");
})

let baricon=document.querySelector(".baricon");
let hamberger=document.querySelector(".hamberger");
let header=document.querySelector(".header");
baricon.addEventListener("click",(e)=>{
        hamberger.classList.add("active");
        console.log("added")
        e.stopPropagation();
})



document.addEventListener("click",(e)=>{
    if(hamberger.classList.contains("active") && !hamberger.contains(e.target)){
        hamberger.classList.remove("active");
        console.log("removed");
    }  
})

let cross=document.querySelector(".cross");
cross.addEventListener("click",()=>{
    hamberger.classList.remove("active");
})
