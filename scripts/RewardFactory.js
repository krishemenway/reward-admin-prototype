(function(rewardsAdmin, angular) {
	'use strict';

	rewardsAdmin.factory('RewardFactory', ['RewardTypeService', 'ActivityService', function(RewardTypeService, ActivityService) {
		return function Reward(initialProps) {

			var defaultProps = {
				name: 'Default Reward Description',
				moneyValue: '',
				enabled: false,
				rewardType: null,
				programId: null,
				requiredRewards: [],
				requiredActivities: []
			};

			var exports = angular.extend(defaultProps, initialProps);
			exports.rewardType = RewardTypeService.findById(exports.rewardType || 3);

			if(exports.requiredActivities !== null) {
				var activities = [];

				angular.forEach(exports.requiredActivities, function(activityId) {
					activities.push(ActivityService.findById(activityId));
				});

				exports.requiredActivities = activities;
			}

			exports.serialize = function() {
				var props = {
					id: exports.id,
					name: exports.name,
					programId: exports.programId,
					moneyValue: exports.moneyValue,
					enabled: exports.enabled,
					rewardType: exports.rewardType && exports.rewardType.id,
					requiredActivities: [],
					requiredRewards: []
				};

				angular.forEach(exports.requiredActivities, function(activity) {
					props.requiredActivities.push(activity.id);
				});

				angular.forEach(exports.requiredRewards, function(reward) {
					props.requiredRewards.push(reward.id);
				});

				return props;
			}

			exports.selectRewardType = function(newType) {
				exports.rewardType = newType;
			}

			exports.toggleEnabled = function() {
				exports.enabled = !exports.enabled;
			}

			exports.addActivity = function(activity) {
				exports.requiredActivities.push(activity);
			}

			exports.addReward = function(reward) {
				exports.requiredRewards.push(reward);
			}

			exports.hasRequiredReward = function(reward) {
				return exports.requiredRewards.indexOf(reward) === -1;
			}

			exports.hasRequiredActivity = function(val) {
				return exports.requiredActivities.indexOf(val) === -1;
			}

			return exports;
		};
	}]);

})(window.rewardsAdmin, window.angular);