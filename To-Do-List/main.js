
let arr = JSON.parse(localStorage.getItem('Array')) || [];


// Add Tasks


let input = document.getElementById('input')
let addBtn = document.querySelector('.add')
let display = document.querySelector('.display')


addBtn.addEventListener('click', () => {

    if (input.value !== '') {
        if (!arr.includes(input.value)) {

            arr.push(input.value)
            input.value = ''

            display.innerHTML = '';
            arr.forEach((item) => {
                let li = document.createElement('li');
                li.textContent = item;
                display.appendChild(li);
            })

            localStorage.setItem('Array', JSON.stringify(arr))

        } else {
            alert('Duplicate Value is not Allow :)')
        }



    } else {
        alert('Please write something :)')
    }


})

// Delete Task


let deletebtn = document.querySelector('.delete')
let deletedTask = document.querySelector('#del')
let delTask = document.querySelector('.deleted')

deletebtn.addEventListener('click', () => {


    let value = deletedTask.value.trim()
    let index = arr.indexOf(value)

    if (index !== -1) {

        arr.splice(index, 1)
        deletedTask.value = ''
        delTask.innerText = (`${value} is Deleted`)

        display.innerText = arr.join(',')
        localStorage.setItem('Array', JSON.stringify(arr))

    } else {
        delTask.innerText = (`${value} is not Found`)

    }



})


//Edit Task


let oldTask = document.querySelector('#oldTask')
let newTask = document.querySelector('#newTask')
let editBtn = document.querySelector('.edit')
let editedTask = document.querySelector('.editedTask')
editBtn.addEventListener('click', () => {


    let old = oldTask.value.trim()
    let newT = newTask.value.trim()
    let oldValue = arr.indexOf(old)

    if (oldValue !== -1) {

        arr.splice(oldValue, 1, newT)
        oldTask.value = ''
        newTask.value = ''
        display.innerText = arr.join(',')
        editedTask.innerText = 'Your old value is Updated'

        localStorage.setItem('Array', JSON.stringify(arr))

    } else {
        editedTask.innerText = 'Your old value is not found'

    }

})





// All Clear Tasks


let clearbtn = document.querySelector('.clear')
let removeAll = document.querySelector('.remove')

clearbtn.addEventListener('click', () => {
    arr.length = 0
    console.log(arr)
    display.innerText = arr.join(',')

    removeAll.innerText = 'All the Tasks are deleted :('

    localStorage.setItem('Array', JSON.stringify(arr))
})



