/**
 * Created by nakanara on 2017-08-31.
 */
var express = require('express');
var app = express();

app.use('/', express.static(__dirname+'/static')).
use('/images', express.static(__dirname+ '/../images')).
use('/lib', express.static( __dirname+'/../lib'));
app.listen(80);