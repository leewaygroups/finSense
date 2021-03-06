myApp.controller('customersCtrl', ['$scope', '$http', '$state', 'urlService', 'dataService', function ($scope, $http, $state, urlService, dataService) {

    $scope.customers = dataService.persons;

    var successHandler = function (response) {
          
        $scope.accounts = response.data;
    };

    var failureHandler = function (response) {
        $state.go('signin')
    }

    $http({
        method: 'GET',
        url: urlService.urls.accounts,
    }).then(successHandler, failureHandler);

}]);