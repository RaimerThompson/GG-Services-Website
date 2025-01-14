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


