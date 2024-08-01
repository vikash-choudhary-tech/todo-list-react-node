const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());

app.use(
  //   cors({
  //     // origin: "http://localhost:3000",
  //     // methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  //     // allowedHeaders: "Content-Type",
  //   })
  cors()
);

const PORT = 8000;

app.post("/addtodo", (req, res) => {
  const data = req.body;
  console.log(data);
  console.log("Req body", req.body.title);
  res.json({
    message: `Updated the db with data ${req.body.title}`,
    body: req.body,
  });
});

app.listen(PORT, () => {
  console.log("Server started on PORT", PORT);
});
