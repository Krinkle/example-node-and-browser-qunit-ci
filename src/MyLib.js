(function (global) {
  /**
   * @class
   * @constructor
   * @param {string} a
   * @param {string} b
   */
  function MyLib (a, b) {
    this.a = a;
    this.b = b;
  }

  /**
   * @static
   * @param {Mixed} o
   * @return {boolean}
   */
  MyLib.isAwesome = function (value) {
    return value !== undefined;
  };

  /**
   * @return {string}
   */
  MyLib.prototype.getAye = function () {
    return this.a;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = MyLib;
  } else {
    global.MyLib = MyLib;
  }
}(this));
