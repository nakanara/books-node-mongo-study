/**
 * Created by nakanara on 2017-09-01.
 */
angular.module('myApp', []).
controller('myController', ['$scope', 'filterFilter',
    function($scope, filterFilter) {
        $scope.cameras = [
            {make:'Canon', model:'70D', mp:20.2},
            {make:'Canon', model:'6D', mp:20},
            {make:'Nikon', model:'D7100', mp:24.1},
            {make:'Nikon', model:'D5200', mp:24.1}];
        $scope.filteredCameras = $scope.cameras;
        $scope.reverse = true;
        $scope.column = 'make';
        $scope.setSort = function(column){
            $scope.column = column;
            $scope.reverse = !$scope.reverse;
            console.log('reverse');
        };
        $scope.filterString = '';
        $scope.setFilter = function(value){
            console.log('setFilter');
            $scope.filteredCameras =
                filterFilter($scope.cameras, $scope.filterString);
        };
    }]);