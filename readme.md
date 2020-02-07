# number-is-nan [![Build Status](https://travis-ci.org/sindresorhus/number-is-nan.svg?branch=master)](https://travis-ci.org/sindresorhus/number-is-nan)

> ES2015 [`Number.isNaN()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) [ponyfill](https://ponyfill.com)

## Install

```
$ npm install number-is-nan
```

## Usage

```js
const numberIsNan = require('number-is-nan');

numberIsNan(NaN);
//=> true

numberIsNan('unicorn');
//=> false
```

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-number-is-nan?utm_source=npm-number-is-nan&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
