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

function Hello() {};

Hello.prototype.foo = "foo";
Hello.prototype.bar = null	;

Hello.prototype.helloWorld = function() {
    return "Hello World!";
}

Hello.prototype.helloSomeone = function(toGreet) {
    return this.sayHello() + " " + toGreet;
}

Hello.prototype.sayHello = function() {
    return "Hello";
}

module.exports = Hello;