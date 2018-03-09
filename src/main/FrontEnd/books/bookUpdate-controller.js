angular.module('bookApp')
    .controller('bookUpdate-controller', function ($scope, $location, $routeParams, service) {

        $scope.Book = {};
        var id = $routeParams.id;

        $scope.init = function () {
            $scope.getBook();
        }

        $scope.getBook = function () {
            service.getBook(id)
                .then(
                function (resp) {
                    $scope.Book = resp.data;
                },
                function (err) {
                    console.log(err);
                }
                );
        }

        $scope.updateBook = function () {
            service.updateBook($scope.Book)
                .then(
                function (response) {
                    $location.url('/books');
                },
                function (error) {
                    console.log(error)
                }
                );
        }

        $scope.getBook();

    });