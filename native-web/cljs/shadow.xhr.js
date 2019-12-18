var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./goog.result.resultutil.js");
require("./goog.result.simpleresult.js");
require("./goog.labs.net.xhr.js");
require("./cljs.reader.js");
require("./goog.uri.utils.js");
require("./goog.json.json.js");
require("./shadow.object.js");
require("./shadow.dom.js");
require("./cljs.core.async.js");
require("./clojure.string.js");
require("./shadow.util.js");
var example=$CLJS.example || ($CLJS.example = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});

$CLJS.SHADOW_ENV.setLoaded("shadow.xhr.js");

goog.provide('shadow.xhr');
goog.require('cljs.core');
goog.require('goog.result');
goog.require('goog.result.SimpleResult');
goog.require('goog.labs.net.xhr');
goog.require('cljs.reader');
goog.require('goog.uri.utils');
goog.require('goog.json');
goog.require('shadow.object');
goog.require('shadow.dom');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('shadow.util');
shadow.xhr.result_chain = (function shadow$xhr$result_chain(res,handler){
return goog.result.chain(res,handler);
});
shadow.xhr.result_combine = (function shadow$xhr$result_combine(var_args){
var args__4795__auto__ = [];
var len__4789__auto___49507 = arguments.length;
var i__4790__auto___49508 = (0);
while(true){
if((i__4790__auto___49508 < len__4789__auto___49507)){
args__4795__auto__.push((arguments[i__4790__auto___49508]));

var G__49509 = (i__4790__auto___49508 + (1));
i__4790__auto___49508 = G__49509;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.xhr.result_combine.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.xhr.result_combine.cljs$core$IFn$_invoke$arity$variadic = (function (results){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.result.combine,results);
}));

(shadow.xhr.result_combine.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.xhr.result_combine.cljs$lang$applyTo = (function (seq49419){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49419));
}));

shadow.xhr.result_wait_on_success = (function shadow$xhr$result_wait_on_success(res,callback){
return goog.result.waitOnSuccess(res,callback);
});
shadow.xhr.result_success_QMARK_ = (function shadow$xhr$result_success_QMARK_(res){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.result.Result.State.SUCCESS,res.getState());
});
shadow.xhr.result_value = (function shadow$xhr$result_value(res){
return res.getValue();
});
shadow.xhr.result_immediate = (function shadow$xhr$result_immediate(value){
return goog.result.successfulResult(value);
});
shadow.xhr.result_error = (function shadow$xhr$result_error(res,callback){
return goog.result.waitOnError(res,callback);
});
shadow.xhr.edn_transform = (function shadow$xhr$edn_transform(body){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(body);
});
shadow.xhr.json_transform = (function shadow$xhr$json_transform(body){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(body));
});
shadow.xhr.goog_keys = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"timeout","timeout",-318625318),"timeoutMs",new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),"withCredentials",new cljs.core.Keyword(null,"headers","headers",-835030129),"headers",new cljs.core.Keyword(null,"mime-type","mime-type",1058646439),"mimeType"], null);
shadow.xhr.make_request_options = (function shadow$xhr$make_request_options(options){
var obj = ({});
var seq__49422_49512 = cljs.core.seq(options);
var chunk__49423_49513 = null;
var count__49424_49514 = (0);
var i__49425_49515 = (0);
while(true){
if((i__49425_49515 < count__49424_49514)){
var vec__49432_49516 = chunk__49423_49513.cljs$core$IIndexed$_nth$arity$2(null,i__49425_49515);
var k_49517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49432_49516,(0),null);
var v_49518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49432_49516,(1),null);
(obj[cljs.core.get.cljs$core$IFn$_invoke$arity$2(shadow.xhr.goog_keys,k_49517)] = cljs.core.clj__GT_js(v_49518));


var G__49519 = seq__49422_49512;
var G__49520 = chunk__49423_49513;
var G__49521 = count__49424_49514;
var G__49522 = (i__49425_49515 + (1));
seq__49422_49512 = G__49519;
chunk__49423_49513 = G__49520;
count__49424_49514 = G__49521;
i__49425_49515 = G__49522;
continue;
} else {
var temp__5735__auto___49523 = cljs.core.seq(seq__49422_49512);
if(temp__5735__auto___49523){
var seq__49422_49524__$1 = temp__5735__auto___49523;
if(cljs.core.chunked_seq_QMARK_(seq__49422_49524__$1)){
var c__4609__auto___49525 = cljs.core.chunk_first(seq__49422_49524__$1);
var G__49526 = cljs.core.chunk_rest(seq__49422_49524__$1);
var G__49527 = c__4609__auto___49525;
var G__49528 = cljs.core.count(c__4609__auto___49525);
var G__49529 = (0);
seq__49422_49512 = G__49526;
chunk__49423_49513 = G__49527;
count__49424_49514 = G__49528;
i__49425_49515 = G__49529;
continue;
} else {
var vec__49435_49530 = cljs.core.first(seq__49422_49524__$1);
var k_49531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49435_49530,(0),null);
var v_49532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49435_49530,(1),null);
(obj[cljs.core.get.cljs$core$IFn$_invoke$arity$2(shadow.xhr.goog_keys,k_49531)] = cljs.core.clj__GT_js(v_49532));


var G__49533 = cljs.core.next(seq__49422_49524__$1);
var G__49534 = null;
var G__49535 = (0);
var G__49536 = (0);
seq__49422_49512 = G__49533;
chunk__49423_49513 = G__49534;
count__49424_49514 = G__49535;
i__49425_49515 = G__49536;
continue;
}
} else {
}
}
break;
}

