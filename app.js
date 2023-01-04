const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

const url = 'mongodb://127.0.0.1/personal';
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});


app.get('/', (req, res) => {
    res.render('../mainPage.ejs')
})



app.listen(port, () => {
    console.log('3000')
})
