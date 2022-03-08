//Way two

//Element of the Quotes

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorName = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

// Get Quotes form api
let apiQuotes = [];

// Show Loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// Show new quote
const newQuote = function () {
  loading();
  //Pick a new random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  // Check author field is exist or not
  if (!quote.author) {
    authorName.textContent = `- Unknown`;
  } else {
    authorName.textContent = `- ${quote.author}`;
  }

  // Check the quote length for styling
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;
  complete();
};

//----------        Fetching the quote form API ----------

async function getQuotes() {
  loading();
  const apiurl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiurl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // catch the error
    alert(error);
  }
}

///      Tweet Quote
function tweetQuote() {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorName.textContent}`;
  window.open(tweetUrl, "_blank");
}

// -----------      Event Listners       -----------
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

//Calling function
getQuotes();

/** 
//Getting quotes Dirctly from  API

// ******************************************************************\\

//Element of the Quotes

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorName = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

//function form Loader
function loading() {
  quoteContainer.hidden = true;
  loader.hidden = false;
}

// function for Complete
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

//Get quote

async function getQuote() {
  loading();
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const apiUrl =
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();

    //Checking author name is exists or not
    if (data.authorName === "") {
      authorName.textContent = "Unknown";
    } else {
      authorName.textContent = data.quoteAuthor;
    }

    // Reduce Quote size for Longer Quotes
    if (data.quoteText.length > 120) {
      quoteText.classList.add("long-quote");
    } else {
      quote.classList.remove("long-quote");
    }

    quoteText.textContent = data.quoteText;
    complete();
  } catch (error) {
    getQuote();
    alert("This site was use too many requests... So please try again later.");
  }
}

//Tweet the Qutote
function tweetQuote() {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorName.textContent}`;
  window.open(tweetUrl, "_blank");
}

//EventListeners
newQuoteBtn.addEventListener("click", getQuote);
twitterBtn.addEventListener("click", tweetQuote);
getQuote();
*/

//******************************************************************** */
