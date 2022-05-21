// --------------------sticky nav bar js part-------------------------------
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


// --------------------saveToFile js part-------------------------------
let saveFile = () => {
    // Get the data from each element
    const name = document.getElementById('txtName');
    const email = document.getElementById('txtEmail');
    const mobile = document.getElementById('txtMobile');
    const msg = document.getElementById('msg');

    // Stores all the input data to a variable as a string
    let data =
        '\r Name: ' + name.value + ' \r\n ' +
        'Email: ' + email.value + ' \r\n ' +
        'Mobile: ' + mobile.value + ' \r\n ' +
        'Message: ' + msg.value;

    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    // The name of file to save the user input.
    const sFileName = 'userInput.txt';

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();
}


// --------------------Button ripple js part-------------------------------
const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX
        const y = e.clientY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})