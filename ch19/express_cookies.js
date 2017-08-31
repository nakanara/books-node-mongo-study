/**
 * Created by nakanara on 2017-08-31.
 */
/**
 * maxAge : 쿠키 소멸 시기 millisecond
 * httpOnly : bool,true 쿠키가 서버에 의해서만 접근가능, 클라이언트의 script로 접근 불가
 * signed: bool, true라면 쿠키가 사인이 될 것이므로 req.cookie객체가 아닌 req.signedCookie 객체 사용
 * path: 쿠키 경로
 *
 * http://blog.naver.com/PostView.nhn?blogId=rwans0397&logNo=220669157494
 */
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

app.use(cookieParser());
app.get('/', function(req, res) {
    console.log(req.cookies);
    if (!req.cookies.hasVisited){
        res.cookie('hasVisited', '1',
            { maxAge: 60*60*1000,
                httpOnly: true,
                path:'/'});
    }
    res.send("Sending Cookie");
});
app.listen(80);