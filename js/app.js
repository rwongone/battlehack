var app = angular.module('app', []);
app.controller('controller', function($scope) {
	
	$scope.title = "FindMe";
	$scope.tab0 = "Home";
	$scope.tab1 = "Lost Item?";
	$scope.tab2 = "Found Item?";
	$scope.tab3 = "About Us";
	$scope.authors = "Matthew Du, Julie Xue, Richard Wong, David Fu";
	$scope.result = "output";
	$scope.properties = [
		{id: 0, name: ''},
		{id: 0, name: ''},
		{id: 0, name: ''},
		{id: 0, name: ''},
		{id: 0, name: ''},
		{id: 0, name: ''},

	];


	$scope.getMapAddress = function(){
		$scope.mapAddress = "http://maps.googleapis.com/maps/api/staticmap?center="+$scope.locationCoordinates+"&zoom=14&size=600x300&sensor=false";
		};

});