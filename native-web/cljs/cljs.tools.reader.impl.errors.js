var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./cljs.tools.reader.reader_types.js");
require("./clojure.string.js");
require("./cljs.tools.reader.impl.inspect.js");
var example=$CLJS.example || ($CLJS.example = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});

$CLJS.SHADOW_ENV.setLoaded("cljs.tools.reader.impl.errors.js");

goog.provide('cljs.tools.reader.impl.errors');
goog.require('cljs.core');
goog.require('cljs.tools.reader.reader_types');
goog.require('clojure.string');
goog.require('cljs.tools.reader.impl.inspect');
cljs.tools.reader.impl.errors.ex_details = (function cljs$tools$reader$impl$errors$ex_details(rdr,ex_type){
var details = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098),new cljs.core.Keyword(null,"ex-kind","ex-kind",1581199296),ex_type], null);
if(cljs.tools.reader.reader_types.indexing_reader_QMARK_(rdr)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(details,new cljs.core.Keyword(null,"file","file",-1269645878),cljs.tools.reader.reader_types.get_file_name(rdr),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"line","line",212345235),cljs.tools.reader.reader_types.get_line_number(rdr),new cljs.core.Keyword(null,"col","col",-1959363084),cljs.tools.reader.reader_types.get_column_number(rdr)], 0));
} else {
return details;
}
});
/**
 * Throw an ex-info error.
 */
cljs.tools.reader.impl.errors.throw_ex = (function cljs$tools$reader$impl$errors$throw_ex(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42073 = arguments.length;
var i__4790__auto___42074 = (0);
while(true){
if((i__4790__auto___42074 < len__4789__auto___42073)){
args__4795__auto__.push((arguments[i__4790__auto___42074]));

var G__42075 = (i__4790__auto___42074 + (1));
i__4790__auto___42074 = G__42075;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return cljs.tools.reader.impl.errors.throw_ex.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(cljs.tools.reader.impl.errors.throw_ex.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,ex_type,msg){
var details = cljs.tools.reader.impl.errors.ex_details(rdr,ex_type);
var file = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(details);
var line = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(details);
var col = new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(details);
var msg1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)," "].join(''):null);
var msg2 = (cljs.core.truth_(line)?["[line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", col ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col),"]"].join(''):null);
var msg3 = (cljs.core.truth_((function (){var or__4185__auto__ = msg1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return msg2;
}
})())?" ":null);
var full_msg = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.str,msg1,msg2,msg3,msg);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(full_msg,details);
}));

(cljs.tools.reader.impl.errors.throw_ex.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.tools.reader.impl.errors.throw_ex.cljs$lang$applyTo = (function (seq42006){
var G__42007 = cljs.core.first(seq42006);
var seq42006__$1 = cljs.core.next(seq42006);
var G__42008 = cljs.core.first(seq42006__$1);
var seq42006__$2 = cljs.core.next(seq42006__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42007,G__42008,seq42006__$2);
}));

/**
 * Throws an ExceptionInfo with the given message.
 * If rdr is an IndexingReader, additional information about column and line number is provided
 */
cljs.tools.reader.impl.errors.reader_error = (function cljs$tools$reader$impl$errors$reader_error(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42093 = arguments.length;
var i__4790__auto___42094 = (0);
while(true){
if((i__4790__auto___42094 < len__4789__auto___42093)){
args__4795__auto__.push((arguments[i__4790__auto___42094]));

var G__42095 = (i__4790__auto___42094 + (1));
i__4790__auto___42094 = G__42095;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,msgs){
return cljs.tools.reader.impl.errors.throw_ex.cljs$core$IFn$_invoke$arity$variadic(rdr,new cljs.core.Keyword(null,"reader-error","reader-error",1610253121),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msgs)], 0));
}));

(cljs.tools.reader.impl.errors.reader_error.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.tools.reader.impl.errors.reader_error.cljs$lang$applyTo = (function (seq42012){
var G__42013 = cljs.core.first(seq42012);
var seq42012__$1 = cljs.core.next(seq42012);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42013,seq42012__$1);
}));

