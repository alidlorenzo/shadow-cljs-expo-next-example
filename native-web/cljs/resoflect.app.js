var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.js.shim.module$react.js");
require("./shadow.js.shim.module$react_native.js");
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var resoflect=$CLJS.resoflect || ($CLJS.resoflect = {});
var module$shadow_js_shim_module$react_native=$CLJS.module$shadow_js_shim_module$react_native || ($CLJS.module$shadow_js_shim_module$react_native = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});

$CLJS.SHADOW_ENV.setLoaded("resoflect.app.js");

goog.provide('resoflect.app');
goog.require('cljs.core');
goog.require('shadow.js.shim.module$react');
goog.require('shadow.js.shim.module$react_native');
resoflect.app.$ = (function resoflect$app$$(var_args){
var G__40170 = arguments.length;
switch (G__40170) {
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___40173 = arguments.length;
var i__4790__auto___40174 = (0);
while(true){
if((i__4790__auto___40174 < len__4789__auto___40173)){
args_arr__4810__auto__.push((arguments[i__4790__auto___40174]));

var G__40175 = (i__4790__auto___40174 + (1));
i__4790__auto___40174 = G__40175;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((1)),(0),null));
return resoflect.app.$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4811__auto__);

}
});

(resoflect.app.$.cljs$core$IFn$_invoke$arity$variadic = (function (el,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.js.shim.module$react.createElement,el,null,children);
}));

/** @this {Function} */
(resoflect.app.$.cljs$lang$applyTo = (function (seq40165){
var G__40166 = cljs.core.first(seq40165);
var seq40165__$1 = cljs.core.next(seq40165);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40166,seq40165__$1);
}));

(resoflect.app.$.cljs$core$IFn$_invoke$arity$variadic = (function (el,props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.js.shim.module$react.createElement,el,cljs.core.clj__GT_js(props),children);
}));

/** @this {Function} */
(resoflect.app.$.cljs$lang$applyTo = (function (seq40167){
var G__40168 = cljs.core.first(seq40167);
var seq40167__$1 = cljs.core.next(seq40167);
var G__40169 = cljs.core.first(seq40167__$1);
var seq40167__$2 = cljs.core.next(seq40167__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40168,G__40169,seq40167__$2);
}));

(resoflect.app.$.cljs$lang$maxFixedArity = (1));

resoflect.app.styles = (function (){var G__40171 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",-1736937707),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#fff",new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center",new cljs.core.Keyword(null,"justifyContent","justifyContent",885406515),"center"], null)], null));
return shadow.js.shim.module$react_native.StyleSheet.create(G__40171);
})();
resoflect.app.page_index = (function resoflect$app$page_index(){
return resoflect.app.$.cljs$core$IFn$_invoke$arity$variadic("div",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hello, world"], 0));
});
goog.exportSymbol('resoflect.app.page_index', resoflect.app.page_index);
Object.defineProperty(module.exports, "$", { enumerable: true, get: function() { return resoflect.app.$; } });
Object.defineProperty(module.exports, "styles", { enumerable: true, get: function() { return resoflect.app.styles; } });
Object.defineProperty(module.exports, "page_index", { enumerable: true, get: function() { return resoflect.app.page_index; } });
//# sourceMappingURL=resoflect.app.js.map
