angular.module("MyApp", ['ngRoute'])
	.config(myRouter);

	myRouter.$inject = ['$routeProvider'];

	function myRouter ($routeProvider) {
		
		$routeProvider
			.when('/form', {
				templateUrl: '../templates/pages/form/index.html'
			})
			.when('/profile', {
				templateUrl: '../templates/pages/profile/index.html'
			})
			.otherwise({ 
				redirectTo: '/'
			});
	};