const api_url="https://api.quotable.io/random";
const quote=document.getElementById("quote");
const author=document.getElementById("authorName");

async function getQuote(url){
 const response=await fetch(url);
 let data=await response.json(); 
 quote.innerHTML=data.content;
 author.innerHTML=data.author;
}
 
getQuote(api_url);