const express = require("express");
const app = express();
var session = require('express-session');
const cookieParser = require('cookie-parser');
const { response } = require("express");
const path = require('path')
const userlogin = require('./static/js/login.js')

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
// app.use(cookieParser());


app.get('/', (req, res) => {
    // session=req.session;
    // if(session.user){
    //     res.send('./view/index.html')
    // }else{
    //     res.send('./view/home.html')
    // }
    res.sendFile(path.join(__dirname + '/static/home.html'))

});

// const url = require("./view/js/env.config")
// function userlogin(){
//     var username= document.getElementById("username").value;
//     var password = document.getElementById("password").value;
//     fetch(url.url_api + "/auth/login", {
//         method: 'POST',
//         body: {
//             "username" : username,
//             "password" : password
//         }
//     })
//     .then(response => response.json())
//     .then(result =>{
//         console.log('success: ', result);
//     })
//     .catch(error => {
//         console.error('Error: ', error);
//     })
// }
// fetch("./data.json")
// .then((response) =>{
//     return response.json()
// })
// .then((data) => {
//     console.log(data)
// })
// .catch((err) => {
//     console.log()
// })



app.listen(5000,() =>{
    console.log('Server is running on port 3000');
})