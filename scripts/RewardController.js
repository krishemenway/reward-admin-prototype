(function(rewardsControllers) {
	'use strict';

	rewardsControllers.controller('RewardController',['$scope','$routeParams','RewardService','RewardTypeService','$location','ActivityService',function ($scope, $routeParams, RewardService, RewardTypeService, $location, ActivityService) {
		var rewardId = $routeParams.rewardId;

		$scope.addActivity = function(activity) {
			$scope.reward.addActivity(activity);
			$scope.typeOfActivityToAdd = '';
		};

		$scope.save = function() {
			RewardService.saveReward($scope.reward);
		};

		$scope.existingActivities = ActivityService.findAll();
		$scope.rewardTypes = RewardTypeService.findAll();

		$scope.categories = ActivityService.findAllCategories();
		$scope.reward = RewardService.findById(rewardId);
	}]);

})(window.rewardsControllers);