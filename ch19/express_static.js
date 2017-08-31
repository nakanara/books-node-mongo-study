/**
 * Created by nakanara on 2017-08-31.
 */
var express = require('express');
var app = express();

/**
 * express.static(path, [option]);
 * maxAge: 브라우저 캐시의 만료시간 default 0 millisecond
 * hidden : boolean true라면 숨김파일 전송 기본 false
 * redirect: boolean true라면 요청경로가 디렉토리이며, 요청이 /로 시작하면 리다이렉션 기본 true
 * index: 루트 경로에서의 기본 파일 경로. 기본 index.html
 */

//app.use('/', express.static('./static'), {maxAge: 60*60*1000});
app.use('/', express.static(__dirname+'/static', {maxAge: 60*60*1000}));
app.use('/images', express.static(__dirname+'/../images'));


app.listen(80);