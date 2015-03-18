var app = angular.module('cjlabsLandingPage', ['ui.router']);
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


app.controller('berandaCtrl', function ($scope, $log) {

    $scope.getGitInfo = function ()
    {
        $http.get("https://api.github.com/users/puterakahfi")
                .success(function (data) {
                    $scope.user = data;
                    $log.info(data);
                    $scope.loaded = true;
                })
                .error(function () {
                    $scope.userNotFound = true;
                });
    }
});







