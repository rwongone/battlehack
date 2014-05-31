var app = angular.module('MyTutorialApp',[]);

var app = angular.module('app', []);
app.controller('controller', function($scope) {
	$scope.title = "FindMe";
	$scope.tab0 = "Home";
	$scope.tab1 = "Lost Item?";
	$scope.tab2 = "Found Item?";
	$scope.tab3 = "About Us";
	$scope.authors = "Matthew Du, Julie Xue, Richard Wong, David Fu";
	$scope.result = "output";
});