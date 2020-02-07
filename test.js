'use strict';
const test = require('ava');
Number.isNaN = undefined;
const fn = require('./');

test('NaN tests', t => {
	t.true(fn(NaN));
	t.false(fn());
	t.false(fn(true));
	t.false(fn(false));
	t.false(fn(null));
	t.false(fn(0));
	t.false(fn(Infinity));
	t.false(fn(-Infinity));
	t.false(fn(''));
	t.false(fn('unicorn'));
	t.false(fn({}));
	t.false(fn([]));
});
