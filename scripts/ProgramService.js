(function(rewardsAdmin, localStorage) {
	'use strict';

	rewardsAdmin.service('ProgramService', ['ProgramFactory', function(Program) {
		var programLocationKey = 'program';

		this.newProgram = function() {
			var program =  new Program({});
			this.saveProgram(program);
			return program;
		};

		this.createProgram = function(initialProps) {
			var program = new Program(initialProps);
			return program;
		};

		this.saveProgram = function(program) {
			localStorage.setItem(programLocationKey, JSON.stringify(program.serialize()));
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