(function(root) {

  var webglDetect = (function() {
    var cvs = document.createElement('canvas');
    var contextNames = ['webgl','experimental-webgl','moz-webgl','webkit-3d'];
    var ctx;

    if (navigator.userAgent.indexOf('MSIE') >= 0) {
      try{
        ctx = WebGLHelper.CreateGLContext(cvs, 'canvas');
       }catch(e){}
    } else {
      for (var i = 0; i < contextNames.length; i++){
        try{
          ctx = cvs.getContext(contextNames[i]);
          if (ctx) {
            break;
          }
        }catch(e){}
      }
    }

    return !!ctx;
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

