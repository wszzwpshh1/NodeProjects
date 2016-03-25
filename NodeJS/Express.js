var express = require("express");
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


//import static resources
app.use(express.static("static"));

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
    console.log("Got a GET request for the homepage");
    res.send('Hello GET');
});

app.get('/index.html', function (req, res) {
    console.log("Got a GET request for index.html");
    console.log(__dirname + "/index.html");
    res.sendFile(__dirname + "/index.html");
});
app.get('/process_get', function (req, res) {
    var response = {
        firstName: req.query.first_name,
        lastName: req.query.last_name
    };
    console.log(response);
    res.send(JSON.stringify(response));
    //res.send(response);
});

// This responds a POST request for the homepage
app.post('/', function (req, res) {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
});
app.post('/process_post', urlencodedParser, function (req, res) {
    var response = {
        firstName: req.body.first_name,
        lastName: req.body.last_name
    };
    console.log(response);
    res.send(JSON.stringify(response));
});


// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
    console.log("Got a DELETE request for /del_user");
    res.send('Hello DELETE');
});

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
    console.log("Got a GET request for /list_user");
    res.send('Page Listing');
});

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {
    console.log("Got a GET request for /ab*cd");
    res.send('Page Pattern Match');
});

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example server listening at http://" + host + ":" + port);
});
