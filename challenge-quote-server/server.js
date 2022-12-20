const express = require("express");

const app = express();
const quotes = require("./quotes-with-id.json");


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));


app.get("/", function (request, response)
{
  response.send(
    ""
  );
});

//Displays all quotes
app.get("/quotes", function (request, response)
{
  response.json(quotes);
});

app.get("/quotes/random", function (request, response)
{
  let random = quotes[Math.floor(Math.random() * quotes.length)];

  response.send((random))
});

//Display quote matching an id
app.get("/quotes/:id?", function (request, response)
{
  const inputId = request.params.id;
  if (inputId)
  {
    const quote = quotes.filter(res => res.id == inputId);
    response.json(quote);
  }
});

//search by a term
function search(word)
{
  return quotes.filter(quote => quote.quote.includes(word));
}

app.get("/search", function (request, response)
{
  const searchWord = request.query.word;
  const result = search(searchWord);
  response.send(result);
});

app.listen(process.env.PORT);