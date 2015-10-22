/**
 * Created by Peter on 21/10/2015.
 */
(function() {

    var mainCtrl = function($scope, $http) {

        var onUserComplete = function(response) {
            $scope.err = "";
            $scope.user = response.data;
            $http.get($scope.user.repos_url)
                .then(onRepoComplete, onReposError);
        }

        var onRepoComplete = function(response)
        {
            $scope.user.repos = response.data;

        }
        var onUserError = function(reason) {
            $scope.err = "**** ERROR Cant find user details ****";
        }

        var onReposError = function(reason) {
            $scope.err = "**** ERROR Cant find repos data for user '" + $scope.user.name + "' ****";
        }
        $scope.search = function(param)
        {
            $http.get("https://api.github.com/users/" + param)
                .then(onUserComplete, onUserError);
        }


        $scope.message = "Peters Test";
        $scope.username = "angular"
        $scope.sortOrder = "-stargazers_count";

        $scope.finishLoading = function() {
        }

        $scope.save = function() {
            $scope.$broadcast('show-errors-check-validity');

            if ($scope.buildForm.$valid) {
                alert('build ' + $scope.details.email);
                $scope.reset();
            }
        };

        $scope.reset = function() {
            $scope.$broadcast('show-errors-reset');
            $scope.details = { name: '', email: '' };
        }


    }



    var app = angular.module('BBSApp', []);
    app.controller('MainCtrl', ["$scope","$http",mainCtrl]);
    app.directive('showErrors', function($timeout) {
        return {
            restrict: 'A',
            require: '^form',
            link: function (scope, el, attrs, formCtrl) {
                // find the text box element, which has the 'name' attribute
                var inputEl = el[0].querySelector("[name]");
                // convert the native text box element to an angular element
                var inputNgEl = angular.element(inputEl);
                // get the name on the text box
                var inputName = inputNgEl.attr('name');

                // only apply the has-error class after the user leaves the text box
                var blurred = false;
                inputNgEl.bind('blur', function () {
                    blurred = true;
                    el.toggleClass('has-error', formCtrl[inputName].$invalid);
                });

                scope.$watch(function () {
                    return formCtrl[inputName].$invalid
                }, function (invalid) {
                    // we only want to toggle the has-error class after the blur
                    // event or if the control becomes valid
                    if (!blurred && invalid) {
                        return
                    }
                    el.toggleClass('has-error', invalid);
                });

                scope.$on('show-errors-check-validity', function () {
                    el.toggleClass('has-error', formCtrl[inputName].$invalid);
                });

                scope.$on('show-errors-reset', function () {
                    $timeout(function () {
                        el.removeClass('has-error');
                    }, 0, false);
                });
            }
        }});


}());
