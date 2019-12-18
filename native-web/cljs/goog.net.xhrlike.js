var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;

var example=$CLJS.example || ($CLJS.example = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});

$CLJS.SHADOW_ENV.setLoaded("goog.net.xhrlike.js");

goog.provide("goog.net.XhrLike");
/** @interface */ goog.net.XhrLike = function() {
};
/** @typedef {(!goog.net.XhrLike|!XMLHttpRequest)} */ goog.net.XhrLike.OrNative;
/** @type {(function()|null|undefined)} */ goog.net.XhrLike.prototype.onreadystatechange;
/** @type {(?ArrayBuffer|?Blob|?Document|?Object|?string)} */ goog.net.XhrLike.prototype.response;
/** @type {string} */ goog.net.XhrLike.prototype.responseText;
/** @type {string} */ goog.net.XhrLike.prototype.responseType;
/** @type {Document} */ goog.net.XhrLike.prototype.responseXML;
/** @type {number} */ goog.net.XhrLike.prototype.readyState;
/** @type {number} */ goog.net.XhrLike.prototype.status;
/** @type {string} */ goog.net.XhrLike.prototype.statusText;
/**
 * @param {string} method
 * @param {string} url
 * @param {?boolean=} opt_async
 * @param {?string=} opt_user
 * @param {?string=} opt_password
 */
goog.net.XhrLike.prototype.open = function(method, url, opt_async, opt_user, opt_password) {
};
/**
 * @param {(ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string)=} opt_data
 */
goog.net.XhrLike.prototype.send = function(opt_data) {
};
goog.net.XhrLike.prototype.abort = function() {
};
/**
 * @param {string} header
 * @param {string} value
 */
goog.net.XhrLike.prototype.setRequestHeader = function(header, value) {
};
/**
 * @param {string} header
 * @return {string}
 */
goog.net.XhrLike.prototype.getResponseHeader = function(header) {
};
/**
 * @return {string}
 */
goog.net.XhrLike.prototype.getAllResponseHeaders = function() {
};

module.exports = goog.net.XhrLike;

//# sourceMappingURL=goog.net.xhrlike.js.map
