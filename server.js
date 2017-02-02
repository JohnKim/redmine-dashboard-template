var express = require('express');
var hbs = require('express-hbs');
var fs = require('fs');
var fp = require('path');
var Redmine = require('node-redmine');

var relative = (path) => fp.join(__dirname, path);

console.log(process.env.REDMINE_HOST, { apiKey: process.env.REDMINE_APIKEY });

var redmine = new Redmine(process.env.REDMINE_HOST, { apiKey: process.env.REDMINE_APIKEY });

var redmineApi = (resource, parameter, callback) => {
  redmine[resource](parameter, (err, data) => {
    if (err) callback(err);
    callback(data);
  });
};

var app = express();
app.use(express.static(relative('public')));
app.engine('hbs', hbs.express4({
  partialsDir: [relative('views/partials')]
}));
app.set('view engine', 'hbs');
app.set('views', relative('views'));

// API request mapper
app.get('/api/:resource', function(req, res) {
  var result = redmineApi(req.params.resource, req.query, (result) => res.json(result) );
});

// Page request mapper
app.get('/', (req, res) => {
  res.render('index', {
    // put parameters using for hbs templates
  });
});

app.listen(process.env.PORT || 3000);
// Add more page reqeust mappers
// . . . . . .
