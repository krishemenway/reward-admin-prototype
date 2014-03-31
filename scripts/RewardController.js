(function(rewardsControllers) {
	'use strict';

	rewardsControllers.controller('RewardController',['$scope','$routeParams','RewardService','RewardTypeService','$location','ActivityService', 'ProgramService', function ($scope, $routeParams, RewardService, RewardTypeService, $location, ActivityService, ProgramService) {
		var rewardId = $routeParams.rewardId;

		$scope.addActivity = function(activity) {
			$scope.reward.addActivity(activity);
			$scope.save();
			$scope.typeOfActivityToAdd = '';
		};

		$scope.addRequiredReward = function(reward) {
			$scope.reward.addRequiredReward(reward);
			$scope.save();
			$scope.isAddingReward = false;
		}

		$scope.save = function() {
			RewardService.saveReward($scope.reward);
			$scope.showSavedMessage = true;

			window.setTimeout(function() {
				$scope.$apply(function () {
					$scope.showSavedMessage = false;
				});
			}, 2000);
		};

		$scope.existingActivities = ActivityService.findAll();
		$scope.rewardTypes = RewardTypeService.findAll();

		$scope.categories = ActivityService.findAllCategories();
		$scope.reward = RewardService.findById(rewardId);
		$scope.program = ProgramService.findProgram();
	}]);

})(window.rewardsControllers);