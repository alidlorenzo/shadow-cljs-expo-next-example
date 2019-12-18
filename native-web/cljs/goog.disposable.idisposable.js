var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;

var example=$CLJS.example || ($CLJS.example = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});

$CLJS.SHADOW_ENV.setLoaded("goog.disposable.idisposable.js");

goog.provide("goog.disposable.IDisposable");
/** @record */ goog.disposable.IDisposable = function() {
};
/**
 * @return {void}
 */
goog.disposable.IDisposable.prototype.dispose = goog.abstractMethod;
/**
 * @return {boolean}
 */
goog.disposable.IDisposable.prototype.isDisposed = goog.abstractMethod;

module.exports = goog.disposable.IDisposable;

//# sourceMappingURL=goog.disposable.idisposable.js.map