return obj;
});
shadow.xhr.content_transforms = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, ["text/edn",shadow.xhr.edn_transform,"application/edn",shadow.xhr.edn_transform,"application/json",shadow.xhr.json_transform,"text/html",cljs.core.identity,"text/plain",cljs.core.identity], null));
shadow.xhr.register_transform = (function shadow$xhr$register_transform(content_type,transform_fn){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.xhr.content_transforms,cljs.core.assoc,content_type,transform_fn);
});
shadow.xhr.auto_transform = (function shadow$xhr$auto_transform(req){
var content_type = (function (){var ct = clojure.string.lower_case(req.getResponseHeader("Content-Type"));
var sep = ct.indexOf(";");
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),sep)){
return ct.substring((0),sep);
} else {
return ct;
}
})();
var transform_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.xhr.content_transforms),content_type);
if((transform_fn == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unsupported content-type",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"req","req",-326448303),req,new cljs.core.Keyword(null,"content-type","content-type",-508222634),content_type], null));
} else {
var G__49442 = req.responseText;
return (transform_fn.cljs$core$IFn$_invoke$arity$1 ? transform_fn.cljs$core$IFn$_invoke$arity$1(G__49442) : transform_fn.call(null,G__49442));
}
});
shadow.xhr.make_url = (function shadow$xhr$make_url(url,params){
var G__49443 = url;
var G__49444 = cljs.core.clj__GT_js(params);
return goog.uri.utils.appendParamsFromMap(G__49443,G__49444);
});
shadow.xhr.transform_request_body = (function shadow$xhr$transform_request_body(data){
if(typeof data === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain; charset=utf-8",data], null);
} else {
if((((!((data == null))))?(((((data.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IPrintWithWriter$))))?true:(((!data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,data))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/edn; charset=utf-8",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/octet-stream",data], null);

}
}
});
shadow.xhr.as_url = (function shadow$xhr$as_url(input){
if(typeof input === 'string'){
return input;
} else {
if(((cljs.core.vector_QMARK_(input)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(input))) && (typeof cljs.core.first(input) === 'string') && (cljs.core.map_QMARK_(cljs.core.second(input))))){
var vec__49446 = input;
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49446,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49446,(1),null);
return shadow.xhr.make_url(url,params);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("doesnt look like an url",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),input], null));

}
}
});
shadow.xhr.e__GT_data = (function shadow$xhr$e__GT_data(e){
return e;
});
shadow.xhr.event_handler = (function shadow$xhr$event_handler(req,events,event_type){
return (function (e){
if(cljs.core.map_QMARK_(events)){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(events,event_type);
if(cljs.core.truth_(temp__5735__auto__)){
var c = temp__5735__auto__;
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [req,shadow.xhr.e__GT_data(e)], null));
} else {
return null;
}
} else {
if((!((events == null)))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(events,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_type,req,shadow.xhr.e__GT_data(e)], null));
} else {
return null;

}
}
});
});
shadow.xhr.request_ok_QMARK_ = (function shadow$xhr$request_ok_QMARK_(status){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status);
});
shadow.xhr.request_error_QMARK_ = (function shadow$xhr$request_error_QMARK_(status){
return (status >= (400));
});
/**
 * creates a channel and performs xhr request like (chan :GET "/something")
 * 
 * accepts url as string or [url params]
 * 
 * this channel will receive one message [status body req] on load
 * loadend will close the result channel, so you will get nil results on request errors/timeouts
 * 
 * use options hash to pass in extra channels
 * 
 * (chan :POST "/something" some-data {:events chan-or-map
 *                                       :upload chan-or-map})
 * 
 * when given a chan that channels receives messages in form of [event-type event-data req]
 * when given a map a channel is expected for each eventtype and will receive [event-data req]
 * {:timeout some-chan}, if no channel for a given event is present, no message is sent
 * 
 * event types are :loadstart :progress :abort :error :timeout :loadend :load (see xhr spec)
 * only exception is that status >= 500 does not return a result and produces an error event instead
 */
