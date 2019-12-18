var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./goog.useragent.useragent.js");
var example=$CLJS.example || ($CLJS.example = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});

$CLJS.SHADOW_ENV.setLoaded("goog.events.browserfeature.js");

goog.provide("goog.events.BrowserFeature");
goog.require("goog.userAgent");
goog.scope(function() {
  /** @enum {boolean} */ goog.events.BrowserFeature = {HAS_W3C_BUTTON:!goog.userAgent.IE || goog.userAgent.isDocumentModeOrHigher(9), HAS_W3C_EVENT_SUPPORT:!goog.userAgent.IE || goog.userAgent.isDocumentModeOrHigher(9), SET_KEY_CODE_TO_PREVENT_DEFAULT:goog.userAgent.IE && !goog.userAgent.isVersionOrHigher("9"), HAS_NAVIGATOR_ONLINE_PROPERTY:!goog.userAgent.WEBKIT || goog.userAgent.isVersionOrHigher("528"), HAS_HTML5_NETWORK_EVENT_SUPPORT:goog.userAgent.GECKO && goog.userAgent.isVersionOrHigher("1.9b") || 
  goog.userAgent.IE && goog.userAgent.isVersionOrHigher("8") || goog.userAgent.OPERA && goog.userAgent.isVersionOrHigher("9.5") || goog.userAgent.WEBKIT && goog.userAgent.isVersionOrHigher("528"), HTML5_NETWORK_EVENTS_FIRE_ON_BODY:goog.userAgent.GECKO && !goog.userAgent.isVersionOrHigher("8") || goog.userAgent.IE && !goog.userAgent.isVersionOrHigher("9"), TOUCH_ENABLED:"ontouchstart" in goog.global || !!(goog.global["document"] && document.documentElement && "ontouchstart" in document.documentElement) || 
  !!(goog.global["navigator"] && (goog.global["navigator"]["maxTouchPoints"] || goog.global["navigator"]["msMaxTouchPoints"])), POINTER_EVENTS:"PointerEvent" in goog.global, MSPOINTER_EVENTS:"MSPointerEvent" in goog.global && !!(goog.global["navigator"] && goog.global["navigator"]["msPointerEnabled"]), PASSIVE_EVENTS:purify(function() {
    if (!goog.global.addEventListener || !Object.defineProperty) {
      return false;
    }
    var passive = false;
    var options = Object.defineProperty({}, "passive", {get:function() {
      passive = true;
    }});
    try {
      goog.global.addEventListener("test", goog.nullFunction, options);
      goog.global.removeEventListener("test", goog.nullFunction, options);
    } catch (e) {
    }
    return passive;
  })};
  /**
   * @param {function():T} fn
   * @return {T}
   * @template T
   */
  function purify(fn) {
    return {valueOf:fn}.valueOf();
  }
});

module.exports = goog.events.BrowserFeature;

//# sourceMappingURL=goog.events.browserfeature.js.map
