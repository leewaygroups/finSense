myApp.controller('loginCtrl', ['$rootScope', '$scope', '$http', '$cookies', '$state', 'httpResponseHandler', 'urlService', function ($rootScope, $scope, $http, $cookies, $state, httpResponseHandler, urlService) {

    $scope.user = $scope.user || {};

    var loginUser = function () {

        $http({
            method: 'POST',
            url: urlService.urls.login,
            data: $scope.user
        }).then(httpResponseHandler.handleLogin.successHandler, httpResponseHandler.handleLogin.failureHandler);

    };

    $scope.login = function () {
        loginUser();
    };

}]);