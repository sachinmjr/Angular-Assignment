'use strict'
accountApp.controller('settingCtrl', function ($scope) {
   $scope.oepnSearch = function () {
        window.location.hash = '/lookup';
   }
});