(function () {

	var app = angular.module("ivacalculator", ['ui.router','ngToast']);

  app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider

        .state('login', {
            url: '/login',
            template: '<login></login>'
        })
        .state('register',{
            url: '/register',
            template: '<register></register>'
        })
				.state('registered',{
						url: '/registered',
						template: '<div>prueba</div>'
				})
				.state('calculator',{
						url: '/calculator',
						template: '<calculator></calculator>'
				});

});

})();
