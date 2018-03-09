angular.module('bookApp')
    .factory('service', function ($http) {
        var apiUrl = 'http://localhost:8080/books';
        var svc = {};

        svc.getAllBooks = function () {
            return $http.get(apiUrl);
        }
        
        return svc;
    });