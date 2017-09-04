/**
 * Created by nakanara on 2017-08-31.
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use('/', express.static(__dirname+'/static')).
    use('/images', express.static(__dirname+ '/../images')).
    use('/lib', express.static( __dirname+'/../lib'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
var serviceDays = days.slice(0);

app.get('/reset/days', function(req, res){
    serviceDays = days.slice(0);
    res.json(serviceDays);
});

app.post('/remove/day', function(req, res){
    if (serviceDays.length > 2){
        serviceDays.splice(serviceDays.indexOf(req.body.day), 1);
        console.log(days);
        res.json(serviceDays);
    }else {
        res.json(400, {msg:'You must leave 2 days'});
    }
});
app.listen(80);