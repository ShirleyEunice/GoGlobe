var express = require('express');
var app = express();
var path = require('path');

var bodyparser = require('body-parser');
const urlbody = bodyparser.urlencoded({extended:false})

app.post('/process_get',urlbody, function (req, res) {
   // Prepare output in JSON format
   response = {
      email:req.body.email,
      password:req.body.password
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

app.use(express.static('public'));
app.get('/', function (req, res) {
res.sendFile(path.join(__dirname,"index.html"));
})

app.get('/loginpost', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(5000, function () {
   console.log("Express App running at http://127.0.0.1:5000/");
})