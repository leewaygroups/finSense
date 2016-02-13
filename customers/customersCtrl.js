myApp.controller('customersCtrl', ['$scope', '$http', '$state', 'urlService', 'dataService', function ($scope, $http, $state, urlService, dataService) {

    $scope.customers = dataService.persons;

    var successHandler = function (response) {
        console.log("Customer get succeeded")
        console.log(response.data);
        
        $scope.accounts = response.data;
    };

    var failureHandler = function (response) {
        console.log("Customer get failed")
        $state.go('login')
    }

    $http({
        method: 'GET',
        url: urlService.urls.accounts,
    }).then(successHandler, failureHandler);

}]);