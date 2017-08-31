/**
 * Created by nakanara on 2017-08-31.
 */
var express = require('express');
var basicAuth = require('basic-auth-connect');
var app = express();

var auth = basicAuth(function(user, pass) {
    return (user === 'user1' && pass === 'test');
});
app.get('/library', function(req, res) {
    res.send('Welcome to the library.');
});
app.get('/restricted', auth, function(req, res) {
    res.send('Welcome to the restricted section.');
});
app.listen(80);
