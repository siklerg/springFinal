angular.module('bookApp', ['ngRoute'])

angular.module('bookApp')
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home.html',
            })
            .when('/books', {
                templateUrl: 'books/bookList.html',
                controller: 'bookController',
            })
            .when('/kpo', {
                templateUrl: 'kpo/kpo.html',
                controller: 'kpoController',
            });
        $locationProvider.html5Mode(false);
    })