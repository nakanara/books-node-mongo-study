/**
 * Created by nakanara on 2017-09-01.
 */
angular.module('myApp', []).
controller('myController', function($scope) {
    $scope.first = 'Thorin';
    $scope.last = 'Oakenshield';
    $scope.newFirst = 'Gandalfxxx';
    $scope.newLast = 'Greyhame';
    $scope.combine = function(fName, lName){
        return fName + ' ' + lName;
    };
    $scope.setName = function(fName, lName){
        $scope.first = fName;
        $scope.last = lName;
    };
});