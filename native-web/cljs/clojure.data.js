var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.set.js");
var example=$CLJS.example || ($CLJS.example = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});

$CLJS.SHADOW_ENV.setLoaded("clojure.data.js");

goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__48373){
var vec__48374 = p__48373;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48374,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48374,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__48377 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48377,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48377,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48377,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__48489 = arguments.length;
switch (G__48489) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
}));

(clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
}));

(clojure.data.diff_associative.cljs$lang$maxFixedArity = 3);

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4273__auto__ = cljs.core.count(a);
var y__4274__auto__ = cljs.core.count(b);
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4487__auto__ = (((x == null))?null:x);
var m__4488__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4488__auto__.call(null,x));
} else {
var m__4485__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4485__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4487__auto__ = (((a == null))?null:a);
var m__4488__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4488__auto__.call(null,a,b));
} else {
var m__4485__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4485__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__48502_48661 = clojure.data.equality_partition;
var G__48503_48662 = "null";
var G__48504_48663 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__48502_48661,G__48503_48662,G__48504_48663);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__48516_48666 = clojure.data.equality_partition;
var G__48517_48667 = "string";
var G__48518_48668 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__48516_48666,G__48517_48667,G__48518_48668);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__48519_48671 = clojure.data.equality_partition;
var G__48520_48672 = "number";
var G__48521_48673 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__48519_48671,G__48520_48672,G__48521_48673);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__48522_48675 = clojure.data.equality_partition;
var G__48523_48676 = "array";
var G__48524_48677 = (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});
goog.object.set(G__48522_48675,G__48523_48676,G__48524_48677);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__48525_48678 = clojure.data.equality_partition;
var G__48526_48679 = "function";
var G__48527_48680 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__48525_48678,G__48526_48679,G__48527_48680);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__48528_48684 = clojure.data.equality_partition;
var G__48529_48685 = "boolean";
var G__48530_48686 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__48528_48684,G__48529_48685,G__48530_48686);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__48532_48687 = clojure.data.equality_partition;
var G__48533_48688 = "_";
var G__48534_48689 = (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});
goog.object.set(G__48532_48687,G__48533_48688,G__48534_48689);
goog.object.set(clojure.data.Diff,"null",true);

var G__48581_48718 = clojure.data.diff_similar;
var G__48582_48719 = "null";
var G__48583_48720 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__48581_48718,G__48582_48719,G__48583_48720);

goog.object.set(clojure.data.Diff,"string",true);

var G__48585_48721 = clojure.data.diff_similar;
var G__48586_48722 = "string";
var G__48587_48723 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__48585_48721,G__48586_48722,G__48587_48723);

goog.object.set(clojure.data.Diff,"number",true);

var G__48592_48724 = clojure.data.diff_similar;
var G__48593_48725 = "number";
var G__48594_48726 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__48592_48724,G__48593_48725,G__48594_48726);

goog.object.set(clojure.data.Diff,"array",true);

var G__48595_48727 = clojure.data.diff_similar;
var G__48596_48728 = "array";
var G__48597_48729 = (function (a,b){
return clojure.data.diff_sequential(a,b);
});
goog.object.set(G__48595_48727,G__48596_48728,G__48597_48729);

goog.object.set(clojure.data.Diff,"function",true);

var G__48606_48730 = clojure.data.diff_similar;
var G__48607_48731 = "function";
var G__48608_48732 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__48606_48730,G__48607_48731,G__48608_48732);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__48610_48733 = clojure.data.diff_similar;
var G__48611_48734 = "boolean";
var G__48612_48735 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__48610_48733,G__48611_48734,G__48612_48735);

goog.object.set(clojure.data.Diff,"_",true);

var G__48613_48736 = clojure.data.diff_similar;
var G__48614_48737 = "_";
var G__48615_48738 = (function (a,b){
var fexpr__48618 = (function (){var G__48619 = clojure.data.equality_partition(a);
var G__48619__$1 = (((G__48619 instanceof cljs.core.Keyword))?G__48619.fqn:null);
switch (G__48619__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48619__$1)].join('')));

}
})();
return (fexpr__48618.cljs$core$IFn$_invoke$arity$2 ? fexpr__48618.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__48618.call(null,a,b));
});
goog.object.set(G__48613_48736,G__48614_48737,G__48615_48738);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
Object.defineProperty(module.exports, "vectorize", { enumerable: true, get: function() { return clojure.data.vectorize; } });
Object.defineProperty(module.exports, "diff", { enumerable: true, get: function() { return clojure.data.diff; } });
Object.defineProperty(module.exports, "atom_diff", { enumerable: true, get: function() { return clojure.data.atom_diff; } });
Object.defineProperty(module.exports, "diff_set", { enumerable: true, get: function() { return clojure.data.diff_set; } });
Object.defineProperty(module.exports, "equality_partition", { enumerable: true, get: function() { return clojure.data.equality_partition; } });
Object.defineProperty(module.exports, "EqualityPartition", { enumerable: true, get: function() { return clojure.data.EqualityPartition; } });
Object.defineProperty(module.exports, "diff_associative", { enumerable: true, get: function() { return clojure.data.diff_associative; } });
Object.defineProperty(module.exports, "diff_associative_key", { enumerable: true, get: function() { return clojure.data.diff_associative_key; } });
Object.defineProperty(module.exports, "diff_similar", { enumerable: true, get: function() { return clojure.data.diff_similar; } });
Object.defineProperty(module.exports, "Diff", { enumerable: true, get: function() { return clojure.data.Diff; } });
Object.defineProperty(module.exports, "diff_sequential", { enumerable: true, get: function() { return clojure.data.diff_sequential; } });
//# sourceMappingURL=clojure.data.js.map
