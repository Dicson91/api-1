var mysql = require ('mysql');
const express = require ('express');


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""

});


con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
});