var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
var example=$CLJS.example || ($CLJS.example = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});

$CLJS.SHADOW_ENV.setLoaded("shadow.cljs.devtools.client.console.js");

goog.provide('shadow.cljs.devtools.client.console');
goog.require('cljs.core');
goog.require('clojure.string');
shadow.cljs.devtools.client.console.push_all = (function shadow$cljs$devtools$client$console$push_all(arr,item){
if(cljs.core.vector_QMARK_(item)){
var seq__40287 = cljs.core.seq(item);
var chunk__40288 = null;
var count__40289 = (0);
var i__40290 = (0);
while(true){
if((i__40290 < count__40289)){
var it = chunk__40288.cljs$core$IIndexed$_nth$arity$2(null,i__40290);
arr.push(it);


var G__40335 = seq__40287;
var G__40336 = chunk__40288;
var G__40337 = count__40289;
var G__40338 = (i__40290 + (1));
seq__40287 = G__40335;
chunk__40288 = G__40336;
count__40289 = G__40337;
i__40290 = G__40338;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40287);
if(temp__5735__auto__){
var seq__40287__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40287__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__40287__$1);
var G__40339 = cljs.core.chunk_rest(seq__40287__$1);
var G__40340 = c__4609__auto__;
var G__40341 = cljs.core.count(c__4609__auto__);
var G__40342 = (0);
seq__40287 = G__40339;
chunk__40288 = G__40340;
count__40289 = G__40341;
i__40290 = G__40342;
continue;
} else {
var it = cljs.core.first(seq__40287__$1);
arr.push(it);


var G__40344 = cljs.core.next(seq__40287__$1);
var G__40345 = null;
var G__40346 = (0);
var G__40347 = (0);
seq__40287 = G__40344;
chunk__40288 = G__40345;
count__40289 = G__40346;
i__40290 = G__40347;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return arr.push(item);
}
});
shadow.cljs.devtools.client.console.object_ref = (function shadow$cljs$devtools$client$console$object_ref(obj){
if(cljs.core.truth_(obj)){
return ["object",({"object": obj})];
} else {
return null;
}
});
shadow.cljs.devtools.client.console.map__GT_style = (function shadow$cljs$devtools$client$console$map__GT_style(m){
return ({"style": clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40291){
var vec__40292 = p__40291;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40292,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40292,(1),null);
return [cljs.core.name(k),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),";"].join('');
}),m))});
});
shadow.cljs.devtools.client.console.clj__GT_jsonml = (function shadow$cljs$devtools$client$console$clj__GT_jsonml(struct){
if((struct == null)){
return null;
} else {
if(cljs.core.array_QMARK_(struct)){
return struct;
} else {
if(cljs.core.vector_QMARK_(struct)){
var vec__40296 = struct;
var seq__40297 = cljs.core.seq(vec__40296);
var first__40298 = cljs.core.first(seq__40297);
var seq__40297__$1 = cljs.core.next(seq__40297);
var tag = first__40298;
var first__40298__$1 = cljs.core.first(seq__40297__$1);
var seq__40297__$2 = cljs.core.next(seq__40297__$1);
var attrs = first__40298__$1;
var children = seq__40297__$2;
var js = [cljs.core.name(tag),shadow.cljs.devtools.client.console.map__GT_style(attrs)];
var seq__40299_40358 = cljs.core.seq(children);
var chunk__40300_40359 = null;
var count__40301_40360 = (0);
var i__40302_40361 = (0);
while(true){
if((i__40302_40361 < count__40301_40360)){
var child_40362 = chunk__40300_40359.cljs$core$IIndexed$_nth$arity$2(null,i__40302_40361);
shadow.cljs.devtools.client.console.push_all(js,(shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1(child_40362) : shadow.cljs.devtools.client.console.clj__GT_jsonml.call(null,child_40362)));


var G__40363 = seq__40299_40358;
var G__40364 = chunk__40300_40359;
var G__40365 = count__40301_40360;
var G__40366 = (i__40302_40361 + (1));
seq__40299_40358 = G__40363;
chunk__40300_40359 = G__40364;
count__40301_40360 = G__40365;
i__40302_40361 = G__40366;
continue;
} else {
var temp__5735__auto___40367 = cljs.core.seq(seq__40299_40358);
if(temp__5735__auto___40367){
var seq__40299_40368__$1 = temp__5735__auto___40367;
if(cljs.core.chunked_seq_QMARK_(seq__40299_40368__$1)){
var c__4609__auto___40371 = cljs.core.chunk_first(seq__40299_40368__$1);
var G__40372 = cljs.core.chunk_rest(seq__40299_40368__$1);
var G__40373 = c__4609__auto___40371;
var G__40374 = cljs.core.count(c__4609__auto___40371);
var G__40375 = (0);
seq__40299_40358 = G__40372;
chunk__40300_40359 = G__40373;
count__40301_40360 = G__40374;
i__40302_40361 = G__40375;
continue;
} else {
var child_40376 = cljs.core.first(seq__40299_40368__$1);
shadow.cljs.devtools.client.console.push_all(js,(shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1(child_40376) : shadow.cljs.devtools.client.console.clj__GT_jsonml.call(null,child_40376)));


var G__40377 = cljs.core.next(seq__40299_40368__$1);
var G__40378 = null;
var G__40379 = (0);
var G__40380 = (0);
seq__40299_40358 = G__40377;
chunk__40300_40359 = G__40378;
count__40301_40360 = G__40379;
i__40302_40361 = G__40380;
continue;
}
} else {
}
}
break;
}

return js;
} else {
if(typeof struct === 'string'){
return struct;
} else {
if(typeof struct === 'number'){
return struct;
} else {
if(cljs.core.seq_QMARK_(struct)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.console.clj__GT_jsonml),struct);
} else {
return shadow.cljs.devtools.client.console.object_ref(struct);

}
}
}
}
}
}
});

