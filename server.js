const path = require('path');
const express = require('express');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(9000);
console.log('listening on port 9000');

module.exports = app;