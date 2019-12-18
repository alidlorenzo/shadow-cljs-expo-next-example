var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.dom.js");
require("./cljs.core.async.js");
require("./clojure.string.js");
require("./clojure.data.js");
require("./cljs.core.async.impl.protocols.js");
require("./shadow.util.js");
var example=$CLJS.example || ($CLJS.example = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});

$CLJS.SHADOW_ENV.setLoaded("shadow.object.js");

goog.provide('shadow.object');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.data');
goog.require('cljs.core.async.impl.protocols');
goog.require('shadow.util');
shadow.object.console_friendly = shadow.util.console_friendly;
shadow.object.log = shadow.util.log;
shadow.object.debug = shadow.util.log;
shadow.object.info = shadow.util.log;
shadow.object.warn = shadow.util.log;
shadow.object.error = shadow.util.log;
shadow.object.obj_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
shadow.object.next_id = (function shadow$object$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.obj_id,cljs.core.inc);
});
shadow.object.object_defs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.behavior_fns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instances = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_parent = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.events = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.define_event = (function shadow$object$define_event(event_name,desc,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.events,cljs.core.assoc,event_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),event_name,new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
});
shadow.object.unmunge = (function shadow$object$unmunge(s){
return clojure.string.replace(clojure.string.replace(s,/_DOT_/,"."),/_/,"-");
});
shadow.object.define_event(new cljs.core.Keyword(null,"init","init",-1875481434),"object initialization",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"destroy","destroy",-843660405),"object descruction",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),"cause of destruction, :parent means the parent was destroyed, :direct is default"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","init","dom/init",-1875647652),"called after the dom was created but has not entered the document yet",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922),"the dom that was created"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","entered","dom/entered",506699596),"should be called whenever a dom node is added to the document, since that\n   is not in control of this library its up to you to call this\n   use (so/notify-tree! your-obj :dom/entered) to notify the node and every child you created",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160),"need to rethink this",cljs.core.PersistentVector.EMPTY);

/**
 * @interface
 */
shadow.object.IObject = function(){};

shadow.object._id = (function shadow$object$_id(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_id$arity$1 == null)))))){
return this$.shadow$object$IObject$_id$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.object._id[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.object._id["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-id",this$);
}
}
}
});

shadow.object._type = (function shadow$object$_type(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_type$arity$1 == null)))))){
return this$.shadow$object$IObject$_type$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.object._type[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.object._type["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-type",this$);
}
}
}
});

shadow.object._data = (function shadow$object$_data(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_data$arity$1 == null)))))){
return this$.shadow$object$IObject$_data$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.object._data[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.object._data["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-data",this$);
}
}
}
});

/**
 * update and notify watches
 */
shadow.object._update = (function shadow$object$_update(this$,update_fn){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_update$arity$2 == null)))))){
return this$.shadow$object$IObject$_update$arity$2(this$,update_fn);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.object._update[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4488__auto__.call(null,this$,update_fn));
} else {
var m__4485__auto__ = (shadow.object._update["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4485__auto__.call(null,this$,update_fn));
} else {
throw cljs.core.missing_protocol("IObject.-update",this$);
}
}
}
});

shadow.object._destroy_BANG_ = (function shadow$object$_destroy_BANG_(this$,cause){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_destroy_BANG_$arity$2 == null)))))){
return this$.shadow$object$IObject$_destroy_BANG_$arity$2(this$,cause);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.object._destroy_BANG_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4488__auto__.call(null,this$,cause));
} else {
var m__4485__auto__ = (shadow.object._destroy_BANG_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4485__auto__.call(null,this$,cause));
} else {
throw cljs.core.missing_protocol("IObject.-destroy!",this$);
}
}
}
});

shadow.object.get_type = (function shadow$object$get_type(this$){
return shadow.object._type(this$);
});
shadow.object.get_type_attr = (function shadow$object$get_type_attr(var_args){
var G__48953 = arguments.length;
switch (G__48953) {
case 2:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2 = (function (oref,key){
if((oref == null)){
return null;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null));
}
}));

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3 = (function (oref,key,default$){
if((oref == null)){
return default$;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null),default$);
}
}));

(shadow.object.get_type_attr.cljs$lang$maxFixedArity = 3);

shadow.object.get_dom = (function shadow$object$get_dom(oref){
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(oref);
});
goog.exportSymbol('shadow.object.get_dom', shadow.object.get_dom);
shadow.object.get_by_id = (function shadow$object$get_by_id(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),id);
});
goog.exportSymbol('shadow.object.get_by_id', shadow.object.get_by_id);
shadow.object.get_from_dom = (function shadow$object$get_from_dom(dom){
var oid = shadow.dom.data(dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(oid)){
return shadow.object.get_by_id(parseInt(oid,(10)));
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_from_dom', shadow.object.get_from_dom);
shadow.object.is_object_QMARK_ = (function shadow$object$is_object_QMARK_(obj_or_dom){
var or__4185__auto__ = (((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.object.get_from_dom(obj_or_dom);
}
});
shadow.object.equal_QMARK_ = (function shadow$object$equal_QMARK_(obj,obj_or_dom){
if((((!((obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.shadow$object$IObject$))))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj))){
} else {
throw (new Error(["Assert failed: ","can only test objects","\n","(satisfies? IObject obj)"].join('')));
}

if((((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),shadow.object._id(obj_or_dom));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),(function (){var temp__5735__auto__ = shadow.dom.data(obj_or_dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(temp__5735__auto__)){
var oid = temp__5735__auto__;
return parseInt(oid,(10));
} else {
return null;
}
})());
}
});
shadow.object.get_parent = (function shadow$object$get_parent(oref){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),shadow.object._id(oref));
if(cljs.core.truth_(temp__5735__auto__)){
var parent_id = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),parent_id);
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_parent', shadow.object.get_parent);
shadow.object.get_parent_of_type = (function shadow$object$get_parent_of_type(oref,parent_type){
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(oref);
while(true){
if(cljs.core.truth_(parent)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._type(parent),parent_type)){
return parent;
} else {
var G__49510 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(parent);
parent = G__49510;
continue;
}
} else {
return null;
}
break;
}
});
goog.exportSymbol('shadow.object.get_parent_of_type', shadow.object.get_parent_of_type);
shadow.object.get_children = (function shadow$object$get_children(parent){
var parent_id = shadow.object._id(parent);
var child_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.instance_children),parent_id,cljs.core.PersistentVector.EMPTY);
var instances = cljs.core.deref(shadow.object.instances);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48984_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instances,p1__48984_SHARP_);
}),child_ids));
});
goog.exportSymbol('shadow.object.get_children', shadow.object.get_children);
shadow.object.tree_seq = (function shadow$object$tree_seq(var_args){
var G__49000 = arguments.length;
switch (G__49000) {
case 1:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('shadow.object.tree_seq', shadow.object.tree_seq);

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1 = (function (root){
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2(root,(function (node){
return true;
}));
}));

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2 = (function (root,branch_QMARK_){
return cljs.core.tree_seq(branch_QMARK_,shadow.object.get_children,root);
}));

(shadow.object.tree_seq.cljs$lang$maxFixedArity = 2);

shadow.object.get_children_of_type = (function shadow$object$get_children_of_type(oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49011_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__49011_SHARP_));
}),shadow.object.get_children(oref));
});
/**
 * basically (get-children (:parent this))
 */
shadow.object.get_siblings = (function shadow$object$get_siblings(p__49012){
var map__49013 = p__49012;
var map__49013__$1 = (((((!((map__49013 == null))))?(((((map__49013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49013):map__49013);
var oref = map__49013__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49013__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
if(cljs.core.truth_(parent)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object has no parent, thus has no siblings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

return shadow.object.get_children(parent);
});
/**
 * returns set of all siblings of a common type
 */
shadow.object.get_siblings_of_type = (function shadow$object$get_siblings_of_type(var_args){
var G__49017 = arguments.length;
switch (G__49017) {
case 1:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2(oref,oref);
}));

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2 = (function (oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49015_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__49015_SHARP_));
}),shadow.object.get_siblings(oref));
}));

(shadow.object.get_siblings_of_type.cljs$lang$maxFixedArity = 2);

shadow.object.get_collection_item = (function shadow$object$get_collection_item(oref){
var item_key = new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,item_key);
});
/**
 * find the object that contains this dom node
 */
