var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./goog.events.listenable.js");
var example=$CLJS.example || ($CLJS.example = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});

$CLJS.SHADOW_ENV.setLoaded("goog.events.listener.js");

goog.provide("goog.events.Listener");
goog.require("goog.events.ListenableKey");
/**
 * @constructor
 * @implements {goog.events.ListenableKey}
 * @param {function(?):?} listener
 * @param {Function} proxy
 * @param {(EventTarget|goog.events.Listenable)} src
 * @param {string} type
 * @param {boolean} capture
 * @param {Object=} opt_handler
 */
goog.events.Listener = function(listener, proxy, src, type, capture, opt_handler) {
  if (goog.events.Listener.ENABLE_MONITORING) {
    this.creationStack = (new Error).stack;
  }
  /** @override */ this.listener = listener;
  /** @type {Function} */ this.proxy = proxy;
  /** @type {(EventTarget|goog.events.Listenable)} */ this.src = src;
  /** @const @type {string} */ this.type = type;
  /** @const @type {boolean} */ this.capture = !!capture;
  /** @type {(Object|undefined)} */ this.handler = opt_handler;
  /** @const @override @type {number} */ this.key = goog.events.ListenableKey.reserveKey();
  /** @type {boolean} */ this.callOnce = false;
  /** @type {boolean} */ this.removed = false;
};
/** @define {boolean} */ goog.events.Listener.ENABLE_MONITORING = goog.define("goog.events.Listener.ENABLE_MONITORING", false);
/** @type {string} */ goog.events.Listener.prototype.creationStack;
goog.events.Listener.prototype.markAsRemoved = function() {
  this.removed = true;
  this.listener = null;
  this.proxy = null;
  this.src = null;
  this.handler = null;
};

module.exports = goog.events.Listener;

//# sourceMappingURL=goog.events.listener.js.map
