var formApp = angular.module('formApp', []);
formApp.controller("FormCtlr", function ($scope) {
	$scope.title = "";
	$scope.description = "";
});

function submit() {
	var LostObj = Parse.Object.extend("LostObj");
	var lostObj = new LostObj();

	console.log("hello");
	lostObj.set(title, $scope.title);
	lostObj.set(description, $scope.description);

}