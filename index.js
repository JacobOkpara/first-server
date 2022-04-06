const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Everyone!!!");
});

app.get("/greet", (req, res) => {
  res.send("Hello World!!");
});

app.listen(4000, (req, res) => {
  console.log("🚀server running on PORT 4000");
});
