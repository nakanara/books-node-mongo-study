/**
 * Created by nakanara on 2017-08-24.
 */
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost/", function(err, db) {

    var newDB = db.db("testDB");

    db.authenticate("test", "test", function(err, results) {

        if (err){
            console.log("Authentication failed . . .");
            client.close();
            console.log("Connection closed . . .");
        }else {
            newDB.collectionNames(function (err, collectionNames) {
                console.log("Initial collections: ");
                console.log(collectionNames);


                newDB.createCollection("newCollection", function (err, collection) {
                    newDB.collectionNames(function (err, collectionNames) {
                        console.log("Collections after creation: ");
                        console.log(collectionNames);
                        newDB.dropCollection("newCollection", function (err, results) {
                            newDB.collectionNames(function (err, collectionNames) {
                                console.log("Collections after deletion: ");
                                console.log(collectionNames);
                                db.close();
                            });
                        });
                    });
                });
            });
        }
    });
});