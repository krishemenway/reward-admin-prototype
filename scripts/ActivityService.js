(function(rewardsAdmin, angular) {
	'use strict';

	rewardsAdmin.service('ActivityService', ['$filter', function($filter) {
		var activities = [
			{name: 'Drink 10 cups of water', category: 'Food', id: 7},
			{name: 'Eat 100 Peanut Butter M&Ms', category: 'Food', id: 6},
			{name: 'Wrestle with a bear with boxing gloves', category: 'What?', id: 5},
			{name: 'Go bowling with Stephen', category: 'Sports', id: 4},
			{name: 'Fight a moose', category: 'Sports', id: 3},
			{name: 'Create a turing machine', category: 'Hobbies', id: 2},
			{name: 'Sleep with two dinosaurs at once', category: 'What?', id: 1}
		];

		this.findById = function(activityId) {
			return $filter('filter')(activities, function(activity) { return activity.id === activityId; })[0];
		};

		this.findAll = function() {
			return activities; // clone this too
		};
	}]);

})(window.rewardsAdmin, window.angular)