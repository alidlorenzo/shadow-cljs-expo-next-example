var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./cljs.spec.alpha.js");
require("./goog.string.string.js");
require("./goog.string.stringformat.js");
var example=$CLJS.example || ($CLJS.example = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});

$CLJS.SHADOW_ENV.setLoaded("cljs.repl.js");

goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__41514){
var map__41515 = p__41514;
var map__41515__$1 = (((((!((map__41515 == null))))?(((((map__41515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41515):map__41515);
var m = map__41515__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41515__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41515__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41517_41640 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41518_41641 = null;
var count__41519_41642 = (0);
var i__41520_41643 = (0);
while(true){
if((i__41520_41643 < count__41519_41642)){
var f_41644 = chunk__41518_41641.cljs$core$IIndexed$_nth$arity$2(null,i__41520_41643);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_41644], 0));


var G__41645 = seq__41517_41640;
var G__41646 = chunk__41518_41641;
var G__41647 = count__41519_41642;
var G__41648 = (i__41520_41643 + (1));
seq__41517_41640 = G__41645;
chunk__41518_41641 = G__41646;
count__41519_41642 = G__41647;
i__41520_41643 = G__41648;
continue;
} else {
var temp__5735__auto___41649 = cljs.core.seq(seq__41517_41640);
if(temp__5735__auto___41649){
var seq__41517_41650__$1 = temp__5735__auto___41649;
if(cljs.core.chunked_seq_QMARK_(seq__41517_41650__$1)){
var c__4609__auto___41651 = cljs.core.chunk_first(seq__41517_41650__$1);
var G__41652 = cljs.core.chunk_rest(seq__41517_41650__$1);
var G__41653 = c__4609__auto___41651;
var G__41654 = cljs.core.count(c__4609__auto___41651);
var G__41655 = (0);
seq__41517_41640 = G__41652;
chunk__41518_41641 = G__41653;
count__41519_41642 = G__41654;
i__41520_41643 = G__41655;
continue;
} else {
var f_41656 = cljs.core.first(seq__41517_41650__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_41656], 0));


var G__41661 = cljs.core.next(seq__41517_41650__$1);
var G__41662 = null;
var G__41663 = (0);
var G__41664 = (0);
seq__41517_41640 = G__41661;
chunk__41518_41641 = G__41662;
count__41519_41642 = G__41663;
i__41520_41643 = G__41664;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41665 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_41665], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_41665)))?cljs.core.second(arglists_41665):arglists_41665)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41524_41679 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41525_41680 = null;
var count__41526_41681 = (0);
var i__41527_41682 = (0);
while(true){
if((i__41527_41682 < count__41526_41681)){
var vec__41540_41686 = chunk__41525_41680.cljs$core$IIndexed$_nth$arity$2(null,i__41527_41682);
var name_41687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41540_41686,(0),null);
var map__41543_41688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41540_41686,(1),null);
var map__41543_41689__$1 = (((((!((map__41543_41688 == null))))?(((((map__41543_41688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41543_41688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41543_41688):map__41543_41688);
var doc_41690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41543_41689__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41543_41689__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_41687], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_41691], 0));

if(cljs.core.truth_(doc_41690)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_41690], 0));
} else {
}


var G__41700 = seq__41524_41679;
var G__41701 = chunk__41525_41680;
var G__41702 = count__41526_41681;
var G__41703 = (i__41527_41682 + (1));
seq__41524_41679 = G__41700;
chunk__41525_41680 = G__41701;
count__41526_41681 = G__41702;
i__41527_41682 = G__41703;
continue;
} else {
var temp__5735__auto___41704 = cljs.core.seq(seq__41524_41679);
if(temp__5735__auto___41704){
var seq__41524_41705__$1 = temp__5735__auto___41704;
if(cljs.core.chunked_seq_QMARK_(seq__41524_41705__$1)){
var c__4609__auto___41706 = cljs.core.chunk_first(seq__41524_41705__$1);
var G__41707 = cljs.core.chunk_rest(seq__41524_41705__$1);
var G__41708 = c__4609__auto___41706;
var G__41709 = cljs.core.count(c__4609__auto___41706);
var G__41710 = (0);
seq__41524_41679 = G__41707;
chunk__41525_41680 = G__41708;
count__41526_41681 = G__41709;
i__41527_41682 = G__41710;
continue;
} else {
var vec__41545_41711 = cljs.core.first(seq__41524_41705__$1);
var name_41712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41545_41711,(0),null);
var map__41548_41713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41545_41711,(1),null);
var map__41548_41714__$1 = (((((!((map__41548_41713 == null))))?(((((map__41548_41713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41548_41713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41548_41713):map__41548_41713);
var doc_41715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41548_41714__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41548_41714__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_41712], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_41716], 0));

if(cljs.core.truth_(doc_41715)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_41715], 0));
} else {
}


