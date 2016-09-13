"use strict";
var app = angular.module("FlowerPowerApp", ["ngRoute"])


app.config(function($routeProvider){
    $routeProvider.
        when("/", {
            templateUrl: '/partials/flower-arrangements.html',
            controller: "flowerCtrl"
        });
    });

app.run( ($location, FBCreds) => {
    let creds = FBCreds;
    let authConfig = {
        apiKey: creds.key,
        authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
});
