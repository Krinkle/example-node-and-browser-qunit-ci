QUnit.module('main');

QUnit.test('mylib returns true', function () {

    strictEqual(mylib(), true, 'mylib() returns true');
});

QUnit.test('a few more tests', function () {
	// Be sure to keep this number correct if you uncomment, add or remove
	// assertions below. You could also remove it alltogether as expect() is optional.
	QUnit.expect(2);

	// example of failing test
	//assert.equal('This string is not the same', 'as this one', 'different strings are.. different, this fails');

	equal('Foo', 'Foo', 'Similar strings are.. equal');

	// example of failing test
	//assert.equal({ one : 1, two: 2 }, { one: 1, two: 2 }, 'objects are compared by reference, this fails');

	deepEqual({ one : 1, two: 2 }, { one: 1, two: 2 }, 'deepEqual compares values');
});
