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

contactForm.addEventListener('submit', sendEmail)

