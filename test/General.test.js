/* global QUnit */

QUnit.module('General');

QUnit.test('foo', assert => {
  assert.equal('Foo', 'Foo', 'similar strings');
  assert.equal(true, 1, 'true and one');
  assert.strictEqual(true, true, 'just true');
});

QUnit.test('bar', assert => {
  const x = { one: 1, two: 2 };
  const y = x;

  assert.strictEqual(
    x,
    y,
    'same object by reference'
  );

  assert.deepEqual(
    { one: 1, two: 2 },
    { one: 1, two: 2 },
    'distinct objects with similar keys and values'
  );
});
