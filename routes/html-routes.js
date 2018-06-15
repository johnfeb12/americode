// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/services", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/services.html"));
  });

  app.get("/about-us", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about-us.html"));
  });

  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  });

  //route for admin
  app.get("/admin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/admin.html"));
  });
//   app.get("/login", function(req, res) {
//     // If the user already has an account send them to the members page
       
//     if (req.user) {
//       res.json("/user/:id");
//     }else{
//     res.sendFile(path.join(__dirname, "../public/auth.html"));
//     }
    
//   });


//   app.get("/api/signup", function(req, res) {
//     // If the user already has an account send them to the members page
//     if (req.user) {
//       res.redirect("/user/:id");
//     }
//     res.sendFile(path.join(__dirname, "../public/auth.html"));
//   });


  
//Login html route to check for email goes here

};
