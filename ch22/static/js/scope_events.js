/**
 * Created by nakanara on 2017-08-31.
 */
/**
 * targetScope : $emit() 또는 $broadcast() 호출되는 범위
 * currentScope: 이벤트가 핸들링 되는 범위
 * name: 이벤트 명
 * stopPropagation() 범위 계층구조의 위/아래로 이벤트가 전파되는 것을 막는 함수
 * preventDefault() 브라우저 기본 이벤트는 막지만 Custom 코드는 실행
 * defaultPrevented: bool, event.preventDefault()가 호출되는 참 값을 가짐???
 */
angular.module('myApp', []).
controller('Characters', function($scope) {
    $scope.names = ['Frodo', 'Aragorn', 'Legolas', 'Gimli'];
    $scope.currentName = $scope.names[0];
    $scope.changeName = function() {
        $scope.currentName = this.name;
        $scope.$broadcast('CharacterChanged', this.name);
    };
    $scope.$on('CharacterDeleted', function(event, removeName){
        var i = $scope.names.indexOf(removeName);
        $scope.names.splice(i, 1);
        $scope.currentName = $scope.names[0];
        $scope.$broadcast('CharacterChanged', $scope.currentName);
    });
}).
controller('Character', function($scope) {
    $scope.info = {'Frodo':{weapon:'Sting', race:'Hobbit'},
        'Aragorn':{weapon:'Sword', race:'Man'},
        'Legolas':{weapon:'Bow', race:'Elf'},
        'Gimli':{weapon:'Axe', race:'Dwarf'}};
    $scope.currentInfo = $scope.info['Frodo'];
    $scope.$on('CharacterChanged', function(event, newCharacter){
        $scope.currentInfo = $scope.info[newCharacter];
    });
    $scope.deleteChar = function() {
        delete $scope.info[$scope.currentName];
        $scope.$emit('CharacterDeleted', $scope.currentName);
    };
});