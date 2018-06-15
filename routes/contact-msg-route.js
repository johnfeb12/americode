// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
//require models so you can use the db to post and get
var db = require("../models");


// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.post("/api/contact", function(req, res) {
    console.log(req.body);
    db.contactMsg.create({
      name: req.body.name,
      email: req.body.email,
      msgbody: req.body.msgbody,
      read: req.body.read,
      replied: req.body.replied
    }).then(function(dbMsg) {
               res.json(dbMsg);
      });
  });

  
app.get('/api/admin', function(req, res){
  db.contactMsg.findAll({}).then(function(msgBody){
    res.json(msgBody)
  })
})
  
//Login html route to check for email goes here

};