var G__41720 = cljs.core.next(seq__41524_41705__$1);
var G__41721 = null;
var G__41722 = (0);
var G__41723 = (0);
seq__41524_41679 = G__41720;
chunk__41525_41680 = G__41721;
count__41526_41681 = G__41722;
i__41527_41682 = G__41723;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__41550 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__41551 = null;
var count__41552 = (0);
var i__41553 = (0);
while(true){
if((i__41553 < count__41552)){
var role = chunk__41551.cljs$core$IIndexed$_nth$arity$2(null,i__41553);
var temp__5735__auto___41724__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___41724__$1)){
var spec_41725 = temp__5735__auto___41724__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_41725)], 0));
} else {
}


var G__41726 = seq__41550;
var G__41727 = chunk__41551;
var G__41728 = count__41552;
var G__41729 = (i__41553 + (1));
seq__41550 = G__41726;
chunk__41551 = G__41727;
count__41552 = G__41728;
i__41553 = G__41729;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__41550);
if(temp__5735__auto____$1){
var seq__41550__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__41550__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41550__$1);
var G__41730 = cljs.core.chunk_rest(seq__41550__$1);
var G__41731 = c__4609__auto__;
var G__41732 = cljs.core.count(c__4609__auto__);
var G__41733 = (0);
seq__41550 = G__41730;
chunk__41551 = G__41731;
count__41552 = G__41732;
i__41553 = G__41733;
continue;
} else {
var role = cljs.core.first(seq__41550__$1);
var temp__5735__auto___41734__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___41734__$2)){
var spec_41735 = temp__5735__auto___41734__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_41735)], 0));
} else {
}


