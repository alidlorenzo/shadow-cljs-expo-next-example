var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;

var example=$CLJS.example || ($CLJS.example = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});

$CLJS.SHADOW_ENV.setLoaded("shadow.js.shim.module$react.js");

goog.provide("shadow.js.shim.module$react");
goog.provide("module$shadow_js_shim_module$react");
shadow.js.shim.module$react = require("react");
module$shadow_js_shim_module$react.default = shadow.js.shim.module$react;

//# sourceMappingURL=shadow.js.shim.module$react.js.map
