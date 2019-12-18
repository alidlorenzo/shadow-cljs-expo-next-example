var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./cljs.core.async.impl.protocols.js");
require("./cljs.core.async.impl.channels.js");
require("./cljs.core.async.impl.buffers.js");
require("./cljs.core.async.impl.timers.js");
require("./cljs.core.async.impl.dispatch.js");
require("./cljs.core.async.impl.ioc_helpers.js");
require("./goog.array.array.js");
var example=$CLJS.example || ($CLJS.example = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});

$CLJS.SHADOW_ENV.setLoaded("cljs.core.async.js");

goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__45979 = arguments.length;
switch (G__45979) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45980 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45980 = (function (f,blockable,meta45981){
this.f = f;
this.blockable = blockable;
this.meta45981 = meta45981;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45982,meta45981__$1){
var self__ = this;
var _45982__$1 = this;
return (new cljs.core.async.t_cljs$core$async45980(self__.f,self__.blockable,meta45981__$1));
}));

(cljs.core.async.t_cljs$core$async45980.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45982){
var self__ = this;
var _45982__$1 = this;
return self__.meta45981;
}));

(cljs.core.async.t_cljs$core$async45980.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45980.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45980.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async45980.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async45980.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta45981","meta45981",1662951861,null)], null);
}));

(cljs.core.async.t_cljs$core$async45980.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45980.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45980");

(cljs.core.async.t_cljs$core$async45980.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async45980");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45980.
 */
cljs.core.async.__GT_t_cljs$core$async45980 = (function cljs$core$async$__GT_t_cljs$core$async45980(f__$1,blockable__$1,meta45981){
return (new cljs.core.async.t_cljs$core$async45980(f__$1,blockable__$1,meta45981));
});

}

return (new cljs.core.async.t_cljs$core$async45980(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__45985 = arguments.length;
switch (G__45985) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__45988 = arguments.length;
switch (G__45988) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__45991 = arguments.length;
switch (G__45991) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_47860 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47860) : fn1.call(null,val_47860));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47860) : fn1.call(null,val_47860));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__45993 = arguments.length;
switch (G__45993) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___47866 = n;
var x_47867 = (0);
while(true){
if((x_47867 < n__4666__auto___47866)){
(a[x_47867] = x_47867);

var G__47868 = (x_47867 + (1));
x_47867 = G__47868;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45995 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45995 = (function (flag,meta45996){
this.flag = flag;
this.meta45996 = meta45996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45997,meta45996__$1){
var self__ = this;
var _45997__$1 = this;
return (new cljs.core.async.t_cljs$core$async45995(self__.flag,meta45996__$1));
}));

(cljs.core.async.t_cljs$core$async45995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45997){
var self__ = this;
var _45997__$1 = this;
return self__.meta45996;
}));

(cljs.core.async.t_cljs$core$async45995.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45995.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45995.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45995.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async45995.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta45996","meta45996",730849529,null)], null);
}));

(cljs.core.async.t_cljs$core$async45995.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45995.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45995");

(cljs.core.async.t_cljs$core$async45995.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async45995");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45995.
 */
cljs.core.async.__GT_t_cljs$core$async45995 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async45995(flag__$1,meta45996){
return (new cljs.core.async.t_cljs$core$async45995(flag__$1,meta45996));
});

}

return (new cljs.core.async.t_cljs$core$async45995(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45998 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45998 = (function (flag,cb,meta45999){
this.flag = flag;
this.cb = cb;
this.meta45999 = meta45999;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46000,meta45999__$1){
var self__ = this;
var _46000__$1 = this;
return (new cljs.core.async.t_cljs$core$async45998(self__.flag,self__.cb,meta45999__$1));
}));

(cljs.core.async.t_cljs$core$async45998.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46000){
var self__ = this;
var _46000__$1 = this;
return self__.meta45999;
}));

(cljs.core.async.t_cljs$core$async45998.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45998.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45998.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45998.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async45998.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta45999","meta45999",-1880504216,null)], null);
}));

(cljs.core.async.t_cljs$core$async45998.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45998.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45998");

(cljs.core.async.t_cljs$core$async45998.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async45998");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45998.
 */
cljs.core.async.__GT_t_cljs$core$async45998 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async45998(flag__$1,cb__$1,meta45999){
return (new cljs.core.async.t_cljs$core$async45998(flag__$1,cb__$1,meta45999));
});

}

