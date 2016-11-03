// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24534__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24534__auto__){
return or__24534__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24534__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30067_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30067_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__30072 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30073 = null;
var count__30074 = (0);
var i__30075 = (0);
while(true){
if((i__30075 < count__30074)){
var n = cljs.core._nth.call(null,chunk__30073,i__30075);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30076 = seq__30072;
var G__30077 = chunk__30073;
var G__30078 = count__30074;
var G__30079 = (i__30075 + (1));
seq__30072 = G__30076;
chunk__30073 = G__30077;
count__30074 = G__30078;
i__30075 = G__30079;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30072);
if(temp__4657__auto__){
var seq__30072__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30072__$1)){
var c__25345__auto__ = cljs.core.chunk_first.call(null,seq__30072__$1);
var G__30080 = cljs.core.chunk_rest.call(null,seq__30072__$1);
var G__30081 = c__25345__auto__;
var G__30082 = cljs.core.count.call(null,c__25345__auto__);
var G__30083 = (0);
seq__30072 = G__30080;
chunk__30073 = G__30081;
count__30074 = G__30082;
i__30075 = G__30083;
continue;
} else {
var n = cljs.core.first.call(null,seq__30072__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30084 = cljs.core.next.call(null,seq__30072__$1);
var G__30085 = null;
var G__30086 = (0);
var G__30087 = (0);
seq__30072 = G__30084;
chunk__30073 = G__30085;
count__30074 = G__30086;
i__30075 = G__30087;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30126_30133 = cljs.core.seq.call(null,deps);
var chunk__30127_30134 = null;
var count__30128_30135 = (0);
var i__30129_30136 = (0);
while(true){
if((i__30129_30136 < count__30128_30135)){
var dep_30137 = cljs.core._nth.call(null,chunk__30127_30134,i__30129_30136);
topo_sort_helper_STAR_.call(null,dep_30137,(depth + (1)),state);

var G__30138 = seq__30126_30133;
var G__30139 = chunk__30127_30134;
var G__30140 = count__30128_30135;
var G__30141 = (i__30129_30136 + (1));
seq__30126_30133 = G__30138;
chunk__30127_30134 = G__30139;
count__30128_30135 = G__30140;
i__30129_30136 = G__30141;
continue;
} else {
var temp__4657__auto___30142 = cljs.core.seq.call(null,seq__30126_30133);
if(temp__4657__auto___30142){
var seq__30126_30143__$1 = temp__4657__auto___30142;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30126_30143__$1)){
var c__25345__auto___30144 = cljs.core.chunk_first.call(null,seq__30126_30143__$1);
var G__30145 = cljs.core.chunk_rest.call(null,seq__30126_30143__$1);
var G__30146 = c__25345__auto___30144;
var G__30147 = cljs.core.count.call(null,c__25345__auto___30144);
var G__30148 = (0);
seq__30126_30133 = G__30145;
chunk__30127_30134 = G__30146;
count__30128_30135 = G__30147;
i__30129_30136 = G__30148;
continue;
} else {
var dep_30149 = cljs.core.first.call(null,seq__30126_30143__$1);
topo_sort_helper_STAR_.call(null,dep_30149,(depth + (1)),state);

var G__30150 = cljs.core.next.call(null,seq__30126_30143__$1);
var G__30151 = null;
var G__30152 = (0);
var G__30153 = (0);
seq__30126_30133 = G__30150;
chunk__30127_30134 = G__30151;
count__30128_30135 = G__30152;
i__30129_30136 = G__30153;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30130){
var vec__30132 = p__30130;
var x = cljs.core.nth.call(null,vec__30132,(0),null);
var xs = cljs.core.nthnext.call(null,vec__30132,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30132,x,xs,get_deps__$1){
return (function (p1__30088_SHARP_){
return clojure.set.difference.call(null,p1__30088_SHARP_,x);
});})(vec__30132,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30166 = cljs.core.seq.call(null,provides);
var chunk__30167 = null;
var count__30168 = (0);
var i__30169 = (0);
while(true){
if((i__30169 < count__30168)){
var prov = cljs.core._nth.call(null,chunk__30167,i__30169);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30170_30178 = cljs.core.seq.call(null,requires);
var chunk__30171_30179 = null;
var count__30172_30180 = (0);
var i__30173_30181 = (0);
while(true){
if((i__30173_30181 < count__30172_30180)){
var req_30182 = cljs.core._nth.call(null,chunk__30171_30179,i__30173_30181);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30182,prov);

var G__30183 = seq__30170_30178;
var G__30184 = chunk__30171_30179;
var G__30185 = count__30172_30180;
var G__30186 = (i__30173_30181 + (1));
seq__30170_30178 = G__30183;
chunk__30171_30179 = G__30184;
count__30172_30180 = G__30185;
i__30173_30181 = G__30186;
continue;
} else {
var temp__4657__auto___30187 = cljs.core.seq.call(null,seq__30170_30178);
if(temp__4657__auto___30187){
var seq__30170_30188__$1 = temp__4657__auto___30187;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30170_30188__$1)){
var c__25345__auto___30189 = cljs.core.chunk_first.call(null,seq__30170_30188__$1);
var G__30190 = cljs.core.chunk_rest.call(null,seq__30170_30188__$1);
var G__30191 = c__25345__auto___30189;
var G__30192 = cljs.core.count.call(null,c__25345__auto___30189);
var G__30193 = (0);
seq__30170_30178 = G__30190;
chunk__30171_30179 = G__30191;
count__30172_30180 = G__30192;
i__30173_30181 = G__30193;
continue;
} else {
var req_30194 = cljs.core.first.call(null,seq__30170_30188__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30194,prov);

var G__30195 = cljs.core.next.call(null,seq__30170_30188__$1);
var G__30196 = null;
var G__30197 = (0);
var G__30198 = (0);
seq__30170_30178 = G__30195;
chunk__30171_30179 = G__30196;
count__30172_30180 = G__30197;
i__30173_30181 = G__30198;
continue;
}
} else {
}
}
break;
}

var G__30199 = seq__30166;
var G__30200 = chunk__30167;
var G__30201 = count__30168;
var G__30202 = (i__30169 + (1));
seq__30166 = G__30199;
chunk__30167 = G__30200;
count__30168 = G__30201;
i__30169 = G__30202;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30166);
if(temp__4657__auto__){
var seq__30166__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30166__$1)){
var c__25345__auto__ = cljs.core.chunk_first.call(null,seq__30166__$1);
var G__30203 = cljs.core.chunk_rest.call(null,seq__30166__$1);
var G__30204 = c__25345__auto__;
var G__30205 = cljs.core.count.call(null,c__25345__auto__);
var G__30206 = (0);
seq__30166 = G__30203;
chunk__30167 = G__30204;
count__30168 = G__30205;
i__30169 = G__30206;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30166__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30174_30207 = cljs.core.seq.call(null,requires);
var chunk__30175_30208 = null;
var count__30176_30209 = (0);
var i__30177_30210 = (0);
while(true){
if((i__30177_30210 < count__30176_30209)){
var req_30211 = cljs.core._nth.call(null,chunk__30175_30208,i__30177_30210);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30211,prov);

var G__30212 = seq__30174_30207;
var G__30213 = chunk__30175_30208;
var G__30214 = count__30176_30209;
var G__30215 = (i__30177_30210 + (1));
seq__30174_30207 = G__30212;
chunk__30175_30208 = G__30213;
count__30176_30209 = G__30214;
i__30177_30210 = G__30215;
continue;
} else {
var temp__4657__auto___30216__$1 = cljs.core.seq.call(null,seq__30174_30207);
if(temp__4657__auto___30216__$1){
var seq__30174_30217__$1 = temp__4657__auto___30216__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30174_30217__$1)){
var c__25345__auto___30218 = cljs.core.chunk_first.call(null,seq__30174_30217__$1);
var G__30219 = cljs.core.chunk_rest.call(null,seq__30174_30217__$1);
var G__30220 = c__25345__auto___30218;
var G__30221 = cljs.core.count.call(null,c__25345__auto___30218);
var G__30222 = (0);
seq__30174_30207 = G__30219;
chunk__30175_30208 = G__30220;
count__30176_30209 = G__30221;
i__30177_30210 = G__30222;
continue;
} else {
var req_30223 = cljs.core.first.call(null,seq__30174_30217__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30223,prov);

var G__30224 = cljs.core.next.call(null,seq__30174_30217__$1);
var G__30225 = null;
var G__30226 = (0);
var G__30227 = (0);
seq__30174_30207 = G__30224;
chunk__30175_30208 = G__30225;
count__30176_30209 = G__30226;
i__30177_30210 = G__30227;
continue;
}
} else {
}
}
break;
}

