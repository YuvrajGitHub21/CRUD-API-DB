const express = require("express");
const { MongoServerClosedError } = require("mongodb");
const mongoose = require("mongoose");
const User = require('./models/users.model.js');
const productRout = require('./routes/product.routes.js');

mongoose
  .connect("mongodb://127.0.0.1:27017/first_crud")
  .then(() => console.log("Mongo Connected!"))
  .catch((err) => console.log("Mongo error", err));

const app = express();

app.use(express.json());

app.use("/api/User",productRout);


app.get("/", function (req, res) {
  res.send("Hello World update");
});

app.listen(3000, () => {
  console.log("Server started");
});
