var myApp = angular.module('myApp', ['ui.bootstrap', 'ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {

    //default route
    $urlRouterProvider.otherwise('/customers');

    $stateProvider
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
});


