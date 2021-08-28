// const { resolveInclude } = require("ejs");
// const { response } = require("express");
// const { url } = require("./env.config");
// var browserify = require('browserify');
function userlogin(){
    var username= document.getElementById("username").value;
    var password = document.getElementById("password").value;
    fetch("http://192.168.1.58/api/auth/login", {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        body: {
            "username" : username,
            "password" : password
        }
    })
    .then(response => response.json())
    .then(result =>{
        console.log('success: ', result);
    })
    .catch(error => {
        console.error('Error: ', error);
    })
}
