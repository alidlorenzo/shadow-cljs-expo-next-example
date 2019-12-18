var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./goog.object.object.js");
require("./cljs.tools.reader.js");
require("./cljs.tools.reader.edn.js");
require("./goog.string.stringbuffer.js");
var example=$CLJS.example || ($CLJS.example = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});

$CLJS.SHADOW_ENV.setLoaded("cljs.reader.js");

goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.edn');
goog.require('goog.string.StringBuffer');
cljs.reader.zero_fill_right_and_truncate = (function cljs$reader$zero_fill_right_and_truncate(s,width){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(width,cljs.core.count(s))){
return s;
} else {
if((width < cljs.core.count(s))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),width);
} else {
var b = (new goog.string.StringBuffer(s));
while(true){
if((b.getLength() < width)){
var G__42940 = b.append("0");
b = G__42940;
continue;
} else {
return b.toString();
}
break;
}

}
}
});
cljs.reader.divisible_QMARK_ = (function cljs$reader$divisible_QMARK_(num,div){
return (cljs.core.mod(num,div) === (0));
});
cljs.reader.indivisible_QMARK_ = (function cljs$reader$indivisible_QMARK_(num,div){
return (!(cljs.reader.divisible_QMARK_(num,div)));
});
cljs.reader.leap_year_QMARK_ = (function cljs$reader$leap_year_QMARK_(year){
return ((cljs.reader.divisible_QMARK_(year,(4))) && (((cljs.reader.indivisible_QMARK_(year,(100))) || (cljs.reader.divisible_QMARK_(year,(400))))));
});
cljs.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(29),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
return (function (month,leap_year_QMARK_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
})();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = (function cljs$reader$parse_int(s){
var n = parseInt(s,(10));
if(cljs.core.not(isNaN(n))){
return n;
} else {
return null;
}
});
cljs.reader.check = (function cljs$reader$check(low,n,high,msg){
if((((low <= n)) && ((n <= high)))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)," Failed:  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(low),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(high)].join('')));
}

return n;
});
cljs.reader.parse_and_validate_timestamp = (function cljs$reader$parse_and_validate_timestamp(s){
var vec__42775 = cljs.core.re_matches(cljs.reader.timestamp_regex,s);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42775,(0),null);
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42775,(1),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42775,(2),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42775,(3),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42775,(4),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42775,(5),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42775,(6),null);
var fraction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42775,(7),null);
var offset_sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42775,(8),null);
var offset_hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42775,(9),null);
var offset_minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42775,(10),null);
var v = vec__42775;
if(cljs.core.not(v)){
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')));
} else {
var years__$1 = cljs.reader.parse_int(years);
var months__$1 = (function (){var or__4185__auto__ = cljs.reader.parse_int(months);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})();
var days__$1 = (function (){var or__4185__auto__ = cljs.reader.parse_int(days);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})();
var hours__$1 = (function (){var or__4185__auto__ = cljs.reader.parse_int(hours);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})();
var minutes__$1 = (function (){var or__4185__auto__ = cljs.reader.parse_int(minutes);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})();
var seconds__$1 = (function (){var or__4185__auto__ = cljs.reader.parse_int(seconds);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})();
var fraction__$1 = (function (){var or__4185__auto__ = cljs.reader.parse_int(cljs.reader.zero_fill_right_and_truncate(fraction,(3)));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})();
var offset_sign__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset_sign,"-"))?(-1):(1));
var offset_hours__$1 = (function (){var or__4185__auto__ = cljs.reader.parse_int(offset_hours);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})();
var offset_minutes__$1 = (function (){var or__4185__auto__ = cljs.reader.parse_int(offset_minutes);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})();
var offset = (offset_sign__$1 * ((offset_hours__$1 * (60)) + offset_minutes__$1));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check((1),months__$1,(12),"timestamp month field must be in range 1..12"),cljs.reader.check((1),days__$1,(function (){var G__42805 = months__$1;
var G__42806 = cljs.reader.leap_year_QMARK_(years__$1);
return (cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2(G__42805,G__42806) : cljs.reader.days_in_month.call(null,G__42805,G__42806));
})(),"timestamp day field must be in range 1..last day in month"),cljs.reader.check((0),hours__$1,(23),"timestamp hour field must be in range 0..23"),cljs.reader.check((0),minutes__$1,(59),"timestamp minute field must be in range 0..59"),cljs.reader.check((0),seconds__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(minutes__$1,(59)))?(60):(59)),"timestamp second field must be in range 0..60"),cljs.reader.check((0),fraction__$1,(999),"timestamp millisecond field must be in range 0..999"),offset], null);
}
});
cljs.reader.parse_timestamp = (function cljs$reader$parse_timestamp(ts){
var temp__5733__auto__ = cljs.reader.parse_and_validate_timestamp(ts);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__42807 = temp__5733__auto__;
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42807,(0),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42807,(1),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42807,(2),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42807,(3),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42807,(4),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42807,(5),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42807,(6),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42807,(7),null);
return (new Date((Date.UTC(years,(months - (1)),days,hours,minutes,seconds,ms) - ((offset * (60)) * (1000)))));
} else {
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join('')));
}
});
cljs.reader.read_date = (function cljs$reader$read_date(s){
if(typeof s === 'string'){
return cljs.reader.parse_timestamp(s);
} else {
throw (new Error("Instance literal expects a string for its timestamp."));
}
});
cljs.reader.read_queue = (function cljs$reader$read_queue(elems){
if(cljs.core.vector_QMARK_(elems)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,elems);
} else {
throw (new Error("Queue literal expects a vector for its elements."));
}
});
cljs.reader.read_js = (function cljs$reader$read_js(form){
if(cljs.core.vector_QMARK_(form)){
var arr = [];
var seq__42815_42942 = cljs.core.seq(form);
var chunk__42816_42943 = null;
var count__42817_42944 = (0);
var i__42818_42945 = (0);
while(true){
if((i__42818_42945 < count__42817_42944)){
var x_42946 = chunk__42816_42943.cljs$core$IIndexed$_nth$arity$2(null,i__42818_42945);
arr.push(x_42946);


var G__42947 = seq__42815_42942;
var G__42948 = chunk__42816_42943;
var G__42949 = count__42817_42944;
var G__42950 = (i__42818_42945 + (1));
seq__42815_42942 = G__42947;
chunk__42816_42943 = G__42948;
count__42817_42944 = G__42949;
i__42818_42945 = G__42950;
continue;
} else {
var temp__5735__auto___42951 = cljs.core.seq(seq__42815_42942);
if(temp__5735__auto___42951){
var seq__42815_42952__$1 = temp__5735__auto___42951;
if(cljs.core.chunked_seq_QMARK_(seq__42815_42952__$1)){
var c__4609__auto___42953 = cljs.core.chunk_first(seq__42815_42952__$1);
var G__42954 = cljs.core.chunk_rest(seq__42815_42952__$1);
var G__42955 = c__4609__auto___42953;
var G__42956 = cljs.core.count(c__4609__auto___42953);
var G__42957 = (0);
seq__42815_42942 = G__42954;
chunk__42816_42943 = G__42955;
count__42817_42944 = G__42956;
i__42818_42945 = G__42957;
continue;
} else {
var x_42958 = cljs.core.first(seq__42815_42952__$1);
arr.push(x_42958);


var G__42962 = cljs.core.next(seq__42815_42952__$1);
var G__42963 = null;
var G__42964 = (0);
var G__42965 = (0);
seq__42815_42942 = G__42962;
chunk__42816_42943 = G__42963;
count__42817_42944 = G__42964;
i__42818_42945 = G__42965;
continue;
}
} else {
}
}
break;
}

return arr;
} else {
if(cljs.core.map_QMARK_(form)){
var obj = ({});
var seq__42823_42969 = cljs.core.seq(form);
var chunk__42824_42970 = null;
var count__42825_42971 = (0);
var i__42826_42972 = (0);
while(true){
if((i__42826_42972 < count__42825_42971)){
var vec__42853_42973 = chunk__42824_42970.cljs$core$IIndexed$_nth$arity$2(null,i__42826_42972);
var k_42974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42853_42973,(0),null);
var v_42975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42853_42973,(1),null);
var G__42865_42976 = obj;
var G__42866_42977 = cljs.core.name(k_42974);
var G__42867_42978 = v_42975;
goog.object.set(G__42865_42976,G__42866_42977,G__42867_42978);


var G__42979 = seq__42823_42969;
var G__42980 = chunk__42824_42970;
var G__42981 = count__42825_42971;
var G__42982 = (i__42826_42972 + (1));
seq__42823_42969 = G__42979;
chunk__42824_42970 = G__42980;
count__42825_42971 = G__42981;
i__42826_42972 = G__42982;
continue;
} else {
var temp__5735__auto___42983 = cljs.core.seq(seq__42823_42969);
if(temp__5735__auto___42983){
var seq__42823_42984__$1 = temp__5735__auto___42983;
if(cljs.core.chunked_seq_QMARK_(seq__42823_42984__$1)){
var c__4609__auto___42985 = cljs.core.chunk_first(seq__42823_42984__$1);
var G__42986 = cljs.core.chunk_rest(seq__42823_42984__$1);
var G__42987 = c__4609__auto___42985;
var G__42988 = cljs.core.count(c__4609__auto___42985);
var G__42989 = (0);
seq__42823_42969 = G__42986;
chunk__42824_42970 = G__42987;
count__42825_42971 = G__42988;
i__42826_42972 = G__42989;
continue;
} else {
var vec__42868_42990 = cljs.core.first(seq__42823_42984__$1);
var k_42991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42868_42990,(0),null);
var v_42992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42868_42990,(1),null);
var G__42873_42993 = obj;
var G__42874_42994 = cljs.core.name(k_42991);
var G__42875_42995 = v_42992;
goog.object.set(G__42873_42993,G__42874_42994,G__42875_42995);


var G__42996 = cljs.core.next(seq__42823_42984__$1);
var G__42997 = null;
var G__42998 = (0);
var G__42999 = (0);
seq__42823_42969 = G__42996;
chunk__42824_42970 = G__42997;
count__42825_42971 = G__42998;
i__42826_42972 = G__42999;
continue;
}
} else {
}
}
break;
}

