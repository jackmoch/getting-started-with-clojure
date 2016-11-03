goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('testing_reagent.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__33689__delegate = function (x){
if(cljs.core.truth_(testing_reagent.core.reload)){
return cljs.core.apply.call(null,testing_reagent.core.reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'testing-reagent.core/reload' is missing");
}
};
var G__33689 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__33690__i = 0, G__33690__a = new Array(arguments.length -  0);
while (G__33690__i < G__33690__a.length) {G__33690__a[G__33690__i] = arguments[G__33690__i + 0]; ++G__33690__i;}
  x = new cljs.core.IndexedSeq(G__33690__a,0);
} 
return G__33689__delegate.call(this,x);};
G__33689.cljs$lang$maxFixedArity = 0;
G__33689.cljs$lang$applyTo = (function (arglist__33691){
var x = cljs.core.seq(arglist__33691);
return G__33689__delegate(x);
});
G__33689.cljs$core$IFn$_invoke$arity$variadic = G__33689__delegate;
return G__33689;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
