var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./goog.net.xhrlike.js");
var example=$CLJS.example || ($CLJS.example = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});

$CLJS.SHADOW_ENV.setLoaded("goog.net.xmlhttpfactory.js");

goog.provide("goog.net.XmlHttpFactory");
/**
 * @suppress {extraRequire}
 */
goog.require("goog.net.XhrLike");
/** @constructor */ goog.net.XmlHttpFactory = function() {
};
/** @private @type {?Object} */ goog.net.XmlHttpFactory.prototype.cachedOptions_ = null;
/**
 * @return {!goog.net.XhrLike.OrNative}
 */
goog.net.XmlHttpFactory.prototype.createInstance = goog.abstractMethod;
/**
 * @return {Object}
 */
goog.net.XmlHttpFactory.prototype.getOptions = function() {
  return this.cachedOptions_ || (this.cachedOptions_ = this.internalGetOptions());
};
/**
 * @protected
 * @return {Object}
 */
goog.net.XmlHttpFactory.prototype.internalGetOptions = goog.abstractMethod;

module.exports = goog.net.XmlHttpFactory;

//# sourceMappingURL=goog.net.xmlhttpfactory.js.map
