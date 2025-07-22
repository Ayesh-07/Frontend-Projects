function myfunc() {
 let score = 0 ; 
  let btn = document.querySelectorAll('.bt');

  btn.forEach(element => {

     element.addEventListener("click", function() {
     var text = element.innerHTML.trim();
     if (text === 'Mars') {
    element.style.backgroundColor = "green";
    score++
    alert('Wow! You choosed the correct answer')
    alert(`Your Score is ${score}`)
    
    }
    else {
        element.style.backgroundColor = "red";
        alert(`Opps! You choosed the Wrong answer Now move to Next Question`)

    }
  });
    
  });

 
}

myfunc()


