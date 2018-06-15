var express = require("express");
var stripe = require("stripe")("sk_test_k18qAfXa72ztaLFl1vO3Tvak")
var hbs = require("hbs");
var bodyParser = require("body-parser");

var app = express();

app.set("view engine", "hbs")
app.set("views","/Users/jonathonreich/Desktop/americode")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.get('/', function (req,res) {

res.render("services",{

});
});


app.get('/', function (req,res) {

res.render("paysuccess",{

});
});

app.post('/charge', function (req,res) {
	
});





app.listen(3000,function () {
	console.log("stripe is running")
})