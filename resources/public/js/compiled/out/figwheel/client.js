// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args32713 = [];
var len__25604__auto___32716 = arguments.length;
var i__25605__auto___32717 = (0);
while(true){
if((i__25605__auto___32717 < len__25604__auto___32716)){
args32713.push((arguments[i__25605__auto___32717]));

var G__32718 = (i__25605__auto___32717 + (1));
i__25605__auto___32717 = G__32718;
continue;
} else {
}
break;
}

var G__32715 = args32713.length;
switch (G__32715) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32713.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;
figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25611__auto__ = [];
var len__25604__auto___32721 = arguments.length;
var i__25605__auto___32722 = (0);
while(true){
if((i__25605__auto___32722 < len__25604__auto___32721)){
args__25611__auto__.push((arguments[i__25605__auto___32722]));

var G__32723 = (i__25605__auto___32722 + (1));
i__25605__auto___32722 = G__32723;
continue;
} else {
}
break;
}

var argseq__25612__auto__ = ((((0) < args__25611__auto__.length))?(new cljs.core.IndexedSeq(args__25611__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25612__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq32720){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32720));
});
figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25611__auto__ = [];
var len__25604__auto___32725 = arguments.length;
var i__25605__auto___32726 = (0);
while(true){
if((i__25605__auto___32726 < len__25604__auto___32725)){
args__25611__auto__.push((arguments[i__25605__auto___32726]));

var G__32727 = (i__25605__auto___32726 + (1));
i__25605__auto___32726 = G__32727;
continue;
} else {
}
break;
}

