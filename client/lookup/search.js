'use strict'
accountApp.controller('searchCtrl', function ($scope,usersDetail) 
{
    $scope.openDetail = function (item) 
    {
        usersDetail.item=item;
        window.location.hash = '/dashboard';
    }

    $scope.items = [
        {firstName: "john", accountNo:"1234567890", lastName: "smith"},
        {firstName: "Samuels", accountNo:"2123456789", lastName: "Mark"}
    ];
});