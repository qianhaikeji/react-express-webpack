'use strict';

var app;
var isServerRender = process.env.NODE_ENV === 'server-render';

if (isServerRender) {
    app = require('./server/app');
} else {
    var express = require('express')
    var path = require('path')
    var compression = require('compression')

    app = express()

    app.use(compression())

    // serve our static stuff like index.css
    app.use(express.static('public'))

    // send all requests to index.html so browserHistory works
    app.get('*', function (req, res) {
      res.sendFile('index.html', {'root': './public/'})
    })
}

var PORT = parseInt(process.env.LC_APP_PORT || 3000);
app.listen(PORT, function () {
  console.log('Node app is running, localhost:', PORT, '\n\n\n\n\n\n');
});




