//  Declare varible for storing the values 

let firstNumber = '';
let operator = '';
let secondNumber = '';
let result = '';

// Select the classes from index.html

let btn = document.querySelectorAll('.calculator__key');
let screen = document.querySelector('.screen-background');


// Apply Event Listener for event handler

btn.forEach((ele) => {
    ele.addEventListener('click', function() {
        let value = ele.innerText;
        console.log('Button clicked:', value);
        screen.setAttribute('style', 'font-size:1.5rem; padding:30px; color:white');  // set the styling for input

        
        
        // Number or dot pressed
        
        if (!isNaN(value) || value === '.') {


                if (operator === '') {
                firstNumber += value;
                screen.innerText = firstNumber;}
                
                else {
                secondNumber += value;
                 screen.innerText = (firstNumber + " " + operator +" "+ secondNumber);
               
            }
        } 

        
        // Operator is pressed

        else if ( value === '+' || value === '-' || value === '*' || value === '/') {

          operator = value;

          if (operator === '+') {
                result = firstNumber + secondNumber;
            } else if (operator === '-') {
                result = firstNumber + secondNumber;
            } else if (operator === '*') {
                result = firstNumber + secondNumber;
            } else if (operator === '/') {
                result = firstNumber / secondNumber;
                if(operator === '/' & secondNumber === '0'){
                 alert("Error : Cannot divide by 0")
                }
            }
                screen.innerText = firstNumber + " " + operator ;
                console.log('Operator selected:', operator);
            } 



        // Condition for double operator
        
        else if (operator !== '' && secondNumber === '') {
        operator = value; 
        screen.innerText = firstNumber + " " + operator;}

    
        // = is pressed 

        else if (value === '=') {
            result = eval(firstNumber + operator + secondNumber);
             screen.innerText = result;

        }

        // AC is pressed 

        else if (value === 'AC') {
            firstNumber = '';
            secondNumber = '';
            operator = '';
            result = '';
            screen.innerText = '0';
        }
        
        
        // Dell is pressed
        
         else if (value === 'Dell') {
            if (secondNumber !== '') {
                secondNumber = secondNumber.slice(0, -1);
                screen.innerText = secondNumber || '0';
            } else if (operator !== '') {
                operator = '';
                screen.innerText = firstNumber;
            } else if (firstNumber !== '') {
                firstNumber = firstNumber.slice(0, -1);
                screen.innerText = firstNumber || '0';
            }
        }
      
    });
});
