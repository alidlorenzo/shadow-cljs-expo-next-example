var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;

var example=$CLJS.example || ($CLJS.example = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});

$CLJS.SHADOW_ENV.setLoaded("goog.math.irect.js");

goog.provide("goog.math.IRect");
/** @record */ goog.math.IRect = function() {
};
/** @type {number} */ goog.math.IRect.prototype.left;
/** @type {number} */ goog.math.IRect.prototype.top;
/** @type {number} */ goog.math.IRect.prototype.width;
/** @type {number} */ goog.math.IRect.prototype.height;

module.exports = goog.math.IRect;

//# sourceMappingURL=goog.math.irect.js.map
