/**
 * Created by nakanara on 2017-08-29.
 */
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/words', { useMongoClient: true });
//mongoose.openUri('mongodb://localhost/words');
mongoose.connection.on('open', function(){
    console.log(mongoose.connection.collection);
    //mongoose.connection.db.collectionNames(function(err, names){
    /*mongoose.connection.db.collectionName(function(err, names){
        console.log("///"+names);
        mongoose.disconnect();
    });*/

    var lists = mongoose.connection.db.listCollections();

    for(var list in lists) {
        console.log(list);

    };
    mongoose.disconnect();
});