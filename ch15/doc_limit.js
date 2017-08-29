/**
 * Created by nakanara on 2017-08-28.
 */
/**
 * Option
 * 
 * limit : 최대 갯수
 * sort : 정렬순서 1 : 오름, -1 내림, sort:[['name':1], ['value':-1]]
 * fields: 반환또는 제외할 필드 1 포함, 0 제외, fields:{name:1, value:1}
 * skip: 결과에서 skip 할 건수
 * hint : 결과 세트 빌드시 특정 인덱스 hint:{'_id':1}
 * snapshot : true스냅샷 질의
 * timeout : 타입아웃 설정
 * maxScan: 살펴볼 문서의 최대 개수
 * comment: 몽고DB로그에 출력될 문자열
 * readPreference: 몽고DB 서버 중 어디에서 읽어올지 명시
 * numberOfRetries: 질의 수행할 타임아웃 재시도 횟수 Default :5
 * partiial : 샤딩된 시스템들이 공유하는 데이터에 대한 질의할 때 커서가 결과의 일부를 반환함을 의미
 */
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/", function(err, db) {
    var myDB = db.db("words");
    myDB.collection("word_stats", limitFind);
    setTimeout(function(){
        db.close();
    }, 3000);
});

function displayWords(msg, cursor, pretty){
    cursor.toArray(function(err, itemArr){
        console.log("\n"+msg);
        var wordList = [];
        for(var i=0; i<itemArr.length; i++){
            wordList.push(itemArr[i].word);
        }
        console.log(JSON.stringify(wordList, null, pretty));
    });
}
function limitFind(err, words){
    words.count({first:'p'}, function(err, count){
        console.log("Count of words starting with p : " + count);
    });
    words.find({first:'p'}, function(err, cursor){
        displayWords("Words starting with p : ", cursor);
    });
    words.find({first:'p'}, {limit:5}, function(err, cursor){
        displayWords("Limiting words starting with p : ", cursor);
    });
}