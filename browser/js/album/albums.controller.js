juke.controller('AlbumsCtrl', function ($scope, $rootScope, AlbumsFactory) {
  AlbumsFactory.getAllAlbums()
  .then(function (allAlbums) {
    AlbumsFactory.getAlbumImages(allAlbums);
    $scope.allAlbums = allAlbums;
    console.log($scope.allAlbums);
  })
  
  $scope.showAlbums = false;

  $scope.$on("showAlbums", function () {
    $scope.showAlbums = !$scope.showAlbums
  })
});
