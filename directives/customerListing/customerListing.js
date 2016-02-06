myApp.directive('customerListing', [function () {

    var customerListingCtrl = ['$scope', '$uibModal', function customerListingCtrl($scope, $uibModal) {

        /*$scope.manageCustomerAccount = function (customer) {

            $uibModal.open({
                templateUrl: 'customerDetails.html',
                controller: 'customerDetails',
                size: 'lg',
                resolve: {
                    customer: function () {
                        return customer;
                    }
                }

            });
        };*/
}];
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: 'directives/customerListing/template.html',
        scope: {
            customers: '='
        },
        controller: customerListingCtrl
    };
}]);