shadow.xhr.chan = (function shadow$xhr$chan(var_args){
var G__49450 = arguments.length;
switch (G__49450) {
case 2:
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.xhr.chan.cljs$core$IFn$_invoke$arity$2 = (function (method,url){
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(method,url,null,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.xhr.chan.cljs$core$IFn$_invoke$arity$3 = (function (method,url,data){
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(method,url,data,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4 = (function (method,url,data,p__49452){
var map__49453 = p__49452;
var map__49453__$1 = (((((!((map__49453 == null))))?(((((map__49453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49453):map__49453);
var options = map__49453__$1;
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49453__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var upload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49453__$1,new cljs.core.Keyword(null,"upload","upload",-255769218));
var body_only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49453__$1,new cljs.core.Keyword(null,"body-only","body-only",-698120682));
var req = (new XMLHttpRequest());
var body_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"GET","GET",1736591026),method);
var vec__49457 = ((body_QMARK_)?shadow.xhr.transform_request_body(data):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49457,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49457,(1),null);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
if(cljs.core.truth_(((body_QMARK_)?upload:false))){
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"loadstart","loadstart",1841209333),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"loadstart","loadstart",1841209333)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"progress","progress",244323547),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"progress","progress",244323547)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"abort","abort",521193198),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"abort","abort",521193198)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"error","error",-978969032),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"error","error",-978969032)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"timeout","timeout",-318625318),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"timeout","timeout",-318625318)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"loadend","loadend",1430560564),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"loadend","loadend",1430560564)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"load","load",-1318641184),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"loadend","loadend",1430560564)));
} else {
}

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"loadstart","loadstart",1841209333),shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"loadstart","loadstart",1841209333)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"progress","progress",244323547),shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"progress","progress",244323547)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"abort","abort",521193198),shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"abort","abort",521193198)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"timeout","timeout",-318625318),shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"timeout","timeout",-318625318)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"loadend","loadend",1430560564),(function (){var callback = shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"loadend","loadend",1430560564));
return (function (e){
(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(e) : callback.call(null,e));

return cljs.core.async.close_BANG_(result_chan);
});
})());

var error_handler_49543 = shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"error","error",-978969032));
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"error","error",-978969032),error_handler_49543);

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"load","load",-1318641184),(function (){var callback = shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"load","load",-1318641184));
return (function (e){
var status = req.status;
var body__$1 = (function (){var temp__5733__auto__ = new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__5733__auto__)){
var transform = temp__5733__auto__;
var G__49464 = req.responseText;
var G__49465 = req;
return (transform.cljs$core$IFn$_invoke$arity$2 ? transform.cljs$core$IFn$_invoke$arity$2(G__49464,G__49465) : transform.call(null,G__49464,G__49465));
} else {
return shadow.xhr.auto_transform(req);
}
})();
if(shadow.xhr.request_error_QMARK_(status)){
return (error_handler_49543.cljs$core$IFn$_invoke$arity$1 ? error_handler_49543.cljs$core$IFn$_invoke$arity$1(e) : error_handler_49543.call(null,e));
} else {
(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(e) : callback.call(null,e));

if(cljs.core.truth_(body_only)){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(result_chan,body__$1);
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(result_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,body__$1,req], null));
}
}
});
})());

req.open(cljs.core.name(method),shadow.xhr.as_url(url),true);

(req.responseType = "text");

(req.withCredentials = (!(new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235).cljs$core$IFn$_invoke$arity$1(options) === false)));