return obj;
} else {
throw (new Error(["JS literal expects a vector or map containing ","only string or unqualified keyword keys"].join('')));

}
}
});
cljs.reader.read_uuid = (function cljs$reader$read_uuid(uuid){
if(typeof uuid === 'string'){
return cljs.core.uuid(uuid);
} else {
throw (new Error("UUID literal expects a string as its representation."));
}
});
cljs.reader._STAR_default_data_reader_fn_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"inst","inst",-2008473268,null),cljs.reader.read_date,new cljs.core.Symbol(null,"uuid","uuid",-504564192,null),cljs.reader.read_uuid,new cljs.core.Symbol(null,"queue","queue",-1198599890,null),cljs.reader.read_queue,new cljs.core.Symbol(null,"js","js",-886355190,null),cljs.reader.read_js], null),cljs.core.PersistentArrayMap.EMPTY], 0)));
/**
 * Reads the first object from an cljs.tools.reader.reader-types/IPushbackReader.
 * Returns the object read. If EOF, throws if eof-error? is true otherwise returns eof.
 * If no reader is provided, *in* will be used.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * cljs.tools.reader.edn/read doesn't depend on dynamic Vars, all configuration
 * is done by passing an opt map.
 * 
 * opts is a map that can include the following keys:
 * :eof - value to return on end-of-file. When not supplied, eof throws an exception.
 * :readers  - a map of tag symbols to data-reader functions to be considered before default-data-readers.
 *            When not supplied, only the default-data-readers will be used.
 * :default - A function of two args, that will, if present and no reader is found for a tag,
 *            be called with the tag and the value.
 */
