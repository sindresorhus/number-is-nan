'use strict';
const test = require('ava');
Number.isNaN = undefined;
const numberIsNan = require('.');

test('main', t => {
	t.true(numberIsNan(NaN));
	t.false(numberIsNan());
	t.false(numberIsNan(true));
	t.false(numberIsNan(false));
	t.false(numberIsNan(null));
	t.false(numberIsNan(0));
	t.false(numberIsNan(Infinity));
	t.false(numberIsNan(-Infinity));
	t.false(numberIsNan(''));
	t.false(numberIsNan('unicorn'));
	t.false(numberIsNan({}));
	t.false(numberIsNan([]));
});
