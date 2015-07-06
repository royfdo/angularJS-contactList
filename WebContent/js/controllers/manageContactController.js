contactListApp.controller("manageContactController", function($scope, $routeParams, mockService) {
	var contactId = $routeParams.contactId;
	$scope.id = contactId;
	if (contactId != 'new') {
		angular.forEach(mockService, function(contact) {
			if (contact.id == contactId) {
				$scope.name = contact.name;
				$scope.mobile = contact.mobile;
				$scope.email = contact.email;
			}
		});
	}
});