var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;

var example=$CLJS.example || ($CLJS.example = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});

$CLJS.SHADOW_ENV.setLoaded("goog.fs.url.js");

goog.provide("goog.fs.url");
/**
 * @param {!Blob} blob
 * @return {string}
 */
goog.fs.url.createObjectUrl = function(blob) {
  return goog.fs.url.getUrlObject_().createObjectURL(blob);
};
/**
 * @param {string} url
 */
goog.fs.url.revokeObjectUrl = function(url) {
  goog.fs.url.getUrlObject_().revokeObjectURL(url);
};
/** @typedef {{createObjectURL:function(!Blob):string,revokeObjectURL:function(string):void}} */ goog.fs.url.UrlObject_;
/**
 * @private
 * @return {goog.fs.url.UrlObject_}
 */
goog.fs.url.getUrlObject_ = function() {
  /** @const */ var urlObject = goog.fs.url.findUrlObject_();
  if (urlObject != null) {
    return urlObject;
  } else {
    throw new Error("This browser doesn't seem to support blob URLs");
  }
};
/**
 * @private
 * @return {?goog.fs.url.UrlObject_}
 */
goog.fs.url.findUrlObject_ = function() {
  if (goog.global.URL !== undefined && goog.global.URL.createObjectURL !== undefined) {
    return (/** @type {goog.fs.url.UrlObject_} */ (goog.global.URL));
  } else {
    if (goog.global.webkitURL !== undefined && goog.global.webkitURL.createObjectURL !== undefined) {
      return (/** @type {goog.fs.url.UrlObject_} */ (goog.global.webkitURL));
    } else {
      if (goog.global.createObjectURL !== undefined) {
        return (/** @type {goog.fs.url.UrlObject_} */ (goog.global));
      } else {
        return null;
      }
    }
  }
};
/**
 * @return {boolean}
 */
goog.fs.url.browserSupportsObjectUrls = function() {
  return goog.fs.url.findUrlObject_() != null;
};

module.exports = goog.fs.url;

//# sourceMappingURL=goog.fs.url.js.map
