var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;

var example=$CLJS.example || ($CLJS.example = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});

$CLJS.SHADOW_ENV.setLoaded("goog.promise.resolver.js");

goog.provide("goog.promise.Resolver");
goog.forwardDeclare("goog.Promise");
/**
 * @interface
 * @template TYPE
 */
goog.promise.Resolver = function() {
};
/** @type {!goog.Promise<TYPE>} */ goog.promise.Resolver.prototype.promise;
/** @type {function((TYPE|goog.Promise<TYPE>|Thenable)=)} */ goog.promise.Resolver.prototype.resolve;
/** @type {function(*=):void} */ goog.promise.Resolver.prototype.reject;

module.exports = goog.promise.Resolver;

//# sourceMappingURL=goog.promise.resolver.js.map