shadow.object.find_containing_object = (function shadow$object$find_containing_object(dom){
while(true){
var temp__5733__auto__ = shadow.object.get_from_dom(dom);
if(cljs.core.truth_(temp__5733__auto__)){
var obj = temp__5733__auto__;
return obj;
} else {
var temp__5735__auto__ = dom.parentElement;
if(cljs.core.truth_(temp__5735__auto__)){
var parent = temp__5735__auto__;
var G__49539 = parent;
dom = G__49539;
continue;
} else {
return null;
}
}
break;
}
});
shadow.object.notify_BANG_ = (function shadow$object$notify_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___49540 = arguments.length;
var i__4790__auto___49541 = (0);
while(true){
if((i__4790__auto___49541 < len__4789__auto___49540)){
args__4795__auto__.push((arguments[i__4790__auto___49541]));

var G__49542 = (i__4790__auto___49541 + (1));
i__4790__auto___49541 = G__49542;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var temp__5735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),ev], null));
if(cljs.core.truth_(temp__5735__auto__)){
var reactions_to_trigger = temp__5735__auto__;
var seq__49022 = cljs.core.seq(reactions_to_trigger);
var chunk__49023 = null;
var count__49024 = (0);
var i__49025 = (0);
while(true){
if((i__49025 < count__49024)){
var rfn = chunk__49023.cljs$core$IIndexed$_nth$arity$2(null,i__49025);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__49545 = seq__49022;
var G__49546 = chunk__49023;
var G__49547 = count__49024;
var G__49548 = (i__49025 + (1));
seq__49022 = G__49545;
chunk__49023 = G__49546;
count__49024 = G__49547;
i__49025 = G__49548;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__49022);
if(temp__5735__auto____$1){
var seq__49022__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__49022__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49022__$1);
var G__49550 = cljs.core.chunk_rest(seq__49022__$1);
var G__49551 = c__4609__auto__;
var G__49552 = cljs.core.count(c__4609__auto__);
var G__49553 = (0);
seq__49022 = G__49550;
chunk__49023 = G__49551;
count__49024 = G__49552;
i__49025 = G__49553;
continue;
} else {
var rfn = cljs.core.first(seq__49022__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__49554 = cljs.core.next(seq__49022__$1);
var G__49555 = null;
var G__49556 = (0);
var G__49557 = (0);
seq__49022 = G__49554;
chunk__49023 = G__49555;
count__49024 = G__49556;
i__49025 = G__49557;
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
}));

(shadow.object.notify_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_BANG_.cljs$lang$applyTo = (function (seq49018){
var G__49019 = cljs.core.first(seq49018);
var seq49018__$1 = cljs.core.next(seq49018);
var G__49020 = cljs.core.first(seq49018__$1);
var seq49018__$2 = cljs.core.next(seq49018__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49019,G__49020,seq49018__$2);
}));

shadow.object.do_notify_tree = (function shadow$object$do_notify_tree(current_obj,ev,notify_fn){
var seq__49048_49571 = cljs.core.seq(shadow.object.get_children(current_obj));
var chunk__49049_49572 = null;
var count__49050_49573 = (0);
var i__49051_49574 = (0);
while(true){
if((i__49051_49574 < count__49050_49573)){
var child_49575 = chunk__49049_49572.cljs$core$IIndexed$_nth$arity$2(null,i__49051_49574);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_49575,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_49575,ev,notify_fn));


var G__49576 = seq__49048_49571;
var G__49577 = chunk__49049_49572;
var G__49578 = count__49050_49573;
var G__49579 = (i__49051_49574 + (1));
seq__49048_49571 = G__49576;
chunk__49049_49572 = G__49577;
count__49050_49573 = G__49578;
i__49051_49574 = G__49579;
continue;
} else {
var temp__5735__auto___49580 = cljs.core.seq(seq__49048_49571);
if(temp__5735__auto___49580){
var seq__49048_49581__$1 = temp__5735__auto___49580;
if(cljs.core.chunked_seq_QMARK_(seq__49048_49581__$1)){
var c__4609__auto___49582 = cljs.core.chunk_first(seq__49048_49581__$1);
var G__49583 = cljs.core.chunk_rest(seq__49048_49581__$1);
var G__49584 = c__4609__auto___49582;
var G__49585 = cljs.core.count(c__4609__auto___49582);
var G__49586 = (0);
seq__49048_49571 = G__49583;
chunk__49049_49572 = G__49584;
count__49050_49573 = G__49585;
i__49051_49574 = G__49586;
continue;
} else {
var child_49587 = cljs.core.first(seq__49048_49581__$1);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_49587,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_49587,ev,notify_fn));


var G__49588 = cljs.core.next(seq__49048_49581__$1);
var G__49589 = null;
var G__49590 = (0);
var G__49591 = (0);
seq__49048_49571 = G__49588;
chunk__49049_49572 = G__49589;
count__49050_49573 = G__49590;
i__49051_49574 = G__49591;
continue;
}
} else {
}
}
break;
}

return (notify_fn.cljs$core$IFn$_invoke$arity$1 ? notify_fn.cljs$core$IFn$_invoke$arity$1(current_obj) : notify_fn.call(null,current_obj));
});
shadow.object.notify_tree_BANG_ = (function shadow$object$notify_tree_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___49592 = arguments.length;
var i__4790__auto___49593 = (0);
while(true){
if((i__4790__auto___49593 < len__4789__auto___49592)){
args__4795__auto__.push((arguments[i__4790__auto___49593]));

var G__49594 = (i__4790__auto___49593 + (1));
i__4790__auto___49593 = G__49594;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var notify_fn = (function (obj){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,obj,ev,args);
});
return shadow.object.do_notify_tree(oref,ev,notify_fn);
}));

(shadow.object.notify_tree_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_tree_BANG_.cljs$lang$applyTo = (function (seq49059){
var G__49060 = cljs.core.first(seq49059);
var seq49059__$1 = cljs.core.next(seq49059);
var G__49061 = cljs.core.first(seq49059__$1);
var seq49059__$2 = cljs.core.next(seq49059__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49060,G__49061,seq49059__$2);
}));

shadow.object.notify_down_BANG_ = shadow.object.notify_tree_BANG_;
shadow.object.notify_up_BANG_ = (function shadow$object$notify_up_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___49630 = arguments.length;
var i__4790__auto___49631 = (0);
while(true){
if((i__4790__auto___49631 < len__4789__auto___49630)){
args__4795__auto__.push((arguments[i__4790__auto___49631]));

var G__49632 = (i__4790__auto___49631 + (1));
i__4790__auto___49631 = G__49632;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var current = shadow.object.get_parent(oref);
while(true){
if(cljs.core.truth_(current)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,current,ev,args);

var G__49633 = shadow.object.get_parent(current);
current = G__49633;
continue;
} else {
return null;
}
break;
}
}));

(shadow.object.notify_up_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_up_BANG_.cljs$lang$applyTo = (function (seq49092){
var G__49093 = cljs.core.first(seq49092);
var seq49092__$1 = cljs.core.next(seq49092);
var G__49094 = cljs.core.first(seq49092__$1);
var seq49092__$2 = cljs.core.next(seq49092__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49093,G__49094,seq49092__$2);
}));

shadow.object.update_BANG_ = (function shadow$object$update_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___49637 = arguments.length;
var i__4790__auto___49638 = (0);
while(true){
if((i__4790__auto___49638 < len__4789__auto___49637)){
args__4795__auto__.push((arguments[i__4790__auto___49638]));

var G__49639 = (i__4790__auto___49638 + (1));
i__4790__auto___49638 = G__49639;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,update_fn,args){
if(cljs.core.fn_QMARK_(update_fn)){
} else {
throw ["update! expects a fn as second arg, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([update_fn], 0))].join('');
}

var id = shadow.object._id(oref);
var data = shadow.object._data(oref);
var work_fn = (function (data__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(update_fn,data__$1,args);
});
return shadow.object._update(oref,work_fn);
}));

(shadow.object.update_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.update_BANG_.cljs$lang$applyTo = (function (seq49101){
var G__49102 = cljs.core.first(seq49101);
var seq49101__$1 = cljs.core.next(seq49101);
var G__49103 = cljs.core.first(seq49101__$1);
var seq49101__$2 = cljs.core.next(seq49101__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49102,G__49103,seq49101__$2);
}));

shadow.object.return_value = (function shadow$object$return_value(oref,return_value){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360),return_value], 0));
});
shadow.object.set_parent_BANG_ = (function shadow$object$set_parent_BANG_(child,parent){
var child_id = shadow.object._id(child);
var parent_id = shadow.object._id(parent);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instance_parent,cljs.core.assoc,child_id,parent_id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.instance_children,(function (x){
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,child_id));
}));

