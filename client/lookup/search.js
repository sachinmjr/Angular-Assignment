'use strict'
accountApp.controller('searchCtrl', function ($scope,usersDetail) 
{
    $scope.openDetail = function (item) 
    {
        usersDetail.item=item;
        window.location.hash = '/dashboard';
    }

    $scope.items = [
        { accountNo:"1234567890", firstName: "John",  lastName: "smith", bal: "$4561384", loanAmt: "$2475987"},
        { accountNo:"823456789", firstName: "Samuels",lastName: "Mark", bal: "$4561384", loanAmt: "$2475987" },

        { accountNo:"9845567890", firstName: "Greg",  lastName: "Chappell", bal: "$4561384", loanAmt: "$2475987" },
        { accountNo:"0923456789", firstName: "Alan",lastName: "Thomson", bal: "$4561384", loanAmt: "$2475987" },

        { accountNo:"7824567890", firstName: "Paul",  lastName: "Sheahan", bal: "$4561384", loanAmt: "$2475987" },
        { accountNo:"6723456789", firstName: "Ashley",lastName: "Woodcock", bal: "$4561384", loanAmt: "$2475987" },

        { accountNo:"7824567890", firstName: "Rick",  lastName: "McCosker", bal: "$4561384", loanAmt: "$2475987" },
        { accountNo:"6723456789", firstName: "David",lastName: "Hookes", bal: "$4561384", loanAmt: "$2475987" }
    ]
});