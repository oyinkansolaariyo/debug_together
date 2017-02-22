/**
 * Created by itunu.babalola on 2/22/17.
 */
'use strict';
    !function () {
    var controllers = angular.module('DebugControllers',[]);
    var services = angular.module('DebugServices',[]);
    var app = angular.module('DebugApp',['ngRoute','ngResource','DebugControllers','DebugServices']);
    app.config(['$routeProvider','$interpolateProvider','$httpProvider','$locationProvider', function ($routeProvider,$interpolateProvider,$httpProvider,$locationProvider) {
        $routeProvider.when('/',{
            templateUrl :'/app/templates/index.phtml'
        });

        $routeProvider.otherwise({
            redirectTo :'/'
        });

        $locationProvider.html5Mode(true);
    }]);
    }();