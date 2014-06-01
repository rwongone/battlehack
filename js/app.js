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
		
		var geocoder = new google.maps.Geocoder();
		var address = $scope.locationCoordinates;
		geocoder.geocode({'address': address}, function(results, status){
			if(status == google.maps.GeocoderStatus.OK){

				var latLng = results[0].geometry.location.toString();
				latLng = latLng.replace(/[\(\)\s]*/g, "");
				$scope.mapAddress = "http://maps.googleapis.com/maps/api/staticmap?center="+latLng+"&zoom=14&size=600x300&sensor=false";

			}
			else{
				alert("epic fail");
			}
		});

	};

});