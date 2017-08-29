/**
 * Created by nakanara on 2017-08-29.
 */
/**
 * $project : 필드의 이름변경, 추가,제거 1:추가, 0: 제거,
 * $match : Query 객체 연산자 사용
 * $limit : 문서 수 제한
 * $skip : 건너뛸 문서 수
 * $unwind: 각 값을 위해 생성된 독립된 문서가 있는 배열 필드
 * $group : 새로운 문서 집합으로 분류
 *  - $addTotal
 *  - $first : 첫번째 값 반환
 *  - $last
 *  - $max
 *  - $min
 *  - $avg
 *  - $push : 문서들 중에서 선택된 필드 값들의 배열을 반환
 *  - $sum
 *
 * $sort: 문서 정렬
 *
 *  - $add
 *  - $divide :
 *  - $mod
 *  - $multiply :
 *  - $subtract
 *  - $concat
 *  - $strcasecmp
 *  - $substr
 *  - $toLower
 *  - $toUpper
 */
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost/", function(err, db) {
    var myDB = db.db("words");
    myDB.collection("word_stats", aggregateItems);
    setTimeout(function(){
        db.close();
    }, 3000);
});

function aggregateItems(err, words){
    words.aggregate([{$match: {first:{$in:['a','e','i','o','u']}}},
            {$group: {_id:"$first",
                largest:{$max:"$size"},
                smallest:{$min:"$size"},
                total:{$sum:1}}},
            {$sort: {_id:1}}],
        function(err, results){
            console.log("Largest and smallest word sizes for " +
                "words beginning with a vowel: ");
            console.log(results);
        });

    words.aggregate([{$match: {size:4}},
            {$limit: 5},
            {$project: {_id:"$word", stats:1}}],
        function(err, results){
            console.log("Stats for 5 four letter words: ");
            console.log(results);
        });

    words.aggregate([{$group: {_id:"$first", average:{$avg:"$size"}
    , max:{$max:"$size"}, min:{$min:"$size"}, count:{$sum:1}, total:{$sum:"$size"}}},
            {$sort: {average:-1}},
            {$limit: 5}],
        function(err, results){
            console.log("Letters with largest average word size: ");
            console.log(results);
        });
}