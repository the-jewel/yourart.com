const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;


nextBtnFirst.addEventListener("click", function(event){
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  })
  
  nextBtnSec.addEventListener("click", function(event){
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  })
  
  nextBtnThird.addEventListener("click", function(event){
    event.preventDefault();
    slidePage.style.marginLeft = "-75%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  })
  

prevBtnSec.addEventListener("click", function(event){
    event.preventDefault();
    slidePage.style.marginLeft = "0%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
  })
  

prevBtnThird.addEventListener("click", function(event){
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
  })
  

 prevBtnFourth.addEventListener("click", function(event){
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
  })
  


  const form =document.querySelector('form') ;
  function sendEmail() {
    Email.send({
      SecureToken:"7a05f1aa-7988-4f49-aec8-eb2d8d5356fb ",
      To: 'n57331874@gmail.com',
      From: "n57331874@gmail.com",
      Subject: "تم تسجيل الدخول بنجاح",
      Body: " firstname: " + document.getElementById("firstname").value
              +"<br> lastname : " + document.getElementById("lastname").value 
               + "<br> email : " + document.getElementById("email").value 
                +"<br> phone : " + document.getElementById("phone").value 
               + "<br> date : " + document.getElementById("date").value 
                +"<br> gender : " + document.getElementById("gender").value 
                +"<br> username : " + document.getElementById("username").value

    }).then(
      message => alert("massage sent")
    );
  }

 // Function to toggle the like state
 function toggleLike(element) {
  element.classList.toggle('liked');
  // Toggle between filled and empty heart icon using Font Awesome classes
  if(element.classList.contains('liked')) {
    element.textContent = '\u2665'; // Filled heart
  } else {
    element.textContent = '\u2661'; // Empty heart
  }
}