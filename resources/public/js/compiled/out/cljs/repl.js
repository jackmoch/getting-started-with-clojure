// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31096_31110 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31097_31111 = null;
var count__31098_31112 = (0);
var i__31099_31113 = (0);
while(true){
if((i__31099_31113 < count__31098_31112)){
var f_31114 = cljs.core._nth.call(null,chunk__31097_31111,i__31099_31113);
cljs.core.println.call(null,"  ",f_31114);

var G__31115 = seq__31096_31110;
var G__31116 = chunk__31097_31111;
var G__31117 = count__31098_31112;
var G__31118 = (i__31099_31113 + (1));
seq__31096_31110 = G__31115;
chunk__31097_31111 = G__31116;
count__31098_31112 = G__31117;
i__31099_31113 = G__31118;
continue;
} else {
var temp__4657__auto___31119 = cljs.core.seq.call(null,seq__31096_31110);
if(temp__4657__auto___31119){
var seq__31096_31120__$1 = temp__4657__auto___31119;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31096_31120__$1)){
var c__25345__auto___31121 = cljs.core.chunk_first.call(null,seq__31096_31120__$1);
var G__31122 = cljs.core.chunk_rest.call(null,seq__31096_31120__$1);
var G__31123 = c__25345__auto___31121;
var G__31124 = cljs.core.count.call(null,c__25345__auto___31121);
var G__31125 = (0);
seq__31096_31110 = G__31122;
chunk__31097_31111 = G__31123;
count__31098_31112 = G__31124;
i__31099_31113 = G__31125;
continue;
} else {
var f_31126 = cljs.core.first.call(null,seq__31096_31120__$1);
cljs.core.println.call(null,"  ",f_31126);

var G__31127 = cljs.core.next.call(null,seq__31096_31120__$1);
var G__31128 = null;
var G__31129 = (0);
var G__31130 = (0);
seq__31096_31110 = G__31127;
chunk__31097_31111 = G__31128;
count__31098_31112 = G__31129;
i__31099_31113 = G__31130;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31131 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24534__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31131);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31131)))?cljs.core.second.call(null,arglists_31131):arglists_31131));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31100 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31101 = null;
var count__31102 = (0);
var i__31103 = (0);
while(true){
if((i__31103 < count__31102)){
var vec__31104 = cljs.core._nth.call(null,chunk__31101,i__31103);
var name = cljs.core.nth.call(null,vec__31104,(0),null);
var map__31105 = cljs.core.nth.call(null,vec__31104,(1),null);
var map__31105__$1 = ((((!((map__31105 == null)))?((((map__31105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31105):map__31105);
var doc = cljs.core.get.call(null,map__31105__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__31105__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__31132 = seq__31100;
var G__31133 = chunk__31101;
var G__31134 = count__31102;
var G__31135 = (i__31103 + (1));
seq__31100 = G__31132;
chunk__31101 = G__31133;
count__31102 = G__31134;
i__31103 = G__31135;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31100);
if(temp__4657__auto__){
var seq__31100__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31100__$1)){
var c__25345__auto__ = cljs.core.chunk_first.call(null,seq__31100__$1);
var G__31136 = cljs.core.chunk_rest.call(null,seq__31100__$1);
var G__31137 = c__25345__auto__;
var G__31138 = cljs.core.count.call(null,c__25345__auto__);
var G__31139 = (0);
seq__31100 = G__31136;
chunk__31101 = G__31137;
count__31102 = G__31138;
i__31103 = G__31139;
continue;
} else {
var vec__31107 = cljs.core.first.call(null,seq__31100__$1);
var name = cljs.core.nth.call(null,vec__31107,(0),null);
var map__31108 = cljs.core.nth.call(null,vec__31107,(1),null);
var map__31108__$1 = ((((!((map__31108 == null)))?((((map__31108.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31108.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31108):map__31108);
var doc = cljs.core.get.call(null,map__31108__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__31108__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__31140 = cljs.core.next.call(null,seq__31100__$1);
var G__31141 = null;
var G__31142 = (0);
var G__31143 = (0);
seq__31100 = G__31140;
chunk__31101 = G__31141;
count__31102 = G__31142;
i__31103 = G__31143;
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
}
});

//# sourceMappingURL=repl.js.map?rel=1478192736960