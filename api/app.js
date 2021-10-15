const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bookRoute = require('./routes/books');
const bodyParser = require('body-parser');
const ejs = require('ejs');

dotenv.config();
app.use(express.json());

app.set('view engine','ejs');

mongoose.connect(process.env.MONGO_URL)
    .then(console.log("connected"))
    .catch((err) =>console.log(err));

// Setting up basic middleware for all Express requests
app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
app.use("/api/books",bookRoute)
app.listen("5000", () => {
    console.log("Backend is running.");
});

