var app = angular.module("scrum_pomodoro", ["ngRoute", "LocalStorageModule", "angular-loading-bar"]);

app.config(function ($routeProvider) {

    $routeProvider.when("/home", {
        controller: "homeController",
        templateUrl: "/app/views/home.html"
    });

    //$routeProvider.when("/login", {
    //    controller: "loginController",
    //    templateUrl: "/app/views/login.html"
    //});

    $routeProvider.when("/signup", {
        controller: "signupController",
        templateUrl: "/app/views/signup.html"
    });   
    $routeProvider.when("signup", {
        controller: "signupController",
        templateUrl: "/app/views/signup.html"
    });    

    //$routeProvider.when("/test", {
    //    controller: "testController",
    //    templateUrl: "/app/views/test.html"
    //});

    //$routeProvider.when("/refresh", {
    //    controller: "refreshController",
    //    templateUrl: "/app/views/refresh.html"
    //});

    //$routeProvider.when("/tokens", {
    //    controller: "tokensManagerController",
    //    templateUrl: "/app/views/tokens.html"
    //});

    //$routeProvider.when("/associate", {
    //    controller: "associateController",
    //    templateUrl: "/app/views/associate.html"
    //});

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