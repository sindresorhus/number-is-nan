'use strict';
var test = require('ava');
Number.isNaN = undefined;
var numberIsNan = require('./');

test(function (t) {
	t.assert(numberIsNan(NaN));
	t.assert(!numberIsNan());
	t.assert(!numberIsNan(true));
	t.assert(!numberIsNan(false));
	t.assert(!numberIsNan(null));
	t.assert(!numberIsNan(0));
	t.assert(!numberIsNan(Infinity));
	t.assert(!numberIsNan(-Infinity));
	t.assert(!numberIsNan(''));
	t.assert(!numberIsNan('unicorn'));
	t.assert(!numberIsNan({}));
	t.assert(!numberIsNan([]));
	t.end();
});