/**
* @constructor
*/
shadow.cljs.devtools.client.console.SeqFormatter = (function (){
});
(shadow.cljs.devtools.client.console.SeqFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.SeqFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if(((cljs.core.sequential_QMARK_(obj)) || (cljs.core.set_QMARK_(obj)))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY,[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0))," [count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(obj)),"]"].join('')], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.SeqFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return cljs.core.boolean$(cljs.core.seq(obj));
}));

(shadow.cljs.devtools.client.console.SeqFormatter.prototype.body = (function (s){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null),(function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$console$iter__40307(s__40308){
return (new cljs.core.LazySeq(null,(function (){
var s__40308__$1 = s__40308;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40308__$1);
if(temp__5735__auto__){
var s__40308__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40308__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__40308__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__40311 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__40310 = (0);
while(true){
if((i__40310 < size__4581__auto__)){
var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__40310);
cljs.core.chunk_append(b__40311,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null));

var G__40388 = (i__40310 + (1));
i__40310 = G__40388;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40311),shadow$cljs$devtools$client$console$iter__40307(cljs.core.chunk_rest(s__40308__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40311),null);
}
} else {
var value = cljs.core.first(s__40308__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null),shadow$cljs$devtools$client$console$iter__40307(cljs.core.rest(s__40308__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(s);
})()], null));
}));

