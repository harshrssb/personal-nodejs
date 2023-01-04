const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');


const url = 'mongodb://127.0.0.1/personal';
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});



app.get('/', (req, res) => {
    res.render('../index.ejs')
})



app.listen(8080, () => {
    console.log('8080')
})
