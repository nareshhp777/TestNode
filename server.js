// server.js

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  Transaction = require("./api/models/Transaction"),
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/transactionRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('RESTful API server started on: ' + port);