let gitbutton1 = document.querySelector(".gitbutton1");
let viewdemo1 = document.querySelector(".viewdemo1");
let projectcard1 = document.querySelector(".projectcard1");

projectcard1.addEventListener("click", () => {
  window.open("https://mentisdictionary.netlify.app/", "_blank");
})

gitbutton1.addEventListener("click", () => {
  window.open("https://github.com/chetan208/dictionary", "_blank");
})

let baricon = document.querySelector(".baricon");
let hamberger = document.querySelector(".hamberger");
let header = document.querySelector(".header");
baricon.addEventListener("click", (e) => {
  hamberger.classList.add("active");
  console.log("added")
  e.stopPropagation();
})



document.addEventListener("click", (e) => {
  if (hamberger.classList.contains("active") && !hamberger.contains(e.target)) {
    hamberger.classList.remove("active");
    console.log("removed");
  }
})

let cross = document.querySelector(".cross");
cross.addEventListener("click", () => {
  hamberger.classList.remove("active");
})

let options = document.querySelector(".options");
options.addEventListener("click", () => {
  hamberger.classList.remove("active");
})


let skillcards = document.querySelector(".skillcards");
let skillarrow = document.querySelector(".skillarrow")

let projectcards = document.querySelector(".projectcards");
let projectarrow = document.querySelector(".projectarrow")


function checkskillscrollable() {
  if (skillcards.scrollWidth > skillcards.clientWidth) {
    skillarrow.classList.remove("hide");
  }
  else {
    skillarrow.classList.add("hide");
  }
}

function checkprojectscrollable() {
  if (projectcards.scrollWidth > projectcards.clientWidth) {
    projectarrow.classList.remove("hide");
  }
  else {
    projectarrow.classList.add("hide");
  }
}
checkskillscrollable();
window.addEventListener('resize', checkskillscrollable);

checkprojectscrollable();
window.addEventListener('resize', checkprojectscrollable);

let isScrolling;

skillcards.addEventListener('scroll', () => {
  skillarrow.style.opacity = 0;
  skillarrow.style.transform = 'translateX(20px)';
  window.clearTimeout(isScrolling);
  // set timer → agar scroll ruk gaya 200ms me, arrow show
  isScrolling = setTimeout(() => {
    skillarrow.style.opacity = 1;
    skillarrow.style.transform = 'translateX(0)';
  }, 200);  // 200ms after scroll stops
});

let isProjectCardScrolling;
projectcards.addEventListener("scroll", () => {
  projectarrow.style.opacity = 0;
  projectarrow.style.transform = 'translateX(20px)';
  window.clearTimeout(isProjectCardScrolling);

  isProjectCardScrolling = setTimeout(() => {
    projectarrow.style.opacity = 1;
    projectarrow.style.transform = 'translateX(0)';
  }, 200)

});



// contact us

emailjs.init('Y9ueUxsz6eH2RRoGA');  // yaha apna user ID paste karo
const sendBtn = document.getElementById('send-btn');
const statusDiv = document.getElementById('status');

sendBtn.addEventListener('click', function () {
  statusDiv.classList.add("showmsg");
  statusDiv.innerText="Sending...";
  // 3) Collect input values manually
  const templateParams = {
    user: document.getElementById('name').value,   // template me {{user}}
    email: document.getElementById('email').value, // template me {{email}}
    message: document.getElementById('message').value // template me {{message}}
  };

  // 4) Send email via EmailJS
  emailjs.send('service_i0ougds', 'template_71utzbz', templateParams)
      
    .then(function (response) {
      statusDiv.classList.remove("showmsg");
      setTimeout(()=>{
        statusDiv.classList.add("showmsg");
        statusDiv.innerText="Message sent successfully!";
      },1000);
      
      
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';

      setTimeout(()=>{
        statusDiv.classList.remove("showmsg");
      },3000);
    }, function (error) {
      console.error('FAILED...', error);
      statusDiv.innerText = 'Error sending message.';
    });
});

let insta=document.querySelector(".insta");
insta.addEventListener("click",()=>{
  window.open("https://www.instagram.com/chetan__nith?igsh=ZHpyeWhnejR2aXgx","_blank");
})

let linkedin=document.querySelector(".linkedin");
linkedin.addEventListener("click",()=>{
  window.open("https://www.linkedin.com/in/chetan-nith-6218b3329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ","_blank");
})

let github=document.querySelector(".github");
github.addEventListener("click",()=>{
  window.open("https://github.com/chetan208","_blank");
})

let l=document.querySelector(".location");
l.addEventListener("click",()=>{
  window.open("https://www.google.com/maps/place/Nagrota+Bagwan,+Himachal+Pradesh+176047/@32.1085734,76.3738735,4052m/data=!3m1!1e3!4m6!3m5!1s0x391b4c317292f6d5:0x7986b64ab27a0248!8m2!3d32.1053971!4d76.3789037!16zL20vMGY1cXpk?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D","_blank");

})

const emailDiv = document.querySelector(".emailDiv");

  emailDiv.addEventListener("click", () => {
    const email = "chetanchoudhary435@gmail.com"; // yahan apna email daale
    window.location.href = `mailto:${email}`;
  });


const callDiv = document.getElementById("callDiv");
  
  callDiv.addEventListener("click", () => {
    const phone = "+917018152657";
    window.location.href = `tel:${phone}`;
  });




document.querySelectorAll('.skillcard').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  });

  card.addEventListener('mouseleave', () => {
    card.style.setProperty('--x', `-9999px`);
    card.style.setProperty('--y', `-9999px`);
  });
});

