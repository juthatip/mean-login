angular.module('LoginApp')
    .controller('LoginController', ['$scope', '$http', '$location', function($scope, $http, $location) {
        $scope.form = {};

        $scope.loginForm = function() {
            
            console.log($scope.form);
            $location.path('/member');
        }
    }])
    .controller('MemberController', ['$scope', function($scope) {

    }]);
