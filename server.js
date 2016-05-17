var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser'); 


// var angular = require('angular');
// var ngTouch = require('angular-touch');
// var carousel  = require('angular-carousel');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.use(express.static(path.join(__dirname, './client')));

app.listen(8000, function() {
  console.log('cool stuff on: 8000');
});