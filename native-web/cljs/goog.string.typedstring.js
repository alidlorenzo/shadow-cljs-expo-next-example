var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;

var example=$CLJS.example || ($CLJS.example = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});

$CLJS.SHADOW_ENV.setLoaded("goog.string.typedstring.js");

goog.provide("goog.string.TypedString");
/** @interface */ goog.string.TypedString = function() {
};
/** @type {boolean} */ goog.string.TypedString.prototype.implementsGoogStringTypedString;
/**
 * @return {string}
 */
goog.string.TypedString.prototype.getTypedStringValue;

module.exports = goog.string.TypedString;

//# sourceMappingURL=goog.string.typedstring.js.map
