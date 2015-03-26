(function(root) {

  function isTruthy(v) {
    return v;
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = isTruthy;
    }
    exports.isTruthy = isTruthy;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return isTruthy;
    });
  } else {
    root.isTruthy = isTruthy;
  }

})(this);

