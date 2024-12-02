let images = document.querySelectorAll('.work__img')
let wrapper = document.getElementById('wrapper')
let imgWrapper = document.getElementById('fullImg')
let close = document.querySelector('span')
var tablinks = document.getElementsByClassName('tab__links');
var tabcontents = document.getElementsByClassName('tab__contents');



// images.forEach((img, index) => {
//   img.addEventListener('click', () => {
//     openModal(`/images/${index}.jpg`)
//   });
// });

// close.addEventListener('click', () => (wrapper.style.display = 'none'));

// function closeImg(){
//   wrapper.style.display = 'none'
// }

// function openModal(pic){
//   wrapper.style.display = 'flex'
//   imgWrapper.src = pic
// }


//contact page tabs
 
function opentab(tabname){
  for (tablink of tablinks){
    tablink.classList.remove("active__link");
  }
  for (tabcontent of tabcontents){
    tabcontent.classList.remove("active__tab");
  }
  event.currentTarget.classList.add('active__link');
  document.getElementById(tabname).classList.add('active__tab')
}