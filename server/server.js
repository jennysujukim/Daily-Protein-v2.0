const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoutes = require('./routes/user-routes');
const profileRoutes = require('./routes/profile-routes')

const app = express();
const PORT = process.env.PORT || 8080;

// user build folder to serve all static files
const buildPath = path.join(__dirname, '..', 'build');

app.use(express.static(buildPath));

// catch-all route to handle client-side routing
app.get("*", (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
})

// parse incoming request bodies in JSON format
app.use(bodyParser.json());

// enable CORS
app.use(cors());

// restrict webpages from making requests to a different domain
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
})


app.use('/api/user', userRoutes);
app.use('/api/profile', profileRoutes);




app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`) 
})