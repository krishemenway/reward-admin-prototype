/*globals angular*/
(function() {
	'use strict';

	function Program() {
		var rewards = [];
	}

	function Reward(initialName, type) {
		var exports = {
			name: initialName,
			enabled: false,
			rewardType:type,
			selectRewardType: selectRewardType,
			toggleEnabled: toggleEnabled,
			toggleAddExistingActivity: toggleAddExistingActivity,
			isAddingActivity: false,
			addAction: addAction,
			notAlreadyAdded: notAlreadyAdded,
			value: "",
			requiredActivity: []
		};

		function selectRewardType(newType) {
			exports.rewardType = newType;
		}

		function toggleEnabled() {
			exports.enabled = !exports.enabled;
		}

		function toggleAddExistingActivity() {
			exports.isAddingActivity = !exports.isAddingActivity;
		}

		function addAction(action) {
			exports.requiredActivity.push(action);
			toggleAddExistingActivity();
		}

		function notAlreadyAdded(val) {
			return exports.requiredActivity.indexOf(val) === -1;
		}

		return exports;
	}

	var rewardsAdmin = angular.module('rewardsAdmin', []);

	rewardsAdmin.controller('reward', function ($scope, $http) {
		function loadRewardTypes() {
			$scope.rewardTypes = [
				{name: 'Cash', id: 3, image: 'http://placehold.it/140x100', isMoney: true},
				{name: 'Debit Card', id: 4, image: 'http://placehold.it/140x100', isMoney: true},
				{name: 'Gift Card', id: 5, image: 'http://placehold.it/140x100', isMoney: true},
				{name: 'Premium Credit', id: 1, image: 'http://placehold.it/140x100', isMoney: true},
				{name: 'Savings Account Contribution', id: 2, image: 'http://placehold.it/140x100', isMoney: true},
				{name: 'Other', id: 6, image: 'http://placehold.it/140x100', isMoney: false},
				{name: 'Other', id: 7, image: 'http://placehold.it/140x100', isMoney: false},
				{name: 'Other', id: 8, image: 'http://placehold.it/140x100', isMoney: false}
			];
		}

		function loadActions() {
			$scope.availableActions = [
				{name: "Drink 10 cups of water", category: "Food", id: 7},
				{name: "Eat 100 Peanut Butter M&Ms", category: "Food", id: 6},
				{name: "Wrestle with a bear with boxing gloves", category: "What?", id: 5},
				{name: "Go bowling with Stephen", category: "Sports", id: 4},
				{name: "Fight a moose", category: "Sports", id: 3},
				{name: "Create a turing machine", category: "Hobbies", id: 2},
				{name: "Sleep with two dinosaurs at once", category: "What?", id: 1}
			];
		}

		function setupReward() {
			$scope.reward = new Reward('Reward Description Name', $scope.rewardTypes[0]);
		}

		function editAction(action) {
			$scope.selectedAction = action;
		}

		function showEditAction() {
			return $scope.selectedAction !== undefined;
		}

		loadRewardTypes();
		loadActions();
		setupReward();
	});

})();
