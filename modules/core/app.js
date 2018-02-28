'use strict';

angular.module('app.core', []);
angular.module('app.layout', []);
angular.module('app.demo', []);

var app = angular.module('app', [

    // Angular modules
    'ngRoute',
    'ngAnimate',
    'ngAria',
    'ngStorage',

    //3rd party
    'ui.bootstrap',
    'angular-fullcalendar',
    'chart.js',

    //modulos
    'app.core',
    'app.layout',
    'app.demo'

]);

app.config(function($routeProvider, $httpProvider, $sceDelegateProvider) {
	
	$routeProvider
        .when('/dashboard', {templateUrl: 'modules/dashboard/dashboard.html', controller: 'DashboardController'})
        
        .when('/demo/email', {templateUrl: 'modules/demo/email.html'})
        .when('/demo/compose', {templateUrl: 'modules/demo/compose.html'})
        .when('/demo/calendar', {templateUrl: 'modules/demo/calendar.html', controller: 'DemoCandendarController'})
        .when('/demo/chat', {templateUrl: 'modules/demo/chat.html'})
        .when('/demo/charts', {templateUrl: 'modules/demo/charts.html'})
        .when('/demo/forms', {templateUrl: 'modules/demo/forms.html'})
        .when('/demo/ui', {templateUrl: 'modules/demo/ui.html'})
        .when('/demo/basic-table', {templateUrl: 'modules/demo/basic-table.html'})
        .when('/demo/data-table', {templateUrl: 'modules/demo/datatable.html'})

        .when('/', {redirectTo: '/dashboard'})
        
		.otherwise({redirectTo: $routeProvider})
        ;
});

app.run(function($rootScope, $route, $http, $routeParams, $templateCache){
	
	
	
});