cljs.reader.read = (function cljs$reader$read(var_args){
var G__42877 = arguments.length;
switch (G__42877) {
case 1:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.reader.read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_),new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),reader);
}));

(cljs.reader.read.cljs$core$IFn$_invoke$arity$2 = (function (p__42878,reader){
var map__42879 = p__42878;
var map__42879__$1 = (((((!((map__42879 == null))))?(((((map__42879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42879):map__42879);
var opts = map__42879__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42879__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null)], 0)),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
})),reader);
}));

(cljs.reader.read.cljs$core$IFn$_invoke$arity$4 = (function (reader,eof_error_QMARK_,eof,opts){
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(reader,eof_error_QMARK_,eof,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null)], 0)),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
})));
}));

(cljs.reader.read.cljs$lang$maxFixedArity = 4);

/**
 * Reads one object from the string s.
 * Returns nil when s is nil or empty.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * opts is a map as per cljs.tools.reader.edn/read
 */
cljs.reader.read_string = (function cljs$reader$read_string(var_args){
var G__42895 = arguments.length;
switch (G__42895) {
case 1:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_),new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),s);
}));

(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null),opts], 0)),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
})),s);
}));

(cljs.reader.read_string.cljs$lang$maxFixedArity = 2);

cljs.reader.register_tag_parser_BANG_ = (function cljs$reader$register_tag_parser_BANG_(tag,f){
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag,f);

return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function cljs$reader$deregister_tag_parser_BANG_(tag){
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag);

return old_parser;
});
cljs.reader.register_default_tag_parser_BANG_ = (function cljs$reader$register_default_tag_parser_BANG_(f){
var old_parser = cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,(function (_){
return f;
}));

return old_parser;
});
cljs.reader.deregister_default_tag_parser_BANG_ = (function cljs$reader$deregister_default_tag_parser_BANG_(){
var old_parser = cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,(function (_){
return null;
}));

return old_parser;
});
Object.defineProperty(module.exports, "read_uuid", { enumerable: true, get: function() { return cljs.reader.read_uuid; } });
Object.defineProperty(module.exports, "leap_year_QMARK_", { enumerable: true, get: function() { return cljs.reader.leap_year_QMARK_; } });
Object.defineProperty(module.exports, "_STAR_default_data_reader_fn_STAR_", { enumerable: true, get: function() { return cljs.reader._STAR_default_data_reader_fn_STAR_; } });
Object.defineProperty(module.exports, "read", { enumerable: true, get: function() { return cljs.reader.read; } });
Object.defineProperty(module.exports, "_STAR_tag_table_STAR_", { enumerable: true, get: function() { return cljs.reader._STAR_tag_table_STAR_; } });
Object.defineProperty(module.exports, "days_in_month", { enumerable: true, get: function() { return cljs.reader.days_in_month; } });
Object.defineProperty(module.exports, "parse_and_validate_timestamp", { enumerable: true, get: function() { return cljs.reader.parse_and_validate_timestamp; } });
Object.defineProperty(module.exports, "register_tag_parser_BANG_", { enumerable: true, get: function() { return cljs.reader.register_tag_parser_BANG_; } });
Object.defineProperty(module.exports, "check", { enumerable: true, get: function() { return cljs.reader.check; } });
Object.defineProperty(module.exports, "timestamp_regex", { enumerable: true, get: function() { return cljs.reader.timestamp_regex; } });
Object.defineProperty(module.exports, "register_default_tag_parser_BANG_", { enumerable: true, get: function() { return cljs.reader.register_default_tag_parser_BANG_; } });
Object.defineProperty(module.exports, "divisible_QMARK_", { enumerable: true, get: function() { return cljs.reader.divisible_QMARK_; } });
Object.defineProperty(module.exports, "zero_fill_right_and_truncate", { enumerable: true, get: function() { return cljs.reader.zero_fill_right_and_truncate; } });
Object.defineProperty(module.exports, "read_date", { enumerable: true, get: function() { return cljs.reader.read_date; } });
Object.defineProperty(module.exports, "deregister_default_tag_parser_BANG_", { enumerable: true, get: function() { return cljs.reader.deregister_default_tag_parser_BANG_; } });
Object.defineProperty(module.exports, "indivisible_QMARK_", { enumerable: true, get: function() { return cljs.reader.indivisible_QMARK_; } });
Object.defineProperty(module.exports, "read_queue", { enumerable: true, get: function() { return cljs.reader.read_queue; } });
Object.defineProperty(module.exports, "read_string", { enumerable: true, get: function() { return cljs.reader.read_string; } });
Object.defineProperty(module.exports, "parse_int", { enumerable: true, get: function() { return cljs.reader.parse_int; } });
Object.defineProperty(module.exports, "read_js", { enumerable: true, get: function() { return cljs.reader.read_js; } });
Object.defineProperty(module.exports, "deregister_tag_parser_BANG_", { enumerable: true, get: function() { return cljs.reader.deregister_tag_parser_BANG_; } });
Object.defineProperty(module.exports, "parse_timestamp", { enumerable: true, get: function() { return cljs.reader.parse_timestamp; } });
//# sourceMappingURL=cljs.reader.js.map
