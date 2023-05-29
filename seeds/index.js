const mongoose = require('mongoose');
const Campground = require('./models/campground')


mongoose.connect('mongodb://127.0.0.1/yelp-camp')

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
   console.log("Database connected");
});

