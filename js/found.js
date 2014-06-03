var app = angular.module('Found', []);
app.controller('FoundController', function($scope) {
	$scope.title = "FindMe";
	$scope.tab0 = "Home";
	$scope.tab1 = "Lost Item?";
	$scope.tab2 = "Found Item?";
	$scope.tab3 = "About Us";
	$scope.authors = "Matthew Du, Julie Xue, Richard Wong, David Fu";
	$scope.result = "output";

	$scope.search = function() {
		Parse.initialize("MjJzN3zeFZvB1qehXMZqePWc3JK5wXMdDAElXzOp", "Q5IIgKAt1ETB7YV9inMx2x0xRf8EmF186dkCzLZt");
		var query = new Parse.Query("LostObject");
		query.find({
		  success: function(results) {
		  	$scope.searchResults = results[0].get('title');
		  },
		  error: function(error) {
		  }
		});
	};
});