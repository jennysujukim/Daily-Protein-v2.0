const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv").config();
const mongoose = require('mongoose');

const profileRoutes = require('./routes/profile-routes')
const trackerRoutes = require('./routes/tracker-routes')

const app = express();
const PORT = process.env.REACT_APP_PORT || 5000;

// parse incoming request bodies in JSON format
app.use(bodyParser.json());

// enable CORS
app.use(cors());

// restrict webpages from making requests to a different domain
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
})


// routes
app.use('/api/profile', profileRoutes);
app.use('/api/tracker', trackerRoutes);


// user build folder to serve all static files
const buildPath = path.join(__dirname, '..', 'build');

app.use(express.static(buildPath));

// catch-all route to handle client-side routing
app.get("*", (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
})

mongoose
    .connect(`mongodb+srv://${process.env.MONGO_DB_USERNAME}:${encodeURIComponent(process.env.MONGO_DB_PASSWORD)}@cluster0.c0569gh.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`) ;
         })
    })
    .catch((error) => {
        console.log(error);
    });

