/* global QUnit, MyLib */

QUnit.module('MyLib');

QUnit.test('construct', assert => {
  let x;

  x = new MyLib();
  assert.strictEqual(x.a, undefined, 'a default');
  assert.strictEqual(x.b, undefined, 'b default');

  x = new MyLib(1, 2);
  assert.strictEqual(x.a, 1, 'positive a');
  assert.strictEqual(x.b, 2, 'positive b');

  x = new MyLib(-3, -4);
  assert.strictEqual(x.a, -3, 'negative a');
  assert.strictEqual(x.b, -4, 'negative b');
});

QUnit.test('isAwesome', assert => {
  assert.true(MyLib.isAwesome('hey'), 'string');
  assert.true(MyLib.isAwesome(123), 'number');

  assert.false(MyLib.isAwesome(), 'no argument');
  assert.false(MyLib.isAwesome(undefined), 'explicit undefined');
});

QUnit.test('getAye', assert => {
  let x;

  x = new MyLib(1, 2);
  assert.strictEqual(x.getAye(), 1);

  x = new MyLib(-3, -4);
  assert.strictEqual(x.getAye(), -3);
});
