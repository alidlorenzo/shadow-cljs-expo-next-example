var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.js.shim.module$react.js");
var example=$CLJS.example || ($CLJS.example = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});

$CLJS.SHADOW_ENV.setLoaded("example.app.js");

goog.provide('example.app');
goog.require('cljs.core');
goog.require('shadow.js.shim.module$react');
example.app.$ = (function example$app$$(var_args){
var G__40146 = arguments.length;
switch (G__40146) {
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___40148 = arguments.length;
var i__4790__auto___40149 = (0);
while(true){
if((i__4790__auto___40149 < len__4789__auto___40148)){
args_arr__4810__auto__.push((arguments[i__4790__auto___40149]));

var G__40150 = (i__4790__auto___40149 + (1));
i__4790__auto___40149 = G__40150;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((1)),(0),null));
return example.app.$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4811__auto__);

}
});

(example.app.$.cljs$core$IFn$_invoke$arity$variadic = (function (el,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.js.shim.module$react.createElement,el,null,children);
}));

/** @this {Function} */
(example.app.$.cljs$lang$applyTo = (function (seq40141){
var G__40142 = cljs.core.first(seq40141);
var seq40141__$1 = cljs.core.next(seq40141);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40142,seq40141__$1);
}));

(example.app.$.cljs$core$IFn$_invoke$arity$variadic = (function (el,props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.js.shim.module$react.createElement,el,cljs.core.clj__GT_js(props),children);
}));

/** @this {Function} */
(example.app.$.cljs$lang$applyTo = (function (seq40143){
var G__40144 = cljs.core.first(seq40143);
var seq40143__$1 = cljs.core.next(seq40143);
var G__40145 = cljs.core.first(seq40143__$1);
var seq40143__$2 = cljs.core.next(seq40143__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40144,G__40145,seq40143__$2);
}));

(example.app.$.cljs$lang$maxFixedArity = (1));

example.app.page_index = (function example$app$page_index(){
return example.app.$.cljs$core$IFn$_invoke$arity$variadic("div",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hello, world"], 0));
});
goog.exportSymbol('example.app.page_index', example.app.page_index);
Object.defineProperty(module.exports, "$", { enumerable: true, get: function() { return example.app.$; } });
Object.defineProperty(module.exports, "page_index", { enumerable: true, get: function() { return example.app.page_index; } });
//# sourceMappingURL=example.app.js.map
