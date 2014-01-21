(function(rewardsAdmin, localStorage) {
	'use strict';

	rewardsAdmin.service('ProgramService', ['ProgramFactory', function(Program) {
		var programLocationKey = 'program';

		this.newProgram = function() {
			return this.saveProgram(this.createProgram({}));
		};

		this.createProgram = function(initialProps) {
			return new Program(initialProps);
		};

		this.saveProgram = function(program) {
			localStorage.setItem(programLocationKey, JSON.stringify(program.serialize()));
			return program;
		};

		this.findProgram = function() {
			var programJson = localStorage.getItem(programLocationKey);

			if(programJson === null)
				return null;

			return this.createProgram(JSON.parse(programJson));
		};

		this.findOrCreateProgram = function() {
			return this.findProgram() || this.newProgram();
		};
	}]);

})(window.rewardsAdmin, window.localStorage);