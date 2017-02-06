var express = require('express');
var PythonShell = require('python-shell');
var cmd = require("node-cmd");
var bodyParser = require('body-parser')


fs = require('fs');

var app = express();
var jsonParser = bodyParser.json()


app.use(bodyParser.json({ type: 'application/*+json' }))


app.get('/', function (req, res) {
  var options = {
  	mode: 'text',
  	args: [req.url]
  }
  PythonShell.run('test.py', options, function (err, results) {
  if (err) throw err;
	fs.readFile('output.txt', 'utf8', function (err,data) {
	  if (err) {
	    return console.log(err);
	  }
	  res.send(data);
	});
  });
});

app.post('/api/users', jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
});

app.listen(3003, function () {
  console.log('Example app listening on port 3000!')
});