return true;
});
shadow.object.dom_destroy = (function shadow$object$dom_destroy(this$,cause){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cause,new cljs.core.Keyword(null,"parent","parent",-878878779))){
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
} else {
var temp__5733__auto__ = shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("dom","remove","dom/remove",-131527420));
if(cljs.core.truth_(temp__5733__auto__)){
var custom_remove = temp__5733__auto__;
var G__49210 = this$;
var G__49211 = new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$);
return (custom_remove.cljs$core$IFn$_invoke$arity$2 ? custom_remove.cljs$core$IFn$_invoke$arity$2(G__49210,G__49211) : custom_remove.call(null,G__49210,G__49211));
} else {
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
}
}
});
shadow.object.destroy_BANG_ = (function shadow$object$destroy_BANG_(var_args){
var G__49230 = arguments.length;
switch (G__49230) {
case 1:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword(null,"direct","direct",-1775717856));
}));

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,cause){
return shadow.object._destroy_BANG_(oref,cause);
}));

(shadow.object.destroy_BANG_.cljs$lang$maxFixedArity = 2);

shadow.object.bind_dom_events = (function shadow$object$bind_dom_events(oref,dom,dom_events){
if((cljs.core.rem(cljs.core.count(dom_events),(2)) === (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object defined invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object-type","object-type",-1889869015),shadow.object._type(oref),new cljs.core.Keyword("dom","events","dom/events",1793437527),dom_events], null));
}

var seq__49245 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),dom_events));
var chunk__49247 = null;
var count__49248 = (0);
var i__49249 = (0);
while(true){
if((i__49249 < count__49248)){
var vec__49265 = chunk__49247.cljs$core$IIndexed$_nth$arity$2(null,i__49249);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49265,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49265,(1),null);
var ev_def = vec__49265;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_49642__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__49245,chunk__49247,count__49248,i__49249,vec__49265,ev,handler,ev_def){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__49245,chunk__49247,count__49248,i__49249,vec__49265,ev,handler,ev_def))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__49245,chunk__49247,count__49248,i__49249,handler_49642__$1,vec__49265,ev,handler,ev_def){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_49642__$1.cljs$core$IFn$_invoke$arity$3 ? handler_49642__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_49642__$1.call(null,oref,e,el));
});})(seq__49245,chunk__49247,count__49248,i__49249,handler_49642__$1,vec__49265,ev,handler,ev_def))
);


var G__49643 = seq__49245;
var G__49644 = chunk__49247;
var G__49645 = count__49248;
var G__49646 = (i__49249 + (1));
seq__49245 = G__49643;
chunk__49247 = G__49644;
count__49248 = G__49645;
i__49249 = G__49646;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49245);
if(temp__5735__auto__){
var seq__49245__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49245__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49245__$1);
var G__49647 = cljs.core.chunk_rest(seq__49245__$1);
var G__49648 = c__4609__auto__;
var G__49649 = cljs.core.count(c__4609__auto__);
var G__49650 = (0);
seq__49245 = G__49647;
chunk__49247 = G__49648;
count__49248 = G__49649;
i__49249 = G__49650;
continue;
} else {
var vec__49271 = cljs.core.first(seq__49245__$1);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49271,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49271,(1),null);
var ev_def = vec__49271;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_49651__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__49245,chunk__49247,count__49248,i__49249,vec__49271,ev,handler,ev_def,seq__49245__$1,temp__5735__auto__){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__49245,chunk__49247,count__49248,i__49249,vec__49271,ev,handler,ev_def,seq__49245__$1,temp__5735__auto__))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__49245,chunk__49247,count__49248,i__49249,handler_49651__$1,vec__49271,ev,handler,ev_def,seq__49245__$1,temp__5735__auto__){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_49651__$1.cljs$core$IFn$_invoke$arity$3 ? handler_49651__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_49651__$1.call(null,oref,e,el));
});})(seq__49245,chunk__49247,count__49248,i__49249,handler_49651__$1,vec__49271,ev,handler,ev_def,seq__49245__$1,temp__5735__auto__))
);


var G__49652 = cljs.core.next(seq__49245__$1);
var G__49653 = null;
var G__49654 = (0);
var G__49655 = (0);
seq__49245 = G__49652;
chunk__49247 = G__49653;
count__49248 = G__49654;
i__49249 = G__49655;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.object.reaction_merge = (function shadow$object$reaction_merge(result,p__49282){
var vec__49283 = p__49282;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49283,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49283,(1),null);
if(cljs.core.truth_((function (){var and__4174__auto__ = event;
if(cljs.core.truth_(and__4174__auto__)){
return handler;
} else {
return and__4174__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid reaction",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
}

var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.List.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,handler));
});
shadow.object.merge_reactions = (function shadow$object$merge_reactions(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behaviors must be vectors",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(behavior))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid behavior",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.reaction_merge,result,cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),behavior)));
});
shadow.object.merge_behaviors = (function shadow$object$merge_behaviors(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,behavior);
} else {
if(cljs.core.map_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watch","watch",380988277)], null),(function (watches){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(watches,new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","events","dom/events",1793437527)], null),(function (default$){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)));
}));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behavior not understood",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));

}
}
});
shadow.object.define = (function shadow$object$define(var_args){
var args__4795__auto__ = [];
var len__4789__auto___49678 = arguments.length;
var i__4790__auto___49679 = (0);
while(true){
if((i__4790__auto___49679 < len__4789__auto___49678)){
args__4795__auto__.push((arguments[i__4790__auto___49679]));

var G__49680 = (i__4790__auto___49679 + (1));
i__4790__auto___49679 = G__49680;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.object.define.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.object.define.cljs$core$IFn$_invoke$arity$variadic = (function (id,args){
if((id instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object id needs to be a keyword",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(args))){
} else {
throw ["invalid object definition ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," args: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))].join('');
}

if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),id)){
console.warn(["object already defined ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
} else {
}

try{var odef = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args);
var reactions = shadow.object.merge_reactions(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY));
var odef__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(odef,new cljs.core.Keyword("shadow.object","id","shadow.object/id",-647954841),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),reactions], 0));
var odef__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.merge_behaviors,odef__$1,cljs.core.reverse(new cljs.core.Keyword(null,"behaviors","behaviors",120724909).cljs$core$IFn$_invoke$arity$2(odef__$1,cljs.core.PersistentVector.EMPTY)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.object_defs,cljs.core.assoc,id,odef__$2);

return odef__$2;
}catch (e49288){if((e49288 instanceof Object)){
var e = e49288;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to define object",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
} else {
throw e49288;

}
}}));

(shadow.object.define.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.object.define.cljs$lang$applyTo = (function (seq49286){
var G__49287 = cljs.core.first(seq49286);
var seq49286__$1 = cljs.core.next(seq49286);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49287,seq49286__$1);
}));

