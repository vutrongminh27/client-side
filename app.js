const express = require("express");
const app = express();
var session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path')
require('dotenv').config();

app.use(express.static(__dirname + '/static'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/static/home.html'))

});
app.get('/login', (req, res) =>{
    res.sendFile(path.join(__dirname + '/static/login.html'))
});

app.get('/register', (req, res) =>{
    res.sendFile(path.join(__dirname + '/static/register.html'))
    
    document.getElementById('register-button').click(register(url, data))
});

app.get('/:username', (req, res) => {
    console.log(req.params);
    res.sendFile(path.join(__dirname + '/static/MainPage.html'))
});

app.listen(5000,() =>{
    console.log('Server is running on port 5000');
})

async function register() {
    const url = process.env.API_REQUEST_URL
    var data = {
        name : document.getElementById('exampleInputName').value,
        email : document.getElementById('exampleInputEmail').value,
        address : document.getElementById('exampleAddress').value,
        phone : document.getElementById('examplePhone').value,
        password : document.getElementById('exampleInputPassword').value
    }
    const response = await fetch(url,{
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        body: JSON.stringify(data)
    });
    return response.json();
}

// (function($){
//     "use strict";
//     $("#register-button").click(function() {
//         let endpoint = process.env.API_REGISTER_URL + "/customer/signup";
// 		console.log("singin");
//         console.log("Data: ", $("#in-username").val())
//         $.ajax({
//             type : "POST",
//             url : endpoint,
// 			dataType : 'json',
//             data : ({
//                 name : $("#exampleInputName").val(),
//                 email : $("#exampleInputEmailID").val(),
//                 password: $("#exampleInputPassword").val(),
//                 address: $("#exampleAddress").val(),
//                 phone: $("#examplePhone").val(),
//             }),
//             success : function(data){
// 				console.log("Success", data);
// 				// $(location).attr(href,"https://www.google.com/");;
// 				window.location.href = "/" + data.username;
//             }, 
// 			error: function(xhr, status, err) {
// 				console.log("err", err);
// 			}
//         });
//     });
// })(jQuery);
