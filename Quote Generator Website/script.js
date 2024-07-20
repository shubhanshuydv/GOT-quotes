const api_url = "https://api.gameofthronesquotes.xyz/v1/random";


const quote = document.getElementById("quote");
const author = document.getElementById("author")




async function getquote(url){

    const response = await fetch(url);
    var data = await response.json()
    quote.innerHTML = data.sentence;
    author.innerHTML = data.character.name;

    console.log(data);
}

getquote(api_url);

function tweetQuote() {
    const tweetText = `${quote.innerHTML}          by--> ${author.innerHTML}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(tweetUrl, '_blank');
}