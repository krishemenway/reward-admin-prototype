(function(window, angular) {
	'use strict';

	window.rewardsAdmin = angular.module('rewardsAdmin', [
		'ngRoute',
		'rewardsControllers'
	]);

	window.rewardsAdmin.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/rewards', {
			templateUrl: 'partials/rewards.html',
			controller: 'ProgramController'
		}).
		when('/rewards/:rewardId', {
			templateUrl: 'partials/reward.html',
			controller: 'RewardController'
		}).
		otherwise({
			redirectTo: '/rewards'
		});
	}]);

})(window, window.angular);