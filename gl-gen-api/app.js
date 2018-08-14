const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const AddingRoute = require("./api/routes/AddAddress");
const phoneauth = require("./api/routes/phoneauth");
const verifyphone = require("./api/routes/verify");
const getaddress = require("./api/routes/GetLocation");


mongoose.connect(
  "mongodb+srv://dsall:oftHLBZQfkUK24Oz@test-rbyf3.mongodb.net/gmaps_users",  { useNewUrlParser: true }
);

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// Routes which should handle requests
app.use("/AddAddress", AddingRoute);
app.use("/phoneauth", phoneauth);
app.use("/verify", verifyphone);
app.use("/getaddress", getaddress);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});




app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;