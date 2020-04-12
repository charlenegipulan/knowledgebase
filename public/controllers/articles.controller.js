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

.controller('ArticleCreateCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {
    $http.get('/categories').then(function(data) {
        $scope.categories = data.data;
    });

    $scope.addArticle = function() {
        var data = {
            title : $scope.title,
            body : $scope.body,
            category : $scope.category
        }

        $http.post('/articles', data).then(function(data, status){
            console.log(status);
        });

        $location.path('/articles');
    }

}])