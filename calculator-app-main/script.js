let firstNumber = '';
let operator = '';
let secondNumber = '';
let result = '';

let btn = document.querySelectorAll('.calculator__key');
let screen = document.querySelector('.screen-background');

btn.forEach((ele) => {
    ele.addEventListener('click', function() {
        let value = ele.innerText;
        console.log('Button clicked:', value);
        screen.setAttribute('style', 'font-size:1.5rem; padding:30px; color:white');

        if (!isNaN(value) || value === '.') {


            // Number or dot pressed
            if (operator === '') {
                firstNumber += value;
                screen.innerText = firstNumber;
                

            
            }else {
                secondNumber += value;
                screen.innerText = firstNumber + " " + operator +" "+ secondNumber;
            }
             

            
        } 
        // Operator is pressed
        else if (value === '+' || value === '-' || value === '*' || value === '/') {
       
            operator = value;
          screen.innerText = firstNumber + " " + operator ;

            console.log('Operator selected:', operator);
        } 



     // Equal button is pressed
        else if (value === '=') {
            
            let num1 = parseFloat(firstNumber);
            let num2 = parseFloat(secondNumber);

            if (operator === '+') {
                result = num1 + num2;
            } else if (operator === '-') {
                result = num1 - num2;
            } else if (operator === '*') {
                result = num1 * num2;
            } else if (operator === '/') {
                result = num1 / num2;
                if(operator === '/' & secondNumber === '0'){
                 alert("Error : Cannot divide by 0")
                }
            }

            screen.innerText = result;
            
        } 

        // Reset button is pressed
        else if (value === 'Reset') {
           firstNumber = '';
            secondNumber = '';
            operator = '';
            result = '';
            screen.innerText = '0';
        }
    });
});
