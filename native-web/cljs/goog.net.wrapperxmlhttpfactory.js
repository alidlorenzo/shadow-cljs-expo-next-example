var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./goog.net.xhrlike.js");
require("./goog.net.xmlhttpfactory.js");
var example=$CLJS.example || ($CLJS.example = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});

$CLJS.SHADOW_ENV.setLoaded("goog.net.wrapperxmlhttpfactory.js");

goog.provide("goog.net.WrapperXmlHttpFactory");
/**
 * @suppress {extraRequire}
 */
goog.require("goog.net.XhrLike");
goog.require("goog.net.XmlHttpFactory");
/**
 * @final
 * @constructor
 * @extends {goog.net.XmlHttpFactory}
 * @param {function():!goog.net.XhrLike.OrNative} xhrFactory
 * @param {function():!Object} optionsFactory
 */
goog.net.WrapperXmlHttpFactory = function(xhrFactory, optionsFactory) {
  goog.net.XmlHttpFactory.call(this);
  /** @private @type {function():!goog.net.XhrLike.OrNative} */ this.xhrFactory_ = xhrFactory;
  /** @private @type {function():!Object} */ this.optionsFactory_ = optionsFactory;
};
goog.inherits(goog.net.WrapperXmlHttpFactory, goog.net.XmlHttpFactory);
/** @override */ goog.net.WrapperXmlHttpFactory.prototype.createInstance = function() {
  return this.xhrFactory_();
};
/** @override */ goog.net.WrapperXmlHttpFactory.prototype.getOptions = function() {
  return this.optionsFactory_();
};

module.exports = goog.net.WrapperXmlHttpFactory;

//# sourceMappingURL=goog.net.wrapperxmlhttpfactory.js.map
