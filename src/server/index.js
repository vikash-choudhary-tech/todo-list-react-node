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

app.get("/todo", (req, res) => {
  const reqQuery = `select * from person`;
  database.queryDatabase(reqQuery).then((response) => {
    console.log("Response from server", response);
    res.json({
      message: `Got the data from server`,
      body: response,
    });
  });
});

app.post("/addtodo", (req, res) => {
  const reqQuery = `INSERT INTO person (name, age) VALUES ('${req.body.title}', 21);`;
  database.queryDatabase(reqQuery).then((response) => {
    console.log("Response in index", response);
    res.json({
      message: `Updated the db with data ${req.body.title}`,
      body: req.body,
    });
  });
});

app.delete("/deleteTodo/:id", (req, res) => {
  const reqQuery = `DELETE from person where id = ${req.params.id}`;
  database.queryDatabase(reqQuery).then((response) => {
    console.log("Deleted item with id ", response);
    res.json({
      message: `Deleted todoitem with id ${response}`,
    });
  });
});

app.listen(PORT, () => {
  console.log("Server started on PORT", PORT);
});
