let arr = JSON.parse(localStorage.getItem('Array')) || [];

// Add Tasks
let input = document.getElementById('input');
let addBtn = document.querySelector('.add');
let display = document.querySelector('.display');




// Declare a global variable to store the value of the task 

let oldTaskValue = null;

function createList(itemText) {

    let container = document.createElement('div');
    var li = document.createElement('li');
    let deletebtn = document.createElement('button');
    let editBtn = document.createElement('button');

    editBtn.textContent = 'Edit';
    deletebtn.textContent = 'Delete';
    li.textContent = itemText;

    container.className = 'Container';
    li.style.margin = '16px 0';
    deletebtn.style.width = '50px';
    deletebtn.style.backgroundColor = '#D92C54';
    editBtn.style.width = '50px';
    editBtn.style.backgroundColor = '#8ABB6C';

    container.appendChild(li);
    container.appendChild(deletebtn);
    container.appendChild(editBtn);

    display.appendChild(container);



    // Delete Task
    deletebtn.addEventListener('click', () => {
        let value = li.innerText.trim();
        let index = arr.indexOf(value);

        if (index !== -1) {
            arr.splice(index, 1);
            container.remove();
            console.log(`${value} is Deleted`);
            localStorage.setItem('Array', JSON.stringify(arr));
        } else {
            alert(`${value} is not Found`);
        }
    });

    // Update add Button to Update Task btn
    
    editBtn.addEventListener('click', () => {
        input.value = li.innerText.trim();
        addBtn.innerText = 'Update Task';
        addBtn.style.backgroundColor = '#932F67';
        
        // Store the old value in the global variable
        oldTaskValue = li.innerText.trim();
    });
}


arr.forEach(item => {
    createList(item);
});

// Edit Task and update
addBtn.addEventListener('click', () => {
    let inputValue = input.value.trim();

    if (inputValue !== '') {
        if (addBtn.innerText === 'Update Task') {
            
            let index = arr.indexOf(oldTaskValue);

            if (index !== -1) {
                arr.splice(index, 1, inputValue);
                localStorage.setItem('Array', JSON.stringify(arr));
                
               
                display.innerHTML = '';
                arr.forEach(item => {
                    createList(item);
                });

                input.value = '';
                addBtn.innerText = 'Add Task';
        
                oldTaskValue = null;
            }

        } else {
           
            if (!arr.includes(inputValue)) {
                arr.push(inputValue);
                input.value = '';

              
                createList(inputValue);

                localStorage.setItem('Array', JSON.stringify(arr));
            } else {
                alert('Duplicate Value is not Allow :)');
            }
        }
    } else {
        alert('Please write something :)');
    }
});




// Delete All Tasks
let clearbtn = document.querySelector('.clear');

clearbtn.addEventListener('click', () => {
    let con = confirm('Are You Want to Delete All Task ?');
    if (con === true) {
        arr.length = 0;
        display.innerHTML = ''; 
        localStorage.setItem('Array', JSON.stringify(arr));
    }
});


