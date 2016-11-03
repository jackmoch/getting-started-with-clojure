// Compiled by ClojureScript 1.8.51 {}
goog.provide('testing_reagent.core');
goog.require('cljs.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof testing_reagent.core.app_state !== 'undefined'){
} else {
testing_reagent.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"counters","counters",33475982),new cljs.core.PersistentArrayMap(null, 2, [(1),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Build App",new cljs.core.Keyword(null,"count","count",2139924085),(0)], null),(2),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"Broke Something",new cljs.core.Keyword(null,"count","count",2139924085),(0)], null)], null)], null));
}
testing_reagent.core.increment_counter = (function testing_reagent$core$increment_counter(c){
return cljs.core.swap_BANG_.call(null,testing_reagent.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"counters","counters",33475982),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"count","count",2139924085)], null),cljs.core.inc);
});
testing_reagent.core.counter_view = (function testing_reagent$core$counter_view(c){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-2","div.col-sm-2",-509844827),[cljs.core.str(new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(c))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-4","div.col-sm-4",1703492594),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return testing_reagent.core.increment_counter.call(null,c);
})], null),"Did it!"], null)], null)], null);
});
testing_reagent.core.hello_world = (function testing_reagent$core$hello_world(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Chore tracking"], null),(function (){var iter__25314__auto__ = (function testing_reagent$core$hello_world_$_iter__31795(s__31796){
return (new cljs.core.LazySeq(null,(function (){
var s__31796__$1 = s__31796;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31796__$1);
if(temp__4657__auto__){
var s__31796__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31796__$2)){
var c__25312__auto__ = cljs.core.chunk_first.call(null,s__31796__$2);
var size__25313__auto__ = cljs.core.count.call(null,c__25312__auto__);
var b__31798 = cljs.core.chunk_buffer.call(null,size__25313__auto__);
if((function (){var i__31797 = (0);
while(true){
if((i__31797 < size__25313__auto__)){
var c = cljs.core._nth.call(null,c__25312__auto__,i__31797);
cljs.core.chunk_append.call(null,b__31798,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [testing_reagent.core.counter_view,c], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c)], null)));

var G__31799 = (i__31797 + (1));
i__31797 = G__31799;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31798),testing_reagent$core$hello_world_$_iter__31795.call(null,cljs.core.chunk_rest.call(null,s__31796__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31798),null);
}
} else {
var c = cljs.core.first.call(null,s__31796__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [testing_reagent.core.counter_view,c], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c)], null)),testing_reagent$core$hello_world_$_iter__31795.call(null,cljs.core.rest.call(null,s__31796__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25314__auto__.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"counters","counters",33475982).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,testing_reagent.core.app_state))));
})()], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testing_reagent.core.hello_world], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1478196540003