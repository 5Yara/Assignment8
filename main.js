
var quotes = [
{ quote :'"Be yourself; everyone else is already taken"', 
  author : "--Oscar Wilde"},

{quote : '"So many books, so little time."' ,
 author : "--Frank Zappa"},

{quote : '"Be the change that you wish to see in the world."' ,
 author : "--Mahatma Gandhi"},

{ quote : '"A friend is someone who knows all about you and still loves you."',
  author : "--Elbert Hubbard"},

{quote : '"The best revenge is massive success."',
 author : "--Frank Sinatra"}

]


function newQuote() {
    if(quotes.length) {
        
        var randomNumber = Math.floor(Math.random() * (quotes.length));
        document.getElementById('quoteOutput').innerHTML = quotes[randomNumber].quote;
        document.getElementById('authorOutput').innerHTML = quotes[randomNumber].author;
        quotes.splice(randomNumber,1)
    }


else {
    document.getElementById('quoteOutput').innerHTML = quotes[randomNumber].quote;
    document.getElementById('authorOutput').innerHTML = quotes[randomNumber].author;
}
}
