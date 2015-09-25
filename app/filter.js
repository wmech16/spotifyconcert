angular.module('spotifyConcert')

.filter('unsafe', function($sce) {
    return $sce.trustAsHtml;
})