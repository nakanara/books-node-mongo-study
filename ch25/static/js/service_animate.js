/**
 * - value : 서비스 제공자로 주입할 수 있는 값 정의
 * app.value('key', 'val');
 *
 * - constant : Module객체를 만드는 설정 단계에서만 유효한 것을 제외하고는 value 서비스와 동일
 * var app =- angular.module('myApp', []);
 * app.constant('key', 'val');
 *
 * - factory : factory서비스는 대상 기능 구현
 * app.constant('myConst', 10);
 * app.factory('multiplier', ['myConst', function(myConst){
 *   return function(value) { return value + myConst; }
 * }]);
 *
 * - service 서비스 : 서버 대상으로 기능 구현 factory메소드와는 다름, service메소드는 두번째 인자로서 생성자 함수 사용
 * function ConstMathObj(myConst){
 *  this.add = function(value) { return value + myConst; }
 * }
 * app.service('constMath', ['myConst', ConstMathObj]);
 */
var app = angular.module('myApp', ['ngAnimate']);
app.controller('myController', function($scope ) {
  $scope.myImgClass = 'start-class';
  });
app.animation('.fadeOut', function() {
  return {
    enter : function(element, parentElement, afterElement, doneCallback) {},
    leave : function(element, doneCallback) {},
    move : function(element, parentElement, afterElement, doneCallback) {},
    addClass : function(element, className, done) {
      jQuery(element).animate({ opacity: 0}, 3000);
    },
    removeClass : function(element, className, done) {
      jQuery(element).animate({ opacity: 1}, 3000);
    }
  };
});
