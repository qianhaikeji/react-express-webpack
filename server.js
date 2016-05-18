'use strict';

var app = require('./server/app');

var PORT = parseInt(process.env.LC_APP_PORT || 3000);
app.listen(PORT, function () {
  console.log('Node app is running, localhost:', PORT, '\n\n\n\n\n\n');
});