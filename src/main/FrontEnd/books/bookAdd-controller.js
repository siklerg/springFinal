angular.module('bookApp')
.controller('bookAdd-controller', function ($scope, $location, $routeParams, service) {

    $scope.newBook ={
        name: "",
        isbn: ""
    }

    $scope.addBook = function(newBook) {
        service.addBook(newBook)
        .then(
            function (response) {
                $location.url('/books');
            },
            function (error) {
                console.log(error)
            }
            );
    }
});