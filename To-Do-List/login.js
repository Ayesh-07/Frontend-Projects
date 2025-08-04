

let signEmail = document.querySelector('#email')
let password = document.querySelector('#password')
let form = document.querySelector('form')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    let getEmail = localStorage.getItem('Email')
    let getPass = localStorage.getItem('Password')
    if (getEmail === signEmail.value && getPass === password.value) {
        console.log('Your credentials are Correct :)')
        window.location.href = 'index.html'
    } else {
        console.log('Your credentials are Wrong, Try Again :)')
    }


});
