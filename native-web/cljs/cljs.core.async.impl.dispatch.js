var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./cljs.core.async.impl.buffers.js");
require("./goog.async.nexttick.js");
var example=$CLJS.example || ($CLJS.example = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});

$CLJS.SHADOW_ENV.setLoaded("cljs.core.async.impl.dispatch.js");

goog.provide('cljs.core.async.impl.dispatch');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('goog.async.nextTick');
cljs.core.async.impl.dispatch.tasks = cljs.core.async.impl.buffers.ring_buffer((32));
cljs.core.async.impl.dispatch.running_QMARK_ = false;
cljs.core.async.impl.dispatch.queued_QMARK_ = false;
cljs.core.async.impl.dispatch.TASK_BATCH_SIZE = (1024);
cljs.core.async.impl.dispatch.process_messages = (function cljs$core$async$impl$dispatch$process_messages(){
(cljs.core.async.impl.dispatch.running_QMARK_ = true);

(cljs.core.async.impl.dispatch.queued_QMARK_ = false);

var count_43363 = (0);
while(true){
var m_43364 = cljs.core.async.impl.dispatch.tasks.pop();
if((m_43364 == null)){
} else {
(m_43364.cljs$core$IFn$_invoke$arity$0 ? m_43364.cljs$core$IFn$_invoke$arity$0() : m_43364.call(null));

if((count_43363 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE)){
var G__43365 = (count_43363 + (1));
count_43363 = G__43365;
continue;
} else {
}
}
break;
}

(cljs.core.async.impl.dispatch.running_QMARK_ = false);

if((cljs.core.async.impl.dispatch.tasks.length > (0))){
return (cljs.core.async.impl.dispatch.queue_dispatcher.cljs$core$IFn$_invoke$arity$0 ? cljs.core.async.impl.dispatch.queue_dispatcher.cljs$core$IFn$_invoke$arity$0() : cljs.core.async.impl.dispatch.queue_dispatcher.call(null));
} else {
return null;
}
});
cljs.core.async.impl.dispatch.queue_dispatcher = (function cljs$core$async$impl$dispatch$queue_dispatcher(){
if(((cljs.core.async.impl.dispatch.queued_QMARK_) && (cljs.core.async.impl.dispatch.running_QMARK_))){
return null;
} else {
(cljs.core.async.impl.dispatch.queued_QMARK_ = true);

return goog.async.nextTick(cljs.core.async.impl.dispatch.process_messages);
}
});
cljs.core.async.impl.dispatch.run = (function cljs$core$async$impl$dispatch$run(f){
cljs.core.async.impl.dispatch.tasks.unbounded_unshift(f);

return cljs.core.async.impl.dispatch.queue_dispatcher();
});
cljs.core.async.impl.dispatch.queue_delay = (function cljs$core$async$impl$dispatch$queue_delay(f,delay){
return setTimeout(f,delay);
});
Object.defineProperty(module.exports, "tasks", { enumerable: true, get: function() { return cljs.core.async.impl.dispatch.tasks; } });
Object.defineProperty(module.exports, "running_QMARK_", { enumerable: true, get: function() { return cljs.core.async.impl.dispatch.running_QMARK_; } });
Object.defineProperty(module.exports, "queued_QMARK_", { enumerable: true, get: function() { return cljs.core.async.impl.dispatch.queued_QMARK_; } });
Object.defineProperty(module.exports, "TASK_BATCH_SIZE", { enumerable: true, get: function() { return cljs.core.async.impl.dispatch.TASK_BATCH_SIZE; } });
Object.defineProperty(module.exports, "queue_dispatcher", { enumerable: true, get: function() { return cljs.core.async.impl.dispatch.queue_dispatcher; } });
Object.defineProperty(module.exports, "process_messages", { enumerable: true, get: function() { return cljs.core.async.impl.dispatch.process_messages; } });
Object.defineProperty(module.exports, "run", { enumerable: true, get: function() { return cljs.core.async.impl.dispatch.run; } });
Object.defineProperty(module.exports, "queue_delay", { enumerable: true, get: function() { return cljs.core.async.impl.dispatch.queue_delay; } });
//# sourceMappingURL=cljs.core.async.impl.dispatch.js.map
