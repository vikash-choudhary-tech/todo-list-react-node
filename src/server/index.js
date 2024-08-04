const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const database = require("./dbConnection");

const app = express();
app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:3306",
  })
);

const PORT = 8000;

app.post("/addtodo", (req, res) => {
  const reqQuery = `INSERT INTO person (name, age, id) VALUES ('${req.body.title}', 21, 20);`;
  database
    .queryDatabase(reqQuery)
    .then((response) => console.log("Response in index", response));
  res.json({
    message: `Updated the db with data ${req.body.title}`,
    body: req.body,
  });
});

app.listen(PORT, () => {
  console.log("Server started on PORT", PORT);
});
