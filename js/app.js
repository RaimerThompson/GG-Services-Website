let images = document.querySelectorAll('.work__img')
let wrapper = document.getElementById('wrapper')
let imgWrapper = document.getElementById('fullImg')
let close = document.querySelector('span')

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    openModal(`/images/${index}.jpg`)
  });
});

// close.addEventListener('click', () => (wrapper.style.display = 'none'));

function closeImg(){
  wrapper.style.display = 'none'
}

function openModal(pic){
  wrapper.style.display = 'flex'
  imgWrapper.src = pic
}