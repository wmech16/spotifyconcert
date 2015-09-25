var app = angular.module('spotifyConcert');

app.controller('homeCtrl', function ($scope, artistService, $state) {
    $scope.artistData = [];
    $scope.albumData = [];
    $scope.getArtistData = function () {
        artistService.artistSearch($scope.searchArtist).then(function (response) {
            $scope.artistData = response;
            console.log($scope.artistData)
        })
    }

    $scope.getAlbumData = function (id, artist) {
        artistService.setCurrentArtist(artist);
        $state.go('artist', {
            id: id
        })
        console.log('getalbumdata', id);
    }
    
})