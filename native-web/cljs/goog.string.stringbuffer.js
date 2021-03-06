var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;

var example=$CLJS.example || ($CLJS.example = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});

$CLJS.SHADOW_ENV.setLoaded("goog.string.stringbuffer.js");

goog.provide("goog.string.StringBuffer");
/**
 * @constructor
 * @param {*=} opt_a1
 * @param {...*} var_args
 */
goog.string.StringBuffer = function(opt_a1, var_args) {
  if (opt_a1 != null) {
    this.append.apply(this, arguments);
  }
};
/** @private @type {string} */ goog.string.StringBuffer.prototype.buffer_ = "";
/**
 * @param {*} s
 */
goog.string.StringBuffer.prototype.set = function(s) {
  this.buffer_ = "" + s;
};
/**
 * @param {*} a1
 * @param {*=} opt_a2
 * @param {...?} var_args
 * @return {!goog.string.StringBuffer}
 * @suppress {duplicate}
 */
goog.string.StringBuffer.prototype.append = function(a1, opt_a2, var_args) {
  this.buffer_ += String(a1);
  if (opt_a2 != null) {
    for (var i = 1; i < arguments.length; i++) {
      this.buffer_ += arguments[i];
    }
  }
  return this;
};
goog.string.StringBuffer.prototype.clear = function() {
  this.buffer_ = "";
};
/**
 * @return {number}
 */
goog.string.StringBuffer.prototype.getLength = function() {
  return this.buffer_.length;
};
/**
 * @return {string}
 * @override
 */
goog.string.StringBuffer.prototype.toString = function() {
  return this.buffer_;
};

module.exports = goog.string.StringBuffer;

//# sourceMappingURL=goog.string.stringbuffer.js.map
