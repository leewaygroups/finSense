myApp.controller('customersCtrl', ['$scope', '$filter', 'dataService', function ($scope, $filter, dataService) {

    $scope.customers = dataService.persons;

}]);