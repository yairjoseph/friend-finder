var express = require("express");
var path = require("path");


module.exports = function(app){


app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  app.use('/style.css', express.static('..public/style.css'));

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

}