myApp.controller('customerDetailCtrl', ['$scope', '$stateParams', '$filter', 'dataService', function ($scope, $stateParams, $filter, dataService) {

    $scope.customers = dataService.persons;

    //TODO: Implement a customer getter service and inject in this controller
    $scope.customer = 'Get a customer with matching customerId'

}]);