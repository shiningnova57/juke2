juke.controller('SidebarCtrl', function ($scope, $rootScope, PlayerFactory, AlbumsFactory) {
	$scope.viewAlbums = function () {
		// emit an event
		// then the 
		$rootScope.$broadcast('showAlbums');	
	}
});
