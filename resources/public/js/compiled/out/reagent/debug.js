// Compiled by ClojureScript 1.8.51 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__26705__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26705 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26706__i = 0, G__26706__a = new Array(arguments.length -  0);
while (G__26706__i < G__26706__a.length) {G__26706__a[G__26706__i] = arguments[G__26706__i + 0]; ++G__26706__i;}
  args = new cljs.core.IndexedSeq(G__26706__a,0);
} 
return G__26705__delegate.call(this,args);};
G__26705.cljs$lang$maxFixedArity = 0;
G__26705.cljs$lang$applyTo = (function (arglist__26707){
var args = cljs.core.seq(arglist__26707);
return G__26705__delegate(args);
});
G__26705.cljs$core$IFn$_invoke$arity$variadic = G__26705__delegate;
return G__26705;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__26708__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26708 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26709__i = 0, G__26709__a = new Array(arguments.length -  0);
while (G__26709__i < G__26709__a.length) {G__26709__a[G__26709__i] = arguments[G__26709__i + 0]; ++G__26709__i;}
  args = new cljs.core.IndexedSeq(G__26709__a,0);
} 
return G__26708__delegate.call(this,args);};
G__26708.cljs$lang$maxFixedArity = 0;
G__26708.cljs$lang$applyTo = (function (arglist__26710){
var args = cljs.core.seq(arglist__26710);
return G__26708__delegate(args);
});
G__26708.cljs$core$IFn$_invoke$arity$variadic = G__26708__delegate;
return G__26708;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1478192733420