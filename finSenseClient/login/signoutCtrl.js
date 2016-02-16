myApp.controller('signoutCtrl', ['$scope', '$cookies', '$state', 'AuthorizationFlags', function ($scope, $cookies, $state, AuthorizationFlags) {

    $cookies.remove("finSenseAuthToken");
    AuthorizationFlags.setSignedInStatus(false);
    $state.go('signin');

}]);