return (new cljs.core.async.t_cljs$core$async45998(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46001_SHARP_){
var G__46004 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46001_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46004) : fret.call(null,G__46004));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46002_SHARP_){
var G__46005 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46002_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46005) : fret.call(null,G__46005));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47913 = (i + (1));
i = G__47913;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47914 = arguments.length;
var i__4790__auto___47915 = (0);
while(true){
if((i__4790__auto___47915 < len__4789__auto___47914)){
args__4795__auto__.push((arguments[i__4790__auto___47915]));

var G__47919 = (i__4790__auto___47915 + (1));
i__4790__auto___47915 = G__47919;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46008){
var map__46009 = p__46008;
var map__46009__$1 = (((((!((map__46009 == null))))?(((((map__46009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46009):map__46009);
var opts = map__46009__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46006){
var G__46007 = cljs.core.first(seq46006);
var seq46006__$1 = cljs.core.next(seq46006);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46007,seq46006__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__46012 = arguments.length;
switch (G__46012) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__45916__auto___47937 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45917__auto__ = (function (){var switch__45620__auto__ = (function (state_46037){
var state_val_46038 = (state_46037[(1)]);
if((state_val_46038 === (7))){
var inst_46033 = (state_46037[(2)]);
var state_46037__$1 = state_46037;
var statearr_46040_47941 = state_46037__$1;
(statearr_46040_47941[(2)] = inst_46033);

(statearr_46040_47941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46038 === (1))){
var state_46037__$1 = state_46037;
var statearr_46041_47952 = state_46037__$1;
(statearr_46041_47952[(2)] = null);

(statearr_46041_47952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46038 === (4))){
var inst_46015 = (state_46037[(7)]);
var inst_46015__$1 = (state_46037[(2)]);
var inst_46016 = (inst_46015__$1 == null);
var state_46037__$1 = (function (){var statearr_46042 = state_46037;
(statearr_46042[(7)] = inst_46015__$1);

return statearr_46042;
})();
if(cljs.core.truth_(inst_46016)){
var statearr_46043_47959 = state_46037__$1;
(statearr_46043_47959[(1)] = (5));

} else {
var statearr_46044_47960 = state_46037__$1;
(statearr_46044_47960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46038 === (13))){
var state_46037__$1 = state_46037;
var statearr_46045_47961 = state_46037__$1;
(statearr_46045_47961[(2)] = null);

(statearr_46045_47961[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46038 === (6))){
var inst_46015 = (state_46037[(7)]);
var state_46037__$1 = state_46037;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46037__$1,(11),to,inst_46015);
} else {
if((state_val_46038 === (3))){
var inst_46035 = (state_46037[(2)]);
var state_46037__$1 = state_46037;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46037__$1,inst_46035);
} else {
if((state_val_46038 === (12))){
var state_46037__$1 = state_46037;
var statearr_46046_47974 = state_46037__$1;
(statearr_46046_47974[(2)] = null);

(statearr_46046_47974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46038 === (2))){
var state_46037__$1 = state_46037;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46037__$1,(4),from);
} else {
if((state_val_46038 === (11))){
var inst_46026 = (state_46037[(2)]);
var state_46037__$1 = state_46037;
if(cljs.core.truth_(inst_46026)){
var statearr_46047_47976 = state_46037__$1;
(statearr_46047_47976[(1)] = (12));

} else {
var statearr_46048_47977 = state_46037__$1;
(statearr_46048_47977[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46038 === (9))){
var state_46037__$1 = state_46037;
var statearr_46049_47978 = state_46037__$1;
(statearr_46049_47978[(2)] = null);

(statearr_46049_47978[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46038 === (5))){
var state_46037__$1 = state_46037;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46050_47979 = state_46037__$1;
(statearr_46050_47979[(1)] = (8));

} else {
var statearr_46051_47980 = state_46037__$1;
(statearr_46051_47980[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46038 === (14))){
var inst_46031 = (state_46037[(2)]);
var state_46037__$1 = state_46037;
var statearr_46052_47981 = state_46037__$1;
(statearr_46052_47981[(2)] = inst_46031);

(statearr_46052_47981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46038 === (10))){
var inst_46023 = (state_46037[(2)]);
var state_46037__$1 = state_46037;
var statearr_46053_47982 = state_46037__$1;
(statearr_46053_47982[(2)] = inst_46023);

(statearr_46053_47982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46038 === (8))){
var inst_46019 = cljs.core.async.close_BANG_(to);
var state_46037__$1 = state_46037;
var statearr_46054_47988 = state_46037__$1;
(statearr_46054_47988[(2)] = inst_46019);

(statearr_46054_47988[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45621__auto__ = null;
var cljs$core$async$state_machine__45621__auto____0 = (function (){
var statearr_46055 = [null,null,null,null,null,null,null,null];
(statearr_46055[(0)] = cljs$core$async$state_machine__45621__auto__);

(statearr_46055[(1)] = (1));

return statearr_46055;
});
var cljs$core$async$state_machine__45621__auto____1 = (function (state_46037){
while(true){
var ret_value__45622__auto__ = (function (){try{while(true){
var result__45623__auto__ = switch__45620__auto__(state_46037);
if(cljs.core.keyword_identical_QMARK_(result__45623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45623__auto__;
}
break;
}
}catch (e46056){if((e46056 instanceof Object)){
var ex__45624__auto__ = e46056;
var statearr_46057_48016 = state_46037;
(statearr_46057_48016[(5)] = ex__45624__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46056;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48017 = state_46037;
state_46037 = G__48017;
continue;
} else {
return ret_value__45622__auto__;
}
break;
}
});
cljs$core$async$state_machine__45621__auto__ = function(state_46037){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45621__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45621__auto____1.call(this,state_46037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45621__auto____0;
cljs$core$async$state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45621__auto____1;
return cljs$core$async$state_machine__45621__auto__;
})()
})();
var state__45918__auto__ = (function (){var statearr_46059 = (f__45917__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45917__auto__.cljs$core$IFn$_invoke$arity$0() : f__45917__auto__.call(null));
(statearr_46059[(6)] = c__45916__auto___47937);

return statearr_46059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45918__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__46067){
var vec__46068 = p__46067;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46068,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46068,(1),null);
var job = vec__46068;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__45916__auto___48024 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45917__auto__ = (function (){var switch__45620__auto__ = (function (state_46076){
var state_val_46077 = (state_46076[(1)]);
if((state_val_46077 === (1))){
var state_46076__$1 = state_46076;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46076__$1,(2),res,v);
} else {
if((state_val_46077 === (2))){
var inst_46073 = (state_46076[(2)]);
var inst_46074 = cljs.core.async.close_BANG_(res);
var state_46076__$1 = (function (){var statearr_46081 = state_46076;
(statearr_46081[(7)] = inst_46073);

return statearr_46081;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46076__$1,inst_46074);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45621__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45621__auto____0 = (function (){
var statearr_46083 = [null,null,null,null,null,null,null,null];
(statearr_46083[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45621__auto__);

(statearr_46083[(1)] = (1));

return statearr_46083;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45621__auto____1 = (function (state_46076){
while(true){
var ret_value__45622__auto__ = (function (){try{while(true){
var result__45623__auto__ = switch__45620__auto__(state_46076);
if(cljs.core.keyword_identical_QMARK_(result__45623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45623__auto__;
}
break;
}
}catch (e46084){if((e46084 instanceof Object)){
var ex__45624__auto__ = e46084;
var statearr_46085_48037 = state_46076;
(statearr_46085_48037[(5)] = ex__45624__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46084;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48038 = state_46076;
state_46076 = G__48038;
continue;
} else {
return ret_value__45622__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45621__auto__ = function(state_46076){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45621__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45621__auto____1.call(this,state_46076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45621__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45621__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45621__auto__;
})()
})();
var state__45918__auto__ = (function (){var statearr_46090 = (f__45917__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45917__auto__.cljs$core$IFn$_invoke$arity$0() : f__45917__auto__.call(null));
(statearr_46090[(6)] = c__45916__auto___48024);

return statearr_46090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45918__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__46097){
var vec__46098 = p__46097;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46098,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46098,(1),null);
var job = vec__46098;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___48039 = n;
var __48040 = (0);
while(true){
if((__48040 < n__4666__auto___48039)){
var G__46106_48041 = type;
var G__46106_48042__$1 = (((G__46106_48041 instanceof cljs.core.Keyword))?G__46106_48041.fqn:null);
switch (G__46106_48042__$1) {
case "compute":
var c__45916__auto___48044 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48040,c__45916__auto___48044,G__46106_48041,G__46106_48042__$1,n__4666__auto___48039,jobs,results,process,async){
return (function (){
var f__45917__auto__ = (function (){var switch__45620__auto__ = ((function (__48040,c__45916__auto___48044,G__46106_48041,G__46106_48042__$1,n__4666__auto___48039,jobs,results,process,async){
return (function (state_46119){
var state_val_46120 = (state_46119[(1)]);
if((state_val_46120 === (1))){
var state_46119__$1 = state_46119;
var statearr_46121_48045 = state_46119__$1;
(statearr_46121_48045[(2)] = null);

(statearr_46121_48045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46120 === (2))){
var state_46119__$1 = state_46119;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46119__$1,(4),jobs);
} else {
if((state_val_46120 === (3))){
var inst_46117 = (state_46119[(2)]);
var state_46119__$1 = state_46119;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46119__$1,inst_46117);
} else {
if((state_val_46120 === (4))){
var inst_46109 = (state_46119[(2)]);
var inst_46110 = process(inst_46109);
var state_46119__$1 = state_46119;
if(cljs.core.truth_(inst_46110)){
var statearr_46122_48046 = state_46119__$1;
(statearr_46122_48046[(1)] = (5));

} else {
var statearr_46123_48047 = state_46119__$1;
(statearr_46123_48047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46120 === (5))){
var state_46119__$1 = state_46119;
var statearr_46124_48048 = state_46119__$1;
(statearr_46124_48048[(2)] = null);

(statearr_46124_48048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46120 === (6))){
var state_46119__$1 = state_46119;
var statearr_46125_48049 = state_46119__$1;
(statearr_46125_48049[(2)] = null);

(statearr_46125_48049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46120 === (7))){
var inst_46115 = (state_46119[(2)]);
var state_46119__$1 = state_46119;
var statearr_46126_48050 = state_46119__$1;
(statearr_46126_48050[(2)] = inst_46115);

(statearr_46126_48050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__48040,c__45916__auto___48044,G__46106_48041,G__46106_48042__$1,n__4666__auto___48039,jobs,results,process,async))
;
return ((function (__48040,switch__45620__auto__,c__45916__auto___48044,G__46106_48041,G__46106_48042__$1,n__4666__auto___48039,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45621__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45621__auto____0 = (function (){
var statearr_46127 = [null,null,null,null,null,null,null];
(statearr_46127[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45621__auto__);

(statearr_46127[(1)] = (1));

return statearr_46127;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45621__auto____1 = (function (state_46119){
while(true){
var ret_value__45622__auto__ = (function (){try{while(true){
var result__45623__auto__ = switch__45620__auto__(state_46119);
if(cljs.core.keyword_identical_QMARK_(result__45623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45623__auto__;
}
break;
}
}catch (e46128){if((e46128 instanceof Object)){
var ex__45624__auto__ = e46128;
var statearr_46129_48051 = state_46119;
(statearr_46129_48051[(5)] = ex__45624__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46128;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48058 = state_46119;
state_46119 = G__48058;
continue;
} else {
return ret_value__45622__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45621__auto__ = function(state_46119){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45621__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45621__auto____1.call(this,state_46119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45621__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45621__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45621__auto__;
})()
;})(__48040,switch__45620__auto__,c__45916__auto___48044,G__46106_48041,G__46106_48042__$1,n__4666__auto___48039,jobs,results,process,async))
})();
var state__45918__auto__ = (function (){var statearr_46130 = (f__45917__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45917__auto__.cljs$core$IFn$_invoke$arity$0() : f__45917__auto__.call(null));
(statearr_46130[(6)] = c__45916__auto___48044);

return statearr_46130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45918__auto__);
});})(__48040,c__45916__auto___48044,G__46106_48041,G__46106_48042__$1,n__4666__auto___48039,jobs,results,process,async))
);


break;
case "async":
var c__45916__auto___48059 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48040,c__45916__auto___48059,G__46106_48041,G__46106_48042__$1,n__4666__auto___48039,jobs,results,process,async){
return (function (){
var f__45917__auto__ = (function (){var switch__45620__auto__ = ((function (__48040,c__45916__auto___48059,G__46106_48041,G__46106_48042__$1,n__4666__auto___48039,jobs,results,process,async){
return (function (state_46144){
var state_val_46145 = (state_46144[(1)]);
if((state_val_46145 === (1))){
var state_46144__$1 = state_46144;
var statearr_46147_48060 = state_46144__$1;
(statearr_46147_48060[(2)] = null);

(statearr_46147_48060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46145 === (2))){
var state_46144__$1 = state_46144;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46144__$1,(4),jobs);
} else {
if((state_val_46145 === (3))){
var inst_46142 = (state_46144[(2)]);
var state_46144__$1 = state_46144;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46144__$1,inst_46142);
} else {
if((state_val_46145 === (4))){
var inst_46134 = (state_46144[(2)]);
var inst_46135 = async(inst_46134);
var state_46144__$1 = state_46144;
if(cljs.core.truth_(inst_46135)){
var statearr_46148_48063 = state_46144__$1;
(statearr_46148_48063[(1)] = (5));

} else {
var statearr_46149_48064 = state_46144__$1;
(statearr_46149_48064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46145 === (5))){
var state_46144__$1 = state_46144;
var statearr_46150_48065 = state_46144__$1;
(statearr_46150_48065[(2)] = null);

(statearr_46150_48065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46145 === (6))){
var state_46144__$1 = state_46144;
var statearr_46151_48066 = state_46144__$1;
(statearr_46151_48066[(2)] = null);

(statearr_46151_48066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46145 === (7))){
var inst_46140 = (state_46144[(2)]);
var state_46144__$1 = state_46144;
var statearr_46152_48067 = state_46144__$1;
(statearr_46152_48067[(2)] = inst_46140);

(statearr_46152_48067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__48040,c__45916__auto___48059,G__46106_48041,G__46106_48042__$1,n__4666__auto___48039,jobs,results,process,async))
;
return ((function (__48040,switch__45620__auto__,c__45916__auto___48059,G__46106_48041,G__46106_48042__$1,n__4666__auto___48039,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45621__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45621__auto____0 = (function (){
var statearr_46154 = [null,null,null,null,null,null,null];
(statearr_46154[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45621__auto__);

(statearr_46154[(1)] = (1));

return statearr_46154;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45621__auto____1 = (function (state_46144){
while(true){
var ret_value__45622__auto__ = (function (){try{while(true){
var result__45623__auto__ = switch__45620__auto__(state_46144);
if(cljs.core.keyword_identical_QMARK_(result__45623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45623__auto__;
}
break;
}
}catch (e46155){if((e46155 instanceof Object)){
var ex__45624__auto__ = e46155;
var statearr_46156_48068 = state_46144;
(statearr_46156_48068[(5)] = ex__45624__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46155;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48069 = state_46144;
state_46144 = G__48069;
continue;
} else {
return ret_value__45622__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45621__auto__ = function(state_46144){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45621__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45621__auto____1.call(this,state_46144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45621__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45621__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45621__auto__;
})()
;})(__48040,switch__45620__auto__,c__45916__auto___48059,G__46106_48041,G__46106_48042__$1,n__4666__auto___48039,jobs,results,process,async))
})();
var state__45918__auto__ = (function (){var statearr_46157 = (f__45917__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45917__auto__.cljs$core$IFn$_invoke$arity$0() : f__45917__auto__.call(null));
(statearr_46157[(6)] = c__45916__auto___48059);

return statearr_46157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45918__auto__);
});})(__48040,c__45916__auto___48059,G__46106_48041,G__46106_48042__$1,n__4666__auto___48039,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46106_48042__$1)].join('')));

}

var G__48070 = (__48040 + (1));
__48040 = G__48070;
continue;
} else {
}
break;
}

var c__45916__auto___48071 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45917__auto__ = (function (){var switch__45620__auto__ = (function (state_46179){
var state_val_46180 = (state_46179[(1)]);
if((state_val_46180 === (7))){
var inst_46175 = (state_46179[(2)]);
var state_46179__$1 = state_46179;
var statearr_46183_48072 = state_46179__$1;
(statearr_46183_48072[(2)] = inst_46175);

(statearr_46183_48072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46180 === (1))){
var state_46179__$1 = state_46179;
var statearr_46188_48077 = state_46179__$1;
(statearr_46188_48077[(2)] = null);

(statearr_46188_48077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46180 === (4))){
var inst_46160 = (state_46179[(7)]);
var inst_46160__$1 = (state_46179[(2)]);
var inst_46161 = (inst_46160__$1 == null);
var state_46179__$1 = (function (){var statearr_46190 = state_46179;
(statearr_46190[(7)] = inst_46160__$1);

return statearr_46190;
})();
if(cljs.core.truth_(inst_46161)){
var statearr_46191_48078 = state_46179__$1;
(statearr_46191_48078[(1)] = (5));

} else {
var statearr_46192_48079 = state_46179__$1;
(statearr_46192_48079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46180 === (6))){
var inst_46160 = (state_46179[(7)]);
var inst_46165 = (state_46179[(8)]);
var inst_46165__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_46166 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46167 = [inst_46160,inst_46165__$1];
var inst_46168 = (new cljs.core.PersistentVector(null,2,(5),inst_46166,inst_46167,null));
var state_46179__$1 = (function (){var statearr_46199 = state_46179;
(statearr_46199[(8)] = inst_46165__$1);

return statearr_46199;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46179__$1,(8),jobs,inst_46168);
} else {
if((state_val_46180 === (3))){
var inst_46177 = (state_46179[(2)]);
var state_46179__$1 = state_46179;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46179__$1,inst_46177);
} else {
if((state_val_46180 === (2))){
var state_46179__$1 = state_46179;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46179__$1,(4),from);
} else {
if((state_val_46180 === (9))){
var inst_46172 = (state_46179[(2)]);
var state_46179__$1 = (function (){var statearr_46210 = state_46179;
(statearr_46210[(9)] = inst_46172);

return statearr_46210;
})();
var statearr_46211_48080 = state_46179__$1;
(statearr_46211_48080[(2)] = null);

(statearr_46211_48080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46180 === (5))){
var inst_46163 = cljs.core.async.close_BANG_(jobs);
var state_46179__$1 = state_46179;
var statearr_46212_48081 = state_46179__$1;
(statearr_46212_48081[(2)] = inst_46163);

(statearr_46212_48081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46180 === (8))){
var inst_46165 = (state_46179[(8)]);
var inst_46170 = (state_46179[(2)]);
var state_46179__$1 = (function (){var statearr_46213 = state_46179;
(statearr_46213[(10)] = inst_46170);

return statearr_46213;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46179__$1,(9),results,inst_46165);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45621__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45621__auto____0 = (function (){
var statearr_46214 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46214[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45621__auto__);

(statearr_46214[(1)] = (1));

return statearr_46214;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45621__auto____1 = (function (state_46179){
while(true){
var ret_value__45622__auto__ = (function (){try{while(true){
var result__45623__auto__ = switch__45620__auto__(state_46179);
if(cljs.core.keyword_identical_QMARK_(result__45623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45623__auto__;
}
break;
}
}catch (e46215){if((e46215 instanceof Object)){
var ex__45624__auto__ = e46215;
var statearr_46216_48082 = state_46179;
(statearr_46216_48082[(5)] = ex__45624__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46215;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48083 = state_46179;
state_46179 = G__48083;
continue;
} else {
return ret_value__45622__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45621__auto__ = function(state_46179){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45621__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45621__auto____1.call(this,state_46179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45621__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45621__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45621__auto__;
})()
})();
var state__45918__auto__ = (function (){var statearr_46217 = (f__45917__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45917__auto__.cljs$core$IFn$_invoke$arity$0() : f__45917__auto__.call(null));
(statearr_46217[(6)] = c__45916__auto___48071);

return statearr_46217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45918__auto__);
}));


var c__45916__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45917__auto__ = (function (){var switch__45620__auto__ = (function (state_46255){
var state_val_46256 = (state_46255[(1)]);
if((state_val_46256 === (7))){
var inst_46251 = (state_46255[(2)]);
var state_46255__$1 = state_46255;
var statearr_46257_48084 = state_46255__$1;
(statearr_46257_48084[(2)] = inst_46251);

(statearr_46257_48084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46256 === (20))){
var state_46255__$1 = state_46255;
var statearr_46258_48085 = state_46255__$1;
(statearr_46258_48085[(2)] = null);

(statearr_46258_48085[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46256 === (1))){
var state_46255__$1 = state_46255;
var statearr_46259_48088 = state_46255__$1;
(statearr_46259_48088[(2)] = null);

(statearr_46259_48088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46256 === (4))){
var inst_46220 = (state_46255[(7)]);
var inst_46220__$1 = (state_46255[(2)]);
var inst_46221 = (inst_46220__$1 == null);
var state_46255__$1 = (function (){var statearr_46260 = state_46255;
(statearr_46260[(7)] = inst_46220__$1);

return statearr_46260;
})();
if(cljs.core.truth_(inst_46221)){
var statearr_46261_48089 = state_46255__$1;
(statearr_46261_48089[(1)] = (5));

} else {
var statearr_46262_48090 = state_46255__$1;
(statearr_46262_48090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46256 === (15))){
var inst_46233 = (state_46255[(8)]);
var state_46255__$1 = state_46255;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46255__$1,(18),to,inst_46233);
} else {
if((state_val_46256 === (21))){
var inst_46246 = (state_46255[(2)]);
var state_46255__$1 = state_46255;
var statearr_46263_48091 = state_46255__$1;
(statearr_46263_48091[(2)] = inst_46246);

(statearr_46263_48091[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46256 === (13))){
var inst_46248 = (state_46255[(2)]);
var state_46255__$1 = (function (){var statearr_46264 = state_46255;
(statearr_46264[(9)] = inst_46248);

return statearr_46264;
})();
var statearr_46268_48092 = state_46255__$1;
(statearr_46268_48092[(2)] = null);

(statearr_46268_48092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46256 === (6))){
var inst_46220 = (state_46255[(7)]);
var state_46255__$1 = state_46255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46255__$1,(11),inst_46220);
} else {
if((state_val_46256 === (17))){
var inst_46241 = (state_46255[(2)]);
var state_46255__$1 = state_46255;
if(cljs.core.truth_(inst_46241)){
var statearr_46269_48093 = state_46255__$1;
(statearr_46269_48093[(1)] = (19));

} else {
var statearr_46270_48094 = state_46255__$1;
(statearr_46270_48094[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46256 === (3))){
var inst_46253 = (state_46255[(2)]);
var state_46255__$1 = state_46255;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46255__$1,inst_46253);
} else {
if((state_val_46256 === (12))){
var inst_46230 = (state_46255[(10)]);
var state_46255__$1 = state_46255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46255__$1,(14),inst_46230);
} else {
if((state_val_46256 === (2))){
var state_46255__$1 = state_46255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46255__$1,(4),results);
} else {
if((state_val_46256 === (19))){
var state_46255__$1 = state_46255;
var statearr_46271_48095 = state_46255__$1;
(statearr_46271_48095[(2)] = null);

(statearr_46271_48095[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46256 === (11))){
var inst_46230 = (state_46255[(2)]);
var state_46255__$1 = (function (){var statearr_46272 = state_46255;
(statearr_46272[(10)] = inst_46230);

return statearr_46272;
})();
var statearr_46273_48096 = state_46255__$1;
(statearr_46273_48096[(2)] = null);

(statearr_46273_48096[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46256 === (9))){
var state_46255__$1 = state_46255;
var statearr_46274_48097 = state_46255__$1;
(statearr_46274_48097[(2)] = null);

(statearr_46274_48097[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46256 === (5))){
var state_46255__$1 = state_46255;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46275_48098 = state_46255__$1;
(statearr_46275_48098[(1)] = (8));

} else {
var statearr_46276_48099 = state_46255__$1;
(statearr_46276_48099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46256 === (14))){
var inst_46233 = (state_46255[(8)]);
var inst_46233__$1 = (state_46255[(2)]);
var inst_46234 = (inst_46233__$1 == null);
var inst_46235 = cljs.core.not(inst_46234);
var state_46255__$1 = (function (){var statearr_46282 = state_46255;
(statearr_46282[(8)] = inst_46233__$1);

return statearr_46282;
})();
if(inst_46235){
var statearr_46283_48100 = state_46255__$1;
(statearr_46283_48100[(1)] = (15));

} else {
var statearr_46284_48101 = state_46255__$1;
(statearr_46284_48101[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46256 === (16))){
var state_46255__$1 = state_46255;
var statearr_46285_48102 = state_46255__$1;
(statearr_46285_48102[(2)] = false);

(statearr_46285_48102[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46256 === (10))){
var inst_46227 = (state_46255[(2)]);
var state_46255__$1 = state_46255;
var statearr_46286_48103 = state_46255__$1;
(statearr_46286_48103[(2)] = inst_46227);

(statearr_46286_48103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46256 === (18))){
var inst_46238 = (state_46255[(2)]);
var state_46255__$1 = state_46255;
var statearr_46287_48104 = state_46255__$1;
(statearr_46287_48104[(2)] = inst_46238);

(statearr_46287_48104[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46256 === (8))){
var inst_46224 = cljs.core.async.close_BANG_(to);
var state_46255__$1 = state_46255;
var statearr_46288_48105 = state_46255__$1;
(statearr_46288_48105[(2)] = inst_46224);

(statearr_46288_48105[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45621__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45621__auto____0 = (function (){
var statearr_46289 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46289[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45621__auto__);

(statearr_46289[(1)] = (1));

return statearr_46289;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45621__auto____1 = (function (state_46255){
while(true){
var ret_value__45622__auto__ = (function (){try{while(true){
var result__45623__auto__ = switch__45620__auto__(state_46255);
if(cljs.core.keyword_identical_QMARK_(result__45623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45623__auto__;
}
break;
}
}catch (e46290){if((e46290 instanceof Object)){
var ex__45624__auto__ = e46290;
var statearr_46291_48107 = state_46255;
(statearr_46291_48107[(5)] = ex__45624__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46290;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48108 = state_46255;
state_46255 = G__48108;
continue;
} else {
return ret_value__45622__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45621__auto__ = function(state_46255){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45621__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45621__auto____1.call(this,state_46255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45621__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45621__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45621__auto__;
})()
})();
var state__45918__auto__ = (function (){var statearr_46292 = (f__45917__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45917__auto__.cljs$core$IFn$_invoke$arity$0() : f__45917__auto__.call(null));
(statearr_46292[(6)] = c__45916__auto__);

return statearr_46292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45918__auto__);
}));

return c__45916__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__46294 = arguments.length;
switch (G__46294) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__46299 = arguments.length;
switch (G__46299) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__46307 = arguments.length;
switch (G__46307) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__45916__auto___48136 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45917__auto__ = (function (){var switch__45620__auto__ = (function (state_46337){
var state_val_46338 = (state_46337[(1)]);
if((state_val_46338 === (7))){
var inst_46332 = (state_46337[(2)]);
var state_46337__$1 = state_46337;
var statearr_46341_48137 = state_46337__$1;
(statearr_46341_48137[(2)] = inst_46332);

(statearr_46341_48137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46338 === (1))){
var state_46337__$1 = state_46337;
var statearr_46342_48138 = state_46337__$1;
(statearr_46342_48138[(2)] = null);

(statearr_46342_48138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46338 === (4))){
var inst_46313 = (state_46337[(7)]);
var inst_46313__$1 = (state_46337[(2)]);
var inst_46314 = (inst_46313__$1 == null);
var state_46337__$1 = (function (){var statearr_46343 = state_46337;
(statearr_46343[(7)] = inst_46313__$1);

return statearr_46343;
})();
if(cljs.core.truth_(inst_46314)){
var statearr_46344_48139 = state_46337__$1;
(statearr_46344_48139[(1)] = (5));

} else {
var statearr_46345_48140 = state_46337__$1;
(statearr_46345_48140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46338 === (13))){
var state_46337__$1 = state_46337;
var statearr_46346_48141 = state_46337__$1;
(statearr_46346_48141[(2)] = null);

(statearr_46346_48141[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46338 === (6))){
var inst_46313 = (state_46337[(7)]);
var inst_46319 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46313) : p.call(null,inst_46313));
var state_46337__$1 = state_46337;
if(cljs.core.truth_(inst_46319)){
var statearr_46347_48142 = state_46337__$1;
(statearr_46347_48142[(1)] = (9));

} else {
var statearr_46348_48143 = state_46337__$1;
(statearr_46348_48143[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46338 === (3))){
var inst_46334 = (state_46337[(2)]);
var state_46337__$1 = state_46337;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46337__$1,inst_46334);
} else {
if((state_val_46338 === (12))){
var state_46337__$1 = state_46337;
var statearr_46349_48144 = state_46337__$1;
(statearr_46349_48144[(2)] = null);

(statearr_46349_48144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46338 === (2))){
var state_46337__$1 = state_46337;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46337__$1,(4),ch);
} else {
if((state_val_46338 === (11))){
var inst_46313 = (state_46337[(7)]);
var inst_46323 = (state_46337[(2)]);
var state_46337__$1 = state_46337;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46337__$1,(8),inst_46323,inst_46313);
} else {
if((state_val_46338 === (9))){
var state_46337__$1 = state_46337;
var statearr_46351_48145 = state_46337__$1;
(statearr_46351_48145[(2)] = tc);

(statearr_46351_48145[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46338 === (5))){
var inst_46316 = cljs.core.async.close_BANG_(tc);
var inst_46317 = cljs.core.async.close_BANG_(fc);
var state_46337__$1 = (function (){var statearr_46352 = state_46337;
(statearr_46352[(8)] = inst_46316);

return statearr_46352;
})();
var statearr_46353_48146 = state_46337__$1;
(statearr_46353_48146[(2)] = inst_46317);

(statearr_46353_48146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46338 === (14))){
var inst_46330 = (state_46337[(2)]);
var state_46337__$1 = state_46337;
var statearr_46354_48147 = state_46337__$1;
(statearr_46354_48147[(2)] = inst_46330);

(statearr_46354_48147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46338 === (10))){
var state_46337__$1 = state_46337;
var statearr_46355_48148 = state_46337__$1;
(statearr_46355_48148[(2)] = fc);

(statearr_46355_48148[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46338 === (8))){
var inst_46325 = (state_46337[(2)]);
var state_46337__$1 = state_46337;
if(cljs.core.truth_(inst_46325)){
var statearr_46356_48149 = state_46337__$1;
(statearr_46356_48149[(1)] = (12));

} else {
var statearr_46357_48150 = state_46337__$1;
(statearr_46357_48150[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45621__auto__ = null;
var cljs$core$async$state_machine__45621__auto____0 = (function (){
var statearr_46358 = [null,null,null,null,null,null,null,null,null];
(statearr_46358[(0)] = cljs$core$async$state_machine__45621__auto__);

(statearr_46358[(1)] = (1));

return statearr_46358;
});
var cljs$core$async$state_machine__45621__auto____1 = (function (state_46337){
while(true){
var ret_value__45622__auto__ = (function (){try{while(true){
var result__45623__auto__ = switch__45620__auto__(state_46337);
if(cljs.core.keyword_identical_QMARK_(result__45623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45623__auto__;
}
break;
}
}catch (e46359){if((e46359 instanceof Object)){
var ex__45624__auto__ = e46359;
var statearr_46360_48156 = state_46337;
(statearr_46360_48156[(5)] = ex__45624__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46359;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48158 = state_46337;
state_46337 = G__48158;
continue;
} else {
return ret_value__45622__auto__;
}
break;
}
});
cljs$core$async$state_machine__45621__auto__ = function(state_46337){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45621__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45621__auto____1.call(this,state_46337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45621__auto____0;
cljs$core$async$state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45621__auto____1;
return cljs$core$async$state_machine__45621__auto__;
})()
})();
var state__45918__auto__ = (function (){var statearr_46361 = (f__45917__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45917__auto__.cljs$core$IFn$_invoke$arity$0() : f__45917__auto__.call(null));
(statearr_46361[(6)] = c__45916__auto___48136);

return statearr_46361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45918__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__45916__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45917__auto__ = (function (){var switch__45620__auto__ = (function (state_46382){
var state_val_46383 = (state_46382[(1)]);
if((state_val_46383 === (7))){
var inst_46378 = (state_46382[(2)]);
var state_46382__$1 = state_46382;
var statearr_46384_48165 = state_46382__$1;
(statearr_46384_48165[(2)] = inst_46378);

(statearr_46384_48165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46383 === (1))){
var inst_46362 = init;
var state_46382__$1 = (function (){var statearr_46385 = state_46382;
(statearr_46385[(7)] = inst_46362);

return statearr_46385;
})();
var statearr_46386_48166 = state_46382__$1;
(statearr_46386_48166[(2)] = null);

(statearr_46386_48166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46383 === (4))){
var inst_46365 = (state_46382[(8)]);
var inst_46365__$1 = (state_46382[(2)]);
var inst_46366 = (inst_46365__$1 == null);
var state_46382__$1 = (function (){var statearr_46387 = state_46382;
(statearr_46387[(8)] = inst_46365__$1);

return statearr_46387;
})();
if(cljs.core.truth_(inst_46366)){
var statearr_46388_48167 = state_46382__$1;
(statearr_46388_48167[(1)] = (5));

} else {
var statearr_46389_48170 = state_46382__$1;
(statearr_46389_48170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46383 === (6))){
var inst_46362 = (state_46382[(7)]);
var inst_46369 = (state_46382[(9)]);
var inst_46365 = (state_46382[(8)]);
var inst_46369__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_46362,inst_46365) : f.call(null,inst_46362,inst_46365));
var inst_46370 = cljs.core.reduced_QMARK_(inst_46369__$1);
var state_46382__$1 = (function (){var statearr_46390 = state_46382;
(statearr_46390[(9)] = inst_46369__$1);

return statearr_46390;
})();
if(inst_46370){
var statearr_46391_48183 = state_46382__$1;
(statearr_46391_48183[(1)] = (8));

} else {
var statearr_46392_48184 = state_46382__$1;
(statearr_46392_48184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46383 === (3))){
var inst_46380 = (state_46382[(2)]);
var state_46382__$1 = state_46382;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46382__$1,inst_46380);
} else {
if((state_val_46383 === (2))){
var state_46382__$1 = state_46382;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46382__$1,(4),ch);
} else {
if((state_val_46383 === (9))){
var inst_46369 = (state_46382[(9)]);
var inst_46362 = inst_46369;
var state_46382__$1 = (function (){var statearr_46393 = state_46382;
(statearr_46393[(7)] = inst_46362);

return statearr_46393;
})();
var statearr_46395_48188 = state_46382__$1;
(statearr_46395_48188[(2)] = null);

(statearr_46395_48188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46383 === (5))){
var inst_46362 = (state_46382[(7)]);
var state_46382__$1 = state_46382;
var statearr_46396_48189 = state_46382__$1;
(statearr_46396_48189[(2)] = inst_46362);

(statearr_46396_48189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46383 === (10))){
var inst_46376 = (state_46382[(2)]);
var state_46382__$1 = state_46382;
var statearr_46397_48190 = state_46382__$1;
(statearr_46397_48190[(2)] = inst_46376);

(statearr_46397_48190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46383 === (8))){
var inst_46369 = (state_46382[(9)]);
var inst_46372 = cljs.core.deref(inst_46369);
var state_46382__$1 = state_46382;
var statearr_46398_48200 = state_46382__$1;
(statearr_46398_48200[(2)] = inst_46372);

(statearr_46398_48200[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__45621__auto__ = null;
var cljs$core$async$reduce_$_state_machine__45621__auto____0 = (function (){
var statearr_46399 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46399[(0)] = cljs$core$async$reduce_$_state_machine__45621__auto__);

(statearr_46399[(1)] = (1));

return statearr_46399;
});
var cljs$core$async$reduce_$_state_machine__45621__auto____1 = (function (state_46382){
while(true){
var ret_value__45622__auto__ = (function (){try{while(true){
var result__45623__auto__ = switch__45620__auto__(state_46382);
if(cljs.core.keyword_identical_QMARK_(result__45623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45623__auto__;
}
break;
}
}catch (e46400){if((e46400 instanceof Object)){
var ex__45624__auto__ = e46400;
var statearr_46401_48201 = state_46382;
(statearr_46401_48201[(5)] = ex__45624__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46400;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48202 = state_46382;
state_46382 = G__48202;
continue;
} else {
return ret_value__45622__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__45621__auto__ = function(state_46382){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__45621__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__45621__auto____1.call(this,state_46382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__45621__auto____0;
cljs$core$async$reduce_$_state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__45621__auto____1;
return cljs$core$async$reduce_$_state_machine__45621__auto__;
})()
})();
var state__45918__auto__ = (function (){var statearr_46402 = (f__45917__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45917__auto__.cljs$core$IFn$_invoke$arity$0() : f__45917__auto__.call(null));
(statearr_46402[(6)] = c__45916__auto__);

return statearr_46402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45918__auto__);
}));

return c__45916__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__45916__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45917__auto__ = (function (){var switch__45620__auto__ = (function (state_46408){
var state_val_46409 = (state_46408[(1)]);
if((state_val_46409 === (1))){
var inst_46403 = cljs.core.async.reduce(f__$1,init,ch);
var state_46408__$1 = state_46408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46408__$1,(2),inst_46403);
} else {
if((state_val_46409 === (2))){
var inst_46405 = (state_46408[(2)]);
var inst_46406 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_46405) : f__$1.call(null,inst_46405));
var state_46408__$1 = state_46408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46408__$1,inst_46406);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__45621__auto__ = null;
var cljs$core$async$transduce_$_state_machine__45621__auto____0 = (function (){
var statearr_46410 = [null,null,null,null,null,null,null];
(statearr_46410[(0)] = cljs$core$async$transduce_$_state_machine__45621__auto__);

(statearr_46410[(1)] = (1));

return statearr_46410;
});
var cljs$core$async$transduce_$_state_machine__45621__auto____1 = (function (state_46408){
while(true){
var ret_value__45622__auto__ = (function (){try{while(true){
var result__45623__auto__ = switch__45620__auto__(state_46408);
if(cljs.core.keyword_identical_QMARK_(result__45623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45623__auto__;
}
break;
}
}catch (e46411){if((e46411 instanceof Object)){
var ex__45624__auto__ = e46411;
var statearr_46412_48204 = state_46408;
(statearr_46412_48204[(5)] = ex__45624__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46411;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48206 = state_46408;
state_46408 = G__48206;
continue;
} else {
return ret_value__45622__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__45621__auto__ = function(state_46408){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__45621__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__45621__auto____1.call(this,state_46408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__45621__auto____0;
cljs$core$async$transduce_$_state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__45621__auto____1;
return cljs$core$async$transduce_$_state_machine__45621__auto__;
})()
})();
var state__45918__auto__ = (function (){var statearr_46413 = (f__45917__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45917__auto__.cljs$core$IFn$_invoke$arity$0() : f__45917__auto__.call(null));
(statearr_46413[(6)] = c__45916__auto__);

return statearr_46413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45918__auto__);
}));

return c__45916__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__46415 = arguments.length;
switch (G__46415) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__45916__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45917__auto__ = (function (){var switch__45620__auto__ = (function (state_46440){
var state_val_46441 = (state_46440[(1)]);
if((state_val_46441 === (7))){
var inst_46422 = (state_46440[(2)]);
var state_46440__$1 = state_46440;
var statearr_46442_48211 = state_46440__$1;
(statearr_46442_48211[(2)] = inst_46422);

(statearr_46442_48211[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46441 === (1))){
var inst_46416 = cljs.core.seq(coll);
var inst_46417 = inst_46416;
var state_46440__$1 = (function (){var statearr_46443 = state_46440;
(statearr_46443[(7)] = inst_46417);

return statearr_46443;
})();
var statearr_46444_48212 = state_46440__$1;
(statearr_46444_48212[(2)] = null);

(statearr_46444_48212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46441 === (4))){
var inst_46417 = (state_46440[(7)]);
var inst_46420 = cljs.core.first(inst_46417);
var state_46440__$1 = state_46440;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46440__$1,(7),ch,inst_46420);
} else {
if((state_val_46441 === (13))){
var inst_46434 = (state_46440[(2)]);
var state_46440__$1 = state_46440;
var statearr_46445_48213 = state_46440__$1;
(statearr_46445_48213[(2)] = inst_46434);

(statearr_46445_48213[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46441 === (6))){
var inst_46425 = (state_46440[(2)]);
var state_46440__$1 = state_46440;
if(cljs.core.truth_(inst_46425)){
var statearr_46446_48214 = state_46440__$1;
(statearr_46446_48214[(1)] = (8));

} else {
var statearr_46447_48215 = state_46440__$1;
(statearr_46447_48215[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46441 === (3))){
var inst_46438 = (state_46440[(2)]);
var state_46440__$1 = state_46440;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46440__$1,inst_46438);
} else {
if((state_val_46441 === (12))){
var state_46440__$1 = state_46440;
var statearr_46448_48216 = state_46440__$1;
(statearr_46448_48216[(2)] = null);

(statearr_46448_48216[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46441 === (2))){
var inst_46417 = (state_46440[(7)]);
var state_46440__$1 = state_46440;
if(cljs.core.truth_(inst_46417)){
var statearr_46449_48217 = state_46440__$1;
(statearr_46449_48217[(1)] = (4));

} else {
var statearr_46450_48218 = state_46440__$1;
(statearr_46450_48218[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46441 === (11))){
var inst_46431 = cljs.core.async.close_BANG_(ch);
var state_46440__$1 = state_46440;
var statearr_46451_48219 = state_46440__$1;
(statearr_46451_48219[(2)] = inst_46431);

(statearr_46451_48219[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46441 === (9))){
var state_46440__$1 = state_46440;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46452_48220 = state_46440__$1;
(statearr_46452_48220[(1)] = (11));

} else {
var statearr_46453_48221 = state_46440__$1;
(statearr_46453_48221[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46441 === (5))){
var inst_46417 = (state_46440[(7)]);
var state_46440__$1 = state_46440;
var statearr_46454_48222 = state_46440__$1;
(statearr_46454_48222[(2)] = inst_46417);

(statearr_46454_48222[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46441 === (10))){
var inst_46436 = (state_46440[(2)]);
var state_46440__$1 = state_46440;
var statearr_46455_48227 = state_46440__$1;
(statearr_46455_48227[(2)] = inst_46436);

(statearr_46455_48227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46441 === (8))){
var inst_46417 = (state_46440[(7)]);
var inst_46427 = cljs.core.next(inst_46417);
var inst_46417__$1 = inst_46427;
var state_46440__$1 = (function (){var statearr_46456 = state_46440;
(statearr_46456[(7)] = inst_46417__$1);

return statearr_46456;
})();
var statearr_46457_48232 = state_46440__$1;
(statearr_46457_48232[(2)] = null);

(statearr_46457_48232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45621__auto__ = null;
var cljs$core$async$state_machine__45621__auto____0 = (function (){
var statearr_46458 = [null,null,null,null,null,null,null,null];
(statearr_46458[(0)] = cljs$core$async$state_machine__45621__auto__);

(statearr_46458[(1)] = (1));

return statearr_46458;
});
var cljs$core$async$state_machine__45621__auto____1 = (function (state_46440){
while(true){
var ret_value__45622__auto__ = (function (){try{while(true){
var result__45623__auto__ = switch__45620__auto__(state_46440);
if(cljs.core.keyword_identical_QMARK_(result__45623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45623__auto__;
}
break;
}
}catch (e46459){if((e46459 instanceof Object)){
var ex__45624__auto__ = e46459;
var statearr_46460_48233 = state_46440;
(statearr_46460_48233[(5)] = ex__45624__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46459;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48234 = state_46440;
state_46440 = G__48234;
continue;
} else {
return ret_value__45622__auto__;
}
break;
}
});
cljs$core$async$state_machine__45621__auto__ = function(state_46440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45621__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45621__auto____1.call(this,state_46440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45621__auto____0;
cljs$core$async$state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45621__auto____1;
return cljs$core$async$state_machine__45621__auto__;
})()
})();
var state__45918__auto__ = (function (){var statearr_46461 = (f__45917__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45917__auto__.cljs$core$IFn$_invoke$arity$0() : f__45917__auto__.call(null));
(statearr_46461[(6)] = c__45916__auto__);

return statearr_46461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45918__auto__);
}));

return c__45916__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46476 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46476 = (function (ch,cs,meta46477){
this.ch = ch;
this.cs = cs;
this.meta46477 = meta46477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46478,meta46477__$1){
var self__ = this;
var _46478__$1 = this;
return (new cljs.core.async.t_cljs$core$async46476(self__.ch,self__.cs,meta46477__$1));
}));

(cljs.core.async.t_cljs$core$async46476.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46478){
var self__ = this;
var _46478__$1 = this;
return self__.meta46477;
}));

(cljs.core.async.t_cljs$core$async46476.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46476.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46476.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46476.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async46476.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async46476.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async46476.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46477","meta46477",47357897,null)], null);
}));

(cljs.core.async.t_cljs$core$async46476.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46476.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46476");

(cljs.core.async.t_cljs$core$async46476.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46476");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46476.
 */
cljs.core.async.__GT_t_cljs$core$async46476 = (function cljs$core$async$mult_$___GT_t_cljs$core$async46476(ch__$1,cs__$1,meta46477){
return (new cljs.core.async.t_cljs$core$async46476(ch__$1,cs__$1,meta46477));
});

}

return (new cljs.core.async.t_cljs$core$async46476(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__45916__auto___48254 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45917__auto__ = (function (){var switch__45620__auto__ = (function (state_46631){
var state_val_46632 = (state_46631[(1)]);
if((state_val_46632 === (7))){
var inst_46627 = (state_46631[(2)]);
var state_46631__$1 = state_46631;
var statearr_46633_48257 = state_46631__$1;
(statearr_46633_48257[(2)] = inst_46627);

(statearr_46633_48257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (20))){
var inst_46528 = (state_46631[(7)]);
var inst_46540 = cljs.core.first(inst_46528);
var inst_46541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46540,(0),null);
var inst_46542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46540,(1),null);
var state_46631__$1 = (function (){var statearr_46634 = state_46631;
(statearr_46634[(8)] = inst_46541);

return statearr_46634;
})();
if(cljs.core.truth_(inst_46542)){
var statearr_46635_48261 = state_46631__$1;
(statearr_46635_48261[(1)] = (22));

} else {
var statearr_46636_48263 = state_46631__$1;
(statearr_46636_48263[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (27))){
var inst_46577 = (state_46631[(9)]);
var inst_46570 = (state_46631[(10)]);
var inst_46572 = (state_46631[(11)]);
var inst_46497 = (state_46631[(12)]);
var inst_46577__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46570,inst_46572);
var inst_46578 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46577__$1,inst_46497,done);
var state_46631__$1 = (function (){var statearr_46638 = state_46631;
(statearr_46638[(9)] = inst_46577__$1);

return statearr_46638;
})();
if(cljs.core.truth_(inst_46578)){
var statearr_46639_48264 = state_46631__$1;
(statearr_46639_48264[(1)] = (30));

} else {
var statearr_46640_48265 = state_46631__$1;
(statearr_46640_48265[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (1))){
var state_46631__$1 = state_46631;
var statearr_46641_48266 = state_46631__$1;
(statearr_46641_48266[(2)] = null);

(statearr_46641_48266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (24))){
var inst_46528 = (state_46631[(7)]);
var inst_46547 = (state_46631[(2)]);
var inst_46548 = cljs.core.next(inst_46528);
var inst_46506 = inst_46548;
var inst_46507 = null;
var inst_46508 = (0);
var inst_46509 = (0);
var state_46631__$1 = (function (){var statearr_46642 = state_46631;
(statearr_46642[(13)] = inst_46507);

(statearr_46642[(14)] = inst_46508);

(statearr_46642[(15)] = inst_46547);

(statearr_46642[(16)] = inst_46506);

(statearr_46642[(17)] = inst_46509);

return statearr_46642;
})();
var statearr_46643_48267 = state_46631__$1;
(statearr_46643_48267[(2)] = null);

(statearr_46643_48267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (39))){
var state_46631__$1 = state_46631;
var statearr_46647_48271 = state_46631__$1;
(statearr_46647_48271[(2)] = null);

(statearr_46647_48271[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (4))){
var inst_46497 = (state_46631[(12)]);
var inst_46497__$1 = (state_46631[(2)]);
var inst_46498 = (inst_46497__$1 == null);
var state_46631__$1 = (function (){var statearr_46648 = state_46631;
(statearr_46648[(12)] = inst_46497__$1);

return statearr_46648;
})();
if(cljs.core.truth_(inst_46498)){
var statearr_46649_48273 = state_46631__$1;
(statearr_46649_48273[(1)] = (5));

} else {
var statearr_46650_48274 = state_46631__$1;
(statearr_46650_48274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (15))){
var inst_46507 = (state_46631[(13)]);
var inst_46508 = (state_46631[(14)]);
var inst_46506 = (state_46631[(16)]);
var inst_46509 = (state_46631[(17)]);
var inst_46524 = (state_46631[(2)]);
var inst_46525 = (inst_46509 + (1));
var tmp46644 = inst_46507;
var tmp46645 = inst_46508;
var tmp46646 = inst_46506;
var inst_46506__$1 = tmp46646;
var inst_46507__$1 = tmp46644;
var inst_46508__$1 = tmp46645;
var inst_46509__$1 = inst_46525;
var state_46631__$1 = (function (){var statearr_46651 = state_46631;
(statearr_46651[(18)] = inst_46524);

(statearr_46651[(13)] = inst_46507__$1);

(statearr_46651[(14)] = inst_46508__$1);

(statearr_46651[(16)] = inst_46506__$1);

(statearr_46651[(17)] = inst_46509__$1);

return statearr_46651;
})();
var statearr_46652_48277 = state_46631__$1;
(statearr_46652_48277[(2)] = null);

(statearr_46652_48277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (21))){
var inst_46551 = (state_46631[(2)]);
var state_46631__$1 = state_46631;
var statearr_46656_48281 = state_46631__$1;
(statearr_46656_48281[(2)] = inst_46551);

(statearr_46656_48281[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (31))){
var inst_46577 = (state_46631[(9)]);
var inst_46581 = done(null);
var inst_46582 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46577);
var state_46631__$1 = (function (){var statearr_46657 = state_46631;
(statearr_46657[(19)] = inst_46581);

return statearr_46657;
})();
var statearr_46658_48282 = state_46631__$1;
(statearr_46658_48282[(2)] = inst_46582);

(statearr_46658_48282[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (32))){
var inst_46571 = (state_46631[(20)]);
var inst_46569 = (state_46631[(21)]);
var inst_46570 = (state_46631[(10)]);
var inst_46572 = (state_46631[(11)]);
var inst_46584 = (state_46631[(2)]);
var inst_46585 = (inst_46572 + (1));
var tmp46653 = inst_46571;
var tmp46654 = inst_46569;
var tmp46655 = inst_46570;
var inst_46569__$1 = tmp46654;
var inst_46570__$1 = tmp46655;
var inst_46571__$1 = tmp46653;
var inst_46572__$1 = inst_46585;
var state_46631__$1 = (function (){var statearr_46659 = state_46631;
(statearr_46659[(20)] = inst_46571__$1);

(statearr_46659[(22)] = inst_46584);

(statearr_46659[(21)] = inst_46569__$1);

(statearr_46659[(10)] = inst_46570__$1);

(statearr_46659[(11)] = inst_46572__$1);

return statearr_46659;
})();
var statearr_46660_48283 = state_46631__$1;
(statearr_46660_48283[(2)] = null);

(statearr_46660_48283[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (40))){
var inst_46597 = (state_46631[(23)]);
var inst_46601 = done(null);
var inst_46602 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46597);
var state_46631__$1 = (function (){var statearr_46661 = state_46631;
(statearr_46661[(24)] = inst_46601);

return statearr_46661;
})();
var statearr_46662_48284 = state_46631__$1;
(statearr_46662_48284[(2)] = inst_46602);

(statearr_46662_48284[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (33))){
var inst_46588 = (state_46631[(25)]);
var inst_46590 = cljs.core.chunked_seq_QMARK_(inst_46588);
var state_46631__$1 = state_46631;
if(inst_46590){
var statearr_46663_48291 = state_46631__$1;
(statearr_46663_48291[(1)] = (36));

} else {
var statearr_46664_48292 = state_46631__$1;
(statearr_46664_48292[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (13))){
var inst_46518 = (state_46631[(26)]);
var inst_46521 = cljs.core.async.close_BANG_(inst_46518);
var state_46631__$1 = state_46631;
var statearr_46665_48293 = state_46631__$1;
(statearr_46665_48293[(2)] = inst_46521);

(statearr_46665_48293[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (22))){
var inst_46541 = (state_46631[(8)]);
var inst_46544 = cljs.core.async.close_BANG_(inst_46541);
var state_46631__$1 = state_46631;
var statearr_46666_48294 = state_46631__$1;
(statearr_46666_48294[(2)] = inst_46544);

(statearr_46666_48294[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (36))){
var inst_46588 = (state_46631[(25)]);
var inst_46592 = cljs.core.chunk_first(inst_46588);
var inst_46593 = cljs.core.chunk_rest(inst_46588);
var inst_46594 = cljs.core.count(inst_46592);
var inst_46569 = inst_46593;
var inst_46570 = inst_46592;
var inst_46571 = inst_46594;
var inst_46572 = (0);
var state_46631__$1 = (function (){var statearr_46667 = state_46631;
(statearr_46667[(20)] = inst_46571);

(statearr_46667[(21)] = inst_46569);

(statearr_46667[(10)] = inst_46570);

(statearr_46667[(11)] = inst_46572);

return statearr_46667;
})();
var statearr_46668_48303 = state_46631__$1;
(statearr_46668_48303[(2)] = null);

(statearr_46668_48303[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (41))){
var inst_46588 = (state_46631[(25)]);
var inst_46604 = (state_46631[(2)]);
var inst_46605 = cljs.core.next(inst_46588);
var inst_46569 = inst_46605;
var inst_46570 = null;
var inst_46571 = (0);
var inst_46572 = (0);
var state_46631__$1 = (function (){var statearr_46669 = state_46631;
(statearr_46669[(27)] = inst_46604);

(statearr_46669[(20)] = inst_46571);

(statearr_46669[(21)] = inst_46569);

(statearr_46669[(10)] = inst_46570);

(statearr_46669[(11)] = inst_46572);

return statearr_46669;
})();
var statearr_46670_48304 = state_46631__$1;
(statearr_46670_48304[(2)] = null);

(statearr_46670_48304[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (43))){
var state_46631__$1 = state_46631;
var statearr_46671_48305 = state_46631__$1;
(statearr_46671_48305[(2)] = null);

(statearr_46671_48305[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (29))){
var inst_46613 = (state_46631[(2)]);
var state_46631__$1 = state_46631;
var statearr_46672_48309 = state_46631__$1;
(statearr_46672_48309[(2)] = inst_46613);

(statearr_46672_48309[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (44))){
var inst_46624 = (state_46631[(2)]);
var state_46631__$1 = (function (){var statearr_46673 = state_46631;
(statearr_46673[(28)] = inst_46624);

return statearr_46673;
})();
var statearr_46674_48311 = state_46631__$1;
(statearr_46674_48311[(2)] = null);

(statearr_46674_48311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (6))){
var inst_46561 = (state_46631[(29)]);
var inst_46560 = cljs.core.deref(cs);
var inst_46561__$1 = cljs.core.keys(inst_46560);
var inst_46562 = cljs.core.count(inst_46561__$1);
var inst_46563 = cljs.core.reset_BANG_(dctr,inst_46562);
var inst_46568 = cljs.core.seq(inst_46561__$1);
var inst_46569 = inst_46568;
var inst_46570 = null;
var inst_46571 = (0);
var inst_46572 = (0);
var state_46631__$1 = (function (){var statearr_46675 = state_46631;
(statearr_46675[(29)] = inst_46561__$1);

(statearr_46675[(20)] = inst_46571);

(statearr_46675[(21)] = inst_46569);

(statearr_46675[(30)] = inst_46563);

(statearr_46675[(10)] = inst_46570);

(statearr_46675[(11)] = inst_46572);

return statearr_46675;
})();
var statearr_46676_48324 = state_46631__$1;
(statearr_46676_48324[(2)] = null);

(statearr_46676_48324[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (28))){
var inst_46569 = (state_46631[(21)]);
var inst_46588 = (state_46631[(25)]);
var inst_46588__$1 = cljs.core.seq(inst_46569);
var state_46631__$1 = (function (){var statearr_46677 = state_46631;
(statearr_46677[(25)] = inst_46588__$1);

return statearr_46677;
})();
if(inst_46588__$1){
var statearr_46678_48325 = state_46631__$1;
(statearr_46678_48325[(1)] = (33));

} else {
var statearr_46679_48326 = state_46631__$1;
(statearr_46679_48326[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (25))){
var inst_46571 = (state_46631[(20)]);
var inst_46572 = (state_46631[(11)]);
var inst_46574 = (inst_46572 < inst_46571);
var inst_46575 = inst_46574;
var state_46631__$1 = state_46631;
if(cljs.core.truth_(inst_46575)){
var statearr_46680_48327 = state_46631__$1;
(statearr_46680_48327[(1)] = (27));

} else {
var statearr_46681_48328 = state_46631__$1;
(statearr_46681_48328[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (34))){
var state_46631__$1 = state_46631;
var statearr_46682_48329 = state_46631__$1;
(statearr_46682_48329[(2)] = null);

(statearr_46682_48329[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (17))){
var state_46631__$1 = state_46631;
var statearr_46683_48330 = state_46631__$1;
(statearr_46683_48330[(2)] = null);

(statearr_46683_48330[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (3))){
var inst_46629 = (state_46631[(2)]);
var state_46631__$1 = state_46631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46631__$1,inst_46629);
} else {
if((state_val_46632 === (12))){
var inst_46556 = (state_46631[(2)]);
var state_46631__$1 = state_46631;
var statearr_46684_48331 = state_46631__$1;
(statearr_46684_48331[(2)] = inst_46556);

(statearr_46684_48331[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (2))){
var state_46631__$1 = state_46631;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46631__$1,(4),ch);
} else {
if((state_val_46632 === (23))){
var state_46631__$1 = state_46631;
var statearr_46685_48332 = state_46631__$1;
(statearr_46685_48332[(2)] = null);

(statearr_46685_48332[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (35))){
var inst_46611 = (state_46631[(2)]);
var state_46631__$1 = state_46631;
var statearr_46686_48334 = state_46631__$1;
(statearr_46686_48334[(2)] = inst_46611);

(statearr_46686_48334[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (19))){
var inst_46528 = (state_46631[(7)]);
var inst_46532 = cljs.core.chunk_first(inst_46528);
var inst_46533 = cljs.core.chunk_rest(inst_46528);
var inst_46534 = cljs.core.count(inst_46532);
var inst_46506 = inst_46533;
var inst_46507 = inst_46532;
var inst_46508 = inst_46534;
var inst_46509 = (0);
var state_46631__$1 = (function (){var statearr_46687 = state_46631;
(statearr_46687[(13)] = inst_46507);

(statearr_46687[(14)] = inst_46508);

(statearr_46687[(16)] = inst_46506);

(statearr_46687[(17)] = inst_46509);

return statearr_46687;
})();
var statearr_46688_48343 = state_46631__$1;
(statearr_46688_48343[(2)] = null);

(statearr_46688_48343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (11))){
var inst_46528 = (state_46631[(7)]);
var inst_46506 = (state_46631[(16)]);
var inst_46528__$1 = cljs.core.seq(inst_46506);
var state_46631__$1 = (function (){var statearr_46689 = state_46631;
(statearr_46689[(7)] = inst_46528__$1);

return statearr_46689;
})();
if(inst_46528__$1){
var statearr_46690_48345 = state_46631__$1;
(statearr_46690_48345[(1)] = (16));

} else {
var statearr_46691_48346 = state_46631__$1;
(statearr_46691_48346[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (9))){
var inst_46558 = (state_46631[(2)]);
var state_46631__$1 = state_46631;
var statearr_46692_48347 = state_46631__$1;
(statearr_46692_48347[(2)] = inst_46558);

(statearr_46692_48347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (5))){
var inst_46504 = cljs.core.deref(cs);
var inst_46505 = cljs.core.seq(inst_46504);
var inst_46506 = inst_46505;
var inst_46507 = null;
var inst_46508 = (0);
var inst_46509 = (0);
var state_46631__$1 = (function (){var statearr_46726 = state_46631;
(statearr_46726[(13)] = inst_46507);

(statearr_46726[(14)] = inst_46508);

(statearr_46726[(16)] = inst_46506);

(statearr_46726[(17)] = inst_46509);

return statearr_46726;
})();
var statearr_46727_48348 = state_46631__$1;
(statearr_46727_48348[(2)] = null);

(statearr_46727_48348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (14))){
var state_46631__$1 = state_46631;
var statearr_46728_48349 = state_46631__$1;
(statearr_46728_48349[(2)] = null);

(statearr_46728_48349[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (45))){
var inst_46621 = (state_46631[(2)]);
var state_46631__$1 = state_46631;
var statearr_46729_48351 = state_46631__$1;
(statearr_46729_48351[(2)] = inst_46621);

(statearr_46729_48351[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (26))){
var inst_46561 = (state_46631[(29)]);
var inst_46615 = (state_46631[(2)]);
var inst_46616 = cljs.core.seq(inst_46561);
var state_46631__$1 = (function (){var statearr_46730 = state_46631;
(statearr_46730[(31)] = inst_46615);

return statearr_46730;
})();
if(inst_46616){
var statearr_46731_48352 = state_46631__$1;
(statearr_46731_48352[(1)] = (42));

} else {
var statearr_46732_48353 = state_46631__$1;
(statearr_46732_48353[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (16))){
var inst_46528 = (state_46631[(7)]);
var inst_46530 = cljs.core.chunked_seq_QMARK_(inst_46528);
var state_46631__$1 = state_46631;
if(inst_46530){
var statearr_46738_48354 = state_46631__$1;
(statearr_46738_48354[(1)] = (19));

} else {
var statearr_46739_48355 = state_46631__$1;
(statearr_46739_48355[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (38))){
var inst_46608 = (state_46631[(2)]);
var state_46631__$1 = state_46631;
var statearr_46740_48356 = state_46631__$1;
(statearr_46740_48356[(2)] = inst_46608);

(statearr_46740_48356[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (30))){
var state_46631__$1 = state_46631;
var statearr_46741_48357 = state_46631__$1;
(statearr_46741_48357[(2)] = null);

(statearr_46741_48357[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (10))){
var inst_46507 = (state_46631[(13)]);
var inst_46509 = (state_46631[(17)]);
var inst_46517 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46507,inst_46509);
var inst_46518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46517,(0),null);
var inst_46519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46517,(1),null);
var state_46631__$1 = (function (){var statearr_46742 = state_46631;
(statearr_46742[(26)] = inst_46518);

return statearr_46742;
})();
if(cljs.core.truth_(inst_46519)){
var statearr_46743_48358 = state_46631__$1;
(statearr_46743_48358[(1)] = (13));

} else {
var statearr_46744_48359 = state_46631__$1;
(statearr_46744_48359[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (18))){
var inst_46554 = (state_46631[(2)]);
var state_46631__$1 = state_46631;
var statearr_46746_48360 = state_46631__$1;
(statearr_46746_48360[(2)] = inst_46554);

(statearr_46746_48360[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (42))){
var state_46631__$1 = state_46631;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46631__$1,(45),dchan);
} else {
if((state_val_46632 === (37))){
var inst_46597 = (state_46631[(23)]);
var inst_46497 = (state_46631[(12)]);
var inst_46588 = (state_46631[(25)]);
var inst_46597__$1 = cljs.core.first(inst_46588);
var inst_46598 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46597__$1,inst_46497,done);
var state_46631__$1 = (function (){var statearr_46747 = state_46631;
(statearr_46747[(23)] = inst_46597__$1);

return statearr_46747;
})();
if(cljs.core.truth_(inst_46598)){
var statearr_46748_48361 = state_46631__$1;
(statearr_46748_48361[(1)] = (39));

} else {
var statearr_46749_48362 = state_46631__$1;
(statearr_46749_48362[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46632 === (8))){
var inst_46508 = (state_46631[(14)]);
var inst_46509 = (state_46631[(17)]);
var inst_46511 = (inst_46509 < inst_46508);
var inst_46512 = inst_46511;
var state_46631__$1 = state_46631;
if(cljs.core.truth_(inst_46512)){
var statearr_46750_48363 = state_46631__$1;
(statearr_46750_48363[(1)] = (10));

} else {
var statearr_46751_48364 = state_46631__$1;
(statearr_46751_48364[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__45621__auto__ = null;
var cljs$core$async$mult_$_state_machine__45621__auto____0 = (function (){
var statearr_46752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46752[(0)] = cljs$core$async$mult_$_state_machine__45621__auto__);

(statearr_46752[(1)] = (1));

return statearr_46752;
});
var cljs$core$async$mult_$_state_machine__45621__auto____1 = (function (state_46631){
while(true){
var ret_value__45622__auto__ = (function (){try{while(true){
var result__45623__auto__ = switch__45620__auto__(state_46631);
if(cljs.core.keyword_identical_QMARK_(result__45623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45623__auto__;
}
break;
}
}catch (e46753){if((e46753 instanceof Object)){
var ex__45624__auto__ = e46753;
var statearr_46754_48365 = state_46631;
(statearr_46754_48365[(5)] = ex__45624__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46753;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48366 = state_46631;
state_46631 = G__48366;
continue;
} else {
return ret_value__45622__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__45621__auto__ = function(state_46631){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__45621__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__45621__auto____1.call(this,state_46631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__45621__auto____0;
cljs$core$async$mult_$_state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__45621__auto____1;
return cljs$core$async$mult_$_state_machine__45621__auto__;
})()
})();
var state__45918__auto__ = (function (){var statearr_46755 = (f__45917__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45917__auto__.cljs$core$IFn$_invoke$arity$0() : f__45917__auto__.call(null));
(statearr_46755[(6)] = c__45916__auto___48254);

return statearr_46755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45918__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__46757 = arguments.length;
switch (G__46757) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48392 = arguments.length;
var i__4790__auto___48393 = (0);
while(true){
if((i__4790__auto___48393 < len__4789__auto___48392)){
args__4795__auto__.push((arguments[i__4790__auto___48393]));

var G__48397 = (i__4790__auto___48393 + (1));
i__4790__auto___48393 = G__48397;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46772){
var map__46773 = p__46772;
var map__46773__$1 = (((((!((map__46773 == null))))?(((((map__46773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46773):map__46773);
var opts = map__46773__$1;
var statearr_46775_48398 = state;
(statearr_46775_48398[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_46779_48399 = state;
(statearr_46779_48399[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_46780_48400 = state;
(statearr_46780_48400[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46766){
var G__46767 = cljs.core.first(seq46766);
var seq46766__$1 = cljs.core.next(seq46766);
var G__46768 = cljs.core.first(seq46766__$1);
var seq46766__$2 = cljs.core.next(seq46766__$1);
var G__46769 = cljs.core.first(seq46766__$2);
var seq46766__$3 = cljs.core.next(seq46766__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46767,G__46768,G__46769,seq46766__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46789 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46789 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46790){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta46790 = meta46790;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46791,meta46790__$1){
var self__ = this;
var _46791__$1 = this;
return (new cljs.core.async.t_cljs$core$async46789(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta46790__$1));
}));

(cljs.core.async.t_cljs$core$async46789.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46791){
var self__ = this;
var _46791__$1 = this;
return self__.meta46790;
}));

(cljs.core.async.t_cljs$core$async46789.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46789.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async46789.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46789.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46789.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46789.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46789.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46789.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46789.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta46790","meta46790",-1989184880,null)], null);
}));

(cljs.core.async.t_cljs$core$async46789.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46789.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46789");

(cljs.core.async.t_cljs$core$async46789.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46789");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46789.
 */
cljs.core.async.__GT_t_cljs$core$async46789 = (function cljs$core$async$mix_$___GT_t_cljs$core$async46789(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46790){
return (new cljs.core.async.t_cljs$core$async46789(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46790));
});

}

return (new cljs.core.async.t_cljs$core$async46789(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45916__auto___48408 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45917__auto__ = (function (){var switch__45620__auto__ = (function (state_46893){
var state_val_46894 = (state_46893[(1)]);
if((state_val_46894 === (7))){
var inst_46808 = (state_46893[(2)]);
var state_46893__$1 = state_46893;
var statearr_46895_48409 = state_46893__$1;
(statearr_46895_48409[(2)] = inst_46808);

(statearr_46895_48409[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (20))){
var inst_46820 = (state_46893[(7)]);
var state_46893__$1 = state_46893;
var statearr_46896_48443 = state_46893__$1;
(statearr_46896_48443[(2)] = inst_46820);

(statearr_46896_48443[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (27))){
var state_46893__$1 = state_46893;
var statearr_46897_48444 = state_46893__$1;
(statearr_46897_48444[(2)] = null);

(statearr_46897_48444[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (1))){
var inst_46795 = (state_46893[(8)]);
var inst_46795__$1 = calc_state();
var inst_46797 = (inst_46795__$1 == null);
var inst_46798 = cljs.core.not(inst_46797);
var state_46893__$1 = (function (){var statearr_46902 = state_46893;
(statearr_46902[(8)] = inst_46795__$1);

return statearr_46902;
})();
if(inst_46798){
var statearr_46903_48446 = state_46893__$1;
(statearr_46903_48446[(1)] = (2));

} else {
var statearr_46904_48448 = state_46893__$1;
(statearr_46904_48448[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (24))){
var inst_46853 = (state_46893[(9)]);
var inst_46844 = (state_46893[(10)]);
var inst_46867 = (state_46893[(11)]);
var inst_46867__$1 = (inst_46844.cljs$core$IFn$_invoke$arity$1 ? inst_46844.cljs$core$IFn$_invoke$arity$1(inst_46853) : inst_46844.call(null,inst_46853));
var state_46893__$1 = (function (){var statearr_46905 = state_46893;
(statearr_46905[(11)] = inst_46867__$1);

return statearr_46905;
})();
if(cljs.core.truth_(inst_46867__$1)){
var statearr_46906_48455 = state_46893__$1;
(statearr_46906_48455[(1)] = (29));

} else {
var statearr_46907_48456 = state_46893__$1;
(statearr_46907_48456[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (4))){
var inst_46811 = (state_46893[(2)]);
var state_46893__$1 = state_46893;
if(cljs.core.truth_(inst_46811)){
var statearr_46908_48457 = state_46893__$1;
(statearr_46908_48457[(1)] = (8));

} else {
var statearr_46909_48465 = state_46893__$1;
(statearr_46909_48465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (15))){
var inst_46838 = (state_46893[(2)]);
var state_46893__$1 = state_46893;
if(cljs.core.truth_(inst_46838)){
var statearr_46910_48467 = state_46893__$1;
(statearr_46910_48467[(1)] = (19));

} else {
var statearr_46911_48470 = state_46893__$1;
(statearr_46911_48470[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (21))){
var inst_46843 = (state_46893[(12)]);
var inst_46843__$1 = (state_46893[(2)]);
var inst_46844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46843__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46843__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46846 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46843__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46893__$1 = (function (){var statearr_46912 = state_46893;
(statearr_46912[(10)] = inst_46844);

(statearr_46912[(12)] = inst_46843__$1);

(statearr_46912[(13)] = inst_46845);

return statearr_46912;
})();
return cljs.core.async.ioc_alts_BANG_(state_46893__$1,(22),inst_46846);
} else {
if((state_val_46894 === (31))){
var inst_46875 = (state_46893[(2)]);
var state_46893__$1 = state_46893;
if(cljs.core.truth_(inst_46875)){
var statearr_46913_48474 = state_46893__$1;
(statearr_46913_48474[(1)] = (32));

} else {
var statearr_46914_48475 = state_46893__$1;
(statearr_46914_48475[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (32))){
var inst_46852 = (state_46893[(14)]);
var state_46893__$1 = state_46893;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46893__$1,(35),out,inst_46852);
} else {
if((state_val_46894 === (33))){
var inst_46843 = (state_46893[(12)]);
var inst_46820 = inst_46843;
var state_46893__$1 = (function (){var statearr_46915 = state_46893;
(statearr_46915[(7)] = inst_46820);

return statearr_46915;
})();
var statearr_46916_48476 = state_46893__$1;
(statearr_46916_48476[(2)] = null);

(statearr_46916_48476[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (13))){
var inst_46820 = (state_46893[(7)]);
var inst_46827 = inst_46820.cljs$lang$protocol_mask$partition0$;
var inst_46828 = (inst_46827 & (64));
var inst_46829 = inst_46820.cljs$core$ISeq$;
var inst_46830 = (cljs.core.PROTOCOL_SENTINEL === inst_46829);
var inst_46831 = ((inst_46828) || (inst_46830));
var state_46893__$1 = state_46893;
if(cljs.core.truth_(inst_46831)){
var statearr_46922_48480 = state_46893__$1;
(statearr_46922_48480[(1)] = (16));

} else {
var statearr_46923_48482 = state_46893__$1;
(statearr_46923_48482[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (22))){
var inst_46852 = (state_46893[(14)]);
var inst_46853 = (state_46893[(9)]);
var inst_46851 = (state_46893[(2)]);
var inst_46852__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46851,(0),null);
var inst_46853__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46851,(1),null);
var inst_46854 = (inst_46852__$1 == null);
var inst_46855 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46853__$1,change);
var inst_46856 = ((inst_46854) || (inst_46855));
var state_46893__$1 = (function (){var statearr_46924 = state_46893;
(statearr_46924[(14)] = inst_46852__$1);

(statearr_46924[(9)] = inst_46853__$1);

return statearr_46924;
})();
if(cljs.core.truth_(inst_46856)){
var statearr_46929_48508 = state_46893__$1;
(statearr_46929_48508[(1)] = (23));

} else {
var statearr_46930_48509 = state_46893__$1;
(statearr_46930_48509[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (36))){
var inst_46843 = (state_46893[(12)]);
var inst_46820 = inst_46843;
var state_46893__$1 = (function (){var statearr_46931 = state_46893;
(statearr_46931[(7)] = inst_46820);

return statearr_46931;
})();
var statearr_46932_48510 = state_46893__$1;
(statearr_46932_48510[(2)] = null);

(statearr_46932_48510[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (29))){
var inst_46867 = (state_46893[(11)]);
var state_46893__$1 = state_46893;
var statearr_46933_48514 = state_46893__$1;
(statearr_46933_48514[(2)] = inst_46867);

(statearr_46933_48514[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (6))){
var state_46893__$1 = state_46893;
var statearr_46934_48515 = state_46893__$1;
(statearr_46934_48515[(2)] = false);

(statearr_46934_48515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (28))){
var inst_46863 = (state_46893[(2)]);
var inst_46864 = calc_state();
var inst_46820 = inst_46864;
var state_46893__$1 = (function (){var statearr_46935 = state_46893;
(statearr_46935[(15)] = inst_46863);

(statearr_46935[(7)] = inst_46820);

return statearr_46935;
})();
var statearr_46936_48535 = state_46893__$1;
(statearr_46936_48535[(2)] = null);

(statearr_46936_48535[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (25))){
var inst_46889 = (state_46893[(2)]);
var state_46893__$1 = state_46893;
var statearr_46937_48537 = state_46893__$1;
(statearr_46937_48537[(2)] = inst_46889);

(statearr_46937_48537[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (34))){
var inst_46887 = (state_46893[(2)]);
var state_46893__$1 = state_46893;
var statearr_46938_48538 = state_46893__$1;
(statearr_46938_48538[(2)] = inst_46887);

(statearr_46938_48538[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (17))){
var state_46893__$1 = state_46893;
var statearr_46939_48542 = state_46893__$1;
(statearr_46939_48542[(2)] = false);

(statearr_46939_48542[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (3))){
var state_46893__$1 = state_46893;
var statearr_46940_48543 = state_46893__$1;
(statearr_46940_48543[(2)] = false);

(statearr_46940_48543[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (12))){
var inst_46891 = (state_46893[(2)]);
var state_46893__$1 = state_46893;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46893__$1,inst_46891);
} else {
if((state_val_46894 === (2))){
var inst_46795 = (state_46893[(8)]);
var inst_46800 = inst_46795.cljs$lang$protocol_mask$partition0$;
var inst_46801 = (inst_46800 & (64));
var inst_46802 = inst_46795.cljs$core$ISeq$;
var inst_46803 = (cljs.core.PROTOCOL_SENTINEL === inst_46802);
var inst_46804 = ((inst_46801) || (inst_46803));
var state_46893__$1 = state_46893;
if(cljs.core.truth_(inst_46804)){
var statearr_46941_48550 = state_46893__$1;
(statearr_46941_48550[(1)] = (5));

} else {
var statearr_46942_48551 = state_46893__$1;
(statearr_46942_48551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (23))){
var inst_46852 = (state_46893[(14)]);
var inst_46858 = (inst_46852 == null);
var state_46893__$1 = state_46893;
if(cljs.core.truth_(inst_46858)){
var statearr_46943_48552 = state_46893__$1;
(statearr_46943_48552[(1)] = (26));

} else {
var statearr_46944_48554 = state_46893__$1;
(statearr_46944_48554[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (35))){
var inst_46878 = (state_46893[(2)]);
var state_46893__$1 = state_46893;
if(cljs.core.truth_(inst_46878)){
var statearr_46945_48555 = state_46893__$1;
(statearr_46945_48555[(1)] = (36));

} else {
var statearr_46946_48556 = state_46893__$1;
(statearr_46946_48556[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (19))){
var inst_46820 = (state_46893[(7)]);
var inst_46840 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46820);
var state_46893__$1 = state_46893;
var statearr_46947_48559 = state_46893__$1;
(statearr_46947_48559[(2)] = inst_46840);

(statearr_46947_48559[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (11))){
var inst_46820 = (state_46893[(7)]);
var inst_46824 = (inst_46820 == null);
var inst_46825 = cljs.core.not(inst_46824);
var state_46893__$1 = state_46893;
if(inst_46825){
var statearr_46948_48562 = state_46893__$1;
(statearr_46948_48562[(1)] = (13));

} else {
var statearr_46949_48563 = state_46893__$1;
(statearr_46949_48563[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (9))){
var inst_46795 = (state_46893[(8)]);
var state_46893__$1 = state_46893;
var statearr_46950_48564 = state_46893__$1;
(statearr_46950_48564[(2)] = inst_46795);

(statearr_46950_48564[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (5))){
var state_46893__$1 = state_46893;
var statearr_46951_48565 = state_46893__$1;
(statearr_46951_48565[(2)] = true);

(statearr_46951_48565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (14))){
var state_46893__$1 = state_46893;
var statearr_46952_48566 = state_46893__$1;
(statearr_46952_48566[(2)] = false);

(statearr_46952_48566[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (26))){
var inst_46853 = (state_46893[(9)]);
var inst_46860 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_46853);
var state_46893__$1 = state_46893;
var statearr_46953_48568 = state_46893__$1;
(statearr_46953_48568[(2)] = inst_46860);

(statearr_46953_48568[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (16))){
var state_46893__$1 = state_46893;
var statearr_46954_48571 = state_46893__$1;
(statearr_46954_48571[(2)] = true);

(statearr_46954_48571[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (38))){
var inst_46883 = (state_46893[(2)]);
var state_46893__$1 = state_46893;
var statearr_46955_48572 = state_46893__$1;
(statearr_46955_48572[(2)] = inst_46883);

(statearr_46955_48572[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (30))){
var inst_46853 = (state_46893[(9)]);
var inst_46844 = (state_46893[(10)]);
var inst_46845 = (state_46893[(13)]);
var inst_46870 = cljs.core.empty_QMARK_(inst_46844);
var inst_46871 = (inst_46845.cljs$core$IFn$_invoke$arity$1 ? inst_46845.cljs$core$IFn$_invoke$arity$1(inst_46853) : inst_46845.call(null,inst_46853));
var inst_46872 = cljs.core.not(inst_46871);
var inst_46873 = ((inst_46870) && (inst_46872));
var state_46893__$1 = state_46893;
var statearr_46956_48573 = state_46893__$1;
(statearr_46956_48573[(2)] = inst_46873);

(statearr_46956_48573[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (10))){
var inst_46795 = (state_46893[(8)]);
var inst_46816 = (state_46893[(2)]);
var inst_46817 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46816,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46816,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46816,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46820 = inst_46795;
var state_46893__$1 = (function (){var statearr_46957 = state_46893;
(statearr_46957[(16)] = inst_46818);

(statearr_46957[(17)] = inst_46817);

(statearr_46957[(7)] = inst_46820);

(statearr_46957[(18)] = inst_46819);

return statearr_46957;
})();
var statearr_46958_48574 = state_46893__$1;
(statearr_46958_48574[(2)] = null);

(statearr_46958_48574[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (18))){
var inst_46835 = (state_46893[(2)]);
var state_46893__$1 = state_46893;
var statearr_46959_48575 = state_46893__$1;
(statearr_46959_48575[(2)] = inst_46835);

(statearr_46959_48575[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (37))){
var state_46893__$1 = state_46893;
var statearr_46960_48576 = state_46893__$1;
(statearr_46960_48576[(2)] = null);

(statearr_46960_48576[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46894 === (8))){
var inst_46795 = (state_46893[(8)]);
var inst_46813 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46795);
var state_46893__$1 = state_46893;
var statearr_46961_48577 = state_46893__$1;
(statearr_46961_48577[(2)] = inst_46813);

(statearr_46961_48577[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__45621__auto__ = null;
var cljs$core$async$mix_$_state_machine__45621__auto____0 = (function (){
var statearr_46965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46965[(0)] = cljs$core$async$mix_$_state_machine__45621__auto__);

(statearr_46965[(1)] = (1));

return statearr_46965;
});
var cljs$core$async$mix_$_state_machine__45621__auto____1 = (function (state_46893){
while(true){
var ret_value__45622__auto__ = (function (){try{while(true){
var result__45623__auto__ = switch__45620__auto__(state_46893);
if(cljs.core.keyword_identical_QMARK_(result__45623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45623__auto__;
}
break;
}
}catch (e46966){if((e46966 instanceof Object)){
var ex__45624__auto__ = e46966;
var statearr_46967_48584 = state_46893;
(statearr_46967_48584[(5)] = ex__45624__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46966;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48588 = state_46893;
state_46893 = G__48588;
continue;
} else {
return ret_value__45622__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__45621__auto__ = function(state_46893){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__45621__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__45621__auto____1.call(this,state_46893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__45621__auto____0;
cljs$core$async$mix_$_state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__45621__auto____1;
return cljs$core$async$mix_$_state_machine__45621__auto__;
})()
})();
var state__45918__auto__ = (function (){var statearr_46972 = (f__45917__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45917__auto__.cljs$core$IFn$_invoke$arity$0() : f__45917__auto__.call(null));
(statearr_46972[(6)] = c__45916__auto___48408);

return statearr_46972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45918__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__46977 = arguments.length;
switch (G__46977) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__46980 = arguments.length;
switch (G__46980) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__46978_SHARP_){
if(cljs.core.truth_((p1__46978_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__46978_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__46978_SHARP_.call(null,topic)))){
return p1__46978_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__46978_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46981 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46981 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46982){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46982 = meta46982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46983,meta46982__$1){
var self__ = this;
var _46983__$1 = this;
return (new cljs.core.async.t_cljs$core$async46981(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46982__$1));
}));

(cljs.core.async.t_cljs$core$async46981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46983){
var self__ = this;
var _46983__$1 = this;
return self__.meta46982;
}));

(cljs.core.async.t_cljs$core$async46981.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46981.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46981.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46981.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async46981.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async46981.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async46981.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async46981.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46982","meta46982",1434184613,null)], null);
}));

(cljs.core.async.t_cljs$core$async46981.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46981.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46981");

(cljs.core.async.t_cljs$core$async46981.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46981");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46981.
 */
cljs.core.async.__GT_t_cljs$core$async46981 = (function cljs$core$async$__GT_t_cljs$core$async46981(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46982){
return (new cljs.core.async.t_cljs$core$async46981(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46982));
});

}

return (new cljs.core.async.t_cljs$core$async46981(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45916__auto___48651 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45917__auto__ = (function (){var switch__45620__auto__ = (function (state_47055){
var state_val_47056 = (state_47055[(1)]);
if((state_val_47056 === (7))){
var inst_47051 = (state_47055[(2)]);
var state_47055__$1 = state_47055;
var statearr_47057_48652 = state_47055__$1;
(statearr_47057_48652[(2)] = inst_47051);

(statearr_47057_48652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47056 === (20))){
var state_47055__$1 = state_47055;
var statearr_47058_48653 = state_47055__$1;
(statearr_47058_48653[(2)] = null);

(statearr_47058_48653[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47056 === (1))){
var state_47055__$1 = state_47055;
var statearr_47059_48654 = state_47055__$1;
(statearr_47059_48654[(2)] = null);

(statearr_47059_48654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47056 === (24))){
var inst_47034 = (state_47055[(7)]);
var inst_47043 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_47034);
var state_47055__$1 = state_47055;
var statearr_47060_48655 = state_47055__$1;
(statearr_47060_48655[(2)] = inst_47043);

(statearr_47060_48655[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47056 === (4))){
var inst_46986 = (state_47055[(8)]);
var inst_46986__$1 = (state_47055[(2)]);
var inst_46987 = (inst_46986__$1 == null);
var state_47055__$1 = (function (){var statearr_47061 = state_47055;
(statearr_47061[(8)] = inst_46986__$1);

return statearr_47061;
})();
if(cljs.core.truth_(inst_46987)){
var statearr_47062_48656 = state_47055__$1;
(statearr_47062_48656[(1)] = (5));

} else {
var statearr_47063_48657 = state_47055__$1;
(statearr_47063_48657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47056 === (15))){
var inst_47028 = (state_47055[(2)]);
var state_47055__$1 = state_47055;
var statearr_47064_48658 = state_47055__$1;
(statearr_47064_48658[(2)] = inst_47028);

(statearr_47064_48658[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47056 === (21))){
var inst_47048 = (state_47055[(2)]);
var state_47055__$1 = (function (){var statearr_47065 = state_47055;
(statearr_47065[(9)] = inst_47048);

return statearr_47065;
})();
var statearr_47066_48659 = state_47055__$1;
(statearr_47066_48659[(2)] = null);

(statearr_47066_48659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47056 === (13))){
var inst_47010 = (state_47055[(10)]);
var inst_47012 = cljs.core.chunked_seq_QMARK_(inst_47010);
var state_47055__$1 = state_47055;
if(inst_47012){
var statearr_47068_48664 = state_47055__$1;
(statearr_47068_48664[(1)] = (16));

} else {
var statearr_47069_48665 = state_47055__$1;
(statearr_47069_48665[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47056 === (22))){
var inst_47040 = (state_47055[(2)]);
var state_47055__$1 = state_47055;
if(cljs.core.truth_(inst_47040)){
var statearr_47070_48670 = state_47055__$1;
(statearr_47070_48670[(1)] = (23));

} else {
var statearr_47071_48674 = state_47055__$1;
(statearr_47071_48674[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47056 === (6))){
var inst_47034 = (state_47055[(7)]);
var inst_47036 = (state_47055[(11)]);
var inst_46986 = (state_47055[(8)]);
var inst_47034__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_46986) : topic_fn.call(null,inst_46986));
var inst_47035 = cljs.core.deref(mults);
var inst_47036__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47035,inst_47034__$1);
var state_47055__$1 = (function (){var statearr_47072 = state_47055;
(statearr_47072[(7)] = inst_47034__$1);

(statearr_47072[(11)] = inst_47036__$1);

return statearr_47072;
})();
if(cljs.core.truth_(inst_47036__$1)){
var statearr_47073_48681 = state_47055__$1;
(statearr_47073_48681[(1)] = (19));

} else {
var statearr_47074_48682 = state_47055__$1;
(statearr_47074_48682[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47056 === (25))){
var inst_47045 = (state_47055[(2)]);
var state_47055__$1 = state_47055;
var statearr_47075_48683 = state_47055__$1;
(statearr_47075_48683[(2)] = inst_47045);

(statearr_47075_48683[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47056 === (17))){
var inst_47010 = (state_47055[(10)]);
var inst_47019 = cljs.core.first(inst_47010);
var inst_47020 = cljs.core.async.muxch_STAR_(inst_47019);
var inst_47021 = cljs.core.async.close_BANG_(inst_47020);
var inst_47022 = cljs.core.next(inst_47010);
var inst_46996 = inst_47022;
var inst_46997 = null;
var inst_46998 = (0);
var inst_46999 = (0);
var state_47055__$1 = (function (){var statearr_47076 = state_47055;
(statearr_47076[(12)] = inst_47021);

(statearr_47076[(13)] = inst_46999);

(statearr_47076[(14)] = inst_46997);

(statearr_47076[(15)] = inst_46996);

(statearr_47076[(16)] = inst_46998);

return statearr_47076;
})();
var statearr_47077_48690 = state_47055__$1;
(statearr_47077_48690[(2)] = null);

(statearr_47077_48690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47056 === (3))){
var inst_47053 = (state_47055[(2)]);
var state_47055__$1 = state_47055;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47055__$1,inst_47053);
} else {
if((state_val_47056 === (12))){
var inst_47030 = (state_47055[(2)]);
var state_47055__$1 = state_47055;
var statearr_47078_48691 = state_47055__$1;
(statearr_47078_48691[(2)] = inst_47030);

(statearr_47078_48691[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47056 === (2))){
var state_47055__$1 = state_47055;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47055__$1,(4),ch);
} else {
if((state_val_47056 === (23))){
var state_47055__$1 = state_47055;
var statearr_47079_48693 = state_47055__$1;
(statearr_47079_48693[(2)] = null);

(statearr_47079_48693[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47056 === (19))){
var inst_47036 = (state_47055[(11)]);
var inst_46986 = (state_47055[(8)]);
var inst_47038 = cljs.core.async.muxch_STAR_(inst_47036);
var state_47055__$1 = state_47055;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47055__$1,(22),inst_47038,inst_46986);
} else {
if((state_val_47056 === (11))){
var inst_46996 = (state_47055[(15)]);
var inst_47010 = (state_47055[(10)]);
var inst_47010__$1 = cljs.core.seq(inst_46996);
var state_47055__$1 = (function (){var statearr_47080 = state_47055;
(statearr_47080[(10)] = inst_47010__$1);

return statearr_47080;
})();
if(inst_47010__$1){
var statearr_47081_48705 = state_47055__$1;
(statearr_47081_48705[(1)] = (13));

} else {
var statearr_47082_48706 = state_47055__$1;
(statearr_47082_48706[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47056 === (9))){
var inst_47032 = (state_47055[(2)]);
var state_47055__$1 = state_47055;
var statearr_47083_48708 = state_47055__$1;
(statearr_47083_48708[(2)] = inst_47032);

(statearr_47083_48708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47056 === (5))){
var inst_46993 = cljs.core.deref(mults);
var inst_46994 = cljs.core.vals(inst_46993);
var inst_46995 = cljs.core.seq(inst_46994);
var inst_46996 = inst_46995;
var inst_46997 = null;
var inst_46998 = (0);
var inst_46999 = (0);
var state_47055__$1 = (function (){var statearr_47084 = state_47055;
(statearr_47084[(13)] = inst_46999);

(statearr_47084[(14)] = inst_46997);

(statearr_47084[(15)] = inst_46996);

(statearr_47084[(16)] = inst_46998);

return statearr_47084;
})();
var statearr_47085_48716 = state_47055__$1;
(statearr_47085_48716[(2)] = null);

(statearr_47085_48716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47056 === (14))){
var state_47055__$1 = state_47055;
var statearr_47089_48751 = state_47055__$1;
(statearr_47089_48751[(2)] = null);

(statearr_47089_48751[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47056 === (16))){
var inst_47010 = (state_47055[(10)]);
var inst_47014 = cljs.core.chunk_first(inst_47010);
var inst_47015 = cljs.core.chunk_rest(inst_47010);
var inst_47016 = cljs.core.count(inst_47014);
var inst_46996 = inst_47015;
var inst_46997 = inst_47014;
var inst_46998 = inst_47016;
var inst_46999 = (0);
var state_47055__$1 = (function (){var statearr_47090 = state_47055;
(statearr_47090[(13)] = inst_46999);

(statearr_47090[(14)] = inst_46997);

(statearr_47090[(15)] = inst_46996);

(statearr_47090[(16)] = inst_46998);

return statearr_47090;
})();
var statearr_47091_48752 = state_47055__$1;
(statearr_47091_48752[(2)] = null);

(statearr_47091_48752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47056 === (10))){
var inst_46999 = (state_47055[(13)]);
var inst_46997 = (state_47055[(14)]);
var inst_46996 = (state_47055[(15)]);
var inst_46998 = (state_47055[(16)]);
var inst_47004 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46997,inst_46999);
var inst_47005 = cljs.core.async.muxch_STAR_(inst_47004);
var inst_47006 = cljs.core.async.close_BANG_(inst_47005);
var inst_47007 = (inst_46999 + (1));
var tmp47086 = inst_46997;
var tmp47087 = inst_46996;
var tmp47088 = inst_46998;
var inst_46996__$1 = tmp47087;
var inst_46997__$1 = tmp47086;
var inst_46998__$1 = tmp47088;
var inst_46999__$1 = inst_47007;
var state_47055__$1 = (function (){var statearr_47092 = state_47055;
(statearr_47092[(13)] = inst_46999__$1);

(statearr_47092[(17)] = inst_47006);

(statearr_47092[(14)] = inst_46997__$1);

(statearr_47092[(15)] = inst_46996__$1);

(statearr_47092[(16)] = inst_46998__$1);

return statearr_47092;
})();
var statearr_47093_48754 = state_47055__$1;
(statearr_47093_48754[(2)] = null);

(statearr_47093_48754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47056 === (18))){
var inst_47025 = (state_47055[(2)]);
var state_47055__$1 = state_47055;
var statearr_47094_48755 = state_47055__$1;
(statearr_47094_48755[(2)] = inst_47025);

(statearr_47094_48755[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47056 === (8))){
var inst_46999 = (state_47055[(13)]);
var inst_46998 = (state_47055[(16)]);
var inst_47001 = (inst_46999 < inst_46998);
var inst_47002 = inst_47001;
var state_47055__$1 = state_47055;
if(cljs.core.truth_(inst_47002)){
var statearr_47095_48770 = state_47055__$1;
(statearr_47095_48770[(1)] = (10));

} else {
var statearr_47096_48771 = state_47055__$1;
(statearr_47096_48771[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45621__auto__ = null;
var cljs$core$async$state_machine__45621__auto____0 = (function (){
var statearr_47097 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47097[(0)] = cljs$core$async$state_machine__45621__auto__);

(statearr_47097[(1)] = (1));

return statearr_47097;
});
var cljs$core$async$state_machine__45621__auto____1 = (function (state_47055){
while(true){
var ret_value__45622__auto__ = (function (){try{while(true){
var result__45623__auto__ = switch__45620__auto__(state_47055);
if(cljs.core.keyword_identical_QMARK_(result__45623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45623__auto__;
}
break;
}
}catch (e47098){if((e47098 instanceof Object)){
var ex__45624__auto__ = e47098;
var statearr_47099_48776 = state_47055;
(statearr_47099_48776[(5)] = ex__45624__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47098;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48777 = state_47055;
state_47055 = G__48777;
continue;
} else {
return ret_value__45622__auto__;
}
break;
}
});
cljs$core$async$state_machine__45621__auto__ = function(state_47055){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45621__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45621__auto____1.call(this,state_47055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45621__auto____0;
cljs$core$async$state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45621__auto____1;
return cljs$core$async$state_machine__45621__auto__;
})()
})();
var state__45918__auto__ = (function (){var statearr_47100 = (f__45917__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45917__auto__.cljs$core$IFn$_invoke$arity$0() : f__45917__auto__.call(null));
(statearr_47100[(6)] = c__45916__auto___48651);

return statearr_47100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45918__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__47102 = arguments.length;
switch (G__47102) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__47104 = arguments.length;
switch (G__47104) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__47106 = arguments.length;
switch (G__47106) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__45916__auto___48785 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45917__auto__ = (function (){var switch__45620__auto__ = (function (state_47147){
var state_val_47148 = (state_47147[(1)]);
if((state_val_47148 === (7))){
var state_47147__$1 = state_47147;
var statearr_47149_48786 = state_47147__$1;
(statearr_47149_48786[(2)] = null);

(statearr_47149_48786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47148 === (1))){
var state_47147__$1 = state_47147;
var statearr_47150_48787 = state_47147__$1;
(statearr_47150_48787[(2)] = null);

(statearr_47150_48787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47148 === (4))){
var inst_47109 = (state_47147[(7)]);
var inst_47111 = (inst_47109 < cnt);
var state_47147__$1 = state_47147;
if(cljs.core.truth_(inst_47111)){
var statearr_47151_48788 = state_47147__$1;
(statearr_47151_48788[(1)] = (6));

} else {
var statearr_47152_48789 = state_47147__$1;
(statearr_47152_48789[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47148 === (15))){
var inst_47143 = (state_47147[(2)]);
var state_47147__$1 = state_47147;
var statearr_47153_48790 = state_47147__$1;
(statearr_47153_48790[(2)] = inst_47143);

(statearr_47153_48790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47148 === (13))){
var inst_47136 = cljs.core.async.close_BANG_(out);
var state_47147__$1 = state_47147;
var statearr_47154_48791 = state_47147__$1;
(statearr_47154_48791[(2)] = inst_47136);

(statearr_47154_48791[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47148 === (6))){
var state_47147__$1 = state_47147;
var statearr_47155_48792 = state_47147__$1;
(statearr_47155_48792[(2)] = null);

(statearr_47155_48792[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47148 === (3))){
var inst_47145 = (state_47147[(2)]);
var state_47147__$1 = state_47147;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47147__$1,inst_47145);
} else {
if((state_val_47148 === (12))){
var inst_47133 = (state_47147[(8)]);
var inst_47133__$1 = (state_47147[(2)]);
var inst_47134 = cljs.core.some(cljs.core.nil_QMARK_,inst_47133__$1);
var state_47147__$1 = (function (){var statearr_47162 = state_47147;
(statearr_47162[(8)] = inst_47133__$1);

return statearr_47162;
})();
if(cljs.core.truth_(inst_47134)){
var statearr_47163_48793 = state_47147__$1;
(statearr_47163_48793[(1)] = (13));

} else {
var statearr_47164_48794 = state_47147__$1;
(statearr_47164_48794[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47148 === (2))){
var inst_47108 = cljs.core.reset_BANG_(dctr,cnt);
var inst_47109 = (0);
var state_47147__$1 = (function (){var statearr_47167 = state_47147;
(statearr_47167[(7)] = inst_47109);

(statearr_47167[(9)] = inst_47108);

return statearr_47167;
})();
var statearr_47168_48795 = state_47147__$1;
(statearr_47168_48795[(2)] = null);

(statearr_47168_48795[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47148 === (11))){
var inst_47109 = (state_47147[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47147,(10),Object,null,(9));
var inst_47119 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_47109) : chs__$1.call(null,inst_47109));
var inst_47121 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_47109) : done.call(null,inst_47109));
var inst_47122 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_47119,inst_47121);
var state_47147__$1 = state_47147;
var statearr_47173_48796 = state_47147__$1;
(statearr_47173_48796[(2)] = inst_47122);


cljs.core.async.impl.ioc_helpers.process_exception(state_47147__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47148 === (9))){
var inst_47109 = (state_47147[(7)]);
var inst_47124 = (state_47147[(2)]);
var inst_47125 = (inst_47109 + (1));
var inst_47109__$1 = inst_47125;
var state_47147__$1 = (function (){var statearr_47176 = state_47147;
(statearr_47176[(7)] = inst_47109__$1);

(statearr_47176[(10)] = inst_47124);

return statearr_47176;
})();
var statearr_47177_48797 = state_47147__$1;
(statearr_47177_48797[(2)] = null);

(statearr_47177_48797[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47148 === (5))){
var inst_47131 = (state_47147[(2)]);
var state_47147__$1 = (function (){var statearr_47178 = state_47147;
(statearr_47178[(11)] = inst_47131);

return statearr_47178;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47147__$1,(12),dchan);
} else {
if((state_val_47148 === (14))){
var inst_47133 = (state_47147[(8)]);
var inst_47138 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_47133);
var state_47147__$1 = state_47147;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47147__$1,(16),out,inst_47138);
} else {
if((state_val_47148 === (16))){
var inst_47140 = (state_47147[(2)]);
var state_47147__$1 = (function (){var statearr_47196 = state_47147;
(statearr_47196[(12)] = inst_47140);

return statearr_47196;
})();
var statearr_47197_48798 = state_47147__$1;
(statearr_47197_48798[(2)] = null);

(statearr_47197_48798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47148 === (10))){
var inst_47113 = (state_47147[(2)]);
var inst_47114 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_47147__$1 = (function (){var statearr_47198 = state_47147;
(statearr_47198[(13)] = inst_47113);

return statearr_47198;
})();
var statearr_47199_48799 = state_47147__$1;
(statearr_47199_48799[(2)] = inst_47114);


cljs.core.async.impl.ioc_helpers.process_exception(state_47147__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47148 === (8))){
var inst_47129 = (state_47147[(2)]);
var state_47147__$1 = state_47147;
var statearr_47200_48800 = state_47147__$1;
(statearr_47200_48800[(2)] = inst_47129);

(statearr_47200_48800[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45621__auto__ = null;
var cljs$core$async$state_machine__45621__auto____0 = (function (){
var statearr_47204 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47204[(0)] = cljs$core$async$state_machine__45621__auto__);

(statearr_47204[(1)] = (1));

return statearr_47204;
});
var cljs$core$async$state_machine__45621__auto____1 = (function (state_47147){
while(true){
var ret_value__45622__auto__ = (function (){try{while(true){
var result__45623__auto__ = switch__45620__auto__(state_47147);
if(cljs.core.keyword_identical_QMARK_(result__45623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45623__auto__;
}
break;
}
}catch (e47205){if((e47205 instanceof Object)){
var ex__45624__auto__ = e47205;
var statearr_47206_48801 = state_47147;
(statearr_47206_48801[(5)] = ex__45624__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47205;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48802 = state_47147;
state_47147 = G__48802;
continue;
} else {
return ret_value__45622__auto__;
}
break;
}
});
cljs$core$async$state_machine__45621__auto__ = function(state_47147){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45621__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45621__auto____1.call(this,state_47147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45621__auto____0;
cljs$core$async$state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45621__auto____1;
return cljs$core$async$state_machine__45621__auto__;
})()
})();
var state__45918__auto__ = (function (){var statearr_47207 = (f__45917__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45917__auto__.cljs$core$IFn$_invoke$arity$0() : f__45917__auto__.call(null));
(statearr_47207[(6)] = c__45916__auto___48785);

return statearr_47207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45918__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__47214 = arguments.length;
switch (G__47214) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45916__auto___48805 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45917__auto__ = (function (){var switch__45620__auto__ = (function (state_47249){
var state_val_47250 = (state_47249[(1)]);
if((state_val_47250 === (7))){
var inst_47228 = (state_47249[(7)]);
var inst_47229 = (state_47249[(8)]);
var inst_47228__$1 = (state_47249[(2)]);
var inst_47229__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47228__$1,(0),null);
var inst_47230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47228__$1,(1),null);
var inst_47231 = (inst_47229__$1 == null);
var state_47249__$1 = (function (){var statearr_47251 = state_47249;
(statearr_47251[(7)] = inst_47228__$1);

(statearr_47251[(9)] = inst_47230);

(statearr_47251[(8)] = inst_47229__$1);

return statearr_47251;
})();
if(cljs.core.truth_(inst_47231)){
var statearr_47252_48812 = state_47249__$1;
(statearr_47252_48812[(1)] = (8));

} else {
var statearr_47253_48813 = state_47249__$1;
(statearr_47253_48813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47250 === (1))){
var inst_47218 = cljs.core.vec(chs);
var inst_47219 = inst_47218;
var state_47249__$1 = (function (){var statearr_47254 = state_47249;
(statearr_47254[(10)] = inst_47219);

return statearr_47254;
})();
var statearr_47255_48818 = state_47249__$1;
(statearr_47255_48818[(2)] = null);

(statearr_47255_48818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47250 === (4))){
var inst_47219 = (state_47249[(10)]);
var state_47249__$1 = state_47249;
return cljs.core.async.ioc_alts_BANG_(state_47249__$1,(7),inst_47219);
} else {
if((state_val_47250 === (6))){
var inst_47245 = (state_47249[(2)]);
var state_47249__$1 = state_47249;
var statearr_47256_48820 = state_47249__$1;
(statearr_47256_48820[(2)] = inst_47245);

(statearr_47256_48820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47250 === (3))){
var inst_47247 = (state_47249[(2)]);
var state_47249__$1 = state_47249;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47249__$1,inst_47247);
} else {
if((state_val_47250 === (2))){
var inst_47219 = (state_47249[(10)]);
var inst_47221 = cljs.core.count(inst_47219);
var inst_47222 = (inst_47221 > (0));
var state_47249__$1 = state_47249;
if(cljs.core.truth_(inst_47222)){
var statearr_47264_48830 = state_47249__$1;
(statearr_47264_48830[(1)] = (4));

} else {
var statearr_47266_48831 = state_47249__$1;
(statearr_47266_48831[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47250 === (11))){
var inst_47219 = (state_47249[(10)]);
var inst_47238 = (state_47249[(2)]);
var tmp47257 = inst_47219;
var inst_47219__$1 = tmp47257;
var state_47249__$1 = (function (){var statearr_47270 = state_47249;
(statearr_47270[(11)] = inst_47238);

(statearr_47270[(10)] = inst_47219__$1);

return statearr_47270;
})();
var statearr_47272_48839 = state_47249__$1;
(statearr_47272_48839[(2)] = null);

(statearr_47272_48839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47250 === (9))){
var inst_47229 = (state_47249[(8)]);
var state_47249__$1 = state_47249;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47249__$1,(11),out,inst_47229);
} else {
if((state_val_47250 === (5))){
var inst_47243 = cljs.core.async.close_BANG_(out);
var state_47249__$1 = state_47249;
var statearr_47283_48848 = state_47249__$1;
(statearr_47283_48848[(2)] = inst_47243);

(statearr_47283_48848[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47250 === (10))){
var inst_47241 = (state_47249[(2)]);
var state_47249__$1 = state_47249;
var statearr_47288_48853 = state_47249__$1;
(statearr_47288_48853[(2)] = inst_47241);

(statearr_47288_48853[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47250 === (8))){
var inst_47228 = (state_47249[(7)]);
var inst_47230 = (state_47249[(9)]);
var inst_47229 = (state_47249[(8)]);
var inst_47219 = (state_47249[(10)]);
var inst_47233 = (function (){var cs = inst_47219;
var vec__47224 = inst_47228;
var v = inst_47229;
var c = inst_47230;
return (function (p1__47212_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__47212_SHARP_);
});
})();
var inst_47234 = cljs.core.filterv(inst_47233,inst_47219);
var inst_47219__$1 = inst_47234;
var state_47249__$1 = (function (){var statearr_47291 = state_47249;
(statearr_47291[(10)] = inst_47219__$1);

return statearr_47291;
})();
var statearr_47292_48867 = state_47249__$1;
(statearr_47292_48867[(2)] = null);

(statearr_47292_48867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45621__auto__ = null;
var cljs$core$async$state_machine__45621__auto____0 = (function (){
var statearr_47296 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47296[(0)] = cljs$core$async$state_machine__45621__auto__);

(statearr_47296[(1)] = (1));

return statearr_47296;
});
var cljs$core$async$state_machine__45621__auto____1 = (function (state_47249){
while(true){
var ret_value__45622__auto__ = (function (){try{while(true){
var result__45623__auto__ = switch__45620__auto__(state_47249);
if(cljs.core.keyword_identical_QMARK_(result__45623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45623__auto__;
}
break;
}
}catch (e47297){if((e47297 instanceof Object)){
var ex__45624__auto__ = e47297;
var statearr_47298_48910 = state_47249;
(statearr_47298_48910[(5)] = ex__45624__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47297;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48911 = state_47249;
state_47249 = G__48911;
continue;
} else {
return ret_value__45622__auto__;
}
break;
}
});
cljs$core$async$state_machine__45621__auto__ = function(state_47249){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45621__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45621__auto____1.call(this,state_47249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45621__auto____0;
cljs$core$async$state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45621__auto____1;
return cljs$core$async$state_machine__45621__auto__;
})()
})();
var state__45918__auto__ = (function (){var statearr_47302 = (f__45917__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45917__auto__.cljs$core$IFn$_invoke$arity$0() : f__45917__auto__.call(null));
(statearr_47302[(6)] = c__45916__auto___48805);

return statearr_47302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45918__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__47304 = arguments.length;
switch (G__47304) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45916__auto___48913 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45917__auto__ = (function (){var switch__45620__auto__ = (function (state_47328){
var state_val_47329 = (state_47328[(1)]);
if((state_val_47329 === (7))){
var inst_47310 = (state_47328[(7)]);
var inst_47310__$1 = (state_47328[(2)]);
var inst_47311 = (inst_47310__$1 == null);
var inst_47312 = cljs.core.not(inst_47311);
var state_47328__$1 = (function (){var statearr_47330 = state_47328;
(statearr_47330[(7)] = inst_47310__$1);

return statearr_47330;
})();
if(inst_47312){
var statearr_47331_48914 = state_47328__$1;
(statearr_47331_48914[(1)] = (8));

} else {
var statearr_47332_48915 = state_47328__$1;
(statearr_47332_48915[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47329 === (1))){
var inst_47305 = (0);
var state_47328__$1 = (function (){var statearr_47333 = state_47328;
(statearr_47333[(8)] = inst_47305);

return statearr_47333;
})();
var statearr_47335_48917 = state_47328__$1;
(statearr_47335_48917[(2)] = null);

(statearr_47335_48917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47329 === (4))){
var state_47328__$1 = state_47328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47328__$1,(7),ch);
} else {
if((state_val_47329 === (6))){
var inst_47323 = (state_47328[(2)]);
var state_47328__$1 = state_47328;
var statearr_47338_48918 = state_47328__$1;
(statearr_47338_48918[(2)] = inst_47323);

(statearr_47338_48918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47329 === (3))){
var inst_47325 = (state_47328[(2)]);
var inst_47326 = cljs.core.async.close_BANG_(out);
var state_47328__$1 = (function (){var statearr_47340 = state_47328;
(statearr_47340[(9)] = inst_47325);

return statearr_47340;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47328__$1,inst_47326);
} else {
if((state_val_47329 === (2))){
var inst_47305 = (state_47328[(8)]);
var inst_47307 = (inst_47305 < n);
var state_47328__$1 = state_47328;
if(cljs.core.truth_(inst_47307)){
var statearr_47345_48919 = state_47328__$1;
(statearr_47345_48919[(1)] = (4));

} else {
var statearr_47346_48920 = state_47328__$1;
(statearr_47346_48920[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47329 === (11))){
var inst_47305 = (state_47328[(8)]);
var inst_47315 = (state_47328[(2)]);
var inst_47316 = (inst_47305 + (1));
var inst_47305__$1 = inst_47316;
var state_47328__$1 = (function (){var statearr_47348 = state_47328;
(statearr_47348[(8)] = inst_47305__$1);

(statearr_47348[(10)] = inst_47315);

return statearr_47348;
})();
var statearr_47351_48921 = state_47328__$1;
(statearr_47351_48921[(2)] = null);

(statearr_47351_48921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47329 === (9))){
var state_47328__$1 = state_47328;
var statearr_47353_48922 = state_47328__$1;
(statearr_47353_48922[(2)] = null);

(statearr_47353_48922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47329 === (5))){
var state_47328__$1 = state_47328;
var statearr_47354_48923 = state_47328__$1;
(statearr_47354_48923[(2)] = null);

(statearr_47354_48923[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47329 === (10))){
var inst_47320 = (state_47328[(2)]);
var state_47328__$1 = state_47328;
var statearr_47355_48924 = state_47328__$1;
(statearr_47355_48924[(2)] = inst_47320);

(statearr_47355_48924[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47329 === (8))){
var inst_47310 = (state_47328[(7)]);
var state_47328__$1 = state_47328;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47328__$1,(11),out,inst_47310);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45621__auto__ = null;
var cljs$core$async$state_machine__45621__auto____0 = (function (){
var statearr_47360 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47360[(0)] = cljs$core$async$state_machine__45621__auto__);

(statearr_47360[(1)] = (1));

return statearr_47360;
});
var cljs$core$async$state_machine__45621__auto____1 = (function (state_47328){
while(true){
var ret_value__45622__auto__ = (function (){try{while(true){
var result__45623__auto__ = switch__45620__auto__(state_47328);
if(cljs.core.keyword_identical_QMARK_(result__45623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45623__auto__;
}
break;
}
}catch (e47363){if((e47363 instanceof Object)){
var ex__45624__auto__ = e47363;
var statearr_47366_48934 = state_47328;
(statearr_47366_48934[(5)] = ex__45624__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47363;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48939 = state_47328;
state_47328 = G__48939;
continue;
} else {
return ret_value__45622__auto__;
}
break;
}
});
cljs$core$async$state_machine__45621__auto__ = function(state_47328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45621__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45621__auto____1.call(this,state_47328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45621__auto____0;
cljs$core$async$state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45621__auto____1;
return cljs$core$async$state_machine__45621__auto__;
})()
})();
var state__45918__auto__ = (function (){var statearr_47367 = (f__45917__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45917__auto__.cljs$core$IFn$_invoke$arity$0() : f__45917__auto__.call(null));
(statearr_47367[(6)] = c__45916__auto___48913);

return statearr_47367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45918__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47394 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47394 = (function (f,ch,meta47395){
this.f = f;
this.ch = ch;
this.meta47395 = meta47395;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47396,meta47395__$1){
var self__ = this;
var _47396__$1 = this;
return (new cljs.core.async.t_cljs$core$async47394(self__.f,self__.ch,meta47395__$1));
}));

(cljs.core.async.t_cljs$core$async47394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47396){
var self__ = this;
var _47396__$1 = this;
return self__.meta47395;
}));

(cljs.core.async.t_cljs$core$async47394.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47394.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47394.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47394.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47394.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47401 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47401 = (function (f,ch,meta47395,_,fn1,meta47402){
this.f = f;
this.ch = ch;
this.meta47395 = meta47395;
this._ = _;
this.fn1 = fn1;
this.meta47402 = meta47402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47403,meta47402__$1){
var self__ = this;
var _47403__$1 = this;
return (new cljs.core.async.t_cljs$core$async47401(self__.f,self__.ch,self__.meta47395,self__._,self__.fn1,meta47402__$1));
}));

(cljs.core.async.t_cljs$core$async47401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47403){
var self__ = this;
var _47403__$1 = this;
return self__.meta47402;
}));

(cljs.core.async.t_cljs$core$async47401.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47401.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async47401.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47401.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__47386_SHARP_){
var G__47419 = (((p1__47386_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__47386_SHARP_) : self__.f.call(null,p1__47386_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__47419) : f1.call(null,G__47419));
});
}));

(cljs.core.async.t_cljs$core$async47401.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47395","meta47395",-353345697,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47394","cljs.core.async/t_cljs$core$async47394",1972705505,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47402","meta47402",-1805746575,null)], null);
}));

(cljs.core.async.t_cljs$core$async47401.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47401.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47401");

(cljs.core.async.t_cljs$core$async47401.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47401");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47401.
 */
cljs.core.async.__GT_t_cljs$core$async47401 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47401(f__$1,ch__$1,meta47395__$1,___$2,fn1__$1,meta47402){
return (new cljs.core.async.t_cljs$core$async47401(f__$1,ch__$1,meta47395__$1,___$2,fn1__$1,meta47402));
});

}

return (new cljs.core.async.t_cljs$core$async47401(self__.f,self__.ch,self__.meta47395,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__47423 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__47423) : self__.f.call(null,G__47423));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async47394.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47394.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async47394.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47395","meta47395",-353345697,null)], null);
}));

(cljs.core.async.t_cljs$core$async47394.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47394.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47394");

(cljs.core.async.t_cljs$core$async47394.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47394");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47394.
 */
cljs.core.async.__GT_t_cljs$core$async47394 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47394(f__$1,ch__$1,meta47395){
return (new cljs.core.async.t_cljs$core$async47394(f__$1,ch__$1,meta47395));
});

}

return (new cljs.core.async.t_cljs$core$async47394(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47436 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47436 = (function (f,ch,meta47437){
this.f = f;
this.ch = ch;
this.meta47437 = meta47437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47438,meta47437__$1){
var self__ = this;
var _47438__$1 = this;
return (new cljs.core.async.t_cljs$core$async47436(self__.f,self__.ch,meta47437__$1));
}));

(cljs.core.async.t_cljs$core$async47436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47438){
var self__ = this;
var _47438__$1 = this;
return self__.meta47437;
}));

(cljs.core.async.t_cljs$core$async47436.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47436.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47436.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47436.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47436.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47436.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async47436.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47437","meta47437",1586779382,null)], null);
}));

(cljs.core.async.t_cljs$core$async47436.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47436.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47436");

(cljs.core.async.t_cljs$core$async47436.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47436");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47436.
 */
cljs.core.async.__GT_t_cljs$core$async47436 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47436(f__$1,ch__$1,meta47437){
return (new cljs.core.async.t_cljs$core$async47436(f__$1,ch__$1,meta47437));
});

}

return (new cljs.core.async.t_cljs$core$async47436(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47449 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47449 = (function (p,ch,meta47450){
this.p = p;
this.ch = ch;
this.meta47450 = meta47450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47451,meta47450__$1){
var self__ = this;
var _47451__$1 = this;
return (new cljs.core.async.t_cljs$core$async47449(self__.p,self__.ch,meta47450__$1));
}));

(cljs.core.async.t_cljs$core$async47449.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47451){
var self__ = this;
var _47451__$1 = this;
return self__.meta47450;
}));

(cljs.core.async.t_cljs$core$async47449.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47449.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47449.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47449.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47449.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47449.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47449.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async47449.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47450","meta47450",547603987,null)], null);
}));

(cljs.core.async.t_cljs$core$async47449.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47449.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47449");

(cljs.core.async.t_cljs$core$async47449.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47449");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47449.
 */
cljs.core.async.__GT_t_cljs$core$async47449 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47449(p__$1,ch__$1,meta47450){
return (new cljs.core.async.t_cljs$core$async47449(p__$1,ch__$1,meta47450));
});

}

return (new cljs.core.async.t_cljs$core$async47449(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__47476 = arguments.length;
switch (G__47476) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45916__auto___48994 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45917__auto__ = (function (){var switch__45620__auto__ = (function (state_47518){
var state_val_47519 = (state_47518[(1)]);
if((state_val_47519 === (7))){
var inst_47514 = (state_47518[(2)]);
var state_47518__$1 = state_47518;
var statearr_47520_49001 = state_47518__$1;
(statearr_47520_49001[(2)] = inst_47514);

(statearr_47520_49001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47519 === (1))){
var state_47518__$1 = state_47518;
var statearr_47521_49002 = state_47518__$1;
(statearr_47521_49002[(2)] = null);

(statearr_47521_49002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47519 === (4))){
var inst_47500 = (state_47518[(7)]);
var inst_47500__$1 = (state_47518[(2)]);
var inst_47501 = (inst_47500__$1 == null);
var state_47518__$1 = (function (){var statearr_47522 = state_47518;
(statearr_47522[(7)] = inst_47500__$1);

return statearr_47522;
})();
if(cljs.core.truth_(inst_47501)){
var statearr_47524_49004 = state_47518__$1;
(statearr_47524_49004[(1)] = (5));

} else {
var statearr_47525_49005 = state_47518__$1;
(statearr_47525_49005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47519 === (6))){
var inst_47500 = (state_47518[(7)]);
var inst_47505 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47500) : p.call(null,inst_47500));
var state_47518__$1 = state_47518;
if(cljs.core.truth_(inst_47505)){
var statearr_47526_49006 = state_47518__$1;
(statearr_47526_49006[(1)] = (8));

} else {
var statearr_47527_49007 = state_47518__$1;
(statearr_47527_49007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47519 === (3))){
var inst_47516 = (state_47518[(2)]);
var state_47518__$1 = state_47518;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47518__$1,inst_47516);
} else {
if((state_val_47519 === (2))){
var state_47518__$1 = state_47518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47518__$1,(4),ch);
} else {
if((state_val_47519 === (11))){
var inst_47508 = (state_47518[(2)]);
var state_47518__$1 = state_47518;
var statearr_47528_49008 = state_47518__$1;
(statearr_47528_49008[(2)] = inst_47508);

(statearr_47528_49008[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47519 === (9))){
var state_47518__$1 = state_47518;
var statearr_47529_49009 = state_47518__$1;
(statearr_47529_49009[(2)] = null);

(statearr_47529_49009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47519 === (5))){
var inst_47503 = cljs.core.async.close_BANG_(out);
var state_47518__$1 = state_47518;
var statearr_47530_49010 = state_47518__$1;
(statearr_47530_49010[(2)] = inst_47503);

(statearr_47530_49010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47519 === (10))){
var inst_47511 = (state_47518[(2)]);
var state_47518__$1 = (function (){var statearr_47531 = state_47518;
(statearr_47531[(8)] = inst_47511);

return statearr_47531;
})();
var statearr_47532_49021 = state_47518__$1;
(statearr_47532_49021[(2)] = null);

(statearr_47532_49021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47519 === (8))){
var inst_47500 = (state_47518[(7)]);
var state_47518__$1 = state_47518;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47518__$1,(11),out,inst_47500);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45621__auto__ = null;
var cljs$core$async$state_machine__45621__auto____0 = (function (){
var statearr_47533 = [null,null,null,null,null,null,null,null,null];
(statearr_47533[(0)] = cljs$core$async$state_machine__45621__auto__);

(statearr_47533[(1)] = (1));

return statearr_47533;
});
var cljs$core$async$state_machine__45621__auto____1 = (function (state_47518){
while(true){
var ret_value__45622__auto__ = (function (){try{while(true){
var result__45623__auto__ = switch__45620__auto__(state_47518);
if(cljs.core.keyword_identical_QMARK_(result__45623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45623__auto__;
}
break;
}
}catch (e47534){if((e47534 instanceof Object)){
var ex__45624__auto__ = e47534;
var statearr_47535_49026 = state_47518;
(statearr_47535_49026[(5)] = ex__45624__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47534;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49027 = state_47518;
state_47518 = G__49027;
continue;
} else {
return ret_value__45622__auto__;
}
break;
}
});
cljs$core$async$state_machine__45621__auto__ = function(state_47518){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45621__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45621__auto____1.call(this,state_47518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45621__auto____0;
cljs$core$async$state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45621__auto____1;
return cljs$core$async$state_machine__45621__auto__;
})()
})();
var state__45918__auto__ = (function (){var statearr_47536 = (f__45917__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45917__auto__.cljs$core$IFn$_invoke$arity$0() : f__45917__auto__.call(null));
(statearr_47536[(6)] = c__45916__auto___48994);

return statearr_47536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45918__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__47539 = arguments.length;
switch (G__47539) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__45916__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45917__auto__ = (function (){var switch__45620__auto__ = (function (state_47601){
var state_val_47602 = (state_47601[(1)]);
if((state_val_47602 === (7))){
var inst_47597 = (state_47601[(2)]);
var state_47601__$1 = state_47601;
var statearr_47604_49030 = state_47601__$1;
(statearr_47604_49030[(2)] = inst_47597);

(statearr_47604_49030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47602 === (20))){
var inst_47567 = (state_47601[(7)]);
var inst_47578 = (state_47601[(2)]);
var inst_47579 = cljs.core.next(inst_47567);
var inst_47553 = inst_47579;
var inst_47554 = null;
var inst_47555 = (0);
var inst_47556 = (0);
var state_47601__$1 = (function (){var statearr_47605 = state_47601;
(statearr_47605[(8)] = inst_47555);

(statearr_47605[(9)] = inst_47554);

(statearr_47605[(10)] = inst_47553);

(statearr_47605[(11)] = inst_47556);

(statearr_47605[(12)] = inst_47578);

return statearr_47605;
})();
var statearr_47614_49031 = state_47601__$1;
(statearr_47614_49031[(2)] = null);

(statearr_47614_49031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47602 === (1))){
var state_47601__$1 = state_47601;
var statearr_47619_49032 = state_47601__$1;
(statearr_47619_49032[(2)] = null);

(statearr_47619_49032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47602 === (4))){
var inst_47542 = (state_47601[(13)]);
var inst_47542__$1 = (state_47601[(2)]);
var inst_47543 = (inst_47542__$1 == null);
var state_47601__$1 = (function (){var statearr_47620 = state_47601;
(statearr_47620[(13)] = inst_47542__$1);

return statearr_47620;
})();
if(cljs.core.truth_(inst_47543)){
var statearr_47621_49033 = state_47601__$1;
(statearr_47621_49033[(1)] = (5));

} else {
var statearr_47622_49034 = state_47601__$1;
(statearr_47622_49034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47602 === (15))){
var state_47601__$1 = state_47601;
var statearr_47626_49035 = state_47601__$1;
(statearr_47626_49035[(2)] = null);

(statearr_47626_49035[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47602 === (21))){
var state_47601__$1 = state_47601;
var statearr_47627_49036 = state_47601__$1;
(statearr_47627_49036[(2)] = null);

(statearr_47627_49036[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47602 === (13))){
var inst_47555 = (state_47601[(8)]);
var inst_47554 = (state_47601[(9)]);
var inst_47553 = (state_47601[(10)]);
var inst_47556 = (state_47601[(11)]);
var inst_47563 = (state_47601[(2)]);
var inst_47564 = (inst_47556 + (1));
var tmp47623 = inst_47555;
var tmp47624 = inst_47554;
var tmp47625 = inst_47553;
var inst_47553__$1 = tmp47625;
var inst_47554__$1 = tmp47624;
var inst_47555__$1 = tmp47623;
var inst_47556__$1 = inst_47564;
var state_47601__$1 = (function (){var statearr_47628 = state_47601;
(statearr_47628[(8)] = inst_47555__$1);

(statearr_47628[(9)] = inst_47554__$1);

(statearr_47628[(10)] = inst_47553__$1);

(statearr_47628[(11)] = inst_47556__$1);

(statearr_47628[(14)] = inst_47563);

return statearr_47628;
})();
var statearr_47629_49037 = state_47601__$1;
(statearr_47629_49037[(2)] = null);

(statearr_47629_49037[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47602 === (22))){
var state_47601__$1 = state_47601;
var statearr_47630_49038 = state_47601__$1;
(statearr_47630_49038[(2)] = null);

(statearr_47630_49038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47602 === (6))){
var inst_47542 = (state_47601[(13)]);
var inst_47551 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47542) : f.call(null,inst_47542));
var inst_47552 = cljs.core.seq(inst_47551);
var inst_47553 = inst_47552;
var inst_47554 = null;
var inst_47555 = (0);
var inst_47556 = (0);
var state_47601__$1 = (function (){var statearr_47631 = state_47601;
(statearr_47631[(8)] = inst_47555);

(statearr_47631[(9)] = inst_47554);

(statearr_47631[(10)] = inst_47553);

(statearr_47631[(11)] = inst_47556);

return statearr_47631;
})();
var statearr_47632_49039 = state_47601__$1;
(statearr_47632_49039[(2)] = null);

(statearr_47632_49039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47602 === (17))){
var inst_47567 = (state_47601[(7)]);
var inst_47571 = cljs.core.chunk_first(inst_47567);
var inst_47572 = cljs.core.chunk_rest(inst_47567);
var inst_47573 = cljs.core.count(inst_47571);
var inst_47553 = inst_47572;
var inst_47554 = inst_47571;
var inst_47555 = inst_47573;
var inst_47556 = (0);
var state_47601__$1 = (function (){var statearr_47633 = state_47601;
(statearr_47633[(8)] = inst_47555);

(statearr_47633[(9)] = inst_47554);

(statearr_47633[(10)] = inst_47553);

(statearr_47633[(11)] = inst_47556);

return statearr_47633;
})();
var statearr_47634_49040 = state_47601__$1;
(statearr_47634_49040[(2)] = null);

(statearr_47634_49040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47602 === (3))){
var inst_47599 = (state_47601[(2)]);
var state_47601__$1 = state_47601;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47601__$1,inst_47599);
} else {
if((state_val_47602 === (12))){
var inst_47587 = (state_47601[(2)]);
var state_47601__$1 = state_47601;
var statearr_47635_49041 = state_47601__$1;
(statearr_47635_49041[(2)] = inst_47587);

(statearr_47635_49041[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47602 === (2))){
var state_47601__$1 = state_47601;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47601__$1,(4),in$);
} else {
if((state_val_47602 === (23))){
var inst_47595 = (state_47601[(2)]);
var state_47601__$1 = state_47601;
var statearr_47636_49042 = state_47601__$1;
(statearr_47636_49042[(2)] = inst_47595);

(statearr_47636_49042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47602 === (19))){
var inst_47582 = (state_47601[(2)]);
var state_47601__$1 = state_47601;
var statearr_47637_49043 = state_47601__$1;
(statearr_47637_49043[(2)] = inst_47582);

(statearr_47637_49043[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47602 === (11))){
var inst_47553 = (state_47601[(10)]);
var inst_47567 = (state_47601[(7)]);
var inst_47567__$1 = cljs.core.seq(inst_47553);
var state_47601__$1 = (function (){var statearr_47638 = state_47601;
(statearr_47638[(7)] = inst_47567__$1);

return statearr_47638;
})();
if(inst_47567__$1){
var statearr_47639_49044 = state_47601__$1;
(statearr_47639_49044[(1)] = (14));

} else {
var statearr_47640_49045 = state_47601__$1;
(statearr_47640_49045[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47602 === (9))){
var inst_47589 = (state_47601[(2)]);
var inst_47590 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_47601__$1 = (function (){var statearr_47641 = state_47601;
(statearr_47641[(15)] = inst_47589);

return statearr_47641;
})();
if(cljs.core.truth_(inst_47590)){
var statearr_47642_49046 = state_47601__$1;
(statearr_47642_49046[(1)] = (21));

} else {
var statearr_47643_49047 = state_47601__$1;
(statearr_47643_49047[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47602 === (5))){
var inst_47545 = cljs.core.async.close_BANG_(out);
var state_47601__$1 = state_47601;
var statearr_47644_49052 = state_47601__$1;
(statearr_47644_49052[(2)] = inst_47545);

(statearr_47644_49052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47602 === (14))){
var inst_47567 = (state_47601[(7)]);
var inst_47569 = cljs.core.chunked_seq_QMARK_(inst_47567);
var state_47601__$1 = state_47601;
if(inst_47569){
var statearr_47645_49055 = state_47601__$1;
(statearr_47645_49055[(1)] = (17));

} else {
var statearr_47646_49056 = state_47601__$1;
(statearr_47646_49056[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47602 === (16))){
var inst_47585 = (state_47601[(2)]);
var state_47601__$1 = state_47601;
var statearr_47647_49057 = state_47601__$1;
(statearr_47647_49057[(2)] = inst_47585);

(statearr_47647_49057[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47602 === (10))){
var inst_47554 = (state_47601[(9)]);
var inst_47556 = (state_47601[(11)]);
var inst_47561 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47554,inst_47556);
var state_47601__$1 = state_47601;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47601__$1,(13),out,inst_47561);
} else {
if((state_val_47602 === (18))){
var inst_47567 = (state_47601[(7)]);
var inst_47576 = cljs.core.first(inst_47567);
var state_47601__$1 = state_47601;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47601__$1,(20),out,inst_47576);
} else {
if((state_val_47602 === (8))){
var inst_47555 = (state_47601[(8)]);
var inst_47556 = (state_47601[(11)]);
var inst_47558 = (inst_47556 < inst_47555);
var inst_47559 = inst_47558;
var state_47601__$1 = state_47601;
if(cljs.core.truth_(inst_47559)){
var statearr_47648_49062 = state_47601__$1;
(statearr_47648_49062[(1)] = (10));

} else {
var statearr_47649_49063 = state_47601__$1;
(statearr_47649_49063[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__45621__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__45621__auto____0 = (function (){
var statearr_47650 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47650[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__45621__auto__);

(statearr_47650[(1)] = (1));

return statearr_47650;
});
var cljs$core$async$mapcat_STAR__$_state_machine__45621__auto____1 = (function (state_47601){
while(true){
var ret_value__45622__auto__ = (function (){try{while(true){
var result__45623__auto__ = switch__45620__auto__(state_47601);
if(cljs.core.keyword_identical_QMARK_(result__45623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45623__auto__;
}
break;
}
}catch (e47651){if((e47651 instanceof Object)){
var ex__45624__auto__ = e47651;
var statearr_47652_49070 = state_47601;
(statearr_47652_49070[(5)] = ex__45624__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47651;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49071 = state_47601;
state_47601 = G__49071;
continue;
} else {
return ret_value__45622__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__45621__auto__ = function(state_47601){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__45621__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__45621__auto____1.call(this,state_47601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__45621__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__45621__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__45621__auto__;
})()
})();
var state__45918__auto__ = (function (){var statearr_47653 = (f__45917__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45917__auto__.cljs$core$IFn$_invoke$arity$0() : f__45917__auto__.call(null));
(statearr_47653[(6)] = c__45916__auto__);

return statearr_47653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45918__auto__);
}));

return c__45916__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47655 = arguments.length;
switch (G__47655) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__47657 = arguments.length;
switch (G__47657) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__47659 = arguments.length;
switch (G__47659) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45916__auto___49086 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45917__auto__ = (function (){var switch__45620__auto__ = (function (state_47683){
var state_val_47684 = (state_47683[(1)]);
if((state_val_47684 === (7))){
var inst_47678 = (state_47683[(2)]);
var state_47683__$1 = state_47683;
var statearr_47685_49087 = state_47683__$1;
(statearr_47685_49087[(2)] = inst_47678);

(statearr_47685_49087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47684 === (1))){
var inst_47660 = null;
var state_47683__$1 = (function (){var statearr_47686 = state_47683;
(statearr_47686[(7)] = inst_47660);

return statearr_47686;
})();
var statearr_47687_49088 = state_47683__$1;
(statearr_47687_49088[(2)] = null);

(statearr_47687_49088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47684 === (4))){
var inst_47663 = (state_47683[(8)]);
var inst_47663__$1 = (state_47683[(2)]);
var inst_47664 = (inst_47663__$1 == null);
var inst_47665 = cljs.core.not(inst_47664);
var state_47683__$1 = (function (){var statearr_47688 = state_47683;
(statearr_47688[(8)] = inst_47663__$1);

return statearr_47688;
})();
if(inst_47665){
var statearr_47689_49089 = state_47683__$1;
(statearr_47689_49089[(1)] = (5));

} else {
var statearr_47690_49090 = state_47683__$1;
(statearr_47690_49090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47684 === (6))){
var state_47683__$1 = state_47683;
var statearr_47691_49091 = state_47683__$1;
(statearr_47691_49091[(2)] = null);

(statearr_47691_49091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47684 === (3))){
var inst_47680 = (state_47683[(2)]);
var inst_47681 = cljs.core.async.close_BANG_(out);
var state_47683__$1 = (function (){var statearr_47692 = state_47683;
(statearr_47692[(9)] = inst_47680);

return statearr_47692;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47683__$1,inst_47681);
} else {
if((state_val_47684 === (2))){
var state_47683__$1 = state_47683;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47683__$1,(4),ch);
} else {
if((state_val_47684 === (11))){
var inst_47663 = (state_47683[(8)]);
var inst_47672 = (state_47683[(2)]);
var inst_47660 = inst_47663;
var state_47683__$1 = (function (){var statearr_47693 = state_47683;
(statearr_47693[(7)] = inst_47660);

(statearr_47693[(10)] = inst_47672);

return statearr_47693;
})();
var statearr_47694_49095 = state_47683__$1;
(statearr_47694_49095[(2)] = null);

(statearr_47694_49095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47684 === (9))){
var inst_47663 = (state_47683[(8)]);
var state_47683__$1 = state_47683;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47683__$1,(11),out,inst_47663);
} else {
if((state_val_47684 === (5))){
var inst_47660 = (state_47683[(7)]);
var inst_47663 = (state_47683[(8)]);
var inst_47667 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47663,inst_47660);
var state_47683__$1 = state_47683;
if(inst_47667){
var statearr_47696_49096 = state_47683__$1;
(statearr_47696_49096[(1)] = (8));

} else {
var statearr_47697_49097 = state_47683__$1;
(statearr_47697_49097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47684 === (10))){
var inst_47675 = (state_47683[(2)]);
var state_47683__$1 = state_47683;
var statearr_47698_49098 = state_47683__$1;
(statearr_47698_49098[(2)] = inst_47675);

(statearr_47698_49098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47684 === (8))){
var inst_47660 = (state_47683[(7)]);
var tmp47695 = inst_47660;
var inst_47660__$1 = tmp47695;
var state_47683__$1 = (function (){var statearr_47699 = state_47683;
(statearr_47699[(7)] = inst_47660__$1);

return statearr_47699;
})();
var statearr_47700_49099 = state_47683__$1;
(statearr_47700_49099[(2)] = null);

(statearr_47700_49099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45621__auto__ = null;
var cljs$core$async$state_machine__45621__auto____0 = (function (){
var statearr_47701 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47701[(0)] = cljs$core$async$state_machine__45621__auto__);

(statearr_47701[(1)] = (1));

return statearr_47701;
});
var cljs$core$async$state_machine__45621__auto____1 = (function (state_47683){
while(true){
var ret_value__45622__auto__ = (function (){try{while(true){
var result__45623__auto__ = switch__45620__auto__(state_47683);
if(cljs.core.keyword_identical_QMARK_(result__45623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45623__auto__;
}
break;
}
}catch (e47702){if((e47702 instanceof Object)){
var ex__45624__auto__ = e47702;
var statearr_47703_49100 = state_47683;
(statearr_47703_49100[(5)] = ex__45624__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47702;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49104 = state_47683;
state_47683 = G__49104;
continue;
} else {
return ret_value__45622__auto__;
}
break;
}
});
cljs$core$async$state_machine__45621__auto__ = function(state_47683){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45621__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45621__auto____1.call(this,state_47683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45621__auto____0;
cljs$core$async$state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45621__auto____1;
return cljs$core$async$state_machine__45621__auto__;
})()
})();
var state__45918__auto__ = (function (){var statearr_47704 = (f__45917__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45917__auto__.cljs$core$IFn$_invoke$arity$0() : f__45917__auto__.call(null));
(statearr_47704[(6)] = c__45916__auto___49086);

return statearr_47704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45918__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47706 = arguments.length;
switch (G__47706) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45916__auto___49120 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45917__auto__ = (function (){var switch__45620__auto__ = (function (state_47744){
var state_val_47745 = (state_47744[(1)]);
if((state_val_47745 === (7))){
var inst_47740 = (state_47744[(2)]);
var state_47744__$1 = state_47744;
var statearr_47746_49121 = state_47744__$1;
(statearr_47746_49121[(2)] = inst_47740);

(statearr_47746_49121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47745 === (1))){
var inst_47707 = (new Array(n));
var inst_47708 = inst_47707;
var inst_47709 = (0);
var state_47744__$1 = (function (){var statearr_47747 = state_47744;
(statearr_47747[(7)] = inst_47709);

(statearr_47747[(8)] = inst_47708);

return statearr_47747;
})();
var statearr_47748_49122 = state_47744__$1;
(statearr_47748_49122[(2)] = null);

(statearr_47748_49122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47745 === (4))){
var inst_47712 = (state_47744[(9)]);
var inst_47712__$1 = (state_47744[(2)]);
var inst_47713 = (inst_47712__$1 == null);
var inst_47714 = cljs.core.not(inst_47713);
var state_47744__$1 = (function (){var statearr_47749 = state_47744;
(statearr_47749[(9)] = inst_47712__$1);

return statearr_47749;
})();
if(inst_47714){
var statearr_47750_49123 = state_47744__$1;
(statearr_47750_49123[(1)] = (5));

} else {
var statearr_47751_49124 = state_47744__$1;
(statearr_47751_49124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47745 === (15))){
var inst_47734 = (state_47744[(2)]);
var state_47744__$1 = state_47744;
var statearr_47752_49125 = state_47744__$1;
(statearr_47752_49125[(2)] = inst_47734);

(statearr_47752_49125[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47745 === (13))){
var state_47744__$1 = state_47744;
var statearr_47753_49126 = state_47744__$1;
(statearr_47753_49126[(2)] = null);

(statearr_47753_49126[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47745 === (6))){
var inst_47709 = (state_47744[(7)]);
var inst_47730 = (inst_47709 > (0));
var state_47744__$1 = state_47744;
if(cljs.core.truth_(inst_47730)){
var statearr_47754_49127 = state_47744__$1;
(statearr_47754_49127[(1)] = (12));

} else {
var statearr_47755_49128 = state_47744__$1;
(statearr_47755_49128[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47745 === (3))){
var inst_47742 = (state_47744[(2)]);
var state_47744__$1 = state_47744;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47744__$1,inst_47742);
} else {
if((state_val_47745 === (12))){
var inst_47708 = (state_47744[(8)]);
var inst_47732 = cljs.core.vec(inst_47708);
var state_47744__$1 = state_47744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47744__$1,(15),out,inst_47732);
} else {
if((state_val_47745 === (2))){
var state_47744__$1 = state_47744;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47744__$1,(4),ch);
} else {
if((state_val_47745 === (11))){
var inst_47724 = (state_47744[(2)]);
var inst_47725 = (new Array(n));
var inst_47708 = inst_47725;
var inst_47709 = (0);
var state_47744__$1 = (function (){var statearr_47756 = state_47744;
(statearr_47756[(10)] = inst_47724);

(statearr_47756[(7)] = inst_47709);

(statearr_47756[(8)] = inst_47708);

return statearr_47756;
})();
var statearr_47757_49129 = state_47744__$1;
(statearr_47757_49129[(2)] = null);

(statearr_47757_49129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47745 === (9))){
var inst_47708 = (state_47744[(8)]);
var inst_47722 = cljs.core.vec(inst_47708);
var state_47744__$1 = state_47744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47744__$1,(11),out,inst_47722);
} else {
if((state_val_47745 === (5))){
var inst_47709 = (state_47744[(7)]);
var inst_47712 = (state_47744[(9)]);
var inst_47708 = (state_47744[(8)]);
var inst_47717 = (state_47744[(11)]);
var inst_47716 = (inst_47708[inst_47709] = inst_47712);
var inst_47717__$1 = (inst_47709 + (1));
var inst_47718 = (inst_47717__$1 < n);
var state_47744__$1 = (function (){var statearr_47758 = state_47744;
(statearr_47758[(11)] = inst_47717__$1);

(statearr_47758[(12)] = inst_47716);

return statearr_47758;
})();
if(cljs.core.truth_(inst_47718)){
var statearr_47759_49130 = state_47744__$1;
(statearr_47759_49130[(1)] = (8));

} else {
var statearr_47760_49131 = state_47744__$1;
(statearr_47760_49131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47745 === (14))){
var inst_47737 = (state_47744[(2)]);
var inst_47738 = cljs.core.async.close_BANG_(out);
var state_47744__$1 = (function (){var statearr_47762 = state_47744;
(statearr_47762[(13)] = inst_47737);

return statearr_47762;
})();
var statearr_47763_49137 = state_47744__$1;
(statearr_47763_49137[(2)] = inst_47738);

(statearr_47763_49137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47745 === (10))){
var inst_47728 = (state_47744[(2)]);
var state_47744__$1 = state_47744;
var statearr_47764_49139 = state_47744__$1;
(statearr_47764_49139[(2)] = inst_47728);

(statearr_47764_49139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47745 === (8))){
var inst_47708 = (state_47744[(8)]);
var inst_47717 = (state_47744[(11)]);
var tmp47761 = inst_47708;
var inst_47708__$1 = tmp47761;
var inst_47709 = inst_47717;
var state_47744__$1 = (function (){var statearr_47765 = state_47744;
(statearr_47765[(7)] = inst_47709);

(statearr_47765[(8)] = inst_47708__$1);

return statearr_47765;
})();
var statearr_47766_49146 = state_47744__$1;
(statearr_47766_49146[(2)] = null);

(statearr_47766_49146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45621__auto__ = null;
var cljs$core$async$state_machine__45621__auto____0 = (function (){
var statearr_47767 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47767[(0)] = cljs$core$async$state_machine__45621__auto__);

(statearr_47767[(1)] = (1));

return statearr_47767;
});
var cljs$core$async$state_machine__45621__auto____1 = (function (state_47744){
while(true){
var ret_value__45622__auto__ = (function (){try{while(true){
var result__45623__auto__ = switch__45620__auto__(state_47744);
if(cljs.core.keyword_identical_QMARK_(result__45623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45623__auto__;
}
break;
}
}catch (e47768){if((e47768 instanceof Object)){
var ex__45624__auto__ = e47768;
var statearr_47769_49151 = state_47744;
(statearr_47769_49151[(5)] = ex__45624__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47768;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49157 = state_47744;
state_47744 = G__49157;
continue;
} else {
return ret_value__45622__auto__;
}
break;
}
});
cljs$core$async$state_machine__45621__auto__ = function(state_47744){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45621__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45621__auto____1.call(this,state_47744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45621__auto____0;
cljs$core$async$state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45621__auto____1;
return cljs$core$async$state_machine__45621__auto__;
})()
})();
var state__45918__auto__ = (function (){var statearr_47770 = (f__45917__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45917__auto__.cljs$core$IFn$_invoke$arity$0() : f__45917__auto__.call(null));
(statearr_47770[(6)] = c__45916__auto___49120);

return statearr_47770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45918__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47772 = arguments.length;
switch (G__47772) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45916__auto___49192 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45917__auto__ = (function (){var switch__45620__auto__ = (function (state_47814){
var state_val_47815 = (state_47814[(1)]);
if((state_val_47815 === (7))){
var inst_47810 = (state_47814[(2)]);
var state_47814__$1 = state_47814;
var statearr_47816_49197 = state_47814__$1;
(statearr_47816_49197[(2)] = inst_47810);

(statearr_47816_49197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47815 === (1))){
var inst_47773 = [];
var inst_47774 = inst_47773;
var inst_47775 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47814__$1 = (function (){var statearr_47817 = state_47814;
(statearr_47817[(7)] = inst_47774);

(statearr_47817[(8)] = inst_47775);

return statearr_47817;
})();
var statearr_47818_49198 = state_47814__$1;
(statearr_47818_49198[(2)] = null);

(statearr_47818_49198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47815 === (4))){
var inst_47778 = (state_47814[(9)]);
var inst_47778__$1 = (state_47814[(2)]);
var inst_47779 = (inst_47778__$1 == null);
var inst_47780 = cljs.core.not(inst_47779);
var state_47814__$1 = (function (){var statearr_47819 = state_47814;
(statearr_47819[(9)] = inst_47778__$1);

return statearr_47819;
})();
if(inst_47780){
var statearr_47820_49200 = state_47814__$1;
(statearr_47820_49200[(1)] = (5));

} else {
var statearr_47821_49205 = state_47814__$1;
(statearr_47821_49205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47815 === (15))){
var inst_47804 = (state_47814[(2)]);
var state_47814__$1 = state_47814;
var statearr_47822_49212 = state_47814__$1;
(statearr_47822_49212[(2)] = inst_47804);

(statearr_47822_49212[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47815 === (13))){
var state_47814__$1 = state_47814;
var statearr_47823_49268 = state_47814__$1;
(statearr_47823_49268[(2)] = null);

(statearr_47823_49268[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47815 === (6))){
var inst_47774 = (state_47814[(7)]);
var inst_47799 = inst_47774.length;
var inst_47800 = (inst_47799 > (0));
var state_47814__$1 = state_47814;
if(cljs.core.truth_(inst_47800)){
var statearr_47824_49269 = state_47814__$1;
(statearr_47824_49269[(1)] = (12));

} else {
var statearr_47825_49270 = state_47814__$1;
(statearr_47825_49270[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47815 === (3))){
var inst_47812 = (state_47814[(2)]);
var state_47814__$1 = state_47814;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47814__$1,inst_47812);
} else {
if((state_val_47815 === (12))){
var inst_47774 = (state_47814[(7)]);
var inst_47802 = cljs.core.vec(inst_47774);
var state_47814__$1 = state_47814;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47814__$1,(15),out,inst_47802);
} else {
if((state_val_47815 === (2))){
var state_47814__$1 = state_47814;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47814__$1,(4),ch);
} else {
if((state_val_47815 === (11))){
var inst_47778 = (state_47814[(9)]);
var inst_47782 = (state_47814[(10)]);
var inst_47792 = (state_47814[(2)]);
var inst_47793 = [];
var inst_47794 = inst_47793.push(inst_47778);
var inst_47774 = inst_47793;
var inst_47775 = inst_47782;
var state_47814__$1 = (function (){var statearr_47826 = state_47814;
(statearr_47826[(11)] = inst_47792);

(statearr_47826[(12)] = inst_47794);

(statearr_47826[(7)] = inst_47774);

(statearr_47826[(8)] = inst_47775);

return statearr_47826;
})();
var statearr_47827_49274 = state_47814__$1;
(statearr_47827_49274[(2)] = null);

(statearr_47827_49274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47815 === (9))){
var inst_47774 = (state_47814[(7)]);
var inst_47790 = cljs.core.vec(inst_47774);
var state_47814__$1 = state_47814;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47814__$1,(11),out,inst_47790);
} else {
if((state_val_47815 === (5))){
var inst_47778 = (state_47814[(9)]);
var inst_47782 = (state_47814[(10)]);
var inst_47775 = (state_47814[(8)]);
var inst_47782__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47778) : f.call(null,inst_47778));
var inst_47783 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47782__$1,inst_47775);
var inst_47784 = cljs.core.keyword_identical_QMARK_(inst_47775,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47785 = ((inst_47783) || (inst_47784));
var state_47814__$1 = (function (){var statearr_47828 = state_47814;
(statearr_47828[(10)] = inst_47782__$1);

return statearr_47828;
})();
if(cljs.core.truth_(inst_47785)){
var statearr_47829_49275 = state_47814__$1;
(statearr_47829_49275[(1)] = (8));

} else {
var statearr_47830_49276 = state_47814__$1;
(statearr_47830_49276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47815 === (14))){
var inst_47807 = (state_47814[(2)]);
var inst_47808 = cljs.core.async.close_BANG_(out);
var state_47814__$1 = (function (){var statearr_47832 = state_47814;
(statearr_47832[(13)] = inst_47807);

return statearr_47832;
})();
var statearr_47833_49277 = state_47814__$1;
(statearr_47833_49277[(2)] = inst_47808);

(statearr_47833_49277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47815 === (10))){
var inst_47797 = (state_47814[(2)]);
var state_47814__$1 = state_47814;
var statearr_47834_49278 = state_47814__$1;
(statearr_47834_49278[(2)] = inst_47797);

(statearr_47834_49278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47815 === (8))){
var inst_47778 = (state_47814[(9)]);
var inst_47782 = (state_47814[(10)]);
var inst_47774 = (state_47814[(7)]);
var inst_47787 = inst_47774.push(inst_47778);
var tmp47831 = inst_47774;
var inst_47774__$1 = tmp47831;
var inst_47775 = inst_47782;
var state_47814__$1 = (function (){var statearr_47835 = state_47814;
(statearr_47835[(14)] = inst_47787);

(statearr_47835[(7)] = inst_47774__$1);

(statearr_47835[(8)] = inst_47775);

return statearr_47835;
})();
var statearr_47836_49279 = state_47814__$1;
(statearr_47836_49279[(2)] = null);

(statearr_47836_49279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45621__auto__ = null;
var cljs$core$async$state_machine__45621__auto____0 = (function (){
var statearr_47837 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47837[(0)] = cljs$core$async$state_machine__45621__auto__);

(statearr_47837[(1)] = (1));

return statearr_47837;
});
var cljs$core$async$state_machine__45621__auto____1 = (function (state_47814){
while(true){
var ret_value__45622__auto__ = (function (){try{while(true){
var result__45623__auto__ = switch__45620__auto__(state_47814);
if(cljs.core.keyword_identical_QMARK_(result__45623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45623__auto__;
}
break;
}
}catch (e47838){if((e47838 instanceof Object)){
var ex__45624__auto__ = e47838;
var statearr_47839_49280 = state_47814;
(statearr_47839_49280[(5)] = ex__45624__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47838;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49281 = state_47814;
state_47814 = G__49281;
continue;
} else {
return ret_value__45622__auto__;
}
break;
}
});
cljs$core$async$state_machine__45621__auto__ = function(state_47814){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45621__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45621__auto____1.call(this,state_47814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45621__auto____0;
cljs$core$async$state_machine__45621__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45621__auto____1;
return cljs$core$async$state_machine__45621__auto__;
})()
})();
var state__45918__auto__ = (function (){var statearr_47840 = (f__45917__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45917__auto__.cljs$core$IFn$_invoke$arity$0() : f__45917__auto__.call(null));
(statearr_47840[(6)] = c__45916__auto___49192);

return statearr_47840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45918__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

Object.defineProperty(module.exports, "Pub", { enumerable: true, get: function() { return cljs.core.async.Pub; } });
Object.defineProperty(module.exports, "reduce", { enumerable: true, get: function() { return cljs.core.async.reduce; } });
Object.defineProperty(module.exports, "remove_GT_", { enumerable: true, get: function() { return cljs.core.async.remove_GT_; } });
Object.defineProperty(module.exports, "timeout", { enumerable: true, get: function() { return cljs.core.async.timeout; } });
Object.defineProperty(module.exports, "unsub_STAR_", { enumerable: true, get: function() { return cljs.core.async.unsub_STAR_; } });
Object.defineProperty(module.exports, "admix_STAR_", { enumerable: true, get: function() { return cljs.core.async.admix_STAR_; } });
Object.defineProperty(module.exports, "unmix_STAR_", { enumerable: true, get: function() { return cljs.core.async.unmix_STAR_; } });
Object.defineProperty(module.exports, "mapcat_STAR_", { enumerable: true, get: function() { return cljs.core.async.mapcat_STAR_; } });
Object.defineProperty(module.exports, "mix", { enumerable: true, get: function() { return cljs.core.async.mix; } });
Object.defineProperty(module.exports, "pub", { enumerable: true, get: function() { return cljs.core.async.pub; } });
Object.defineProperty(module.exports, "take", { enumerable: true, get: function() { return cljs.core.async.take; } });
Object.defineProperty(module.exports, "unsub_all_STAR_", { enumerable: true, get: function() { return cljs.core.async.unsub_all_STAR_; } });
Object.defineProperty(module.exports, "_LT__BANG_", { enumerable: true, get: function() { return cljs.core.async._LT__BANG_; } });
Object.defineProperty(module.exports, "map", { enumerable: true, get: function() { return cljs.core.async.map; } });
Object.defineProperty(module.exports, "Mux", { enumerable: true, get: function() { return cljs.core.async.Mux; } });
Object.defineProperty(module.exports, "mapcat_GT_", { enumerable: true, get: function() { return cljs.core.async.mapcat_GT_; } });
Object.defineProperty(module.exports, "fhnop", { enumerable: true, get: function() { return cljs.core.async.fhnop; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async45980", { enumerable: true, get: function() { return cljs.core.async.__GT_t_cljs$core$async45980; } });
Object.defineProperty(module.exports, "buffer", { enumerable: true, get: function() { return cljs.core.async.buffer; } });
Object.defineProperty(module.exports, "close_BANG_", { enumerable: true, get: function() { return cljs.core.async.close_BANG_; } });
Object.defineProperty(module.exports, "t_cljs$core$async45980", { enumerable: true, get: function() { return cljs.core.async.t_cljs$core$async45980; } });
Object.defineProperty(module.exports, "t_cljs$core$async47436", { enumerable: true, get: function() { return cljs.core.async.t_cljs$core$async47436; } });
Object.defineProperty(module.exports, "offer_BANG_", { enumerable: true, get: function() { return cljs.core.async.offer_BANG_; } });
Object.defineProperty(module.exports, "chan", { enumerable: true, get: function() { return cljs.core.async.chan; } });
Object.defineProperty(module.exports, "solo_mode_STAR_", { enumerable: true, get: function() { return cljs.core.async.solo_mode_STAR_; } });
Object.defineProperty(module.exports, "tap", { enumerable: true, get: function() { return cljs.core.async.tap; } });
Object.defineProperty(module.exports, "admix", { enumerable: true, get: function() { return cljs.core.async.admix; } });
Object.defineProperty(module.exports, "promise_chan", { enumerable: true, get: function() { return cljs.core.async.promise_chan; } });
Object.defineProperty(module.exports, "unique", { enumerable: true, get: function() { return cljs.core.async.unique; } });
Object.defineProperty(module.exports, "muxch_STAR_", { enumerable: true, get: function() { return cljs.core.async.muxch_STAR_; } });
Object.defineProperty(module.exports, "solo_mode", { enumerable: true, get: function() { return cljs.core.async.solo_mode; } });
Object.defineProperty(module.exports, "transduce", { enumerable: true, get: function() { return cljs.core.async.transduce; } });
Object.defineProperty(module.exports, "onto_chan", { enumerable: true, get: function() { return cljs.core.async.onto_chan; } });
Object.defineProperty(module.exports, "to_chan", { enumerable: true, get: function() { return cljs.core.async.to_chan; } });
Object.defineProperty(module.exports, "dropping_buffer", { enumerable: true, get: function() { return cljs.core.async.dropping_buffer; } });
Object.defineProperty(module.exports, "untap_all", { enumerable: true, get: function() { return cljs.core.async.untap_all; } });
Object.defineProperty(module.exports, "t_cljs$core$async46476", { enumerable: true, get: function() { return cljs.core.async.t_cljs$core$async46476; } });
Object.defineProperty(module.exports, "into", { enumerable: true, get: function() { return cljs.core.async.into; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async46981", { enumerable: true, get: function() { return cljs.core.async.__GT_t_cljs$core$async46981; } });
Object.defineProperty(module.exports, "pipeline", { enumerable: true, get: function() { return cljs.core.async.pipeline; } });
Object.defineProperty(module.exports, "t_cljs$core$async46981", { enumerable: true, get: function() { return cljs.core.async.t_cljs$core$async46981; } });
Object.defineProperty(module.exports, "sub", { enumerable: true, get: function() { return cljs.core.async.sub; } });
Object.defineProperty(module.exports, "t_cljs$core$async47401", { enumerable: true, get: function() { return cljs.core.async.t_cljs$core$async47401; } });
Object.defineProperty(module.exports, "alt_flag", { enumerable: true, get: function() { return cljs.core.async.alt_flag; } });
Object.defineProperty(module.exports, "t_cljs$core$async45995", { enumerable: true, get: function() { return cljs.core.async.t_cljs$core$async45995; } });
Object.defineProperty(module.exports, "map_GT_", { enumerable: true, get: function() { return cljs.core.async.map_GT_; } });
Object.defineProperty(module.exports, "pipeline_STAR_", { enumerable: true, get: function() { return cljs.core.async.pipeline_STAR_; } });
Object.defineProperty(module.exports, "pipe", { enumerable: true, get: function() { return cljs.core.async.pipe; } });
Object.defineProperty(module.exports, "unmix", { enumerable: true, get: function() { return cljs.core.async.unmix; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async47449", { enumerable: true, get: function() { return cljs.core.async.__GT_t_cljs$core$async47449; } });
Object.defineProperty(module.exports, "filter_LT_", { enumerable: true, get: function() { return cljs.core.async.filter_LT_; } });
Object.defineProperty(module.exports, "sub_STAR_", { enumerable: true, get: function() { return cljs.core.async.sub_STAR_; } });
Object.defineProperty(module.exports, "remove_LT_", { enumerable: true, get: function() { return cljs.core.async.remove_LT_; } });
Object.defineProperty(module.exports, "untap_STAR_", { enumerable: true, get: function() { return cljs.core.async.untap_STAR_; } });
Object.defineProperty(module.exports, "toggle", { enumerable: true, get: function() { return cljs.core.async.toggle; } });
Object.defineProperty(module.exports, "untap_all_STAR_", { enumerable: true, get: function() { return cljs.core.async.untap_all_STAR_; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async46789", { enumerable: true, get: function() { return cljs.core.async.__GT_t_cljs$core$async46789; } });
Object.defineProperty(module.exports, "sliding_buffer", { enumerable: true, get: function() { return cljs.core.async.sliding_buffer; } });
Object.defineProperty(module.exports, "partition", { enumerable: true, get: function() { return cljs.core.async.partition; } });
Object.defineProperty(module.exports, "Mult", { enumerable: true, get: function() { return cljs.core.async.Mult; } });
Object.defineProperty(module.exports, "merge", { enumerable: true, get: function() { return cljs.core.async.merge; } });
Object.defineProperty(module.exports, "partition_by", { enumerable: true, get: function() { return cljs.core.async.partition_by; } });
Object.defineProperty(module.exports, "unsub_all", { enumerable: true, get: function() { return cljs.core.async.unsub_all; } });
Object.defineProperty(module.exports, "_GT__BANG_", { enumerable: true, get: function() { return cljs.core.async._GT__BANG_; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async47401", { enumerable: true, get: function() { return cljs.core.async.__GT_t_cljs$core$async47401; } });
Object.defineProperty(module.exports, "t_cljs$core$async47394", { enumerable: true, get: function() { return cljs.core.async.t_cljs$core$async47394; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async45995", { enumerable: true, get: function() { return cljs.core.async.__GT_t_cljs$core$async45995; } });
Object.defineProperty(module.exports, "t_cljs$core$async47449", { enumerable: true, get: function() { return cljs.core.async.t_cljs$core$async47449; } });
Object.defineProperty(module.exports, "t_cljs$core$async46789", { enumerable: true, get: function() { return cljs.core.async.t_cljs$core$async46789; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async47436", { enumerable: true, get: function() { return cljs.core.async.__GT_t_cljs$core$async47436; } });
Object.defineProperty(module.exports, "unmix_all_STAR_", { enumerable: true, get: function() { return cljs.core.async.unmix_all_STAR_; } });
Object.defineProperty(module.exports, "nop", { enumerable: true, get: function() { return cljs.core.async.nop; } });
Object.defineProperty(module.exports, "split", { enumerable: true, get: function() { return cljs.core.async.split; } });
Object.defineProperty(module.exports, "unmix_all", { enumerable: true, get: function() { return cljs.core.async.unmix_all; } });
Object.defineProperty(module.exports, "filter_GT_", { enumerable: true, get: function() { return cljs.core.async.filter_GT_; } });
Object.defineProperty(module.exports, "tap_STAR_", { enumerable: true, get: function() { return cljs.core.async.tap_STAR_; } });
Object.defineProperty(module.exports, "untap", { enumerable: true, get: function() { return cljs.core.async.untap; } });
Object.defineProperty(module.exports, "alt_handler", { enumerable: true, get: function() { return cljs.core.async.alt_handler; } });
Object.defineProperty(module.exports, "alts_BANG_", { enumerable: true, get: function() { return cljs.core.async.alts_BANG_; } });
Object.defineProperty(module.exports, "unsub", { enumerable: true, get: function() { return cljs.core.async.unsub; } });
Object.defineProperty(module.exports, "poll_BANG_", { enumerable: true, get: function() { return cljs.core.async.poll_BANG_; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async47394", { enumerable: true, get: function() { return cljs.core.async.__GT_t_cljs$core$async47394; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async45998", { enumerable: true, get: function() { return cljs.core.async.__GT_t_cljs$core$async45998; } });
Object.defineProperty(module.exports, "map_LT_", { enumerable: true, get: function() { return cljs.core.async.map_LT_; } });
Object.defineProperty(module.exports, "fn_handler", { enumerable: true, get: function() { return cljs.core.async.fn_handler; } });
Object.defineProperty(module.exports, "do_alts", { enumerable: true, get: function() { return cljs.core.async.do_alts; } });
Object.defineProperty(module.exports, "random_array", { enumerable: true, get: function() { return cljs.core.async.random_array; } });
Object.defineProperty(module.exports, "pipeline_async", { enumerable: true, get: function() { return cljs.core.async.pipeline_async; } });
Object.defineProperty(module.exports, "Mix", { enumerable: true, get: function() { return cljs.core.async.Mix; } });
Object.defineProperty(module.exports, "toggle_STAR_", { enumerable: true, get: function() { return cljs.core.async.toggle_STAR_; } });
Object.defineProperty(module.exports, "mult", { enumerable: true, get: function() { return cljs.core.async.mult; } });
Object.defineProperty(module.exports, "mapcat_LT_", { enumerable: true, get: function() { return cljs.core.async.mapcat_LT_; } });
Object.defineProperty(module.exports, "ioc_alts_BANG_", { enumerable: true, get: function() { return cljs.core.async.ioc_alts_BANG_; } });
Object.defineProperty(module.exports, "t_cljs$core$async45998", { enumerable: true, get: function() { return cljs.core.async.t_cljs$core$async45998; } });
Object.defineProperty(module.exports, "unblocking_buffer_QMARK_", { enumerable: true, get: function() { return cljs.core.async.unblocking_buffer_QMARK_; } });
Object.defineProperty(module.exports, "put_BANG_", { enumerable: true, get: function() { return cljs.core.async.put_BANG_; } });
Object.defineProperty(module.exports, "take_BANG_", { enumerable: true, get: function() { return cljs.core.async.take_BANG_; } });
Object.defineProperty(module.exports, "__GT_t_cljs$core$async46476", { enumerable: true, get: function() { return cljs.core.async.__GT_t_cljs$core$async46476; } });
//# sourceMappingURL=cljs.core.async.js.map
