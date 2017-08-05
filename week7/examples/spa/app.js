var app = angular.module('spaApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/page1', {
			templateUrl: 'page1.html'
		})
		.when('/page2', {
			templateUrl: 'page2.html'
		})
		.otherwise('/page1');
});
