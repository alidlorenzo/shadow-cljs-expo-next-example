var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./cljs.reader.js");
require("./clojure.string.js");
require("./goog.dom.dom.js");
require("./goog.useragent.product.js");
require("./goog.uri.uri.js");
require("./goog.net.xhrio.js");
require("./shadow.cljs.devtools.client.env.js");
require("./shadow.cljs.devtools.client.console.js");
require("./shadow.cljs.devtools.client.hud.js");
var example=$CLJS.example || ($CLJS.example = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});

$CLJS.SHADOW_ENV.setLoaded("shadow.cljs.devtools.client.browser.js");

goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___50257 = arguments.length;
var i__4790__auto___50258 = (0);
while(true){
if((i__4790__auto___50258 < len__4789__auto___50257)){
args__4795__auto__.push((arguments[i__4790__auto___50258]));

var G__50259 = (i__4790__auto___50258 + (1));
i__4790__auto___50258 = G__50259;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq50054){
var G__50055 = cljs.core.first(seq50054);
var seq50054__$1 = cljs.core.next(seq50054);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50055,seq50054__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__50069){
var map__50070 = p__50069;
var map__50070__$1 = (((((!((map__50070 == null))))?(((((map__50070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50070):map__50070);
var src = map__50070__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50070__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50070__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__50075 = cljs.core.seq(sources);
var chunk__50076 = null;
var count__50077 = (0);
var i__50078 = (0);
while(true){
if((i__50078 < count__50077)){
var map__50085 = chunk__50076.cljs$core$IIndexed$_nth$arity$2(null,i__50078);
var map__50085__$1 = (((((!((map__50085 == null))))?(((((map__50085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50085):map__50085);
var src = map__50085__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50085__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50085__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50085__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50085__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e50087){var e_50260 = e50087;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50260);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50260.message)].join('')));
}

var G__50261 = seq__50075;
var G__50262 = chunk__50076;
var G__50263 = count__50077;
var G__50264 = (i__50078 + (1));
seq__50075 = G__50261;
chunk__50076 = G__50262;
count__50077 = G__50263;
i__50078 = G__50264;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50075);
if(temp__5735__auto__){
var seq__50075__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50075__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__50075__$1);
var G__50265 = cljs.core.chunk_rest(seq__50075__$1);
var G__50266 = c__4609__auto__;
var G__50267 = cljs.core.count(c__4609__auto__);
var G__50268 = (0);
seq__50075 = G__50265;
chunk__50076 = G__50266;
count__50077 = G__50267;
i__50078 = G__50268;
continue;
} else {
var map__50088 = cljs.core.first(seq__50075__$1);
var map__50088__$1 = (((((!((map__50088 == null))))?(((((map__50088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50088):map__50088);
var src = map__50088__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50088__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50088__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50088__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50088__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e50090){var e_50269 = e50090;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50269);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50269.message)].join('')));
}

var G__50270 = cljs.core.next(seq__50075__$1);
var G__50271 = null;
var G__50272 = (0);
var G__50273 = (0);
seq__50075 = G__50270;
chunk__50076 = G__50271;
count__50077 = G__50272;
i__50078 = G__50273;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__50094 = cljs.core.seq(js_requires);
var chunk__50095 = null;
var count__50096 = (0);
var i__50097 = (0);
while(true){
if((i__50097 < count__50096)){
var js_ns = chunk__50095.cljs$core$IIndexed$_nth$arity$2(null,i__50097);
var require_str_50274 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50274);


var G__50275 = seq__50094;
var G__50276 = chunk__50095;
var G__50277 = count__50096;
var G__50278 = (i__50097 + (1));
seq__50094 = G__50275;
chunk__50095 = G__50276;
count__50096 = G__50277;
i__50097 = G__50278;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50094);
if(temp__5735__auto__){
var seq__50094__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50094__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__50094__$1);
var G__50279 = cljs.core.chunk_rest(seq__50094__$1);
var G__50280 = c__4609__auto__;
var G__50281 = cljs.core.count(c__4609__auto__);
var G__50282 = (0);
seq__50094 = G__50279;
chunk__50095 = G__50280;
count__50096 = G__50281;
i__50097 = G__50282;
continue;
} else {
var js_ns = cljs.core.first(seq__50094__$1);
var require_str_50283 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50283);


var G__50284 = cljs.core.next(seq__50094__$1);
var G__50285 = null;
var G__50286 = (0);
var G__50287 = (0);
seq__50094 = G__50284;
chunk__50095 = G__50285;
count__50096 = G__50286;
i__50097 = G__50287;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__50100 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__50100) : callback.call(null,G__50100));
} else {
var G__50101 = shadow.cljs.devtools.client.env.files_url();
var G__50102 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__50103 = "POST";
var G__50104 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__50105 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__50101,G__50102,G__50103,G__50104,G__50105);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__50109){
var map__50110 = p__50109;
var map__50110__$1 = (((((!((map__50110 == null))))?(((((map__50110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50110):map__50110);
var msg = map__50110__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50110__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50110__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__50113 = info;
var map__50113__$1 = (((((!((map__50113 == null))))?(((((map__50113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50113):map__50113);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50113__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50113__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50115(s__50116){
return (new cljs.core.LazySeq(null,(function (){
var s__50116__$1 = s__50116;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50116__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__50121 = cljs.core.first(xs__6292__auto__);
var map__50121__$1 = (((((!((map__50121 == null))))?(((((map__50121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50121):map__50121);
var src = map__50121__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50121__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50121__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__50116__$1,map__50121,map__50121__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50113,map__50113__$1,sources,compiled,map__50110,map__50110__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50115_$_iter__50117(s__50118){
return (new cljs.core.LazySeq(null,((function (s__50116__$1,map__50121,map__50121__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50113,map__50113__$1,sources,compiled,map__50110,map__50110__$1,msg,info,reload_info){
return (function (){
var s__50118__$1 = s__50118;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__50118__$1);
if(temp__5735__auto____$1){
var s__50118__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50118__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50118__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50120 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50119 = (0);
while(true){
if((i__50119 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50119);
cljs.core.chunk_append(b__50120,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__50306 = (i__50119 + (1));
i__50119 = G__50306;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50120),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50115_$_iter__50117(cljs.core.chunk_rest(s__50118__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50120),null);
}
} else {
var warning = cljs.core.first(s__50118__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50115_$_iter__50117(cljs.core.rest(s__50118__$2)));
}
} else {
return null;
}
break;
}
});})(s__50116__$1,map__50121,map__50121__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50113,map__50113__$1,sources,compiled,map__50110,map__50110__$1,msg,info,reload_info))
,null,null));
});})(s__50116__$1,map__50121,map__50121__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50113,map__50113__$1,sources,compiled,map__50110,map__50110__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50115(cljs.core.rest(s__50116__$1)));
} else {
var G__50309 = cljs.core.rest(s__50116__$1);
s__50116__$1 = G__50309;
continue;
}
} else {
var G__50310 = cljs.core.rest(s__50116__$1);
s__50116__$1 = G__50310;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__50123_50311 = cljs.core.seq(warnings);
var chunk__50124_50312 = null;
var count__50125_50313 = (0);
var i__50126_50314 = (0);
while(true){
if((i__50126_50314 < count__50125_50313)){
var map__50131_50315 = chunk__50124_50312.cljs$core$IIndexed$_nth$arity$2(null,i__50126_50314);
var map__50131_50316__$1 = (((((!((map__50131_50315 == null))))?(((((map__50131_50315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50131_50315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50131_50315):map__50131_50315);
var w_50317 = map__50131_50316__$1;
var msg_50318__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50131_50316__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50131_50316__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50131_50316__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50131_50316__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50321)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50319),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50320),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50318__$1)].join(''));


var G__50322 = seq__50123_50311;
var G__50323 = chunk__50124_50312;
var G__50324 = count__50125_50313;
var G__50325 = (i__50126_50314 + (1));
seq__50123_50311 = G__50322;
chunk__50124_50312 = G__50323;
count__50125_50313 = G__50324;
i__50126_50314 = G__50325;
continue;
} else {
var temp__5735__auto___50326 = cljs.core.seq(seq__50123_50311);
if(temp__5735__auto___50326){
var seq__50123_50327__$1 = temp__5735__auto___50326;
if(cljs.core.chunked_seq_QMARK_(seq__50123_50327__$1)){
var c__4609__auto___50328 = cljs.core.chunk_first(seq__50123_50327__$1);
var G__50329 = cljs.core.chunk_rest(seq__50123_50327__$1);
var G__50330 = c__4609__auto___50328;
var G__50331 = cljs.core.count(c__4609__auto___50328);
var G__50332 = (0);
seq__50123_50311 = G__50329;
chunk__50124_50312 = G__50330;
count__50125_50313 = G__50331;
i__50126_50314 = G__50332;
continue;
} else {
var map__50133_50333 = cljs.core.first(seq__50123_50327__$1);
var map__50133_50334__$1 = (((((!((map__50133_50333 == null))))?(((((map__50133_50333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50133_50333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50133_50333):map__50133_50333);
var w_50335 = map__50133_50334__$1;
var msg_50336__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50133_50334__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50133_50334__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50133_50334__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50339 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50133_50334__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50339)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50337),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50338),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50336__$1)].join(''));


var G__50340 = cljs.core.next(seq__50123_50327__$1);
var G__50341 = null;
var G__50342 = (0);
var G__50343 = (0);
seq__50123_50311 = G__50340;
chunk__50124_50312 = G__50341;
count__50125_50313 = G__50342;
i__50126_50314 = G__50343;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__50135){
var map__50136 = p__50135;
var map__50136__$1 = (((((!((map__50136 == null))))?(((((map__50136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50136):map__50136);
var src = map__50136__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50136__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50136__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__50138){
var map__50139 = p__50138;
var map__50139__$1 = (((((!((map__50139 == null))))?(((((map__50139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50139):map__50139);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50139__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__50141){
var map__50142 = p__50141;
var map__50142__$1 = (((((!((map__50142 == null))))?(((((map__50142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50142):map__50142);
var rc = map__50142__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50142__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__50108_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__50108_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__50144){
var map__50145 = p__50144;
var map__50145__$1 = (((((!((map__50145 == null))))?(((((map__50145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50145):map__50145);
var msg = map__50145__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50145__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__50147 = cljs.core.seq(updates);
var chunk__50149 = null;
var count__50150 = (0);
var i__50151 = (0);
while(true){
if((i__50151 < count__50150)){
var path = chunk__50149.cljs$core$IIndexed$_nth$arity$2(null,i__50151);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50178_50350 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50181_50351 = null;
var count__50182_50352 = (0);
var i__50183_50353 = (0);
while(true){
if((i__50183_50353 < count__50182_50352)){
var node_50354 = chunk__50181_50351.cljs$core$IIndexed$_nth$arity$2(null,i__50183_50353);
var path_match_50357 = shadow.cljs.devtools.client.browser.match_paths(node_50354.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50357)){
var new_link_50358 = (function (){var G__50188 = node_50354.cloneNode(true);
G__50188.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50357),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50188;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50357], 0));

goog.dom.insertSiblingAfter(new_link_50358,node_50354);

goog.dom.removeNode(node_50354);


var G__50364 = seq__50178_50350;
var G__50365 = chunk__50181_50351;
var G__50366 = count__50182_50352;
var G__50367 = (i__50183_50353 + (1));
seq__50178_50350 = G__50364;
chunk__50181_50351 = G__50365;
count__50182_50352 = G__50366;
i__50183_50353 = G__50367;
continue;
} else {
var G__50368 = seq__50178_50350;
var G__50369 = chunk__50181_50351;
var G__50370 = count__50182_50352;
var G__50371 = (i__50183_50353 + (1));
seq__50178_50350 = G__50368;
chunk__50181_50351 = G__50369;
count__50182_50352 = G__50370;
i__50183_50353 = G__50371;
continue;
}
} else {
var temp__5735__auto___50372 = cljs.core.seq(seq__50178_50350);
if(temp__5735__auto___50372){
var seq__50178_50373__$1 = temp__5735__auto___50372;
if(cljs.core.chunked_seq_QMARK_(seq__50178_50373__$1)){
var c__4609__auto___50374 = cljs.core.chunk_first(seq__50178_50373__$1);
var G__50375 = cljs.core.chunk_rest(seq__50178_50373__$1);
var G__50376 = c__4609__auto___50374;
var G__50377 = cljs.core.count(c__4609__auto___50374);
var G__50378 = (0);
seq__50178_50350 = G__50375;
chunk__50181_50351 = G__50376;
count__50182_50352 = G__50377;
i__50183_50353 = G__50378;
continue;
} else {
var node_50379 = cljs.core.first(seq__50178_50373__$1);
var path_match_50380 = shadow.cljs.devtools.client.browser.match_paths(node_50379.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50380)){
var new_link_50381 = (function (){var G__50198 = node_50379.cloneNode(true);
G__50198.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50380),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50198;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50380], 0));

goog.dom.insertSiblingAfter(new_link_50381,node_50379);

goog.dom.removeNode(node_50379);


var G__50382 = cljs.core.next(seq__50178_50373__$1);
var G__50383 = null;
var G__50384 = (0);
var G__50385 = (0);
seq__50178_50350 = G__50382;
chunk__50181_50351 = G__50383;
count__50182_50352 = G__50384;
i__50183_50353 = G__50385;
continue;
} else {
var G__50386 = cljs.core.next(seq__50178_50373__$1);
var G__50387 = null;
var G__50388 = (0);
var G__50389 = (0);
seq__50178_50350 = G__50386;
chunk__50181_50351 = G__50387;
count__50182_50352 = G__50388;
i__50183_50353 = G__50389;
continue;
}
}
} else {
}
}
break;
}


var G__50390 = seq__50147;
var G__50391 = chunk__50149;
var G__50392 = count__50150;
var G__50393 = (i__50151 + (1));
seq__50147 = G__50390;
chunk__50149 = G__50391;
count__50150 = G__50392;
i__50151 = G__50393;
continue;
} else {
var G__50394 = seq__50147;
var G__50395 = chunk__50149;
var G__50396 = count__50150;
var G__50397 = (i__50151 + (1));
seq__50147 = G__50394;
chunk__50149 = G__50395;
count__50150 = G__50396;
i__50151 = G__50397;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50147);
if(temp__5735__auto__){
var seq__50147__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50147__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__50147__$1);
var G__50398 = cljs.core.chunk_rest(seq__50147__$1);
var G__50399 = c__4609__auto__;
var G__50400 = cljs.core.count(c__4609__auto__);
var G__50401 = (0);
seq__50147 = G__50398;
chunk__50149 = G__50399;
count__50150 = G__50400;
i__50151 = G__50401;
continue;
} else {
var path = cljs.core.first(seq__50147__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50199_50402 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50202_50403 = null;
var count__50203_50404 = (0);
var i__50204_50405 = (0);
while(true){
if((i__50204_50405 < count__50203_50404)){
var node_50406 = chunk__50202_50403.cljs$core$IIndexed$_nth$arity$2(null,i__50204_50405);
var path_match_50407 = shadow.cljs.devtools.client.browser.match_paths(node_50406.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50407)){
var new_link_50408 = (function (){var G__50210 = node_50406.cloneNode(true);
G__50210.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50407),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50210;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50407], 0));

goog.dom.insertSiblingAfter(new_link_50408,node_50406);

goog.dom.removeNode(node_50406);


var G__50409 = seq__50199_50402;
var G__50410 = chunk__50202_50403;
var G__50411 = count__50203_50404;
var G__50412 = (i__50204_50405 + (1));
seq__50199_50402 = G__50409;
chunk__50202_50403 = G__50410;
count__50203_50404 = G__50411;
i__50204_50405 = G__50412;
continue;
} else {
var G__50413 = seq__50199_50402;
var G__50414 = chunk__50202_50403;
var G__50415 = count__50203_50404;
var G__50416 = (i__50204_50405 + (1));
seq__50199_50402 = G__50413;
chunk__50202_50403 = G__50414;
count__50203_50404 = G__50415;
i__50204_50405 = G__50416;
continue;
}
} else {
var temp__5735__auto___50417__$1 = cljs.core.seq(seq__50199_50402);
if(temp__5735__auto___50417__$1){
var seq__50199_50418__$1 = temp__5735__auto___50417__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50199_50418__$1)){
var c__4609__auto___50419 = cljs.core.chunk_first(seq__50199_50418__$1);
var G__50420 = cljs.core.chunk_rest(seq__50199_50418__$1);
var G__50421 = c__4609__auto___50419;
var G__50422 = cljs.core.count(c__4609__auto___50419);
var G__50423 = (0);
seq__50199_50402 = G__50420;
chunk__50202_50403 = G__50421;
count__50203_50404 = G__50422;
i__50204_50405 = G__50423;
continue;
} else {
var node_50424 = cljs.core.first(seq__50199_50418__$1);
var path_match_50425 = shadow.cljs.devtools.client.browser.match_paths(node_50424.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50425)){
var new_link_50426 = (function (){var G__50211 = node_50424.cloneNode(true);
G__50211.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50425),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50211;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50425], 0));

goog.dom.insertSiblingAfter(new_link_50426,node_50424);

goog.dom.removeNode(node_50424);


var G__50428 = cljs.core.next(seq__50199_50418__$1);
var G__50429 = null;
var G__50430 = (0);
var G__50431 = (0);
seq__50199_50402 = G__50428;
chunk__50202_50403 = G__50429;
count__50203_50404 = G__50430;
i__50204_50405 = G__50431;
continue;
} else {
var G__50432 = cljs.core.next(seq__50199_50418__$1);
var G__50433 = null;
var G__50434 = (0);
var G__50435 = (0);
seq__50199_50402 = G__50432;
chunk__50202_50403 = G__50433;
count__50203_50404 = G__50434;
i__50204_50405 = G__50435;
continue;
}
}
} else {
}
}
break;
}


var G__50436 = cljs.core.next(seq__50147__$1);
var G__50437 = null;
var G__50438 = (0);
var G__50439 = (0);
seq__50147 = G__50436;
chunk__50149 = G__50437;
count__50150 = G__50438;
i__50151 = G__50439;
continue;
} else {
var G__50440 = cljs.core.next(seq__50147__$1);
var G__50441 = null;
var G__50442 = (0);
var G__50443 = (0);
seq__50147 = G__50440;
chunk__50149 = G__50441;
count__50150 = G__50442;
i__50151 = G__50443;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__50217){
var map__50218 = p__50217;
var map__50218__$1 = (((((!((map__50218 == null))))?(((((map__50218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50218):map__50218);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50218__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50218__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__50220,done){
var map__50221 = p__50220;
var map__50221__$1 = (((((!((map__50221 == null))))?(((((map__50221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50221):map__50221);
var msg = map__50221__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50221__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50221__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50221__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50221__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__50223){
var map__50224 = p__50223;
var map__50224__$1 = (((((!((map__50224 == null))))?(((((map__50224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50224):map__50224);
var src = map__50224__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50224__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e50227){var e = e50227;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__50231,done){
var map__50232 = p__50231;
var map__50232__$1 = (((((!((map__50232 == null))))?(((((map__50232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50232):map__50232);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50232__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50232__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__50234){
var map__50235 = p__50234;
var map__50235__$1 = (((((!((map__50235 == null))))?(((((map__50235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50235):map__50235);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50235__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50235__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__50237,done){
var map__50238 = p__50237;
var map__50238__$1 = (((((!((map__50238 == null))))?(((((map__50238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50238):map__50238);
var msg = map__50238__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50238__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__50240_50449 = type;
var G__50240_50450__$1 = (((G__50240_50449 instanceof cljs.core.Keyword))?G__50240_50449.fqn:null);
switch (G__50240_50450__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__50242 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__50243 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__50244 = "POST";
var G__50245 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__50246 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__50242,G__50243,G__50244,G__50245,G__50246);
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e50248){var e = e50248;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___50453 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___50453)){
var s_50454 = temp__5735__auto___50453;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_50454.onclose = (function (e){
return null;
}));

s_50454.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}
Object.defineProperty(module.exports, "close_reason_ref", { enumerable: true, get: function() { return shadow.cljs.devtools.client.browser.close_reason_ref; } });
Object.defineProperty(module.exports, "loaded_QMARK_", { enumerable: true, get: function() { return shadow.cljs.devtools.client.browser.loaded_QMARK_; } });
Object.defineProperty(module.exports, "script_eval", { enumerable: true, get: function() { return shadow.cljs.devtools.client.browser.script_eval; } });
Object.defineProperty(module.exports, "compile", { enumerable: true, get: function() { return shadow.cljs.devtools.client.browser.compile; } });
Object.defineProperty(module.exports, "global_eval", { enumerable: true, get: function() { return shadow.cljs.devtools.client.browser.global_eval; } });
Object.defineProperty(module.exports, "scripts_to_load", { enumerable: true, get: function() { return shadow.cljs.devtools.client.browser.scripts_to_load; } });
Object.defineProperty(module.exports, "goog_base_rc", { enumerable: true, get: function() { return shadow.cljs.devtools.client.browser.goog_base_rc; } });
Object.defineProperty(module.exports, "handle_message", { enumerable: true, get: function() { return shadow.cljs.devtools.client.browser.handle_message; } });
Object.defineProperty(module.exports, "load_sources", { enumerable: true, get: function() { return shadow.cljs.devtools.client.browser.load_sources; } });
Object.defineProperty(module.exports, "get_asset_root", { enumerable: true, get: function() { return shadow.cljs.devtools.client.browser.get_asset_root; } });
Object.defineProperty(module.exports, "repl_init", { enumerable: true, get: function() { return shadow.cljs.devtools.client.browser.repl_init; } });
Object.defineProperty(module.exports, "goog_is_loaded_QMARK_", { enumerable: true, get: function() { return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_; } });
Object.defineProperty(module.exports, "do_js_load", { enumerable: true, get: function() { return shadow.cljs.devtools.client.browser.do_js_load; } });
Object.defineProperty(module.exports, "ws_connect", { enumerable: true, get: function() { return shadow.cljs.devtools.client.browser.ws_connect; } });
Object.defineProperty(module.exports, "get_ua_product", { enumerable: true, get: function() { return shadow.cljs.devtools.client.browser.get_ua_product; } });
Object.defineProperty(module.exports, "page_load_uri", { enumerable: true, get: function() { return shadow.cljs.devtools.client.browser.page_load_uri; } });
Object.defineProperty(module.exports, "do_js_requires", { enumerable: true, get: function() { return shadow.cljs.devtools.client.browser.do_js_requires; } });
Object.defineProperty(module.exports, "handle_asset_watch", { enumerable: true, get: function() { return shadow.cljs.devtools.client.browser.handle_asset_watch; } });
Object.defineProperty(module.exports, "repl_require", { enumerable: true, get: function() { return shadow.cljs.devtools.client.browser.repl_require; } });
Object.defineProperty(module.exports, "repl_error", { enumerable: true, get: function() { return shadow.cljs.devtools.client.browser.repl_error; } });
Object.defineProperty(module.exports, "repl_ns_ref", { enumerable: true, get: function() { return shadow.cljs.devtools.client.browser.repl_ns_ref; } });
Object.defineProperty(module.exports, "repl_set_ns", { enumerable: true, get: function() { return shadow.cljs.devtools.client.browser.repl_set_ns; } });
Object.defineProperty(module.exports, "match_paths", { enumerable: true, get: function() { return shadow.cljs.devtools.client.browser.match_paths; } });
Object.defineProperty(module.exports, "devtools_msg", { enumerable: true, get: function() { return shadow.cljs.devtools.client.browser.devtools_msg; } });
Object.defineProperty(module.exports, "repl_invoke", { enumerable: true, get: function() { return shadow.cljs.devtools.client.browser.repl_invoke; } });
Object.defineProperty(module.exports, "socket_ref", { enumerable: true, get: function() { return shadow.cljs.devtools.client.browser.socket_ref; } });
Object.defineProperty(module.exports, "src_is_loaded_QMARK_", { enumerable: true, get: function() { return shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_; } });
Object.defineProperty(module.exports, "do_js_reload", { enumerable: true, get: function() { return shadow.cljs.devtools.client.browser.do_js_reload; } });
Object.defineProperty(module.exports, "ws_msg", { enumerable: true, get: function() { return shadow.cljs.devtools.client.browser.ws_msg; } });
Object.defineProperty(module.exports, "handle_build_complete", { enumerable: true, get: function() { return shadow.cljs.devtools.client.browser.handle_build_complete; } });
//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
