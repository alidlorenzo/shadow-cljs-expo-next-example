var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./goog.dom.dom.js");
require("./goog.dom.forms.js");
require("./goog.dom.classlist.js");
require("./goog.style.style.js");
require("./goog.style.transition.js");
require("./goog.string.string.js");
require("./clojure.string.js");
require("./cljs.core.async.js");
var example=$CLJS.example || ($CLJS.example = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});

$CLJS.SHADOW_ENV.setLoaded("shadow.dom.js");

goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__47869 = coll;
var G__47870 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47869,G__47870) : shadow.dom.lazy_native_coll_seq.call(null,G__47869,G__47870));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__47873 = arguments.length;
switch (G__47873) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__47875 = arguments.length;
switch (G__47875) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__47877 = arguments.length;
switch (G__47877) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__47879 = arguments.length;
switch (G__47879) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__47881 = arguments.length;
switch (G__47881) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__47882 = document;
var G__47883 = shadow.dom.dom_node(el);
return goog.dom.contains(G__47882,G__47883);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__47884 = shadow.dom.dom_node(parent);
var G__47885 = shadow.dom.dom_node(el);
return goog.dom.contains(G__47884,G__47885);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__47886 = shadow.dom.dom_node(el);
var G__47887 = cls;
return goog.dom.classlist.add(G__47886,G__47887);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__47888 = shadow.dom.dom_node(el);
var G__47889 = cls;
return goog.dom.classlist.remove(G__47888,G__47889);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47891 = arguments.length;
switch (G__47891) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__47892 = shadow.dom.dom_node(el);
var G__47893 = cls;
return goog.dom.classlist.toggle(G__47892,G__47893);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e47894){if((e47894 instanceof Object)){
var e = e47894;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47894;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__47895 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47896 = null;
var count__47897 = (0);
var i__47898 = (0);
while(true){
if((i__47898 < count__47897)){
var el = chunk__47896.cljs$core$IIndexed$_nth$arity$2(null,i__47898);
var handler_48692__$1 = ((function (seq__47895,chunk__47896,count__47897,i__47898,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47895,chunk__47896,count__47897,i__47898,el))
;
var G__47905_48694 = el;
var G__47906_48695 = cljs.core.name(ev);
var G__47907_48696 = handler_48692__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47905_48694,G__47906_48695,G__47907_48696) : shadow.dom.dom_listen.call(null,G__47905_48694,G__47906_48695,G__47907_48696));


var G__48697 = seq__47895;
var G__48698 = chunk__47896;
var G__48699 = count__47897;
var G__48700 = (i__47898 + (1));
seq__47895 = G__48697;
chunk__47896 = G__48698;
count__47897 = G__48699;
i__47898 = G__48700;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47895);
if(temp__5735__auto__){
var seq__47895__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47895__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47895__$1);
var G__48701 = cljs.core.chunk_rest(seq__47895__$1);
var G__48702 = c__4609__auto__;
var G__48703 = cljs.core.count(c__4609__auto__);
var G__48704 = (0);
seq__47895 = G__48701;
chunk__47896 = G__48702;
count__47897 = G__48703;
i__47898 = G__48704;
continue;
} else {
var el = cljs.core.first(seq__47895__$1);
var handler_48707__$1 = ((function (seq__47895,chunk__47896,count__47897,i__47898,el,seq__47895__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47895,chunk__47896,count__47897,i__47898,el,seq__47895__$1,temp__5735__auto__))
;
var G__47908_48709 = el;
var G__47909_48710 = cljs.core.name(ev);
var G__47910_48711 = handler_48707__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47908_48709,G__47909_48710,G__47910_48711) : shadow.dom.dom_listen.call(null,G__47908_48709,G__47909_48710,G__47910_48711));


var G__48712 = cljs.core.next(seq__47895__$1);
var G__48713 = null;
var G__48714 = (0);
var G__48715 = (0);
seq__47895 = G__48712;
chunk__47896 = G__48713;
count__47897 = G__48714;
i__47898 = G__48715;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__47912 = arguments.length;
switch (G__47912) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__47916 = shadow.dom.dom_node(el);
var G__47917 = cljs.core.name(ev);
var G__47918 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47916,G__47917,G__47918) : shadow.dom.dom_listen.call(null,G__47916,G__47917,G__47918));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__47920 = shadow.dom.dom_node(el);
var G__47921 = cljs.core.name(ev);
var G__47922 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__47920,G__47921,G__47922) : shadow.dom.dom_listen_remove.call(null,G__47920,G__47921,G__47922));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47923 = cljs.core.seq(events);
var chunk__47924 = null;
var count__47925 = (0);
var i__47926 = (0);
while(true){
if((i__47926 < count__47925)){
var vec__47934 = chunk__47924.cljs$core$IIndexed$_nth$arity$2(null,i__47926);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47934,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47934,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48739 = seq__47923;
var G__48740 = chunk__47924;
var G__48741 = count__47925;
var G__48742 = (i__47926 + (1));
seq__47923 = G__48739;
chunk__47924 = G__48740;
count__47925 = G__48741;
i__47926 = G__48742;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47923);
if(temp__5735__auto__){
var seq__47923__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47923__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47923__$1);
var G__48743 = cljs.core.chunk_rest(seq__47923__$1);
var G__48744 = c__4609__auto__;
var G__48745 = cljs.core.count(c__4609__auto__);
var G__48746 = (0);
seq__47923 = G__48743;
chunk__47924 = G__48744;
count__47925 = G__48745;
i__47926 = G__48746;
continue;
} else {
var vec__47938 = cljs.core.first(seq__47923__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47938,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47938,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48747 = cljs.core.next(seq__47923__$1);
var G__48748 = null;
var G__48749 = (0);
var G__48750 = (0);
seq__47923 = G__48747;
chunk__47924 = G__48748;
count__47925 = G__48749;
i__47926 = G__48750;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__47942 = cljs.core.seq(styles);
var chunk__47943 = null;
var count__47944 = (0);
var i__47945 = (0);
while(true){
if((i__47945 < count__47944)){
var vec__47962 = chunk__47943.cljs$core$IIndexed$_nth$arity$2(null,i__47945);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47962,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47962,(1),null);
var G__47965_48756 = dom;
var G__47966_48757 = cljs.core.name(k);
var G__47967_48758 = (((v == null))?"":v);
goog.style.setStyle(G__47965_48756,G__47966_48757,G__47967_48758);


var G__48759 = seq__47942;
var G__48760 = chunk__47943;
var G__48761 = count__47944;
var G__48762 = (i__47945 + (1));
seq__47942 = G__48759;
chunk__47943 = G__48760;
count__47944 = G__48761;
i__47945 = G__48762;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47942);
if(temp__5735__auto__){
var seq__47942__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47942__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47942__$1);
var G__48763 = cljs.core.chunk_rest(seq__47942__$1);
var G__48764 = c__4609__auto__;
var G__48765 = cljs.core.count(c__4609__auto__);
var G__48766 = (0);
seq__47942 = G__48763;
chunk__47943 = G__48764;
count__47944 = G__48765;
i__47945 = G__48766;
continue;
} else {
var vec__47968 = cljs.core.first(seq__47942__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47968,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47968,(1),null);
var G__47971_48767 = dom;
var G__47972_48768 = cljs.core.name(k);
var G__47973_48769 = (((v == null))?"":v);
goog.style.setStyle(G__47971_48767,G__47972_48768,G__47973_48769);


var G__48772 = cljs.core.next(seq__47942__$1);
var G__48773 = null;
var G__48774 = (0);
var G__48775 = (0);
seq__47942 = G__48772;
chunk__47943 = G__48773;
count__47944 = G__48774;
i__47945 = G__48775;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__47975_48778 = key;
var G__47975_48779__$1 = (((G__47975_48778 instanceof cljs.core.Keyword))?G__47975_48778.fqn:null);
switch (G__47975_48779__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_48783 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_48783,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_48783,"aria-");
}
})())){
el.setAttribute(ks_48783,value);
} else {
(el[ks_48783] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__47983 = shadow.dom.dom_node(el);
var G__47984 = cls;
return goog.dom.classlist.contains(G__47983,G__47984);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47985){
var map__47986 = p__47985;
var map__47986__$1 = (((((!((map__47986 == null))))?(((((map__47986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47986):map__47986);
var props = map__47986__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47986__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47989 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47989,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47989,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47989,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47992 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47992,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47992;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47994 = arguments.length;
switch (G__47994) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47995){
var vec__47996 = p__47995;
var seq__47997 = cljs.core.seq(vec__47996);
var first__47998 = cljs.core.first(seq__47997);
var seq__47997__$1 = cljs.core.next(seq__47997);
var nn = first__47998;
var first__47998__$1 = cljs.core.first(seq__47997__$1);
var seq__47997__$2 = cljs.core.next(seq__47997__$1);
var np = first__47998__$1;
var nc = seq__47997__$2;
var node = vec__47996;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47999 = nn;
var G__48000 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47999,G__48000) : create_fn.call(null,G__47999,G__48000));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48001 = nn;
var G__48002 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48001,G__48002) : create_fn.call(null,G__48001,G__48002));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__48003 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48003,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48003,(1),null);
var seq__48006_48806 = cljs.core.seq(node_children);
var chunk__48007_48807 = null;
var count__48008_48808 = (0);
var i__48009_48809 = (0);
while(true){
if((i__48009_48809 < count__48008_48808)){
var child_struct_48810 = chunk__48007_48807.cljs$core$IIndexed$_nth$arity$2(null,i__48009_48809);
var children_48811 = shadow.dom.dom_node(child_struct_48810);
if(cljs.core.seq_QMARK_(children_48811)){
var seq__48025_48814 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48811));
var chunk__48027_48815 = null;
var count__48028_48816 = (0);
var i__48029_48817 = (0);
while(true){
if((i__48029_48817 < count__48028_48816)){
var child_48819 = chunk__48027_48815.cljs$core$IIndexed$_nth$arity$2(null,i__48029_48817);
if(cljs.core.truth_(child_48819)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48819);


var G__48821 = seq__48025_48814;
var G__48822 = chunk__48027_48815;
var G__48823 = count__48028_48816;
var G__48824 = (i__48029_48817 + (1));
seq__48025_48814 = G__48821;
chunk__48027_48815 = G__48822;
count__48028_48816 = G__48823;
i__48029_48817 = G__48824;
continue;
} else {
var G__48825 = seq__48025_48814;
var G__48826 = chunk__48027_48815;
var G__48827 = count__48028_48816;
var G__48828 = (i__48029_48817 + (1));
seq__48025_48814 = G__48825;
chunk__48027_48815 = G__48826;
count__48028_48816 = G__48827;
i__48029_48817 = G__48828;
continue;
}
} else {
var temp__5735__auto___48829 = cljs.core.seq(seq__48025_48814);
if(temp__5735__auto___48829){
var seq__48025_48832__$1 = temp__5735__auto___48829;
if(cljs.core.chunked_seq_QMARK_(seq__48025_48832__$1)){
var c__4609__auto___48833 = cljs.core.chunk_first(seq__48025_48832__$1);
var G__48834 = cljs.core.chunk_rest(seq__48025_48832__$1);
var G__48835 = c__4609__auto___48833;
var G__48836 = cljs.core.count(c__4609__auto___48833);
var G__48837 = (0);
seq__48025_48814 = G__48834;
chunk__48027_48815 = G__48835;
count__48028_48816 = G__48836;
i__48029_48817 = G__48837;
continue;
} else {
var child_48838 = cljs.core.first(seq__48025_48832__$1);
if(cljs.core.truth_(child_48838)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48838);


var G__48840 = cljs.core.next(seq__48025_48832__$1);
var G__48841 = null;
var G__48842 = (0);
var G__48843 = (0);
seq__48025_48814 = G__48840;
chunk__48027_48815 = G__48841;
count__48028_48816 = G__48842;
i__48029_48817 = G__48843;
continue;
} else {
var G__48844 = cljs.core.next(seq__48025_48832__$1);
var G__48845 = null;
var G__48846 = (0);
var G__48847 = (0);
seq__48025_48814 = G__48844;
chunk__48027_48815 = G__48845;
count__48028_48816 = G__48846;
i__48029_48817 = G__48847;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48811);
}


var G__48849 = seq__48006_48806;
var G__48850 = chunk__48007_48807;
var G__48851 = count__48008_48808;
var G__48852 = (i__48009_48809 + (1));
seq__48006_48806 = G__48849;
chunk__48007_48807 = G__48850;
count__48008_48808 = G__48851;
i__48009_48809 = G__48852;
continue;
} else {
var temp__5735__auto___48854 = cljs.core.seq(seq__48006_48806);
if(temp__5735__auto___48854){
var seq__48006_48855__$1 = temp__5735__auto___48854;
if(cljs.core.chunked_seq_QMARK_(seq__48006_48855__$1)){
var c__4609__auto___48856 = cljs.core.chunk_first(seq__48006_48855__$1);
var G__48857 = cljs.core.chunk_rest(seq__48006_48855__$1);
var G__48858 = c__4609__auto___48856;
var G__48859 = cljs.core.count(c__4609__auto___48856);
var G__48860 = (0);
seq__48006_48806 = G__48857;
chunk__48007_48807 = G__48858;
count__48008_48808 = G__48859;
i__48009_48809 = G__48860;
continue;
} else {
var child_struct_48861 = cljs.core.first(seq__48006_48855__$1);
var children_48862 = shadow.dom.dom_node(child_struct_48861);
if(cljs.core.seq_QMARK_(children_48862)){
var seq__48031_48863 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48862));
var chunk__48033_48864 = null;
var count__48034_48865 = (0);
var i__48035_48866 = (0);
while(true){
if((i__48035_48866 < count__48034_48865)){
var child_48868 = chunk__48033_48864.cljs$core$IIndexed$_nth$arity$2(null,i__48035_48866);
if(cljs.core.truth_(child_48868)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48868);


var G__48869 = seq__48031_48863;
var G__48870 = chunk__48033_48864;
var G__48871 = count__48034_48865;
var G__48872 = (i__48035_48866 + (1));
seq__48031_48863 = G__48869;
chunk__48033_48864 = G__48870;
count__48034_48865 = G__48871;
i__48035_48866 = G__48872;
continue;
} else {
var G__48873 = seq__48031_48863;
var G__48874 = chunk__48033_48864;
var G__48875 = count__48034_48865;
var G__48876 = (i__48035_48866 + (1));
seq__48031_48863 = G__48873;
chunk__48033_48864 = G__48874;
count__48034_48865 = G__48875;
i__48035_48866 = G__48876;
continue;
}
} else {
var temp__5735__auto___48877__$1 = cljs.core.seq(seq__48031_48863);
if(temp__5735__auto___48877__$1){
var seq__48031_48878__$1 = temp__5735__auto___48877__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48031_48878__$1)){
var c__4609__auto___48879 = cljs.core.chunk_first(seq__48031_48878__$1);
var G__48880 = cljs.core.chunk_rest(seq__48031_48878__$1);
var G__48881 = c__4609__auto___48879;
var G__48882 = cljs.core.count(c__4609__auto___48879);
var G__48883 = (0);
seq__48031_48863 = G__48880;
chunk__48033_48864 = G__48881;
count__48034_48865 = G__48882;
i__48035_48866 = G__48883;
continue;
} else {
var child_48884 = cljs.core.first(seq__48031_48878__$1);
if(cljs.core.truth_(child_48884)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48884);


var G__48885 = cljs.core.next(seq__48031_48878__$1);
var G__48886 = null;
var G__48887 = (0);
var G__48888 = (0);
seq__48031_48863 = G__48885;
chunk__48033_48864 = G__48886;
count__48034_48865 = G__48887;
i__48035_48866 = G__48888;
continue;
} else {
var G__48889 = cljs.core.next(seq__48031_48878__$1);
var G__48890 = null;
var G__48891 = (0);
var G__48892 = (0);
seq__48031_48863 = G__48889;
chunk__48033_48864 = G__48890;
count__48034_48865 = G__48891;
i__48035_48866 = G__48892;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48862);
}


var G__48893 = cljs.core.next(seq__48006_48855__$1);
var G__48894 = null;
var G__48895 = (0);
var G__48896 = (0);
seq__48006_48806 = G__48893;
chunk__48007_48807 = G__48894;
count__48008_48808 = G__48895;
i__48009_48809 = G__48896;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__48052 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__48052);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__48054 = cljs.core.seq(node);
var chunk__48055 = null;
var count__48056 = (0);
var i__48057 = (0);
while(true){
if((i__48057 < count__48056)){
var n = chunk__48055.cljs$core$IIndexed$_nth$arity$2(null,i__48057);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48897 = seq__48054;
var G__48898 = chunk__48055;
var G__48899 = count__48056;
var G__48900 = (i__48057 + (1));
seq__48054 = G__48897;
chunk__48055 = G__48898;
count__48056 = G__48899;
i__48057 = G__48900;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48054);
if(temp__5735__auto__){
var seq__48054__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48054__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48054__$1);
var G__48901 = cljs.core.chunk_rest(seq__48054__$1);
var G__48902 = c__4609__auto__;
var G__48903 = cljs.core.count(c__4609__auto__);
var G__48904 = (0);
seq__48054 = G__48901;
chunk__48055 = G__48902;
count__48056 = G__48903;
i__48057 = G__48904;
continue;
} else {
var n = cljs.core.first(seq__48054__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48905 = cljs.core.next(seq__48054__$1);
var G__48906 = null;
var G__48907 = (0);
var G__48908 = (0);
seq__48054 = G__48905;
chunk__48055 = G__48906;
count__48056 = G__48907;
i__48057 = G__48908;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__48061 = shadow.dom.dom_node(new$);
var G__48062 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__48061,G__48062);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__48074 = arguments.length;
switch (G__48074) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__48076 = arguments.length;
switch (G__48076) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__48087 = arguments.length;
switch (G__48087) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48926 = arguments.length;
var i__4790__auto___48927 = (0);
while(true){
if((i__4790__auto___48927 < len__4789__auto___48926)){
args__4795__auto__.push((arguments[i__4790__auto___48927]));

var G__48928 = (i__4790__auto___48927 + (1));
i__4790__auto___48927 = G__48928;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__48109_48929 = cljs.core.seq(nodes);
var chunk__48110_48930 = null;
var count__48111_48931 = (0);
var i__48112_48932 = (0);
while(true){
if((i__48112_48932 < count__48111_48931)){
var node_48933 = chunk__48110_48930.cljs$core$IIndexed$_nth$arity$2(null,i__48112_48932);
fragment.appendChild(shadow.dom._to_dom(node_48933));


var G__48935 = seq__48109_48929;
var G__48936 = chunk__48110_48930;
var G__48937 = count__48111_48931;
var G__48938 = (i__48112_48932 + (1));
seq__48109_48929 = G__48935;
chunk__48110_48930 = G__48936;
count__48111_48931 = G__48937;
i__48112_48932 = G__48938;
continue;
} else {
var temp__5735__auto___48940 = cljs.core.seq(seq__48109_48929);
if(temp__5735__auto___48940){
var seq__48109_48941__$1 = temp__5735__auto___48940;
if(cljs.core.chunked_seq_QMARK_(seq__48109_48941__$1)){
var c__4609__auto___48942 = cljs.core.chunk_first(seq__48109_48941__$1);
var G__48943 = cljs.core.chunk_rest(seq__48109_48941__$1);
var G__48944 = c__4609__auto___48942;
var G__48945 = cljs.core.count(c__4609__auto___48942);
var G__48946 = (0);
seq__48109_48929 = G__48943;
chunk__48110_48930 = G__48944;
count__48111_48931 = G__48945;
i__48112_48932 = G__48946;
continue;
} else {
var node_48947 = cljs.core.first(seq__48109_48941__$1);
fragment.appendChild(shadow.dom._to_dom(node_48947));


var G__48948 = cljs.core.next(seq__48109_48941__$1);
var G__48949 = null;
var G__48950 = (0);
var G__48951 = (0);
seq__48109_48929 = G__48948;
chunk__48110_48930 = G__48949;
count__48111_48931 = G__48950;
i__48112_48932 = G__48951;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq48106){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48106));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__48115_48954 = cljs.core.seq(scripts);
var chunk__48116_48955 = null;
var count__48117_48956 = (0);
var i__48118_48957 = (0);
while(true){
if((i__48118_48957 < count__48117_48956)){
var vec__48125_48958 = chunk__48116_48955.cljs$core$IIndexed$_nth$arity$2(null,i__48118_48957);
var script_tag_48959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48125_48958,(0),null);
var script_body_48960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48125_48958,(1),null);
eval(script_body_48960);


var G__48961 = seq__48115_48954;
var G__48962 = chunk__48116_48955;
var G__48963 = count__48117_48956;
var G__48964 = (i__48118_48957 + (1));
seq__48115_48954 = G__48961;
chunk__48116_48955 = G__48962;
count__48117_48956 = G__48963;
i__48118_48957 = G__48964;
continue;
} else {
var temp__5735__auto___48965 = cljs.core.seq(seq__48115_48954);
if(temp__5735__auto___48965){
var seq__48115_48966__$1 = temp__5735__auto___48965;
if(cljs.core.chunked_seq_QMARK_(seq__48115_48966__$1)){
var c__4609__auto___48967 = cljs.core.chunk_first(seq__48115_48966__$1);
var G__48968 = cljs.core.chunk_rest(seq__48115_48966__$1);
var G__48969 = c__4609__auto___48967;
var G__48970 = cljs.core.count(c__4609__auto___48967);
var G__48971 = (0);
seq__48115_48954 = G__48968;
chunk__48116_48955 = G__48969;
count__48117_48956 = G__48970;
i__48118_48957 = G__48971;
continue;
} else {
var vec__48128_48972 = cljs.core.first(seq__48115_48966__$1);
var script_tag_48973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48128_48972,(0),null);
var script_body_48974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48128_48972,(1),null);
eval(script_body_48974);


var G__48975 = cljs.core.next(seq__48115_48966__$1);
var G__48976 = null;
var G__48977 = (0);
var G__48978 = (0);
seq__48115_48954 = G__48975;
chunk__48116_48955 = G__48976;
count__48117_48956 = G__48977;
i__48118_48957 = G__48978;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__48131){
var vec__48132 = p__48131;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48132,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48132,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__48168 = shadow.dom.dom_node(el);
var G__48169 = cls;
return goog.dom.getAncestorByClass(G__48168,G__48169);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__48177 = arguments.length;
switch (G__48177) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__48178 = shadow.dom.dom_node(el);
var G__48179 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__48178,G__48179);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__48180 = shadow.dom.dom_node(el);
var G__48181 = cljs.core.name(tag);
var G__48182 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__48180,G__48181,G__48182);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__48185 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__48185);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__48186 = shadow.dom.dom_node(dom);
var G__48187 = value;
return goog.dom.forms.setValue(G__48186,G__48187);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__48191 = cljs.core.seq(style_keys);
var chunk__48192 = null;
var count__48193 = (0);
var i__48194 = (0);
while(true){
if((i__48194 < count__48193)){
var it = chunk__48192.cljs$core$IIndexed$_nth$arity$2(null,i__48194);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48986 = seq__48191;
var G__48987 = chunk__48192;
var G__48988 = count__48193;
var G__48989 = (i__48194 + (1));
seq__48191 = G__48986;
chunk__48192 = G__48987;
count__48193 = G__48988;
i__48194 = G__48989;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48191);
if(temp__5735__auto__){
var seq__48191__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48191__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48191__$1);
var G__48990 = cljs.core.chunk_rest(seq__48191__$1);
var G__48991 = c__4609__auto__;
var G__48992 = cljs.core.count(c__4609__auto__);
var G__48993 = (0);
seq__48191 = G__48990;
chunk__48192 = G__48991;
count__48193 = G__48992;
i__48194 = G__48993;
continue;
} else {
var it = cljs.core.first(seq__48191__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48995 = cljs.core.next(seq__48191__$1);
var G__48996 = null;
var G__48997 = (0);
var G__48998 = (0);
seq__48191 = G__48995;
chunk__48192 = G__48996;
count__48193 = G__48997;
i__48194 = G__48998;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k48196,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__48203 = k48196;
var G__48203__$1 = (((G__48203 instanceof cljs.core.Keyword))?G__48203.fqn:null);
switch (G__48203__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48196,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__48205){
var vec__48207 = p__48205;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48207,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48207,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48195){
var self__ = this;
var G__48195__$1 = this;
return (new cljs.core.RecordIter((0),G__48195__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__48223 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__48223(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48197,other48198){
var self__ = this;
var this48197__$1 = this;
return (((!((other48198 == null)))) && ((this48197__$1.constructor === other48198.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48197__$1.x,other48198.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48197__$1.y,other48198.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48197__$1.__extmap,other48198.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__48195){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__48224 = cljs.core.keyword_identical_QMARK_;
var expr__48225 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__48228 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__48229 = expr__48225;
return (pred__48224.cljs$core$IFn$_invoke$arity$2 ? pred__48224.cljs$core$IFn$_invoke$arity$2(G__48228,G__48229) : pred__48224.call(null,G__48228,G__48229));
})())){
return (new shadow.dom.Coordinate(G__48195,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48230 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__48231 = expr__48225;
return (pred__48224.cljs$core$IFn$_invoke$arity$2 ? pred__48224.cljs$core$IFn$_invoke$arity$2(G__48230,G__48231) : pred__48224.call(null,G__48230,G__48231));
})())){
return (new shadow.dom.Coordinate(self__.x,G__48195,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__48195),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__48195){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__48195,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__48199){
var extmap__4478__auto__ = (function (){var G__48235 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48199,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__48199)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48235);
} else {
return G__48235;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__48199),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__48199),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__48236 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__48236);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__48238 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__48238);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__48243 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__48243);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k48246,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__48275 = k48246;
var G__48275__$1 = (((G__48275 instanceof cljs.core.Keyword))?G__48275.fqn:null);
switch (G__48275__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48246,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__48276){
var vec__48278 = p__48276;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48278,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48278,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48245){
var self__ = this;
var G__48245__$1 = this;
return (new cljs.core.RecordIter((0),G__48245__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__48290 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__48290(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48247,other48248){
var self__ = this;
var this48247__$1 = this;
return (((!((other48248 == null)))) && ((this48247__$1.constructor === other48248.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48247__$1.w,other48248.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48247__$1.h,other48248.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48247__$1.__extmap,other48248.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__48245){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__48296 = cljs.core.keyword_identical_QMARK_;
var expr__48297 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__48299 = new cljs.core.Keyword(null,"w","w",354169001);
var G__48300 = expr__48297;
return (pred__48296.cljs$core$IFn$_invoke$arity$2 ? pred__48296.cljs$core$IFn$_invoke$arity$2(G__48299,G__48300) : pred__48296.call(null,G__48299,G__48300));
})())){
return (new shadow.dom.Size(G__48245,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48301 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__48302 = expr__48297;
return (pred__48296.cljs$core$IFn$_invoke$arity$2 ? pred__48296.cljs$core$IFn$_invoke$arity$2(G__48301,G__48302) : pred__48296.call(null,G__48301,G__48302));
})())){
return (new shadow.dom.Size(self__.w,G__48245,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__48245),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__48245){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__48245,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__48249){
var extmap__4478__auto__ = (function (){var G__48318 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48249,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__48249)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48318);
} else {
return G__48318;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__48249),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__48249),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__48319 = shadow.dom.dom_node(el);
return goog.style.getSize(G__48319);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__49053 = (i + (1));
var G__49054 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__49053;
ret = G__49054;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48338){
var vec__48339 = p__48338;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48339,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48339,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__48344 = arguments.length;
switch (G__48344) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__48368_49064 = new_node;
var G__48369_49065 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__48368_49064,G__48369_49065);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__48370_49066 = new_node;
var G__48371_49067 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__48370_49066,G__48371_49067);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__49068 = ps;
var G__49069 = (i + (1));
el__$1 = G__49068;
i = G__49069;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__48372 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__48372);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__48380 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__48380);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__48381 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__48381);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__48382 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48382,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48382,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48382,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__48385_49074 = cljs.core.seq(props);
var chunk__48386_49075 = null;
var count__48387_49076 = (0);
var i__48388_49077 = (0);
while(true){
if((i__48388_49077 < count__48387_49076)){
var vec__48401_49078 = chunk__48386_49075.cljs$core$IIndexed$_nth$arity$2(null,i__48388_49077);
var k_49079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48401_49078,(0),null);
var v_49080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48401_49078,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_49079);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49079),v_49080);


var G__49082 = seq__48385_49074;
var G__49083 = chunk__48386_49075;
var G__49084 = count__48387_49076;
var G__49085 = (i__48388_49077 + (1));
seq__48385_49074 = G__49082;
chunk__48386_49075 = G__49083;
count__48387_49076 = G__49084;
i__48388_49077 = G__49085;
continue;
} else {
var temp__5735__auto___49105 = cljs.core.seq(seq__48385_49074);
if(temp__5735__auto___49105){
var seq__48385_49106__$1 = temp__5735__auto___49105;
if(cljs.core.chunked_seq_QMARK_(seq__48385_49106__$1)){
var c__4609__auto___49107 = cljs.core.chunk_first(seq__48385_49106__$1);
var G__49108 = cljs.core.chunk_rest(seq__48385_49106__$1);
var G__49109 = c__4609__auto___49107;
var G__49110 = cljs.core.count(c__4609__auto___49107);
var G__49111 = (0);
seq__48385_49074 = G__49108;
chunk__48386_49075 = G__49109;
count__48387_49076 = G__49110;
i__48388_49077 = G__49111;
continue;
} else {
var vec__48404_49113 = cljs.core.first(seq__48385_49106__$1);
var k_49114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48404_49113,(0),null);
var v_49115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48404_49113,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_49114);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49114),v_49115);


