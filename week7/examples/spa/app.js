var app = angular.module('spaApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/page1', {
			templateUrl: 'page1.html',
			controller: 'Page1Ctrl'
		})
		.when('/page2', {
			templateUrl: 'page2.html',
			controller: 'Page2Ctrl'
		})
		.otherwise('/page1');
});

app.controller('Page1Ctrl', function($scope) {
	$scope.title = 'We are in Page1';
});

app.controller('Page2Ctrl', function($scope) {
	$scope.title = 'We are in Page2';
});
