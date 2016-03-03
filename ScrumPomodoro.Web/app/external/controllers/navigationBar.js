app.controller("navigationBarController", [
    "$scope", "$location", "$timeout", "authService", function ($scope, $location, $timeout) {

        $scope.goToSignUp = function () {
            $timeout(function () {
                $location.path("/signup");
            });
        }        
}]);