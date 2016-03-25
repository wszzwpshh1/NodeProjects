var Hello = function() {};

Hello.prototype.helloWorld = function() {
    return "Hello, World!";
}

Hello.prototype.helloSomeone = function(toGreet) {
    return this.sayHello() + " " + toGreet;
}

Hello.prototype.sayHello = function() {
    return "Hello";
}

module.exports = Hello;

//var Hello = {
//    helloWorld: function() {
//        return "Hello, World!";
//    },
//    helloSomeone: function(toGreet) {
//        return this.sayHello() + " " + toGreet;
//    },
//    sayHello: function() {
//        return "Hello";
//    }
//};
//
//exports = module.exports = Hello;