if(body_QMARK_){
req.setRequestHeader("Content-Type",content_type);
} else {
}

if(body_QMARK_){
req.send(body);
} else {
req.send();
}

return result_chan;
}));

(shadow.xhr.chan.cljs$lang$maxFixedArity = 4);

shadow.xhr.request = (function shadow$xhr$request(var_args){
var G__49471 = arguments.length;
switch (G__49471) {
case 2:
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.xhr.request.cljs$core$IFn$_invoke$arity$2 = (function (method,url){
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$4(method,url,null,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.xhr.request.cljs$core$IFn$_invoke$arity$3 = (function (method,url,data){
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$4(method,url,data,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.xhr.request.cljs$core$IFn$_invoke$arity$4 = (function (method,url,data,options){
if((((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"DELETE","DELETE",1688673772),null,new cljs.core.Keyword(null,"GET","GET",1736591026),null], null), null),method)))) && ((data == null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("request needs data",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"options","options",99638489),options], null));
} else {
}

var body_QMARK_ = (!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"GET","GET",1736591026),method)) || ((data == null)))));
var vec__49472 = shadow.xhr.transform_request_body(data);
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49472,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49472,(1),null);
var req = (function (){var G__49475 = cljs.core.name(method);
var G__49476 = (cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"GET","GET",1736591026),method))?data:false))?shadow.xhr.make_url(url,data):url);
var G__49477 = ((body_QMARK_)?body:null);
var G__49478 = shadow.xhr.make_request_options(((body_QMARK_)?cljs.core.assoc_in(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"Content-Type"], null),content_type):options));
return goog.labs.net.xhr.send(G__49475,G__49476,G__49477,G__49478);
})();
var req__$1 = goog.result.SimpleResult.fromPromise(req);
return goog.result.transform(req__$1,shadow.xhr.auto_transform);
}));

(shadow.xhr.request.cljs$lang$maxFixedArity = 4);

shadow.xhr.upload = (function shadow$xhr$upload(var_args){
var args__4795__auto__ = [];
var len__4789__auto___49595 = arguments.length;
var i__4790__auto___49596 = (0);
while(true){
if((i__4790__auto___49596 < len__4789__auto___49595)){
args__4795__auto__.push((arguments[i__4790__auto___49596]));

var G__49597 = (i__4790__auto___49596 + (1));
i__4790__auto___49596 = G__49597;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return shadow.xhr.upload.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(shadow.xhr.upload.cljs$core$IFn$_invoke$arity$variadic = (function (url,file,events){
var xhr = (new XMLHttpRequest());
var seq__49483_49598 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),events));
var chunk__49485_49599 = null;
var count__49486_49600 = (0);
var i__49487_49601 = (0);
while(true){
if((i__49487_49601 < count__49486_49600)){
var vec__49496_49602 = chunk__49485_49599.cljs$core$IIndexed$_nth$arity$2(null,i__49487_49601);
var ev_id_49603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49496_49602,(0),null);
var ev_handler_49604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49496_49602,(1),null);
var target_49605 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"progress","progress",244323547),ev_id_49603))?(xhr["upload"]):xhr);
target_49605.addEventListener(cljs.core.name(ev_id_49603),ev_handler_49604);


var G__49606 = seq__49483_49598;
var G__49607 = chunk__49485_49599;
var G__49608 = count__49486_49600;
var G__49609 = (i__49487_49601 + (1));
seq__49483_49598 = G__49606;
chunk__49485_49599 = G__49607;
count__49486_49600 = G__49608;
i__49487_49601 = G__49609;
continue;
} else {
var temp__5735__auto___49610 = cljs.core.seq(seq__49483_49598);
if(temp__5735__auto___49610){
var seq__49483_49611__$1 = temp__5735__auto___49610;
if(cljs.core.chunked_seq_QMARK_(seq__49483_49611__$1)){
var c__4609__auto___49612 = cljs.core.chunk_first(seq__49483_49611__$1);
var G__49613 = cljs.core.chunk_rest(seq__49483_49611__$1);
var G__49614 = c__4609__auto___49612;
var G__49615 = cljs.core.count(c__4609__auto___49612);
var G__49616 = (0);
seq__49483_49598 = G__49613;
chunk__49485_49599 = G__49614;
count__49486_49600 = G__49615;
i__49487_49601 = G__49616;
continue;
} else {
var vec__49503_49617 = cljs.core.first(seq__49483_49611__$1);
var ev_id_49618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49503_49617,(0),null);
var ev_handler_49619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49503_49617,(1),null);
var target_49620 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"progress","progress",244323547),ev_id_49618))?(xhr["upload"]):xhr);
target_49620.addEventListener(cljs.core.name(ev_id_49618),ev_handler_49619);


