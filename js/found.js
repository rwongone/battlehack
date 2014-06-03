var app = angular.module('Found', []);
app.controller('FoundController', function($scope) {
	$scope.projectname = "FindMe";
	$scope.tab0 = "Home";
	$scope.tab1 = "Lost";
	$scope.tab2 = "Found";
	$scope.tab3 = "About";
	$scope.authors = "Matthew Du, Julie Xue, Richard Wong, David Fu";
	$scope.result = [];

	$scope.search = function() {
		Parse.initialize("MjJzN3zeFZvB1qehXMZqePWc3JK5wXMdDAElXzOp", "Q5IIgKAt1ETB7YV9inMx2x0xRf8EmF186dkCzLZt");
		var query = new Parse.Query("LostObject");
		query.find({
		  success: function(results) {
		  	for (var i = 0; i < results.length; i++) {
		  		$scope.result.push( {title: results[i].get("title"),
		  							description: results[i].get("description"),
									cash_reward: results[i].get("cash_reward"),
									latitude: results[i].get("latitude"),
									longitude: results[i].get("longitude"),
									email_address: results[i].get("email_address"),
									phone_number: results[i].get("phone_number") })
		  	};
		  	//$scope.searchResults = results[0].get('title');
		  },
		  error: function(error) {
		  }
		});
	};
});