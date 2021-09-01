const express = require("express");
const app = express();
var session = require('express-session');
const cookieParser = require('cookie-parser');
const { response } = require("express");
const path = require('path')
const userlogin = require('./static/js/login.js')
// var cors = require('cors')

// const oneDay = 1000*60*60*24;

// app.set('trust proxy', 1)
// app.use(session ({
//     secret: 'Minh',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {secure : true, maxAge : oneDay}
// }))

// app.use(express.json());
// app.use(express.urlencoded({ extended : true}));
app.use(express.static(__dirname + '/static'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/static/home.html'))

});
app.get('/:username', (req, res) => {
    console.log(req.params);
    res.sendFile(path.join(__dirname + '/static/MainPage.html'))
});
app.listen(5000,() =>{
    console.log('Server is running on port 5000');
})