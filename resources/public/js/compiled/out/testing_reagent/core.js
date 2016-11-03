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
testing_reagent.core.add_counter = (function testing_reagent$core$add_counter(text){
var next_id = (cljs.core.count.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"counters","counters",33475982).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,testing_reagent.core.app_state)))) + (1));
var new_counter = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),next_id,new cljs.core.Keyword(null,"name","name",1843675177),text,new cljs.core.Keyword(null,"count","count",2139924085),(0)], null);
return cljs.core.swap_BANG_.call(null,testing_reagent.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"counters","counters",33475982)], null),cljs.core.assoc,next_id,new_counter);
});
testing_reagent.core.timer_component = (function testing_reagent$core$timer_component(){
var seconds_elapsed = reagent.core.atom.call(null,(0));
return ((function (seconds_elapsed){
return (function (){
setTimeout(((function (seconds_elapsed){
return (function (){
return cljs.core.swap_BANG_.call(null,seconds_elapsed,cljs.core.inc);
});})(seconds_elapsed))
,(1000));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Seconds Elapsed: ",cljs.core.deref.call(null,seconds_elapsed)], null);
});
;})(seconds_elapsed))
});
testing_reagent.core.new_counter = (function testing_reagent$core$new_counter(){
var text = reagent.core.atom.call(null,"");
return ((function (text){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.container","div.row.container",-2055788712),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-10","div.col-sm-10",353164674),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,text),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (text){
return (function (p1__32160_SHARP_){
return cljs.core.reset_BANG_.call(null,text,p1__32160_SHARP_.target.value);
});})(text))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-success","button.btn.btn-success",574341715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (text){
return (function (){
return testing_reagent.core.add_counter.call(null,cljs.core.deref.call(null,text));
});})(text))
], null),"Add"], null)], null);
});
;})(text))
});
testing_reagent.core.hello_world = (function testing_reagent$core$hello_world(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Chore tracking"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testing_reagent.core.new_counter], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testing_reagent.core.timer_component], null),(function (){var iter__25314__auto__ = (function testing_reagent$core$hello_world_$_iter__32165(s__32166){
return (new cljs.core.LazySeq(null,(function (){
var s__32166__$1 = s__32166;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32166__$1);
if(temp__4657__auto__){
var s__32166__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32166__$2)){
var c__25312__auto__ = cljs.core.chunk_first.call(null,s__32166__$2);
var size__25313__auto__ = cljs.core.count.call(null,c__25312__auto__);
var b__32168 = cljs.core.chunk_buffer.call(null,size__25313__auto__);
if((function (){var i__32167 = (0);
while(true){
if((i__32167 < size__25313__auto__)){
var c = cljs.core._nth.call(null,c__25312__auto__,i__32167);
cljs.core.chunk_append.call(null,b__32168,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [testing_reagent.core.counter_view,c], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c)], null)));

var G__32169 = (i__32167 + (1));
i__32167 = G__32169;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32168),testing_reagent$core$hello_world_$_iter__32165.call(null,cljs.core.chunk_rest.call(null,s__32166__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32168),null);
}
} else {
var c = cljs.core.first.call(null,s__32166__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [testing_reagent.core.counter_view,c], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c)], null)),testing_reagent$core$hello_world_$_iter__32165.call(null,cljs.core.rest.call(null,s__32166__$2)));
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

//# sourceMappingURL=core.js.map?rel=1478200686506