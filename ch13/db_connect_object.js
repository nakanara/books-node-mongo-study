/**
 * Created by nakanara on 2017-08-24.
 */

var MongoClient = require('mongodb').MongoClient;


var client = new MongoClient.connect('mongodb://localhost:27017/test', function(err, client) {
    console.log("ZZZZZZZZZZZZZZZ.");
    if(err){
        console.log("Connection Failed Via Client Object.");
    } else {
        var db = client.db("test");
        if (db){
            console.log("Connected Via Client Object . . .");
            db.authenticate("test", "test", function(err, results){
                if (err){
                    console.log("Authentication failed . . .");
                    client.close();
                    console.log("Connection closed . . .");
                }else {
                    console.log("Authenticated Via Client Object . . .");
                    db.logout(function(err, result) {
                        if(!err){
                            console.log("Logged out Via Client Object . . .");
                        }
                        client.close();
                        console.log("Connection closed . . .");
                    });
                }
            });
        } else {
            console.log("db not found");
        }
    }
});