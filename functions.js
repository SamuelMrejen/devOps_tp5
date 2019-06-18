
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


module.exports = {
    sayHello,
    findUserByName,
    getName,
    sayHelloToUser,
  
}


