import express from 'express';
const app = express();
const PORT = 4000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movie-db');


app.get('/hello', (req, res) =>
    res.send('Hello World!'));

require('./movies/service')(app);
app.listen(PORT);







