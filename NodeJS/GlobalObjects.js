console.log("dir name: " + __dirname);
console.log("file name: " + __filename);

function printHello () {
  console.log("Hello " + "someone");
}

// Call this function after 1.5 seconds
// var t = setTimeout(printHello, 1500);

// This can clear the timer
// clearTimeout(t);


var t = setInterval(printHello, 1000);

setTimeout(function () {
  clearTimeout(t);
}, 4000);
