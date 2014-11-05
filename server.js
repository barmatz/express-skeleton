'use strict';

var express = require('express'),
    morgan = require('morgan'),
    favicon = require('serve-favicon'),
    chalk = require('chalk'),
    path = require('path'),
    app,
    server;

// Initiate server
app = express();

// Use the Morgan logger in development mode. See https://www.npmjs.org/package/morgan
app.use(morgan('dev'));

// A middleware that will serve a favicon on any page
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Middleware that will load static files from the public directory
app.use('/', express.static(path.join(__dirname, 'public')));

// Custom GET middleware that prints a random number
app.get('/random', function (req, res) {
    res.send(Math.random().toString());
});

// Start the server
server = app.listen(process.env.PORT || 3000, function () {
    var address = server.address();

    console.log('server running on %s', chalk.cyan(address.address + ':' + address.port));
});

module.exports = server;