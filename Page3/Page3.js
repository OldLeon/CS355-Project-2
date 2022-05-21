const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

// create a function that change the nav area to 'active'
// when we scroll down to a certain distance
//otherwise, remove the 'active'
function fixNav() {
    if (window.scrollY > nav.offsetHeight + 60) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}


// ------------------------------------------------------------------
const toggles = document.querySelectorAll('.faq-toggle')

//response to the click action
toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})