(function(rewardsControllers) {
	'use strict';

	rewardsControllers.controller('RewardController', ['$scope', '$routeParams', 'RewardService', 'RewardTypeService', function ($scope, $routeParams, RewardService, RewardTypeService) {
		var rewardId = $routeParams.rewardId;

		function loadActions() {
			$scope.availableActivities = [
				{name: 'Drink 10 cups of water', category: 'Food', id: 7},
				{name: 'Eat 100 Peanut Butter M&Ms', category: 'Food', id: 6},
				{name: 'Wrestle with a bear with boxing gloves', category: 'What?', id: 5},
				{name: 'Go bowling with Stephen', category: 'Sports', id: 4},
				{name: 'Fight a moose', category: 'Sports', id: 3},
				{name: 'Create a turing machine', category: 'Hobbies', id: 2},
				{name: 'Sleep with two dinosaurs at once', category: 'What?', id: 1}
			];

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

		$scope.rewardTypes = RewardTypeService.getAll();

		loadActions();
		loadReward();
	}]);

})(window.rewardsControllers);