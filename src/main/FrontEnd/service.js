angular.module('bookApp')
    .factory('service', function ($http) {
        var apiUrl = 'http://localhost:8080/books';
        var svc = {};

        svc.getAllBooks = function () {
            return $http.get(apiUrl);
        }

        svc.getBook = function (id){
            return $http.get(apiUrl + '/' + id)
        }

        svc.deleteBook = function (id) {
            return $http.delete(apiUrl + '/' + id);
        }

        svc.addBook = function(newBook){
            return $http.post(apiUrl, newBook);
        }

        svc.updateBook = function(book){
            return $http.put(apiUrl+'/'+ book.id, book);
        }

        return svc;
    });