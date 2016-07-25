'use strict'
accountApp.controller('detailCtrl', function ($scope,usersDetail) 
{
	$scope.currentDetail = usersDetail.item;
});