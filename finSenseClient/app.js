var myApp = angular.module('myApp', ['ui.bootstrap', 'ui.router', 'ngCookies']);

myApp.config(['$stateProvider', '$urlRouterProvider', '$cookiesProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $cookiesProvider, $httpProvider) {

    //default route
    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('signin', {
            url: '/signin',
            templateUrl: 'login/login.html',
            controller: 'loginCtrl'
        })
        .state('signout', {
            controller: 'signoutCtrl'
        })
        .state('signup', {
            url: '/signup',
            templateUrl: 'signup/signup.html',
            controller: 'signupCtrl'
        })
        .state('customers', {
            url: '/customers',
            templateUrl: 'customers/customers.html',
            controller: 'customersCtrl'
        })
        .state('customerDetail', {
            url: '/customers/:customerId',
            templateUrl: '/customerDetail/customerDetail.html',
            controller: 'customerDetailCtrl'
        });

    $httpProvider.interceptors.push(function ($q, $cookies, $location) {

        return {
            //prehandle request
            request: function (config) {
                config.headers = config.headers || {};

                var test = $cookies.getObject('finSenseAuthToken');

                config.headers['x-access-token'] = $cookies.getObject('finSenseAuthToken');
                return config;
            },

            requestError: function (rejection) {
                return $q.reject(rejection);
            }
        };
    });
}]);

myApp.service('AuthorizationFlags', ['$rootScope', function ($rootscope) {
    $rootscope.isSignedIn = false;

    this.getSignedInStatus = function () {
        return $rootscope.isSignedIn;
    };
    this.setSignedInStatus = function (status) {
        $rootscope.isSignedIn = status;
    };
}]);

myApp.service('httpResponseHandler', ['$location', '$q', '$cookies', '$state', 'AuthorizationFlags', function ($location, $q, $cookies, $state, AuthorizationFlags) {

    this.handleLogin = {
        successHandler: function (response) {
            var accessToken = response.data.token || response.config.headers['x-access-token']
            $cookies.putObject('finSenseAuthToken', accessToken);
            AuthorizationFlags.setSignedInStatus(true);

            $state.go('customers', {
                'token': $cookies.getObject('finSenseAuthToken')
            });
        },

        failureHandler: function (response) {
            console.log("Failed");
            console.log(response);
        }
    };

    this.handlOthersResponses = function (response) {

        var canProceedWithRespons = response != null && response.status == 200 && $cookies.getObject('finSenseAuthToken');

        if (canProceedWithRespons) {
            return response || $q.when(response);
        } else {
            $location.path('/');
        }
    };

    //  
    this.responseError = function (rejection) {
        if (rejection != null && rejection.status === 401 && ($cookies.getObject('finSenseAuthToken'))) {
            $cookies.remove("finSenseAuthToken");
            $state.go("signin");
        }

        return $q.reject(rejection);
    };

}]);