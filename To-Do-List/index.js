


let signEmail = document.querySelector('#email')
let password = document.querySelector('#password')
let form = document.querySelector('form')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(signEmail.value);
    console.log(password.value);
    window.location.href = 'Login.html'
    let set = localStorage.setItem('Email', signEmail.value)
    let set2 = localStorage.setItem('Password', password.value)
    console.log(set, set2)
});
