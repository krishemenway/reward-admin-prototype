
(function(rewardsAdmin, angular) {
	'use strict';

	rewardsAdmin.factory('ProgramFactory', ['RewardService', function(RewardService) {

		return function Program(initialProps) {
			var exports = {
				rewards: []
			};

			angular.forEach(initialProps.rewardIds, function(id) {
				exports.rewards.push(RewardService.findById(id));
			});

			exports.newReward = function() {
				var reward = RewardService.newReward();
				exports.rewards.push(reward);
				return reward;
			};

			exports.serialize = function() {
				var rewardIds = [];

				angular.forEach(exports.rewards, function(reward) {
					rewardIds.push(reward.id);
				});

				return {
					rewardIds: rewardIds
				};
			};

			return exports;
		};

	}]);

})(window.rewardsAdmin, window.angular);
