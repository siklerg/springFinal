angular.module('bookApp')
    .controller('kpoController', function ($scope) {

        valaszok = ["kpo/kog.jpg", "kpo/papirg.jpg", "kpo/ollog.jpg"];
        $scope.valasz = "";
        $scope.tipp = "";
        $scope.jatekos = 0;
        $scope.gep = 0;
        $scope.eredmeny = "";


        $scope.game = function () {
            var x = Math.floor(Math.random() * 3);
            //Math.floor(Math.random() * (max - min +1)) + min
            $scope.valasz = valaszok[x];
            var ellenorzesTipp = $scope.tipp.slice(0, 5);
            var ellenorzesValasz = $scope.valasz.slice(0, 5);
            if (ellenorzesTipp == ellenorzesValasz) {
                $scope.eredmeny = "Döntetlen!";
            }
            else if (($scope.tipp == "kpo/ko.jpg") && ($scope.valasz == "kpo/ollog.jpg")) {
                $scope.jatekos = $scope.jatekos + 1;
                $scope.eredmeny = "Nyer: Játékos";
            }
            else if (($scope.tipp == "kpo/papir.jpg") && ($scope.valasz == "kpo/kog.jpg")) {
                $scope.jatekos = $scope.jatekos + 1;
                $scope.eredmeny = "Nyer: Játékos";
            }
            else if (($scope.tipp == "kpo/ollo.jpg") && ($scope.valasz == "kpo/papirg.jpg")) {
                $scope.jatekos = $scope.jatekos + 1;
                $scope.eredmeny = "Nyer: Játékos";
            }
            else {
                $scope.gep = $scope.gep + 1;
                $scope.eredmeny = "Nyer: Számítógép";
            }
        }

        $scope.ko = function () {
            $scope.tipp = "kpo/ko.jpg";
            $scope.valasz = "";
            $scope.eredmeny = "";
        }

        $scope.papir = function () {
            $scope.tipp = "kpo/papir.jpg";
            $scope.valasz = "";
            $scope.eredmeny = "";
        }

        $scope.ollo = function () {
            $scope.tipp = "kpo/ollo.jpg";
            $scope.valasz = "";
            $scope.eredmeny = "";
        }

        $scope.erase = function () {
            $scope.jatekos = 0;
            $scope.gep = 0;
        }
        
    });