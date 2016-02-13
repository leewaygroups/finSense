var myApp = angular.module('myApp', ['ui.bootstrap', 'ui.router', 'ngCookies']);

myApp.config(['$stateProvider', '$urlRouterProvider', '$cookiesProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $cookiesProvider, $httpProvider) {

    //default route
    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'login/login.html',
            controller: 'loginCtrl'
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
                config.headers['x-access-token'] = $cookies.getObject('finSenseAuthToken');
                return config;
            },

            requestError: function (rejection) {
                return $q.reject(rejection);
            }
        };
    });
}]);

myApp.service('httpResponseHandler', function ($location, $q, $cookies, $state) {

    this.handleLogin = {
        successHandler: function (response) {
            console.log("Succeeded");
            console.log(response);

            $cookies.putObject('finSenseAuthToken', response.data.token);
            console.log($cookies.getObject('finSenseAuthToken'));

            $state.go('customers');
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
    // Revoke client authentication if 401 is received 
    this.responseError = function (rejection) {
        if (rejection != null && rejection.status === 401 && ($cookies.getObject('finSenseAuthToken'))) {
            $cookies.remove("finSenseAuthToken");
            $state.go("login");
        }

        return $q.reject(rejection);
    };

});