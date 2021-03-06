const express = require("express");
const app = express();

const path = require("path");

const drinksRouter = require("./controller/drinkController");


app.use(express.static('../client/view'))



const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "/images")));

app.get("/images", (req, res) => {
  console.log(got);
});

app.use("/drinks", drinksRouter);

app.post("/", (req, res) => {
  res.status(405).send("Not allowd!");
});

module.exports = app;
