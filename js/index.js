var app = angular.module('index', []);
app.controller('controller', function($scope) {

	$scope.projectname = "FindMe";
	$scope.tab0 = "Home";
	$scope.tab1 = "Lost";
	$scope.tab2 = "Found";
	$scope.tab3 = "About";
	$scope.authors = "Matthew Du, Julie Xue, Richard Wong, David Fu";

});