shadow.object.merge_defaults = (function shadow$object$merge_defaults(data,type){
var defaults = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"defaults","defaults",976027214)], null));
if((defaults == null)){
return data;
} else {
if(cljs.core.map_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,data], 0));
} else {
if(cljs.core.fn_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(defaults.cljs$core$IFn$_invoke$arity$0 ? defaults.cljs$core$IFn$_invoke$arity$0() : defaults.call(null)),data], 0));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid object defaults",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaults","defaults",976027214),defaults,new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
}
}
});
shadow.object.make_dom = (function shadow$object$make_dom(var_args){
var G__49290 = arguments.length;
switch (G__49290) {
case 3:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3 = (function (oref,dom_key,events_key){
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4(oref,dom_key,events_key,null);
}));

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4 = (function (oref,dom_key,events_key,value){
var dom_fn = (((dom_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(oref,dom_key):dom_key);
var events = (((events_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3(oref,events_key,cljs.core.PersistentVector.EMPTY):events_key);
var dom = (function (){var G__49291 = (dom_fn.cljs$core$IFn$_invoke$arity$2 ? dom_fn.cljs$core$IFn$_invoke$arity$2(oref,value) : dom_fn.call(null,oref,value));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__49291) : shadow.dom.build.call(null,G__49291));
})();
shadow.object.bind_dom_events(oref,dom,events);

return dom;
}));

(shadow.object.make_dom.cljs$lang$maxFixedArity = 4);

shadow.object.alive_QMARK_ = (function shadow$object$alive_QMARK_(obj){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.instances),shadow.object._id(obj));
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
shadow.object.Watch = (function (key,handler,__meta,__extmap,__hash){
this.key = key;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k49293,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__49297 = k49293;
var G__49297__$1 = (((G__49297 instanceof cljs.core.Keyword))?G__49297.fqn:null);
switch (G__49297__$1) {
case "key":
return self__.key;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49293,else__4442__auto__);

}
}));

(shadow.object.Watch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__49298){
var vec__49299 = p__49298;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49299,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49299,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.object.Watch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.object.Watch{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49292){
var self__ = this;
var G__49292__$1 = this;
return (new cljs.core.RecordIter((0),G__49292__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.object.Watch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.object.Watch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__49302 = (function (coll__4436__auto__){
return (-17677043 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__49302(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.object.Watch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49294,other49295){
var self__ = this;
var this49294__$1 = this;
return (((!((other49295 == null)))) && ((this49294__$1.constructor === other49295.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49294__$1.key,other49295.key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49294__$1.handler,other49295.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49294__$1.__extmap,other49295.__extmap)));
}));

(shadow.object.Watch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__49292){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__49303 = cljs.core.keyword_identical_QMARK_;
var expr__49304 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__49306 = new cljs.core.Keyword(null,"key","key",-1516042587);
var G__49307 = expr__49304;
return (pred__49303.cljs$core$IFn$_invoke$arity$2 ? pred__49303.cljs$core$IFn$_invoke$arity$2(G__49306,G__49307) : pred__49303.call(null,G__49306,G__49307));
})())){
return (new shadow.object.Watch(G__49292,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49308 = new cljs.core.Keyword(null,"handler","handler",-195596612);
var G__49309 = expr__49304;
return (pred__49303.cljs$core$IFn$_invoke$arity$2 ? pred__49303.cljs$core$IFn$_invoke$arity$2(G__49308,G__49309) : pred__49303.call(null,G__49308,G__49309));
})())){
return (new shadow.object.Watch(self__.key,G__49292,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__49292),null));
}
}
}));

(shadow.object.Watch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__49292){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,G__49292,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.object.Watch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null);
}));

(shadow.object.Watch.cljs$lang$type = true);

(shadow.object.Watch.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.object/Watch",null,(1),null));
}));

(shadow.object.Watch.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.object/Watch");
}));

/**
 * Positional factory function for shadow.object/Watch.
 */
shadow.object.__GT_Watch = (function shadow$object$__GT_Watch(key,handler){
return (new shadow.object.Watch(key,handler,null,null,null));
});

/**
 * Factory function for shadow.object/Watch, taking a map of keywords to field values.
 */
shadow.object.map__GT_Watch = (function shadow$object$map__GT_Watch(G__49296){
var extmap__4478__auto__ = (function (){var G__49310 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49296,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612)], 0));
if(cljs.core.record_QMARK_(G__49296)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49310);
} else {
return G__49310;
}
})();
return (new shadow.object.Watch(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__49296),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__49296),null,cljs.core.not_empty(extmap__4478__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {shadow.object.IObject}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {shadow.dom.SVGElement}
 * @implements {cljs.core.ILookup}
*/
shadow.object.ObjectRef = (function (id,type,data,watches,result_chan){
this.id = id;
this.type = type;
this.data = data;
this.watches = watches;
this.result_chan = result_chan;
this.cljs$lang$protocol_mask$partition0$ = 2149613824;
this.cljs$lang$protocol_mask$partition1$ = 2;
});
(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.result_chan,handler);
}));

(shadow.object.ObjectRef.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.data,k);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,d){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.data,k,d);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,["#<ObjectRef {:id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.id),", :type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.type),"}>"].join(''));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof shadow.object.ObjectRef)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.shadow$object$IObject$_id$arity$1(null),other.shadow$object$IObject$_id$arity$1(null))));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
throw (new Error("who be calling?"));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.watches,(new shadow.object.Watch(key,f,null,null,null))));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__49311_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__49311_SHARP_));
}),self__.watches));
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_type$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.type;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_data$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_update$arity$2 = (function (this$,update_fn){
var self__ = this;
var this$__$1 = this;
var old = self__.data;
var new$ = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(self__.data) : update_fn.call(null,self__.data));
(self__.data = new$);

var seq__49312 = cljs.core.seq(self__.watches);
var chunk__49313 = null;
var count__49314 = (0);
var i__49315 = (0);
while(true){
if((i__49315 < count__49314)){
var map__49320 = chunk__49313.cljs$core$IIndexed$_nth$arity$2(null,i__49315);
var map__49320__$1 = (((((!((map__49320 == null))))?(((((map__49320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49320):map__49320);
var watch = map__49320__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49320__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49320__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__49694 = seq__49312;
var G__49695 = chunk__49313;
var G__49696 = count__49314;
var G__49697 = (i__49315 + (1));
seq__49312 = G__49694;
chunk__49313 = G__49695;
count__49314 = G__49696;
i__49315 = G__49697;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49312);
if(temp__5735__auto__){
var seq__49312__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49312__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49312__$1);
var G__49698 = cljs.core.chunk_rest(seq__49312__$1);
var G__49699 = c__4609__auto__;
var G__49700 = cljs.core.count(c__4609__auto__);
var G__49701 = (0);
seq__49312 = G__49698;
chunk__49313 = G__49699;
count__49314 = G__49700;
i__49315 = G__49701;
continue;
} else {
var map__49322 = cljs.core.first(seq__49312__$1);
var map__49322__$1 = (((((!((map__49322 == null))))?(((((map__49322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49322):map__49322);
var watch = map__49322__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49322__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49322__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__49702 = cljs.core.next(seq__49312__$1);
var G__49703 = null;
var G__49704 = (0);
var G__49705 = (0);
seq__49312 = G__49702;
chunk__49313 = G__49703;
count__49314 = G__49704;
i__49315 = G__49705;
continue;
}
} else {
return null;
}
}
break;
}
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_destroy_BANG_$arity$2 = (function (this$,cause){
var self__ = this;
var this$__$1 = this;
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),self__.id);
var seq__49324_49706 = cljs.core.seq(shadow.object.get_children(this$__$1));
var chunk__49325_49707 = null;
var count__49326_49708 = (0);
var i__49327_49709 = (0);
while(true){
if((i__49327_49709 < count__49326_49708)){
var child_49710 = chunk__49325_49707.cljs$core$IIndexed$_nth$arity$2(null,i__49327_49709);
shadow.object._destroy_BANG_(child_49710,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__49711 = seq__49324_49706;
var G__49712 = chunk__49325_49707;
var G__49713 = count__49326_49708;
var G__49714 = (i__49327_49709 + (1));
seq__49324_49706 = G__49711;
chunk__49325_49707 = G__49712;
count__49326_49708 = G__49713;
i__49327_49709 = G__49714;
continue;
} else {
var temp__5735__auto___49715 = cljs.core.seq(seq__49324_49706);
if(temp__5735__auto___49715){
var seq__49324_49716__$1 = temp__5735__auto___49715;
if(cljs.core.chunked_seq_QMARK_(seq__49324_49716__$1)){
var c__4609__auto___49717 = cljs.core.chunk_first(seq__49324_49716__$1);
var G__49718 = cljs.core.chunk_rest(seq__49324_49716__$1);
var G__49719 = c__4609__auto___49717;
var G__49720 = cljs.core.count(c__4609__auto___49717);
var G__49721 = (0);
seq__49324_49706 = G__49718;
chunk__49325_49707 = G__49719;
count__49326_49708 = G__49720;
i__49327_49709 = G__49721;
continue;
} else {
var child_49722 = cljs.core.first(seq__49324_49716__$1);
shadow.object._destroy_BANG_(child_49722,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__49723 = cljs.core.next(seq__49324_49716__$1);
var G__49724 = null;
var G__49725 = (0);
var G__49726 = (0);
seq__49324_49706 = G__49723;
chunk__49325_49707 = G__49724;
count__49326_49708 = G__49725;
i__49327_49709 = G__49726;
continue;
}
} else {
}
}
break;
}

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,new cljs.core.Keyword(null,"destroy","destroy",-843660405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cause], 0));

shadow.object.dom_destroy(this$__$1,cause);

var return_value_49727 = new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360).cljs$core$IFn$_invoke$arity$1(this$__$1);
if((return_value_49727 == null)){
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.result_chan,return_value_49727);
}

cljs.core.async.close_BANG_(self__.result_chan);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instances,cljs.core.dissoc,self__.id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instance_parent,cljs.core.dissoc,self__.id);

if(cljs.core.truth_(parent_id)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(shadow.object.instance_children,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.id], 0));
} else {
return null;
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"result-chan","result-chan",3070926,null)], null);
}));

