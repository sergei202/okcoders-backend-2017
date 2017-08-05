var app = angular.module('spaApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/page1', {
			templateUrl: 'views/page1.html',
			controller: 'Page1Ctrl'
		})
		.when('/page2', {
			templateUrl: 'views/page2.html',
			controller: 'Page2Ctrl'
		})
		.otherwise('/page1');
});
