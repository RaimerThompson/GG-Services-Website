const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message')


const sendEmail = (e) =>{
  e.preventDefault()

   // serviceID - templateID - #form - publicKey 
  emailjs.sendForm('service_42zcqx3', 'template_p7bx3dh', '#contact-form', 'lj1Xh9B_eqO7ZIAzp')
    .then(() =>{
  //show sent message 
    contactMessage.textContent = 'Thanks for Submitting!'

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

