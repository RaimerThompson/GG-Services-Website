const sliders = document.querySelector('.r2').children[0];
let num = 0;

console.log(sliders);

function nextSlide2(){
  if (num == sliders.length-1){
    num = 0;
  }else{
    num++;
  }
  changeSlide2();
  // clearInterval(timer)
}

function changeSlide2(){
  for (let i=0; i<sliders.length; i++){
      sliders[i].classList.remove('active');
  }

  sliders[num].classList.add('active');
}

function autoPlay2(){
  nextSlide2();
}
let timeClock = setInterval(autoPlay2, 500)