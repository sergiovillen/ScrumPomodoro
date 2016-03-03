var app = angular.module("scrum_pomodoro", ["ngRoute", "LocalStorageModule", "angular-loading-bar"]);

app.config(function ($routeProvider) {

    $routeProvider.when("/home", {
        controller: "homeController",
        templateUrl: "/app/external/views/home.html"
    });    
    $routeProvider.when("/signup", {
        controller: "signupController",
        templateUrl: "/app/external/views/signup.html"
    });   
    $routeProvider.when("signup", {
        controller: "signupController",
        templateUrl: "/app/external/views/signup.html"
    });    

    $routeProvider.when("/dashboard", {
        controller: "dashboardController",
        templateUrl: "/app/external/views/dashboard.html"
    });    
    $routeProvider.otherwise({ redirectTo: "/home" });

});


var serviceBase = 'http://localhost:3238/';
app.constant('secureWebAPISettings', {
    apiServiceBaseUri: serviceBase,
    clientId: 'secureWebAPI'
});

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);