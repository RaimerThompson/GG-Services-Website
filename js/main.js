const menuBtn = document.querySelector('.hamburger__btn');
const mobileNav = document.getElementById('navbar');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('close');
    menuOpen = true;
    mobileNav.style.display = 'flex';
    mobileNav.classList.add('active');
    
   }else {
    menuBtn.classList.remove('close');
    menuOpen = false;
    mobileNav.style.display = 'flex';
    mobileNav.classList.remove('active');
   }
})
;

const slides = document.querySelector('.home__slider').children;
let index = 0;

function nextSlide(){
  if (index == slides.length-1){
    index = 0;
  }else{
    index++;
  }
  changeSlide();
}

function changeSlide(){
  for (let i=0; i<slides.length; i++){
      slides[i].classList.remove('active');
  }

  slides[index].classList.add('active');
}

function resetTimer(){
  clearInterval(timer);
}

function autoPlay(){
  nextSlide();
}
let timer = setInterval(autoPlay, 4000)



const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
  e.preventDefault()

   // serviceID - templateID - #form - publicKey 
  emailjs.sendForm('service_kmv559q', 'template_xnu3zqy', '#contact-form', 'Vs4d0AsUtYr3Zbvh_')
    .then(() =>{
  //show sent message 
    contactMessage.textContent = 'Thanks for submitting!✅'

  //remove message after 2 seconds
  setTimeout(() => {
    contactMessage.textContent = ''
  }, 2000);

  //clear input fields
  contactForm.reset()
  }, () =>{
    //show error message
    contactMessage.textContent = 'Sorry, message was not recieved ❌'
  })
}

contactForm.addEventListener('submit', sendEmail);


const contactForm2 = document.getElementById('contact-form2'),
      contactMessage2 = document.getElementById('contact-message2')

const sendEmail2 = (e) =>{
  e.preventDefault()

   // serviceID - templateID - #form - publicKey 
  emailjs.sendForm('service_kmv559q', 'template_b7m1qws', '#contact-form2', 'Vs4d0AsUtYr3Zbvh_')
    .then(() =>{
  //show sent message 
    contactMessage2.textContent = 'Thanks for submitting!✅'

  //remove message after 2 seconds
  setTimeout(() => {
    contactMessage2.textContent = ''
  }, 2000);

  //clear input fields
  contactForm2.reset()
  }, () =>{
    //show error message
    contactMessage2.textContent = 'Sorry, message was not recieved ❌'
  })
}

contactForm2.addEventListener('submit', sendEmail2);


const contactForm3 = document.getElementById('contact-form3'),
      contactMessage3 = document.getElementById('contact-message3')

const sendEmail3 = (e) =>{
  e.preventDefault()

   // serviceID - templateID - #form - publicKey 
  emailjs.sendForm('service_kmv559q', 'template_b7m1qws', '#contact-form3', 'Vs4d0AsUtYr3Zbvh_')
    .then(() =>{
  //show sent message 
    contactMessage3.textContent = 'Thanks for submitting!✅'

  //remove message after 2 seconds
  setTimeout(() => {
    contactMessage3.textContent = ''
  }, 2000);

  //clear input fields
  contactForm3.reset()
  }, () =>{
    //show error message
    contactMessage3.textContent = 'Sorry, message was not recieved ❌'
  })
}

contactForm3.addEventListener('submit', sendEmail3)

