const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

// create a function that change the nav area to 'active'
// when we scroll down to a certain distance
//otherwise, remove the 'active'
function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}



// ------------------------------------------------------
const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

//get a nodelist of all images
const img = document.querySelectorAll('#imgs img')

let idx = 0

//iterate the images every 2 second
let interval = setInterval(run, 2000)

function run() {
    idx++
    changeImage()
}

function changeImage() {
    // when it iterates to the end, go back to the first image
    if (idx > img.length - 1) {
        idx = 0
    } else if (idx < 0) {
        idx = img.length - 1
    }

    // Make the image move to the left and “disappear”
    imgs.style.transform = `translateX(${-idx * 500}px)`
}

// clean the current interval
function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

// Respond to click the right-button
rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

// Respond to click the left-button
leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})