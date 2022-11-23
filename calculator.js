//jshint esversion:6


// server code
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));  // extednedd allows to parse nested objects   // urlencoded is used to parse (it is a format)






app.get("/", function (req, res) {
	// res.send("hello worldcccc")
	res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
	// console.log(req.body);           // print submitted data in cmd (by body parser)
	// console.log(req.body.num1 + "  " + req.body.num2); 
	var num1 = Number(req.body.num1);
	var num2 = Number(req.body.num2);
	var result = num1 + num2 ;
	res.send("Result of the calculation is " + result);
});





app.get("/bmicalculator", function (req, res) {
	res.sendFile(__dirname + "/bmiCalculator.html");
});


app.post("/bmicalculator", function(req, res){
	var w = parseFloat(req.body.weight);
	var h = parseFloat(req.body.height);
	
	var bmi = w/(h*h);
	
	res.send("Your BMI is : " + bmi);
});

app.listen("/", function () {
	console.log("server running at 3000 port");
});