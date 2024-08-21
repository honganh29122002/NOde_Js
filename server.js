const express = require("express"); //common js
const app = express(); //app express
//import dotenv để dùng process.env
require("dotenv").config();
// const port = 3000; //port ==> hardcode
const port = process.env.PORT || 8080;
const path = require("path");
const hostname = process.env.HOST_NAME;
// console.log(process.env); // remove this after you've confirmed it is working

//config template ejs (Khai bao truoc route)
app.set("views", path.join(__dirname, "./src/views"));
app.set("view engine", "ejs");
//khai bao route
//res, req là 2 biến môi trường cho sẵn chỉ cần dùng
app.get("/", (req, res) => {
  res.send("Express says hello world!");
});
//more routes
app.get("/honganh", (req, res) => {
  res.send("Express says honganh!");
});
app.get("/leanh", (req, res) => {
  //   res.send("<h1>Express says leanh</h1>!");
  res.render("sample.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on hostname and port ${hostname}:${port}`);
});
