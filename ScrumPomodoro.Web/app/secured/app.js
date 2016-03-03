var app = angular.module("scrum_pomodoro", ["ngRoute", "angular-loading-bar"]);

app.config(function ($routeProvider) {

    $routeProvider.when("/home", {
        controller: "homeController",
        templateUrl: "/app/secured/views/home.html"
    });    
    
    $routeProvider.otherwise({ redirectTo: "/home" });

});