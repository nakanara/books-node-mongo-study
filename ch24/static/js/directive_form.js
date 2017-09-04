/**
 * Created by nakanara on 2017-09-01.
 */
/**
 * ngApp : 루트 앨리먼트 관련 애플리케이션을 부트스트랩하기 위해서 사용하는 지시자
 * ngCloak : 앵귤러 JS템플릿이 완전히 컴파일된 후까지는 표시되지 않는다.
 * ngController: 컨트롤러 추가 지시자
 * ngHref: Href 애트리뷰트
 * ngInclude : 자동으로 서버로부터 외부 HTML 플래그먼트 포함, 컴파일
 * ngList: 범위 내 배열 객체를 구분문자루 구별
 * ngNonBindable : 컴파일 처리 하지 않음
 * ngOpen:
 * ngPluralize: 번들된 en-US지역화 규칙
 * ngReadonly
 * ngRequired
 * ngSelected:
 * ngSrc: src애트리뷰트
 * ngSrcset: srcset
 * ngTransclude : 엘리먼트를 다른 얼리먼트를 위한 트랜스클루드 선택 사항
 * ngView: script
 */
angular.module('myApp', []).
controller('myController', function($scope) {

    $scope.cameras = [
        {make:'Canon', model:'70D', mp:20.2},
        {make:'Canon', model:'6D', mp:20},
        {make:'Nikon', model:'D7100', mp:24.1},
        {make:'Nikon', model:'D5200', mp:24.1}];
    $scope.cameraObj=$scope.cameras[0];
    $scope.cameraName = 'Canon';
    $scope.cbValue = '';
    $scope.someText = '';
});