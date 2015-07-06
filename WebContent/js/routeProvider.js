var contactListApp = angular.module('contactListApp', ['ngRoute']);

contactListApp.config(function($routeProvider) {
	$routeProvider
	
	.when("/", {
		templateUrl : 'contactList.html',
		controller : 'contactListController'
	})
	
	.when("/newContact/:contactId", {
		templateUrl : 'manageContact.html',
		controller : 'manageContactController'
	});
	
});