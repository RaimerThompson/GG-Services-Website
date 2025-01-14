const faqs = document.querySelectorAll('.faq__div');

faqs.forEach(faq =>{
  faq.addEventListener("click", ()=>{
    faq.classList.toggle("faq-active")
  })
})

let indexvalue = 1;
showImg(indexvalue);
function dot(e){showImg(indexvalue = e);}
function showImg(e){
  let i;
  const img = document.querySelectorAll('.phase')
  const sliderDot = document.querySelectorAll('.phase__dots span')
  if (e > img.length){indexvalue = 1}
  if (e < 1){indexvalue = img.length}
  for (i = 0; i < img.length; i++){
    img[i].style.display = "none";
  }
  img[indexvalue - 1].style.display = "flex";

}