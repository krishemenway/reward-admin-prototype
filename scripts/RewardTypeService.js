(function(rewardsAdmin) {
	'use strict';
	
	rewardsAdmin.service('RewardTypeService', ['$filter', function($filter) {
		var rewardTypes = [
			{name: 'Premium Credit', id: 1, image: 'http://placehold.it/140x100', isMoney: true},
			{name: 'Savings Account Contribution', id: 2, image: 'http://placehold.it/140x100', isMoney: true},
			{name: 'Cash', id: 3, image: 'http://placehold.it/140x100', isMoney: true},
			{name: 'Debit Card', id: 4, image: 'http://placehold.it/140x100', isMoney: true},
			{name: 'Gift Card', id: 5, image: 'http://placehold.it/140x100', isMoney: true},
			{name: 'Other', id: 6, image: 'http://placehold.it/140x100', isMoney: false}
		];

		this.findById = function(id) {
			return $filter('filter')(rewardTypes, function(rewardType) { return rewardType.id === id; })[0];
		};

		this.findAll = function() {
			return rewardTypes; // todo clone this to prevent manipulation
		};
	}]);
})(window.rewardsAdmin);