(shadow.object.ObjectRef.cljs$lang$type = true);

(shadow.object.ObjectRef.cljs$lang$ctorStr = "shadow.object/ObjectRef");

(shadow.object.ObjectRef.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.object/ObjectRef");
}));

/**
 * Positional factory function for shadow.object/ObjectRef.
 */
shadow.object.__GT_ObjectRef = (function shadow$object$__GT_ObjectRef(id,type,data,watches,result_chan){
return (new shadow.object.ObjectRef(id,type,data,watches,result_chan));
});

shadow.object.add_reaction_BANG_ = (function shadow$object$add_reaction_BANG_(var_args){
var G__49329 = arguments.length;
switch (G__49329) {
case 3:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (oref,ev,handler_fn){
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev,handler_fn], null));
}));

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,list){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,list], 0));
}));

(shadow.object.add_reaction_BANG_.cljs$lang$maxFixedArity = 3);

shadow.object.bind_change = (function shadow$object$bind_change(var_args){
var G__49331 = arguments.length;
switch (G__49331) {
case 3:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,callback){
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4(oref,attr,callback,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind-change"));
}));

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4 = (function (oref,attr,callback,watch_key){
if((((!((oref == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === oref.shadow$object$IObject$))))?true:(((!oref.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("binding currently only supports shadow objects, other atoms might leak, may add later",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], null));
}

var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
return cljs.core.add_watch(oref,watch_key,(function shadow$object$bind_change_watch(_,___$1,old,new$){
var ov = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old,attr__$1);
var nv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new$,attr__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ov,nv)){
return null;
} else {
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(ov,nv) : callback.call(null,ov,nv));
}
}));
}));

(shadow.object.bind_change.cljs$lang$maxFixedArity = 4);

shadow.object.dom_enter = (function shadow$object$dom_enter(parent,child){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(parent,child);

if(cljs.core.truth_(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1(parent))){
return shadow.object.notify_tree_BANG_(child,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
} else {
return null;
}
});
shadow.object.create = (function shadow$object$create(var_args){
var args__4795__auto__ = [];
var len__4789__auto___49734 = arguments.length;
var i__4790__auto___49735 = (0);
while(true){
if((i__4790__auto___49735 < len__4789__auto___49734)){
args__4795__auto__.push((arguments[i__4790__auto___49735]));

var G__49736 = (i__4790__auto___49735 + (1));
i__4790__auto___49735 = G__49736;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return shadow.object.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(shadow.object.create.cljs$core$IFn$_invoke$arity$variadic = (function (type,args,node_children){
if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),type)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["cannot create unknown child type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.map_QMARK_(args)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("so/create second arg must be a map",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

var oid = shadow.object.next_id();
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(args);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var odef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),type);
var obj = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(shadow.object.merge_defaults(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword("shadow.object","object-id","shadow.object/object-id",-685993804),oid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.get.cljs$core$IFn$_invoke$arity$3(odef,new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.PersistentArrayMap.EMPTY)], 0)),type),new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dom","dom",-1236537922)], 0));
var oref = (new shadow.object.ObjectRef(oid,type,obj,cljs.core.PersistentVector.EMPTY,result_chan));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instances,cljs.core.assoc,oid,oref);

if(cljs.core.truth_(parent)){
shadow.object.set_parent_BANG_(oref,parent);
} else {
}

shadow.object.notify_BANG_(oref,new cljs.core.Keyword(null,"init","init",-1875481434));

var dom_events_49737 = new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY);
var temp__5733__auto___49738 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__5733__auto___49738)){
var dom_49739 = temp__5733__auto___49738;
shadow.dom.set_data(dom_49739,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.bind_dom_events(oref,dom_49739,dom_events_49737);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_49739], 0));

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_49739], 0));
} else {
var temp__5735__auto___49740 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5735__auto___49740)){
var dom_fn_49741 = temp__5735__auto___49740;
var dom_49742 = (function (){var G__49336 = (dom_fn_49741.cljs$core$IFn$_invoke$arity$2 ? dom_fn_49741.cljs$core$IFn$_invoke$arity$2(oref,node_children) : dom_fn_49741.call(null,oref,node_children));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__49336) : shadow.dom.build.call(null,G__49336));
})();
shadow.dom.set_data(dom_49742,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_49742], 0));

shadow.object.bind_dom_events(oref,dom_49742,dom_events_49737);

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_49742], 0));
} else {
}
}

var temp__5735__auto___49743 = new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5735__auto___49743)){
var watches_49744 = temp__5735__auto___49743;
var seq__49337_49745 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),watches_49744));
var chunk__49338_49746 = null;
var count__49339_49747 = (0);
var i__49340_49748 = (0);
while(true){
if((i__49340_49748 < count__49339_49747)){
var vec__49347_49749 = chunk__49338_49746.cljs$core$IIndexed$_nth$arity$2(null,i__49340_49748);
var attr_49750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49347_49749,(0),null);
var handler_49751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49347_49749,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_49750,((function (seq__49337_49745,chunk__49338_49746,count__49339_49747,i__49340_49748,vec__49347_49749,attr_49750,handler_49751,watches_49744,temp__5735__auto___49743,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_49751.cljs$core$IFn$_invoke$arity$3 ? handler_49751.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_49751.call(null,oref,old,new$));
});})(seq__49337_49745,chunk__49338_49746,count__49339_49747,i__49340_49748,vec__49347_49749,attr_49750,handler_49751,watches_49744,temp__5735__auto___49743,oid,parent,result_chan,odef,obj,oref))
);


var G__49755 = seq__49337_49745;
var G__49756 = chunk__49338_49746;
var G__49757 = count__49339_49747;
var G__49758 = (i__49340_49748 + (1));
seq__49337_49745 = G__49755;
chunk__49338_49746 = G__49756;
count__49339_49747 = G__49757;
i__49340_49748 = G__49758;
continue;
} else {
var temp__5735__auto___49759__$1 = cljs.core.seq(seq__49337_49745);
if(temp__5735__auto___49759__$1){
var seq__49337_49760__$1 = temp__5735__auto___49759__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49337_49760__$1)){
var c__4609__auto___49761 = cljs.core.chunk_first(seq__49337_49760__$1);
var G__49762 = cljs.core.chunk_rest(seq__49337_49760__$1);
var G__49763 = c__4609__auto___49761;
var G__49764 = cljs.core.count(c__4609__auto___49761);
var G__49765 = (0);
seq__49337_49745 = G__49762;
chunk__49338_49746 = G__49763;
count__49339_49747 = G__49764;
i__49340_49748 = G__49765;
continue;
} else {
var vec__49350_49766 = cljs.core.first(seq__49337_49760__$1);
var attr_49767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49350_49766,(0),null);
var handler_49768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49350_49766,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_49767,((function (seq__49337_49745,chunk__49338_49746,count__49339_49747,i__49340_49748,vec__49350_49766,attr_49767,handler_49768,seq__49337_49760__$1,temp__5735__auto___49759__$1,watches_49744,temp__5735__auto___49743,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_49768.cljs$core$IFn$_invoke$arity$3 ? handler_49768.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_49768.call(null,oref,old,new$));
});})(seq__49337_49745,chunk__49338_49746,count__49339_49747,i__49340_49748,vec__49350_49766,attr_49767,handler_49768,seq__49337_49760__$1,temp__5735__auto___49759__$1,watches_49744,temp__5735__auto___49743,oid,parent,result_chan,odef,obj,oref))
);


var G__49769 = cljs.core.next(seq__49337_49760__$1);
var G__49770 = null;
var G__49771 = (0);
var G__49772 = (0);
seq__49337_49745 = G__49769;
chunk__49338_49746 = G__49770;
count__49339_49747 = G__49771;
i__49340_49748 = G__49772;
continue;
}
} else {
}
}
break;
}
} else {
}

return oref;
}));

