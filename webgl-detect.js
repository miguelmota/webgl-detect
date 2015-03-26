(function(root) {

  var webglDetect = (function() {
    var canvas = document.createElement('canvas');
    var contextNames = ['webgl','experimental-webgl','moz-webgl','webkit-3d'];
    var context;

    if (~navigator.userAgent.indexOf('MSIE')) {
      try {
        context = WebGLHelper.CreateGLContext(canvas, 'canvas');
      } catch(e) {}
    } else {
      for (var i = 0; i < contextNames.length; i++) {
        try {
          context = canvas.getContext(contextNames[i]);
          if (context) {
            break;
          }
        } catch(e) {}
      }
    }

    return !!context;
  })();

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = webglDetect;
    }
    exports.webglDetect = webglDetect;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return webglDetect;
    });
  } else {
    root.webglDetect = webglDetect;
  }

})(this);

