myApp.controller('signupCtrl', ['$scope', 'urlService', 'httpResponseHandler', function ($scope, urlService, httpResponseHandler) {

    var createUser = function () {

        $http({
            method: 'POST',
            url: urlService.urls.users,
            data: $scope.newUser
        }).then(httpResponseHandler.handleSignup.successHandler, httpResponseHandler.handleSignup.failureHandler);

    };

    $scope.newUser = $scope.newUser || {};

    $scope.registerNewUser = function (isValid) {
        if (isValid) {
            createUser($scope.newUser);
        } else {
            $scope.failMessage = "Invalid data entered, please enter correct data set and try again."
        }
    }

}]);