angular.module('bookApp')
    .controller('bookController', function ($scope, $location, $routeParams, service) {

        $scope.books = [];


        $scope.init = function () {
            $scope.getAllBooks();
        }

        $scope.getAllBooks = function () {
            service.getAllBooks()
                .then(
                function (response) {
                    $scope.books = response.data;
                },
                function () {
                    console.log(error);
                }
                );
        }

        $scope.deleteBook = function (id) {
            service.deleteBook(id)
                .then(
                function (response) {
                    $scope.getAllBooks();
                },
                function () {
                    console.log(error);
                }
                );
        }

        $scope.updateBook = function (id) {
            $location.url('/bookUpdate/' + id);
        }

        
        $scope.getAllBooks();

    });