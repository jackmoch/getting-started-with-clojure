// Compiled by ClojureScript 1.8.51 {}
goog.provide('testing_reagent.core');
goog.require('cljs.core');
goog.require('reagent.core');
if(typeof testing_reagent.core.debug_QMARK_ !== 'undefined'){
} else {
testing_reagent.core.debug_QMARK_ = goog.DEBUG;
}
if(typeof testing_reagent.core.app_state !== 'undefined'){
} else {
testing_reagent.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello, what is your name? "], null));
}
testing_reagent.core.page = (function testing_reagent$core$page(ratom){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ratom)),"FIXME"], null);
});
testing_reagent.core.dev_setup = (function testing_reagent$core$dev_setup(){
if(cljs.core.truth_(testing_reagent.core.debug_QMARK_)){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
testing_reagent.core.reload = (function testing_reagent$core$reload(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [testing_reagent.core.page,testing_reagent.core.app_state], null),document.getElementById("app"));
});
testing_reagent.core.main = (function testing_reagent$core$main(){
testing_reagent.core.dev_setup.call(null);

return testing_reagent.core.reload.call(null);
});
goog.exportSymbol('testing_reagent.core.main', testing_reagent.core.main);

//# sourceMappingURL=core.js.map?rel=1478192740273