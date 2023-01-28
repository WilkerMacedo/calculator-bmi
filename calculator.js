const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.listen(3000, function() {
  console.log("server started on port 3000");
});

// regular calculator code,

app.post("/", function(req, res) {

  function select(num1, num2, operator) {
    return eval(`${Number(num1)} ${operator} ${Number(num2)}`);
  }

var num1 = Number(req.body.num1);
var num2 = Number(req.body.num2);
var operator = req.body.operator;

const result = select(num1, num2, operator);

  res.send("<h1>Answer: " + num1 + " " + operator + " " + num2 + " = " + result + "!</h1>");
});


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

//bmi calculator code

app.post("/bmicalculator", function(req, res) {

var weight = Number(req.body.weight);
var height = Number(req.body.height);
var result = Math.floor(weight / (height * height));

  res.send("<h1>Your BMI is " + result +  "!</h1>");
});

app.use(express.static("public"));
app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});
