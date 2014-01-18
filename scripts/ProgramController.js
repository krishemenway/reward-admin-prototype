(function(rewardsControllers) {
	'use strict';

	rewardsControllers.controller('ProgramController', ['$scope', '$location', 'ProgramService', 'RewardService', function($scope, $location, ProgramService, RewardService) {
		$scope.program = ProgramService.findOrCreateProgram();

		$scope.newReward = function() {
			var reward = $scope.program.newReward();
			ProgramService.saveProgram($scope.program);
			RewardService.saveReward(reward);
			$location.path("/rewards/" + reward.id);
		};
	}]);

})(window.rewardsControllers);
