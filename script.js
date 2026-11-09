const showQuote = document.getElementById("show-quote");
const author = document.getElementById("author");
const newQuote = document.getElementById("new-quote");
const copyQuote = document.getElementById("copy-quote");
const counter = document.getElementById("quote-counter");
const quotes = [
    {
        text: "Keep learning, keep growing.",
        author: "Mohd Aafak"
    },
    {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        text: "Great things are done by a series of small things brought together.",
        author: "Vincent van Gogh"
    },
    {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Learning never exhausts the mind.",
        author: "Leonardo da Vinci"
    },
    {
        text: "Success is the sum of small efforts, repeated day in and day out.",
        author: "Robert Collier"
    },
    {
        text: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    }
];
newQuote.addEventListener("click", displayRandomQuote);
copyQuote.addEventListener("click",function(){
    navigator.clipboard.writeText(`${showQuote.textContent}-${author.textContent}`)
    .then(() =>
    {
        alert("Copied!");
    })
    .catch(() => {
    alert("Copy failed!");
})
})
function displayRandomQuote(){
     let random = Math.floor(Math.random() * quotes.length);
    let obj = quotes[random];
    counter.textContent = `Quote ${random + 1} of ${quotes.length}`;
    showQuote.textContent = obj.text;
    author.textContent = obj.author;
}
displayRandomQuote();