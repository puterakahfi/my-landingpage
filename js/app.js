var app = angular.module('moslemLp', ['ui.router','ngResource']);
app.config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/beranda");
    //
    // Now set up the states
    $stateProvider
            .state('beranda', {
                url: "/beranda",
                templateUrl: "partials/beranda.html"
            });

});


app.controller('berandaCtrl', function ($scope, $http, $log, $resource) {

    $http.get("https://api.github.com/users/puterakahfi")
            .success(function (data) {
                $scope.user = data;
                console.log(data);
                $scope.loaded = true;
            })
            .error(function () {
                alert('errot');
                $scope.userNotFound = true;
            });

});