/**
 * Throws an ExceptionInfo with the given message.
 * If rdr is an IndexingReader, additional information about column and line number is provided
 */
cljs.tools.reader.impl.errors.illegal_arg_error = (function cljs$tools$reader$impl$errors$illegal_arg_error(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42098 = arguments.length;
var i__4790__auto___42099 = (0);
while(true){
if((i__4790__auto___42099 < len__4789__auto___42098)){
args__4795__auto__.push((arguments[i__4790__auto___42099]));

var G__42100 = (i__4790__auto___42099 + (1));
i__4790__auto___42099 = G__42100;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,msgs){
return cljs.tools.reader.impl.errors.throw_ex.cljs$core$IFn$_invoke$arity$variadic(rdr,new cljs.core.Keyword(null,"illegal-argument","illegal-argument",-1845493170),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msgs)], 0));
}));

(cljs.tools.reader.impl.errors.illegal_arg_error.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.tools.reader.impl.errors.illegal_arg_error.cljs$lang$applyTo = (function (seq42019){
var G__42020 = cljs.core.first(seq42019);
var seq42019__$1 = cljs.core.next(seq42019);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42020,seq42019__$1);
}));

/**
 * Throws an ExceptionInfo with the given message.
 * If rdr is an IndexingReader, additional information about column and line number is provided
 */
cljs.tools.reader.impl.errors.eof_error = (function cljs$tools$reader$impl$errors$eof_error(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42104 = arguments.length;
var i__4790__auto___42105 = (0);
while(true){
if((i__4790__auto___42105 < len__4789__auto___42104)){
args__4795__auto__.push((arguments[i__4790__auto___42105]));

var G__42106 = (i__4790__auto___42105 + (1));
i__4790__auto___42105 = G__42106;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,msgs){
return cljs.tools.reader.impl.errors.throw_ex.cljs$core$IFn$_invoke$arity$variadic(rdr,new cljs.core.Keyword(null,"eof","eof",-489063237),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msgs)], 0));
}));

(cljs.tools.reader.impl.errors.eof_error.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.tools.reader.impl.errors.eof_error.cljs$lang$applyTo = (function (seq42023){
var G__42024 = cljs.core.first(seq42023);
var seq42023__$1 = cljs.core.next(seq42023);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42024,seq42023__$1);
}));

cljs.tools.reader.impl.errors.throw_eof_delimited = (function cljs$tools$reader$impl$errors$throw_eof_delimited(var_args){
var G__42026 = arguments.length;
switch (G__42026) {
case 4:
return cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$4 = (function (rdr,kind,column,line){
return cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$5(rdr,kind,line,column,null);
}));

(cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$5 = (function (rdr,kind,line,column,n){
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unexpected EOF while reading ",(cljs.core.truth_(n)?["item ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)," of "].join(''):null),cljs.core.name(kind),(cljs.core.truth_(line)?[", starting at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," and column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):null),"."], 0));
}));

(cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$lang$maxFixedArity = 5);

