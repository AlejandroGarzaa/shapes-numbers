const express = require('express');
const app = express();
const mongoose = require('mongoose');

// connect to db
mongoose.connect('mongodb+srv://username:username@cluster0.uuu2u.mongodb.net/shapesData?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected to db'));

// middleware


// server
app.listen(3000);