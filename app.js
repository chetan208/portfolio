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


let cards=document.querySelector(".cards");
let arrow=document.querySelector(".arrow")


function checkscrollable(){
    if (cards.scrollWidth > cards.clientWidth) {
    arrow.classList.remove("hide");
  }
else{
    arrow.classList.add("hide");
  }
}

checkscrollable();
window.addEventListener('resize', checkscrollable);

let isScrolling;

cards.addEventListener('scroll', () => {
  arrow.style.opacity = 0;
  arrow.style.transform = 'translateX(20px)';
  window.clearTimeout(isScrolling);
  // set timer → agar scroll ruk gaya 200ms me, arrow show
  isScrolling = setTimeout(() => {
    arrow.style.opacity = 1;
    arrow.style.transform = 'translateX(0)';
  }, 200);  // 200ms after scroll stops
});