var argseq__25612__auto__ = ((((0) < args__25611__auto__.length))?(new cljs.core.IndexedSeq(args__25611__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25612__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq32724){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32724));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__32728 = cljs.core._EQ_;
var expr__32729 = (function (){var or__24534__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e32732){if((e32732 instanceof Error)){
var e = e32732;
return false;
} else {
throw e32732;

}
}})();
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__32728.call(null,"true",expr__32729))){
return true;
} else {
if(cljs.core.truth_(pred__32728.call(null,"false",expr__32729))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__32729)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e32734){if((e32734 instanceof Error)){
var e = e32734;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e32734;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__32735){
var map__32738 = p__32735;
var map__32738__$1 = ((((!((map__32738 == null)))?((((map__32738.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32738.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32738):map__32738);
var message = cljs.core.get.call(null,map__32738__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__32738__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24534__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24522__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24522__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24522__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27234__auto___32900 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27234__auto___32900,ch){
return (function (){
var f__27235__auto__ = (function (){var switch__26547__auto__ = ((function (c__27234__auto___32900,ch){
return (function (state_32869){
var state_val_32870 = (state_32869[(1)]);
if((state_val_32870 === (7))){
var inst_32865 = (state_32869[(2)]);
var state_32869__$1 = state_32869;
var statearr_32871_32901 = state_32869__$1;
(statearr_32871_32901[(2)] = inst_32865);

(statearr_32871_32901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (1))){
var state_32869__$1 = state_32869;
var statearr_32872_32902 = state_32869__$1;
(statearr_32872_32902[(2)] = null);

(statearr_32872_32902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (4))){
var inst_32822 = (state_32869[(7)]);
var inst_32822__$1 = (state_32869[(2)]);
var state_32869__$1 = (function (){var statearr_32873 = state_32869;
(statearr_32873[(7)] = inst_32822__$1);

return statearr_32873;
})();
if(cljs.core.truth_(inst_32822__$1)){
var statearr_32874_32903 = state_32869__$1;
(statearr_32874_32903[(1)] = (5));

} else {
var statearr_32875_32904 = state_32869__$1;
(statearr_32875_32904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (15))){
var inst_32829 = (state_32869[(8)]);
var inst_32844 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32829);
var inst_32845 = cljs.core.first.call(null,inst_32844);
var inst_32846 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_32845);
var inst_32847 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_32846)].join('');
var inst_32848 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_32847);
var state_32869__$1 = state_32869;
var statearr_32876_32905 = state_32869__$1;
(statearr_32876_32905[(2)] = inst_32848);

(statearr_32876_32905[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (13))){
var inst_32853 = (state_32869[(2)]);
var state_32869__$1 = state_32869;
var statearr_32877_32906 = state_32869__$1;
(statearr_32877_32906[(2)] = inst_32853);

(statearr_32877_32906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (6))){
var state_32869__$1 = state_32869;
var statearr_32878_32907 = state_32869__$1;
(statearr_32878_32907[(2)] = null);

(statearr_32878_32907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (17))){
var inst_32851 = (state_32869[(2)]);
var state_32869__$1 = state_32869;
var statearr_32879_32908 = state_32869__$1;
(statearr_32879_32908[(2)] = inst_32851);

(statearr_32879_32908[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (3))){
var inst_32867 = (state_32869[(2)]);
var state_32869__$1 = state_32869;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32869__$1,inst_32867);
} else {
if((state_val_32870 === (12))){
var inst_32828 = (state_32869[(9)]);
var inst_32842 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_32828,opts);
var state_32869__$1 = state_32869;
if(cljs.core.truth_(inst_32842)){
var statearr_32880_32909 = state_32869__$1;
(statearr_32880_32909[(1)] = (15));

} else {
var statearr_32881_32910 = state_32869__$1;
(statearr_32881_32910[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (2))){
var state_32869__$1 = state_32869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32869__$1,(4),ch);
} else {
if((state_val_32870 === (11))){
var inst_32829 = (state_32869[(8)]);
var inst_32834 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32835 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_32829);
var inst_32836 = cljs.core.async.timeout.call(null,(1000));
var inst_32837 = [inst_32835,inst_32836];
var inst_32838 = (new cljs.core.PersistentVector(null,2,(5),inst_32834,inst_32837,null));
var state_32869__$1 = state_32869;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32869__$1,(14),inst_32838);
} else {
if((state_val_32870 === (9))){
var inst_32829 = (state_32869[(8)]);
var inst_32855 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_32856 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32829);
var inst_32857 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32856);
var inst_32858 = [cljs.core.str("Not loading: "),cljs.core.str(inst_32857)].join('');
var inst_32859 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_32858);
var state_32869__$1 = (function (){var statearr_32882 = state_32869;
(statearr_32882[(10)] = inst_32855);

return statearr_32882;
})();
var statearr_32883_32911 = state_32869__$1;
(statearr_32883_32911[(2)] = inst_32859);

(statearr_32883_32911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (5))){
var inst_32822 = (state_32869[(7)]);
var inst_32824 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_32825 = (new cljs.core.PersistentArrayMap(null,2,inst_32824,null));
var inst_32826 = (new cljs.core.PersistentHashSet(null,inst_32825,null));
var inst_32827 = figwheel.client.focus_msgs.call(null,inst_32826,inst_32822);
var inst_32828 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_32827);
var inst_32829 = cljs.core.first.call(null,inst_32827);
var inst_32830 = figwheel.client.autoload_QMARK_.call(null);
var state_32869__$1 = (function (){var statearr_32884 = state_32869;
(statearr_32884[(9)] = inst_32828);

(statearr_32884[(8)] = inst_32829);

return statearr_32884;
})();
if(cljs.core.truth_(inst_32830)){
var statearr_32885_32912 = state_32869__$1;
(statearr_32885_32912[(1)] = (8));

} else {
var statearr_32886_32913 = state_32869__$1;
(statearr_32886_32913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (14))){
var inst_32840 = (state_32869[(2)]);
var state_32869__$1 = state_32869;
var statearr_32887_32914 = state_32869__$1;
(statearr_32887_32914[(2)] = inst_32840);

(statearr_32887_32914[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (16))){
var state_32869__$1 = state_32869;
var statearr_32888_32915 = state_32869__$1;
(statearr_32888_32915[(2)] = null);

(statearr_32888_32915[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (10))){
var inst_32861 = (state_32869[(2)]);
var state_32869__$1 = (function (){var statearr_32889 = state_32869;
(statearr_32889[(11)] = inst_32861);

return statearr_32889;
})();
var statearr_32890_32916 = state_32869__$1;
(statearr_32890_32916[(2)] = null);

(statearr_32890_32916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (8))){
var inst_32828 = (state_32869[(9)]);
var inst_32832 = figwheel.client.reload_file_state_QMARK_.call(null,inst_32828,opts);
var state_32869__$1 = state_32869;
if(cljs.core.truth_(inst_32832)){
var statearr_32891_32917 = state_32869__$1;
(statearr_32891_32917[(1)] = (11));

} else {
var statearr_32892_32918 = state_32869__$1;
(statearr_32892_32918[(1)] = (12));

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
});})(c__27234__auto___32900,ch))
;
return ((function (switch__26547__auto__,c__27234__auto___32900,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26548__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26548__auto____0 = (function (){
var statearr_32896 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32896[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26548__auto__);

(statearr_32896[(1)] = (1));

return statearr_32896;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26548__auto____1 = (function (state_32869){
while(true){
var ret_value__26549__auto__ = (function (){try{while(true){
var result__26550__auto__ = switch__26547__auto__.call(null,state_32869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26550__auto__;
}
break;
}
}catch (e32897){if((e32897 instanceof Object)){
var ex__26551__auto__ = e32897;
var statearr_32898_32919 = state_32869;
(statearr_32898_32919[(5)] = ex__26551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32920 = state_32869;
state_32869 = G__32920;
continue;
} else {
return ret_value__26549__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26548__auto__ = function(state_32869){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26548__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26548__auto____1.call(this,state_32869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26548__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26548__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26548__auto__;
})()
;})(switch__26547__auto__,c__27234__auto___32900,ch))
})();
var state__27236__auto__ = (function (){var statearr_32899 = f__27235__auto__.call(null);
(statearr_32899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27234__auto___32900);

return statearr_32899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27236__auto__);
});})(c__27234__auto___32900,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__32921_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__32921_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_32924 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_32924){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e32923){if((e32923 instanceof Error)){
var e = e32923;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_32924], null));
} else {
var e = e32923;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_32924))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__32925){
var map__32932 = p__32925;
var map__32932__$1 = ((((!((map__32932 == null)))?((((map__32932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32932):map__32932);
var opts = map__32932__$1;
var build_id = cljs.core.get.call(null,map__32932__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__32932,map__32932__$1,opts,build_id){
return (function (p__32934){
var vec__32935 = p__32934;
var map__32936 = cljs.core.nth.call(null,vec__32935,(0),null);
var map__32936__$1 = ((((!((map__32936 == null)))?((((map__32936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32936):map__32936);
var msg = map__32936__$1;
var msg_name = cljs.core.get.call(null,map__32936__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32935,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__32935,map__32936,map__32936__$1,msg,msg_name,_,map__32932,map__32932__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__32935,map__32936,map__32936__$1,msg,msg_name,_,map__32932,map__32932__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__32932,map__32932__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__32942){
var vec__32943 = p__32942;
var map__32944 = cljs.core.nth.call(null,vec__32943,(0),null);
var map__32944__$1 = ((((!((map__32944 == null)))?((((map__32944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32944):map__32944);
var msg = map__32944__$1;
var msg_name = cljs.core.get.call(null,map__32944__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32943,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__32946){
var map__32956 = p__32946;
var map__32956__$1 = ((((!((map__32956 == null)))?((((map__32956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32956):map__32956);
var on_compile_warning = cljs.core.get.call(null,map__32956__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__32956__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__32956,map__32956__$1,on_compile_warning,on_compile_fail){
return (function (p__32958){
var vec__32959 = p__32958;
var map__32960 = cljs.core.nth.call(null,vec__32959,(0),null);
var map__32960__$1 = ((((!((map__32960 == null)))?((((map__32960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32960):map__32960);
var msg = map__32960__$1;
var msg_name = cljs.core.get.call(null,map__32960__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32959,(1));
var pred__32962 = cljs.core._EQ_;
var expr__32963 = msg_name;
if(cljs.core.truth_(pred__32962.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__32963))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__32962.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__32963))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__32956,map__32956__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27234__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27235__auto__ = (function (){var switch__26547__auto__ = ((function (c__27234__auto__,msg_hist,msg_names,msg){
return (function (state_33191){
var state_val_33192 = (state_33191[(1)]);
if((state_val_33192 === (7))){
var inst_33111 = (state_33191[(2)]);
var state_33191__$1 = state_33191;
if(cljs.core.truth_(inst_33111)){
var statearr_33193_33243 = state_33191__$1;
(statearr_33193_33243[(1)] = (8));

} else {
var statearr_33194_33244 = state_33191__$1;
(statearr_33194_33244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (20))){
var inst_33185 = (state_33191[(2)]);
var state_33191__$1 = state_33191;
var statearr_33195_33245 = state_33191__$1;
(statearr_33195_33245[(2)] = inst_33185);

(statearr_33195_33245[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (27))){
var inst_33181 = (state_33191[(2)]);
var state_33191__$1 = state_33191;
var statearr_33196_33246 = state_33191__$1;
(statearr_33196_33246[(2)] = inst_33181);

(statearr_33196_33246[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (1))){
var inst_33104 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_33191__$1 = state_33191;
if(cljs.core.truth_(inst_33104)){
var statearr_33197_33247 = state_33191__$1;
(statearr_33197_33247[(1)] = (2));

} else {
var statearr_33198_33248 = state_33191__$1;
(statearr_33198_33248[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (24))){
var inst_33183 = (state_33191[(2)]);
var state_33191__$1 = state_33191;
var statearr_33199_33249 = state_33191__$1;
(statearr_33199_33249[(2)] = inst_33183);

(statearr_33199_33249[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (4))){
var inst_33189 = (state_33191[(2)]);
var state_33191__$1 = state_33191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33191__$1,inst_33189);
} else {
if((state_val_33192 === (15))){
var inst_33187 = (state_33191[(2)]);
var state_33191__$1 = state_33191;
var statearr_33200_33250 = state_33191__$1;
(statearr_33200_33250[(2)] = inst_33187);

(statearr_33200_33250[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (21))){
var inst_33140 = (state_33191[(2)]);
var inst_33141 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33142 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33141);
var state_33191__$1 = (function (){var statearr_33201 = state_33191;
(statearr_33201[(7)] = inst_33140);

return statearr_33201;
})();
var statearr_33202_33251 = state_33191__$1;
(statearr_33202_33251[(2)] = inst_33142);

(statearr_33202_33251[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (31))){
var inst_33170 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_33191__$1 = state_33191;
if(cljs.core.truth_(inst_33170)){
var statearr_33203_33252 = state_33191__$1;
(statearr_33203_33252[(1)] = (34));

} else {
var statearr_33204_33253 = state_33191__$1;
(statearr_33204_33253[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (32))){
var inst_33179 = (state_33191[(2)]);
var state_33191__$1 = state_33191;
var statearr_33205_33254 = state_33191__$1;
(statearr_33205_33254[(2)] = inst_33179);

(statearr_33205_33254[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (33))){
var inst_33166 = (state_33191[(2)]);
var inst_33167 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33168 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33167);
var state_33191__$1 = (function (){var statearr_33206 = state_33191;
(statearr_33206[(8)] = inst_33166);

return statearr_33206;
})();
var statearr_33207_33255 = state_33191__$1;
(statearr_33207_33255[(2)] = inst_33168);

(statearr_33207_33255[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (13))){
var inst_33125 = figwheel.client.heads_up.clear.call(null);
var state_33191__$1 = state_33191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33191__$1,(16),inst_33125);
} else {
if((state_val_33192 === (22))){
var inst_33146 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33147 = figwheel.client.heads_up.append_warning_message.call(null,inst_33146);
var state_33191__$1 = state_33191;
var statearr_33208_33256 = state_33191__$1;
(statearr_33208_33256[(2)] = inst_33147);

(statearr_33208_33256[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (36))){
var inst_33177 = (state_33191[(2)]);
var state_33191__$1 = state_33191;
var statearr_33209_33257 = state_33191__$1;
(statearr_33209_33257[(2)] = inst_33177);

(statearr_33209_33257[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (29))){
var inst_33157 = (state_33191[(2)]);
var inst_33158 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33159 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33158);
var state_33191__$1 = (function (){var statearr_33210 = state_33191;
(statearr_33210[(9)] = inst_33157);

return statearr_33210;
})();
var statearr_33211_33258 = state_33191__$1;
(statearr_33211_33258[(2)] = inst_33159);

(statearr_33211_33258[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (6))){
var inst_33106 = (state_33191[(10)]);
var state_33191__$1 = state_33191;
var statearr_33212_33259 = state_33191__$1;
(statearr_33212_33259[(2)] = inst_33106);

(statearr_33212_33259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (28))){
var inst_33153 = (state_33191[(2)]);
var inst_33154 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33155 = figwheel.client.heads_up.display_warning.call(null,inst_33154);
var state_33191__$1 = (function (){var statearr_33213 = state_33191;
(statearr_33213[(11)] = inst_33153);

return statearr_33213;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33191__$1,(29),inst_33155);
} else {
if((state_val_33192 === (25))){
var inst_33151 = figwheel.client.heads_up.clear.call(null);
var state_33191__$1 = state_33191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33191__$1,(28),inst_33151);
} else {
if((state_val_33192 === (34))){
var inst_33172 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33191__$1 = state_33191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33191__$1,(37),inst_33172);
} else {
if((state_val_33192 === (17))){
var inst_33131 = (state_33191[(2)]);
var inst_33132 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33133 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33132);
var state_33191__$1 = (function (){var statearr_33214 = state_33191;
(statearr_33214[(12)] = inst_33131);

return statearr_33214;
})();
var statearr_33215_33260 = state_33191__$1;
(statearr_33215_33260[(2)] = inst_33133);

(statearr_33215_33260[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (3))){
var inst_33123 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_33191__$1 = state_33191;
if(cljs.core.truth_(inst_33123)){
var statearr_33216_33261 = state_33191__$1;
(statearr_33216_33261[(1)] = (13));

} else {
var statearr_33217_33262 = state_33191__$1;
(statearr_33217_33262[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (12))){
var inst_33119 = (state_33191[(2)]);
var state_33191__$1 = state_33191;
var statearr_33218_33263 = state_33191__$1;
(statearr_33218_33263[(2)] = inst_33119);

(statearr_33218_33263[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (2))){
var inst_33106 = (state_33191[(10)]);
var inst_33106__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_33191__$1 = (function (){var statearr_33219 = state_33191;
(statearr_33219[(10)] = inst_33106__$1);

return statearr_33219;
})();
if(cljs.core.truth_(inst_33106__$1)){
var statearr_33220_33264 = state_33191__$1;
(statearr_33220_33264[(1)] = (5));

} else {
var statearr_33221_33265 = state_33191__$1;
(statearr_33221_33265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (23))){
var inst_33149 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_33191__$1 = state_33191;
if(cljs.core.truth_(inst_33149)){
var statearr_33222_33266 = state_33191__$1;
(statearr_33222_33266[(1)] = (25));

} else {
var statearr_33223_33267 = state_33191__$1;
(statearr_33223_33267[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (35))){
var state_33191__$1 = state_33191;
var statearr_33224_33268 = state_33191__$1;
(statearr_33224_33268[(2)] = null);

(statearr_33224_33268[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (19))){
var inst_33144 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_33191__$1 = state_33191;
if(cljs.core.truth_(inst_33144)){
var statearr_33225_33269 = state_33191__$1;
(statearr_33225_33269[(1)] = (22));

} else {
var statearr_33226_33270 = state_33191__$1;
(statearr_33226_33270[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (11))){
var inst_33115 = (state_33191[(2)]);
var state_33191__$1 = state_33191;
var statearr_33227_33271 = state_33191__$1;
(statearr_33227_33271[(2)] = inst_33115);

(statearr_33227_33271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (9))){
var inst_33117 = figwheel.client.heads_up.clear.call(null);
var state_33191__$1 = state_33191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33191__$1,(12),inst_33117);
} else {
if((state_val_33192 === (5))){
var inst_33108 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_33191__$1 = state_33191;
var statearr_33228_33272 = state_33191__$1;
(statearr_33228_33272[(2)] = inst_33108);

(statearr_33228_33272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (14))){
var inst_33135 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_33191__$1 = state_33191;
if(cljs.core.truth_(inst_33135)){
var statearr_33229_33273 = state_33191__$1;
(statearr_33229_33273[(1)] = (18));

} else {
var statearr_33230_33274 = state_33191__$1;
(statearr_33230_33274[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (26))){
var inst_33161 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_33191__$1 = state_33191;
if(cljs.core.truth_(inst_33161)){
var statearr_33231_33275 = state_33191__$1;
(statearr_33231_33275[(1)] = (30));

} else {
var statearr_33232_33276 = state_33191__$1;
(statearr_33232_33276[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (16))){
var inst_33127 = (state_33191[(2)]);
var inst_33128 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33129 = figwheel.client.heads_up.display_exception.call(null,inst_33128);
var state_33191__$1 = (function (){var statearr_33233 = state_33191;
(statearr_33233[(13)] = inst_33127);

return statearr_33233;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33191__$1,(17),inst_33129);
} else {
if((state_val_33192 === (30))){
var inst_33163 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33164 = figwheel.client.heads_up.display_warning.call(null,inst_33163);
var state_33191__$1 = state_33191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33191__$1,(33),inst_33164);
} else {
if((state_val_33192 === (10))){
var inst_33121 = (state_33191[(2)]);
var state_33191__$1 = state_33191;
var statearr_33234_33277 = state_33191__$1;
(statearr_33234_33277[(2)] = inst_33121);

(statearr_33234_33277[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (18))){
var inst_33137 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33138 = figwheel.client.heads_up.display_exception.call(null,inst_33137);
var state_33191__$1 = state_33191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33191__$1,(21),inst_33138);
} else {
if((state_val_33192 === (37))){
var inst_33174 = (state_33191[(2)]);
var state_33191__$1 = state_33191;
var statearr_33235_33278 = state_33191__$1;
(statearr_33235_33278[(2)] = inst_33174);

(statearr_33235_33278[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33192 === (8))){
var inst_33113 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33191__$1 = state_33191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33191__$1,(11),inst_33113);
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
});})(c__27234__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26547__auto__,c__27234__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26548__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26548__auto____0 = (function (){
var statearr_33239 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33239[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26548__auto__);

(statearr_33239[(1)] = (1));

return statearr_33239;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26548__auto____1 = (function (state_33191){
while(true){
var ret_value__26549__auto__ = (function (){try{while(true){
var result__26550__auto__ = switch__26547__auto__.call(null,state_33191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26550__auto__;
}
break;
}
}catch (e33240){if((e33240 instanceof Object)){
var ex__26551__auto__ = e33240;
var statearr_33241_33279 = state_33191;
(statearr_33241_33279[(5)] = ex__26551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33280 = state_33191;
state_33191 = G__33280;
continue;
} else {
return ret_value__26549__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26548__auto__ = function(state_33191){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26548__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26548__auto____1.call(this,state_33191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26548__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26548__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26548__auto__;
})()
;})(switch__26547__auto__,c__27234__auto__,msg_hist,msg_names,msg))
})();
var state__27236__auto__ = (function (){var statearr_33242 = f__27235__auto__.call(null);
(statearr_33242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27234__auto__);

return statearr_33242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27236__auto__);
});})(c__27234__auto__,msg_hist,msg_names,msg))
);

return c__27234__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27234__auto___33343 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27234__auto___33343,ch){
return (function (){
var f__27235__auto__ = (function (){var switch__26547__auto__ = ((function (c__27234__auto___33343,ch){
return (function (state_33326){
var state_val_33327 = (state_33326[(1)]);
if((state_val_33327 === (1))){
var state_33326__$1 = state_33326;
var statearr_33328_33344 = state_33326__$1;
(statearr_33328_33344[(2)] = null);

(statearr_33328_33344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33327 === (2))){
var state_33326__$1 = state_33326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33326__$1,(4),ch);
} else {
if((state_val_33327 === (3))){
var inst_33324 = (state_33326[(2)]);
var state_33326__$1 = state_33326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33326__$1,inst_33324);
} else {
if((state_val_33327 === (4))){
var inst_33314 = (state_33326[(7)]);
var inst_33314__$1 = (state_33326[(2)]);
var state_33326__$1 = (function (){var statearr_33329 = state_33326;
(statearr_33329[(7)] = inst_33314__$1);

return statearr_33329;
})();
if(cljs.core.truth_(inst_33314__$1)){
var statearr_33330_33345 = state_33326__$1;
(statearr_33330_33345[(1)] = (5));

} else {
var statearr_33331_33346 = state_33326__$1;
(statearr_33331_33346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33327 === (5))){
var inst_33314 = (state_33326[(7)]);
var inst_33316 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_33314);
var state_33326__$1 = state_33326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33326__$1,(8),inst_33316);
} else {
if((state_val_33327 === (6))){
var state_33326__$1 = state_33326;
var statearr_33332_33347 = state_33326__$1;
(statearr_33332_33347[(2)] = null);

(statearr_33332_33347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33327 === (7))){
var inst_33322 = (state_33326[(2)]);
var state_33326__$1 = state_33326;
var statearr_33333_33348 = state_33326__$1;
(statearr_33333_33348[(2)] = inst_33322);

(statearr_33333_33348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33327 === (8))){
var inst_33318 = (state_33326[(2)]);
var state_33326__$1 = (function (){var statearr_33334 = state_33326;
(statearr_33334[(8)] = inst_33318);

return statearr_33334;
})();
var statearr_33335_33349 = state_33326__$1;
(statearr_33335_33349[(2)] = null);

(statearr_33335_33349[(1)] = (2));


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
});})(c__27234__auto___33343,ch))
;
return ((function (switch__26547__auto__,c__27234__auto___33343,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26548__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26548__auto____0 = (function (){
var statearr_33339 = [null,null,null,null,null,null,null,null,null];
(statearr_33339[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26548__auto__);

(statearr_33339[(1)] = (1));

return statearr_33339;
});
var figwheel$client$heads_up_plugin_$_state_machine__26548__auto____1 = (function (state_33326){
while(true){
var ret_value__26549__auto__ = (function (){try{while(true){
var result__26550__auto__ = switch__26547__auto__.call(null,state_33326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26550__auto__;
}
break;
}
}catch (e33340){if((e33340 instanceof Object)){
var ex__26551__auto__ = e33340;
var statearr_33341_33350 = state_33326;
(statearr_33341_33350[(5)] = ex__26551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33351 = state_33326;
state_33326 = G__33351;
continue;
} else {
return ret_value__26549__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26548__auto__ = function(state_33326){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26548__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26548__auto____1.call(this,state_33326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26548__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26548__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26548__auto__;
})()
;})(switch__26547__auto__,c__27234__auto___33343,ch))
})();
var state__27236__auto__ = (function (){var statearr_33342 = f__27235__auto__.call(null);
(statearr_33342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27234__auto___33343);

return statearr_33342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27236__auto__);
});})(c__27234__auto___33343,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27234__auto__){
return (function (){
var f__27235__auto__ = (function (){var switch__26547__auto__ = ((function (c__27234__auto__){
return (function (state_33372){
var state_val_33373 = (state_33372[(1)]);
if((state_val_33373 === (1))){
var inst_33367 = cljs.core.async.timeout.call(null,(3000));
var state_33372__$1 = state_33372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33372__$1,(2),inst_33367);
} else {
if((state_val_33373 === (2))){
var inst_33369 = (state_33372[(2)]);
var inst_33370 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_33372__$1 = (function (){var statearr_33374 = state_33372;
(statearr_33374[(7)] = inst_33369);

return statearr_33374;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33372__$1,inst_33370);
} else {
return null;
}
}
});})(c__27234__auto__))
;
return ((function (switch__26547__auto__,c__27234__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26548__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26548__auto____0 = (function (){
var statearr_33378 = [null,null,null,null,null,null,null,null];
(statearr_33378[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26548__auto__);

(statearr_33378[(1)] = (1));

return statearr_33378;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26548__auto____1 = (function (state_33372){
while(true){
var ret_value__26549__auto__ = (function (){try{while(true){
var result__26550__auto__ = switch__26547__auto__.call(null,state_33372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26550__auto__;
}
break;
}
}catch (e33379){if((e33379 instanceof Object)){
var ex__26551__auto__ = e33379;
var statearr_33380_33382 = state_33372;
(statearr_33380_33382[(5)] = ex__26551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33383 = state_33372;
state_33372 = G__33383;
continue;
} else {
return ret_value__26549__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26548__auto__ = function(state_33372){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26548__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26548__auto____1.call(this,state_33372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26548__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26548__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26548__auto__;
})()
;})(switch__26547__auto__,c__27234__auto__))
})();
var state__27236__auto__ = (function (){var statearr_33381 = f__27235__auto__.call(null);
(statearr_33381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27234__auto__);

return statearr_33381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27236__auto__);
});})(c__27234__auto__))
);

return c__27234__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27234__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__27235__auto__ = (function (){var switch__26547__auto__ = ((function (c__27234__auto__,figwheel_version,temp__4657__auto__){
return (function (state_33406){
var state_val_33407 = (state_33406[(1)]);
if((state_val_33407 === (1))){
var inst_33400 = cljs.core.async.timeout.call(null,(2000));
var state_33406__$1 = state_33406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33406__$1,(2),inst_33400);
} else {
if((state_val_33407 === (2))){
var inst_33402 = (state_33406[(2)]);
var inst_33403 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_33404 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_33403);
var state_33406__$1 = (function (){var statearr_33408 = state_33406;
(statearr_33408[(7)] = inst_33402);

return statearr_33408;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33406__$1,inst_33404);
} else {
return null;
}
}
});})(c__27234__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__26547__auto__,c__27234__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26548__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26548__auto____0 = (function (){
var statearr_33412 = [null,null,null,null,null,null,null,null];
(statearr_33412[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26548__auto__);

(statearr_33412[(1)] = (1));

return statearr_33412;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26548__auto____1 = (function (state_33406){
while(true){
var ret_value__26549__auto__ = (function (){try{while(true){
var result__26550__auto__ = switch__26547__auto__.call(null,state_33406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26550__auto__;
}
break;
}
}catch (e33413){if((e33413 instanceof Object)){
var ex__26551__auto__ = e33413;
var statearr_33414_33416 = state_33406;
(statearr_33414_33416[(5)] = ex__26551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33417 = state_33406;
state_33406 = G__33417;
continue;
} else {
return ret_value__26549__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26548__auto__ = function(state_33406){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26548__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26548__auto____1.call(this,state_33406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26548__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26548__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26548__auto__;
})()
;})(switch__26547__auto__,c__27234__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27236__auto__ = (function (){var statearr_33415 = f__27235__auto__.call(null);
(statearr_33415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27234__auto__);

return statearr_33415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27236__auto__);
});})(c__27234__auto__,figwheel_version,temp__4657__auto__))
);

return c__27234__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__33418){
var map__33422 = p__33418;
var map__33422__$1 = ((((!((map__33422 == null)))?((((map__33422.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33422.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33422):map__33422);
var file = cljs.core.get.call(null,map__33422__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__33422__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__33422__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__33424 = "";
var G__33424__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__33424),cljs.core.str("file "),cljs.core.str(file)].join(''):G__33424);
var G__33424__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__33424__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__33424__$1);
if(cljs.core.truth_((function (){var and__24522__auto__ = line;
if(cljs.core.truth_(and__24522__auto__)){
return column;
} else {
return and__24522__auto__;
}
})())){
return [cljs.core.str(G__33424__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__33424__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__33425){
var map__33432 = p__33425;
var map__33432__$1 = ((((!((map__33432 == null)))?((((map__33432.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33432.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33432):map__33432);
var ed = map__33432__$1;
var formatted_exception = cljs.core.get.call(null,map__33432__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__33432__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__33432__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__33434_33438 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__33435_33439 = null;
var count__33436_33440 = (0);
var i__33437_33441 = (0);
while(true){
if((i__33437_33441 < count__33436_33440)){
var msg_33442 = cljs.core._nth.call(null,chunk__33435_33439,i__33437_33441);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33442);

var G__33443 = seq__33434_33438;
var G__33444 = chunk__33435_33439;
var G__33445 = count__33436_33440;
var G__33446 = (i__33437_33441 + (1));
seq__33434_33438 = G__33443;
chunk__33435_33439 = G__33444;
count__33436_33440 = G__33445;
i__33437_33441 = G__33446;
continue;
} else {
var temp__4657__auto___33447 = cljs.core.seq.call(null,seq__33434_33438);
if(temp__4657__auto___33447){
var seq__33434_33448__$1 = temp__4657__auto___33447;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33434_33448__$1)){
var c__25345__auto___33449 = cljs.core.chunk_first.call(null,seq__33434_33448__$1);
var G__33450 = cljs.core.chunk_rest.call(null,seq__33434_33448__$1);
var G__33451 = c__25345__auto___33449;
var G__33452 = cljs.core.count.call(null,c__25345__auto___33449);
var G__33453 = (0);
seq__33434_33438 = G__33450;
chunk__33435_33439 = G__33451;
count__33436_33440 = G__33452;
i__33437_33441 = G__33453;
continue;
} else {
var msg_33454 = cljs.core.first.call(null,seq__33434_33448__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33454);

var G__33455 = cljs.core.next.call(null,seq__33434_33448__$1);
var G__33456 = null;
var G__33457 = (0);
var G__33458 = (0);
seq__33434_33438 = G__33455;
chunk__33435_33439 = G__33456;
count__33436_33440 = G__33457;
i__33437_33441 = G__33458;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__33459){
var map__33462 = p__33459;
var map__33462__$1 = ((((!((map__33462 == null)))?((((map__33462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33462):map__33462);
var w = map__33462__$1;
var message = cljs.core.get.call(null,map__33462__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24522__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24522__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24522__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__33470 = cljs.core.seq.call(null,plugins);
var chunk__33471 = null;
var count__33472 = (0);
var i__33473 = (0);
while(true){
if((i__33473 < count__33472)){
var vec__33474 = cljs.core._nth.call(null,chunk__33471,i__33473);
var k = cljs.core.nth.call(null,vec__33474,(0),null);
var plugin = cljs.core.nth.call(null,vec__33474,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33476 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33470,chunk__33471,count__33472,i__33473,pl_33476,vec__33474,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_33476.call(null,msg_hist);
});})(seq__33470,chunk__33471,count__33472,i__33473,pl_33476,vec__33474,k,plugin))
);
} else {
}

var G__33477 = seq__33470;
var G__33478 = chunk__33471;
var G__33479 = count__33472;
var G__33480 = (i__33473 + (1));
seq__33470 = G__33477;
chunk__33471 = G__33478;
count__33472 = G__33479;
i__33473 = G__33480;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33470);
if(temp__4657__auto__){
var seq__33470__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33470__$1)){
var c__25345__auto__ = cljs.core.chunk_first.call(null,seq__33470__$1);
var G__33481 = cljs.core.chunk_rest.call(null,seq__33470__$1);
var G__33482 = c__25345__auto__;
var G__33483 = cljs.core.count.call(null,c__25345__auto__);
var G__33484 = (0);
seq__33470 = G__33481;
chunk__33471 = G__33482;
count__33472 = G__33483;
i__33473 = G__33484;
continue;
} else {
var vec__33475 = cljs.core.first.call(null,seq__33470__$1);
var k = cljs.core.nth.call(null,vec__33475,(0),null);
var plugin = cljs.core.nth.call(null,vec__33475,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33485 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33470,chunk__33471,count__33472,i__33473,pl_33485,vec__33475,k,plugin,seq__33470__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_33485.call(null,msg_hist);
});})(seq__33470,chunk__33471,count__33472,i__33473,pl_33485,vec__33475,k,plugin,seq__33470__$1,temp__4657__auto__))
);
} else {
}

var G__33486 = cljs.core.next.call(null,seq__33470__$1);
var G__33487 = null;
var G__33488 = (0);
var G__33489 = (0);
seq__33470 = G__33486;
chunk__33471 = G__33487;
count__33472 = G__33488;
i__33473 = G__33489;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args33490 = [];
var len__25604__auto___33497 = arguments.length;
var i__25605__auto___33498 = (0);
while(true){
if((i__25605__auto___33498 < len__25604__auto___33497)){
args33490.push((arguments[i__25605__auto___33498]));

var G__33499 = (i__25605__auto___33498 + (1));
i__25605__auto___33498 = G__33499;
continue;
} else {
}
break;
}

var G__33492 = args33490.length;
switch (G__33492) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33490.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__33493_33501 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__33494_33502 = null;
var count__33495_33503 = (0);
var i__33496_33504 = (0);
while(true){
if((i__33496_33504 < count__33495_33503)){
var msg_33505 = cljs.core._nth.call(null,chunk__33494_33502,i__33496_33504);
figwheel.client.socket.handle_incoming_message.call(null,msg_33505);

var G__33506 = seq__33493_33501;
var G__33507 = chunk__33494_33502;
var G__33508 = count__33495_33503;
var G__33509 = (i__33496_33504 + (1));
seq__33493_33501 = G__33506;
chunk__33494_33502 = G__33507;
count__33495_33503 = G__33508;
i__33496_33504 = G__33509;
continue;
} else {
var temp__4657__auto___33510 = cljs.core.seq.call(null,seq__33493_33501);
if(temp__4657__auto___33510){
var seq__33493_33511__$1 = temp__4657__auto___33510;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33493_33511__$1)){
var c__25345__auto___33512 = cljs.core.chunk_first.call(null,seq__33493_33511__$1);
var G__33513 = cljs.core.chunk_rest.call(null,seq__33493_33511__$1);
var G__33514 = c__25345__auto___33512;
var G__33515 = cljs.core.count.call(null,c__25345__auto___33512);
var G__33516 = (0);
seq__33493_33501 = G__33513;
chunk__33494_33502 = G__33514;
count__33495_33503 = G__33515;
i__33496_33504 = G__33516;
continue;
} else {
var msg_33517 = cljs.core.first.call(null,seq__33493_33511__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_33517);

var G__33518 = cljs.core.next.call(null,seq__33493_33511__$1);
var G__33519 = null;
var G__33520 = (0);
var G__33521 = (0);
seq__33493_33501 = G__33518;
chunk__33494_33502 = G__33519;
count__33495_33503 = G__33520;
i__33496_33504 = G__33521;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25611__auto__ = [];
var len__25604__auto___33526 = arguments.length;
var i__25605__auto___33527 = (0);
while(true){
if((i__25605__auto___33527 < len__25604__auto___33526)){
args__25611__auto__.push((arguments[i__25605__auto___33527]));

var G__33528 = (i__25605__auto___33527 + (1));
i__25605__auto___33527 = G__33528;
continue;
} else {
}
break;
}

var argseq__25612__auto__ = ((((0) < args__25611__auto__.length))?(new cljs.core.IndexedSeq(args__25611__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25612__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__33523){
var map__33524 = p__33523;
var map__33524__$1 = ((((!((map__33524 == null)))?((((map__33524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33524):map__33524);
var opts = map__33524__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq33522){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33522));
});
figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e33530){if((e33530 instanceof Error)){
var e = e33530;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e33530;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__33534){
var map__33535 = p__33534;
var map__33535__$1 = ((((!((map__33535 == null)))?((((map__33535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33535):map__33535);
var msg_name = cljs.core.get.call(null,map__33535__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1478192740021