/**
 * Created by nakanara on 2017-09-01.
 */
/**
 * currency[:symbol] : 통화값에 대한 포맷 ex) {{123.45 | currency:"$USD"}}
 * filter:exp:compare : 비교값에 기반한 exp 파라미터 표현식 {{"Some Text to Compare" | filter:"text":false}}
 * json : 자바스크립트 객체를 json 문자열로 {{ {'name':'test'} | json}}
 * limitTo:limit : 한계ㅑㄹㅇ을 사용한 표식. 데이터 제한.  {{ ['a', 'b', 'c', 'd'] | limitTo:2 }}
 * lowercase : 소문자 표현
 * uppercase : 대푠자 표현
 * number{:fraction] : 숫자를 텍스트로 변경 {{ 123.456 | number : 3}}
 * orderBy:exp:reverse : exp 파라미터를 기반으로 배열 정렬
 * date{:format] : format 파라미터를 사용하여 정렬
 *  - medium : 'MMM d, y h:mm:ss a'
 *  - short: 'M/d/yy h:mm a'
 *  - fullDate: 'EEEE, MMMM d, y'
 *  - longDAte: 'MMMM d, y'
 *  - mediumDate: 'MMM d, y'
 *  - shortDate : 'M/d//yy'
 *  - mediumTime : 'h:mm:ss a'
 */
angular.module('myApp', []).
controller('myController', function($scope) {
    $scope.JSONObj = {title:"myTitle"};
    $scope.word="Supercalifragilisticexpialidocious";
    $scope.days=['Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday'];
});