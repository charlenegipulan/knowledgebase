angular.module("kB")

.controller('ArticlesCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('/articles').then(function(data) {
        $scope.articles = data.data;
    });
}])

.controller('ArticlesCategoryCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('/articles/category/'+$routeParams.category).then(function(data) {
        $scope.cat_articles = data.data;
        $scope.category = $routeParams.category;
    });
}])

.controller('ArticleDetailsCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {
    $http.get('/articles/'+$routeParams.id).then(function(data) {
        $scope.article = data.data;
    });
}])