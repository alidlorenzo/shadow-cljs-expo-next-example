var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;

var example=$CLJS.example || ($CLJS.example = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});

$CLJS.SHADOW_ENV.setLoaded("goog.events.eventid.js");

goog.provide("goog.events.EventId");
/**
 * @final
 * @struct
 * @constructor
 * @param {string} eventId
 * @template T
 */
goog.events.EventId = function(eventId) {
  /** @const */ this.id = eventId;
};
/** @override */ goog.events.EventId.prototype.toString = function() {
  return this.id;
};

module.exports = goog.events.EventId;

//# sourceMappingURL=goog.events.eventid.js.map
