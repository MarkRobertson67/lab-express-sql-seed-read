
// DEPENDENCIES
const express = require('express');
const cors = require ("cors");
const songController = require('./controllers/songController')

// CONFIGURATION
const app = express();


// MIDDLEWARE

app.use(express.json())  // takes json and converts to JS
app.use(cors());  //


// ROUTES
app.use("/songs", songController);

app.get('/', (req, res) => {
    res.send("Welcome to Tuner");
});

app.get('*', (req, res) => {
    res.status(404).send('Come back later... idk');
});


// EXPORT
module.exports = app;