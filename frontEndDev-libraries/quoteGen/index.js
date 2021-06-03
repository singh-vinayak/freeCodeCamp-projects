const setBg = () =>{
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const colorCode = "#" + randomColor;
    document.body.style.backgroundColor = colorCode;
    document.getElementById('text').style.color = colorCode;
    Array.prototype.slice.call(document.querySelectorAll('.button')).forEach(button => {
        button.style.backgroundColor = colorCode;
    })
    document.getElementById('author').style.color = colorCode;
}

async function getQuotes() {
    let quoteData = await fetch("http://quotes.stormconsultancy.co.uk/random.json", {
    })
    // .then(response => {
    //     console.log(response);
    // })
    // .catch(err => {
    //     console.error(err);
    // });
    let quote=await quoteData.json()
    console.log(quote.quote)
    console.log(quote.author)
    document.getElementById('text').innerHTML =" "+ quote.quote
    document.getElementById('author').innerHTML = "- " + quote.author
    setBg()
}

getQuotes()


document.getElementById('new-quote').addEventListener('click',getQuotes)