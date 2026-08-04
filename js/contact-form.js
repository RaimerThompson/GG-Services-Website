const contactForm2 = document.getElementById('contact-form2'),
contactMessage2 = document.getElementById('contact-message')


const sendEmail2 = (e) =>{
  e.preventDefault()

   // serviceID - templateID - #form - publicKey 
  emailjs.sendForm('service_42zcqx3', 'template_cklzkoj', '#contact-form2', 'lj1Xh9B_eqO7ZIAzp')
    .then(() =>{
  //show sent message 
    contactMessage2.textContent = 'Thanks for Submitting!'

  //remove message after 8 seconds
  setTimeout(() => {
    contactMessage2.textContent = ''
  }, 8000);

  //clear input fields
  contactForm2.reset()
  }, () =>{
    //show error message
    contactMessage2.textContent = 'Sorry, message was not recieved ❌'
  })
}

contactForm2.addEventListener('submit', sendEmail2);

