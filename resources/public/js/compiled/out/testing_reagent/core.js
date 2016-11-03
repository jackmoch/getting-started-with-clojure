// Compiled by ClojureScript 1.8.51 {}
goog.provide('testing_reagent.core');
goog.require('cljs.core');
goog.require('reagent.core');
if(typeof testing_reagent.core.app_state !== 'undefined'){
} else {
testing_reagent.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world"], null));
}
testing_reagent.core.hello_world = (function testing_reagent$core$hello_world(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,testing_reagent.core.app_state))], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testing_reagent.core.hello_world], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1478195025793