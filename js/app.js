var app = angular.module('app', []);
app.controller('controller', function($scope) {

	$scope.projectname = "FindMe";
	$scope.tab0 = "Home";
	$scope.tab1 = "Lost";
	$scope.tab2 = "Found";
	$scope.tab3 = "About";
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

				var latLng = results[0].geometry.location;
				latLng = latLng.toString().replace(/[\(\)\s]*/g, "");
				$scope.mapAddress = "http://maps.googleapis.com/maps/api/staticmap?markers=color:red%7C"+latLng+"&zoom=14&size=540x360";
				latLng = latLng.split(",");
				$scope.latitude = latLng[0];
				$scope.longitude = latLng[1];
				console.log($scope.latitude);
			}
			if(address == '') {
				$scope.mapAddress = "img/gmap.png";
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
	
	$scope.search = function() {
		Parse.initialize("MjJzN3zeFZvB1qehXMZqePWc3JK5wXMdDAElXzOp", "Q5IIgKAt1ETB7YV9inMx2x0xRf8EmF186dkCzLZt");
		var query = new Parse.Query("LostObject");
		query.find({
		  success: function(results) {
		  	$scope.searchResults = results;
		  },
		  error: function(error) {
		  }
		});
	};

});