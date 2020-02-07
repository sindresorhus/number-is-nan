'use strict';
module.exports = function(x) {
	return typeof x === 'number' && x !== x;
};
