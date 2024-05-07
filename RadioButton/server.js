const apartments = require("./data");

const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const HOST = 5000;

app.use("/app", express.static(path.join(__dirname, "app")));

app.get("/", (req, res) => {
  res.redirect("/app");
});

app.use(cors());

app.get("/apartments", (req, res) => {
  let query = req.query;
  let newArr = apartments.filter(
    (apartment) => apartment.city.toLowerCase() === query.city.toLowerCase()
  );
  res.json(newArr);
});

app.listen(HOST, () => {
  console.log(HOST + " works");
});
