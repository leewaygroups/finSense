myApp.directive('validateEmail', function () {

    var REGEX = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,10})$/;

    return {
        require: 'ngModel',
        link: function (scope, element, attrs, ctrl) {

            ctrl.$validators.email = function (modelValue, viewValue) {

              /*  console.log("SCOPE");
                console.log(scope);
                console.log("CTRL");
                console.log(ctrl);*/

                if (REGEX.test(viewValue)) {
                    return true
                }
                return false;
            };
        }
    };
});

myApp.directive('validatePassword', function () {

    var REGEX = /^[a-zA-Z0-9_-]{6,18}$/;

    return {
        require: 'ngModel',
        link: function (scope, element, attrs, ctrl) {

            ctrl.$validators.password = function (modelValue, viewValue) {

               /* console.log("SCOPE");
                console.log(scope);
                console.log("CTRL");
                console.log(ctrl);
*/
                if (REGEX.test(viewValue)) {
                    return true
                }
                return false;
            };
        }
    };
});

myApp.directive('confirmPassword', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, ctrl) {

            ctrl.$validators.email = function (modelValue, viewValue) {
               /* console.log("SCOPE");
                console.log(scope);
                console.log("CTRL");
                console.log(ctrl);*/
                if (scope.newUser.password === viewValue) {
                    return true
                }
                return false;
            };
        }
    };
});