(function(rewardsAdmin, angular) {
	'use strict';

	rewardsAdmin.factory('RewardFactory', ['RewardTypeService', function(RewardTypeService) {
		return function Reward(initialProps) {

			var defaultProps = {
				name: 'Default Reward Description',
				moneyValue: '',
				enabled: false,
				rewardType: undefined,
				requiredActivities: []
			};

			var exports = angular.extend(defaultProps, initialProps);

			if(exports.rewardType !== null) {
				exports.rewardType = RewardTypeService.getById(exports.rewardType);
			}

			exports.serialize = function() {
				return {
					id: exports.id,
					name: exports.name,
					moneyValue: exports.moneyValue,
					enabled: exports.enabled,
					rewardType: exports.rewardType && exports.rewardType.id
				};
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

			exports.hasRequiredActivity = function(val) {
				return exports.requiredActivities.indexOf(val) === -1;
			}

			return exports;
		};
	}]);

})(window.rewardsAdmin, window.angular);