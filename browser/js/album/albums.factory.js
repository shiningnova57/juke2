'use strict';

juke.factory('AlbumsFactory', function ($q, $http) {
    // make a get request to fetch the album objects
    // return an object that has all the data

    return {
        getAllAlbums: function () {
            return $http.get("/api/albums")
            .then(function (allAlbums) {
                console.log(allAlbums.data);
                // THIS IS an ARRAY!
                return allAlbums.data;
            })
        },

        getAlbumImages: function (albumData) {
            albumData.forEach(function (eachAlbum) {
                eachAlbum.imageUrl = "/api/albums/" + eachAlbum._id + ".image";
            })
        }
    };

});