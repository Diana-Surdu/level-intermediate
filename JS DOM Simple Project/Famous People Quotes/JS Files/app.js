
 function showQuotes ()  {
    let button = document.body.querySelector('.btn')
    let authorsQuote = Math.floor(Math.random() * famousPeople.length)
    
   document.querySelector('h2').innerHTML = famousPeople[authorsQuote].name
   document.querySelector('h3').innerHTML = famousPeople[authorsQuote].quote
} 
