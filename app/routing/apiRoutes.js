var express = require("express");
var path = require("path");
var friends = require("../data/friends")
var bodyParser = require("body-parser");



// console.log(friends);

module.exports = function (app) {

    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var response = req.body;
        friends.push(response)
    })
}