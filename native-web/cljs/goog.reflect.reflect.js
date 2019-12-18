var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;

var example=$CLJS.example || ($CLJS.example = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});

$CLJS.SHADOW_ENV.setLoaded("goog.reflect.reflect.js");

goog.provide("goog.reflect");
/**
 * @param {!Function} type
 * @param {Object} object
 * @return {Object}
 */
goog.reflect.object = function(type, object) {
  return object;
};
/**
 * @param {string} prop
 * @param {!Object} object
 * @return {string}
 */
goog.reflect.objectProperty = function(prop, object) {
  return prop;
};
/**
 * @param {T} x
 * @return {T}
 * @template T
 */
goog.reflect.sinkValue = function(x) {
  goog.reflect.sinkValue[" "](x);
  return x;
};
goog.reflect.sinkValue[" "] = goog.nullFunction;
/**
 * @param {Object} obj
 * @param {string} prop
 * @return {boolean}
 */
goog.reflect.canAccessProperty = function(obj, prop) {
  try {
    goog.reflect.sinkValue(obj[prop]);
    return true;
  } catch (e) {
  }
  return false;
};
/**
 * @param {!Object<K,V>} cacheObj
 * @param {?} key
 * @param {function(?):V} valueFn
 * @param {function(?):K=} opt_keyFn
 * @return {V}
 * @template K
 * @template V
 */
goog.reflect.cache = function(cacheObj, key, valueFn, opt_keyFn) {
  /** @const */ var storedKey = opt_keyFn ? opt_keyFn(key) : key;
  if (Object.prototype.hasOwnProperty.call(cacheObj, storedKey)) {
    return cacheObj[storedKey];
  }
  return cacheObj[storedKey] = valueFn(key);
};

module.exports = goog.reflect;

//# sourceMappingURL=goog.reflect.reflect.js.map
