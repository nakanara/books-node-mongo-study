/**
 * Created by nakanara on 2017-08-24.
 */
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/", function(err, db) {

    var myDB = db.db("test");
    myDB.collection("nebulae", function(err, nebulae){
        nebulae.find({type:"planetary"}, function(err, items){
            items.toArray(function(err, itemArr){
                console.log("Before Update: ");
                console.log(itemArr);
                nebulae.update({type:"planetary", $isolated:1},
                    {$set:{type:"Planetary", updated:true}},
                    {upsert:false, multi:true, w:1},
                    // upsert 새로운 문서 생성 안됨. multi : 여러개 문서 변경 , w: 반환되기 전 쓰기 연산을 기다리는
                    function(err, results){
                        nebulae.find({type:"Planetary"}, function(err, items){
                            items.toArray(function(err, itemArr){
                                console.log("After Update: ");
                                console.log(itemArr);
                                db.close();
                            });
                        });
                    });
            });
        });
    });
});