var G__49621 = cljs.core.next(seq__49483_49611__$1);
var G__49622 = null;
var G__49623 = (0);
var G__49624 = (0);
seq__49483_49598 = G__49621;
chunk__49485_49599 = G__49622;
count__49486_49600 = G__49623;
i__49487_49601 = G__49624;
continue;
}
} else {
}
}
break;
}

var G__49506 = xhr;
G__49506.open("PUT",url);

G__49506.send(file);

return G__49506;
}));

(shadow.xhr.upload.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.xhr.upload.cljs$lang$applyTo = (function (seq49479){
var G__49480 = cljs.core.first(seq49479);
var seq49479__$1 = cljs.core.next(seq49479);
var G__49481 = cljs.core.first(seq49479__$1);
var seq49479__$2 = cljs.core.next(seq49479__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49480,G__49481,seq49479__$2);
}));

Object.defineProperty(module.exports, "request_error_QMARK_", { enumerable: true, get: function() { return shadow.xhr.request_error_QMARK_; } });
Object.defineProperty(module.exports, "json_transform", { enumerable: true, get: function() { return shadow.xhr.json_transform; } });
Object.defineProperty(module.exports, "goog_keys", { enumerable: true, get: function() { return shadow.xhr.goog_keys; } });
Object.defineProperty(module.exports, "auto_transform", { enumerable: true, get: function() { return shadow.xhr.auto_transform; } });
Object.defineProperty(module.exports, "upload", { enumerable: true, get: function() { return shadow.xhr.upload; } });
Object.defineProperty(module.exports, "result_combine", { enumerable: true, get: function() { return shadow.xhr.result_combine; } });
Object.defineProperty(module.exports, "request_ok_QMARK_", { enumerable: true, get: function() { return shadow.xhr.request_ok_QMARK_; } });
Object.defineProperty(module.exports, "result_wait_on_success", { enumerable: true, get: function() { return shadow.xhr.result_wait_on_success; } });
Object.defineProperty(module.exports, "chan", { enumerable: true, get: function() { return shadow.xhr.chan; } });
Object.defineProperty(module.exports, "make_url", { enumerable: true, get: function() { return shadow.xhr.make_url; } });
Object.defineProperty(module.exports, "make_request_options", { enumerable: true, get: function() { return shadow.xhr.make_request_options; } });
Object.defineProperty(module.exports, "request", { enumerable: true, get: function() { return shadow.xhr.request; } });
Object.defineProperty(module.exports, "event_handler", { enumerable: true, get: function() { return shadow.xhr.event_handler; } });
Object.defineProperty(module.exports, "result_value", { enumerable: true, get: function() { return shadow.xhr.result_value; } });
Object.defineProperty(module.exports, "result_immediate", { enumerable: true, get: function() { return shadow.xhr.result_immediate; } });
Object.defineProperty(module.exports, "content_transforms", { enumerable: true, get: function() { return shadow.xhr.content_transforms; } });
Object.defineProperty(module.exports, "result_chain", { enumerable: true, get: function() { return shadow.xhr.result_chain; } });
Object.defineProperty(module.exports, "transform_request_body", { enumerable: true, get: function() { return shadow.xhr.transform_request_body; } });
Object.defineProperty(module.exports, "result_success_QMARK_", { enumerable: true, get: function() { return shadow.xhr.result_success_QMARK_; } });
Object.defineProperty(module.exports, "edn_transform", { enumerable: true, get: function() { return shadow.xhr.edn_transform; } });
Object.defineProperty(module.exports, "e__GT_data", { enumerable: true, get: function() { return shadow.xhr.e__GT_data; } });
Object.defineProperty(module.exports, "result_error", { enumerable: true, get: function() { return shadow.xhr.result_error; } });
Object.defineProperty(module.exports, "register_transform", { enumerable: true, get: function() { return shadow.xhr.register_transform; } });
Object.defineProperty(module.exports, "as_url", { enumerable: true, get: function() { return shadow.xhr.as_url; } });
//# sourceMappingURL=shadow.xhr.js.map