(shadow.cljs.devtools.client.console.SeqFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/SeqFormatter");

(shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.cljs.devtools.client.console/SeqFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/SeqFormatter.
 */
shadow.cljs.devtools.client.console.__GT_SeqFormatter = (function shadow$cljs$devtools$client$console$__GT_SeqFormatter(){
return (new shadow.cljs.devtools.client.console.SeqFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.MapFormatter = (function (){
});
(shadow.cljs.devtools.client.console.MapFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.MapFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((((obj instanceof cljs.core.PersistentHashMap)) || ((obj instanceof cljs.core.PersistentArrayMap)) || (cljs.core.record_QMARK_(obj)))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY,[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0))," [count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(obj)),"]"].join('')], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.MapFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return cljs.core.boolean$(cljs.core.seq(obj));
}));

(shadow.cljs.devtools.client.console.MapFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"14px"], null),(function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$console$iter__40312(s__40313){
return (new cljs.core.LazySeq(null,(function (){
var s__40313__$1 = s__40313;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40313__$1);
if(temp__5735__auto__){
var s__40313__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40313__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__40313__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__40315 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__40314 = (0);
while(true){
if((i__40314 < size__4581__auto__)){
var key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__40314);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
cljs.core.chunk_append(b__40315,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(key)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null)], null));

var G__40402 = (i__40314 + (1));
i__40314 = G__40402;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40315),shadow$cljs$devtools$client$console$iter__40312(cljs.core.chunk_rest(s__40313__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40315),null);
}
} else {
var key = cljs.core.first(s__40313__$2);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(key)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null)], null),shadow$cljs$devtools$client$console$iter__40312(cljs.core.rest(s__40313__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__((function (){var k = cljs.core.keys(m);
try{return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(k);
}catch (e40316){var e = e40316;
return k;
}})());
})()], null));
}));

