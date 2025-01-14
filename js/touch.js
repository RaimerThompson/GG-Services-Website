// get our elements
const sliderMove = document.querySelector('.slider__service'),
  slidesMove = Array.from(document.querySelectorAll('.phase-slider'))

// set up our state
let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID,
  currentIndex = 0

// add our event listeners
slidesMove.forEach((slideMove, index) => {
  const slideImage = slideMove.querySelector('img')
  // disable default image drag
  slideImage.addEventListener('dragstart', (e) => e.preventDefault())
  // pointer events
  slideMove.addEventListener('pointerdown', pointerDown(index))
  slideMove.addEventListener('pointerup', pointerUp)
  slideMove.addEventListener('pointerleave', pointerUp)
  slideMove.addEventListener('pointermove', pointerMove)
})

// make responsive to viewport changes
window.addEventListener('resize', setPositionByIndex)

// prevent menu popup on long press
window.oncontextmenu = function (event) {
  event.preventDefault()
  event.stopPropagation()
  return false
}

// use a HOF so we have index in a closure
function pointerDown(index) {
  return function (event) {
    currentIndex = index
    startPos = event.clientX
    isDragging = true
    animationID = requestAnimationFrame(animation)
    sliderMove.classList.add('grabbing')
  }
}

function pointerMove(event) {
  if (isDragging) {
    const currentPosition = event.clientX
    currentTranslate = prevTranslate + currentPosition - startPos
  }
}

function pointerUp() {
  cancelAnimationFrame(animationID)
  isDragging = false
  const movedBy = currentTranslate - prevTranslate

  // if moved enough negative then snap to next slide if there is one
  if (movedBy < -100 && currentIndex < slidesMove.length - 1) currentIndex += 1

  // if moved enough positive then snap to previous slide if there is one
  if (movedBy > 100 && currentIndex > 0) currentIndex -= 1

  setPositionByIndex()

  sliderMove.classList.remove('grabbing')
}

function animation() {
  setSliderPosition()
  if (isDragging) requestAnimationFrame(animation)
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth
  prevTranslate = currentTranslate
  setSliderPosition()
}

function setSliderPosition() {
  sliderMove.style.transform = `translateX(${currentTranslate}px)`
}