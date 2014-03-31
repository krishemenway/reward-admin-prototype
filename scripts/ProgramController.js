(function(rewardsControllers) {
	'use strict';

	rewardsControllers.controller('ProgramController', ['$scope', '$location', 'ProgramService', 'RewardService', 'ActivityService', function($scope, $location, ProgramService, RewardService, ActivityService) {
		$scope.program = ProgramService.findOrCreateProgram();

		$scope.allActivities = ActivityService.findAll();

		$scope.newReward = function() {
			var reward = $scope.program.newReward();
			$scope.saveProgram();
			RewardService.saveReward(reward);
			$location.path("/rewards/" + reward.id);
		};

		$scope.deleteReward = function(reward) {
			$scope.program.deleteReward(reward);
			$scope.saveProgram();
		};

		$scope.saveProgram = function() {
			ProgramService.saveProgram($scope.program);
			$scope.showSavedMessage = true;

			window.setTimeout(function() {
				$scope.$apply(function () {
					$scope.showSavedMessage = false;
				});
			}, 2000);
		};
	}]);

})(window.rewardsControllers);