cljs.tools.reader.impl.errors.throw_odd_map = (function cljs$tools$reader$impl$errors$throw_odd_map(rdr,line,col,elements){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["The map literal starting with ",cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(cljs.core.first(elements)),(cljs.core.truth_(line)?[" on line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join(''):null)," contains ",cljs.core.count(elements)," form(s). Map literals must contain an even number of forms."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_number = (function cljs$tools$reader$impl$errors$throw_invalid_number(rdr,token){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid number: ",token,"."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_literal = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_literal(rdr,token){
throw cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid unicode literal: \\",token,"."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_escape = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_escape(rdr,ch){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid unicode escape: \\u",ch,"."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid = (function cljs$tools$reader$impl$errors$throw_invalid(rdr,kind,token){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid ",cljs.core.name(kind),": ",token,"."], 0));
});
cljs.tools.reader.impl.errors.throw_eof_at_start = (function cljs$tools$reader$impl$errors$throw_eof_at_start(rdr,kind){
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unexpected EOF while reading start of ",cljs.core.name(kind),"."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_char = (function cljs$tools$reader$impl$errors$throw_bad_char(rdr,kind,ch){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid character: ",ch," found while reading ",cljs.core.name(kind),"."], 0));
});
cljs.tools.reader.impl.errors.throw_eof_at_dispatch = (function cljs$tools$reader$impl$errors$throw_eof_at_dispatch(rdr){
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unexpected EOF while reading dispatch character."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_dispatch = (function cljs$tools$reader$impl$errors$throw_bad_dispatch(rdr,ch){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No dispatch macro for ",ch,"."], 0));
});
cljs.tools.reader.impl.errors.throw_unmatch_delimiter = (function cljs$tools$reader$impl$errors$throw_unmatch_delimiter(rdr,ch){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unmatched delimiter ",ch,"."], 0));
});
cljs.tools.reader.impl.errors.throw_eof_reading = (function cljs$tools$reader$impl$errors$throw_eof_reading(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42128 = arguments.length;
var i__4790__auto___42129 = (0);
while(true){
if((i__4790__auto___42129 < len__4789__auto___42128)){
args__4795__auto__.push((arguments[i__4790__auto___42129]));

var G__42130 = (i__4790__auto___42129 + (1));
i__4790__auto___42129 = G__42130;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return cljs.tools.reader.impl.errors.throw_eof_reading.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(cljs.tools.reader.impl.errors.throw_eof_reading.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,kind,start){
var init = (function (){var G__42030 = kind;
var G__42030__$1 = (((G__42030 instanceof cljs.core.Keyword))?G__42030.fqn:null);
switch (G__42030__$1) {
case "regex":
return "#\"";

break;
case "string":
return "\"";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42030__$1)].join('')));

}
})();
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unexpected EOF reading ",cljs.core.name(kind)," starting ",cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,init,start),"."], 0));
}));

(cljs.tools.reader.impl.errors.throw_eof_reading.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.tools.reader.impl.errors.throw_eof_reading.cljs$lang$applyTo = (function (seq42027){
var G__42028 = cljs.core.first(seq42027);
var seq42027__$1 = cljs.core.next(seq42027);
var G__42029 = cljs.core.first(seq42027__$1);
var seq42027__$2 = cljs.core.next(seq42027__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42028,G__42029,seq42027__$2);
}));

