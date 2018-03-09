angular.module('bookApp', ['ngRoute'])

angular.module('bookApp')
    .config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'home.html',
                })
                .when('/books', {
                    templateUrl: 'books/book.html',
                    controller: 'bookController',
                })
                .when('/kpo', {
                    templateUrl: 'kpo/kpo.html',
                    controller: 'kpoController',
                })
                .when('/bookAdd', {
                    templateUrl: 'books/bookAdd.html',
                    controller: 'bookAdd-controller',
                })
                .when('/bookUpdate/:id', {
                    templateUrl: 'books/bookUpdate.html',
                    controller: 'bookUpdate-controller',
                });
            $locationProvider.html5Mode(false);
        }])