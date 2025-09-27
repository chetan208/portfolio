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
  // 3) Collect input values manually
  const templateParams = {
    user: document.getElementById('name').value,   // template me {{user}}
    email: document.getElementById('email').value, // template me {{email}}
    message: document.getElementById('message').value // template me {{message}}
  };

  // 4) Send email via EmailJS
  emailjs.send('service_i0ougds', 'template_71utzbz', templateParams)
    .then(function (response) {
      statusDiv.innerText = 'Message sent successfully!';
      // Optional: clear input boxes
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    }, function (error) {
      console.error('FAILED...', error);
      statusDiv.innerText = 'Error sending message.';
    });
});
