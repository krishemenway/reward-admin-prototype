(function(rewardsAdmin, localStorage) {
	'use strict';

	rewardsAdmin.service('RewardService', ['RewardFactory', function(Reward) {
		var baseRewardKey = 'reward',
			nextRewardIdKey = 'next_rewardId';

		this.nextRewardId = function() {
			var nextId = localStorage.getItem(nextRewardIdKey);

			if(nextId === null) {
				localStorage.setItem(nextRewardIdKey, 0);
				return this.nextRewardId();
			}

			nextId = parseInt(nextId);
			localStorage.setItem(nextRewardIdKey, nextId + 1);
			return nextId;
		};

		this.keyForReward = function(rewardId) {
			return baseRewardKey + rewardId;
		};

		this.newReward = function() {
			return new Reward({id: this.nextRewardId()});
		};

		this.createReward = function(rewardProperties) {
			return new Reward(rewardProperties);
		};

		this.saveReward = function(reward) {
			localStorage.setItem(this.keyForReward(reward.id), JSON.stringify(reward.serialize()));
		};

		this.findById = function(rewardId) {
			return this.createReward(JSON.parse(localStorage.getItem(this.keyForReward(rewardId))));
		};
	}]);

})(window.rewardsAdmin, window.localStorage);