var G__30228 = cljs.core.next.call(null,seq__30166__$1);
var G__30229 = null;
var G__30230 = (0);
var G__30231 = (0);
seq__30166 = G__30228;
chunk__30167 = G__30229;
count__30168 = G__30230;
i__30169 = G__30231;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30236_30240 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30237_30241 = null;
var count__30238_30242 = (0);
var i__30239_30243 = (0);
while(true){
if((i__30239_30243 < count__30238_30242)){
var ns_30244 = cljs.core._nth.call(null,chunk__30237_30241,i__30239_30243);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30244);

var G__30245 = seq__30236_30240;
var G__30246 = chunk__30237_30241;
var G__30247 = count__30238_30242;
var G__30248 = (i__30239_30243 + (1));
seq__30236_30240 = G__30245;
chunk__30237_30241 = G__30246;
count__30238_30242 = G__30247;
i__30239_30243 = G__30248;
continue;
} else {
var temp__4657__auto___30249 = cljs.core.seq.call(null,seq__30236_30240);
if(temp__4657__auto___30249){
var seq__30236_30250__$1 = temp__4657__auto___30249;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30236_30250__$1)){
var c__25345__auto___30251 = cljs.core.chunk_first.call(null,seq__30236_30250__$1);
var G__30252 = cljs.core.chunk_rest.call(null,seq__30236_30250__$1);
var G__30253 = c__25345__auto___30251;
var G__30254 = cljs.core.count.call(null,c__25345__auto___30251);
var G__30255 = (0);
seq__30236_30240 = G__30252;
chunk__30237_30241 = G__30253;
count__30238_30242 = G__30254;
i__30239_30243 = G__30255;
continue;
} else {
var ns_30256 = cljs.core.first.call(null,seq__30236_30250__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30256);

var G__30257 = cljs.core.next.call(null,seq__30236_30250__$1);
var G__30258 = null;
var G__30259 = (0);
var G__30260 = (0);
seq__30236_30240 = G__30257;
chunk__30237_30241 = G__30258;
count__30238_30242 = G__30259;
i__30239_30243 = G__30260;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24534__auto__ = goog.require__;
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__30261__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30261 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30262__i = 0, G__30262__a = new Array(arguments.length -  0);
while (G__30262__i < G__30262__a.length) {G__30262__a[G__30262__i] = arguments[G__30262__i + 0]; ++G__30262__i;}
  args = new cljs.core.IndexedSeq(G__30262__a,0);
} 
return G__30261__delegate.call(this,args);};
G__30261.cljs$lang$maxFixedArity = 0;
G__30261.cljs$lang$applyTo = (function (arglist__30263){
var args = cljs.core.seq(arglist__30263);
return G__30261__delegate(args);
});
G__30261.cljs$core$IFn$_invoke$arity$variadic = G__30261__delegate;
return G__30261;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30265 = cljs.core._EQ_;
var expr__30266 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30265.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30266))){
var path_parts = ((function (pred__30265,expr__30266){
return (function (p1__30264_SHARP_){
return clojure.string.split.call(null,p1__30264_SHARP_,/[\/\\]/);
});})(pred__30265,expr__30266))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30265,expr__30266){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30268){if((e30268 instanceof Error)){
var e = e30268;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30268;

}
}})());
});
;})(path_parts,sep,root,pred__30265,expr__30266))
} else {
if(cljs.core.truth_(pred__30265.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30266))){
return ((function (pred__30265,expr__30266){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__30265,expr__30266){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30265,expr__30266))
);

return deferred.addErrback(((function (deferred,pred__30265,expr__30266){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30265,expr__30266))
);
});
;})(pred__30265,expr__30266))
} else {
return ((function (pred__30265,expr__30266){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30265,expr__30266))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30269,callback){
var map__30272 = p__30269;
var map__30272__$1 = ((((!((map__30272 == null)))?((((map__30272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30272):map__30272);
var file_msg = map__30272__$1;
var request_url = cljs.core.get.call(null,map__30272__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30272,map__30272__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30272,map__30272__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27234__auto__){
return (function (){
var f__27235__auto__ = (function (){var switch__26547__auto__ = ((function (c__27234__auto__){
return (function (state_30296){
var state_val_30297 = (state_30296[(1)]);
if((state_val_30297 === (7))){
var inst_30292 = (state_30296[(2)]);
var state_30296__$1 = state_30296;
var statearr_30298_30318 = state_30296__$1;
(statearr_30298_30318[(2)] = inst_30292);

(statearr_30298_30318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (1))){
var state_30296__$1 = state_30296;
var statearr_30299_30319 = state_30296__$1;
(statearr_30299_30319[(2)] = null);

(statearr_30299_30319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (4))){
var inst_30276 = (state_30296[(7)]);
var inst_30276__$1 = (state_30296[(2)]);
var state_30296__$1 = (function (){var statearr_30300 = state_30296;
(statearr_30300[(7)] = inst_30276__$1);

return statearr_30300;
})();
if(cljs.core.truth_(inst_30276__$1)){
var statearr_30301_30320 = state_30296__$1;
(statearr_30301_30320[(1)] = (5));

} else {
var statearr_30302_30321 = state_30296__$1;
(statearr_30302_30321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (6))){
var state_30296__$1 = state_30296;
var statearr_30303_30322 = state_30296__$1;
(statearr_30303_30322[(2)] = null);

(statearr_30303_30322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (3))){
var inst_30294 = (state_30296[(2)]);
var state_30296__$1 = state_30296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30296__$1,inst_30294);
} else {
if((state_val_30297 === (2))){
var state_30296__$1 = state_30296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30296__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30297 === (11))){
var inst_30288 = (state_30296[(2)]);
var state_30296__$1 = (function (){var statearr_30304 = state_30296;
(statearr_30304[(8)] = inst_30288);

return statearr_30304;
})();
var statearr_30305_30323 = state_30296__$1;
(statearr_30305_30323[(2)] = null);

(statearr_30305_30323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (9))){
var inst_30282 = (state_30296[(9)]);
var inst_30280 = (state_30296[(10)]);
var inst_30284 = inst_30282.call(null,inst_30280);
var state_30296__$1 = state_30296;
var statearr_30306_30324 = state_30296__$1;
(statearr_30306_30324[(2)] = inst_30284);

(statearr_30306_30324[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (5))){
var inst_30276 = (state_30296[(7)]);
var inst_30278 = figwheel.client.file_reloading.blocking_load.call(null,inst_30276);
var state_30296__$1 = state_30296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30296__$1,(8),inst_30278);
} else {
if((state_val_30297 === (10))){
var inst_30280 = (state_30296[(10)]);
var inst_30286 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30280);
var state_30296__$1 = state_30296;
var statearr_30307_30325 = state_30296__$1;
(statearr_30307_30325[(2)] = inst_30286);

(statearr_30307_30325[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (8))){
var inst_30276 = (state_30296[(7)]);
var inst_30282 = (state_30296[(9)]);
var inst_30280 = (state_30296[(2)]);
var inst_30281 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30282__$1 = cljs.core.get.call(null,inst_30281,inst_30276);
var state_30296__$1 = (function (){var statearr_30308 = state_30296;
(statearr_30308[(9)] = inst_30282__$1);

(statearr_30308[(10)] = inst_30280);

return statearr_30308;
})();
if(cljs.core.truth_(inst_30282__$1)){
var statearr_30309_30326 = state_30296__$1;
(statearr_30309_30326[(1)] = (9));

} else {
var statearr_30310_30327 = state_30296__$1;
(statearr_30310_30327[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27234__auto__))
;
return ((function (switch__26547__auto__,c__27234__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26548__auto__ = null;
var figwheel$client$file_reloading$state_machine__26548__auto____0 = (function (){
var statearr_30314 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30314[(0)] = figwheel$client$file_reloading$state_machine__26548__auto__);

(statearr_30314[(1)] = (1));

return statearr_30314;
});
var figwheel$client$file_reloading$state_machine__26548__auto____1 = (function (state_30296){
while(true){
var ret_value__26549__auto__ = (function (){try{while(true){
var result__26550__auto__ = switch__26547__auto__.call(null,state_30296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26550__auto__;
}
break;
}
}catch (e30315){if((e30315 instanceof Object)){
var ex__26551__auto__ = e30315;
var statearr_30316_30328 = state_30296;
(statearr_30316_30328[(5)] = ex__26551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30329 = state_30296;
state_30296 = G__30329;
continue;
} else {
return ret_value__26549__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26548__auto__ = function(state_30296){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26548__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26548__auto____1.call(this,state_30296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26548__auto____0;
figwheel$client$file_reloading$state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26548__auto____1;
return figwheel$client$file_reloading$state_machine__26548__auto__;
})()
;})(switch__26547__auto__,c__27234__auto__))
})();
var state__27236__auto__ = (function (){var statearr_30317 = f__27235__auto__.call(null);
(statearr_30317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27234__auto__);

return statearr_30317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27236__auto__);
});})(c__27234__auto__))
);

return c__27234__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30330,callback){
var map__30333 = p__30330;
var map__30333__$1 = ((((!((map__30333 == null)))?((((map__30333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30333):map__30333);
var file_msg = map__30333__$1;
var namespace = cljs.core.get.call(null,map__30333__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30333,map__30333__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30333,map__30333__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30335){
var map__30338 = p__30335;
var map__30338__$1 = ((((!((map__30338 == null)))?((((map__30338.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30338.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30338):map__30338);
var file_msg = map__30338__$1;
var namespace = cljs.core.get.call(null,map__30338__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24522__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24522__auto__){
var or__24534__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
var or__24534__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24534__auto____$1)){
return or__24534__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24522__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30340,callback){
var map__30343 = p__30340;
var map__30343__$1 = ((((!((map__30343 == null)))?((((map__30343.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30343.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30343):map__30343);
var file_msg = map__30343__$1;
var request_url = cljs.core.get.call(null,map__30343__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30343__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27234__auto___30431 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27234__auto___30431,out){
return (function (){
var f__27235__auto__ = (function (){var switch__26547__auto__ = ((function (c__27234__auto___30431,out){
return (function (state_30413){
var state_val_30414 = (state_30413[(1)]);
if((state_val_30414 === (1))){
var inst_30391 = cljs.core.nth.call(null,files,(0),null);
var inst_30392 = cljs.core.nthnext.call(null,files,(1));
var inst_30393 = files;
var state_30413__$1 = (function (){var statearr_30415 = state_30413;
(statearr_30415[(7)] = inst_30392);

(statearr_30415[(8)] = inst_30393);

(statearr_30415[(9)] = inst_30391);

return statearr_30415;
})();
var statearr_30416_30432 = state_30413__$1;
(statearr_30416_30432[(2)] = null);

(statearr_30416_30432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30414 === (2))){
var inst_30393 = (state_30413[(8)]);
var inst_30396 = (state_30413[(10)]);
var inst_30396__$1 = cljs.core.nth.call(null,inst_30393,(0),null);
var inst_30397 = cljs.core.nthnext.call(null,inst_30393,(1));
var inst_30398 = (inst_30396__$1 == null);
var inst_30399 = cljs.core.not.call(null,inst_30398);
var state_30413__$1 = (function (){var statearr_30417 = state_30413;
(statearr_30417[(11)] = inst_30397);

(statearr_30417[(10)] = inst_30396__$1);

return statearr_30417;
})();
if(inst_30399){
var statearr_30418_30433 = state_30413__$1;
(statearr_30418_30433[(1)] = (4));

} else {
var statearr_30419_30434 = state_30413__$1;
(statearr_30419_30434[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30414 === (3))){
var inst_30411 = (state_30413[(2)]);
var state_30413__$1 = state_30413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30413__$1,inst_30411);
} else {
if((state_val_30414 === (4))){
var inst_30396 = (state_30413[(10)]);
var inst_30401 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30396);
var state_30413__$1 = state_30413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30413__$1,(7),inst_30401);
} else {
if((state_val_30414 === (5))){
var inst_30407 = cljs.core.async.close_BANG_.call(null,out);
var state_30413__$1 = state_30413;
var statearr_30420_30435 = state_30413__$1;
(statearr_30420_30435[(2)] = inst_30407);

(statearr_30420_30435[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30414 === (6))){
var inst_30409 = (state_30413[(2)]);
var state_30413__$1 = state_30413;
var statearr_30421_30436 = state_30413__$1;
(statearr_30421_30436[(2)] = inst_30409);

(statearr_30421_30436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30414 === (7))){
var inst_30397 = (state_30413[(11)]);
var inst_30403 = (state_30413[(2)]);
var inst_30404 = cljs.core.async.put_BANG_.call(null,out,inst_30403);
var inst_30393 = inst_30397;
var state_30413__$1 = (function (){var statearr_30422 = state_30413;
(statearr_30422[(12)] = inst_30404);

(statearr_30422[(8)] = inst_30393);

return statearr_30422;
})();
var statearr_30423_30437 = state_30413__$1;
(statearr_30423_30437[(2)] = null);

(statearr_30423_30437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__27234__auto___30431,out))
;
return ((function (switch__26547__auto__,c__27234__auto___30431,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26548__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26548__auto____0 = (function (){
var statearr_30427 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30427[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26548__auto__);

(statearr_30427[(1)] = (1));

return statearr_30427;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26548__auto____1 = (function (state_30413){
while(true){
var ret_value__26549__auto__ = (function (){try{while(true){
var result__26550__auto__ = switch__26547__auto__.call(null,state_30413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26550__auto__;
}
break;
}
}catch (e30428){if((e30428 instanceof Object)){
var ex__26551__auto__ = e30428;
var statearr_30429_30438 = state_30413;
(statearr_30429_30438[(5)] = ex__26551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30439 = state_30413;
state_30413 = G__30439;
continue;
} else {
return ret_value__26549__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26548__auto__ = function(state_30413){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26548__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26548__auto____1.call(this,state_30413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26548__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26548__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26548__auto__;
})()
;})(switch__26547__auto__,c__27234__auto___30431,out))
})();
var state__27236__auto__ = (function (){var statearr_30430 = f__27235__auto__.call(null);
(statearr_30430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27234__auto___30431);

return statearr_30430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27236__auto__);
});})(c__27234__auto___30431,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30440,opts){
var map__30444 = p__30440;
var map__30444__$1 = ((((!((map__30444 == null)))?((((map__30444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30444):map__30444);
var eval_body__$1 = cljs.core.get.call(null,map__30444__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30444__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24522__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24522__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24522__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30446){var e = e30446;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30447_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30447_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30452){
var vec__30453 = p__30452;
var k = cljs.core.nth.call(null,vec__30453,(0),null);
var v = cljs.core.nth.call(null,vec__30453,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30454){
var vec__30455 = p__30454;
var k = cljs.core.nth.call(null,vec__30455,(0),null);
var v = cljs.core.nth.call(null,vec__30455,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30459,p__30460){
var map__30707 = p__30459;
var map__30707__$1 = ((((!((map__30707 == null)))?((((map__30707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30707):map__30707);
var opts = map__30707__$1;
var before_jsload = cljs.core.get.call(null,map__30707__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30707__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30707__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30708 = p__30460;
var map__30708__$1 = ((((!((map__30708 == null)))?((((map__30708.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30708.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30708):map__30708);
var msg = map__30708__$1;
var files = cljs.core.get.call(null,map__30708__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30708__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30708__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27234__auto__,map__30707,map__30707__$1,opts,before_jsload,on_jsload,reload_dependents,map__30708,map__30708__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27235__auto__ = (function (){var switch__26547__auto__ = ((function (c__27234__auto__,map__30707,map__30707__$1,opts,before_jsload,on_jsload,reload_dependents,map__30708,map__30708__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30861){
var state_val_30862 = (state_30861[(1)]);
if((state_val_30862 === (7))){
var inst_30722 = (state_30861[(7)]);
var inst_30724 = (state_30861[(8)]);
var inst_30725 = (state_30861[(9)]);
var inst_30723 = (state_30861[(10)]);
var inst_30730 = cljs.core._nth.call(null,inst_30723,inst_30725);
var inst_30731 = figwheel.client.file_reloading.eval_body.call(null,inst_30730,opts);
var inst_30732 = (inst_30725 + (1));
var tmp30863 = inst_30722;
var tmp30864 = inst_30724;
var tmp30865 = inst_30723;
var inst_30722__$1 = tmp30863;
var inst_30723__$1 = tmp30865;
var inst_30724__$1 = tmp30864;
var inst_30725__$1 = inst_30732;
var state_30861__$1 = (function (){var statearr_30866 = state_30861;
(statearr_30866[(7)] = inst_30722__$1);

(statearr_30866[(8)] = inst_30724__$1);

(statearr_30866[(9)] = inst_30725__$1);

(statearr_30866[(10)] = inst_30723__$1);

(statearr_30866[(11)] = inst_30731);

return statearr_30866;
})();
var statearr_30867_30953 = state_30861__$1;
(statearr_30867_30953[(2)] = null);

(statearr_30867_30953[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (20))){
var inst_30765 = (state_30861[(12)]);
var inst_30773 = figwheel.client.file_reloading.sort_files.call(null,inst_30765);
var state_30861__$1 = state_30861;
var statearr_30868_30954 = state_30861__$1;
(statearr_30868_30954[(2)] = inst_30773);

(statearr_30868_30954[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (27))){
var state_30861__$1 = state_30861;
var statearr_30869_30955 = state_30861__$1;
(statearr_30869_30955[(2)] = null);

(statearr_30869_30955[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (1))){
var inst_30714 = (state_30861[(13)]);
var inst_30711 = before_jsload.call(null,files);
var inst_30712 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30713 = (function (){return ((function (inst_30714,inst_30711,inst_30712,state_val_30862,c__27234__auto__,map__30707,map__30707__$1,opts,before_jsload,on_jsload,reload_dependents,map__30708,map__30708__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30456_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30456_SHARP_);
});
;})(inst_30714,inst_30711,inst_30712,state_val_30862,c__27234__auto__,map__30707,map__30707__$1,opts,before_jsload,on_jsload,reload_dependents,map__30708,map__30708__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30714__$1 = cljs.core.filter.call(null,inst_30713,files);
var inst_30715 = cljs.core.not_empty.call(null,inst_30714__$1);
var state_30861__$1 = (function (){var statearr_30870 = state_30861;
(statearr_30870[(14)] = inst_30711);

(statearr_30870[(15)] = inst_30712);

(statearr_30870[(13)] = inst_30714__$1);

return statearr_30870;
})();
if(cljs.core.truth_(inst_30715)){
var statearr_30871_30956 = state_30861__$1;
(statearr_30871_30956[(1)] = (2));

} else {
var statearr_30872_30957 = state_30861__$1;
(statearr_30872_30957[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (24))){
var state_30861__$1 = state_30861;
var statearr_30873_30958 = state_30861__$1;
(statearr_30873_30958[(2)] = null);

(statearr_30873_30958[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (39))){
var inst_30815 = (state_30861[(16)]);
var state_30861__$1 = state_30861;
var statearr_30874_30959 = state_30861__$1;
(statearr_30874_30959[(2)] = inst_30815);

(statearr_30874_30959[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (46))){
var inst_30856 = (state_30861[(2)]);
var state_30861__$1 = state_30861;
var statearr_30875_30960 = state_30861__$1;
(statearr_30875_30960[(2)] = inst_30856);

(statearr_30875_30960[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (4))){
var inst_30759 = (state_30861[(2)]);
var inst_30760 = cljs.core.List.EMPTY;
var inst_30761 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30760);
var inst_30762 = (function (){return ((function (inst_30759,inst_30760,inst_30761,state_val_30862,c__27234__auto__,map__30707,map__30707__$1,opts,before_jsload,on_jsload,reload_dependents,map__30708,map__30708__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30457_SHARP_){
var and__24522__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30457_SHARP_);
if(cljs.core.truth_(and__24522__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30457_SHARP_));
} else {
return and__24522__auto__;
}
});
;})(inst_30759,inst_30760,inst_30761,state_val_30862,c__27234__auto__,map__30707,map__30707__$1,opts,before_jsload,on_jsload,reload_dependents,map__30708,map__30708__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30763 = cljs.core.filter.call(null,inst_30762,files);
var inst_30764 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30765 = cljs.core.concat.call(null,inst_30763,inst_30764);
var state_30861__$1 = (function (){var statearr_30876 = state_30861;
(statearr_30876[(17)] = inst_30761);

(statearr_30876[(18)] = inst_30759);

(statearr_30876[(12)] = inst_30765);

return statearr_30876;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30877_30961 = state_30861__$1;
(statearr_30877_30961[(1)] = (16));

} else {
var statearr_30878_30962 = state_30861__$1;
(statearr_30878_30962[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (15))){
var inst_30749 = (state_30861[(2)]);
var state_30861__$1 = state_30861;
var statearr_30879_30963 = state_30861__$1;
(statearr_30879_30963[(2)] = inst_30749);

(statearr_30879_30963[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (21))){
var inst_30775 = (state_30861[(19)]);
var inst_30775__$1 = (state_30861[(2)]);
var inst_30776 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30775__$1);
var state_30861__$1 = (function (){var statearr_30880 = state_30861;
(statearr_30880[(19)] = inst_30775__$1);

return statearr_30880;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30861__$1,(22),inst_30776);
} else {
if((state_val_30862 === (31))){
var inst_30859 = (state_30861[(2)]);
var state_30861__$1 = state_30861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30861__$1,inst_30859);
} else {
if((state_val_30862 === (32))){
var inst_30815 = (state_30861[(16)]);
var inst_30820 = inst_30815.cljs$lang$protocol_mask$partition0$;
var inst_30821 = (inst_30820 & (64));
var inst_30822 = inst_30815.cljs$core$ISeq$;
var inst_30823 = (inst_30821) || (inst_30822);
var state_30861__$1 = state_30861;
if(cljs.core.truth_(inst_30823)){
var statearr_30881_30964 = state_30861__$1;
(statearr_30881_30964[(1)] = (35));

} else {
var statearr_30882_30965 = state_30861__$1;
(statearr_30882_30965[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (40))){
var inst_30836 = (state_30861[(20)]);
var inst_30835 = (state_30861[(2)]);
var inst_30836__$1 = cljs.core.get.call(null,inst_30835,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30837 = cljs.core.get.call(null,inst_30835,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30838 = cljs.core.not_empty.call(null,inst_30836__$1);
var state_30861__$1 = (function (){var statearr_30883 = state_30861;
(statearr_30883[(20)] = inst_30836__$1);

(statearr_30883[(21)] = inst_30837);

return statearr_30883;
})();
if(cljs.core.truth_(inst_30838)){
var statearr_30884_30966 = state_30861__$1;
(statearr_30884_30966[(1)] = (41));

} else {
var statearr_30885_30967 = state_30861__$1;
(statearr_30885_30967[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (33))){
var state_30861__$1 = state_30861;
var statearr_30886_30968 = state_30861__$1;
(statearr_30886_30968[(2)] = false);

(statearr_30886_30968[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (13))){
var inst_30735 = (state_30861[(22)]);
var inst_30739 = cljs.core.chunk_first.call(null,inst_30735);
var inst_30740 = cljs.core.chunk_rest.call(null,inst_30735);
var inst_30741 = cljs.core.count.call(null,inst_30739);
var inst_30722 = inst_30740;
var inst_30723 = inst_30739;
var inst_30724 = inst_30741;
var inst_30725 = (0);
var state_30861__$1 = (function (){var statearr_30887 = state_30861;
(statearr_30887[(7)] = inst_30722);

(statearr_30887[(8)] = inst_30724);

(statearr_30887[(9)] = inst_30725);

(statearr_30887[(10)] = inst_30723);

return statearr_30887;
})();
var statearr_30888_30969 = state_30861__$1;
(statearr_30888_30969[(2)] = null);

(statearr_30888_30969[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (22))){
var inst_30778 = (state_30861[(23)]);
var inst_30775 = (state_30861[(19)]);
var inst_30783 = (state_30861[(24)]);
var inst_30779 = (state_30861[(25)]);
var inst_30778__$1 = (state_30861[(2)]);
var inst_30779__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30778__$1);
var inst_30780 = (function (){var all_files = inst_30775;
var res_SINGLEQUOTE_ = inst_30778__$1;
var res = inst_30779__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30778,inst_30775,inst_30783,inst_30779,inst_30778__$1,inst_30779__$1,state_val_30862,c__27234__auto__,map__30707,map__30707__$1,opts,before_jsload,on_jsload,reload_dependents,map__30708,map__30708__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30458_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30458_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30778,inst_30775,inst_30783,inst_30779,inst_30778__$1,inst_30779__$1,state_val_30862,c__27234__auto__,map__30707,map__30707__$1,opts,before_jsload,on_jsload,reload_dependents,map__30708,map__30708__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30781 = cljs.core.filter.call(null,inst_30780,inst_30778__$1);
var inst_30782 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30783__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30782);
var inst_30784 = cljs.core.not_empty.call(null,inst_30783__$1);
var state_30861__$1 = (function (){var statearr_30889 = state_30861;
(statearr_30889[(23)] = inst_30778__$1);

(statearr_30889[(26)] = inst_30781);

(statearr_30889[(24)] = inst_30783__$1);

(statearr_30889[(25)] = inst_30779__$1);

return statearr_30889;
})();
if(cljs.core.truth_(inst_30784)){
var statearr_30890_30970 = state_30861__$1;
(statearr_30890_30970[(1)] = (23));

} else {
var statearr_30891_30971 = state_30861__$1;
(statearr_30891_30971[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (36))){
var state_30861__$1 = state_30861;
var statearr_30892_30972 = state_30861__$1;
(statearr_30892_30972[(2)] = false);

(statearr_30892_30972[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (41))){
var inst_30836 = (state_30861[(20)]);
var inst_30840 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30841 = cljs.core.map.call(null,inst_30840,inst_30836);
var inst_30842 = cljs.core.pr_str.call(null,inst_30841);
var inst_30843 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30842)].join('');
var inst_30844 = figwheel.client.utils.log.call(null,inst_30843);
var state_30861__$1 = state_30861;
var statearr_30893_30973 = state_30861__$1;
(statearr_30893_30973[(2)] = inst_30844);

(statearr_30893_30973[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (43))){
var inst_30837 = (state_30861[(21)]);
var inst_30847 = (state_30861[(2)]);
var inst_30848 = cljs.core.not_empty.call(null,inst_30837);
var state_30861__$1 = (function (){var statearr_30894 = state_30861;
(statearr_30894[(27)] = inst_30847);

return statearr_30894;
})();
if(cljs.core.truth_(inst_30848)){
var statearr_30895_30974 = state_30861__$1;
(statearr_30895_30974[(1)] = (44));

} else {
var statearr_30896_30975 = state_30861__$1;
(statearr_30896_30975[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (29))){
var inst_30778 = (state_30861[(23)]);
var inst_30775 = (state_30861[(19)]);
var inst_30781 = (state_30861[(26)]);
var inst_30783 = (state_30861[(24)]);
var inst_30779 = (state_30861[(25)]);
var inst_30815 = (state_30861[(16)]);
var inst_30811 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30814 = (function (){var all_files = inst_30775;
var res_SINGLEQUOTE_ = inst_30778;
var res = inst_30779;
var files_not_loaded = inst_30781;
var dependencies_that_loaded = inst_30783;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30778,inst_30775,inst_30781,inst_30783,inst_30779,inst_30815,inst_30811,state_val_30862,c__27234__auto__,map__30707,map__30707__$1,opts,before_jsload,on_jsload,reload_dependents,map__30708,map__30708__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30813){
var map__30897 = p__30813;
var map__30897__$1 = ((((!((map__30897 == null)))?((((map__30897.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30897.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30897):map__30897);
var namespace = cljs.core.get.call(null,map__30897__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30778,inst_30775,inst_30781,inst_30783,inst_30779,inst_30815,inst_30811,state_val_30862,c__27234__auto__,map__30707,map__30707__$1,opts,before_jsload,on_jsload,reload_dependents,map__30708,map__30708__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30815__$1 = cljs.core.group_by.call(null,inst_30814,inst_30781);
var inst_30817 = (inst_30815__$1 == null);
var inst_30818 = cljs.core.not.call(null,inst_30817);
var state_30861__$1 = (function (){var statearr_30899 = state_30861;
(statearr_30899[(16)] = inst_30815__$1);

(statearr_30899[(28)] = inst_30811);

return statearr_30899;
})();
if(inst_30818){
var statearr_30900_30976 = state_30861__$1;
(statearr_30900_30976[(1)] = (32));

} else {
var statearr_30901_30977 = state_30861__$1;
(statearr_30901_30977[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (44))){
var inst_30837 = (state_30861[(21)]);
var inst_30850 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30837);
var inst_30851 = cljs.core.pr_str.call(null,inst_30850);
var inst_30852 = [cljs.core.str("not required: "),cljs.core.str(inst_30851)].join('');
var inst_30853 = figwheel.client.utils.log.call(null,inst_30852);
var state_30861__$1 = state_30861;
var statearr_30902_30978 = state_30861__$1;
(statearr_30902_30978[(2)] = inst_30853);

(statearr_30902_30978[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (6))){
var inst_30756 = (state_30861[(2)]);
var state_30861__$1 = state_30861;
var statearr_30903_30979 = state_30861__$1;
(statearr_30903_30979[(2)] = inst_30756);

(statearr_30903_30979[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (28))){
var inst_30781 = (state_30861[(26)]);
var inst_30808 = (state_30861[(2)]);
var inst_30809 = cljs.core.not_empty.call(null,inst_30781);
var state_30861__$1 = (function (){var statearr_30904 = state_30861;
(statearr_30904[(29)] = inst_30808);

return statearr_30904;
})();
if(cljs.core.truth_(inst_30809)){
var statearr_30905_30980 = state_30861__$1;
(statearr_30905_30980[(1)] = (29));

} else {
var statearr_30906_30981 = state_30861__$1;
(statearr_30906_30981[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (25))){
var inst_30779 = (state_30861[(25)]);
var inst_30795 = (state_30861[(2)]);
var inst_30796 = cljs.core.not_empty.call(null,inst_30779);
var state_30861__$1 = (function (){var statearr_30907 = state_30861;
(statearr_30907[(30)] = inst_30795);

return statearr_30907;
})();
if(cljs.core.truth_(inst_30796)){
var statearr_30908_30982 = state_30861__$1;
(statearr_30908_30982[(1)] = (26));

} else {
var statearr_30909_30983 = state_30861__$1;
(statearr_30909_30983[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (34))){
var inst_30830 = (state_30861[(2)]);
var state_30861__$1 = state_30861;
if(cljs.core.truth_(inst_30830)){
var statearr_30910_30984 = state_30861__$1;
(statearr_30910_30984[(1)] = (38));

} else {
var statearr_30911_30985 = state_30861__$1;
(statearr_30911_30985[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (17))){
var state_30861__$1 = state_30861;
var statearr_30912_30986 = state_30861__$1;
(statearr_30912_30986[(2)] = recompile_dependents);

(statearr_30912_30986[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (3))){
var state_30861__$1 = state_30861;
var statearr_30913_30987 = state_30861__$1;
(statearr_30913_30987[(2)] = null);

(statearr_30913_30987[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (12))){
var inst_30752 = (state_30861[(2)]);
var state_30861__$1 = state_30861;
var statearr_30914_30988 = state_30861__$1;
(statearr_30914_30988[(2)] = inst_30752);

(statearr_30914_30988[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (2))){
var inst_30714 = (state_30861[(13)]);
var inst_30721 = cljs.core.seq.call(null,inst_30714);
var inst_30722 = inst_30721;
var inst_30723 = null;
var inst_30724 = (0);
var inst_30725 = (0);
var state_30861__$1 = (function (){var statearr_30915 = state_30861;
(statearr_30915[(7)] = inst_30722);

(statearr_30915[(8)] = inst_30724);

(statearr_30915[(9)] = inst_30725);

(statearr_30915[(10)] = inst_30723);

return statearr_30915;
})();
var statearr_30916_30989 = state_30861__$1;
(statearr_30916_30989[(2)] = null);

(statearr_30916_30989[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (23))){
var inst_30778 = (state_30861[(23)]);
var inst_30775 = (state_30861[(19)]);
var inst_30781 = (state_30861[(26)]);
var inst_30783 = (state_30861[(24)]);
var inst_30779 = (state_30861[(25)]);
var inst_30786 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30788 = (function (){var all_files = inst_30775;
var res_SINGLEQUOTE_ = inst_30778;
var res = inst_30779;
var files_not_loaded = inst_30781;
var dependencies_that_loaded = inst_30783;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30778,inst_30775,inst_30781,inst_30783,inst_30779,inst_30786,state_val_30862,c__27234__auto__,map__30707,map__30707__$1,opts,before_jsload,on_jsload,reload_dependents,map__30708,map__30708__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30787){
var map__30917 = p__30787;
var map__30917__$1 = ((((!((map__30917 == null)))?((((map__30917.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30917.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30917):map__30917);
var request_url = cljs.core.get.call(null,map__30917__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30778,inst_30775,inst_30781,inst_30783,inst_30779,inst_30786,state_val_30862,c__27234__auto__,map__30707,map__30707__$1,opts,before_jsload,on_jsload,reload_dependents,map__30708,map__30708__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30789 = cljs.core.reverse.call(null,inst_30783);
var inst_30790 = cljs.core.map.call(null,inst_30788,inst_30789);
var inst_30791 = cljs.core.pr_str.call(null,inst_30790);
var inst_30792 = figwheel.client.utils.log.call(null,inst_30791);
var state_30861__$1 = (function (){var statearr_30919 = state_30861;
(statearr_30919[(31)] = inst_30786);

return statearr_30919;
})();
var statearr_30920_30990 = state_30861__$1;
(statearr_30920_30990[(2)] = inst_30792);

(statearr_30920_30990[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (35))){
var state_30861__$1 = state_30861;
var statearr_30921_30991 = state_30861__$1;
(statearr_30921_30991[(2)] = true);

(statearr_30921_30991[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (19))){
var inst_30765 = (state_30861[(12)]);
var inst_30771 = figwheel.client.file_reloading.expand_files.call(null,inst_30765);
var state_30861__$1 = state_30861;
var statearr_30922_30992 = state_30861__$1;
(statearr_30922_30992[(2)] = inst_30771);

(statearr_30922_30992[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (11))){
var state_30861__$1 = state_30861;
var statearr_30923_30993 = state_30861__$1;
(statearr_30923_30993[(2)] = null);

(statearr_30923_30993[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (9))){
var inst_30754 = (state_30861[(2)]);
var state_30861__$1 = state_30861;
var statearr_30924_30994 = state_30861__$1;
(statearr_30924_30994[(2)] = inst_30754);

(statearr_30924_30994[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (5))){
var inst_30724 = (state_30861[(8)]);
var inst_30725 = (state_30861[(9)]);
var inst_30727 = (inst_30725 < inst_30724);
var inst_30728 = inst_30727;
var state_30861__$1 = state_30861;
if(cljs.core.truth_(inst_30728)){
var statearr_30925_30995 = state_30861__$1;
(statearr_30925_30995[(1)] = (7));

} else {
var statearr_30926_30996 = state_30861__$1;
(statearr_30926_30996[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (14))){
var inst_30735 = (state_30861[(22)]);
var inst_30744 = cljs.core.first.call(null,inst_30735);
var inst_30745 = figwheel.client.file_reloading.eval_body.call(null,inst_30744,opts);
var inst_30746 = cljs.core.next.call(null,inst_30735);
var inst_30722 = inst_30746;
var inst_30723 = null;
var inst_30724 = (0);
var inst_30725 = (0);
var state_30861__$1 = (function (){var statearr_30927 = state_30861;
(statearr_30927[(32)] = inst_30745);

(statearr_30927[(7)] = inst_30722);

(statearr_30927[(8)] = inst_30724);

(statearr_30927[(9)] = inst_30725);

(statearr_30927[(10)] = inst_30723);

return statearr_30927;
})();
var statearr_30928_30997 = state_30861__$1;
(statearr_30928_30997[(2)] = null);

(statearr_30928_30997[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (45))){
var state_30861__$1 = state_30861;
var statearr_30929_30998 = state_30861__$1;
(statearr_30929_30998[(2)] = null);

(statearr_30929_30998[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (26))){
var inst_30778 = (state_30861[(23)]);
var inst_30775 = (state_30861[(19)]);
var inst_30781 = (state_30861[(26)]);
var inst_30783 = (state_30861[(24)]);
var inst_30779 = (state_30861[(25)]);
var inst_30798 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30800 = (function (){var all_files = inst_30775;
var res_SINGLEQUOTE_ = inst_30778;
var res = inst_30779;
var files_not_loaded = inst_30781;
var dependencies_that_loaded = inst_30783;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30778,inst_30775,inst_30781,inst_30783,inst_30779,inst_30798,state_val_30862,c__27234__auto__,map__30707,map__30707__$1,opts,before_jsload,on_jsload,reload_dependents,map__30708,map__30708__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30799){
var map__30930 = p__30799;
var map__30930__$1 = ((((!((map__30930 == null)))?((((map__30930.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30930.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30930):map__30930);
var namespace = cljs.core.get.call(null,map__30930__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30930__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30778,inst_30775,inst_30781,inst_30783,inst_30779,inst_30798,state_val_30862,c__27234__auto__,map__30707,map__30707__$1,opts,before_jsload,on_jsload,reload_dependents,map__30708,map__30708__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30801 = cljs.core.map.call(null,inst_30800,inst_30779);
var inst_30802 = cljs.core.pr_str.call(null,inst_30801);
var inst_30803 = figwheel.client.utils.log.call(null,inst_30802);
var inst_30804 = (function (){var all_files = inst_30775;
var res_SINGLEQUOTE_ = inst_30778;
var res = inst_30779;
var files_not_loaded = inst_30781;
var dependencies_that_loaded = inst_30783;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30778,inst_30775,inst_30781,inst_30783,inst_30779,inst_30798,inst_30800,inst_30801,inst_30802,inst_30803,state_val_30862,c__27234__auto__,map__30707,map__30707__$1,opts,before_jsload,on_jsload,reload_dependents,map__30708,map__30708__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30778,inst_30775,inst_30781,inst_30783,inst_30779,inst_30798,inst_30800,inst_30801,inst_30802,inst_30803,state_val_30862,c__27234__auto__,map__30707,map__30707__$1,opts,before_jsload,on_jsload,reload_dependents,map__30708,map__30708__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30805 = setTimeout(inst_30804,(10));
var state_30861__$1 = (function (){var statearr_30932 = state_30861;
(statearr_30932[(33)] = inst_30803);

(statearr_30932[(34)] = inst_30798);

return statearr_30932;
})();
var statearr_30933_30999 = state_30861__$1;
(statearr_30933_30999[(2)] = inst_30805);

(statearr_30933_30999[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (16))){
var state_30861__$1 = state_30861;
var statearr_30934_31000 = state_30861__$1;
(statearr_30934_31000[(2)] = reload_dependents);

(statearr_30934_31000[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (38))){
var inst_30815 = (state_30861[(16)]);
var inst_30832 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30815);
var state_30861__$1 = state_30861;
var statearr_30935_31001 = state_30861__$1;
(statearr_30935_31001[(2)] = inst_30832);

(statearr_30935_31001[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (30))){
var state_30861__$1 = state_30861;
var statearr_30936_31002 = state_30861__$1;
(statearr_30936_31002[(2)] = null);

(statearr_30936_31002[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (10))){
var inst_30735 = (state_30861[(22)]);
var inst_30737 = cljs.core.chunked_seq_QMARK_.call(null,inst_30735);
var state_30861__$1 = state_30861;
if(inst_30737){
var statearr_30937_31003 = state_30861__$1;
(statearr_30937_31003[(1)] = (13));

} else {
var statearr_30938_31004 = state_30861__$1;
(statearr_30938_31004[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (18))){
var inst_30769 = (state_30861[(2)]);
var state_30861__$1 = state_30861;
if(cljs.core.truth_(inst_30769)){
var statearr_30939_31005 = state_30861__$1;
(statearr_30939_31005[(1)] = (19));

} else {
var statearr_30940_31006 = state_30861__$1;
(statearr_30940_31006[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (42))){
var state_30861__$1 = state_30861;
var statearr_30941_31007 = state_30861__$1;
(statearr_30941_31007[(2)] = null);

(statearr_30941_31007[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (37))){
var inst_30827 = (state_30861[(2)]);
var state_30861__$1 = state_30861;
var statearr_30942_31008 = state_30861__$1;
(statearr_30942_31008[(2)] = inst_30827);

(statearr_30942_31008[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (8))){
var inst_30735 = (state_30861[(22)]);
var inst_30722 = (state_30861[(7)]);
var inst_30735__$1 = cljs.core.seq.call(null,inst_30722);
var state_30861__$1 = (function (){var statearr_30943 = state_30861;
(statearr_30943[(22)] = inst_30735__$1);

return statearr_30943;
})();
if(inst_30735__$1){
var statearr_30944_31009 = state_30861__$1;
(statearr_30944_31009[(1)] = (10));

} else {
var statearr_30945_31010 = state_30861__$1;
(statearr_30945_31010[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27234__auto__,map__30707,map__30707__$1,opts,before_jsload,on_jsload,reload_dependents,map__30708,map__30708__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26547__auto__,c__27234__auto__,map__30707,map__30707__$1,opts,before_jsload,on_jsload,reload_dependents,map__30708,map__30708__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26548__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26548__auto____0 = (function (){
var statearr_30949 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30949[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26548__auto__);

(statearr_30949[(1)] = (1));

return statearr_30949;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26548__auto____1 = (function (state_30861){
while(true){
var ret_value__26549__auto__ = (function (){try{while(true){
var result__26550__auto__ = switch__26547__auto__.call(null,state_30861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26550__auto__;
}
break;
}
}catch (e30950){if((e30950 instanceof Object)){
var ex__26551__auto__ = e30950;
var statearr_30951_31011 = state_30861;
(statearr_30951_31011[(5)] = ex__26551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31012 = state_30861;
state_30861 = G__31012;
continue;
} else {
return ret_value__26549__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26548__auto__ = function(state_30861){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26548__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26548__auto____1.call(this,state_30861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26548__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26548__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26548__auto__;
})()
;})(switch__26547__auto__,c__27234__auto__,map__30707,map__30707__$1,opts,before_jsload,on_jsload,reload_dependents,map__30708,map__30708__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27236__auto__ = (function (){var statearr_30952 = f__27235__auto__.call(null);
(statearr_30952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27234__auto__);

return statearr_30952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27236__auto__);
});})(c__27234__auto__,map__30707,map__30707__$1,opts,before_jsload,on_jsload,reload_dependents,map__30708,map__30708__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27234__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31015,link){
var map__31018 = p__31015;
var map__31018__$1 = ((((!((map__31018 == null)))?((((map__31018.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31018.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31018):map__31018);
var file = cljs.core.get.call(null,map__31018__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__31018,map__31018__$1,file){
return (function (p1__31013_SHARP_,p2__31014_SHARP_){
if(cljs.core._EQ_.call(null,p1__31013_SHARP_,p2__31014_SHARP_)){
return p1__31013_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__31018,map__31018__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31024){
var map__31025 = p__31024;
var map__31025__$1 = ((((!((map__31025 == null)))?((((map__31025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31025):map__31025);
var match_length = cljs.core.get.call(null,map__31025__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31025__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31020_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31020_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args31027 = [];
var len__25604__auto___31030 = arguments.length;
var i__25605__auto___31031 = (0);
while(true){
if((i__25605__auto___31031 < len__25604__auto___31030)){
args31027.push((arguments[i__25605__auto___31031]));

var G__31032 = (i__25605__auto___31031 + (1));
i__25605__auto___31031 = G__31032;
continue;
} else {
}
break;
}

var G__31029 = args31027.length;
switch (G__31029) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31027.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31034_SHARP_,p2__31035_SHARP_){
return cljs.core.assoc.call(null,p1__31034_SHARP_,cljs.core.get.call(null,p2__31035_SHARP_,key),p2__31035_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31036){
var map__31039 = p__31036;
var map__31039__$1 = ((((!((map__31039 == null)))?((((map__31039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31039):map__31039);
var f_data = map__31039__$1;
var file = cljs.core.get.call(null,map__31039__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31041,p__31042){
var map__31051 = p__31041;
var map__31051__$1 = ((((!((map__31051 == null)))?((((map__31051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31051):map__31051);
var opts = map__31051__$1;
var on_cssload = cljs.core.get.call(null,map__31051__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__31052 = p__31042;
var map__31052__$1 = ((((!((map__31052 == null)))?((((map__31052.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31052.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31052):map__31052);
var files_msg = map__31052__$1;
var files = cljs.core.get.call(null,map__31052__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31055_31059 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__31056_31060 = null;
var count__31057_31061 = (0);
var i__31058_31062 = (0);
while(true){
if((i__31058_31062 < count__31057_31061)){
var f_31063 = cljs.core._nth.call(null,chunk__31056_31060,i__31058_31062);
figwheel.client.file_reloading.reload_css_file.call(null,f_31063);

var G__31064 = seq__31055_31059;
var G__31065 = chunk__31056_31060;
var G__31066 = count__31057_31061;
var G__31067 = (i__31058_31062 + (1));
seq__31055_31059 = G__31064;
chunk__31056_31060 = G__31065;
count__31057_31061 = G__31066;
i__31058_31062 = G__31067;
continue;
} else {
var temp__4657__auto___31068 = cljs.core.seq.call(null,seq__31055_31059);
if(temp__4657__auto___31068){
var seq__31055_31069__$1 = temp__4657__auto___31068;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31055_31069__$1)){
var c__25345__auto___31070 = cljs.core.chunk_first.call(null,seq__31055_31069__$1);
var G__31071 = cljs.core.chunk_rest.call(null,seq__31055_31069__$1);
var G__31072 = c__25345__auto___31070;
var G__31073 = cljs.core.count.call(null,c__25345__auto___31070);
var G__31074 = (0);
seq__31055_31059 = G__31071;
chunk__31056_31060 = G__31072;
count__31057_31061 = G__31073;
i__31058_31062 = G__31074;
continue;
} else {
var f_31075 = cljs.core.first.call(null,seq__31055_31069__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31075);

var G__31076 = cljs.core.next.call(null,seq__31055_31069__$1);
var G__31077 = null;
var G__31078 = (0);
var G__31079 = (0);
seq__31055_31059 = G__31076;
chunk__31056_31060 = G__31077;
count__31057_31061 = G__31078;
i__31058_31062 = G__31079;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__31051,map__31051__$1,opts,on_cssload,map__31052,map__31052__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__31051,map__31051__$1,opts,on_cssload,map__31052,map__31052__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1478192736885