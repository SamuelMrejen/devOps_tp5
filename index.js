var express = require('express');
var app = express();

var users = [
    {
        name: "Sam",
        password: "Sam"
    }
]

function sayHello(name) {
    return "Hello " + name;
} 

function findUserByName(name) {
    var user = users.find(user => user.name === name);
    return user
}

function getName(user) {
    return user.name;
}

function sayHelloToUser(user) {
    var name = getName(user);
    return "Hello " + name;
} 



app.get('/', function (req, res) {
  res.send(sayHello("Boby"));
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
});

module.exports = {
    sayHello,
    findUserByName,
    getName,
    sayHelloToUser
}