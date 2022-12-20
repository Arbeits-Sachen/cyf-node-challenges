const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));

let list = require("./data.json");

app.get("/", function (request, response)
{
  response.send("Go To /lists");
});

app.listen(process.env.PORT);





app.get("/lists", (req, res) =>
{
  res.status(200).send(list);
});


app.get("/lists/:name", function (req, res)
{
  let name = req.params.name;
  let filterRole = list.filter(role => role.name === name);

  res.status(200).send(filterRole);
});

app.get("/lists/delete/:name", function (req, res)
{
  let name = req.params.name;
  let filterRole = list.filter(role => role.name === name);

  list = list.filter(list => list.name !== name);

  res.send(filterRole);
});

app.put("/lists/:name", function (req, res)
{
  holder = {
    "name": "my-new-list",
    "members": ["me@me.com"]
  }



  let name = req.params.name;
  let filterRole = list.filter(role => role.name === name);

  list = list.filter(list => list.name !== name) + holder;

  res.send(filterRole);
});
