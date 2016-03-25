var events = require("events");
var eventEmitter = new events.EventEmitter();

var listener1 = function () {
  console.log("listener1 excuted.");
}

var listener2 = function () {
  console.log("listener2 excuted.");
}

eventEmitter.addListener("connection", listener1);
eventEmitter.addListener("connection", listener2);
var eventListeners = require("events").EventEmitter.listenerCount(eventEmitter, "connection");
console.log(eventListeners + " listeners(s) listening to connection event.");
eventEmitter.emit("connection");

console.log("listener1 will stop listening now.");
eventEmitter.removeListener("connection", listener1);
var eventListeners = require("events").EventEmitter.listenerCount(eventEmitter, "connection");
console.log(eventListeners + " listeners(s) listening to connection event.");
eventEmitter.emit("connection");

console.log("Program Ended.");