(shadow.object.create.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.create.cljs$lang$applyTo = (function (seq49333){
var G__49334 = cljs.core.first(seq49333);
var seq49333__$1 = cljs.core.next(seq49333);
var G__49335 = cljs.core.first(seq49333__$1);
var seq49333__$2 = cljs.core.next(seq49333__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49334,G__49335,seq49333__$2);
}));

/**
 * [oref attr node-gen] produces a node via (node-gen new-value)
 * watches obj for changes and replaces the generated node on change (node-gen defaults to str)
 * 
 *   only use if the node has no attached behavior like clicks, use bind with an extra object for those
 */
shadow.object.bind_simple = (function shadow$object$bind_simple(var_args){
var G__49355 = arguments.length;
switch (G__49355) {
case 2:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2 = (function (oref,attr){
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3(oref,attr,cljs.core.str);
}));

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,node_gen){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var node_get = (function (p1__49353_SHARP_){
var G__49356 = (node_gen.cljs$core$IFn$_invoke$arity$1 ? node_gen.cljs$core$IFn$_invoke$arity$1(p1__49353_SHARP_) : node_gen.call(null,p1__49353_SHARP_));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__49356) : shadow.dom.build.call(null,G__49356));
});
var node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(node_get(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1)));
var bind_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind");
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_node = node_get(new$);
var current_node = cljs.core.deref(node);
shadow.dom.replace_node(current_node,new_node);

return cljs.core.reset_BANG_(node,new_node);
}));

return cljs.core.deref(node);
}));

(shadow.object.bind_simple.cljs$lang$maxFixedArity = 3);

/**
 * bind the given attribute a child item
 *   the item will be recreated whenever the value changes (old one will be destroyed)
 */
shadow.object.bind = (function shadow$object$bind(oref,attr,item_type,item_key,item_attrs){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var curval = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1);
var make_child_fn = (function (value){
return shadow.object.create(item_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item_attrs,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),oref,item_key,value])], 0)));
});
var child = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(make_child_fn(curval));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_child = make_child_fn(new$);
var current_node = cljs.core.deref(child);
shadow.dom.replace_node(current_node,new_child);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(child));

cljs.core.reset_BANG_(child,new_child);

var G__49357 = new_child;
var G__49358 = new cljs.core.Keyword("dom","entered","dom/entered",506699596);
return (shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2 ? shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2(G__49357,G__49358) : shadow.object.notify_down_BANG_.call(null,G__49357,G__49358));
}));

return cljs.core.deref(child);
});
shadow.object.coll_destroy_children = (function shadow$object$coll_destroy_children(children,c,diff){
var seq__49359_49774 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(c + diff),c));
var chunk__49360_49775 = null;
var count__49361_49776 = (0);
var i__49362_49777 = (0);
while(true){
if((i__49362_49777 < count__49361_49776)){
var obj_49778 = chunk__49360_49775.cljs$core$IIndexed$_nth$arity$2(null,i__49362_49777);
var obj_49779__$1 = shadow.object.get_from_dom(obj_49778);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_49779__$1);


var G__49780 = seq__49359_49774;
var G__49781 = chunk__49360_49775;
var G__49782 = count__49361_49776;
var G__49783 = (i__49362_49777 + (1));
seq__49359_49774 = G__49780;
chunk__49360_49775 = G__49781;
count__49361_49776 = G__49782;
i__49362_49777 = G__49783;
continue;
} else {
var temp__5735__auto___49784 = cljs.core.seq(seq__49359_49774);
if(temp__5735__auto___49784){
var seq__49359_49785__$1 = temp__5735__auto___49784;
if(cljs.core.chunked_seq_QMARK_(seq__49359_49785__$1)){
var c__4609__auto___49786 = cljs.core.chunk_first(seq__49359_49785__$1);
var G__49787 = cljs.core.chunk_rest(seq__49359_49785__$1);
var G__49788 = c__4609__auto___49786;
var G__49789 = cljs.core.count(c__4609__auto___49786);
var G__49790 = (0);
seq__49359_49774 = G__49787;
chunk__49360_49775 = G__49788;
count__49361_49776 = G__49789;
i__49362_49777 = G__49790;
continue;
} else {
var obj_49791 = cljs.core.first(seq__49359_49785__$1);
var obj_49793__$1 = shadow.object.get_from_dom(obj_49791);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_49793__$1);


var G__49794 = cljs.core.next(seq__49359_49785__$1);
var G__49795 = null;
var G__49796 = (0);
var G__49797 = (0);
seq__49359_49774 = G__49794;
chunk__49360_49775 = G__49795;
count__49361_49776 = G__49796;
i__49362_49777 = G__49797;
continue;
}
} else {
}
}
break;
}

return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(0),(c + diff));
});
shadow.object.bind_children = (function shadow$object$bind_children(var_args){
var G__49365 = arguments.length;
switch (G__49365) {
case 5:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5 = (function (node,parent,attr,item_type,item_key){
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6(node,parent,attr,item_type,item_key,(function (p1__49363_SHARP_){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p1__49363_SHARP_);
}));
}));

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6 = (function (node,parent,attr,item_type,item_key,coll_transform){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var update_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var coll_dom = (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(node) : shadow.dom.build.call(null,node));
var make_item_fn = (function (p__49366){
var vec__49367 = p__49366;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49367,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49367,(1),null);
var obj = shadow.object.create(item_type,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048),attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616),key,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366),item_key,item_key,val]));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(obj,item_key,(function (old,new$){
var parent_key = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(obj));
(shadow.object.log.cljs$core$IFn$_invoke$arity$6 ? shadow.object.log.cljs$core$IFn$_invoke$arity$6("direct child update",parent,obj,key,parent_key,new$) : shadow.object.log.call(null,"direct child update",parent,obj,key,parent_key,new$));

cljs.core.reset_BANG_(update_children,false);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent_key,new$], 0));

return cljs.core.reset_BANG_(update_children,true);
}));

return obj;
});
var seq__49370_49802 = cljs.core.seq((function (){var G__49375 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,attr__$1);
return (coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(G__49375) : coll_transform.call(null,G__49375));
})());
var chunk__49371_49803 = null;
var count__49372_49804 = (0);
var i__49373_49805 = (0);
while(true){
if((i__49373_49805 < count__49372_49804)){
var item_49807 = chunk__49371_49803.cljs$core$IIndexed$_nth$arity$2(null,i__49373_49805);
shadow.object.dom_enter(coll_dom,make_item_fn(item_49807));


var G__49809 = seq__49370_49802;
var G__49810 = chunk__49371_49803;
var G__49811 = count__49372_49804;
var G__49812 = (i__49373_49805 + (1));
seq__49370_49802 = G__49809;
chunk__49371_49803 = G__49810;
count__49372_49804 = G__49811;
i__49373_49805 = G__49812;
continue;
} else {
var temp__5735__auto___49813 = cljs.core.seq(seq__49370_49802);
if(temp__5735__auto___49813){
var seq__49370_49814__$1 = temp__5735__auto___49813;
if(cljs.core.chunked_seq_QMARK_(seq__49370_49814__$1)){
var c__4609__auto___49815 = cljs.core.chunk_first(seq__49370_49814__$1);
var G__49816 = cljs.core.chunk_rest(seq__49370_49814__$1);
var G__49817 = c__4609__auto___49815;
var G__49818 = cljs.core.count(c__4609__auto___49815);
var G__49819 = (0);
seq__49370_49802 = G__49816;
chunk__49371_49803 = G__49817;
count__49372_49804 = G__49818;
i__49373_49805 = G__49819;
continue;
} else {
var item_49820 = cljs.core.first(seq__49370_49814__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_49820));


var G__49821 = cljs.core.next(seq__49370_49814__$1);
var G__49822 = null;
var G__49823 = (0);
var G__49824 = (0);
seq__49370_49802 = G__49821;
chunk__49371_49803 = G__49822;
count__49372_49804 = G__49823;
i__49373_49805 = G__49824;
continue;
}
} else {
}
}
break;
}

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(parent,attr__$1,(function shadow$object$bind_children_watch(old,new$){
if(cljs.core.truth_(cljs.core.deref(update_children))){
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,shadow.dom.children(coll_dom));
var new_coll = cljs.core.vec((coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(new$) : coll_transform.call(null,new$)));
var count_children = cljs.core.count(children);
var count_new = cljs.core.count(new$);
var diff = (count_new - count_children);
var children__$1 = (((diff < (0)))?shadow.object.coll_destroy_children(children,count_children,diff):children);
var count_children__$1 = (function (){var x__4276__auto__ = count_new;
var y__4277__auto__ = count_children;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
var n__4666__auto___49828 = count_children__$1;
var idx_49829 = (0);
while(true){
if((idx_49829 < n__4666__auto___49828)){
var cn_49830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,idx_49829);
var cc_49831 = shadow.object.get_from_dom(cn_49830);
var ckey_49832 = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(cc_49831);
var cval_49833 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cc_49831,item_key);
var vec__49376_49834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_coll,idx_49829);
var nkey_49835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49376_49834,(0),null);
var nval_49836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49376_49834,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ckey_49832,nkey_49835)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cval_49833,nval_49836)))){
} else {
var new_obj_49837 = make_item_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nkey_49835,nval_49836], null));
shadow.dom.replace_node(cn_49830,new_obj_49837);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cc_49831);

