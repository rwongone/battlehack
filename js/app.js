var app = angular.module('app', []);
app.controller('controller', function($scope) {
	
	$scope.projectname = "FindMe";
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
	$scope.mapAddress = "img/gmap.png";

	$scope.title = "";
	$scope.description = "";
	$scope.cash_reward = "";
	$scope.latitude = 0;
	$scope.longitude = 0;
	$scope.email_address = "";
	$scope.phone_number = "";


	$scope.getMapAddress = function(){
		
		var geocoder = new google.maps.Geocoder();
		var address = $scope.locationCoordinates;
		geocoder.geocode({'address': address}, function(results, status){
			if(status == google.maps.GeocoderStatus.OK){

				var latLng = results[0].geometry.location.toString();
				latLng = latLng.replace(/[\(\)\s]*/g, "");
				$scope.mapAddress = "http://maps.googleapis.com/maps/api/staticmap?markers=color:red%7C"+latLng+"&zoom=14&size=600x300&sensor=false";
			}
		});
	};

	$scope.submit = function() {
		Parse.initialize("MjJzN3zeFZvB1qehXMZqePWc3JK5wXMdDAElXzOp", "Q5IIgKAt1ETB7YV9inMx2x0xRf8EmF186dkCzLZt");
		var LostObject = Parse.Object.extend("LostObject");
		var lostObject = new LostObject();
		lostObject.save({
			title: $scope.title,
			description: $scope.description,
			cash_reward: Number($scope.cash_reward),
			latitude: Number($scope.latitude),
			longitude: Number($scope.longitude),
			email_address: $scope.email_address,
			phone_number: $scope.phone_number
		}, {
			success: function(lostObject) {
				alert("successful save");
			},
			error: function(lostObject, error) {
				alert("failed to save with error " + error.message);
			}
		});
	};

});
