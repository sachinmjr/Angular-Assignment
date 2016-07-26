'use strict'
accountApp.controller('detailCtrl', function ($scope,usersDetail) 
{
	$scope.currentDetail = usersDetail.item;

	$scope.gotosearch = function () 
	{
		 window.location.hash = '/lookup';
	}
});