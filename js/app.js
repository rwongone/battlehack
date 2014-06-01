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

	$scope.title = "";
	$scope.description = "";
	$scope.cash_reward = "0";


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
		alert($scope.title);
		var LostObject = Parse.Object.extend("LostObject");
		var lostObject = new LostObject();
		lostObject.save({
			title: $scope.title,
			number: $scope.description,
			cash_reward: Number($scope.cash_reward)
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
