'use strict';
module.exports = Number.isNaN || function (value) {
	return typeof value === 'number' && isNaN(value);
};
