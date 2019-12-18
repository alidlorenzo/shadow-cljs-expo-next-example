var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./goog.result.result_interface.js");
var example=$CLJS.example || ($CLJS.example = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});

$CLJS.SHADOW_ENV.setLoaded("goog.result.dependentresult.js");

goog.provide("goog.result.DependentResult");
goog.require("goog.result.Result");
/**
 * @interface
 * @extends {goog.result.Result}
 * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration
 */
goog.result.DependentResult = function() {
};
/**
 * @return {!Array<!goog.result.Result>}
 */
goog.result.DependentResult.prototype.getParentResults = function() {
};

module.exports = goog.result.DependentResult;

//# sourceMappingURL=goog.result.dependentresult.js.map
