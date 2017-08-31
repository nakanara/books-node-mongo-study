/**
 * Created by nakanara on 2017-08-30.
 */
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/words', { useMongoClient: true } );
var wordSchema = require('./word_schema.js').wordSchema;
var Words = mongoose.model('Words', wordSchema);

mongoose.connection.once('open', function(){
    var query = Words.findOne().where('word', 'book');
    query.exec(function(err, doc){
        console.log("Is Document New? " + doc.isNew);
        console.log("\nBefore Save: ");
        console.log(doc.toJSON());
        //doc.set('word','Book');
        //doc.set('first','B');
        doc.word = "Book";
        doc.first = "B";

        console.log("\nModified Fields: ");
        console.log(doc.modifiedPaths());
        console.log(doc.toJSON());

        var error = doc.validateSync();
        console.log("sync=" + error);

        //doc.update({word:'book'}, {word:'Book', first:'B'});
        doc.save(function(err,  product, numAffected){
            console.log("\nAfter Saveeeeeeeeee: ");
            console.log("\nAfter productproduct: " + product);
            console.log("\nAfter numAffectednumAffected: " + numAffected);
            if(err) {
                console.log("\nErrrrrrrrrr:" + err);
            } else {
                console.log("\nAfter Saveeeeeeeeee:xxxxxxxxxxxxxxx ");
                Words.findOne({word:'Book'}, function(err, doc){
                    console.log("\nAfter tttt222ttt: ");
                    if(doc) {
                        console.log(doc.toJSON());
                        mongoose.disconnect();
                    }
                });
                Words.findOne({word:'book'}, function(err, doc){
                    console.log("\nAfter t111tttttt: ");
                    if(doc) {
                        console.log(doc.toJSON());
                        mongoose.disconnect();
                    }
                });
            }
        });


        Words.findOne({word:'book'}, function(err, doc){
            console.log("\nAfter xxxxxxxxx: ");
            if(doc) {
                console.log(doc.toJSON());
            }
        });




        Words.findOne({word:'Book'}, function(err, doc){
            console.log("\nAfter ttttttt: ");
            if(doc) {
                console.log(doc.toJSON());
            }
        });

        /*doc.save(function(err, doc){
            console.log("\nAfter Savexxxxxxxxxx: ");
            console.log(err);
            console.log(doc.toJSON());
            Words.findOne({word:'Book'}, function(err, doc){
                console.log("\nAfter Save: ");
                //console.log(doc.toJSON());
                mongoose.disconnect();
            });
        });*/

    });
});