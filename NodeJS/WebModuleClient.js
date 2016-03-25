var http = require("http");

var options = {
  host: "localhost",
  path: "/index.html",
  port: "8080"
};

var requestCallback = function (response) {
  var body = "";

  response.on("data", function (data) {
    body += data;
  });

  response.on("end", function () {
    console.log("finish.");
    console.log(body);
  });
}

var req = http.request(options, requestCallback);
req.end();