(shadow.cljs.devtools.client.console.MapFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/MapFormatter");

(shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.cljs.devtools.client.console/MapFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/MapFormatter.
 */
shadow.cljs.devtools.client.console.__GT_MapFormatter = (function shadow$cljs$devtools$client$console$__GT_MapFormatter(){
return (new shadow.cljs.devtools.client.console.MapFormatter());
});

shadow.cljs.devtools.client.console.keyword_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgb(136, 19, 145)"], null);

/**
* @constructor
*/
shadow.cljs.devtools.client.console.KeywordFormatter = (function (){
});
(shadow.cljs.devtools.client.console.KeywordFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((obj instanceof cljs.core.Keyword)){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0))], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return false;
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return null;
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/KeywordFormatter");

(shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.cljs.devtools.client.console/KeywordFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/KeywordFormatter.
 */
shadow.cljs.devtools.client.console.__GT_KeywordFormatter = (function shadow$cljs$devtools$client$console$__GT_KeywordFormatter(){
return (new shadow.cljs.devtools.client.console.KeywordFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.SymbolFormatter = (function (){
});
(shadow.cljs.devtools.client.console.SymbolFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((obj instanceof cljs.core.Symbol)){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0))], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return false;
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return null;
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/SymbolFormatter");

(shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.cljs.devtools.client.console/SymbolFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/SymbolFormatter.
 */
shadow.cljs.devtools.client.console.__GT_SymbolFormatter = (function shadow$cljs$devtools$client$console$__GT_SymbolFormatter(){
return (new shadow.cljs.devtools.client.console.SymbolFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.DerefFormatter = (function (){
});
(shadow.cljs.devtools.client.console.DerefFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.DerefFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((((obj instanceof cljs.core.Atom)) || ((obj instanceof cljs.core.Volatile)))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,["@DEREF ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0))].join('')], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.DerefFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.DerefFormatter.prototype.body = (function (v){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"14px"], null),shadow.cljs.devtools.client.console.object_ref(cljs.core.deref(v))], null));
}));

(shadow.cljs.devtools.client.console.DerefFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/DerefFormatter");

(shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.cljs.devtools.client.console/DerefFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/DerefFormatter.
 */
shadow.cljs.devtools.client.console.__GT_DerefFormatter = (function shadow$cljs$devtools$client$console$__GT_DerefFormatter(){
return (new shadow.cljs.devtools.client.console.DerefFormatter());
});

shadow.cljs.devtools.client.console.install_all_BANG_ = (function shadow$cljs$devtools$client$console$install_all_BANG_(){
var temp__5735__auto__ = goog.global.devtoolsFormatters;
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var G__40332 = f;
G__40332.push((new shadow.cljs.devtools.client.console.KeywordFormatter()));

G__40332.push((new shadow.cljs.devtools.client.console.MapFormatter()));

G__40332.push((new shadow.cljs.devtools.client.console.SeqFormatter()));

G__40332.push((new shadow.cljs.devtools.client.console.SymbolFormatter()));

G__40332.push((new shadow.cljs.devtools.client.console.DerefFormatter()));

return G__40332;
} else {
return null;
}
});
shadow.cljs.devtools.client.console.remove_all_BANG_ = (function shadow$cljs$devtools$client$console$remove_all_BANG_(){
var all = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__40334_SHARP_){
return goog.object.get(p1__40334_SHARP_,"shadow$formatter");
}),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = goog.global.devtoolsFormatters;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [];
}
})())));
return goog.object.set(goog.global,"devtoolsFormatters",all);
});
shadow.cljs.devtools.client.console.remove_all_BANG_();
shadow.cljs.devtools.client.console.install_all_BANG_();
Object.defineProperty(module.exports, "SymbolFormatter", { enumerable: true, get: function() { return shadow.cljs.devtools.client.console.SymbolFormatter; } });
Object.defineProperty(module.exports, "KeywordFormatter", { enumerable: true, get: function() { return shadow.cljs.devtools.client.console.KeywordFormatter; } });
Object.defineProperty(module.exports, "__GT_SeqFormatter", { enumerable: true, get: function() { return shadow.cljs.devtools.client.console.__GT_SeqFormatter; } });
Object.defineProperty(module.exports, "clj__GT_jsonml", { enumerable: true, get: function() { return shadow.cljs.devtools.client.console.clj__GT_jsonml; } });
Object.defineProperty(module.exports, "keyword_style", { enumerable: true, get: function() { return shadow.cljs.devtools.client.console.keyword_style; } });
Object.defineProperty(module.exports, "__GT_SymbolFormatter", { enumerable: true, get: function() { return shadow.cljs.devtools.client.console.__GT_SymbolFormatter; } });
Object.defineProperty(module.exports, "push_all", { enumerable: true, get: function() { return shadow.cljs.devtools.client.console.push_all; } });
Object.defineProperty(module.exports, "map__GT_style", { enumerable: true, get: function() { return shadow.cljs.devtools.client.console.map__GT_style; } });
Object.defineProperty(module.exports, "object_ref", { enumerable: true, get: function() { return shadow.cljs.devtools.client.console.object_ref; } });
Object.defineProperty(module.exports, "DerefFormatter", { enumerable: true, get: function() { return shadow.cljs.devtools.client.console.DerefFormatter; } });
Object.defineProperty(module.exports, "remove_all_BANG_", { enumerable: true, get: function() { return shadow.cljs.devtools.client.console.remove_all_BANG_; } });
Object.defineProperty(module.exports, "MapFormatter", { enumerable: true, get: function() { return shadow.cljs.devtools.client.console.MapFormatter; } });
Object.defineProperty(module.exports, "SeqFormatter", { enumerable: true, get: function() { return shadow.cljs.devtools.client.console.SeqFormatter; } });
Object.defineProperty(module.exports, "__GT_KeywordFormatter", { enumerable: true, get: function() { return shadow.cljs.devtools.client.console.__GT_KeywordFormatter; } });
Object.defineProperty(module.exports, "install_all_BANG_", { enumerable: true, get: function() { return shadow.cljs.devtools.client.console.install_all_BANG_; } });
Object.defineProperty(module.exports, "__GT_MapFormatter", { enumerable: true, get: function() { return shadow.cljs.devtools.client.console.__GT_MapFormatter; } });
Object.defineProperty(module.exports, "__GT_DerefFormatter", { enumerable: true, get: function() { return shadow.cljs.devtools.client.console.__GT_DerefFormatter; } });
//# sourceMappingURL=shadow.cljs.devtools.client.console.js.map
