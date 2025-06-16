require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
//idk what is going on please dont ask me 
app.get("/", (req, res) => {
  res.send("Hello World! from backend");
});

app.get("/login" , (req, res) => {
  res.send("<h1>Hello World! from login</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
console.log("backend"); 