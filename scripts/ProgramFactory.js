
(function(rewardsAdmin, angular) {
	'use strict';

	rewardsAdmin.factory('ProgramFactory', ['RewardService', 'ActivityService', function(RewardService, ActivityService) {
		var defaultName = new Date().getFullYear() + " Incentive Program";

		return function Program(initialProps) {
			var exports = {
				id: 0,
				name: initialProps.name || defaultName,
				isPointsBased: initialProps.isPointsBased || false,
				activities: [],
				rewards: [],
				currencyName: initialProps.currencyName || 'points'
			};

			angular.forEach(initialProps.activityIds, function(id) {
				exports.activities.push(ActivityService.findById(id));
			});

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

			exports.addActivity = function(activity) {
				exports.activities.push(activity);
			};

			exports.hasActivity = function(val) {
				return exports.activities.indexOf(val) === -1;
			};

			exports.serialize = function() {
				var rewardIds = [],
					activityIds = [];

				angular.forEach(exports.rewards, function(reward) {
					rewardIds.push(reward.id);
				});

				angular.forEach(exports.activities, function(activity) {
					activityIds.push(activity.id);
				});

				return {
					rewardIds: rewardIds,
					activityIds: activityIds,
					isPointsBased: exports.isPointsBased,
					currencyName: exports.currencyName,
					name: exports.name
				};
			};

			return exports;
		};

	}]);

})(window.rewardsAdmin, window.angular);
