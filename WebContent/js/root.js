/**
 * Define as a service
 */
contactListApp.factory('mockService', function() {
        return [{id:1, name:'Roy Fernando', mobile:'0777418723', email:'roy.sliit@gmail.com'},
                 {id:2, name:'Madusha Perers', mobile:'071453333', email:'madusha5p@gmail.com'},
                 {id:3, name:'Rohan Fernando', mobile:'0714514513', email:'fmrohan@gmail.com'}];
    });

/**
 * Define as a global function
 */
contactListApp.run(function($rootScope, $location) {
    $rootScope.go = function(path) {
    	$location.path(path);
    };
});


contactListApp.filter('filterByName', function(){
	return function(contactList, searchText) {
		var filteredArray = [];
		
		angular.forEach(contactList, function(contact) {

		      if (angular.lowercase(contact.name).indexOf(angular.lowercase(searchText)) > -1) {
		    	  filteredArray.push(contact);
		      }
		      
		    });
		return filteredArray;
	};
});

contactListApp.run([
                    '$rootScope',
                    function($rootScope) {
                      // see what's going on when the route tries to change
                      $rootScope.$on('$locationChangeStart', function(event, newUrl, oldUrl) {
                        // both newUrl and oldUrl are strings
                        console.log('Starting to leave %s to go to %s', oldUrl, newUrl);
                      });
                    }
                  ]);