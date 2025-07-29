let quotes = [
    {qoute:"Hard work beats talent when talent doesn't work hard.",
     Author:"Author - Tim Notke"
    },
    {qoute:"Stay positive, work hard, make it happen.",
    Author:"Author - Tim Notke"
    },
    {qoute:"Success is not final, failure is not fatal: It is the courage to continue that counts.",
       Author:"Author - Winston Churchill"
    },
    {qoute:"Be like a diamond, precious and rare, not like a stone, found everywhere.",
         Author:"Author - Islamic Proverb"
    },
    {qoute:"Be like a diamond, precious and rare, not like a stone, found everywhere.",
         Author:"Author - Islamic Proverb"
    }
]




let display = document.querySelector('.text')
let author = document.querySelector('.author')

let btn = document.querySelector('button')
btn.addEventListener('click',()=>{

let random = Math.floor(Math.random() * quotes.length)
let randomqoutes = quotes[random]
display.innerText = randomqoutes.qoute
author.innerText = randomqoutes.Author
})

  
;


