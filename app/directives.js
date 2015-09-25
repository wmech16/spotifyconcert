var app = angular.module('spotifyConcert');

app.directive('hover', function () {
	return {
		restrict: 'A',
		scope: {
			addClass: '@',
			removeClass: '@'
		},
		link: function (scope, elem, attrs) {
			elem.on('mouseover', function () {
				elem.addClass(scope.addClass)
			})
			elem.on('mouseout', function () {
				elem.removeClass(scope.addClass)
			})
		}
	}
})

.directive('artist', function () {
	return {
		template: '<table style="width:100%"><tr><th class = "latest-header">Latest Album</th></tr><tr><td class="album-name">"{{data.name}}"</td></tr><tr><td class="album-art"><img class = "album-img" ng-src="{{data.images[1].url}}"></td></tr><tr><th><h2>Recent News</h2></th></tr><tr><td class = "artist-news link"><a ng-href="{{artistInfo[0].url}}">{{artistInfo[0].name}} - Read more here</a></td></tr><tr><td class = "artist-news sum" ng-bind-html="artistInfo[0].summary | unsafe"></td></tr> </table>'
	}
})