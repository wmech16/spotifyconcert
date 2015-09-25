var app = angular.module('spotifyConcert', ['ui.router', 'ui.grid']);

app.config(function ($stateProvider, $urlRouterProvider) {
    //unmatched url, redirect too
    $urlRouterProvider.otherwise("/home");
    // the states
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/templates/home.html',
            controller: 'homeCtrl'
        })
        .state('artist', {
            url: '/artist/:id',
            templateUrl: 'app/templates/artist.html',
            controller: 'artistCtrl',
            resolve: {
                id: function (artistService, $stateParams) {
                    return artistService.getAlbums($stateParams.id).then(function (res) {
                        var theAlbum = res.data.items;
                        return theAlbum;
                    })
                },
                artistInfo: function(artistService, $stateParams) { 
                    return artistService.getArtistInfo($stateParams.id).then(function(res){
                       return res.data.response.news;
                        
                    })
                }
                
            }
        })

})