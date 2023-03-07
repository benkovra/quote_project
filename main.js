
function getCat() {
    let i = Math.floor(Math.random() * data.length);
    let quote = document.querySelector('blockquote');
    let cite = document.querySelector('figcaption');
    quote.innerText = data[i].text;
    cite.innerText = data[i].cite;
    
    console.log(i);
}    