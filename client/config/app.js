'use strict';

var accountApp = angular.module('accountApp', [
    'ngRoute'
]);

accountApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/modals', 
            {
                templateUrl: 'modals/settings.html',
                controller: 'settingCtrl'
            })
            .when('/lookup', {
                templateUrl: 'lookup/search.html',
                controller: 'searchCtrl'
            })
            .when('/dashboard', {
                templateUrl: 'dashboard/details.html',
                controller: 'detailCtrl'
            })
            .otherwise({
                redirectTo: '/modals'
            });
    }]);