cljs.tools.reader.impl.errors.throw_no_dispatch = (function cljs$tools$reader$impl$errors$throw_no_dispatch(rdr,ch){
return cljs.tools.reader.impl.errors.throw_bad_dispatch(rdr,ch);
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_char = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_char(rdr,token){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid unicode character \\",token,"."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_digit_in_token = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_digit_in_token(rdr,ch,token){
return cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid digit ",ch," in unicode character \\",token,"."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_digit = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_digit(rdr,ch){
return cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid digit ",ch," in unicode character."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_len = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_len(rdr,actual,expected){
return cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid unicode literal. Unicode literals should be ",expected,"characters long.  ","value suppled is ",actual,"characters long."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_character_literal = (function cljs$tools$reader$impl$errors$throw_invalid_character_literal(rdr,token){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid character literal \\u",token,"."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_octal_len = (function cljs$tools$reader$impl$errors$throw_invalid_octal_len(rdr,token){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid octal escape sequence in a character literal:",token,". Octal escape sequences must be 3 or fewer digits."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_octal_number = (function cljs$tools$reader$impl$errors$throw_bad_octal_number(rdr){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Octal escape sequence must be in range [0, 377]."], 0));
});
cljs.tools.reader.impl.errors.throw_unsupported_character = (function cljs$tools$reader$impl$errors$throw_unsupported_character(rdr,token){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unsupported character: ",token,"."], 0));
});
cljs.tools.reader.impl.errors.throw_eof_in_character = (function cljs$tools$reader$impl$errors$throw_eof_in_character(rdr){
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unexpected EOF while reading character."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_escape_char = (function cljs$tools$reader$impl$errors$throw_bad_escape_char(rdr,ch){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unsupported escape character: \\",ch,"."], 0));
});
cljs.tools.reader.impl.errors.throw_single_colon = (function cljs$tools$reader$impl$errors$throw_single_colon(rdr){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["A single colon is not a valid keyword."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_metadata = (function cljs$tools$reader$impl$errors$throw_bad_metadata(rdr,x){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Metadata cannot be ",cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(x),". Metadata must be a Symbol, Keyword, String or Map."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_metadata_target = (function cljs$tools$reader$impl$errors$throw_bad_metadata_target(rdr,target){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Metadata can not be applied to ",cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(target),". ","Metadata can only be applied to IMetas."], 0));
});
cljs.tools.reader.impl.errors.throw_feature_not_keyword = (function cljs$tools$reader$impl$errors$throw_feature_not_keyword(rdr,feature){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Feature cannot be ",cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(feature)," Features must be keywords."], 0));
});
cljs.tools.reader.impl.errors.throw_ns_map_no_map = (function cljs$tools$reader$impl$errors$throw_ns_map_no_map(rdr,ns_name){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Namespaced map with namespace ",ns_name," does not specify a map."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_ns = (function cljs$tools$reader$impl$errors$throw_bad_ns(rdr,ns_name){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid value used as namespace in namespaced map: ",ns_name,"."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_reader_tag = (function cljs$tools$reader$impl$errors$throw_bad_reader_tag(rdr,tag){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid reader tag: ",cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(tag),". Reader tags must be symbols."], 0));
});
cljs.tools.reader.impl.errors.throw_unknown_reader_tag = (function cljs$tools$reader$impl$errors$throw_unknown_reader_tag(rdr,tag){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No reader function for tag ",cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(tag),"."], 0));
});
cljs.tools.reader.impl.errors.duplicate_keys_error = (function cljs$tools$reader$impl$errors$duplicate_keys_error(msg,coll){
var duplicates = (function cljs$tools$reader$impl$errors$duplicate_keys_error_$_duplicates(seq){
var iter__4582__auto__ = (function cljs$tools$reader$impl$errors$duplicate_keys_error_$_duplicates_$_iter__42056(s__42057){
return (new cljs.core.LazySeq(null,(function (){
var s__42057__$1 = s__42057;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42057__$1);
if(temp__5735__auto__){
var s__42057__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42057__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__42057__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__42059 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__42058 = (0);
while(true){
if((i__42058 < size__4581__auto__)){
var vec__42060 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__42058);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42060,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42060,(1),null);
if((freq > (1))){
cljs.core.chunk_append(b__42059,id);

var G__42143 = (i__42058 + (1));
i__42058 = G__42143;
continue;
} else {
var G__42144 = (i__42058 + (1));
i__42058 = G__42144;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42059),cljs$tools$reader$impl$errors$duplicate_keys_error_$_duplicates_$_iter__42056(cljs.core.chunk_rest(s__42057__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42059),null);
}
} else {
var vec__42064 = cljs.core.first(s__42057__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42064,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42064,(1),null);
if((freq > (1))){
return cljs.core.cons(id,cljs$tools$reader$impl$errors$duplicate_keys_error_$_duplicates_$_iter__42056(cljs.core.rest(s__42057__$2)));
} else {
var G__42145 = cljs.core.rest(s__42057__$2);
s__42057__$1 = G__42145;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.frequencies(seq));
});
var dups = duplicates(coll);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.str,msg,(((cljs.core.count(dups) > (1)))?"s":null),": ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",dups));
});
cljs.tools.reader.impl.errors.throw_dup_keys = (function cljs$tools$reader$impl$errors$throw_dup_keys(rdr,kind,ks){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.tools.reader.impl.errors.duplicate_keys_error([clojure.string.capitalize(cljs.core.name(kind))," literal contains duplicate key"].join(''),ks)], 0));
});
cljs.tools.reader.impl.errors.throw_eof_error = (function cljs$tools$reader$impl$errors$throw_eof_error(rdr,line){
if(cljs.core.truth_(line)){
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["EOF while reading, starting at line ",line,"."], 0));
} else {
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["EOF while reading."], 0));
}
});
Object.defineProperty(module.exports, "throw_bad_dispatch", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.throw_bad_dispatch; } });
Object.defineProperty(module.exports, "throw_invalid_unicode_escape", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.throw_invalid_unicode_escape; } });
Object.defineProperty(module.exports, "throw_dup_keys", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.throw_dup_keys; } });
Object.defineProperty(module.exports, "throw_bad_ns", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.throw_bad_ns; } });
Object.defineProperty(module.exports, "duplicate_keys_error", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.duplicate_keys_error; } });
Object.defineProperty(module.exports, "throw_unknown_reader_tag", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.throw_unknown_reader_tag; } });
Object.defineProperty(module.exports, "throw_eof_at_dispatch", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.throw_eof_at_dispatch; } });
Object.defineProperty(module.exports, "throw_bad_metadata_target", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.throw_bad_metadata_target; } });
Object.defineProperty(module.exports, "throw_invalid_number", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.throw_invalid_number; } });
Object.defineProperty(module.exports, "reader_error", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.reader_error; } });
Object.defineProperty(module.exports, "throw_invalid_unicode_literal", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.throw_invalid_unicode_literal; } });
Object.defineProperty(module.exports, "throw_ns_map_no_map", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.throw_ns_map_no_map; } });
Object.defineProperty(module.exports, "throw_unsupported_character", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.throw_unsupported_character; } });
Object.defineProperty(module.exports, "throw_feature_not_keyword", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.throw_feature_not_keyword; } });
Object.defineProperty(module.exports, "throw_eof_delimited", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.throw_eof_delimited; } });
Object.defineProperty(module.exports, "throw_eof_in_character", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.throw_eof_in_character; } });
Object.defineProperty(module.exports, "throw_bad_char", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.throw_bad_char; } });
Object.defineProperty(module.exports, "eof_error", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.eof_error; } });
Object.defineProperty(module.exports, "throw_bad_metadata", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.throw_bad_metadata; } });
Object.defineProperty(module.exports, "throw_eof_reading", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.throw_eof_reading; } });
Object.defineProperty(module.exports, "throw_eof_error", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.throw_eof_error; } });
Object.defineProperty(module.exports, "illegal_arg_error", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.illegal_arg_error; } });
Object.defineProperty(module.exports, "throw_invalid_octal_len", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.throw_invalid_octal_len; } });
Object.defineProperty(module.exports, "throw_invalid_unicode_digit", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.throw_invalid_unicode_digit; } });
Object.defineProperty(module.exports, "throw_invalid_unicode_digit_in_token", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.throw_invalid_unicode_digit_in_token; } });
Object.defineProperty(module.exports, "throw_invalid_unicode_len", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.throw_invalid_unicode_len; } });
Object.defineProperty(module.exports, "throw_single_colon", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.throw_single_colon; } });
Object.defineProperty(module.exports, "throw_odd_map", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.throw_odd_map; } });
Object.defineProperty(module.exports, "throw_bad_octal_number", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.throw_bad_octal_number; } });
Object.defineProperty(module.exports, "throw_bad_reader_tag", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.throw_bad_reader_tag; } });
Object.defineProperty(module.exports, "throw_unmatch_delimiter", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.throw_unmatch_delimiter; } });
Object.defineProperty(module.exports, "throw_invalid_character_literal", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.throw_invalid_character_literal; } });
Object.defineProperty(module.exports, "throw_invalid_unicode_char", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.throw_invalid_unicode_char; } });
Object.defineProperty(module.exports, "throw_bad_escape_char", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.throw_bad_escape_char; } });
Object.defineProperty(module.exports, "throw_no_dispatch", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.throw_no_dispatch; } });
Object.defineProperty(module.exports, "throw_eof_at_start", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.throw_eof_at_start; } });
Object.defineProperty(module.exports, "ex_details", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.ex_details; } });
Object.defineProperty(module.exports, "throw_ex", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.throw_ex; } });
Object.defineProperty(module.exports, "throw_invalid", { enumerable: true, get: function() { return cljs.tools.reader.impl.errors.throw_invalid; } });
//# sourceMappingURL=cljs.tools.reader.impl.errors.js.map