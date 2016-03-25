//Import events module
var events = require("events");
//Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

//Create an eventHandler
var connectedHandler = function connected () {
  console.log("connection successful.");
  //fire the data_received event
  eventEmitter.emit("data_received");
}

//Bind event and eventHandler
eventEmitter.on("connection", connectedHandler);
eventEmitter.on("data_received", function () {
  console.log("data received successfully.");
});

eventEmitter.emit("connection");

console.log("Program Ended");
