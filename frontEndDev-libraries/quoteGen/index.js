const setBg = (element) => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const colorCode = "#" + randomColor;
    document.body.style.backgroundColor = colorCode;
    document.getElementById('text').style.color = colorCode;
    Array.prototype.slice.call(document.querySelectorAll('.button')).forEach(button => {
        button.style.backgroundColor = colorCode;
    })
    document.getElementById('author').style.color = colorCode;
    unfade(document.body)
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
    let quote = await quoteData.json()
    console.log(quote.quote)
    console.log(quote.author)
    document.getElementById('text').innerHTML = " " + quote.quote
    document.getElementById('author').innerHTML = "- " + quote.author
    setBg(document.getElementById('quote-box'))

}
getQuotes()


document.getElementById('new-quote').addEventListener('click', getQuotes)

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 20);
    element.style.display = 'flex';
    // var op = 0.1;  // initial opacity
    // var timer = setInterval(function () {
    //     if (op >= 1) {
    //         clearInterval(timer);
    //         element.style.display = 'none';
    //     }
    //     element.style.opacity = op;
    //     element.style.filter = 'alpha(opacity=' + op * 100 + ")";
    //     op += op * 0.1;
    // }, 50);
    // element.style.display = 'flex';
}