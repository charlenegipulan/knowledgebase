angular.module("kB")

.controller('ArticlesCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('/articles').then(function(data) {
        $scope.articles = data.data;
    });
}]);