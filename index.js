'use strict';

module.exports = function (value) {
	return typeof value === 'number' && value !== value;
};