var G__49116 = cljs.core.next(seq__48385_49106__$1);
var G__49117 = null;
var G__49118 = (0);
var G__49119 = (0);
seq__48385_49074 = G__49116;
chunk__48386_49075 = G__49117;
count__48387_49076 = G__49118;
i__48388_49077 = G__49119;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__48410 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48410,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48410,(1),null);
var seq__48415_49132 = cljs.core.seq(node_children);
var chunk__48417_49133 = null;
var count__48418_49134 = (0);
var i__48419_49135 = (0);
while(true){
if((i__48419_49135 < count__48418_49134)){
var child_struct_49136 = chunk__48417_49133.cljs$core$IIndexed$_nth$arity$2(null,i__48419_49135);
if((!((child_struct_49136 == null)))){
if(typeof child_struct_49136 === 'string'){
var text_49138 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49138),child_struct_49136].join(''));
} else {
var children_49140 = shadow.dom.svg_node(child_struct_49136);
if(cljs.core.seq_QMARK_(children_49140)){
var seq__48490_49141 = cljs.core.seq(children_49140);
var chunk__48492_49142 = null;
var count__48493_49143 = (0);
var i__48494_49144 = (0);
while(true){
if((i__48494_49144 < count__48493_49143)){
var child_49145 = chunk__48492_49142.cljs$core$IIndexed$_nth$arity$2(null,i__48494_49144);
if(cljs.core.truth_(child_49145)){
node.appendChild(child_49145);


var G__49147 = seq__48490_49141;
var G__49148 = chunk__48492_49142;
var G__49149 = count__48493_49143;
var G__49150 = (i__48494_49144 + (1));
seq__48490_49141 = G__49147;
chunk__48492_49142 = G__49148;
count__48493_49143 = G__49149;
i__48494_49144 = G__49150;
continue;
} else {
var G__49152 = seq__48490_49141;
var G__49153 = chunk__48492_49142;
var G__49154 = count__48493_49143;
var G__49155 = (i__48494_49144 + (1));
seq__48490_49141 = G__49152;
chunk__48492_49142 = G__49153;
count__48493_49143 = G__49154;
i__48494_49144 = G__49155;
continue;
}
} else {
var temp__5735__auto___49156 = cljs.core.seq(seq__48490_49141);
if(temp__5735__auto___49156){
var seq__48490_49158__$1 = temp__5735__auto___49156;
if(cljs.core.chunked_seq_QMARK_(seq__48490_49158__$1)){
var c__4609__auto___49159 = cljs.core.chunk_first(seq__48490_49158__$1);
var G__49160 = cljs.core.chunk_rest(seq__48490_49158__$1);
var G__49161 = c__4609__auto___49159;
var G__49162 = cljs.core.count(c__4609__auto___49159);
var G__49163 = (0);
seq__48490_49141 = G__49160;
chunk__48492_49142 = G__49161;
count__48493_49143 = G__49162;
i__48494_49144 = G__49163;
continue;
} else {
var child_49164 = cljs.core.first(seq__48490_49158__$1);
if(cljs.core.truth_(child_49164)){
node.appendChild(child_49164);


var G__49165 = cljs.core.next(seq__48490_49158__$1);
var G__49166 = null;
var G__49167 = (0);
var G__49168 = (0);
seq__48490_49141 = G__49165;
chunk__48492_49142 = G__49166;
count__48493_49143 = G__49167;
i__48494_49144 = G__49168;
continue;
} else {
var G__49169 = cljs.core.next(seq__48490_49158__$1);
var G__49170 = null;
var G__49171 = (0);
var G__49172 = (0);
seq__48490_49141 = G__49169;
chunk__48492_49142 = G__49170;
count__48493_49143 = G__49171;
i__48494_49144 = G__49172;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49140);
}
}


var G__49173 = seq__48415_49132;
var G__49174 = chunk__48417_49133;
var G__49175 = count__48418_49134;
var G__49176 = (i__48419_49135 + (1));
seq__48415_49132 = G__49173;
chunk__48417_49133 = G__49174;
count__48418_49134 = G__49175;
i__48419_49135 = G__49176;
continue;
} else {
var G__49178 = seq__48415_49132;
var G__49179 = chunk__48417_49133;
var G__49180 = count__48418_49134;
var G__49181 = (i__48419_49135 + (1));
seq__48415_49132 = G__49178;
chunk__48417_49133 = G__49179;
count__48418_49134 = G__49180;
i__48419_49135 = G__49181;
continue;
}
} else {
var temp__5735__auto___49182 = cljs.core.seq(seq__48415_49132);
if(temp__5735__auto___49182){
var seq__48415_49183__$1 = temp__5735__auto___49182;
if(cljs.core.chunked_seq_QMARK_(seq__48415_49183__$1)){
var c__4609__auto___49184 = cljs.core.chunk_first(seq__48415_49183__$1);
var G__49185 = cljs.core.chunk_rest(seq__48415_49183__$1);
var G__49186 = c__4609__auto___49184;
var G__49187 = cljs.core.count(c__4609__auto___49184);
var G__49188 = (0);
seq__48415_49132 = G__49185;
chunk__48417_49133 = G__49186;
count__48418_49134 = G__49187;
i__48419_49135 = G__49188;
continue;
} else {
var child_struct_49189 = cljs.core.first(seq__48415_49183__$1);
if((!((child_struct_49189 == null)))){
if(typeof child_struct_49189 === 'string'){
var text_49190 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49190),child_struct_49189].join(''));
} else {
var children_49191 = shadow.dom.svg_node(child_struct_49189);
if(cljs.core.seq_QMARK_(children_49191)){
var seq__48496_49193 = cljs.core.seq(children_49191);
var chunk__48498_49194 = null;
var count__48499_49195 = (0);
var i__48500_49196 = (0);
while(true){
if((i__48500_49196 < count__48499_49195)){
var child_49199 = chunk__48498_49194.cljs$core$IIndexed$_nth$arity$2(null,i__48500_49196);
if(cljs.core.truth_(child_49199)){
node.appendChild(child_49199);


var G__49201 = seq__48496_49193;
var G__49202 = chunk__48498_49194;
var G__49203 = count__48499_49195;
var G__49204 = (i__48500_49196 + (1));
seq__48496_49193 = G__49201;
chunk__48498_49194 = G__49202;
count__48499_49195 = G__49203;
i__48500_49196 = G__49204;
continue;
} else {
var G__49206 = seq__48496_49193;
var G__49207 = chunk__48498_49194;
var G__49208 = count__48499_49195;
var G__49209 = (i__48500_49196 + (1));
seq__48496_49193 = G__49206;
chunk__48498_49194 = G__49207;
count__48499_49195 = G__49208;
i__48500_49196 = G__49209;
continue;
}
} else {
var temp__5735__auto___49213__$1 = cljs.core.seq(seq__48496_49193);
if(temp__5735__auto___49213__$1){
var seq__48496_49214__$1 = temp__5735__auto___49213__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48496_49214__$1)){
var c__4609__auto___49215 = cljs.core.chunk_first(seq__48496_49214__$1);
var G__49216 = cljs.core.chunk_rest(seq__48496_49214__$1);
var G__49217 = c__4609__auto___49215;
var G__49218 = cljs.core.count(c__4609__auto___49215);
var G__49219 = (0);
seq__48496_49193 = G__49216;
chunk__48498_49194 = G__49217;
count__48499_49195 = G__49218;
i__48500_49196 = G__49219;
continue;
} else {
var child_49220 = cljs.core.first(seq__48496_49214__$1);
if(cljs.core.truth_(child_49220)){
node.appendChild(child_49220);


var G__49221 = cljs.core.next(seq__48496_49214__$1);
var G__49222 = null;
var G__49223 = (0);
var G__49224 = (0);
seq__48496_49193 = G__49221;
chunk__48498_49194 = G__49222;
count__48499_49195 = G__49223;
i__48500_49196 = G__49224;
continue;
} else {
var G__49226 = cljs.core.next(seq__48496_49214__$1);
var G__49227 = null;
var G__49228 = (0);
var G__49229 = (0);
seq__48496_49193 = G__49226;
chunk__48498_49194 = G__49227;
count__48499_49195 = G__49228;
i__48500_49196 = G__49229;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49191);
}
}


var G__49231 = cljs.core.next(seq__48415_49183__$1);
var G__49232 = null;
var G__49233 = (0);
var G__49234 = (0);
seq__48415_49132 = G__49231;
chunk__48417_49133 = G__49232;
count__48418_49134 = G__49233;
i__48419_49135 = G__49234;
continue;
} else {
var G__49235 = cljs.core.next(seq__48415_49183__$1);
var G__49236 = null;
var G__49237 = (0);
var G__49238 = (0);
seq__48415_49132 = G__49235;
chunk__48417_49133 = G__49236;
count__48418_49134 = G__49237;
i__48419_49135 = G__49238;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__48505_49239 = shadow.dom._to_svg;
var G__48506_49240 = "string";
var G__48507_49241 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__48505_49239,G__48506_49240,G__48507_49241);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__48511_49242 = shadow.dom._to_svg;
var G__48512_49243 = "null";
var G__48513_49244 = (function (_){
return null;
});
goog.object.set(G__48511_49242,G__48512_49243,G__48513_49244);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___49246 = arguments.length;
var i__4790__auto___49250 = (0);
while(true){
if((i__4790__auto___49250 < len__4789__auto___49246)){
args__4795__auto__.push((arguments[i__4790__auto___49250]));

var G__49251 = (i__4790__auto___49250 + (1));
i__4790__auto___49250 = G__49251;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq48569){
var G__48570 = cljs.core.first(seq48569);
var seq48569__$1 = cljs.core.next(seq48569);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48570,seq48569__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__48579 = arguments.length;
switch (G__48579) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__48589_49256 = shadow.dom.dom_node(el);
var G__48590_49257 = cljs.core.name(event);
var G__48591_49258 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48589_49256,G__48590_49257,G__48591_49258) : shadow.dom.dom_listen.call(null,G__48589_49256,G__48590_49257,G__48591_49258));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__45916__auto___49262 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45917__auto__ = (function (){var switch__45620__auto__ = (function (state_48624){
var state_val_48625 = (state_48624[(1)]);
if((state_val_48625 === (1))){
var state_48624__$1 = state_48624;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48624__$1,(2),once_or_cleanup);
} else {
if((state_val_48625 === (2))){
var inst_48621 = (state_48624[(2)]);
var inst_48622 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48624__$1 = (function (){var statearr_48626 = state_48624;
(statearr_48626[(7)] = inst_48621);

return statearr_48626;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48624__$1,inst_48622);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__45621__auto__ = null;
var shadow$dom$state_machine__45621__auto____0 = (function (){
var statearr_48627 = [null,null,null,null,null,null,null,null];
(statearr_48627[(0)] = shadow$dom$state_machine__45621__auto__);

(statearr_48627[(1)] = (1));

return statearr_48627;
});
var shadow$dom$state_machine__45621__auto____1 = (function (state_48624){
while(true){
var ret_value__45622__auto__ = (function (){try{while(true){
var result__45623__auto__ = switch__45620__auto__(state_48624);
if(cljs.core.keyword_identical_QMARK_(result__45623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45623__auto__;
}
break;
}
}catch (e48628){if((e48628 instanceof Object)){
var ex__45624__auto__ = e48628;
var statearr_48629_49263 = state_48624;
(statearr_48629_49263[(5)] = ex__45624__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48628;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49264 = state_48624;
state_48624 = G__49264;
continue;
} else {
return ret_value__45622__auto__;
}
break;
}
});
shadow$dom$state_machine__45621__auto__ = function(state_48624){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__45621__auto____0.call(this);
case 1:
return shadow$dom$state_machine__45621__auto____1.call(this,state_48624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__45621__auto____0;
shadow$dom$state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__45621__auto____1;
return shadow$dom$state_machine__45621__auto__;
})()
})();
var state__45918__auto__ = (function (){var statearr_48630 = (f__45917__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45917__auto__.cljs$core$IFn$_invoke$arity$0() : f__45917__auto__.call(null));
(statearr_48630[(6)] = c__45916__auto___49262);

return statearr_48630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45918__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);

Object.defineProperty(module.exports, "contains_QMARK_", { enumerable: true, get: function() { return shadow.dom.contains_QMARK_; } });
Object.defineProperty(module.exports, "eval_scripts", { enumerable: true, get: function() { return shadow.dom.eval_scripts; } });
Object.defineProperty(module.exports, "redirect", { enumerable: true, get: function() { return shadow.dom.redirect; } });
Object.defineProperty(module.exports, "native_coll", { enumerable: true, get: function() { return shadow.dom.native_coll; } });
Object.defineProperty(module.exports, "NativeColl", { enumerable: true, get: function() { return shadow.dom.NativeColl; } });
Object.defineProperty(module.exports, "query", { enumerable: true, get: function() { return shadow.dom.query; } });
Object.defineProperty(module.exports, "make_svg_node", { enumerable: true, get: function() { return shadow.dom.make_svg_node; } });
Object.defineProperty(module.exports, "str__GT_fragment", { enumerable: true, get: function() { return shadow.dom.str__GT_fragment; } });
Object.defineProperty(module.exports, "_to_svg", { enumerable: true, get: function() { return shadow.dom._to_svg; } });
Object.defineProperty(module.exports, "child_nodes", { enumerable: true, get: function() { return shadow.dom.child_nodes; } });
Object.defineProperty(module.exports, "insert_before", { enumerable: true, get: function() { return shadow.dom.insert_before; } });
Object.defineProperty(module.exports, "merge_class_string", { enumerable: true, get: function() { return shadow.dom.merge_class_string; } });
Object.defineProperty(module.exports, "has_class_QMARK_", { enumerable: true, get: function() { return shadow.dom.has_class_QMARK_; } });
Object.defineProperty(module.exports, "map__GT_Size", { enumerable: true, get: function() { return shadow.dom.map__GT_Size; } });
Object.defineProperty(module.exports, "text", { enumerable: true, get: function() { return shadow.dom.text; } });
Object.defineProperty(module.exports, "data", { enumerable: true, get: function() { return shadow.dom.data; } });
Object.defineProperty(module.exports, "transition_supported_QMARK_", { enumerable: true, get: function() { return shadow.dom.transition_supported_QMARK_; } });
Object.defineProperty(module.exports, "attr", { enumerable: true, get: function() { return shadow.dom.attr; } });
Object.defineProperty(module.exports, "remove_styles", { enumerable: true, get: function() { return shadow.dom.remove_styles; } });
Object.defineProperty(module.exports, "remove_event_handler", { enumerable: true, get: function() { return shadow.dom.remove_event_handler; } });
Object.defineProperty(module.exports, "remove_class", { enumerable: true, get: function() { return shadow.dom.remove_class; } });
Object.defineProperty(module.exports, "select_option_values", { enumerable: true, get: function() { return shadow.dom.select_option_values; } });
Object.defineProperty(module.exports, "insert_after", { enumerable: true, get: function() { return shadow.dom.insert_after; } });
Object.defineProperty(module.exports, "svg_node", { enumerable: true, get: function() { return shadow.dom.svg_node; } });
Object.defineProperty(module.exports, "children", { enumerable: true, get: function() { return shadow.dom.children; } });
Object.defineProperty(module.exports, "first_child", { enumerable: true, get: function() { return shadow.dom.first_child; } });
Object.defineProperty(module.exports, "get_html", { enumerable: true, get: function() { return shadow.dom.get_html; } });
Object.defineProperty(module.exports, "remove", { enumerable: true, get: function() { return shadow.dom.remove; } });
Object.defineProperty(module.exports, "__GT_Coordinate", { enumerable: true, get: function() { return shadow.dom.__GT_Coordinate; } });
Object.defineProperty(module.exports, "dom_listen_remove", { enumerable: true, get: function() { return shadow.dom.dom_listen_remove; } });
Object.defineProperty(module.exports, "by_id", { enumerable: true, get: function() { return shadow.dom.by_id; } });
Object.defineProperty(module.exports, "checked_QMARK_", { enumerable: true, get: function() { return shadow.dom.checked_QMARK_; } });
Object.defineProperty(module.exports, "tag_name", { enumerable: true, get: function() { return shadow.dom.tag_name; } });
Object.defineProperty(module.exports, "get_size", { enumerable: true, get: function() { return shadow.dom.get_size; } });
Object.defineProperty(module.exports, "dom_listen", { enumerable: true, get: function() { return shadow.dom.dom_listen; } });
Object.defineProperty(module.exports, "get_viewport_size", { enumerable: true, get: function() { return shadow.dom.get_viewport_size; } });
Object.defineProperty(module.exports, "add_event_listeners", { enumerable: true, get: function() { return shadow.dom.add_event_listeners; } });
Object.defineProperty(module.exports, "set_attr", { enumerable: true, get: function() { return shadow.dom.set_attr; } });
Object.defineProperty(module.exports, "reset", { enumerable: true, get: function() { return shadow.dom.reset; } });
Object.defineProperty(module.exports, "IElement", { enumerable: true, get: function() { return shadow.dom.IElement; } });
Object.defineProperty(module.exports, "make_dom_node", { enumerable: true, get: function() { return shadow.dom.make_dom_node; } });
Object.defineProperty(module.exports, "SVGElement", { enumerable: true, get: function() { return shadow.dom.SVGElement; } });
Object.defineProperty(module.exports, "form_elements", { enumerable: true, get: function() { return shadow.dom.form_elements; } });
Object.defineProperty(module.exports, "Size", { enumerable: true, get: function() { return shadow.dom.Size; } });
Object.defineProperty(module.exports, "lazy_native_coll_seq", { enumerable: true, get: function() { return shadow.dom.lazy_native_coll_seq; } });
Object.defineProperty(module.exports, "get_parent", { enumerable: true, get: function() { return shadow.dom.get_parent; } });
Object.defineProperty(module.exports, "get_height", { enumerable: true, get: function() { return shadow.dom.get_height; } });
Object.defineProperty(module.exports, "event_chan", { enumerable: true, get: function() { return shadow.dom.event_chan; } });
Object.defineProperty(module.exports, "fragment", { enumerable: true, get: function() { return shadow.dom.fragment; } });
Object.defineProperty(module.exports, "check", { enumerable: true, get: function() { return shadow.dom.check; } });
Object.defineProperty(module.exports, "Coordinate", { enumerable: true, get: function() { return shadow.dom.Coordinate; } });
Object.defineProperty(module.exports, "parse_tag", { enumerable: true, get: function() { return shadow.dom.parse_tag; } });
Object.defineProperty(module.exports, "del_attr", { enumerable: true, get: function() { return shadow.dom.del_attr; } });
Object.defineProperty(module.exports, "reload_BANG_", { enumerable: true, get: function() { return shadow.dom.reload_BANG_; } });
Object.defineProperty(module.exports, "destructure_node", { enumerable: true, get: function() { return shadow.dom.destructure_node; } });
Object.defineProperty(module.exports, "remove_style", { enumerable: true, get: function() { return shadow.dom.remove_style; } });
Object.defineProperty(module.exports, "append", { enumerable: true, get: function() { return shadow.dom.append; } });
Object.defineProperty(module.exports, "px", { enumerable: true, get: function() { return shadow.dom.px; } });
Object.defineProperty(module.exports, "get_value", { enumerable: true, get: function() { return shadow.dom.get_value; } });
Object.defineProperty(module.exports, "ev_stop", { enumerable: true, get: function() { return shadow.dom.ev_stop; } });
Object.defineProperty(module.exports, "_to_dom", { enumerable: true, get: function() { return shadow.dom._to_dom; } });
Object.defineProperty(module.exports, "xmlns", { enumerable: true, get: function() { return shadow.dom.xmlns; } });
Object.defineProperty(module.exports, "matches", { enumerable: true, get: function() { return shadow.dom.matches; } });
Object.defineProperty(module.exports, "insert_first", { enumerable: true, get: function() { return shadow.dom.insert_first; } });
Object.defineProperty(module.exports, "map__GT_Coordinate", { enumerable: true, get: function() { return shadow.dom.map__GT_Coordinate; } });
Object.defineProperty(module.exports, "create_dom_node", { enumerable: true, get: function() { return shadow.dom.create_dom_node; } });
Object.defineProperty(module.exports, "__GT_NativeColl", { enumerable: true, get: function() { return shadow.dom.__GT_NativeColl; } });
Object.defineProperty(module.exports, "get_position", { enumerable: true, get: function() { return shadow.dom.get_position; } });
Object.defineProperty(module.exports, "dom_node", { enumerable: true, get: function() { return shadow.dom.dom_node; } });
Object.defineProperty(module.exports, "set_data", { enumerable: true, get: function() { return shadow.dom.set_data; } });
Object.defineProperty(module.exports, "get_client_position", { enumerable: true, get: function() { return shadow.dom.get_client_position; } });
Object.defineProperty(module.exports, "get_page_offset", { enumerable: true, get: function() { return shadow.dom.get_page_offset; } });
Object.defineProperty(module.exports, "query_one", { enumerable: true, get: function() { return shadow.dom.query_one; } });
Object.defineProperty(module.exports, "get_next_sibling", { enumerable: true, get: function() { return shadow.dom.get_next_sibling; } });
Object.defineProperty(module.exports, "set_style", { enumerable: true, get: function() { return shadow.dom.set_style; } });
Object.defineProperty(module.exports, "pct", { enumerable: true, get: function() { return shadow.dom.pct; } });
Object.defineProperty(module.exports, "get_previous_sibling", { enumerable: true, get: function() { return shadow.dom.get_previous_sibling; } });
Object.defineProperty(module.exports, "ancestor_by_tag", { enumerable: true, get: function() { return shadow.dom.ancestor_by_tag; } });
Object.defineProperty(module.exports, "build", { enumerable: true, get: function() { return shadow.dom.build; } });
Object.defineProperty(module.exports, "set_html", { enumerable: true, get: function() { return shadow.dom.set_html; } });
Object.defineProperty(module.exports, "build_url", { enumerable: true, get: function() { return shadow.dom.build_url; } });
Object.defineProperty(module.exports, "ancestor_by_class", { enumerable: true, get: function() { return shadow.dom.ancestor_by_class; } });
Object.defineProperty(module.exports, "__GT_Size", { enumerable: true, get: function() { return shadow.dom.__GT_Size; } });
Object.defineProperty(module.exports, "add_class", { enumerable: true, get: function() { return shadow.dom.add_class; } });
Object.defineProperty(module.exports, "node_name", { enumerable: true, get: function() { return shadow.dom.node_name; } });
Object.defineProperty(module.exports, "parents", { enumerable: true, get: function() { return shadow.dom.parents; } });
Object.defineProperty(module.exports, "on_query", { enumerable: true, get: function() { return shadow.dom.on_query; } });
Object.defineProperty(module.exports, "create_svg_node", { enumerable: true, get: function() { return shadow.dom.create_svg_node; } });
Object.defineProperty(module.exports, "set_attrs", { enumerable: true, get: function() { return shadow.dom.set_attrs; } });
Object.defineProperty(module.exports, "svg", { enumerable: true, get: function() { return shadow.dom.svg; } });
Object.defineProperty(module.exports, "index_of", { enumerable: true, get: function() { return shadow.dom.index_of; } });
Object.defineProperty(module.exports, "replace_node", { enumerable: true, get: function() { return shadow.dom.replace_node; } });
Object.defineProperty(module.exports, "size__GT_clj", { enumerable: true, get: function() { return shadow.dom.size__GT_clj; } });
Object.defineProperty(module.exports, "set_attr_STAR_", { enumerable: true, get: function() { return shadow.dom.set_attr_STAR_; } });
Object.defineProperty(module.exports, "on", { enumerable: true, get: function() { return shadow.dom.on; } });
Object.defineProperty(module.exports, "remove_style_STAR_", { enumerable: true, get: function() { return shadow.dom.remove_style_STAR_; } });
Object.defineProperty(module.exports, "toggle_class", { enumerable: true, get: function() { return shadow.dom.toggle_class; } });
Object.defineProperty(module.exports, "set_value", { enumerable: true, get: function() { return shadow.dom.set_value; } });
//# sourceMappingURL=shadow.dom.js.map
