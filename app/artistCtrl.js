var app = angular.module('spotifyConcert')

app.controller('artistCtrl', function ($scope, artistService, id, artistInfo) {
    $scope.myData = id;
    console.log('ctrler', $scope.myData);
    $scope.artist = artistService.getCurrentArtist();
    console.log('artist', $scope.artist)
    $scope.artistInfo = artistInfo;
    console.log(1, $scope.artistInfo);
    
})