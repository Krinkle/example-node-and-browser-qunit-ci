/*
    When writing tests we need to use the properly named QUnit.module because
    node already has "module" defined. Because we're doing this, let's stick to
    the convention for tests also
*/


QUnit.module('mylib');

QUnit.test('mylib returns true', function () {
    
    equal(mylib(), true, 'mylib() returns true');

});

QUnit.test('a failing test', function () {
	expect(2);
	equal('This string is not the same', 'as this one');

	equal({ one : 1, two: 3 }, { one: 1, two: 2 }, 'this one\'s gonna fail');
});