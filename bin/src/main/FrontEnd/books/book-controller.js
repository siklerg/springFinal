angular.module('bookApp')
    .controller('book-controller', function ($scope, $location, $routeParams, service) {

        $scope.books = [];

        $scope.getAllBooks = function () {
            service.getAllBooks()
                .then(
                function (response) {//status code == 200, success callback
                    $scope.books = response.data;
                },
                function () {// status code != 200 (>200) error callback
                    console.log(error);
                }
                );
        }

        $scope.getAllBooks();
    });