shadow.object.notify_tree_BANG_(new_obj_49837,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
}

var G__49838 = (idx_49829 + (1));
idx_49829 = G__49838;
continue;
} else {
}
break;
}

if((diff > (0))){
var seq__49379_49839 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new_coll,count_children__$1,count_new));
var chunk__49380_49840 = null;
var count__49381_49841 = (0);
var i__49382_49842 = (0);
while(true){
if((i__49382_49842 < count__49381_49841)){
var item_49843 = chunk__49380_49840.cljs$core$IIndexed$_nth$arity$2(null,i__49382_49842);
shadow.object.dom_enter(coll_dom,make_item_fn(item_49843));


var G__49844 = seq__49379_49839;
var G__49845 = chunk__49380_49840;
var G__49846 = count__49381_49841;
var G__49847 = (i__49382_49842 + (1));
seq__49379_49839 = G__49844;
chunk__49380_49840 = G__49845;
count__49381_49841 = G__49846;
i__49382_49842 = G__49847;
continue;
} else {
var temp__5735__auto___49848 = cljs.core.seq(seq__49379_49839);
if(temp__5735__auto___49848){
var seq__49379_49849__$1 = temp__5735__auto___49848;
if(cljs.core.chunked_seq_QMARK_(seq__49379_49849__$1)){
var c__4609__auto___49850 = cljs.core.chunk_first(seq__49379_49849__$1);
var G__49851 = cljs.core.chunk_rest(seq__49379_49849__$1);
var G__49852 = c__4609__auto___49850;
var G__49853 = cljs.core.count(c__4609__auto___49850);
var G__49854 = (0);
seq__49379_49839 = G__49851;
chunk__49380_49840 = G__49852;
count__49381_49841 = G__49853;
i__49382_49842 = G__49854;
continue;
} else {
var item_49855 = cljs.core.first(seq__49379_49849__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_49855));


var G__49856 = cljs.core.next(seq__49379_49849__$1);
var G__49857 = null;
var G__49858 = (0);
var G__49859 = (0);
seq__49379_49839 = G__49856;
chunk__49380_49840 = G__49857;
count__49381_49841 = G__49858;
i__49382_49842 = G__49859;
continue;
}
} else {
}
}
break;
}
} else {
}

return shadow.object.notify_BANG_(parent,new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160));
} else {
return null;
}
}));

return coll_dom;
}));

(shadow.object.bind_children.cljs$lang$maxFixedArity = 6);

shadow.object.remove_in_parent_BANG_ = (function shadow$object$remove_in_parent_BANG_(oref){
var parent = shadow.object.get_parent(oref);
var key = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(oref);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref));
var path = new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048).cljs$core$IFn$_invoke$arity$1(oref);
if(cljs.core.truth_((function (){var and__4174__auto__ = key;
if(cljs.core.truth_(and__4174__auto__)){
return path;
} else {
return and__4174__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("remove-in-parent! should only be called from items created via so/bind-children",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

var coll = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,path);
var new_coll = shadow.util.remove_item_from_coll(coll,key,value);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("bind","update","bind/update",1048601733),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,new_coll], 0));
});
shadow.object.inspect_BANG_ = (function shadow$object$inspect_BANG_(oref){
var G__49383 = "inspect!";
var G__49384 = shadow.object._id(oref);
var G__49385 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.object._type(oref));
var G__49386 = cljs.core.clj__GT_js(cljs.core.deref(shadow.object._data(oref)));
return (shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__49383,G__49384,G__49385,G__49386) : shadow.object.info.call(null,G__49383,G__49384,G__49385,G__49386));
});
shadow.object.dump_BANG_ = (function shadow$object$dump_BANG_(){
(shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- LIVE OBJECTS ------------"));

var seq__49387_49865 = cljs.core.seq(cljs.core.seq(cljs.core.deref(shadow.object.instances)));
var chunk__49388_49866 = null;
var count__49389_49867 = (0);
var i__49390_49868 = (0);
while(true){
if((i__49390_49868 < count__49389_49867)){
var vec__49405_49869 = chunk__49388_49866.cljs$core$IIndexed$_nth$arity$2(null,i__49390_49868);
var id_49870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49405_49869,(0),null);
var oref_49871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49405_49869,(1),null);
var G__49408_49872 = "dump";
var G__49409_49873 = id_49870;
var G__49410_49874 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_49871)], 0));
var G__49411_49875 = cljs.core.deref(shadow.object._data(oref_49871));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__49408_49872,G__49409_49873,G__49410_49874,G__49411_49875) : shadow.object.info.call(null,G__49408_49872,G__49409_49873,G__49410_49874,G__49411_49875));


var G__49876 = seq__49387_49865;
var G__49877 = chunk__49388_49866;
var G__49878 = count__49389_49867;
var G__49879 = (i__49390_49868 + (1));
seq__49387_49865 = G__49876;
chunk__49388_49866 = G__49877;
count__49389_49867 = G__49878;
i__49390_49868 = G__49879;
continue;
} else {
var temp__5735__auto___49880 = cljs.core.seq(seq__49387_49865);
if(temp__5735__auto___49880){
var seq__49387_49881__$1 = temp__5735__auto___49880;
if(cljs.core.chunked_seq_QMARK_(seq__49387_49881__$1)){
var c__4609__auto___49882 = cljs.core.chunk_first(seq__49387_49881__$1);
var G__49883 = cljs.core.chunk_rest(seq__49387_49881__$1);
var G__49884 = c__4609__auto___49882;
var G__49885 = cljs.core.count(c__4609__auto___49882);
var G__49886 = (0);
seq__49387_49865 = G__49883;
chunk__49388_49866 = G__49884;
count__49389_49867 = G__49885;
i__49390_49868 = G__49886;
continue;
} else {
var vec__49412_49887 = cljs.core.first(seq__49387_49881__$1);
var id_49888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49412_49887,(0),null);
var oref_49889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49412_49887,(1),null);
var G__49415_49890 = "dump";
var G__49416_49891 = id_49888;
var G__49417_49892 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_49889)], 0));
var G__49418_49893 = cljs.core.deref(shadow.object._data(oref_49889));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__49415_49890,G__49416_49891,G__49417_49892,G__49418_49893) : shadow.object.info.call(null,G__49415_49890,G__49416_49891,G__49417_49892,G__49418_49893));


var G__49894 = cljs.core.next(seq__49387_49881__$1);
var G__49895 = null;
var G__49896 = (0);
var G__49897 = (0);
seq__49387_49865 = G__49894;
chunk__49388_49866 = G__49895;
count__49389_49867 = G__49896;
i__49390_49868 = G__49897;
continue;
}
} else {
}
}
break;
}

