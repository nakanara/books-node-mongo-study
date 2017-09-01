/**
 * Created by nakanara on 2017-09-01.
 */
angular.module('myApp', []).
filter('censor', function() {
    return function(input, replacement) {
        var cWords = ['bad', 'evil', 'dark'];
        var out = input;
        for(var i=0; i<cWords.length; i++){
            out = out.replace(cWords[i], replacement);
        }
        return out;
    };
}).
controller('myController', ['$scope', 'censorFilter',
    function($scope, censorFilter) {
        $scope.phrase="This is a bad phrase.";
        $scope.txt = "Click to filter out dark and evil.xxx";
        $scope.filterText = function(){
            $scope.txt = censorFilter($scope.txt, '<<censored>>');
        };
    }]);