
(function(rewardsAdmin, angular) {
	'use strict';

	rewardsAdmin.factory('ProgramFactory', ['RewardService', function(RewardService) {

		return function Program(initialProps) {
			var exports = {
				name: initialProps.name,
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

			exports.deleteReward = function(reward) {
				var rewardIndex = exports.rewards.indexOf(reward);

				if (rewardIndex > -1) {
				    exports.rewards.splice(rewardIndex, 1);
				}
			};

			exports.serialize = function() {
				var rewardIds = [];

				angular.forEach(exports.rewards, function(reward) {
					rewardIds.push(reward.id);
				});

				return {
					rewardIds: rewardIds,
					name: exports.name
				};
			};

			return exports;
		};

	}]);

})(window.rewardsAdmin, window.angular);
