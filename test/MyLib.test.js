/* eslint-env qunit */
/* global MyLib */
QUnit.module('General');

QUnit.test('some basic tests', function (assert) {
	var x, y;

	assert.equal('Foo', 'Foo', 'Similar strings are equal');

	// Same as `true == 1` in regular code.
	assert.equal(true, 1, 'Boolean true and 1 are equal');

	// Same as `true !== 1` in regular code.
	assert.notStrictEqual(true, 1, 'But not *strictly* the same');

	assert.strictEqual(true, true, 'true equals true ');

	x = { one : 1, two: 2 };
	y = x;
	assert.strictEqual(
		x,
		y,
		'assert.strictEqual compares by reference, same references are equal'
	);
	assert.notStrictEqual(
		{ one : 1, two: 2 },
		{ one: 1, two: 2 },
		'assert.strictEqual compares by reference, different objects are not identical'
	);
	assert.deepEqual(
		{ one : 1, two: 2 },
		{ one: 1, two: 2 },
		'assert.deepEqual compares values, similar key/values are equal'
	);
});

QUnit.module('myLib');

QUnit.test('construct', function (assert) {
	var x;

	x = new MyLib();
	assert.strictEqual(x.a, undefined, 'a default');
	assert.strictEqual(x.b, undefined, 'b default');

	x = new MyLib(1, 2);
	assert.strictEqual(x.a, 1, 'a set');
	assert.strictEqual(x.b, 2, 'b set');
});

QUnit.test('isAwesome', function (assert) {
	assert.strictEqual(MyLib.isAwesome('hey'), true, 'Strings are awesome');
	assert.strictEqual(MyLib.isAwesome(123), true, 'Numbers are awesome');

	assert.strictEqual(MyLib.isAwesome(), false, 'Undefined (implicit) is not cool');
	assert.strictEqual(MyLib.isAwesome(undefined), false, 'Undefined (explicit) is not cool');
});

QUnit[MyLib.noConflict ? 'test' : 'skip']('noConflict', function (assert) {
	var lib = MyLib.noConflict();
	assert.strictEqual(lib.isAwesome(123), true, 'Lib still works (Numbers are awesome)');
	assert.strictEqual(MyLib, undefined, 'Global was restored');
});