return (shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- //LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- //LIVE OBJECTS ------------"));
});
goog.exportSymbol('shadow.object.dump_BANG_', shadow.object.dump_BANG_);
Object.defineProperty(module.exports, "dump_BANG_", { enumerable: true, get: function() { return shadow.object.dump_BANG_; } });
Object.defineProperty(module.exports, "tree_seq", { enumerable: true, get: function() { return shadow.object.tree_seq; } });
Object.defineProperty(module.exports, "object_defs", { enumerable: true, get: function() { return shadow.object.object_defs; } });
Object.defineProperty(module.exports, "get_from_dom", { enumerable: true, get: function() { return shadow.object.get_from_dom; } });
Object.defineProperty(module.exports, "get_siblings", { enumerable: true, get: function() { return shadow.object.get_siblings; } });
Object.defineProperty(module.exports, "get_parent_of_type", { enumerable: true, get: function() { return shadow.object.get_parent_of_type; } });
Object.defineProperty(module.exports, "alive_QMARK_", { enumerable: true, get: function() { return shadow.object.alive_QMARK_; } });
Object.defineProperty(module.exports, "notify_down_BANG_", { enumerable: true, get: function() { return shadow.object.notify_down_BANG_; } });
Object.defineProperty(module.exports, "return_value", { enumerable: true, get: function() { return shadow.object.return_value; } });
Object.defineProperty(module.exports, "reaction_merge", { enumerable: true, get: function() { return shadow.object.reaction_merge; } });
Object.defineProperty(module.exports, "log", { enumerable: true, get: function() { return shadow.object.log; } });
Object.defineProperty(module.exports, "add_reaction_BANG_", { enumerable: true, get: function() { return shadow.object.add_reaction_BANG_; } });
Object.defineProperty(module.exports, "find_containing_object", { enumerable: true, get: function() { return shadow.object.find_containing_object; } });
Object.defineProperty(module.exports, "get_dom", { enumerable: true, get: function() { return shadow.object.get_dom; } });
Object.defineProperty(module.exports, "dom_enter", { enumerable: true, get: function() { return shadow.object.dom_enter; } });
Object.defineProperty(module.exports, "do_notify_tree", { enumerable: true, get: function() { return shadow.object.do_notify_tree; } });
Object.defineProperty(module.exports, "bind", { enumerable: true, get: function() { return shadow.object.bind; } });
Object.defineProperty(module.exports, "notify_tree_BANG_", { enumerable: true, get: function() { return shadow.object.notify_tree_BANG_; } });
Object.defineProperty(module.exports, "notify_BANG_", { enumerable: true, get: function() { return shadow.object.notify_BANG_; } });
Object.defineProperty(module.exports, "get_type", { enumerable: true, get: function() { return shadow.object.get_type; } });
Object.defineProperty(module.exports, "unmunge", { enumerable: true, get: function() { return shadow.object.unmunge; } });
Object.defineProperty(module.exports, "map__GT_Watch", { enumerable: true, get: function() { return shadow.object.map__GT_Watch; } });
Object.defineProperty(module.exports, "destroy_BANG_", { enumerable: true, get: function() { return shadow.object.destroy_BANG_; } });
Object.defineProperty(module.exports, "instance_parent", { enumerable: true, get: function() { return shadow.object.instance_parent; } });
Object.defineProperty(module.exports, "dom_destroy", { enumerable: true, get: function() { return shadow.object.dom_destroy; } });
Object.defineProperty(module.exports, "ObjectRef", { enumerable: true, get: function() { return shadow.object.ObjectRef; } });
Object.defineProperty(module.exports, "notify_up_BANG_", { enumerable: true, get: function() { return shadow.object.notify_up_BANG_; } });
Object.defineProperty(module.exports, "next_id", { enumerable: true, get: function() { return shadow.object.next_id; } });
Object.defineProperty(module.exports, "_type", { enumerable: true, get: function() { return shadow.object._type; } });
Object.defineProperty(module.exports, "remove_in_parent_BANG_", { enumerable: true, get: function() { return shadow.object.remove_in_parent_BANG_; } });
Object.defineProperty(module.exports, "get_parent", { enumerable: true, get: function() { return shadow.object.get_parent; } });
Object.defineProperty(module.exports, "create", { enumerable: true, get: function() { return shadow.object.create; } });
Object.defineProperty(module.exports, "warn", { enumerable: true, get: function() { return shadow.object.warn; } });
Object.defineProperty(module.exports, "__GT_ObjectRef", { enumerable: true, get: function() { return shadow.object.__GT_ObjectRef; } });
Object.defineProperty(module.exports, "_update", { enumerable: true, get: function() { return shadow.object._update; } });
Object.defineProperty(module.exports, "get_children_of_type", { enumerable: true, get: function() { return shadow.object.get_children_of_type; } });
Object.defineProperty(module.exports, "coll_destroy_children", { enumerable: true, get: function() { return shadow.object.coll_destroy_children; } });
Object.defineProperty(module.exports, "define_event", { enumerable: true, get: function() { return shadow.object.define_event; } });
Object.defineProperty(module.exports, "events", { enumerable: true, get: function() { return shadow.object.events; } });
Object.defineProperty(module.exports, "_id", { enumerable: true, get: function() { return shadow.object._id; } });
Object.defineProperty(module.exports, "is_object_QMARK_", { enumerable: true, get: function() { return shadow.object.is_object_QMARK_; } });
Object.defineProperty(module.exports, "__GT_Watch", { enumerable: true, get: function() { return shadow.object.__GT_Watch; } });
Object.defineProperty(module.exports, "_data", { enumerable: true, get: function() { return shadow.object._data; } });
Object.defineProperty(module.exports, "debug", { enumerable: true, get: function() { return shadow.object.debug; } });
Object.defineProperty(module.exports, "behavior_fns", { enumerable: true, get: function() { return shadow.object.behavior_fns; } });
Object.defineProperty(module.exports, "get_type_attr", { enumerable: true, get: function() { return shadow.object.get_type_attr; } });
Object.defineProperty(module.exports, "inspect_BANG_", { enumerable: true, get: function() { return shadow.object.inspect_BANG_; } });
Object.defineProperty(module.exports, "merge_behaviors", { enumerable: true, get: function() { return shadow.object.merge_behaviors; } });
Object.defineProperty(module.exports, "get_children", { enumerable: true, get: function() { return shadow.object.get_children; } });
Object.defineProperty(module.exports, "equal_QMARK_", { enumerable: true, get: function() { return shadow.object.equal_QMARK_; } });
Object.defineProperty(module.exports, "define", { enumerable: true, get: function() { return shadow.object.define; } });
Object.defineProperty(module.exports, "bind_children", { enumerable: true, get: function() { return shadow.object.bind_children; } });
Object.defineProperty(module.exports, "get_siblings_of_type", { enumerable: true, get: function() { return shadow.object.get_siblings_of_type; } });
Object.defineProperty(module.exports, "bind_change", { enumerable: true, get: function() { return shadow.object.bind_change; } });
Object.defineProperty(module.exports, "IObject", { enumerable: true, get: function() { return shadow.object.IObject; } });
Object.defineProperty(module.exports, "obj_id", { enumerable: true, get: function() { return shadow.object.obj_id; } });
Object.defineProperty(module.exports, "get_collection_item", { enumerable: true, get: function() { return shadow.object.get_collection_item; } });
Object.defineProperty(module.exports, "instances", { enumerable: true, get: function() { return shadow.object.instances; } });
Object.defineProperty(module.exports, "console_friendly", { enumerable: true, get: function() { return shadow.object.console_friendly; } });
Object.defineProperty(module.exports, "bind_simple", { enumerable: true, get: function() { return shadow.object.bind_simple; } });
Object.defineProperty(module.exports, "_destroy_BANG_", { enumerable: true, get: function() { return shadow.object._destroy_BANG_; } });
Object.defineProperty(module.exports, "update_BANG_", { enumerable: true, get: function() { return shadow.object.update_BANG_; } });
Object.defineProperty(module.exports, "bind_dom_events", { enumerable: true, get: function() { return shadow.object.bind_dom_events; } });
Object.defineProperty(module.exports, "info", { enumerable: true, get: function() { return shadow.object.info; } });
Object.defineProperty(module.exports, "merge_reactions", { enumerable: true, get: function() { return shadow.object.merge_reactions; } });
Object.defineProperty(module.exports, "make_dom", { enumerable: true, get: function() { return shadow.object.make_dom; } });
Object.defineProperty(module.exports, "set_parent_BANG_", { enumerable: true, get: function() { return shadow.object.set_parent_BANG_; } });
Object.defineProperty(module.exports, "instance_children", { enumerable: true, get: function() { return shadow.object.instance_children; } });
Object.defineProperty(module.exports, "merge_defaults", { enumerable: true, get: function() { return shadow.object.merge_defaults; } });
Object.defineProperty(module.exports, "get_by_id", { enumerable: true, get: function() { return shadow.object.get_by_id; } });
Object.defineProperty(module.exports, "error", { enumerable: true, get: function() { return shadow.object.error; } });
Object.defineProperty(module.exports, "Watch", { enumerable: true, get: function() { return shadow.object.Watch; } });
//# sourceMappingURL=shadow.object.js.map
