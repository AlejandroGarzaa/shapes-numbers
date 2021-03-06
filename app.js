const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoute = require('./routes/users');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const shapeRoute = require('./routes/shapes');


// connect to db
mongoose.connect('mongodb+srv://username:username@cluster0.uuu2u.mongodb.net/shapesData?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected to db'));

// session variables
const NODE_ENV = 'development';
const SESS_NAME = 'user';
const SESS_SECRET = 'secret';
const SESS_LIFETIME = 1000 * 60 * 60; //setting session lifetime for an hour


// session
app.use(
    session({
        name: SESS_NAME,
        secret: SESS_SECRET,
        saveUninitialized: false,
        resave: false,
        store: MongoStore.create({
            mongoUrl:
                'mongodb+srv://username:username@cluster0.uuu2u.mongodb.net/shapesData?retryWrites=true&w=majority',
            collection: 'sessions',
            ttl: parseInt(SESS_LIFETIME),
        }),

        cookie: {
            sameSite: true,
            secure: NODE_ENV === 'production',
            maxAge: parseInt(SESS_LIFETIME),
        },
    })
);

const sessionMiddleware = (req, res, next) => {
    const user = req.session.username;
    if (!user) res.status(401).send('Please login into your user');
    else next();
};


// routes

app.use(express.json());
app.use('/user', userRoute);
app.use('/shape',sessionMiddleware, shapeRoute);


// server
app.listen(3000);






// middlewares
// const redirect = (req, res, next) => {
//     if(!req.session.username){
//         res.redirect('/login');
//     }else{
//         next();
//     }
// }

// const redirectHome = (req, res, next) => {
//     if(req.session.username){
//         res.redirect('/home');
//     }else{
//         next();
//     }
// }



