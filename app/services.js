var app = angular.module('spotifyConcert').service('artistService', function ($http) {
    var currentArtist = "";
    this.getCurrentArtist = function() {
        return currentArtist;
    }
    this.setCurrentArtist = function(artist){
        currentArtist = artist;
    }
    this.artistSearch = function (artist) {
        var url = 'https://api.spotify.com/v1/search?q=' + artist + '%20NOT%20ft.%20NOT%20featuring%20NOT%20feat&type=artist&market=US&limit=1'
        return $http({
            method: 'GET',
            url: url
        }).then(function(results){
            var results = results.data.artists.items;
            return results
        })
    }

    this.getAlbums = function (id) {
        console.log(id)
        return $http({
            method: 'GET',
            url: "https://api.spotify.com/v1/artists/" + id + "/albums?album_type=album&market=US&limit=1"

        }).then(function (albumResults) {
           return albumResults;
        })
        
    };
    
    this.getArtistInfo = function(artistInfo) {
        console.log(artistInfo)
        return $http({
            method: 'GET',
            url: 'http://developer.echonest.com/api/v4/artist/news?api_key=LBWRFZABYTN02NGHA&id=spotify:artist:' + artistInfo + '&format=json'
        }).then(function(results){ console.log(16, results);
            return results;
        })
    }
   
})