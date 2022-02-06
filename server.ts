// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/movie-db');

import express from 'express';
const app = express();

app.get('/hello', (req, res) =>
    res.send('Hello World!'));

const PORT = 4000;
app.listen(PORT);
// listen to port 4000
// require('./movies/service')(app);
// app.listen(4000);






