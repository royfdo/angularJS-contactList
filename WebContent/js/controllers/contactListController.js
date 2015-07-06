contactListApp.controller("contactListController", function($scope, $location, $filter, mockService) {
	/*var contactList = [{id:1, name:'Roy Fernando', mobile:'0777418723', email:'roy.sliit@gmail.com'},
		                 {id:2, name:'Madusha Perers', mobile:'071453333', email:'madusha5p@gmail.com'},
		                 {id:3, name:'Rohan Fernando', mobile:'0714514513', email:'fmrohan@gmail.com'}];*/
	
	
	var contactList = mockService;
	
	$scope.contacts= contactList;
	$scope.reverse = false;
	
	$scope.searchByName = function() {
		if($scope.search.length == 0) {
			$scope.contacts = contactList;
		} else {
			$scope.contacts = $filter('filterByName')($scope.contacts, $scope.search);
		}
	};
	
	$scope.orderBy = function(predecate) {
		$scope.contacts = $filter('orderBy')($scope.contacts, predecate, $scope.reverse);
		$scope.reverse = !$scope.reverse;
	};
	
	$scope.edit = function(id) {
		$scope.go('/newContact/'+id);
	};
});