var G__41736 = cljs.core.next(seq__41550__$1);
var G__41737 = null;
var G__41738 = (0);
var G__41739 = (0);
seq__41550 = G__41736;
chunk__41551 = G__41737;
count__41552 = G__41738;
i__41553 = G__41739;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__41740 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__41741 = cljs.core.ex_cause(t);
via = G__41740;
t = G__41741;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__41559 = datafied_throwable;
var map__41559__$1 = (((((!((map__41559 == null))))?(((((map__41559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41559):map__41559);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41559__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41559__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41559__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__41560 = cljs.core.last(via);
var map__41560__$1 = (((((!((map__41560 == null))))?(((((map__41560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41560):map__41560);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41560__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41560__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41560__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__41561 = data;
var map__41561__$1 = (((((!((map__41561 == null))))?(((((map__41561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41561):map__41561);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41561__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41561__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41561__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__41562 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__41562__$1 = (((((!((map__41562 == null))))?(((((map__41562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41562):map__41562);
var top_data = map__41562__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41562__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__41567 = phase;
var G__41567__$1 = (((G__41567 instanceof cljs.core.Keyword))?G__41567.fqn:null);
switch (G__41567__$1) {
case "read-source":
var map__41568 = data;
var map__41568__$1 = (((((!((map__41568 == null))))?(((((map__41568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41568):map__41568);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41568__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41568__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__41570 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__41570__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41570,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__41570);
var G__41570__$2 = (cljs.core.truth_((function (){var fexpr__41574 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41574.cljs$core$IFn$_invoke$arity$1 ? fexpr__41574.cljs$core$IFn$_invoke$arity$1(source) : fexpr__41574.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__41570__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__41570__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41570__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__41570__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__41575 = top_data;
var G__41575__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41575,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__41575);
var G__41575__$2 = (cljs.core.truth_((function (){var fexpr__41576 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41576.cljs$core$IFn$_invoke$arity$1 ? fexpr__41576.cljs$core$IFn$_invoke$arity$1(source) : fexpr__41576.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__41575__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__41575__$1);
var G__41575__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41575__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__41575__$2);
var G__41575__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41575__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__41575__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41575__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__41575__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__41577 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41577,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41577,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41577,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41577,(3),null);
var G__41580 = top_data;
var G__41580__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41580,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__41580);
var G__41580__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41580__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__41580__$1);
var G__41580__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41580__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__41580__$2);
var G__41580__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41580__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__41580__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41580__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__41580__$4;
}

break;
case "execution":
var vec__41581 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41581,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41581,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41581,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41581,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__41558_SHARP_){
var or__4185__auto__ = (p1__41558_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__41585 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41585.cljs$core$IFn$_invoke$arity$1 ? fexpr__41585.cljs$core$IFn$_invoke$arity$1(p1__41558_SHARP_) : fexpr__41585.call(null,p1__41558_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__41586 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__41586__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41586,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__41586);
var G__41586__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41586__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__41586__$1);
var G__41586__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41586__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__41586__$2);
var G__41586__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41586__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__41586__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41586__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__41586__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41567__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__41589){
var map__41590 = p__41589;
var map__41590__$1 = (((((!((map__41590 == null))))?(((((map__41590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41590):map__41590);
var triage_data = map__41590__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41590__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41590__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41590__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41590__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41590__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41590__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41590__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41590__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__41592 = phase;
var G__41592__$1 = (((G__41592 instanceof cljs.core.Keyword))?G__41592.fqn:null);
switch (G__41592__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__41597 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__41598 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41599 = loc;
var G__41600 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41601_41756 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41602_41757 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41603_41758 = true;
var _STAR_print_fn_STAR__temp_val__41604_41759 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41603_41758);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41604_41759);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41587_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__41587_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41602_41757);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41601_41756);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__41597,G__41598,G__41599,G__41600) : format.call(null,G__41597,G__41598,G__41599,G__41600));

break;
case "macroexpansion":
var G__41605 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__41606 = cause_type;
var G__41607 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41608 = loc;
var G__41609 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41605,G__41606,G__41607,G__41608,G__41609) : format.call(null,G__41605,G__41606,G__41607,G__41608,G__41609));

break;
case "compile-syntax-check":
var G__41610 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__41611 = cause_type;
var G__41612 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41613 = loc;
var G__41614 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41610,G__41611,G__41612,G__41613,G__41614) : format.call(null,G__41610,G__41611,G__41612,G__41613,G__41614));

break;
case "compilation":
var G__41615 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__41616 = cause_type;
var G__41617 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41618 = loc;
var G__41619 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41615,G__41616,G__41617,G__41618,G__41619) : format.call(null,G__41615,G__41616,G__41617,G__41618,G__41619));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__41620 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__41621 = symbol;
var G__41622 = loc;
var G__41623 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41625_41765 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41626_41766 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41627_41767 = true;
var _STAR_print_fn_STAR__temp_val__41628_41768 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41627_41767);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41628_41768);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41588_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__41588_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41626_41766);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41625_41765);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__41620,G__41621,G__41622,G__41623) : format.call(null,G__41620,G__41621,G__41622,G__41623));
} else {
var G__41629 = "Execution error%s at %s(%s).\n%s\n";
var G__41630 = cause_type;
var G__41631 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41632 = loc;
var G__41633 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41629,G__41630,G__41631,G__41632,G__41633) : format.call(null,G__41629,G__41630,G__41631,G__41632,G__41633));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41592__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});
Object.defineProperty(module.exports, "print_doc", { enumerable: true, get: function() { return cljs.repl.print_doc; } });
Object.defineProperty(module.exports, "Error__GT_map", { enumerable: true, get: function() { return cljs.repl.Error__GT_map; } });
Object.defineProperty(module.exports, "ex_triage", { enumerable: true, get: function() { return cljs.repl.ex_triage; } });
Object.defineProperty(module.exports, "ex_str", { enumerable: true, get: function() { return cljs.repl.ex_str; } });
Object.defineProperty(module.exports, "error__GT_str", { enumerable: true, get: function() { return cljs.repl.error__GT_str; } });
//# sourceMappingURL=cljs.repl.js.map
