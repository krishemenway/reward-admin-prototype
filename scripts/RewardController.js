(function(rewardsControllers) {
	'use strict';

	rewardsControllers.controller('RewardController',['$scope','$routeParams','RewardService','RewardTypeService','$location','ActivityService',function ($scope, $routeParams, RewardService, RewardTypeService, $location, ActivityService) {
		var rewardId = $routeParams.rewardId;

		function loadActions() {
			$scope.categories = ['What?','Food','Sports','Hobbies'];
		}

		function loadReward() {
			$scope.reward = RewardService.findById(rewardId);
		}

		$scope.addActivity = function(activity) {
			$scope.reward.addActivity(activity);
			$scope.typeOfActivityToAdd = '';
		};

		$scope.save = function() {
			RewardService.saveReward($scope.reward);
		};

		$scope.back = function() {
			$location.path("/rewards");
		};

		$scope.existingActivities = ActivityService.findAll();
		$scope.rewardTypes = RewardTypeService.findAll();

		loadActions();
		loadReward();
	}]);

})(window.rewardsControllers);