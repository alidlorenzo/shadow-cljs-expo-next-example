var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;

var example=$CLJS.example || ($CLJS.example = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});

$CLJS.SHADOW_ENV.setLoaded("goog.debug.error.js");

goog.provide("goog.debug.Error");
/**
 * @constructor
 * @extends {Error}
 * @param {*=} opt_msg
 */
goog.debug.Error = function(opt_msg) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, goog.debug.Error);
  } else {
    /** @const */ var stack = (new Error).stack;
    if (stack) {
      /** @override */ this.stack = stack;
    }
  }
  if (opt_msg) {
    /** @override */ this.message = String(opt_msg);
  }
  /** @type {boolean} */ this.reportErrorToServer = true;
};
goog.inherits(goog.debug.Error, Error);
/** @override */ goog.debug.Error.prototype.name = "CustomError";

module.exports = goog.debug.Error;

//# sourceMappingURL=goog.debug.error.js.map
