var express = require("express");
var fs = require("fs");
var bodyParser = require('body-parser');

var app = express();
var urlencodedParser = bodyParser.urlencoded({extended: false});


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.get("/listUsers", function(req, res) {
    //res.sendFile(__dirname + "/user.json");
    fs.readFile(__dirname + "/user.json", "utf-8", function(err, data){
        if(err) {
            console.error(err);
        }else {
            res.end(data);
        }
    });
});

app.get("/:id", function(req, res) {
    fs.readFile(__dirname + "/user.json", "utf-8", function(err, data) {
        var data = JSON.parse(data);
        var user = data["user" + req.params.id];
        res.end(JSON.stringify(user));
    });
});

app.post("/addUser", function(req, res) {
    var user = {
        "user4" : {
            "name" : "mohit",
            "password" : "password4",
            "profession" : "teacher",
            "id": 4
        }
    };

    fs.readFile(__dirname + "/user.json", "utf-8", function(err, data) {
        var data = JSON.parse(data);
        data.user4 = user.user4;
        res.end(JSON.stringify(data));
    });
});

app.post("/deleteUser", urlencodedParser, function(req, res) {
    console.log(req.body.id);
    fs.readFile(__dirname + "/user.json", "utf-8", function(err, data) {
        var data = JSON.parse(data);
        delete data["user" + req.body.id];
        res.end(JSON.stringify(data));
    });
});

var server = app.listen("8080", function () {
    console.log("Server listening at " + server.address().address + ":" + server.address().port);
});
