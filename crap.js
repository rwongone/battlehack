var s;

var app = angular.module('formApp', []);
app.controller('formCtlr', function($scope) {
	$scope.title = "";
	$scope.description = "";
	$scope.cash_reward = "0";
	s = $scope;
});

function submit() {
	
	Parse.initialize("MjJzN3zeFZvB1qehXMZqePWc3JK5wXMdDAElXzOp", "Q5IIgKAt1ETB7YV9inMx2x0xRf8EmF186dkCzLZt");
	var LostObject = Parse.Object.extend("LostObject");
	var lostObject = new LostObject();
	lostObject.save({
		title: s.title,
		number: s.description,
		cash_reward: Number(s.cash_reward)
	}, {
		success: function(lostObject) {
			alert("successful save");
		},
		error: function(lostObject, error) {
			alert("failed to save with error " + error.message);
		}
	});
}