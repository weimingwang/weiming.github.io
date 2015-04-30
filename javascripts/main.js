(function(){
    'use strict';
    console.log('app lunch');

    var blogModule = angular.module('blog', []);

    blogModule.controller('NavController', ['$scope', '$http', function($scope, $http){
        $scope.tags = [];
        $scope.postUnder = function(tag){
            console.log('reader interested in: ' + tag);
        };
        
        $http
            .get('posts/toc.json')
            .then(function(result){
                if(result.status == 200){
                    $scope.tags = result.data.tags;
                }
            });
    }]);
    
})();

