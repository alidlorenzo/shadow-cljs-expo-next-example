var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;

var example=$CLJS.example || ($CLJS.example = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});

$CLJS.SHADOW_ENV.setLoaded("goog.debug.errorcontext.js");

goog.provide("goog.debug.errorcontext");
/**
 * @param {!Error} err
 * @param {string} contextKey
 * @param {string} contextValue
 */
goog.debug.errorcontext.addErrorContext = function(err, contextKey, contextValue) {
  if (!err[goog.debug.errorcontext.CONTEXT_KEY_]) {
    err[goog.debug.errorcontext.CONTEXT_KEY_] = {};
  }
  err[goog.debug.errorcontext.CONTEXT_KEY_][contextKey] = contextValue;
};
/**
 * @param {!Error} err
 * @return {!Object<string,string>}
 */
goog.debug.errorcontext.getErrorContext = function(err) {
  return err[goog.debug.errorcontext.CONTEXT_KEY_] || {};
};
/** @private @const @type {string} */ goog.debug.errorcontext.CONTEXT_KEY_ = "__closure__error__context__984382";

module.exports = goog.debug.errorcontext;

//# sourceMappingURL=goog.debug.errorcontext.js.map
