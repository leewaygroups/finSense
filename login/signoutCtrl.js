myApp.controller('signoutCtrl', ['$scope', '$cookies', '$state', 'AuthorizationFlags', function ($scope, $cookies, $state, AuthorizationFlags) {

   /* var signOut = function () {*/

        $cookies.remove("finSenseAuthToken");
        AuthorizationFlags.setSignedInStatus(false);
        $state.go('signin');

   /* };*/

    /*$scope.signout = function () {
        signOut();
    };*/

}]);