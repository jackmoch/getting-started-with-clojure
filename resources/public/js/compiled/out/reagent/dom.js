// Compiled by ClojureScript 1.8.51 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__24534__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_33541 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_33541){
return (function (){
var _STAR_always_update_STAR_33542 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_33542;
}});})(_STAR_always_update_STAR_33541))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_33541;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args33543 = [];
var len__25604__auto___33546 = arguments.length;
var i__25605__auto___33547 = (0);
while(true){
if((i__25605__auto___33547 < len__25604__auto___33546)){
args33543.push((arguments[i__25605__auto___33547]));

var G__33548 = (i__25605__auto___33547 + (1));
i__25605__auto___33547 = G__33548;
continue;
} else {
}
break;
}

var G__33545 = args33543.length;
switch (G__33545) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33543.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__33554_33558 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__33555_33559 = null;
var count__33556_33560 = (0);
var i__33557_33561 = (0);
while(true){
if((i__33557_33561 < count__33556_33560)){
var v_33562 = cljs.core._nth.call(null,chunk__33555_33559,i__33557_33561);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_33562);

var G__33563 = seq__33554_33558;
var G__33564 = chunk__33555_33559;
var G__33565 = count__33556_33560;
var G__33566 = (i__33557_33561 + (1));
seq__33554_33558 = G__33563;
chunk__33555_33559 = G__33564;
count__33556_33560 = G__33565;
i__33557_33561 = G__33566;
continue;
} else {
var temp__4657__auto___33567 = cljs.core.seq.call(null,seq__33554_33558);
if(temp__4657__auto___33567){
var seq__33554_33568__$1 = temp__4657__auto___33567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33554_33568__$1)){
var c__25345__auto___33569 = cljs.core.chunk_first.call(null,seq__33554_33568__$1);
var G__33570 = cljs.core.chunk_rest.call(null,seq__33554_33568__$1);
var G__33571 = c__25345__auto___33569;
var G__33572 = cljs.core.count.call(null,c__25345__auto___33569);
var G__33573 = (0);
seq__33554_33558 = G__33570;
chunk__33555_33559 = G__33571;
count__33556_33560 = G__33572;
i__33557_33561 = G__33573;
continue;
} else {
var v_33574 = cljs.core.first.call(null,seq__33554_33568__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_33574);

var G__33575 = cljs.core.next.call(null,seq__33554_33568__$1);
var G__33576 = null;
var G__33577 = (0);
var G__33578 = (0);
seq__33554_33558 = G__33575;
chunk__33555_33559 = G__33576;
count__33556_33560 = G__33577;
i__33557_33561 = G__33578;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1478192740096