// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27279 = [];
var len__25604__auto___27285 = arguments.length;
var i__25605__auto___27286 = (0);
while(true){
if((i__25605__auto___27286 < len__25604__auto___27285)){
args27279.push((arguments[i__25605__auto___27286]));

var G__27287 = (i__25605__auto___27286 + (1));
i__25605__auto___27286 = G__27287;
continue;
} else {
}
break;
}

var G__27281 = args27279.length;
switch (G__27281) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27279.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27282 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27282 = (function (f,blockable,meta27283){
this.f = f;
this.blockable = blockable;
this.meta27283 = meta27283;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27284,meta27283__$1){
var self__ = this;
var _27284__$1 = this;
return (new cljs.core.async.t_cljs$core$async27282(self__.f,self__.blockable,meta27283__$1));
});

cljs.core.async.t_cljs$core$async27282.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27284){
var self__ = this;
var _27284__$1 = this;
return self__.meta27283;
});

cljs.core.async.t_cljs$core$async27282.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27282.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27282.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27282.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27282.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27283","meta27283",1052981735,null)], null);
});

cljs.core.async.t_cljs$core$async27282.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27282.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27282";

cljs.core.async.t_cljs$core$async27282.cljs$lang$ctorPrWriter = (function (this__25140__auto__,writer__25141__auto__,opt__25142__auto__){
return cljs.core._write.call(null,writer__25141__auto__,"cljs.core.async/t_cljs$core$async27282");
});

cljs.core.async.__GT_t_cljs$core$async27282 = (function cljs$core$async$__GT_t_cljs$core$async27282(f__$1,blockable__$1,meta27283){
return (new cljs.core.async.t_cljs$core$async27282(f__$1,blockable__$1,meta27283));
});

}

return (new cljs.core.async.t_cljs$core$async27282(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27291 = [];
var len__25604__auto___27294 = arguments.length;
var i__25605__auto___27295 = (0);
while(true){
if((i__25605__auto___27295 < len__25604__auto___27294)){
args27291.push((arguments[i__25605__auto___27295]));

var G__27296 = (i__25605__auto___27295 + (1));
i__25605__auto___27295 = G__27296;
continue;
} else {
}
break;
}

var G__27293 = args27291.length;
switch (G__27293) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27291.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args27298 = [];
var len__25604__auto___27301 = arguments.length;
var i__25605__auto___27302 = (0);
while(true){
if((i__25605__auto___27302 < len__25604__auto___27301)){
args27298.push((arguments[i__25605__auto___27302]));

var G__27303 = (i__25605__auto___27302 + (1));
i__25605__auto___27302 = G__27303;
continue;
} else {
}
break;
}

var G__27300 = args27298.length;
switch (G__27300) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27298.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27305 = [];
var len__25604__auto___27308 = arguments.length;
var i__25605__auto___27309 = (0);
while(true){
if((i__25605__auto___27309 < len__25604__auto___27308)){
args27305.push((arguments[i__25605__auto___27309]));

var G__27310 = (i__25605__auto___27309 + (1));
i__25605__auto___27309 = G__27310;
continue;
} else {
}
break;
}

var G__27307 = args27305.length;
switch (G__27307) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27305.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27312 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27312);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27312,ret){
return (function (){
return fn1.call(null,val_27312);
});})(val_27312,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27313 = [];
var len__25604__auto___27316 = arguments.length;
var i__25605__auto___27317 = (0);
while(true){
if((i__25605__auto___27317 < len__25604__auto___27316)){
args27313.push((arguments[i__25605__auto___27317]));

var G__27318 = (i__25605__auto___27317 + (1));
i__25605__auto___27317 = G__27318;
continue;
} else {
}
break;
}

var G__27315 = args27313.length;
switch (G__27315) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27313.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25449__auto___27320 = n;
var x_27321 = (0);
while(true){
if((x_27321 < n__25449__auto___27320)){
(a[x_27321] = (0));

var G__27322 = (x_27321 + (1));
x_27321 = G__27322;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27323 = (i + (1));
i = G__27323;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27327 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27327 = (function (alt_flag,flag,meta27328){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27328 = meta27328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27329,meta27328__$1){
var self__ = this;
var _27329__$1 = this;
return (new cljs.core.async.t_cljs$core$async27327(self__.alt_flag,self__.flag,meta27328__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27327.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27329){
var self__ = this;
var _27329__$1 = this;
return self__.meta27328;
});})(flag))
;

cljs.core.async.t_cljs$core$async27327.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27327.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27327.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27327.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27327.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27328","meta27328",1329277306,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27327.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27327.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27327";

cljs.core.async.t_cljs$core$async27327.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25140__auto__,writer__25141__auto__,opt__25142__auto__){
return cljs.core._write.call(null,writer__25141__auto__,"cljs.core.async/t_cljs$core$async27327");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27327 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27327(alt_flag__$1,flag__$1,meta27328){
return (new cljs.core.async.t_cljs$core$async27327(alt_flag__$1,flag__$1,meta27328));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27327(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27333 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27333 = (function (alt_handler,flag,cb,meta27334){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27334 = meta27334;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27335,meta27334__$1){
var self__ = this;
var _27335__$1 = this;
return (new cljs.core.async.t_cljs$core$async27333(self__.alt_handler,self__.flag,self__.cb,meta27334__$1));
});

cljs.core.async.t_cljs$core$async27333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27335){
var self__ = this;
var _27335__$1 = this;
return self__.meta27334;
});

cljs.core.async.t_cljs$core$async27333.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27333.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27333.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27333.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27333.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27334","meta27334",-1110188766,null)], null);
});

cljs.core.async.t_cljs$core$async27333.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27333.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27333";

cljs.core.async.t_cljs$core$async27333.cljs$lang$ctorPrWriter = (function (this__25140__auto__,writer__25141__auto__,opt__25142__auto__){
return cljs.core._write.call(null,writer__25141__auto__,"cljs.core.async/t_cljs$core$async27333");
});

cljs.core.async.__GT_t_cljs$core$async27333 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27333(alt_handler__$1,flag__$1,cb__$1,meta27334){
return (new cljs.core.async.t_cljs$core$async27333(alt_handler__$1,flag__$1,cb__$1,meta27334));
});

}

return (new cljs.core.async.t_cljs$core$async27333(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27336_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27336_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27337_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27337_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24534__auto__ = wport;
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27338 = (i + (1));
i = G__27338;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24534__auto__ = ret;
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24522__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24522__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24522__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__25611__auto__ = [];
var len__25604__auto___27344 = arguments.length;
var i__25605__auto___27345 = (0);
while(true){
if((i__25605__auto___27345 < len__25604__auto___27344)){
args__25611__auto__.push((arguments[i__25605__auto___27345]));

var G__27346 = (i__25605__auto___27345 + (1));
i__25605__auto___27345 = G__27346;
continue;
} else {
}
break;
}

var argseq__25612__auto__ = ((((1) < args__25611__auto__.length))?(new cljs.core.IndexedSeq(args__25611__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25612__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27341){
var map__27342 = p__27341;
var map__27342__$1 = ((((!((map__27342 == null)))?((((map__27342.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27342.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27342):map__27342);
var opts = map__27342__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27339){
var G__27340 = cljs.core.first.call(null,seq27339);
var seq27339__$1 = cljs.core.next.call(null,seq27339);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27340,seq27339__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27347 = [];
var len__25604__auto___27397 = arguments.length;
var i__25605__auto___27398 = (0);
while(true){
if((i__25605__auto___27398 < len__25604__auto___27397)){
args27347.push((arguments[i__25605__auto___27398]));

var G__27399 = (i__25605__auto___27398 + (1));
i__25605__auto___27398 = G__27399;
continue;
} else {
}
break;
}

var G__27349 = args27347.length;
switch (G__27349) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27347.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27234__auto___27401 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27234__auto___27401){
return (function (){
var f__27235__auto__ = (function (){var switch__26547__auto__ = ((function (c__27234__auto___27401){
return (function (state_27373){
var state_val_27374 = (state_27373[(1)]);
if((state_val_27374 === (7))){
var inst_27369 = (state_27373[(2)]);
var state_27373__$1 = state_27373;
var statearr_27375_27402 = state_27373__$1;
(statearr_27375_27402[(2)] = inst_27369);

(statearr_27375_27402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (1))){
var state_27373__$1 = state_27373;
var statearr_27376_27403 = state_27373__$1;
(statearr_27376_27403[(2)] = null);

(statearr_27376_27403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (4))){
var inst_27352 = (state_27373[(7)]);
var inst_27352__$1 = (state_27373[(2)]);
var inst_27353 = (inst_27352__$1 == null);
var state_27373__$1 = (function (){var statearr_27377 = state_27373;
(statearr_27377[(7)] = inst_27352__$1);

return statearr_27377;
})();
if(cljs.core.truth_(inst_27353)){
var statearr_27378_27404 = state_27373__$1;
(statearr_27378_27404[(1)] = (5));

} else {
var statearr_27379_27405 = state_27373__$1;
(statearr_27379_27405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (13))){
var state_27373__$1 = state_27373;
var statearr_27380_27406 = state_27373__$1;
(statearr_27380_27406[(2)] = null);

(statearr_27380_27406[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (6))){
var inst_27352 = (state_27373[(7)]);
var state_27373__$1 = state_27373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27373__$1,(11),to,inst_27352);
} else {
if((state_val_27374 === (3))){
var inst_27371 = (state_27373[(2)]);
var state_27373__$1 = state_27373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27373__$1,inst_27371);
} else {
if((state_val_27374 === (12))){
var state_27373__$1 = state_27373;
var statearr_27381_27407 = state_27373__$1;
(statearr_27381_27407[(2)] = null);

(statearr_27381_27407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (2))){
var state_27373__$1 = state_27373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27373__$1,(4),from);
} else {
if((state_val_27374 === (11))){
var inst_27362 = (state_27373[(2)]);
var state_27373__$1 = state_27373;
if(cljs.core.truth_(inst_27362)){
var statearr_27382_27408 = state_27373__$1;
(statearr_27382_27408[(1)] = (12));

} else {
var statearr_27383_27409 = state_27373__$1;
(statearr_27383_27409[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (9))){
var state_27373__$1 = state_27373;
var statearr_27384_27410 = state_27373__$1;
(statearr_27384_27410[(2)] = null);

(statearr_27384_27410[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (5))){
var state_27373__$1 = state_27373;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27385_27411 = state_27373__$1;
(statearr_27385_27411[(1)] = (8));

} else {
var statearr_27386_27412 = state_27373__$1;
(statearr_27386_27412[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (14))){
var inst_27367 = (state_27373[(2)]);
var state_27373__$1 = state_27373;
var statearr_27387_27413 = state_27373__$1;
(statearr_27387_27413[(2)] = inst_27367);

(statearr_27387_27413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (10))){
var inst_27359 = (state_27373[(2)]);
var state_27373__$1 = state_27373;
var statearr_27388_27414 = state_27373__$1;
(statearr_27388_27414[(2)] = inst_27359);

(statearr_27388_27414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (8))){
var inst_27356 = cljs.core.async.close_BANG_.call(null,to);
var state_27373__$1 = state_27373;
var statearr_27389_27415 = state_27373__$1;
(statearr_27389_27415[(2)] = inst_27356);

(statearr_27389_27415[(1)] = (10));


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
});})(c__27234__auto___27401))
;
return ((function (switch__26547__auto__,c__27234__auto___27401){
return (function() {
var cljs$core$async$state_machine__26548__auto__ = null;
var cljs$core$async$state_machine__26548__auto____0 = (function (){
var statearr_27393 = [null,null,null,null,null,null,null,null];
(statearr_27393[(0)] = cljs$core$async$state_machine__26548__auto__);

(statearr_27393[(1)] = (1));

return statearr_27393;
});
var cljs$core$async$state_machine__26548__auto____1 = (function (state_27373){
while(true){
var ret_value__26549__auto__ = (function (){try{while(true){
var result__26550__auto__ = switch__26547__auto__.call(null,state_27373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26550__auto__;
}
break;
}
}catch (e27394){if((e27394 instanceof Object)){
var ex__26551__auto__ = e27394;
var statearr_27395_27416 = state_27373;
(statearr_27395_27416[(5)] = ex__26551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27417 = state_27373;
state_27373 = G__27417;
continue;
} else {
return ret_value__26549__auto__;
}
break;
}
});
cljs$core$async$state_machine__26548__auto__ = function(state_27373){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26548__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26548__auto____1.call(this,state_27373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26548__auto____0;
cljs$core$async$state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26548__auto____1;
return cljs$core$async$state_machine__26548__auto__;
})()
;})(switch__26547__auto__,c__27234__auto___27401))
})();
var state__27236__auto__ = (function (){var statearr_27396 = f__27235__auto__.call(null);
(statearr_27396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27234__auto___27401);

return statearr_27396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27236__auto__);
});})(c__27234__auto___27401))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27601){
var vec__27602 = p__27601;
var v = cljs.core.nth.call(null,vec__27602,(0),null);
var p = cljs.core.nth.call(null,vec__27602,(1),null);
var job = vec__27602;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27234__auto___27784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27234__auto___27784,res,vec__27602,v,p,job,jobs,results){
return (function (){
var f__27235__auto__ = (function (){var switch__26547__auto__ = ((function (c__27234__auto___27784,res,vec__27602,v,p,job,jobs,results){
return (function (state_27607){
var state_val_27608 = (state_27607[(1)]);
if((state_val_27608 === (1))){
var state_27607__$1 = state_27607;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27607__$1,(2),res,v);
} else {
if((state_val_27608 === (2))){
var inst_27604 = (state_27607[(2)]);
var inst_27605 = cljs.core.async.close_BANG_.call(null,res);
var state_27607__$1 = (function (){var statearr_27609 = state_27607;
(statearr_27609[(7)] = inst_27604);

return statearr_27609;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27607__$1,inst_27605);
} else {
return null;
}
}
});})(c__27234__auto___27784,res,vec__27602,v,p,job,jobs,results))
;
return ((function (switch__26547__auto__,c__27234__auto___27784,res,vec__27602,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26548__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26548__auto____0 = (function (){
var statearr_27613 = [null,null,null,null,null,null,null,null];
(statearr_27613[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26548__auto__);

(statearr_27613[(1)] = (1));

return statearr_27613;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26548__auto____1 = (function (state_27607){
while(true){
var ret_value__26549__auto__ = (function (){try{while(true){
var result__26550__auto__ = switch__26547__auto__.call(null,state_27607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26550__auto__;
}
break;
}
}catch (e27614){if((e27614 instanceof Object)){
var ex__26551__auto__ = e27614;
var statearr_27615_27785 = state_27607;
(statearr_27615_27785[(5)] = ex__26551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27786 = state_27607;
state_27607 = G__27786;
continue;
} else {
return ret_value__26549__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26548__auto__ = function(state_27607){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26548__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26548__auto____1.call(this,state_27607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26548__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26548__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26548__auto__;
})()
;})(switch__26547__auto__,c__27234__auto___27784,res,vec__27602,v,p,job,jobs,results))
})();
var state__27236__auto__ = (function (){var statearr_27616 = f__27235__auto__.call(null);
(statearr_27616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27234__auto___27784);

return statearr_27616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27236__auto__);
});})(c__27234__auto___27784,res,vec__27602,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27617){
var vec__27618 = p__27617;
var v = cljs.core.nth.call(null,vec__27618,(0),null);
var p = cljs.core.nth.call(null,vec__27618,(1),null);
var job = vec__27618;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25449__auto___27787 = n;
var __27788 = (0);
while(true){
if((__27788 < n__25449__auto___27787)){
var G__27619_27789 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27619_27789) {
case "compute":
var c__27234__auto___27791 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27788,c__27234__auto___27791,G__27619_27789,n__25449__auto___27787,jobs,results,process,async){
return (function (){
var f__27235__auto__ = (function (){var switch__26547__auto__ = ((function (__27788,c__27234__auto___27791,G__27619_27789,n__25449__auto___27787,jobs,results,process,async){
return (function (state_27632){
var state_val_27633 = (state_27632[(1)]);
if((state_val_27633 === (1))){
var state_27632__$1 = state_27632;
var statearr_27634_27792 = state_27632__$1;
(statearr_27634_27792[(2)] = null);

(statearr_27634_27792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (2))){
var state_27632__$1 = state_27632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27632__$1,(4),jobs);
} else {
if((state_val_27633 === (3))){
var inst_27630 = (state_27632[(2)]);
var state_27632__$1 = state_27632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27632__$1,inst_27630);
} else {
if((state_val_27633 === (4))){
var inst_27622 = (state_27632[(2)]);
var inst_27623 = process.call(null,inst_27622);
var state_27632__$1 = state_27632;
if(cljs.core.truth_(inst_27623)){
var statearr_27635_27793 = state_27632__$1;
(statearr_27635_27793[(1)] = (5));

} else {
var statearr_27636_27794 = state_27632__$1;
(statearr_27636_27794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (5))){
var state_27632__$1 = state_27632;
var statearr_27637_27795 = state_27632__$1;
(statearr_27637_27795[(2)] = null);

(statearr_27637_27795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (6))){
var state_27632__$1 = state_27632;
var statearr_27638_27796 = state_27632__$1;
(statearr_27638_27796[(2)] = null);

(statearr_27638_27796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27633 === (7))){
var inst_27628 = (state_27632[(2)]);
var state_27632__$1 = state_27632;
var statearr_27639_27797 = state_27632__$1;
(statearr_27639_27797[(2)] = inst_27628);

(statearr_27639_27797[(1)] = (3));


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
});})(__27788,c__27234__auto___27791,G__27619_27789,n__25449__auto___27787,jobs,results,process,async))
;
return ((function (__27788,switch__26547__auto__,c__27234__auto___27791,G__27619_27789,n__25449__auto___27787,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26548__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26548__auto____0 = (function (){
var statearr_27643 = [null,null,null,null,null,null,null];
(statearr_27643[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26548__auto__);

(statearr_27643[(1)] = (1));

return statearr_27643;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26548__auto____1 = (function (state_27632){
while(true){
var ret_value__26549__auto__ = (function (){try{while(true){
var result__26550__auto__ = switch__26547__auto__.call(null,state_27632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26550__auto__;
}
break;
}
}catch (e27644){if((e27644 instanceof Object)){
var ex__26551__auto__ = e27644;
var statearr_27645_27798 = state_27632;
(statearr_27645_27798[(5)] = ex__26551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27799 = state_27632;
state_27632 = G__27799;
continue;
} else {
return ret_value__26549__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26548__auto__ = function(state_27632){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26548__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26548__auto____1.call(this,state_27632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26548__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26548__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26548__auto__;
})()
;})(__27788,switch__26547__auto__,c__27234__auto___27791,G__27619_27789,n__25449__auto___27787,jobs,results,process,async))
})();
var state__27236__auto__ = (function (){var statearr_27646 = f__27235__auto__.call(null);
(statearr_27646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27234__auto___27791);

return statearr_27646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27236__auto__);
});})(__27788,c__27234__auto___27791,G__27619_27789,n__25449__auto___27787,jobs,results,process,async))
);


break;
case "async":
var c__27234__auto___27800 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27788,c__27234__auto___27800,G__27619_27789,n__25449__auto___27787,jobs,results,process,async){
return (function (){
var f__27235__auto__ = (function (){var switch__26547__auto__ = ((function (__27788,c__27234__auto___27800,G__27619_27789,n__25449__auto___27787,jobs,results,process,async){
return (function (state_27659){
var state_val_27660 = (state_27659[(1)]);
if((state_val_27660 === (1))){
var state_27659__$1 = state_27659;
var statearr_27661_27801 = state_27659__$1;
(statearr_27661_27801[(2)] = null);

(statearr_27661_27801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27660 === (2))){
var state_27659__$1 = state_27659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27659__$1,(4),jobs);
} else {
if((state_val_27660 === (3))){
var inst_27657 = (state_27659[(2)]);
var state_27659__$1 = state_27659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27659__$1,inst_27657);
} else {
if((state_val_27660 === (4))){
var inst_27649 = (state_27659[(2)]);
var inst_27650 = async.call(null,inst_27649);
var state_27659__$1 = state_27659;
if(cljs.core.truth_(inst_27650)){
var statearr_27662_27802 = state_27659__$1;
(statearr_27662_27802[(1)] = (5));

} else {
var statearr_27663_27803 = state_27659__$1;
(statearr_27663_27803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27660 === (5))){
var state_27659__$1 = state_27659;
var statearr_27664_27804 = state_27659__$1;
(statearr_27664_27804[(2)] = null);

(statearr_27664_27804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27660 === (6))){
var state_27659__$1 = state_27659;
var statearr_27665_27805 = state_27659__$1;
(statearr_27665_27805[(2)] = null);

(statearr_27665_27805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27660 === (7))){
var inst_27655 = (state_27659[(2)]);
var state_27659__$1 = state_27659;
var statearr_27666_27806 = state_27659__$1;
(statearr_27666_27806[(2)] = inst_27655);

(statearr_27666_27806[(1)] = (3));


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
});})(__27788,c__27234__auto___27800,G__27619_27789,n__25449__auto___27787,jobs,results,process,async))
;
return ((function (__27788,switch__26547__auto__,c__27234__auto___27800,G__27619_27789,n__25449__auto___27787,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26548__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26548__auto____0 = (function (){
var statearr_27670 = [null,null,null,null,null,null,null];
(statearr_27670[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26548__auto__);

(statearr_27670[(1)] = (1));

return statearr_27670;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26548__auto____1 = (function (state_27659){
while(true){
var ret_value__26549__auto__ = (function (){try{while(true){
var result__26550__auto__ = switch__26547__auto__.call(null,state_27659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26550__auto__;
}
break;
}
}catch (e27671){if((e27671 instanceof Object)){
var ex__26551__auto__ = e27671;
var statearr_27672_27807 = state_27659;
(statearr_27672_27807[(5)] = ex__26551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27808 = state_27659;
state_27659 = G__27808;
continue;
} else {
return ret_value__26549__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26548__auto__ = function(state_27659){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26548__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26548__auto____1.call(this,state_27659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26548__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26548__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26548__auto__;
})()
;})(__27788,switch__26547__auto__,c__27234__auto___27800,G__27619_27789,n__25449__auto___27787,jobs,results,process,async))
})();
var state__27236__auto__ = (function (){var statearr_27673 = f__27235__auto__.call(null);
(statearr_27673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27234__auto___27800);

return statearr_27673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27236__auto__);
});})(__27788,c__27234__auto___27800,G__27619_27789,n__25449__auto___27787,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27809 = (__27788 + (1));
__27788 = G__27809;
continue;
} else {
}
break;
}

var c__27234__auto___27810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27234__auto___27810,jobs,results,process,async){
return (function (){
var f__27235__auto__ = (function (){var switch__26547__auto__ = ((function (c__27234__auto___27810,jobs,results,process,async){
return (function (state_27695){
var state_val_27696 = (state_27695[(1)]);
if((state_val_27696 === (1))){
var state_27695__$1 = state_27695;
var statearr_27697_27811 = state_27695__$1;
(statearr_27697_27811[(2)] = null);

(statearr_27697_27811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (2))){
var state_27695__$1 = state_27695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27695__$1,(4),from);
} else {
if((state_val_27696 === (3))){
var inst_27693 = (state_27695[(2)]);
var state_27695__$1 = state_27695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27695__$1,inst_27693);
} else {
if((state_val_27696 === (4))){
var inst_27676 = (state_27695[(7)]);
var inst_27676__$1 = (state_27695[(2)]);
var inst_27677 = (inst_27676__$1 == null);
var state_27695__$1 = (function (){var statearr_27698 = state_27695;
(statearr_27698[(7)] = inst_27676__$1);

return statearr_27698;
})();
if(cljs.core.truth_(inst_27677)){
var statearr_27699_27812 = state_27695__$1;
(statearr_27699_27812[(1)] = (5));

} else {
var statearr_27700_27813 = state_27695__$1;
(statearr_27700_27813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (5))){
var inst_27679 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27695__$1 = state_27695;
var statearr_27701_27814 = state_27695__$1;
(statearr_27701_27814[(2)] = inst_27679);

(statearr_27701_27814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (6))){
var inst_27681 = (state_27695[(8)]);
var inst_27676 = (state_27695[(7)]);
var inst_27681__$1 = cljs.core.async.chan.call(null,(1));
var inst_27682 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27683 = [inst_27676,inst_27681__$1];
var inst_27684 = (new cljs.core.PersistentVector(null,2,(5),inst_27682,inst_27683,null));
var state_27695__$1 = (function (){var statearr_27702 = state_27695;
(statearr_27702[(8)] = inst_27681__$1);

return statearr_27702;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27695__$1,(8),jobs,inst_27684);
} else {
if((state_val_27696 === (7))){
var inst_27691 = (state_27695[(2)]);
var state_27695__$1 = state_27695;
var statearr_27703_27815 = state_27695__$1;
(statearr_27703_27815[(2)] = inst_27691);

(statearr_27703_27815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (8))){
var inst_27681 = (state_27695[(8)]);
var inst_27686 = (state_27695[(2)]);
var state_27695__$1 = (function (){var statearr_27704 = state_27695;
(statearr_27704[(9)] = inst_27686);

return statearr_27704;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27695__$1,(9),results,inst_27681);
} else {
if((state_val_27696 === (9))){
var inst_27688 = (state_27695[(2)]);
var state_27695__$1 = (function (){var statearr_27705 = state_27695;
(statearr_27705[(10)] = inst_27688);

return statearr_27705;
})();
var statearr_27706_27816 = state_27695__$1;
(statearr_27706_27816[(2)] = null);

(statearr_27706_27816[(1)] = (2));


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
});})(c__27234__auto___27810,jobs,results,process,async))
;
return ((function (switch__26547__auto__,c__27234__auto___27810,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26548__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26548__auto____0 = (function (){
var statearr_27710 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27710[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26548__auto__);

(statearr_27710[(1)] = (1));

return statearr_27710;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26548__auto____1 = (function (state_27695){
while(true){
var ret_value__26549__auto__ = (function (){try{while(true){
var result__26550__auto__ = switch__26547__auto__.call(null,state_27695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26550__auto__;
}
break;
}
}catch (e27711){if((e27711 instanceof Object)){
var ex__26551__auto__ = e27711;
var statearr_27712_27817 = state_27695;
(statearr_27712_27817[(5)] = ex__26551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27818 = state_27695;
state_27695 = G__27818;
continue;
} else {
return ret_value__26549__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26548__auto__ = function(state_27695){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26548__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26548__auto____1.call(this,state_27695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26548__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26548__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26548__auto__;
})()
;})(switch__26547__auto__,c__27234__auto___27810,jobs,results,process,async))
})();
var state__27236__auto__ = (function (){var statearr_27713 = f__27235__auto__.call(null);
(statearr_27713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27234__auto___27810);

return statearr_27713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27236__auto__);
});})(c__27234__auto___27810,jobs,results,process,async))
);


var c__27234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27234__auto__,jobs,results,process,async){
return (function (){
var f__27235__auto__ = (function (){var switch__26547__auto__ = ((function (c__27234__auto__,jobs,results,process,async){
return (function (state_27751){
var state_val_27752 = (state_27751[(1)]);
if((state_val_27752 === (7))){
var inst_27747 = (state_27751[(2)]);
var state_27751__$1 = state_27751;
var statearr_27753_27819 = state_27751__$1;
(statearr_27753_27819[(2)] = inst_27747);

(statearr_27753_27819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27752 === (20))){
var state_27751__$1 = state_27751;
var statearr_27754_27820 = state_27751__$1;
(statearr_27754_27820[(2)] = null);

(statearr_27754_27820[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27752 === (1))){
var state_27751__$1 = state_27751;
var statearr_27755_27821 = state_27751__$1;
(statearr_27755_27821[(2)] = null);

(statearr_27755_27821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27752 === (4))){
var inst_27716 = (state_27751[(7)]);
var inst_27716__$1 = (state_27751[(2)]);
var inst_27717 = (inst_27716__$1 == null);
var state_27751__$1 = (function (){var statearr_27756 = state_27751;
(statearr_27756[(7)] = inst_27716__$1);

return statearr_27756;
})();
if(cljs.core.truth_(inst_27717)){
var statearr_27757_27822 = state_27751__$1;
(statearr_27757_27822[(1)] = (5));

} else {
var statearr_27758_27823 = state_27751__$1;
(statearr_27758_27823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27752 === (15))){
var inst_27729 = (state_27751[(8)]);
var state_27751__$1 = state_27751;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27751__$1,(18),to,inst_27729);
} else {
if((state_val_27752 === (21))){
var inst_27742 = (state_27751[(2)]);
var state_27751__$1 = state_27751;
var statearr_27759_27824 = state_27751__$1;
(statearr_27759_27824[(2)] = inst_27742);

(statearr_27759_27824[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27752 === (13))){
var inst_27744 = (state_27751[(2)]);
var state_27751__$1 = (function (){var statearr_27760 = state_27751;
(statearr_27760[(9)] = inst_27744);

return statearr_27760;
})();
var statearr_27761_27825 = state_27751__$1;
(statearr_27761_27825[(2)] = null);

(statearr_27761_27825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27752 === (6))){
var inst_27716 = (state_27751[(7)]);
var state_27751__$1 = state_27751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27751__$1,(11),inst_27716);
} else {
if((state_val_27752 === (17))){
var inst_27737 = (state_27751[(2)]);
var state_27751__$1 = state_27751;
if(cljs.core.truth_(inst_27737)){
var statearr_27762_27826 = state_27751__$1;
(statearr_27762_27826[(1)] = (19));

} else {
var statearr_27763_27827 = state_27751__$1;
(statearr_27763_27827[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27752 === (3))){
var inst_27749 = (state_27751[(2)]);
var state_27751__$1 = state_27751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27751__$1,inst_27749);
} else {
if((state_val_27752 === (12))){
var inst_27726 = (state_27751[(10)]);
var state_27751__$1 = state_27751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27751__$1,(14),inst_27726);
} else {
if((state_val_27752 === (2))){
var state_27751__$1 = state_27751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27751__$1,(4),results);
} else {
if((state_val_27752 === (19))){
var state_27751__$1 = state_27751;
var statearr_27764_27828 = state_27751__$1;
(statearr_27764_27828[(2)] = null);

(statearr_27764_27828[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27752 === (11))){
var inst_27726 = (state_27751[(2)]);
var state_27751__$1 = (function (){var statearr_27765 = state_27751;
(statearr_27765[(10)] = inst_27726);

return statearr_27765;
})();
var statearr_27766_27829 = state_27751__$1;
(statearr_27766_27829[(2)] = null);

(statearr_27766_27829[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27752 === (9))){
var state_27751__$1 = state_27751;
var statearr_27767_27830 = state_27751__$1;
(statearr_27767_27830[(2)] = null);

(statearr_27767_27830[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27752 === (5))){
var state_27751__$1 = state_27751;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27768_27831 = state_27751__$1;
(statearr_27768_27831[(1)] = (8));

} else {
var statearr_27769_27832 = state_27751__$1;
(statearr_27769_27832[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27752 === (14))){
var inst_27731 = (state_27751[(11)]);
var inst_27729 = (state_27751[(8)]);
var inst_27729__$1 = (state_27751[(2)]);
var inst_27730 = (inst_27729__$1 == null);
var inst_27731__$1 = cljs.core.not.call(null,inst_27730);
var state_27751__$1 = (function (){var statearr_27770 = state_27751;
(statearr_27770[(11)] = inst_27731__$1);

(statearr_27770[(8)] = inst_27729__$1);

return statearr_27770;
})();
if(inst_27731__$1){
var statearr_27771_27833 = state_27751__$1;
(statearr_27771_27833[(1)] = (15));

} else {
var statearr_27772_27834 = state_27751__$1;
(statearr_27772_27834[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27752 === (16))){
var inst_27731 = (state_27751[(11)]);
var state_27751__$1 = state_27751;
var statearr_27773_27835 = state_27751__$1;
(statearr_27773_27835[(2)] = inst_27731);

(statearr_27773_27835[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27752 === (10))){
var inst_27723 = (state_27751[(2)]);
var state_27751__$1 = state_27751;
var statearr_27774_27836 = state_27751__$1;
(statearr_27774_27836[(2)] = inst_27723);

(statearr_27774_27836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27752 === (18))){
var inst_27734 = (state_27751[(2)]);
var state_27751__$1 = state_27751;
var statearr_27775_27837 = state_27751__$1;
(statearr_27775_27837[(2)] = inst_27734);

(statearr_27775_27837[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27752 === (8))){
var inst_27720 = cljs.core.async.close_BANG_.call(null,to);
var state_27751__$1 = state_27751;
var statearr_27776_27838 = state_27751__$1;
(statearr_27776_27838[(2)] = inst_27720);

(statearr_27776_27838[(1)] = (10));


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
});})(c__27234__auto__,jobs,results,process,async))
;
return ((function (switch__26547__auto__,c__27234__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26548__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26548__auto____0 = (function (){
var statearr_27780 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27780[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26548__auto__);

(statearr_27780[(1)] = (1));

return statearr_27780;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26548__auto____1 = (function (state_27751){
while(true){
var ret_value__26549__auto__ = (function (){try{while(true){
var result__26550__auto__ = switch__26547__auto__.call(null,state_27751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26550__auto__;
}
break;
}
}catch (e27781){if((e27781 instanceof Object)){
var ex__26551__auto__ = e27781;
var statearr_27782_27839 = state_27751;
(statearr_27782_27839[(5)] = ex__26551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27840 = state_27751;
state_27751 = G__27840;
continue;
} else {
return ret_value__26549__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26548__auto__ = function(state_27751){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26548__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26548__auto____1.call(this,state_27751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26548__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26548__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26548__auto__;
})()
;})(switch__26547__auto__,c__27234__auto__,jobs,results,process,async))
})();
var state__27236__auto__ = (function (){var statearr_27783 = f__27235__auto__.call(null);
(statearr_27783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27234__auto__);

return statearr_27783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27236__auto__);
});})(c__27234__auto__,jobs,results,process,async))
);

return c__27234__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args27841 = [];
var len__25604__auto___27844 = arguments.length;
var i__25605__auto___27845 = (0);
while(true){
if((i__25605__auto___27845 < len__25604__auto___27844)){
args27841.push((arguments[i__25605__auto___27845]));

var G__27846 = (i__25605__auto___27845 + (1));
i__25605__auto___27845 = G__27846;
continue;
} else {
}
break;
}

var G__27843 = args27841.length;
switch (G__27843) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27841.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args27848 = [];
var len__25604__auto___27851 = arguments.length;
var i__25605__auto___27852 = (0);
while(true){
if((i__25605__auto___27852 < len__25604__auto___27851)){
args27848.push((arguments[i__25605__auto___27852]));

var G__27853 = (i__25605__auto___27852 + (1));
i__25605__auto___27852 = G__27853;
continue;
} else {
}
break;
}

var G__27850 = args27848.length;
switch (G__27850) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27848.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args27855 = [];
var len__25604__auto___27908 = arguments.length;
var i__25605__auto___27909 = (0);
while(true){
if((i__25605__auto___27909 < len__25604__auto___27908)){
args27855.push((arguments[i__25605__auto___27909]));

var G__27910 = (i__25605__auto___27909 + (1));
i__25605__auto___27909 = G__27910;
continue;
} else {
}
break;
}

var G__27857 = args27855.length;
switch (G__27857) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27855.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27234__auto___27912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27234__auto___27912,tc,fc){
return (function (){
var f__27235__auto__ = (function (){var switch__26547__auto__ = ((function (c__27234__auto___27912,tc,fc){
return (function (state_27883){
var state_val_27884 = (state_27883[(1)]);
if((state_val_27884 === (7))){
var inst_27879 = (state_27883[(2)]);
var state_27883__$1 = state_27883;
var statearr_27885_27913 = state_27883__$1;
(statearr_27885_27913[(2)] = inst_27879);

(statearr_27885_27913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (1))){
var state_27883__$1 = state_27883;
var statearr_27886_27914 = state_27883__$1;
(statearr_27886_27914[(2)] = null);

(statearr_27886_27914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (4))){
var inst_27860 = (state_27883[(7)]);
var inst_27860__$1 = (state_27883[(2)]);
var inst_27861 = (inst_27860__$1 == null);
var state_27883__$1 = (function (){var statearr_27887 = state_27883;
(statearr_27887[(7)] = inst_27860__$1);

return statearr_27887;
})();
if(cljs.core.truth_(inst_27861)){
var statearr_27888_27915 = state_27883__$1;
(statearr_27888_27915[(1)] = (5));

} else {
var statearr_27889_27916 = state_27883__$1;
(statearr_27889_27916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (13))){
var state_27883__$1 = state_27883;
var statearr_27890_27917 = state_27883__$1;
(statearr_27890_27917[(2)] = null);

(statearr_27890_27917[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (6))){
var inst_27860 = (state_27883[(7)]);
var inst_27866 = p.call(null,inst_27860);
var state_27883__$1 = state_27883;
if(cljs.core.truth_(inst_27866)){
var statearr_27891_27918 = state_27883__$1;
(statearr_27891_27918[(1)] = (9));

} else {
var statearr_27892_27919 = state_27883__$1;
(statearr_27892_27919[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (3))){
var inst_27881 = (state_27883[(2)]);
var state_27883__$1 = state_27883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27883__$1,inst_27881);
} else {
if((state_val_27884 === (12))){
var state_27883__$1 = state_27883;
var statearr_27893_27920 = state_27883__$1;
(statearr_27893_27920[(2)] = null);

(statearr_27893_27920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (2))){
var state_27883__$1 = state_27883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27883__$1,(4),ch);
} else {
if((state_val_27884 === (11))){
var inst_27860 = (state_27883[(7)]);
var inst_27870 = (state_27883[(2)]);
var state_27883__$1 = state_27883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27883__$1,(8),inst_27870,inst_27860);
} else {
if((state_val_27884 === (9))){
var state_27883__$1 = state_27883;
var statearr_27894_27921 = state_27883__$1;
(statearr_27894_27921[(2)] = tc);

(statearr_27894_27921[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (5))){
var inst_27863 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27864 = cljs.core.async.close_BANG_.call(null,fc);
var state_27883__$1 = (function (){var statearr_27895 = state_27883;
(statearr_27895[(8)] = inst_27863);

return statearr_27895;
})();
var statearr_27896_27922 = state_27883__$1;
(statearr_27896_27922[(2)] = inst_27864);

(statearr_27896_27922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (14))){
var inst_27877 = (state_27883[(2)]);
var state_27883__$1 = state_27883;
var statearr_27897_27923 = state_27883__$1;
(statearr_27897_27923[(2)] = inst_27877);

(statearr_27897_27923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (10))){
var state_27883__$1 = state_27883;
var statearr_27898_27924 = state_27883__$1;
(statearr_27898_27924[(2)] = fc);

(statearr_27898_27924[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27884 === (8))){
var inst_27872 = (state_27883[(2)]);
var state_27883__$1 = state_27883;
if(cljs.core.truth_(inst_27872)){
var statearr_27899_27925 = state_27883__$1;
(statearr_27899_27925[(1)] = (12));

} else {
var statearr_27900_27926 = state_27883__$1;
(statearr_27900_27926[(1)] = (13));

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
});})(c__27234__auto___27912,tc,fc))
;
return ((function (switch__26547__auto__,c__27234__auto___27912,tc,fc){
return (function() {
var cljs$core$async$state_machine__26548__auto__ = null;
var cljs$core$async$state_machine__26548__auto____0 = (function (){
var statearr_27904 = [null,null,null,null,null,null,null,null,null];
(statearr_27904[(0)] = cljs$core$async$state_machine__26548__auto__);

(statearr_27904[(1)] = (1));

return statearr_27904;
});
var cljs$core$async$state_machine__26548__auto____1 = (function (state_27883){
while(true){
var ret_value__26549__auto__ = (function (){try{while(true){
var result__26550__auto__ = switch__26547__auto__.call(null,state_27883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26550__auto__;
}
break;
}
}catch (e27905){if((e27905 instanceof Object)){
var ex__26551__auto__ = e27905;
var statearr_27906_27927 = state_27883;
(statearr_27906_27927[(5)] = ex__26551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27928 = state_27883;
state_27883 = G__27928;
continue;
} else {
return ret_value__26549__auto__;
}
break;
}
});
cljs$core$async$state_machine__26548__auto__ = function(state_27883){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26548__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26548__auto____1.call(this,state_27883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26548__auto____0;
cljs$core$async$state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26548__auto____1;
return cljs$core$async$state_machine__26548__auto__;
})()
;})(switch__26547__auto__,c__27234__auto___27912,tc,fc))
})();
var state__27236__auto__ = (function (){var statearr_27907 = f__27235__auto__.call(null);
(statearr_27907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27234__auto___27912);

return statearr_27907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27236__auto__);
});})(c__27234__auto___27912,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27234__auto__){
return (function (){
var f__27235__auto__ = (function (){var switch__26547__auto__ = ((function (c__27234__auto__){
return (function (state_27992){
var state_val_27993 = (state_27992[(1)]);
if((state_val_27993 === (7))){
var inst_27988 = (state_27992[(2)]);
var state_27992__$1 = state_27992;
var statearr_27994_28015 = state_27992__$1;
(statearr_27994_28015[(2)] = inst_27988);

(statearr_27994_28015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (1))){
var inst_27972 = init;
var state_27992__$1 = (function (){var statearr_27995 = state_27992;
(statearr_27995[(7)] = inst_27972);

return statearr_27995;
})();
var statearr_27996_28016 = state_27992__$1;
(statearr_27996_28016[(2)] = null);

(statearr_27996_28016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (4))){
var inst_27975 = (state_27992[(8)]);
var inst_27975__$1 = (state_27992[(2)]);
var inst_27976 = (inst_27975__$1 == null);
var state_27992__$1 = (function (){var statearr_27997 = state_27992;
(statearr_27997[(8)] = inst_27975__$1);

return statearr_27997;
})();
if(cljs.core.truth_(inst_27976)){
var statearr_27998_28017 = state_27992__$1;
(statearr_27998_28017[(1)] = (5));

} else {
var statearr_27999_28018 = state_27992__$1;
(statearr_27999_28018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (6))){
var inst_27972 = (state_27992[(7)]);
var inst_27979 = (state_27992[(9)]);
var inst_27975 = (state_27992[(8)]);
var inst_27979__$1 = f.call(null,inst_27972,inst_27975);
var inst_27980 = cljs.core.reduced_QMARK_.call(null,inst_27979__$1);
var state_27992__$1 = (function (){var statearr_28000 = state_27992;
(statearr_28000[(9)] = inst_27979__$1);

return statearr_28000;
})();
if(inst_27980){
var statearr_28001_28019 = state_27992__$1;
(statearr_28001_28019[(1)] = (8));

} else {
var statearr_28002_28020 = state_27992__$1;
(statearr_28002_28020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (3))){
var inst_27990 = (state_27992[(2)]);
var state_27992__$1 = state_27992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27992__$1,inst_27990);
} else {
if((state_val_27993 === (2))){
var state_27992__$1 = state_27992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27992__$1,(4),ch);
} else {
if((state_val_27993 === (9))){
var inst_27979 = (state_27992[(9)]);
var inst_27972 = inst_27979;
var state_27992__$1 = (function (){var statearr_28003 = state_27992;
(statearr_28003[(7)] = inst_27972);

return statearr_28003;
})();
var statearr_28004_28021 = state_27992__$1;
(statearr_28004_28021[(2)] = null);

(statearr_28004_28021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (5))){
var inst_27972 = (state_27992[(7)]);
var state_27992__$1 = state_27992;
var statearr_28005_28022 = state_27992__$1;
(statearr_28005_28022[(2)] = inst_27972);

(statearr_28005_28022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (10))){
var inst_27986 = (state_27992[(2)]);
var state_27992__$1 = state_27992;
var statearr_28006_28023 = state_27992__$1;
(statearr_28006_28023[(2)] = inst_27986);

(statearr_28006_28023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27993 === (8))){
var inst_27979 = (state_27992[(9)]);
var inst_27982 = cljs.core.deref.call(null,inst_27979);
var state_27992__$1 = state_27992;
var statearr_28007_28024 = state_27992__$1;
(statearr_28007_28024[(2)] = inst_27982);

(statearr_28007_28024[(1)] = (10));


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
});})(c__27234__auto__))
;
return ((function (switch__26547__auto__,c__27234__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26548__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26548__auto____0 = (function (){
var statearr_28011 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28011[(0)] = cljs$core$async$reduce_$_state_machine__26548__auto__);

(statearr_28011[(1)] = (1));

return statearr_28011;
});
var cljs$core$async$reduce_$_state_machine__26548__auto____1 = (function (state_27992){
while(true){
var ret_value__26549__auto__ = (function (){try{while(true){
var result__26550__auto__ = switch__26547__auto__.call(null,state_27992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26550__auto__;
}
break;
}
}catch (e28012){if((e28012 instanceof Object)){
var ex__26551__auto__ = e28012;
var statearr_28013_28025 = state_27992;
(statearr_28013_28025[(5)] = ex__26551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28026 = state_27992;
state_27992 = G__28026;
continue;
} else {
return ret_value__26549__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26548__auto__ = function(state_27992){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26548__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26548__auto____1.call(this,state_27992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26548__auto____0;
cljs$core$async$reduce_$_state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26548__auto____1;
return cljs$core$async$reduce_$_state_machine__26548__auto__;
})()
;})(switch__26547__auto__,c__27234__auto__))
})();
var state__27236__auto__ = (function (){var statearr_28014 = f__27235__auto__.call(null);
(statearr_28014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27234__auto__);

return statearr_28014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27236__auto__);
});})(c__27234__auto__))
);

return c__27234__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args28027 = [];
var len__25604__auto___28079 = arguments.length;
var i__25605__auto___28080 = (0);
while(true){
if((i__25605__auto___28080 < len__25604__auto___28079)){
args28027.push((arguments[i__25605__auto___28080]));

var G__28081 = (i__25605__auto___28080 + (1));
i__25605__auto___28080 = G__28081;
continue;
} else {
}
break;
}

var G__28029 = args28027.length;
switch (G__28029) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28027.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27234__auto__){
return (function (){
var f__27235__auto__ = (function (){var switch__26547__auto__ = ((function (c__27234__auto__){
return (function (state_28054){
var state_val_28055 = (state_28054[(1)]);
if((state_val_28055 === (7))){
var inst_28036 = (state_28054[(2)]);
var state_28054__$1 = state_28054;
var statearr_28056_28083 = state_28054__$1;
(statearr_28056_28083[(2)] = inst_28036);

(statearr_28056_28083[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (1))){
var inst_28030 = cljs.core.seq.call(null,coll);
var inst_28031 = inst_28030;
var state_28054__$1 = (function (){var statearr_28057 = state_28054;
(statearr_28057[(7)] = inst_28031);

return statearr_28057;
})();
var statearr_28058_28084 = state_28054__$1;
(statearr_28058_28084[(2)] = null);

(statearr_28058_28084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (4))){
var inst_28031 = (state_28054[(7)]);
var inst_28034 = cljs.core.first.call(null,inst_28031);
var state_28054__$1 = state_28054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28054__$1,(7),ch,inst_28034);
} else {
if((state_val_28055 === (13))){
var inst_28048 = (state_28054[(2)]);
var state_28054__$1 = state_28054;
var statearr_28059_28085 = state_28054__$1;
(statearr_28059_28085[(2)] = inst_28048);

(statearr_28059_28085[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (6))){
var inst_28039 = (state_28054[(2)]);
var state_28054__$1 = state_28054;
if(cljs.core.truth_(inst_28039)){
var statearr_28060_28086 = state_28054__$1;
(statearr_28060_28086[(1)] = (8));

} else {
var statearr_28061_28087 = state_28054__$1;
(statearr_28061_28087[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (3))){
var inst_28052 = (state_28054[(2)]);
var state_28054__$1 = state_28054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28054__$1,inst_28052);
} else {
if((state_val_28055 === (12))){
var state_28054__$1 = state_28054;
var statearr_28062_28088 = state_28054__$1;
(statearr_28062_28088[(2)] = null);

(statearr_28062_28088[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (2))){
var inst_28031 = (state_28054[(7)]);
var state_28054__$1 = state_28054;
if(cljs.core.truth_(inst_28031)){
var statearr_28063_28089 = state_28054__$1;
(statearr_28063_28089[(1)] = (4));

} else {
var statearr_28064_28090 = state_28054__$1;
(statearr_28064_28090[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (11))){
var inst_28045 = cljs.core.async.close_BANG_.call(null,ch);
var state_28054__$1 = state_28054;
var statearr_28065_28091 = state_28054__$1;
(statearr_28065_28091[(2)] = inst_28045);

(statearr_28065_28091[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (9))){
var state_28054__$1 = state_28054;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28066_28092 = state_28054__$1;
(statearr_28066_28092[(1)] = (11));

} else {
var statearr_28067_28093 = state_28054__$1;
(statearr_28067_28093[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (5))){
var inst_28031 = (state_28054[(7)]);
var state_28054__$1 = state_28054;
var statearr_28068_28094 = state_28054__$1;
(statearr_28068_28094[(2)] = inst_28031);

(statearr_28068_28094[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (10))){
var inst_28050 = (state_28054[(2)]);
var state_28054__$1 = state_28054;
var statearr_28069_28095 = state_28054__$1;
(statearr_28069_28095[(2)] = inst_28050);

(statearr_28069_28095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (8))){
var inst_28031 = (state_28054[(7)]);
var inst_28041 = cljs.core.next.call(null,inst_28031);
var inst_28031__$1 = inst_28041;
var state_28054__$1 = (function (){var statearr_28070 = state_28054;
(statearr_28070[(7)] = inst_28031__$1);

return statearr_28070;
})();
var statearr_28071_28096 = state_28054__$1;
(statearr_28071_28096[(2)] = null);

(statearr_28071_28096[(1)] = (2));


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
});})(c__27234__auto__))
;
return ((function (switch__26547__auto__,c__27234__auto__){
return (function() {
var cljs$core$async$state_machine__26548__auto__ = null;
var cljs$core$async$state_machine__26548__auto____0 = (function (){
var statearr_28075 = [null,null,null,null,null,null,null,null];
(statearr_28075[(0)] = cljs$core$async$state_machine__26548__auto__);

(statearr_28075[(1)] = (1));

return statearr_28075;
});
var cljs$core$async$state_machine__26548__auto____1 = (function (state_28054){
while(true){
var ret_value__26549__auto__ = (function (){try{while(true){
var result__26550__auto__ = switch__26547__auto__.call(null,state_28054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26550__auto__;
}
break;
}
}catch (e28076){if((e28076 instanceof Object)){
var ex__26551__auto__ = e28076;
var statearr_28077_28097 = state_28054;
(statearr_28077_28097[(5)] = ex__26551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28098 = state_28054;
state_28054 = G__28098;
continue;
} else {
return ret_value__26549__auto__;
}
break;
}
});
cljs$core$async$state_machine__26548__auto__ = function(state_28054){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26548__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26548__auto____1.call(this,state_28054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26548__auto____0;
cljs$core$async$state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26548__auto____1;
return cljs$core$async$state_machine__26548__auto__;
})()
;})(switch__26547__auto__,c__27234__auto__))
})();
var state__27236__auto__ = (function (){var statearr_28078 = f__27235__auto__.call(null);
(statearr_28078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27234__auto__);

return statearr_28078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27236__auto__);
});})(c__27234__auto__))
);

return c__27234__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25197__auto__ = (((_ == null))?null:_);
var m__25198__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,_);
} else {
var m__25198__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25197__auto__ = (((m == null))?null:m);
var m__25198__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25198__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25197__auto__ = (((m == null))?null:m);
var m__25198__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,m,ch);
} else {
var m__25198__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25197__auto__ = (((m == null))?null:m);
var m__25198__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,m);
} else {
var m__25198__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28320 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28320 = (function (mult,ch,cs,meta28321){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28321 = meta28321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28322,meta28321__$1){
var self__ = this;
var _28322__$1 = this;
return (new cljs.core.async.t_cljs$core$async28320(self__.mult,self__.ch,self__.cs,meta28321__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28320.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28322){
var self__ = this;
var _28322__$1 = this;
return self__.meta28321;
});})(cs))
;

cljs.core.async.t_cljs$core$async28320.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28320.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28320.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28320.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28320.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28320.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28320.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28321","meta28321",-1733743091,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28320.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28320.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28320";

cljs.core.async.t_cljs$core$async28320.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25140__auto__,writer__25141__auto__,opt__25142__auto__){
return cljs.core._write.call(null,writer__25141__auto__,"cljs.core.async/t_cljs$core$async28320");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28320 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28320(mult__$1,ch__$1,cs__$1,meta28321){
return (new cljs.core.async.t_cljs$core$async28320(mult__$1,ch__$1,cs__$1,meta28321));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28320(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27234__auto___28541 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27234__auto___28541,cs,m,dchan,dctr,done){
return (function (){
var f__27235__auto__ = (function (){var switch__26547__auto__ = ((function (c__27234__auto___28541,cs,m,dchan,dctr,done){
return (function (state_28453){
var state_val_28454 = (state_28453[(1)]);
if((state_val_28454 === (7))){
var inst_28449 = (state_28453[(2)]);
var state_28453__$1 = state_28453;
var statearr_28455_28542 = state_28453__$1;
(statearr_28455_28542[(2)] = inst_28449);

(statearr_28455_28542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (20))){
var inst_28354 = (state_28453[(7)]);
var inst_28364 = cljs.core.first.call(null,inst_28354);
var inst_28365 = cljs.core.nth.call(null,inst_28364,(0),null);
var inst_28366 = cljs.core.nth.call(null,inst_28364,(1),null);
var state_28453__$1 = (function (){var statearr_28456 = state_28453;
(statearr_28456[(8)] = inst_28365);

return statearr_28456;
})();
if(cljs.core.truth_(inst_28366)){
var statearr_28457_28543 = state_28453__$1;
(statearr_28457_28543[(1)] = (22));

} else {
var statearr_28458_28544 = state_28453__$1;
(statearr_28458_28544[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (27))){
var inst_28396 = (state_28453[(9)]);
var inst_28401 = (state_28453[(10)]);
var inst_28394 = (state_28453[(11)]);
var inst_28325 = (state_28453[(12)]);
var inst_28401__$1 = cljs.core._nth.call(null,inst_28394,inst_28396);
var inst_28402 = cljs.core.async.put_BANG_.call(null,inst_28401__$1,inst_28325,done);
var state_28453__$1 = (function (){var statearr_28459 = state_28453;
(statearr_28459[(10)] = inst_28401__$1);

return statearr_28459;
})();
if(cljs.core.truth_(inst_28402)){
var statearr_28460_28545 = state_28453__$1;
(statearr_28460_28545[(1)] = (30));

} else {
var statearr_28461_28546 = state_28453__$1;
(statearr_28461_28546[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (1))){
var state_28453__$1 = state_28453;
var statearr_28462_28547 = state_28453__$1;
(statearr_28462_28547[(2)] = null);

(statearr_28462_28547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (24))){
var inst_28354 = (state_28453[(7)]);
var inst_28371 = (state_28453[(2)]);
var inst_28372 = cljs.core.next.call(null,inst_28354);
var inst_28334 = inst_28372;
var inst_28335 = null;
var inst_28336 = (0);
var inst_28337 = (0);
var state_28453__$1 = (function (){var statearr_28463 = state_28453;
(statearr_28463[(13)] = inst_28335);

(statearr_28463[(14)] = inst_28336);

(statearr_28463[(15)] = inst_28371);

(statearr_28463[(16)] = inst_28337);

(statearr_28463[(17)] = inst_28334);

return statearr_28463;
})();
var statearr_28464_28548 = state_28453__$1;
(statearr_28464_28548[(2)] = null);

(statearr_28464_28548[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (39))){
var state_28453__$1 = state_28453;
var statearr_28468_28549 = state_28453__$1;
(statearr_28468_28549[(2)] = null);

(statearr_28468_28549[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (4))){
var inst_28325 = (state_28453[(12)]);
var inst_28325__$1 = (state_28453[(2)]);
var inst_28326 = (inst_28325__$1 == null);
var state_28453__$1 = (function (){var statearr_28469 = state_28453;
(statearr_28469[(12)] = inst_28325__$1);

return statearr_28469;
})();
if(cljs.core.truth_(inst_28326)){
var statearr_28470_28550 = state_28453__$1;
(statearr_28470_28550[(1)] = (5));

} else {
var statearr_28471_28551 = state_28453__$1;
(statearr_28471_28551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (15))){
var inst_28335 = (state_28453[(13)]);
var inst_28336 = (state_28453[(14)]);
var inst_28337 = (state_28453[(16)]);
var inst_28334 = (state_28453[(17)]);
var inst_28350 = (state_28453[(2)]);
var inst_28351 = (inst_28337 + (1));
var tmp28465 = inst_28335;
var tmp28466 = inst_28336;
var tmp28467 = inst_28334;
var inst_28334__$1 = tmp28467;
var inst_28335__$1 = tmp28465;
var inst_28336__$1 = tmp28466;
var inst_28337__$1 = inst_28351;
var state_28453__$1 = (function (){var statearr_28472 = state_28453;
(statearr_28472[(18)] = inst_28350);

(statearr_28472[(13)] = inst_28335__$1);

(statearr_28472[(14)] = inst_28336__$1);

(statearr_28472[(16)] = inst_28337__$1);

(statearr_28472[(17)] = inst_28334__$1);

return statearr_28472;
})();
var statearr_28473_28552 = state_28453__$1;
(statearr_28473_28552[(2)] = null);

(statearr_28473_28552[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (21))){
var inst_28375 = (state_28453[(2)]);
var state_28453__$1 = state_28453;
var statearr_28477_28553 = state_28453__$1;
(statearr_28477_28553[(2)] = inst_28375);

(statearr_28477_28553[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (31))){
var inst_28401 = (state_28453[(10)]);
var inst_28405 = done.call(null,null);
var inst_28406 = cljs.core.async.untap_STAR_.call(null,m,inst_28401);
var state_28453__$1 = (function (){var statearr_28478 = state_28453;
(statearr_28478[(19)] = inst_28405);

return statearr_28478;
})();
var statearr_28479_28554 = state_28453__$1;
(statearr_28479_28554[(2)] = inst_28406);

(statearr_28479_28554[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (32))){
var inst_28396 = (state_28453[(9)]);
var inst_28394 = (state_28453[(11)]);
var inst_28395 = (state_28453[(20)]);
var inst_28393 = (state_28453[(21)]);
var inst_28408 = (state_28453[(2)]);
var inst_28409 = (inst_28396 + (1));
var tmp28474 = inst_28394;
var tmp28475 = inst_28395;
var tmp28476 = inst_28393;
var inst_28393__$1 = tmp28476;
var inst_28394__$1 = tmp28474;
var inst_28395__$1 = tmp28475;
var inst_28396__$1 = inst_28409;
var state_28453__$1 = (function (){var statearr_28480 = state_28453;
(statearr_28480[(9)] = inst_28396__$1);

(statearr_28480[(22)] = inst_28408);

(statearr_28480[(11)] = inst_28394__$1);

(statearr_28480[(20)] = inst_28395__$1);

(statearr_28480[(21)] = inst_28393__$1);

return statearr_28480;
})();
var statearr_28481_28555 = state_28453__$1;
(statearr_28481_28555[(2)] = null);

(statearr_28481_28555[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (40))){
var inst_28421 = (state_28453[(23)]);
var inst_28425 = done.call(null,null);
var inst_28426 = cljs.core.async.untap_STAR_.call(null,m,inst_28421);
var state_28453__$1 = (function (){var statearr_28482 = state_28453;
(statearr_28482[(24)] = inst_28425);

return statearr_28482;
})();
var statearr_28483_28556 = state_28453__$1;
(statearr_28483_28556[(2)] = inst_28426);

(statearr_28483_28556[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (33))){
var inst_28412 = (state_28453[(25)]);
var inst_28414 = cljs.core.chunked_seq_QMARK_.call(null,inst_28412);
var state_28453__$1 = state_28453;
if(inst_28414){
var statearr_28484_28557 = state_28453__$1;
(statearr_28484_28557[(1)] = (36));

} else {
var statearr_28485_28558 = state_28453__$1;
(statearr_28485_28558[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (13))){
var inst_28344 = (state_28453[(26)]);
var inst_28347 = cljs.core.async.close_BANG_.call(null,inst_28344);
var state_28453__$1 = state_28453;
var statearr_28486_28559 = state_28453__$1;
(statearr_28486_28559[(2)] = inst_28347);

(statearr_28486_28559[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (22))){
var inst_28365 = (state_28453[(8)]);
var inst_28368 = cljs.core.async.close_BANG_.call(null,inst_28365);
var state_28453__$1 = state_28453;
var statearr_28487_28560 = state_28453__$1;
(statearr_28487_28560[(2)] = inst_28368);

(statearr_28487_28560[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (36))){
var inst_28412 = (state_28453[(25)]);
var inst_28416 = cljs.core.chunk_first.call(null,inst_28412);
var inst_28417 = cljs.core.chunk_rest.call(null,inst_28412);
var inst_28418 = cljs.core.count.call(null,inst_28416);
var inst_28393 = inst_28417;
var inst_28394 = inst_28416;
var inst_28395 = inst_28418;
var inst_28396 = (0);
var state_28453__$1 = (function (){var statearr_28488 = state_28453;
(statearr_28488[(9)] = inst_28396);

(statearr_28488[(11)] = inst_28394);

(statearr_28488[(20)] = inst_28395);

(statearr_28488[(21)] = inst_28393);

return statearr_28488;
})();
var statearr_28489_28561 = state_28453__$1;
(statearr_28489_28561[(2)] = null);

(statearr_28489_28561[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (41))){
var inst_28412 = (state_28453[(25)]);
var inst_28428 = (state_28453[(2)]);
var inst_28429 = cljs.core.next.call(null,inst_28412);
var inst_28393 = inst_28429;
var inst_28394 = null;
var inst_28395 = (0);
var inst_28396 = (0);
var state_28453__$1 = (function (){var statearr_28490 = state_28453;
(statearr_28490[(27)] = inst_28428);

(statearr_28490[(9)] = inst_28396);

(statearr_28490[(11)] = inst_28394);

(statearr_28490[(20)] = inst_28395);

(statearr_28490[(21)] = inst_28393);

return statearr_28490;
})();
var statearr_28491_28562 = state_28453__$1;
(statearr_28491_28562[(2)] = null);

(statearr_28491_28562[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (43))){
var state_28453__$1 = state_28453;
var statearr_28492_28563 = state_28453__$1;
(statearr_28492_28563[(2)] = null);

(statearr_28492_28563[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (29))){
var inst_28437 = (state_28453[(2)]);
var state_28453__$1 = state_28453;
var statearr_28493_28564 = state_28453__$1;
(statearr_28493_28564[(2)] = inst_28437);

(statearr_28493_28564[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (44))){
var inst_28446 = (state_28453[(2)]);
var state_28453__$1 = (function (){var statearr_28494 = state_28453;
(statearr_28494[(28)] = inst_28446);

return statearr_28494;
})();
var statearr_28495_28565 = state_28453__$1;
(statearr_28495_28565[(2)] = null);

(statearr_28495_28565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (6))){
var inst_28385 = (state_28453[(29)]);
var inst_28384 = cljs.core.deref.call(null,cs);
var inst_28385__$1 = cljs.core.keys.call(null,inst_28384);
var inst_28386 = cljs.core.count.call(null,inst_28385__$1);
var inst_28387 = cljs.core.reset_BANG_.call(null,dctr,inst_28386);
var inst_28392 = cljs.core.seq.call(null,inst_28385__$1);
var inst_28393 = inst_28392;
var inst_28394 = null;
var inst_28395 = (0);
var inst_28396 = (0);
var state_28453__$1 = (function (){var statearr_28496 = state_28453;
(statearr_28496[(29)] = inst_28385__$1);

(statearr_28496[(9)] = inst_28396);

(statearr_28496[(30)] = inst_28387);

(statearr_28496[(11)] = inst_28394);

(statearr_28496[(20)] = inst_28395);

(statearr_28496[(21)] = inst_28393);

return statearr_28496;
})();
var statearr_28497_28566 = state_28453__$1;
(statearr_28497_28566[(2)] = null);

(statearr_28497_28566[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (28))){
var inst_28412 = (state_28453[(25)]);
var inst_28393 = (state_28453[(21)]);
var inst_28412__$1 = cljs.core.seq.call(null,inst_28393);
var state_28453__$1 = (function (){var statearr_28498 = state_28453;
(statearr_28498[(25)] = inst_28412__$1);

return statearr_28498;
})();
if(inst_28412__$1){
var statearr_28499_28567 = state_28453__$1;
(statearr_28499_28567[(1)] = (33));

} else {
var statearr_28500_28568 = state_28453__$1;
(statearr_28500_28568[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (25))){
var inst_28396 = (state_28453[(9)]);
var inst_28395 = (state_28453[(20)]);
var inst_28398 = (inst_28396 < inst_28395);
var inst_28399 = inst_28398;
var state_28453__$1 = state_28453;
if(cljs.core.truth_(inst_28399)){
var statearr_28501_28569 = state_28453__$1;
(statearr_28501_28569[(1)] = (27));

} else {
var statearr_28502_28570 = state_28453__$1;
(statearr_28502_28570[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (34))){
var state_28453__$1 = state_28453;
var statearr_28503_28571 = state_28453__$1;
(statearr_28503_28571[(2)] = null);

(statearr_28503_28571[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (17))){
var state_28453__$1 = state_28453;
var statearr_28504_28572 = state_28453__$1;
(statearr_28504_28572[(2)] = null);

(statearr_28504_28572[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (3))){
var inst_28451 = (state_28453[(2)]);
var state_28453__$1 = state_28453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28453__$1,inst_28451);
} else {
if((state_val_28454 === (12))){
var inst_28380 = (state_28453[(2)]);
var state_28453__$1 = state_28453;
var statearr_28505_28573 = state_28453__$1;
(statearr_28505_28573[(2)] = inst_28380);

(statearr_28505_28573[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (2))){
var state_28453__$1 = state_28453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28453__$1,(4),ch);
} else {
if((state_val_28454 === (23))){
var state_28453__$1 = state_28453;
var statearr_28506_28574 = state_28453__$1;
(statearr_28506_28574[(2)] = null);

(statearr_28506_28574[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (35))){
var inst_28435 = (state_28453[(2)]);
var state_28453__$1 = state_28453;
var statearr_28507_28575 = state_28453__$1;
(statearr_28507_28575[(2)] = inst_28435);

(statearr_28507_28575[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (19))){
var inst_28354 = (state_28453[(7)]);
var inst_28358 = cljs.core.chunk_first.call(null,inst_28354);
var inst_28359 = cljs.core.chunk_rest.call(null,inst_28354);
var inst_28360 = cljs.core.count.call(null,inst_28358);
var inst_28334 = inst_28359;
var inst_28335 = inst_28358;
var inst_28336 = inst_28360;
var inst_28337 = (0);
var state_28453__$1 = (function (){var statearr_28508 = state_28453;
(statearr_28508[(13)] = inst_28335);

(statearr_28508[(14)] = inst_28336);

(statearr_28508[(16)] = inst_28337);

(statearr_28508[(17)] = inst_28334);

return statearr_28508;
})();
var statearr_28509_28576 = state_28453__$1;
(statearr_28509_28576[(2)] = null);

(statearr_28509_28576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (11))){
var inst_28354 = (state_28453[(7)]);
var inst_28334 = (state_28453[(17)]);
var inst_28354__$1 = cljs.core.seq.call(null,inst_28334);
var state_28453__$1 = (function (){var statearr_28510 = state_28453;
(statearr_28510[(7)] = inst_28354__$1);

return statearr_28510;
})();
if(inst_28354__$1){
var statearr_28511_28577 = state_28453__$1;
(statearr_28511_28577[(1)] = (16));

} else {
var statearr_28512_28578 = state_28453__$1;
(statearr_28512_28578[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (9))){
var inst_28382 = (state_28453[(2)]);
var state_28453__$1 = state_28453;
var statearr_28513_28579 = state_28453__$1;
(statearr_28513_28579[(2)] = inst_28382);

(statearr_28513_28579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (5))){
var inst_28332 = cljs.core.deref.call(null,cs);
var inst_28333 = cljs.core.seq.call(null,inst_28332);
var inst_28334 = inst_28333;
var inst_28335 = null;
var inst_28336 = (0);
var inst_28337 = (0);
var state_28453__$1 = (function (){var statearr_28514 = state_28453;
(statearr_28514[(13)] = inst_28335);

(statearr_28514[(14)] = inst_28336);

(statearr_28514[(16)] = inst_28337);

(statearr_28514[(17)] = inst_28334);

return statearr_28514;
})();
var statearr_28515_28580 = state_28453__$1;
(statearr_28515_28580[(2)] = null);

(statearr_28515_28580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (14))){
var state_28453__$1 = state_28453;
var statearr_28516_28581 = state_28453__$1;
(statearr_28516_28581[(2)] = null);

(statearr_28516_28581[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (45))){
var inst_28443 = (state_28453[(2)]);
var state_28453__$1 = state_28453;
var statearr_28517_28582 = state_28453__$1;
(statearr_28517_28582[(2)] = inst_28443);

(statearr_28517_28582[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (26))){
var inst_28385 = (state_28453[(29)]);
var inst_28439 = (state_28453[(2)]);
var inst_28440 = cljs.core.seq.call(null,inst_28385);
var state_28453__$1 = (function (){var statearr_28518 = state_28453;
(statearr_28518[(31)] = inst_28439);

return statearr_28518;
})();
if(inst_28440){
var statearr_28519_28583 = state_28453__$1;
(statearr_28519_28583[(1)] = (42));

} else {
var statearr_28520_28584 = state_28453__$1;
(statearr_28520_28584[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (16))){
var inst_28354 = (state_28453[(7)]);
var inst_28356 = cljs.core.chunked_seq_QMARK_.call(null,inst_28354);
var state_28453__$1 = state_28453;
if(inst_28356){
var statearr_28521_28585 = state_28453__$1;
(statearr_28521_28585[(1)] = (19));

} else {
var statearr_28522_28586 = state_28453__$1;
(statearr_28522_28586[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (38))){
var inst_28432 = (state_28453[(2)]);
var state_28453__$1 = state_28453;
var statearr_28523_28587 = state_28453__$1;
(statearr_28523_28587[(2)] = inst_28432);

(statearr_28523_28587[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (30))){
var state_28453__$1 = state_28453;
var statearr_28524_28588 = state_28453__$1;
(statearr_28524_28588[(2)] = null);

(statearr_28524_28588[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (10))){
var inst_28335 = (state_28453[(13)]);
var inst_28337 = (state_28453[(16)]);
var inst_28343 = cljs.core._nth.call(null,inst_28335,inst_28337);
var inst_28344 = cljs.core.nth.call(null,inst_28343,(0),null);
var inst_28345 = cljs.core.nth.call(null,inst_28343,(1),null);
var state_28453__$1 = (function (){var statearr_28525 = state_28453;
(statearr_28525[(26)] = inst_28344);

return statearr_28525;
})();
if(cljs.core.truth_(inst_28345)){
var statearr_28526_28589 = state_28453__$1;
(statearr_28526_28589[(1)] = (13));

} else {
var statearr_28527_28590 = state_28453__$1;
(statearr_28527_28590[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (18))){
var inst_28378 = (state_28453[(2)]);
var state_28453__$1 = state_28453;
var statearr_28528_28591 = state_28453__$1;
(statearr_28528_28591[(2)] = inst_28378);

(statearr_28528_28591[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (42))){
var state_28453__$1 = state_28453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28453__$1,(45),dchan);
} else {
if((state_val_28454 === (37))){
var inst_28412 = (state_28453[(25)]);
var inst_28325 = (state_28453[(12)]);
var inst_28421 = (state_28453[(23)]);
var inst_28421__$1 = cljs.core.first.call(null,inst_28412);
var inst_28422 = cljs.core.async.put_BANG_.call(null,inst_28421__$1,inst_28325,done);
var state_28453__$1 = (function (){var statearr_28529 = state_28453;
(statearr_28529[(23)] = inst_28421__$1);

return statearr_28529;
})();
if(cljs.core.truth_(inst_28422)){
var statearr_28530_28592 = state_28453__$1;
(statearr_28530_28592[(1)] = (39));

} else {
var statearr_28531_28593 = state_28453__$1;
(statearr_28531_28593[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (8))){
var inst_28336 = (state_28453[(14)]);
var inst_28337 = (state_28453[(16)]);
var inst_28339 = (inst_28337 < inst_28336);
var inst_28340 = inst_28339;
var state_28453__$1 = state_28453;
if(cljs.core.truth_(inst_28340)){
var statearr_28532_28594 = state_28453__$1;
(statearr_28532_28594[(1)] = (10));

} else {
var statearr_28533_28595 = state_28453__$1;
(statearr_28533_28595[(1)] = (11));

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
});})(c__27234__auto___28541,cs,m,dchan,dctr,done))
;
return ((function (switch__26547__auto__,c__27234__auto___28541,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26548__auto__ = null;
var cljs$core$async$mult_$_state_machine__26548__auto____0 = (function (){
var statearr_28537 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28537[(0)] = cljs$core$async$mult_$_state_machine__26548__auto__);

(statearr_28537[(1)] = (1));

return statearr_28537;
});
var cljs$core$async$mult_$_state_machine__26548__auto____1 = (function (state_28453){
while(true){
var ret_value__26549__auto__ = (function (){try{while(true){
var result__26550__auto__ = switch__26547__auto__.call(null,state_28453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26550__auto__;
}
break;
}
}catch (e28538){if((e28538 instanceof Object)){
var ex__26551__auto__ = e28538;
var statearr_28539_28596 = state_28453;
(statearr_28539_28596[(5)] = ex__26551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28597 = state_28453;
state_28453 = G__28597;
continue;
} else {
return ret_value__26549__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26548__auto__ = function(state_28453){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26548__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26548__auto____1.call(this,state_28453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26548__auto____0;
cljs$core$async$mult_$_state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26548__auto____1;
return cljs$core$async$mult_$_state_machine__26548__auto__;
})()
;})(switch__26547__auto__,c__27234__auto___28541,cs,m,dchan,dctr,done))
})();
var state__27236__auto__ = (function (){var statearr_28540 = f__27235__auto__.call(null);
(statearr_28540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27234__auto___28541);

return statearr_28540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27236__auto__);
});})(c__27234__auto___28541,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args28598 = [];
var len__25604__auto___28601 = arguments.length;
var i__25605__auto___28602 = (0);
while(true){
if((i__25605__auto___28602 < len__25604__auto___28601)){
args28598.push((arguments[i__25605__auto___28602]));

var G__28603 = (i__25605__auto___28602 + (1));
i__25605__auto___28602 = G__28603;
continue;
} else {
}
break;
}

var G__28600 = args28598.length;
switch (G__28600) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28598.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25197__auto__ = (((m == null))?null:m);
var m__25198__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,m,ch);
} else {
var m__25198__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25197__auto__ = (((m == null))?null:m);
var m__25198__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,m,ch);
} else {
var m__25198__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25197__auto__ = (((m == null))?null:m);
var m__25198__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,m);
} else {
var m__25198__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25197__auto__ = (((m == null))?null:m);
var m__25198__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,m,state_map);
} else {
var m__25198__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25197__auto__ = (((m == null))?null:m);
var m__25198__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,m,mode);
} else {
var m__25198__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25611__auto__ = [];
var len__25604__auto___28615 = arguments.length;
var i__25605__auto___28616 = (0);
while(true){
if((i__25605__auto___28616 < len__25604__auto___28615)){
args__25611__auto__.push((arguments[i__25605__auto___28616]));

var G__28617 = (i__25605__auto___28616 + (1));
i__25605__auto___28616 = G__28617;
continue;
} else {
}
break;
}

var argseq__25612__auto__ = ((((3) < args__25611__auto__.length))?(new cljs.core.IndexedSeq(args__25611__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25612__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28609){
var map__28610 = p__28609;
var map__28610__$1 = ((((!((map__28610 == null)))?((((map__28610.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28610.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28610):map__28610);
var opts = map__28610__$1;
var statearr_28612_28618 = state;
(statearr_28612_28618[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__28610,map__28610__$1,opts){
return (function (val){
var statearr_28613_28619 = state;
(statearr_28613_28619[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28610,map__28610__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_28614_28620 = state;
(statearr_28614_28620[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28605){
var G__28606 = cljs.core.first.call(null,seq28605);
var seq28605__$1 = cljs.core.next.call(null,seq28605);
var G__28607 = cljs.core.first.call(null,seq28605__$1);
var seq28605__$2 = cljs.core.next.call(null,seq28605__$1);
var G__28608 = cljs.core.first.call(null,seq28605__$2);
var seq28605__$3 = cljs.core.next.call(null,seq28605__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28606,G__28607,G__28608,seq28605__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28784 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28784 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28785){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28785 = meta28785;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28786,meta28785__$1){
var self__ = this;
var _28786__$1 = this;
return (new cljs.core.async.t_cljs$core$async28784(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28785__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28784.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28786){
var self__ = this;
var _28786__$1 = this;
return self__.meta28785;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28784.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28784.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28784.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async28784.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28784.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28784.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28784.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28784.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28784.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28785","meta28785",-778202452,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28784.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28784.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28784";

cljs.core.async.t_cljs$core$async28784.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25140__auto__,writer__25141__auto__,opt__25142__auto__){
return cljs.core._write.call(null,writer__25141__auto__,"cljs.core.async/t_cljs$core$async28784");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28784 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28784(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28785){
return (new cljs.core.async.t_cljs$core$async28784(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28785));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28784(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27234__auto___28947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27234__auto___28947,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27235__auto__ = (function (){var switch__26547__auto__ = ((function (c__27234__auto___28947,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28884){
var state_val_28885 = (state_28884[(1)]);
if((state_val_28885 === (7))){
var inst_28802 = (state_28884[(2)]);
var state_28884__$1 = state_28884;
var statearr_28886_28948 = state_28884__$1;
(statearr_28886_28948[(2)] = inst_28802);

(statearr_28886_28948[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (20))){
var inst_28814 = (state_28884[(7)]);
var state_28884__$1 = state_28884;
var statearr_28887_28949 = state_28884__$1;
(statearr_28887_28949[(2)] = inst_28814);

(statearr_28887_28949[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (27))){
var state_28884__$1 = state_28884;
var statearr_28888_28950 = state_28884__$1;
(statearr_28888_28950[(2)] = null);

(statearr_28888_28950[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (1))){
var inst_28790 = (state_28884[(8)]);
var inst_28790__$1 = calc_state.call(null);
var inst_28792 = (inst_28790__$1 == null);
var inst_28793 = cljs.core.not.call(null,inst_28792);
var state_28884__$1 = (function (){var statearr_28889 = state_28884;
(statearr_28889[(8)] = inst_28790__$1);

return statearr_28889;
})();
if(inst_28793){
var statearr_28890_28951 = state_28884__$1;
(statearr_28890_28951[(1)] = (2));

} else {
var statearr_28891_28952 = state_28884__$1;
(statearr_28891_28952[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (24))){
var inst_28844 = (state_28884[(9)]);
var inst_28837 = (state_28884[(10)]);
var inst_28858 = (state_28884[(11)]);
var inst_28858__$1 = inst_28837.call(null,inst_28844);
var state_28884__$1 = (function (){var statearr_28892 = state_28884;
(statearr_28892[(11)] = inst_28858__$1);

return statearr_28892;
})();
if(cljs.core.truth_(inst_28858__$1)){
var statearr_28893_28953 = state_28884__$1;
(statearr_28893_28953[(1)] = (29));

} else {
var statearr_28894_28954 = state_28884__$1;
(statearr_28894_28954[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (4))){
var inst_28805 = (state_28884[(2)]);
var state_28884__$1 = state_28884;
if(cljs.core.truth_(inst_28805)){
var statearr_28895_28955 = state_28884__$1;
(statearr_28895_28955[(1)] = (8));

} else {
var statearr_28896_28956 = state_28884__$1;
(statearr_28896_28956[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (15))){
var inst_28831 = (state_28884[(2)]);
var state_28884__$1 = state_28884;
if(cljs.core.truth_(inst_28831)){
var statearr_28897_28957 = state_28884__$1;
(statearr_28897_28957[(1)] = (19));

} else {
var statearr_28898_28958 = state_28884__$1;
(statearr_28898_28958[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (21))){
var inst_28836 = (state_28884[(12)]);
var inst_28836__$1 = (state_28884[(2)]);
var inst_28837 = cljs.core.get.call(null,inst_28836__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28838 = cljs.core.get.call(null,inst_28836__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28839 = cljs.core.get.call(null,inst_28836__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28884__$1 = (function (){var statearr_28899 = state_28884;
(statearr_28899[(10)] = inst_28837);

(statearr_28899[(13)] = inst_28838);

(statearr_28899[(12)] = inst_28836__$1);

return statearr_28899;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28884__$1,(22),inst_28839);
} else {
if((state_val_28885 === (31))){
var inst_28866 = (state_28884[(2)]);
var state_28884__$1 = state_28884;
if(cljs.core.truth_(inst_28866)){
var statearr_28900_28959 = state_28884__$1;
(statearr_28900_28959[(1)] = (32));

} else {
var statearr_28901_28960 = state_28884__$1;
(statearr_28901_28960[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (32))){
var inst_28843 = (state_28884[(14)]);
var state_28884__$1 = state_28884;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28884__$1,(35),out,inst_28843);
} else {
if((state_val_28885 === (33))){
var inst_28836 = (state_28884[(12)]);
var inst_28814 = inst_28836;
var state_28884__$1 = (function (){var statearr_28902 = state_28884;
(statearr_28902[(7)] = inst_28814);

return statearr_28902;
})();
var statearr_28903_28961 = state_28884__$1;
(statearr_28903_28961[(2)] = null);

(statearr_28903_28961[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (13))){
var inst_28814 = (state_28884[(7)]);
var inst_28821 = inst_28814.cljs$lang$protocol_mask$partition0$;
var inst_28822 = (inst_28821 & (64));
var inst_28823 = inst_28814.cljs$core$ISeq$;
var inst_28824 = (inst_28822) || (inst_28823);
var state_28884__$1 = state_28884;
if(cljs.core.truth_(inst_28824)){
var statearr_28904_28962 = state_28884__$1;
(statearr_28904_28962[(1)] = (16));

} else {
var statearr_28905_28963 = state_28884__$1;
(statearr_28905_28963[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (22))){
var inst_28844 = (state_28884[(9)]);
var inst_28843 = (state_28884[(14)]);
var inst_28842 = (state_28884[(2)]);
var inst_28843__$1 = cljs.core.nth.call(null,inst_28842,(0),null);
var inst_28844__$1 = cljs.core.nth.call(null,inst_28842,(1),null);
var inst_28845 = (inst_28843__$1 == null);
var inst_28846 = cljs.core._EQ_.call(null,inst_28844__$1,change);
var inst_28847 = (inst_28845) || (inst_28846);
var state_28884__$1 = (function (){var statearr_28906 = state_28884;
(statearr_28906[(9)] = inst_28844__$1);

(statearr_28906[(14)] = inst_28843__$1);

return statearr_28906;
})();
if(cljs.core.truth_(inst_28847)){
var statearr_28907_28964 = state_28884__$1;
(statearr_28907_28964[(1)] = (23));

} else {
var statearr_28908_28965 = state_28884__$1;
(statearr_28908_28965[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (36))){
var inst_28836 = (state_28884[(12)]);
var inst_28814 = inst_28836;
var state_28884__$1 = (function (){var statearr_28909 = state_28884;
(statearr_28909[(7)] = inst_28814);

return statearr_28909;
})();
var statearr_28910_28966 = state_28884__$1;
(statearr_28910_28966[(2)] = null);

(statearr_28910_28966[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (29))){
var inst_28858 = (state_28884[(11)]);
var state_28884__$1 = state_28884;
var statearr_28911_28967 = state_28884__$1;
(statearr_28911_28967[(2)] = inst_28858);

(statearr_28911_28967[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (6))){
var state_28884__$1 = state_28884;
var statearr_28912_28968 = state_28884__$1;
(statearr_28912_28968[(2)] = false);

(statearr_28912_28968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (28))){
var inst_28854 = (state_28884[(2)]);
var inst_28855 = calc_state.call(null);
var inst_28814 = inst_28855;
var state_28884__$1 = (function (){var statearr_28913 = state_28884;
(statearr_28913[(15)] = inst_28854);

(statearr_28913[(7)] = inst_28814);

return statearr_28913;
})();
var statearr_28914_28969 = state_28884__$1;
(statearr_28914_28969[(2)] = null);

(statearr_28914_28969[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (25))){
var inst_28880 = (state_28884[(2)]);
var state_28884__$1 = state_28884;
var statearr_28915_28970 = state_28884__$1;
(statearr_28915_28970[(2)] = inst_28880);

(statearr_28915_28970[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (34))){
var inst_28878 = (state_28884[(2)]);
var state_28884__$1 = state_28884;
var statearr_28916_28971 = state_28884__$1;
(statearr_28916_28971[(2)] = inst_28878);

(statearr_28916_28971[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (17))){
var state_28884__$1 = state_28884;
var statearr_28917_28972 = state_28884__$1;
(statearr_28917_28972[(2)] = false);

(statearr_28917_28972[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (3))){
var state_28884__$1 = state_28884;
var statearr_28918_28973 = state_28884__$1;
(statearr_28918_28973[(2)] = false);

(statearr_28918_28973[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (12))){
var inst_28882 = (state_28884[(2)]);
var state_28884__$1 = state_28884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28884__$1,inst_28882);
} else {
if((state_val_28885 === (2))){
var inst_28790 = (state_28884[(8)]);
var inst_28795 = inst_28790.cljs$lang$protocol_mask$partition0$;
var inst_28796 = (inst_28795 & (64));
var inst_28797 = inst_28790.cljs$core$ISeq$;
var inst_28798 = (inst_28796) || (inst_28797);
var state_28884__$1 = state_28884;
if(cljs.core.truth_(inst_28798)){
var statearr_28919_28974 = state_28884__$1;
(statearr_28919_28974[(1)] = (5));

} else {
var statearr_28920_28975 = state_28884__$1;
(statearr_28920_28975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (23))){
var inst_28843 = (state_28884[(14)]);
var inst_28849 = (inst_28843 == null);
var state_28884__$1 = state_28884;
if(cljs.core.truth_(inst_28849)){
var statearr_28921_28976 = state_28884__$1;
(statearr_28921_28976[(1)] = (26));

} else {
var statearr_28922_28977 = state_28884__$1;
(statearr_28922_28977[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (35))){
var inst_28869 = (state_28884[(2)]);
var state_28884__$1 = state_28884;
if(cljs.core.truth_(inst_28869)){
var statearr_28923_28978 = state_28884__$1;
(statearr_28923_28978[(1)] = (36));

} else {
var statearr_28924_28979 = state_28884__$1;
(statearr_28924_28979[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (19))){
var inst_28814 = (state_28884[(7)]);
var inst_28833 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28814);
var state_28884__$1 = state_28884;
var statearr_28925_28980 = state_28884__$1;
(statearr_28925_28980[(2)] = inst_28833);

(statearr_28925_28980[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (11))){
var inst_28814 = (state_28884[(7)]);
var inst_28818 = (inst_28814 == null);
var inst_28819 = cljs.core.not.call(null,inst_28818);
var state_28884__$1 = state_28884;
if(inst_28819){
var statearr_28926_28981 = state_28884__$1;
(statearr_28926_28981[(1)] = (13));

} else {
var statearr_28927_28982 = state_28884__$1;
(statearr_28927_28982[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (9))){
var inst_28790 = (state_28884[(8)]);
var state_28884__$1 = state_28884;
var statearr_28928_28983 = state_28884__$1;
(statearr_28928_28983[(2)] = inst_28790);

(statearr_28928_28983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (5))){
var state_28884__$1 = state_28884;
var statearr_28929_28984 = state_28884__$1;
(statearr_28929_28984[(2)] = true);

(statearr_28929_28984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (14))){
var state_28884__$1 = state_28884;
var statearr_28930_28985 = state_28884__$1;
(statearr_28930_28985[(2)] = false);

(statearr_28930_28985[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (26))){
var inst_28844 = (state_28884[(9)]);
var inst_28851 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28844);
var state_28884__$1 = state_28884;
var statearr_28931_28986 = state_28884__$1;
(statearr_28931_28986[(2)] = inst_28851);

(statearr_28931_28986[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (16))){
var state_28884__$1 = state_28884;
var statearr_28932_28987 = state_28884__$1;
(statearr_28932_28987[(2)] = true);

(statearr_28932_28987[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (38))){
var inst_28874 = (state_28884[(2)]);
var state_28884__$1 = state_28884;
var statearr_28933_28988 = state_28884__$1;
(statearr_28933_28988[(2)] = inst_28874);

(statearr_28933_28988[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (30))){
var inst_28844 = (state_28884[(9)]);
var inst_28837 = (state_28884[(10)]);
var inst_28838 = (state_28884[(13)]);
var inst_28861 = cljs.core.empty_QMARK_.call(null,inst_28837);
var inst_28862 = inst_28838.call(null,inst_28844);
var inst_28863 = cljs.core.not.call(null,inst_28862);
var inst_28864 = (inst_28861) && (inst_28863);
var state_28884__$1 = state_28884;
var statearr_28934_28989 = state_28884__$1;
(statearr_28934_28989[(2)] = inst_28864);

(statearr_28934_28989[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (10))){
var inst_28790 = (state_28884[(8)]);
var inst_28810 = (state_28884[(2)]);
var inst_28811 = cljs.core.get.call(null,inst_28810,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28812 = cljs.core.get.call(null,inst_28810,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28813 = cljs.core.get.call(null,inst_28810,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28814 = inst_28790;
var state_28884__$1 = (function (){var statearr_28935 = state_28884;
(statearr_28935[(16)] = inst_28812);

(statearr_28935[(17)] = inst_28813);

(statearr_28935[(18)] = inst_28811);

(statearr_28935[(7)] = inst_28814);

return statearr_28935;
})();
var statearr_28936_28990 = state_28884__$1;
(statearr_28936_28990[(2)] = null);

(statearr_28936_28990[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (18))){
var inst_28828 = (state_28884[(2)]);
var state_28884__$1 = state_28884;
var statearr_28937_28991 = state_28884__$1;
(statearr_28937_28991[(2)] = inst_28828);

(statearr_28937_28991[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (37))){
var state_28884__$1 = state_28884;
var statearr_28938_28992 = state_28884__$1;
(statearr_28938_28992[(2)] = null);

(statearr_28938_28992[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (8))){
var inst_28790 = (state_28884[(8)]);
var inst_28807 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28790);
var state_28884__$1 = state_28884;
var statearr_28939_28993 = state_28884__$1;
(statearr_28939_28993[(2)] = inst_28807);

(statearr_28939_28993[(1)] = (10));


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
});})(c__27234__auto___28947,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26547__auto__,c__27234__auto___28947,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26548__auto__ = null;
var cljs$core$async$mix_$_state_machine__26548__auto____0 = (function (){
var statearr_28943 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28943[(0)] = cljs$core$async$mix_$_state_machine__26548__auto__);

(statearr_28943[(1)] = (1));

return statearr_28943;
});
var cljs$core$async$mix_$_state_machine__26548__auto____1 = (function (state_28884){
while(true){
var ret_value__26549__auto__ = (function (){try{while(true){
var result__26550__auto__ = switch__26547__auto__.call(null,state_28884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26550__auto__;
}
break;
}
}catch (e28944){if((e28944 instanceof Object)){
var ex__26551__auto__ = e28944;
var statearr_28945_28994 = state_28884;
(statearr_28945_28994[(5)] = ex__26551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28995 = state_28884;
state_28884 = G__28995;
continue;
} else {
return ret_value__26549__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26548__auto__ = function(state_28884){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26548__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26548__auto____1.call(this,state_28884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26548__auto____0;
cljs$core$async$mix_$_state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26548__auto____1;
return cljs$core$async$mix_$_state_machine__26548__auto__;
})()
;})(switch__26547__auto__,c__27234__auto___28947,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27236__auto__ = (function (){var statearr_28946 = f__27235__auto__.call(null);
(statearr_28946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27234__auto___28947);

return statearr_28946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27236__auto__);
});})(c__27234__auto___28947,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25197__auto__ = (((p == null))?null:p);
var m__25198__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25198__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25197__auto__ = (((p == null))?null:p);
var m__25198__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,p,v,ch);
} else {
var m__25198__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args28996 = [];
var len__25604__auto___28999 = arguments.length;
var i__25605__auto___29000 = (0);
while(true){
if((i__25605__auto___29000 < len__25604__auto___28999)){
args28996.push((arguments[i__25605__auto___29000]));

var G__29001 = (i__25605__auto___29000 + (1));
i__25605__auto___29000 = G__29001;
continue;
} else {
}
break;
}

var G__28998 = args28996.length;
switch (G__28998) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28996.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25197__auto__ = (((p == null))?null:p);
var m__25198__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,p);
} else {
var m__25198__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25197__auto__ = (((p == null))?null:p);
var m__25198__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25197__auto__)]);
if(!((m__25198__auto__ == null))){
return m__25198__auto__.call(null,p,v);
} else {
var m__25198__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25198__auto____$1 == null))){
return m__25198__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args29004 = [];
var len__25604__auto___29129 = arguments.length;
var i__25605__auto___29130 = (0);
while(true){
if((i__25605__auto___29130 < len__25604__auto___29129)){
args29004.push((arguments[i__25605__auto___29130]));

var G__29131 = (i__25605__auto___29130 + (1));
i__25605__auto___29130 = G__29131;
continue;
} else {
}
break;
}

var G__29006 = args29004.length;
switch (G__29006) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29004.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24534__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24534__auto__)){
return or__24534__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24534__auto__,mults){
return (function (p1__29003_SHARP_){
if(cljs.core.truth_(p1__29003_SHARP_.call(null,topic))){
return p1__29003_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29003_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24534__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29007 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29007 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29008){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29008 = meta29008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29009,meta29008__$1){
var self__ = this;
var _29009__$1 = this;
return (new cljs.core.async.t_cljs$core$async29007(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29008__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29007.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29009){
var self__ = this;
var _29009__$1 = this;
return self__.meta29008;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29007.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29007.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29007.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async29007.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29007.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29007.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29007.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29007.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29008","meta29008",-1954074914,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29007.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29007.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29007";

cljs.core.async.t_cljs$core$async29007.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25140__auto__,writer__25141__auto__,opt__25142__auto__){
return cljs.core._write.call(null,writer__25141__auto__,"cljs.core.async/t_cljs$core$async29007");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29007 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29007(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29008){
return (new cljs.core.async.t_cljs$core$async29007(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29008));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29007(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27234__auto___29133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27234__auto___29133,mults,ensure_mult,p){
return (function (){
var f__27235__auto__ = (function (){var switch__26547__auto__ = ((function (c__27234__auto___29133,mults,ensure_mult,p){
return (function (state_29081){
var state_val_29082 = (state_29081[(1)]);
if((state_val_29082 === (7))){
var inst_29077 = (state_29081[(2)]);
var state_29081__$1 = state_29081;
var statearr_29083_29134 = state_29081__$1;
(statearr_29083_29134[(2)] = inst_29077);

(statearr_29083_29134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (20))){
var state_29081__$1 = state_29081;
var statearr_29084_29135 = state_29081__$1;
(statearr_29084_29135[(2)] = null);

(statearr_29084_29135[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (1))){
var state_29081__$1 = state_29081;
var statearr_29085_29136 = state_29081__$1;
(statearr_29085_29136[(2)] = null);

(statearr_29085_29136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (24))){
var inst_29060 = (state_29081[(7)]);
var inst_29069 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29060);
var state_29081__$1 = state_29081;
var statearr_29086_29137 = state_29081__$1;
(statearr_29086_29137[(2)] = inst_29069);

(statearr_29086_29137[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (4))){
var inst_29012 = (state_29081[(8)]);
var inst_29012__$1 = (state_29081[(2)]);
var inst_29013 = (inst_29012__$1 == null);
var state_29081__$1 = (function (){var statearr_29087 = state_29081;
(statearr_29087[(8)] = inst_29012__$1);

return statearr_29087;
})();
if(cljs.core.truth_(inst_29013)){
var statearr_29088_29138 = state_29081__$1;
(statearr_29088_29138[(1)] = (5));

} else {
var statearr_29089_29139 = state_29081__$1;
(statearr_29089_29139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (15))){
var inst_29054 = (state_29081[(2)]);
var state_29081__$1 = state_29081;
var statearr_29090_29140 = state_29081__$1;
(statearr_29090_29140[(2)] = inst_29054);

(statearr_29090_29140[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (21))){
var inst_29074 = (state_29081[(2)]);
var state_29081__$1 = (function (){var statearr_29091 = state_29081;
(statearr_29091[(9)] = inst_29074);

return statearr_29091;
})();
var statearr_29092_29141 = state_29081__$1;
(statearr_29092_29141[(2)] = null);

(statearr_29092_29141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (13))){
var inst_29036 = (state_29081[(10)]);
var inst_29038 = cljs.core.chunked_seq_QMARK_.call(null,inst_29036);
var state_29081__$1 = state_29081;
if(inst_29038){
var statearr_29093_29142 = state_29081__$1;
(statearr_29093_29142[(1)] = (16));

} else {
var statearr_29094_29143 = state_29081__$1;
(statearr_29094_29143[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (22))){
var inst_29066 = (state_29081[(2)]);
var state_29081__$1 = state_29081;
if(cljs.core.truth_(inst_29066)){
var statearr_29095_29144 = state_29081__$1;
(statearr_29095_29144[(1)] = (23));

} else {
var statearr_29096_29145 = state_29081__$1;
(statearr_29096_29145[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (6))){
var inst_29062 = (state_29081[(11)]);
var inst_29060 = (state_29081[(7)]);
var inst_29012 = (state_29081[(8)]);
var inst_29060__$1 = topic_fn.call(null,inst_29012);
var inst_29061 = cljs.core.deref.call(null,mults);
var inst_29062__$1 = cljs.core.get.call(null,inst_29061,inst_29060__$1);
var state_29081__$1 = (function (){var statearr_29097 = state_29081;
(statearr_29097[(11)] = inst_29062__$1);

(statearr_29097[(7)] = inst_29060__$1);

return statearr_29097;
})();
if(cljs.core.truth_(inst_29062__$1)){
var statearr_29098_29146 = state_29081__$1;
(statearr_29098_29146[(1)] = (19));

} else {
var statearr_29099_29147 = state_29081__$1;
(statearr_29099_29147[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (25))){
var inst_29071 = (state_29081[(2)]);
var state_29081__$1 = state_29081;
var statearr_29100_29148 = state_29081__$1;
(statearr_29100_29148[(2)] = inst_29071);

(statearr_29100_29148[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (17))){
var inst_29036 = (state_29081[(10)]);
var inst_29045 = cljs.core.first.call(null,inst_29036);
var inst_29046 = cljs.core.async.muxch_STAR_.call(null,inst_29045);
var inst_29047 = cljs.core.async.close_BANG_.call(null,inst_29046);
var inst_29048 = cljs.core.next.call(null,inst_29036);
var inst_29022 = inst_29048;
var inst_29023 = null;
var inst_29024 = (0);
var inst_29025 = (0);
var state_29081__$1 = (function (){var statearr_29101 = state_29081;
(statearr_29101[(12)] = inst_29024);

(statearr_29101[(13)] = inst_29022);

(statearr_29101[(14)] = inst_29047);

(statearr_29101[(15)] = inst_29025);

(statearr_29101[(16)] = inst_29023);

return statearr_29101;
})();
var statearr_29102_29149 = state_29081__$1;
(statearr_29102_29149[(2)] = null);

(statearr_29102_29149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (3))){
var inst_29079 = (state_29081[(2)]);
var state_29081__$1 = state_29081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29081__$1,inst_29079);
} else {
if((state_val_29082 === (12))){
var inst_29056 = (state_29081[(2)]);
var state_29081__$1 = state_29081;
var statearr_29103_29150 = state_29081__$1;
(statearr_29103_29150[(2)] = inst_29056);

(statearr_29103_29150[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (2))){
var state_29081__$1 = state_29081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29081__$1,(4),ch);
} else {
if((state_val_29082 === (23))){
var state_29081__$1 = state_29081;
var statearr_29104_29151 = state_29081__$1;
(statearr_29104_29151[(2)] = null);

(statearr_29104_29151[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (19))){
var inst_29062 = (state_29081[(11)]);
var inst_29012 = (state_29081[(8)]);
var inst_29064 = cljs.core.async.muxch_STAR_.call(null,inst_29062);
var state_29081__$1 = state_29081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29081__$1,(22),inst_29064,inst_29012);
} else {
if((state_val_29082 === (11))){
var inst_29022 = (state_29081[(13)]);
var inst_29036 = (state_29081[(10)]);
var inst_29036__$1 = cljs.core.seq.call(null,inst_29022);
var state_29081__$1 = (function (){var statearr_29105 = state_29081;
(statearr_29105[(10)] = inst_29036__$1);

return statearr_29105;
})();
if(inst_29036__$1){
var statearr_29106_29152 = state_29081__$1;
(statearr_29106_29152[(1)] = (13));

} else {
var statearr_29107_29153 = state_29081__$1;
(statearr_29107_29153[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (9))){
var inst_29058 = (state_29081[(2)]);
var state_29081__$1 = state_29081;
var statearr_29108_29154 = state_29081__$1;
(statearr_29108_29154[(2)] = inst_29058);

(statearr_29108_29154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (5))){
var inst_29019 = cljs.core.deref.call(null,mults);
var inst_29020 = cljs.core.vals.call(null,inst_29019);
var inst_29021 = cljs.core.seq.call(null,inst_29020);
var inst_29022 = inst_29021;
var inst_29023 = null;
var inst_29024 = (0);
var inst_29025 = (0);
var state_29081__$1 = (function (){var statearr_29109 = state_29081;
(statearr_29109[(12)] = inst_29024);

(statearr_29109[(13)] = inst_29022);

(statearr_29109[(15)] = inst_29025);

(statearr_29109[(16)] = inst_29023);

return statearr_29109;
})();
var statearr_29110_29155 = state_29081__$1;
(statearr_29110_29155[(2)] = null);

(statearr_29110_29155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (14))){
var state_29081__$1 = state_29081;
var statearr_29114_29156 = state_29081__$1;
(statearr_29114_29156[(2)] = null);

(statearr_29114_29156[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (16))){
var inst_29036 = (state_29081[(10)]);
var inst_29040 = cljs.core.chunk_first.call(null,inst_29036);
var inst_29041 = cljs.core.chunk_rest.call(null,inst_29036);
var inst_29042 = cljs.core.count.call(null,inst_29040);
var inst_29022 = inst_29041;
var inst_29023 = inst_29040;
var inst_29024 = inst_29042;
var inst_29025 = (0);
var state_29081__$1 = (function (){var statearr_29115 = state_29081;
(statearr_29115[(12)] = inst_29024);

(statearr_29115[(13)] = inst_29022);

(statearr_29115[(15)] = inst_29025);

(statearr_29115[(16)] = inst_29023);

return statearr_29115;
})();
var statearr_29116_29157 = state_29081__$1;
(statearr_29116_29157[(2)] = null);

(statearr_29116_29157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (10))){
var inst_29024 = (state_29081[(12)]);
var inst_29022 = (state_29081[(13)]);
var inst_29025 = (state_29081[(15)]);
var inst_29023 = (state_29081[(16)]);
var inst_29030 = cljs.core._nth.call(null,inst_29023,inst_29025);
var inst_29031 = cljs.core.async.muxch_STAR_.call(null,inst_29030);
var inst_29032 = cljs.core.async.close_BANG_.call(null,inst_29031);
var inst_29033 = (inst_29025 + (1));
var tmp29111 = inst_29024;
var tmp29112 = inst_29022;
var tmp29113 = inst_29023;
var inst_29022__$1 = tmp29112;
var inst_29023__$1 = tmp29113;
var inst_29024__$1 = tmp29111;
var inst_29025__$1 = inst_29033;
var state_29081__$1 = (function (){var statearr_29117 = state_29081;
(statearr_29117[(12)] = inst_29024__$1);

(statearr_29117[(13)] = inst_29022__$1);

(statearr_29117[(17)] = inst_29032);

(statearr_29117[(15)] = inst_29025__$1);

(statearr_29117[(16)] = inst_29023__$1);

return statearr_29117;
})();
var statearr_29118_29158 = state_29081__$1;
(statearr_29118_29158[(2)] = null);

(statearr_29118_29158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (18))){
var inst_29051 = (state_29081[(2)]);
var state_29081__$1 = state_29081;
var statearr_29119_29159 = state_29081__$1;
(statearr_29119_29159[(2)] = inst_29051);

(statearr_29119_29159[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (8))){
var inst_29024 = (state_29081[(12)]);
var inst_29025 = (state_29081[(15)]);
var inst_29027 = (inst_29025 < inst_29024);
var inst_29028 = inst_29027;
var state_29081__$1 = state_29081;
if(cljs.core.truth_(inst_29028)){
var statearr_29120_29160 = state_29081__$1;
(statearr_29120_29160[(1)] = (10));

} else {
var statearr_29121_29161 = state_29081__$1;
(statearr_29121_29161[(1)] = (11));

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
});})(c__27234__auto___29133,mults,ensure_mult,p))
;
return ((function (switch__26547__auto__,c__27234__auto___29133,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26548__auto__ = null;
var cljs$core$async$state_machine__26548__auto____0 = (function (){
var statearr_29125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29125[(0)] = cljs$core$async$state_machine__26548__auto__);

(statearr_29125[(1)] = (1));

return statearr_29125;
});
var cljs$core$async$state_machine__26548__auto____1 = (function (state_29081){
while(true){
var ret_value__26549__auto__ = (function (){try{while(true){
var result__26550__auto__ = switch__26547__auto__.call(null,state_29081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26550__auto__;
}
break;
}
}catch (e29126){if((e29126 instanceof Object)){
var ex__26551__auto__ = e29126;
var statearr_29127_29162 = state_29081;
(statearr_29127_29162[(5)] = ex__26551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29163 = state_29081;
state_29081 = G__29163;
continue;
} else {
return ret_value__26549__auto__;
}
break;
}
});
cljs$core$async$state_machine__26548__auto__ = function(state_29081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26548__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26548__auto____1.call(this,state_29081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26548__auto____0;
cljs$core$async$state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26548__auto____1;
return cljs$core$async$state_machine__26548__auto__;
})()
;})(switch__26547__auto__,c__27234__auto___29133,mults,ensure_mult,p))
})();
var state__27236__auto__ = (function (){var statearr_29128 = f__27235__auto__.call(null);
(statearr_29128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27234__auto___29133);

return statearr_29128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27236__auto__);
});})(c__27234__auto___29133,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args29164 = [];
var len__25604__auto___29167 = arguments.length;
var i__25605__auto___29168 = (0);
while(true){
if((i__25605__auto___29168 < len__25604__auto___29167)){
args29164.push((arguments[i__25605__auto___29168]));

var G__29169 = (i__25605__auto___29168 + (1));
i__25605__auto___29168 = G__29169;
continue;
} else {
}
break;
}

var G__29166 = args29164.length;
switch (G__29166) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29164.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args29171 = [];
var len__25604__auto___29174 = arguments.length;
var i__25605__auto___29175 = (0);
while(true){
if((i__25605__auto___29175 < len__25604__auto___29174)){
args29171.push((arguments[i__25605__auto___29175]));

var G__29176 = (i__25605__auto___29175 + (1));
i__25605__auto___29175 = G__29176;
continue;
} else {
}
break;
}

var G__29173 = args29171.length;
switch (G__29173) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29171.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args29178 = [];
var len__25604__auto___29249 = arguments.length;
var i__25605__auto___29250 = (0);
while(true){
if((i__25605__auto___29250 < len__25604__auto___29249)){
args29178.push((arguments[i__25605__auto___29250]));

var G__29251 = (i__25605__auto___29250 + (1));
i__25605__auto___29250 = G__29251;
continue;
} else {
}
break;
}

var G__29180 = args29178.length;
switch (G__29180) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29178.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__27234__auto___29253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27234__auto___29253,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27235__auto__ = (function (){var switch__26547__auto__ = ((function (c__27234__auto___29253,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29219){
var state_val_29220 = (state_29219[(1)]);
if((state_val_29220 === (7))){
var state_29219__$1 = state_29219;
var statearr_29221_29254 = state_29219__$1;
(statearr_29221_29254[(2)] = null);

(statearr_29221_29254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (1))){
var state_29219__$1 = state_29219;
var statearr_29222_29255 = state_29219__$1;
(statearr_29222_29255[(2)] = null);

(statearr_29222_29255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (4))){
var inst_29183 = (state_29219[(7)]);
var inst_29185 = (inst_29183 < cnt);
var state_29219__$1 = state_29219;
if(cljs.core.truth_(inst_29185)){
var statearr_29223_29256 = state_29219__$1;
(statearr_29223_29256[(1)] = (6));

} else {
var statearr_29224_29257 = state_29219__$1;
(statearr_29224_29257[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (15))){
var inst_29215 = (state_29219[(2)]);
var state_29219__$1 = state_29219;
var statearr_29225_29258 = state_29219__$1;
(statearr_29225_29258[(2)] = inst_29215);

(statearr_29225_29258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (13))){
var inst_29208 = cljs.core.async.close_BANG_.call(null,out);
var state_29219__$1 = state_29219;
var statearr_29226_29259 = state_29219__$1;
(statearr_29226_29259[(2)] = inst_29208);

(statearr_29226_29259[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (6))){
var state_29219__$1 = state_29219;
var statearr_29227_29260 = state_29219__$1;
(statearr_29227_29260[(2)] = null);

(statearr_29227_29260[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (3))){
var inst_29217 = (state_29219[(2)]);
var state_29219__$1 = state_29219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29219__$1,inst_29217);
} else {
if((state_val_29220 === (12))){
var inst_29205 = (state_29219[(8)]);
var inst_29205__$1 = (state_29219[(2)]);
var inst_29206 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29205__$1);
var state_29219__$1 = (function (){var statearr_29228 = state_29219;
(statearr_29228[(8)] = inst_29205__$1);

return statearr_29228;
})();
if(cljs.core.truth_(inst_29206)){
var statearr_29229_29261 = state_29219__$1;
(statearr_29229_29261[(1)] = (13));

} else {
var statearr_29230_29262 = state_29219__$1;
(statearr_29230_29262[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (2))){
var inst_29182 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29183 = (0);
var state_29219__$1 = (function (){var statearr_29231 = state_29219;
(statearr_29231[(7)] = inst_29183);

(statearr_29231[(9)] = inst_29182);

return statearr_29231;
})();
var statearr_29232_29263 = state_29219__$1;
(statearr_29232_29263[(2)] = null);

(statearr_29232_29263[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (11))){
var inst_29183 = (state_29219[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29219,(10),Object,null,(9));
var inst_29192 = chs__$1.call(null,inst_29183);
var inst_29193 = done.call(null,inst_29183);
var inst_29194 = cljs.core.async.take_BANG_.call(null,inst_29192,inst_29193);
var state_29219__$1 = state_29219;
var statearr_29233_29264 = state_29219__$1;
(statearr_29233_29264[(2)] = inst_29194);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29219__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (9))){
var inst_29183 = (state_29219[(7)]);
var inst_29196 = (state_29219[(2)]);
var inst_29197 = (inst_29183 + (1));
var inst_29183__$1 = inst_29197;
var state_29219__$1 = (function (){var statearr_29234 = state_29219;
(statearr_29234[(7)] = inst_29183__$1);

(statearr_29234[(10)] = inst_29196);

return statearr_29234;
})();
var statearr_29235_29265 = state_29219__$1;
(statearr_29235_29265[(2)] = null);

(statearr_29235_29265[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (5))){
var inst_29203 = (state_29219[(2)]);
var state_29219__$1 = (function (){var statearr_29236 = state_29219;
(statearr_29236[(11)] = inst_29203);

return statearr_29236;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29219__$1,(12),dchan);
} else {
if((state_val_29220 === (14))){
var inst_29205 = (state_29219[(8)]);
var inst_29210 = cljs.core.apply.call(null,f,inst_29205);
var state_29219__$1 = state_29219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29219__$1,(16),out,inst_29210);
} else {
if((state_val_29220 === (16))){
var inst_29212 = (state_29219[(2)]);
var state_29219__$1 = (function (){var statearr_29237 = state_29219;
(statearr_29237[(12)] = inst_29212);

return statearr_29237;
})();
var statearr_29238_29266 = state_29219__$1;
(statearr_29238_29266[(2)] = null);

(statearr_29238_29266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (10))){
var inst_29187 = (state_29219[(2)]);
var inst_29188 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29219__$1 = (function (){var statearr_29239 = state_29219;
(statearr_29239[(13)] = inst_29187);

return statearr_29239;
})();
var statearr_29240_29267 = state_29219__$1;
(statearr_29240_29267[(2)] = inst_29188);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29219__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (8))){
var inst_29201 = (state_29219[(2)]);
var state_29219__$1 = state_29219;
var statearr_29241_29268 = state_29219__$1;
(statearr_29241_29268[(2)] = inst_29201);

(statearr_29241_29268[(1)] = (5));


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
});})(c__27234__auto___29253,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26547__auto__,c__27234__auto___29253,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26548__auto__ = null;
var cljs$core$async$state_machine__26548__auto____0 = (function (){
var statearr_29245 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29245[(0)] = cljs$core$async$state_machine__26548__auto__);

(statearr_29245[(1)] = (1));

return statearr_29245;
});
var cljs$core$async$state_machine__26548__auto____1 = (function (state_29219){
while(true){
var ret_value__26549__auto__ = (function (){try{while(true){
var result__26550__auto__ = switch__26547__auto__.call(null,state_29219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26550__auto__;
}
break;
}
}catch (e29246){if((e29246 instanceof Object)){
var ex__26551__auto__ = e29246;
var statearr_29247_29269 = state_29219;
(statearr_29247_29269[(5)] = ex__26551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29270 = state_29219;
state_29219 = G__29270;
continue;
} else {
return ret_value__26549__auto__;
}
break;
}
});
cljs$core$async$state_machine__26548__auto__ = function(state_29219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26548__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26548__auto____1.call(this,state_29219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26548__auto____0;
cljs$core$async$state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26548__auto____1;
return cljs$core$async$state_machine__26548__auto__;
})()
;})(switch__26547__auto__,c__27234__auto___29253,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27236__auto__ = (function (){var statearr_29248 = f__27235__auto__.call(null);
(statearr_29248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27234__auto___29253);

return statearr_29248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27236__auto__);
});})(c__27234__auto___29253,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29272 = [];
var len__25604__auto___29328 = arguments.length;
var i__25605__auto___29329 = (0);
while(true){
if((i__25605__auto___29329 < len__25604__auto___29328)){
args29272.push((arguments[i__25605__auto___29329]));

var G__29330 = (i__25605__auto___29329 + (1));
i__25605__auto___29329 = G__29330;
continue;
} else {
}
break;
}

var G__29274 = args29272.length;
switch (G__29274) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29272.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27234__auto___29332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27234__auto___29332,out){
return (function (){
var f__27235__auto__ = (function (){var switch__26547__auto__ = ((function (c__27234__auto___29332,out){
return (function (state_29304){
var state_val_29305 = (state_29304[(1)]);
if((state_val_29305 === (7))){
var inst_29283 = (state_29304[(7)]);
var inst_29284 = (state_29304[(8)]);
var inst_29283__$1 = (state_29304[(2)]);
var inst_29284__$1 = cljs.core.nth.call(null,inst_29283__$1,(0),null);
var inst_29285 = cljs.core.nth.call(null,inst_29283__$1,(1),null);
var inst_29286 = (inst_29284__$1 == null);
var state_29304__$1 = (function (){var statearr_29306 = state_29304;
(statearr_29306[(7)] = inst_29283__$1);

(statearr_29306[(8)] = inst_29284__$1);

(statearr_29306[(9)] = inst_29285);

return statearr_29306;
})();
if(cljs.core.truth_(inst_29286)){
var statearr_29307_29333 = state_29304__$1;
(statearr_29307_29333[(1)] = (8));

} else {
var statearr_29308_29334 = state_29304__$1;
(statearr_29308_29334[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (1))){
var inst_29275 = cljs.core.vec.call(null,chs);
var inst_29276 = inst_29275;
var state_29304__$1 = (function (){var statearr_29309 = state_29304;
(statearr_29309[(10)] = inst_29276);

return statearr_29309;
})();
var statearr_29310_29335 = state_29304__$1;
(statearr_29310_29335[(2)] = null);

(statearr_29310_29335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (4))){
var inst_29276 = (state_29304[(10)]);
var state_29304__$1 = state_29304;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29304__$1,(7),inst_29276);
} else {
if((state_val_29305 === (6))){
var inst_29300 = (state_29304[(2)]);
var state_29304__$1 = state_29304;
var statearr_29311_29336 = state_29304__$1;
(statearr_29311_29336[(2)] = inst_29300);

(statearr_29311_29336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (3))){
var inst_29302 = (state_29304[(2)]);
var state_29304__$1 = state_29304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29304__$1,inst_29302);
} else {
if((state_val_29305 === (2))){
var inst_29276 = (state_29304[(10)]);
var inst_29278 = cljs.core.count.call(null,inst_29276);
var inst_29279 = (inst_29278 > (0));
var state_29304__$1 = state_29304;
if(cljs.core.truth_(inst_29279)){
var statearr_29313_29337 = state_29304__$1;
(statearr_29313_29337[(1)] = (4));

} else {
var statearr_29314_29338 = state_29304__$1;
(statearr_29314_29338[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (11))){
var inst_29276 = (state_29304[(10)]);
var inst_29293 = (state_29304[(2)]);
var tmp29312 = inst_29276;
var inst_29276__$1 = tmp29312;
var state_29304__$1 = (function (){var statearr_29315 = state_29304;
(statearr_29315[(11)] = inst_29293);

(statearr_29315[(10)] = inst_29276__$1);

return statearr_29315;
})();
var statearr_29316_29339 = state_29304__$1;
(statearr_29316_29339[(2)] = null);

(statearr_29316_29339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (9))){
var inst_29284 = (state_29304[(8)]);
var state_29304__$1 = state_29304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29304__$1,(11),out,inst_29284);
} else {
if((state_val_29305 === (5))){
var inst_29298 = cljs.core.async.close_BANG_.call(null,out);
var state_29304__$1 = state_29304;
var statearr_29317_29340 = state_29304__$1;
(statearr_29317_29340[(2)] = inst_29298);

(statearr_29317_29340[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (10))){
var inst_29296 = (state_29304[(2)]);
var state_29304__$1 = state_29304;
var statearr_29318_29341 = state_29304__$1;
(statearr_29318_29341[(2)] = inst_29296);

(statearr_29318_29341[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (8))){
var inst_29283 = (state_29304[(7)]);
var inst_29284 = (state_29304[(8)]);
var inst_29285 = (state_29304[(9)]);
var inst_29276 = (state_29304[(10)]);
var inst_29288 = (function (){var cs = inst_29276;
var vec__29281 = inst_29283;
var v = inst_29284;
var c = inst_29285;
return ((function (cs,vec__29281,v,c,inst_29283,inst_29284,inst_29285,inst_29276,state_val_29305,c__27234__auto___29332,out){
return (function (p1__29271_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29271_SHARP_);
});
;})(cs,vec__29281,v,c,inst_29283,inst_29284,inst_29285,inst_29276,state_val_29305,c__27234__auto___29332,out))
})();
var inst_29289 = cljs.core.filterv.call(null,inst_29288,inst_29276);
var inst_29276__$1 = inst_29289;
var state_29304__$1 = (function (){var statearr_29319 = state_29304;
(statearr_29319[(10)] = inst_29276__$1);

return statearr_29319;
})();
var statearr_29320_29342 = state_29304__$1;
(statearr_29320_29342[(2)] = null);

(statearr_29320_29342[(1)] = (2));


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
});})(c__27234__auto___29332,out))
;
return ((function (switch__26547__auto__,c__27234__auto___29332,out){
return (function() {
var cljs$core$async$state_machine__26548__auto__ = null;
var cljs$core$async$state_machine__26548__auto____0 = (function (){
var statearr_29324 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29324[(0)] = cljs$core$async$state_machine__26548__auto__);

(statearr_29324[(1)] = (1));

return statearr_29324;
});
var cljs$core$async$state_machine__26548__auto____1 = (function (state_29304){
while(true){
var ret_value__26549__auto__ = (function (){try{while(true){
var result__26550__auto__ = switch__26547__auto__.call(null,state_29304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26550__auto__;
}
break;
}
}catch (e29325){if((e29325 instanceof Object)){
var ex__26551__auto__ = e29325;
var statearr_29326_29343 = state_29304;
(statearr_29326_29343[(5)] = ex__26551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29344 = state_29304;
state_29304 = G__29344;
continue;
} else {
return ret_value__26549__auto__;
}
break;
}
});
cljs$core$async$state_machine__26548__auto__ = function(state_29304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26548__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26548__auto____1.call(this,state_29304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26548__auto____0;
cljs$core$async$state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26548__auto____1;
return cljs$core$async$state_machine__26548__auto__;
})()
;})(switch__26547__auto__,c__27234__auto___29332,out))
})();
var state__27236__auto__ = (function (){var statearr_29327 = f__27235__auto__.call(null);
(statearr_29327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27234__auto___29332);

return statearr_29327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27236__auto__);
});})(c__27234__auto___29332,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args29345 = [];
var len__25604__auto___29394 = arguments.length;
var i__25605__auto___29395 = (0);
while(true){
if((i__25605__auto___29395 < len__25604__auto___29394)){
args29345.push((arguments[i__25605__auto___29395]));

var G__29396 = (i__25605__auto___29395 + (1));
i__25605__auto___29395 = G__29396;
continue;
} else {
}
break;
}

var G__29347 = args29345.length;
switch (G__29347) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29345.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27234__auto___29398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27234__auto___29398,out){
return (function (){
var f__27235__auto__ = (function (){var switch__26547__auto__ = ((function (c__27234__auto___29398,out){
return (function (state_29371){
var state_val_29372 = (state_29371[(1)]);
if((state_val_29372 === (7))){
var inst_29353 = (state_29371[(7)]);
var inst_29353__$1 = (state_29371[(2)]);
var inst_29354 = (inst_29353__$1 == null);
var inst_29355 = cljs.core.not.call(null,inst_29354);
var state_29371__$1 = (function (){var statearr_29373 = state_29371;
(statearr_29373[(7)] = inst_29353__$1);

return statearr_29373;
})();
if(inst_29355){
var statearr_29374_29399 = state_29371__$1;
(statearr_29374_29399[(1)] = (8));

} else {
var statearr_29375_29400 = state_29371__$1;
(statearr_29375_29400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29372 === (1))){
var inst_29348 = (0);
var state_29371__$1 = (function (){var statearr_29376 = state_29371;
(statearr_29376[(8)] = inst_29348);

return statearr_29376;
})();
var statearr_29377_29401 = state_29371__$1;
(statearr_29377_29401[(2)] = null);

(statearr_29377_29401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29372 === (4))){
var state_29371__$1 = state_29371;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29371__$1,(7),ch);
} else {
if((state_val_29372 === (6))){
var inst_29366 = (state_29371[(2)]);
var state_29371__$1 = state_29371;
var statearr_29378_29402 = state_29371__$1;
(statearr_29378_29402[(2)] = inst_29366);

(statearr_29378_29402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29372 === (3))){
var inst_29368 = (state_29371[(2)]);
var inst_29369 = cljs.core.async.close_BANG_.call(null,out);
var state_29371__$1 = (function (){var statearr_29379 = state_29371;
(statearr_29379[(9)] = inst_29368);

return statearr_29379;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29371__$1,inst_29369);
} else {
if((state_val_29372 === (2))){
var inst_29348 = (state_29371[(8)]);
var inst_29350 = (inst_29348 < n);
var state_29371__$1 = state_29371;
if(cljs.core.truth_(inst_29350)){
var statearr_29380_29403 = state_29371__$1;
(statearr_29380_29403[(1)] = (4));

} else {
var statearr_29381_29404 = state_29371__$1;
(statearr_29381_29404[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29372 === (11))){
var inst_29348 = (state_29371[(8)]);
var inst_29358 = (state_29371[(2)]);
var inst_29359 = (inst_29348 + (1));
var inst_29348__$1 = inst_29359;
var state_29371__$1 = (function (){var statearr_29382 = state_29371;
(statearr_29382[(8)] = inst_29348__$1);

(statearr_29382[(10)] = inst_29358);

return statearr_29382;
})();
var statearr_29383_29405 = state_29371__$1;
(statearr_29383_29405[(2)] = null);

(statearr_29383_29405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29372 === (9))){
var state_29371__$1 = state_29371;
var statearr_29384_29406 = state_29371__$1;
(statearr_29384_29406[(2)] = null);

(statearr_29384_29406[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29372 === (5))){
var state_29371__$1 = state_29371;
var statearr_29385_29407 = state_29371__$1;
(statearr_29385_29407[(2)] = null);

(statearr_29385_29407[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29372 === (10))){
var inst_29363 = (state_29371[(2)]);
var state_29371__$1 = state_29371;
var statearr_29386_29408 = state_29371__$1;
(statearr_29386_29408[(2)] = inst_29363);

(statearr_29386_29408[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29372 === (8))){
var inst_29353 = (state_29371[(7)]);
var state_29371__$1 = state_29371;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29371__$1,(11),out,inst_29353);
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
});})(c__27234__auto___29398,out))
;
return ((function (switch__26547__auto__,c__27234__auto___29398,out){
return (function() {
var cljs$core$async$state_machine__26548__auto__ = null;
var cljs$core$async$state_machine__26548__auto____0 = (function (){
var statearr_29390 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29390[(0)] = cljs$core$async$state_machine__26548__auto__);

(statearr_29390[(1)] = (1));

return statearr_29390;
});
var cljs$core$async$state_machine__26548__auto____1 = (function (state_29371){
while(true){
var ret_value__26549__auto__ = (function (){try{while(true){
var result__26550__auto__ = switch__26547__auto__.call(null,state_29371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26550__auto__;
}
break;
}
}catch (e29391){if((e29391 instanceof Object)){
var ex__26551__auto__ = e29391;
var statearr_29392_29409 = state_29371;
(statearr_29392_29409[(5)] = ex__26551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29410 = state_29371;
state_29371 = G__29410;
continue;
} else {
return ret_value__26549__auto__;
}
break;
}
});
cljs$core$async$state_machine__26548__auto__ = function(state_29371){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26548__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26548__auto____1.call(this,state_29371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26548__auto____0;
cljs$core$async$state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26548__auto____1;
return cljs$core$async$state_machine__26548__auto__;
})()
;})(switch__26547__auto__,c__27234__auto___29398,out))
})();
var state__27236__auto__ = (function (){var statearr_29393 = f__27235__auto__.call(null);
(statearr_29393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27234__auto___29398);

return statearr_29393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27236__auto__);
});})(c__27234__auto___29398,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29418 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29418 = (function (map_LT_,f,ch,meta29419){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29419 = meta29419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29420,meta29419__$1){
var self__ = this;
var _29420__$1 = this;
return (new cljs.core.async.t_cljs$core$async29418(self__.map_LT_,self__.f,self__.ch,meta29419__$1));
});

cljs.core.async.t_cljs$core$async29418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29420){
var self__ = this;
var _29420__$1 = this;
return self__.meta29419;
});

cljs.core.async.t_cljs$core$async29418.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29418.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29418.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29418.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29418.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29421 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29421 = (function (map_LT_,f,ch,meta29419,_,fn1,meta29422){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29419 = meta29419;
this._ = _;
this.fn1 = fn1;
this.meta29422 = meta29422;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29423,meta29422__$1){
var self__ = this;
var _29423__$1 = this;
return (new cljs.core.async.t_cljs$core$async29421(self__.map_LT_,self__.f,self__.ch,self__.meta29419,self__._,self__.fn1,meta29422__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29421.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29423){
var self__ = this;
var _29423__$1 = this;
return self__.meta29422;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29421.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29421.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29421.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29421.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29411_SHARP_){
return f1.call(null,(((p1__29411_SHARP_ == null))?null:self__.f.call(null,p1__29411_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29421.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29419","meta29419",-965696403,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29418","cljs.core.async/t_cljs$core$async29418",-487553655,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29422","meta29422",-1977685857,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29421.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29421.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29421";

cljs.core.async.t_cljs$core$async29421.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25140__auto__,writer__25141__auto__,opt__25142__auto__){
return cljs.core._write.call(null,writer__25141__auto__,"cljs.core.async/t_cljs$core$async29421");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29421 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29421(map_LT___$1,f__$1,ch__$1,meta29419__$1,___$2,fn1__$1,meta29422){
return (new cljs.core.async.t_cljs$core$async29421(map_LT___$1,f__$1,ch__$1,meta29419__$1,___$2,fn1__$1,meta29422));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29421(self__.map_LT_,self__.f,self__.ch,self__.meta29419,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24522__auto__ = ret;
if(cljs.core.truth_(and__24522__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24522__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29418.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29418.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29418.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29419","meta29419",-965696403,null)], null);
});

cljs.core.async.t_cljs$core$async29418.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29418";

cljs.core.async.t_cljs$core$async29418.cljs$lang$ctorPrWriter = (function (this__25140__auto__,writer__25141__auto__,opt__25142__auto__){
return cljs.core._write.call(null,writer__25141__auto__,"cljs.core.async/t_cljs$core$async29418");
});

cljs.core.async.__GT_t_cljs$core$async29418 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29418(map_LT___$1,f__$1,ch__$1,meta29419){
return (new cljs.core.async.t_cljs$core$async29418(map_LT___$1,f__$1,ch__$1,meta29419));
});

}

return (new cljs.core.async.t_cljs$core$async29418(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29427 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29427 = (function (map_GT_,f,ch,meta29428){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29428 = meta29428;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29429,meta29428__$1){
var self__ = this;
var _29429__$1 = this;
return (new cljs.core.async.t_cljs$core$async29427(self__.map_GT_,self__.f,self__.ch,meta29428__$1));
});

cljs.core.async.t_cljs$core$async29427.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29429){
var self__ = this;
var _29429__$1 = this;
return self__.meta29428;
});

cljs.core.async.t_cljs$core$async29427.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29427.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29427.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29427.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29427.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29427.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29427.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29428","meta29428",1827456527,null)], null);
});

cljs.core.async.t_cljs$core$async29427.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29427.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29427";

cljs.core.async.t_cljs$core$async29427.cljs$lang$ctorPrWriter = (function (this__25140__auto__,writer__25141__auto__,opt__25142__auto__){
return cljs.core._write.call(null,writer__25141__auto__,"cljs.core.async/t_cljs$core$async29427");
});

cljs.core.async.__GT_t_cljs$core$async29427 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29427(map_GT___$1,f__$1,ch__$1,meta29428){
return (new cljs.core.async.t_cljs$core$async29427(map_GT___$1,f__$1,ch__$1,meta29428));
});

}

return (new cljs.core.async.t_cljs$core$async29427(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29433 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29433 = (function (filter_GT_,p,ch,meta29434){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29434 = meta29434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29435,meta29434__$1){
var self__ = this;
var _29435__$1 = this;
return (new cljs.core.async.t_cljs$core$async29433(self__.filter_GT_,self__.p,self__.ch,meta29434__$1));
});

cljs.core.async.t_cljs$core$async29433.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29435){
var self__ = this;
var _29435__$1 = this;
return self__.meta29434;
});

cljs.core.async.t_cljs$core$async29433.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29433.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29433.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29433.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29433.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29433.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29433.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29433.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29434","meta29434",-371633386,null)], null);
});

cljs.core.async.t_cljs$core$async29433.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29433.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29433";

cljs.core.async.t_cljs$core$async29433.cljs$lang$ctorPrWriter = (function (this__25140__auto__,writer__25141__auto__,opt__25142__auto__){
return cljs.core._write.call(null,writer__25141__auto__,"cljs.core.async/t_cljs$core$async29433");
});

cljs.core.async.__GT_t_cljs$core$async29433 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29433(filter_GT___$1,p__$1,ch__$1,meta29434){
return (new cljs.core.async.t_cljs$core$async29433(filter_GT___$1,p__$1,ch__$1,meta29434));
});

}

return (new cljs.core.async.t_cljs$core$async29433(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args29436 = [];
var len__25604__auto___29480 = arguments.length;
var i__25605__auto___29481 = (0);
while(true){
if((i__25605__auto___29481 < len__25604__auto___29480)){
args29436.push((arguments[i__25605__auto___29481]));

var G__29482 = (i__25605__auto___29481 + (1));
i__25605__auto___29481 = G__29482;
continue;
} else {
}
break;
}

var G__29438 = args29436.length;
switch (G__29438) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29436.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27234__auto___29484 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27234__auto___29484,out){
return (function (){
var f__27235__auto__ = (function (){var switch__26547__auto__ = ((function (c__27234__auto___29484,out){
return (function (state_29459){
var state_val_29460 = (state_29459[(1)]);
if((state_val_29460 === (7))){
var inst_29455 = (state_29459[(2)]);
var state_29459__$1 = state_29459;
var statearr_29461_29485 = state_29459__$1;
(statearr_29461_29485[(2)] = inst_29455);

(statearr_29461_29485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29460 === (1))){
var state_29459__$1 = state_29459;
var statearr_29462_29486 = state_29459__$1;
(statearr_29462_29486[(2)] = null);

(statearr_29462_29486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29460 === (4))){
var inst_29441 = (state_29459[(7)]);
var inst_29441__$1 = (state_29459[(2)]);
var inst_29442 = (inst_29441__$1 == null);
var state_29459__$1 = (function (){var statearr_29463 = state_29459;
(statearr_29463[(7)] = inst_29441__$1);

return statearr_29463;
})();
if(cljs.core.truth_(inst_29442)){
var statearr_29464_29487 = state_29459__$1;
(statearr_29464_29487[(1)] = (5));

} else {
var statearr_29465_29488 = state_29459__$1;
(statearr_29465_29488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29460 === (6))){
var inst_29441 = (state_29459[(7)]);
var inst_29446 = p.call(null,inst_29441);
var state_29459__$1 = state_29459;
if(cljs.core.truth_(inst_29446)){
var statearr_29466_29489 = state_29459__$1;
(statearr_29466_29489[(1)] = (8));

} else {
var statearr_29467_29490 = state_29459__$1;
(statearr_29467_29490[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29460 === (3))){
var inst_29457 = (state_29459[(2)]);
var state_29459__$1 = state_29459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29459__$1,inst_29457);
} else {
if((state_val_29460 === (2))){
var state_29459__$1 = state_29459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29459__$1,(4),ch);
} else {
if((state_val_29460 === (11))){
var inst_29449 = (state_29459[(2)]);
var state_29459__$1 = state_29459;
var statearr_29468_29491 = state_29459__$1;
(statearr_29468_29491[(2)] = inst_29449);

(statearr_29468_29491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29460 === (9))){
var state_29459__$1 = state_29459;
var statearr_29469_29492 = state_29459__$1;
(statearr_29469_29492[(2)] = null);

(statearr_29469_29492[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29460 === (5))){
var inst_29444 = cljs.core.async.close_BANG_.call(null,out);
var state_29459__$1 = state_29459;
var statearr_29470_29493 = state_29459__$1;
(statearr_29470_29493[(2)] = inst_29444);

(statearr_29470_29493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29460 === (10))){
var inst_29452 = (state_29459[(2)]);
var state_29459__$1 = (function (){var statearr_29471 = state_29459;
(statearr_29471[(8)] = inst_29452);

return statearr_29471;
})();
var statearr_29472_29494 = state_29459__$1;
(statearr_29472_29494[(2)] = null);

(statearr_29472_29494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29460 === (8))){
var inst_29441 = (state_29459[(7)]);
var state_29459__$1 = state_29459;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29459__$1,(11),out,inst_29441);
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
});})(c__27234__auto___29484,out))
;
return ((function (switch__26547__auto__,c__27234__auto___29484,out){
return (function() {
var cljs$core$async$state_machine__26548__auto__ = null;
var cljs$core$async$state_machine__26548__auto____0 = (function (){
var statearr_29476 = [null,null,null,null,null,null,null,null,null];
(statearr_29476[(0)] = cljs$core$async$state_machine__26548__auto__);

(statearr_29476[(1)] = (1));

return statearr_29476;
});
var cljs$core$async$state_machine__26548__auto____1 = (function (state_29459){
while(true){
var ret_value__26549__auto__ = (function (){try{while(true){
var result__26550__auto__ = switch__26547__auto__.call(null,state_29459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26550__auto__;
}
break;
}
}catch (e29477){if((e29477 instanceof Object)){
var ex__26551__auto__ = e29477;
var statearr_29478_29495 = state_29459;
(statearr_29478_29495[(5)] = ex__26551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29496 = state_29459;
state_29459 = G__29496;
continue;
} else {
return ret_value__26549__auto__;
}
break;
}
});
cljs$core$async$state_machine__26548__auto__ = function(state_29459){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26548__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26548__auto____1.call(this,state_29459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26548__auto____0;
cljs$core$async$state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26548__auto____1;
return cljs$core$async$state_machine__26548__auto__;
})()
;})(switch__26547__auto__,c__27234__auto___29484,out))
})();
var state__27236__auto__ = (function (){var statearr_29479 = f__27235__auto__.call(null);
(statearr_29479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27234__auto___29484);

return statearr_29479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27236__auto__);
});})(c__27234__auto___29484,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29497 = [];
var len__25604__auto___29500 = arguments.length;
var i__25605__auto___29501 = (0);
while(true){
if((i__25605__auto___29501 < len__25604__auto___29500)){
args29497.push((arguments[i__25605__auto___29501]));

var G__29502 = (i__25605__auto___29501 + (1));
i__25605__auto___29501 = G__29502;
continue;
} else {
}
break;
}

var G__29499 = args29497.length;
switch (G__29499) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29497.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27234__auto__){
return (function (){
var f__27235__auto__ = (function (){var switch__26547__auto__ = ((function (c__27234__auto__){
return (function (state_29669){
var state_val_29670 = (state_29669[(1)]);
if((state_val_29670 === (7))){
var inst_29665 = (state_29669[(2)]);
var state_29669__$1 = state_29669;
var statearr_29671_29712 = state_29669__$1;
(statearr_29671_29712[(2)] = inst_29665);

(statearr_29671_29712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (20))){
var inst_29635 = (state_29669[(7)]);
var inst_29646 = (state_29669[(2)]);
var inst_29647 = cljs.core.next.call(null,inst_29635);
var inst_29621 = inst_29647;
var inst_29622 = null;
var inst_29623 = (0);
var inst_29624 = (0);
var state_29669__$1 = (function (){var statearr_29672 = state_29669;
(statearr_29672[(8)] = inst_29646);

(statearr_29672[(9)] = inst_29623);

(statearr_29672[(10)] = inst_29624);

(statearr_29672[(11)] = inst_29622);

(statearr_29672[(12)] = inst_29621);

return statearr_29672;
})();
var statearr_29673_29713 = state_29669__$1;
(statearr_29673_29713[(2)] = null);

(statearr_29673_29713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (1))){
var state_29669__$1 = state_29669;
var statearr_29674_29714 = state_29669__$1;
(statearr_29674_29714[(2)] = null);

(statearr_29674_29714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (4))){
var inst_29610 = (state_29669[(13)]);
var inst_29610__$1 = (state_29669[(2)]);
var inst_29611 = (inst_29610__$1 == null);
var state_29669__$1 = (function (){var statearr_29675 = state_29669;
(statearr_29675[(13)] = inst_29610__$1);

return statearr_29675;
})();
if(cljs.core.truth_(inst_29611)){
var statearr_29676_29715 = state_29669__$1;
(statearr_29676_29715[(1)] = (5));

} else {
var statearr_29677_29716 = state_29669__$1;
(statearr_29677_29716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (15))){
var state_29669__$1 = state_29669;
var statearr_29681_29717 = state_29669__$1;
(statearr_29681_29717[(2)] = null);

(statearr_29681_29717[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (21))){
var state_29669__$1 = state_29669;
var statearr_29682_29718 = state_29669__$1;
(statearr_29682_29718[(2)] = null);

(statearr_29682_29718[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (13))){
var inst_29623 = (state_29669[(9)]);
var inst_29624 = (state_29669[(10)]);
var inst_29622 = (state_29669[(11)]);
var inst_29621 = (state_29669[(12)]);
var inst_29631 = (state_29669[(2)]);
var inst_29632 = (inst_29624 + (1));
var tmp29678 = inst_29623;
var tmp29679 = inst_29622;
var tmp29680 = inst_29621;
var inst_29621__$1 = tmp29680;
var inst_29622__$1 = tmp29679;
var inst_29623__$1 = tmp29678;
var inst_29624__$1 = inst_29632;
var state_29669__$1 = (function (){var statearr_29683 = state_29669;
(statearr_29683[(9)] = inst_29623__$1);

(statearr_29683[(10)] = inst_29624__$1);

(statearr_29683[(14)] = inst_29631);

(statearr_29683[(11)] = inst_29622__$1);

(statearr_29683[(12)] = inst_29621__$1);

return statearr_29683;
})();
var statearr_29684_29719 = state_29669__$1;
(statearr_29684_29719[(2)] = null);

(statearr_29684_29719[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (22))){
var state_29669__$1 = state_29669;
var statearr_29685_29720 = state_29669__$1;
(statearr_29685_29720[(2)] = null);

(statearr_29685_29720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (6))){
var inst_29610 = (state_29669[(13)]);
var inst_29619 = f.call(null,inst_29610);
var inst_29620 = cljs.core.seq.call(null,inst_29619);
var inst_29621 = inst_29620;
var inst_29622 = null;
var inst_29623 = (0);
var inst_29624 = (0);
var state_29669__$1 = (function (){var statearr_29686 = state_29669;
(statearr_29686[(9)] = inst_29623);

(statearr_29686[(10)] = inst_29624);

(statearr_29686[(11)] = inst_29622);

(statearr_29686[(12)] = inst_29621);

return statearr_29686;
})();
var statearr_29687_29721 = state_29669__$1;
(statearr_29687_29721[(2)] = null);

(statearr_29687_29721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (17))){
var inst_29635 = (state_29669[(7)]);
var inst_29639 = cljs.core.chunk_first.call(null,inst_29635);
var inst_29640 = cljs.core.chunk_rest.call(null,inst_29635);
var inst_29641 = cljs.core.count.call(null,inst_29639);
var inst_29621 = inst_29640;
var inst_29622 = inst_29639;
var inst_29623 = inst_29641;
var inst_29624 = (0);
var state_29669__$1 = (function (){var statearr_29688 = state_29669;
(statearr_29688[(9)] = inst_29623);

(statearr_29688[(10)] = inst_29624);

(statearr_29688[(11)] = inst_29622);

(statearr_29688[(12)] = inst_29621);

return statearr_29688;
})();
var statearr_29689_29722 = state_29669__$1;
(statearr_29689_29722[(2)] = null);

(statearr_29689_29722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (3))){
var inst_29667 = (state_29669[(2)]);
var state_29669__$1 = state_29669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29669__$1,inst_29667);
} else {
if((state_val_29670 === (12))){
var inst_29655 = (state_29669[(2)]);
var state_29669__$1 = state_29669;
var statearr_29690_29723 = state_29669__$1;
(statearr_29690_29723[(2)] = inst_29655);

(statearr_29690_29723[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (2))){
var state_29669__$1 = state_29669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29669__$1,(4),in$);
} else {
if((state_val_29670 === (23))){
var inst_29663 = (state_29669[(2)]);
var state_29669__$1 = state_29669;
var statearr_29691_29724 = state_29669__$1;
(statearr_29691_29724[(2)] = inst_29663);

(statearr_29691_29724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (19))){
var inst_29650 = (state_29669[(2)]);
var state_29669__$1 = state_29669;
var statearr_29692_29725 = state_29669__$1;
(statearr_29692_29725[(2)] = inst_29650);

(statearr_29692_29725[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (11))){
var inst_29635 = (state_29669[(7)]);
var inst_29621 = (state_29669[(12)]);
var inst_29635__$1 = cljs.core.seq.call(null,inst_29621);
var state_29669__$1 = (function (){var statearr_29693 = state_29669;
(statearr_29693[(7)] = inst_29635__$1);

return statearr_29693;
})();
if(inst_29635__$1){
var statearr_29694_29726 = state_29669__$1;
(statearr_29694_29726[(1)] = (14));

} else {
var statearr_29695_29727 = state_29669__$1;
(statearr_29695_29727[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (9))){
var inst_29657 = (state_29669[(2)]);
var inst_29658 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29669__$1 = (function (){var statearr_29696 = state_29669;
(statearr_29696[(15)] = inst_29657);

return statearr_29696;
})();
if(cljs.core.truth_(inst_29658)){
var statearr_29697_29728 = state_29669__$1;
(statearr_29697_29728[(1)] = (21));

} else {
var statearr_29698_29729 = state_29669__$1;
(statearr_29698_29729[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (5))){
var inst_29613 = cljs.core.async.close_BANG_.call(null,out);
var state_29669__$1 = state_29669;
var statearr_29699_29730 = state_29669__$1;
(statearr_29699_29730[(2)] = inst_29613);

(statearr_29699_29730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (14))){
var inst_29635 = (state_29669[(7)]);
var inst_29637 = cljs.core.chunked_seq_QMARK_.call(null,inst_29635);
var state_29669__$1 = state_29669;
if(inst_29637){
var statearr_29700_29731 = state_29669__$1;
(statearr_29700_29731[(1)] = (17));

} else {
var statearr_29701_29732 = state_29669__$1;
(statearr_29701_29732[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (16))){
var inst_29653 = (state_29669[(2)]);
var state_29669__$1 = state_29669;
var statearr_29702_29733 = state_29669__$1;
(statearr_29702_29733[(2)] = inst_29653);

(statearr_29702_29733[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29670 === (10))){
var inst_29624 = (state_29669[(10)]);
var inst_29622 = (state_29669[(11)]);
var inst_29629 = cljs.core._nth.call(null,inst_29622,inst_29624);
var state_29669__$1 = state_29669;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29669__$1,(13),out,inst_29629);
} else {
if((state_val_29670 === (18))){
var inst_29635 = (state_29669[(7)]);
var inst_29644 = cljs.core.first.call(null,inst_29635);
var state_29669__$1 = state_29669;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29669__$1,(20),out,inst_29644);
} else {
if((state_val_29670 === (8))){
var inst_29623 = (state_29669[(9)]);
var inst_29624 = (state_29669[(10)]);
var inst_29626 = (inst_29624 < inst_29623);
var inst_29627 = inst_29626;
var state_29669__$1 = state_29669;
if(cljs.core.truth_(inst_29627)){
var statearr_29703_29734 = state_29669__$1;
(statearr_29703_29734[(1)] = (10));

} else {
var statearr_29704_29735 = state_29669__$1;
(statearr_29704_29735[(1)] = (11));

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
});})(c__27234__auto__))
;
return ((function (switch__26547__auto__,c__27234__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26548__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26548__auto____0 = (function (){
var statearr_29708 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29708[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26548__auto__);

(statearr_29708[(1)] = (1));

return statearr_29708;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26548__auto____1 = (function (state_29669){
while(true){
var ret_value__26549__auto__ = (function (){try{while(true){
var result__26550__auto__ = switch__26547__auto__.call(null,state_29669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26550__auto__;
}
break;
}
}catch (e29709){if((e29709 instanceof Object)){
var ex__26551__auto__ = e29709;
var statearr_29710_29736 = state_29669;
(statearr_29710_29736[(5)] = ex__26551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29737 = state_29669;
state_29669 = G__29737;
continue;
} else {
return ret_value__26549__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26548__auto__ = function(state_29669){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26548__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26548__auto____1.call(this,state_29669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26548__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26548__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26548__auto__;
})()
;})(switch__26547__auto__,c__27234__auto__))
})();
var state__27236__auto__ = (function (){var statearr_29711 = f__27235__auto__.call(null);
(statearr_29711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27234__auto__);

return statearr_29711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27236__auto__);
});})(c__27234__auto__))
);

return c__27234__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29738 = [];
var len__25604__auto___29741 = arguments.length;
var i__25605__auto___29742 = (0);
while(true){
if((i__25605__auto___29742 < len__25604__auto___29741)){
args29738.push((arguments[i__25605__auto___29742]));

var G__29743 = (i__25605__auto___29742 + (1));
i__25605__auto___29742 = G__29743;
continue;
} else {
}
break;
}

var G__29740 = args29738.length;
switch (G__29740) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29738.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args29745 = [];
var len__25604__auto___29748 = arguments.length;
var i__25605__auto___29749 = (0);
while(true){
if((i__25605__auto___29749 < len__25604__auto___29748)){
args29745.push((arguments[i__25605__auto___29749]));

var G__29750 = (i__25605__auto___29749 + (1));
i__25605__auto___29749 = G__29750;
continue;
} else {
}
break;
}

var G__29747 = args29745.length;
switch (G__29747) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29745.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args29752 = [];
var len__25604__auto___29803 = arguments.length;
var i__25605__auto___29804 = (0);
while(true){
if((i__25605__auto___29804 < len__25604__auto___29803)){
args29752.push((arguments[i__25605__auto___29804]));

var G__29805 = (i__25605__auto___29804 + (1));
i__25605__auto___29804 = G__29805;
continue;
} else {
}
break;
}

var G__29754 = args29752.length;
switch (G__29754) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29752.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27234__auto___29807 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27234__auto___29807,out){
return (function (){
var f__27235__auto__ = (function (){var switch__26547__auto__ = ((function (c__27234__auto___29807,out){
return (function (state_29778){
var state_val_29779 = (state_29778[(1)]);
if((state_val_29779 === (7))){
var inst_29773 = (state_29778[(2)]);
var state_29778__$1 = state_29778;
var statearr_29780_29808 = state_29778__$1;
(statearr_29780_29808[(2)] = inst_29773);

(statearr_29780_29808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29779 === (1))){
var inst_29755 = null;
var state_29778__$1 = (function (){var statearr_29781 = state_29778;
(statearr_29781[(7)] = inst_29755);

return statearr_29781;
})();
var statearr_29782_29809 = state_29778__$1;
(statearr_29782_29809[(2)] = null);

(statearr_29782_29809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29779 === (4))){
var inst_29758 = (state_29778[(8)]);
var inst_29758__$1 = (state_29778[(2)]);
var inst_29759 = (inst_29758__$1 == null);
var inst_29760 = cljs.core.not.call(null,inst_29759);
var state_29778__$1 = (function (){var statearr_29783 = state_29778;
(statearr_29783[(8)] = inst_29758__$1);

return statearr_29783;
})();
if(inst_29760){
var statearr_29784_29810 = state_29778__$1;
(statearr_29784_29810[(1)] = (5));

} else {
var statearr_29785_29811 = state_29778__$1;
(statearr_29785_29811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29779 === (6))){
var state_29778__$1 = state_29778;
var statearr_29786_29812 = state_29778__$1;
(statearr_29786_29812[(2)] = null);

(statearr_29786_29812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29779 === (3))){
var inst_29775 = (state_29778[(2)]);
var inst_29776 = cljs.core.async.close_BANG_.call(null,out);
var state_29778__$1 = (function (){var statearr_29787 = state_29778;
(statearr_29787[(9)] = inst_29775);

return statearr_29787;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29778__$1,inst_29776);
} else {
if((state_val_29779 === (2))){
var state_29778__$1 = state_29778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29778__$1,(4),ch);
} else {
if((state_val_29779 === (11))){
var inst_29758 = (state_29778[(8)]);
var inst_29767 = (state_29778[(2)]);
var inst_29755 = inst_29758;
var state_29778__$1 = (function (){var statearr_29788 = state_29778;
(statearr_29788[(7)] = inst_29755);

(statearr_29788[(10)] = inst_29767);

return statearr_29788;
})();
var statearr_29789_29813 = state_29778__$1;
(statearr_29789_29813[(2)] = null);

(statearr_29789_29813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29779 === (9))){
var inst_29758 = (state_29778[(8)]);
var state_29778__$1 = state_29778;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29778__$1,(11),out,inst_29758);
} else {
if((state_val_29779 === (5))){
var inst_29755 = (state_29778[(7)]);
var inst_29758 = (state_29778[(8)]);
var inst_29762 = cljs.core._EQ_.call(null,inst_29758,inst_29755);
var state_29778__$1 = state_29778;
if(inst_29762){
var statearr_29791_29814 = state_29778__$1;
(statearr_29791_29814[(1)] = (8));

} else {
var statearr_29792_29815 = state_29778__$1;
(statearr_29792_29815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29779 === (10))){
var inst_29770 = (state_29778[(2)]);
var state_29778__$1 = state_29778;
var statearr_29793_29816 = state_29778__$1;
(statearr_29793_29816[(2)] = inst_29770);

(statearr_29793_29816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29779 === (8))){
var inst_29755 = (state_29778[(7)]);
var tmp29790 = inst_29755;
var inst_29755__$1 = tmp29790;
var state_29778__$1 = (function (){var statearr_29794 = state_29778;
(statearr_29794[(7)] = inst_29755__$1);

return statearr_29794;
})();
var statearr_29795_29817 = state_29778__$1;
(statearr_29795_29817[(2)] = null);

(statearr_29795_29817[(1)] = (2));


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
});})(c__27234__auto___29807,out))
;
return ((function (switch__26547__auto__,c__27234__auto___29807,out){
return (function() {
var cljs$core$async$state_machine__26548__auto__ = null;
var cljs$core$async$state_machine__26548__auto____0 = (function (){
var statearr_29799 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29799[(0)] = cljs$core$async$state_machine__26548__auto__);

(statearr_29799[(1)] = (1));

return statearr_29799;
});
var cljs$core$async$state_machine__26548__auto____1 = (function (state_29778){
while(true){
var ret_value__26549__auto__ = (function (){try{while(true){
var result__26550__auto__ = switch__26547__auto__.call(null,state_29778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26550__auto__;
}
break;
}
}catch (e29800){if((e29800 instanceof Object)){
var ex__26551__auto__ = e29800;
var statearr_29801_29818 = state_29778;
(statearr_29801_29818[(5)] = ex__26551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29819 = state_29778;
state_29778 = G__29819;
continue;
} else {
return ret_value__26549__auto__;
}
break;
}
});
cljs$core$async$state_machine__26548__auto__ = function(state_29778){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26548__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26548__auto____1.call(this,state_29778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26548__auto____0;
cljs$core$async$state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26548__auto____1;
return cljs$core$async$state_machine__26548__auto__;
})()
;})(switch__26547__auto__,c__27234__auto___29807,out))
})();
var state__27236__auto__ = (function (){var statearr_29802 = f__27235__auto__.call(null);
(statearr_29802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27234__auto___29807);

return statearr_29802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27236__auto__);
});})(c__27234__auto___29807,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29820 = [];
var len__25604__auto___29890 = arguments.length;
var i__25605__auto___29891 = (0);
while(true){
if((i__25605__auto___29891 < len__25604__auto___29890)){
args29820.push((arguments[i__25605__auto___29891]));

var G__29892 = (i__25605__auto___29891 + (1));
i__25605__auto___29891 = G__29892;
continue;
} else {
}
break;
}

var G__29822 = args29820.length;
switch (G__29822) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29820.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27234__auto___29894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27234__auto___29894,out){
return (function (){
var f__27235__auto__ = (function (){var switch__26547__auto__ = ((function (c__27234__auto___29894,out){
return (function (state_29860){
var state_val_29861 = (state_29860[(1)]);
if((state_val_29861 === (7))){
var inst_29856 = (state_29860[(2)]);
var state_29860__$1 = state_29860;
var statearr_29862_29895 = state_29860__$1;
(statearr_29862_29895[(2)] = inst_29856);

(statearr_29862_29895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29861 === (1))){
var inst_29823 = (new Array(n));
var inst_29824 = inst_29823;
var inst_29825 = (0);
var state_29860__$1 = (function (){var statearr_29863 = state_29860;
(statearr_29863[(7)] = inst_29825);

(statearr_29863[(8)] = inst_29824);

return statearr_29863;
})();
var statearr_29864_29896 = state_29860__$1;
(statearr_29864_29896[(2)] = null);

(statearr_29864_29896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29861 === (4))){
var inst_29828 = (state_29860[(9)]);
var inst_29828__$1 = (state_29860[(2)]);
var inst_29829 = (inst_29828__$1 == null);
var inst_29830 = cljs.core.not.call(null,inst_29829);
var state_29860__$1 = (function (){var statearr_29865 = state_29860;
(statearr_29865[(9)] = inst_29828__$1);

return statearr_29865;
})();
if(inst_29830){
var statearr_29866_29897 = state_29860__$1;
(statearr_29866_29897[(1)] = (5));

} else {
var statearr_29867_29898 = state_29860__$1;
(statearr_29867_29898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29861 === (15))){
var inst_29850 = (state_29860[(2)]);
var state_29860__$1 = state_29860;
var statearr_29868_29899 = state_29860__$1;
(statearr_29868_29899[(2)] = inst_29850);

(statearr_29868_29899[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29861 === (13))){
var state_29860__$1 = state_29860;
var statearr_29869_29900 = state_29860__$1;
(statearr_29869_29900[(2)] = null);

(statearr_29869_29900[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29861 === (6))){
var inst_29825 = (state_29860[(7)]);
var inst_29846 = (inst_29825 > (0));
var state_29860__$1 = state_29860;
if(cljs.core.truth_(inst_29846)){
var statearr_29870_29901 = state_29860__$1;
(statearr_29870_29901[(1)] = (12));

} else {
var statearr_29871_29902 = state_29860__$1;
(statearr_29871_29902[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29861 === (3))){
var inst_29858 = (state_29860[(2)]);
var state_29860__$1 = state_29860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29860__$1,inst_29858);
} else {
if((state_val_29861 === (12))){
var inst_29824 = (state_29860[(8)]);
var inst_29848 = cljs.core.vec.call(null,inst_29824);
var state_29860__$1 = state_29860;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29860__$1,(15),out,inst_29848);
} else {
if((state_val_29861 === (2))){
var state_29860__$1 = state_29860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29860__$1,(4),ch);
} else {
if((state_val_29861 === (11))){
var inst_29840 = (state_29860[(2)]);
var inst_29841 = (new Array(n));
var inst_29824 = inst_29841;
var inst_29825 = (0);
var state_29860__$1 = (function (){var statearr_29872 = state_29860;
(statearr_29872[(7)] = inst_29825);

(statearr_29872[(10)] = inst_29840);

(statearr_29872[(8)] = inst_29824);

return statearr_29872;
})();
var statearr_29873_29903 = state_29860__$1;
(statearr_29873_29903[(2)] = null);

(statearr_29873_29903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29861 === (9))){
var inst_29824 = (state_29860[(8)]);
var inst_29838 = cljs.core.vec.call(null,inst_29824);
var state_29860__$1 = state_29860;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29860__$1,(11),out,inst_29838);
} else {
if((state_val_29861 === (5))){
var inst_29833 = (state_29860[(11)]);
var inst_29825 = (state_29860[(7)]);
var inst_29824 = (state_29860[(8)]);
var inst_29828 = (state_29860[(9)]);
var inst_29832 = (inst_29824[inst_29825] = inst_29828);
var inst_29833__$1 = (inst_29825 + (1));
var inst_29834 = (inst_29833__$1 < n);
var state_29860__$1 = (function (){var statearr_29874 = state_29860;
(statearr_29874[(12)] = inst_29832);

(statearr_29874[(11)] = inst_29833__$1);

return statearr_29874;
})();
if(cljs.core.truth_(inst_29834)){
var statearr_29875_29904 = state_29860__$1;
(statearr_29875_29904[(1)] = (8));

} else {
var statearr_29876_29905 = state_29860__$1;
(statearr_29876_29905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29861 === (14))){
var inst_29853 = (state_29860[(2)]);
var inst_29854 = cljs.core.async.close_BANG_.call(null,out);
var state_29860__$1 = (function (){var statearr_29878 = state_29860;
(statearr_29878[(13)] = inst_29853);

return statearr_29878;
})();
var statearr_29879_29906 = state_29860__$1;
(statearr_29879_29906[(2)] = inst_29854);

(statearr_29879_29906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29861 === (10))){
var inst_29844 = (state_29860[(2)]);
var state_29860__$1 = state_29860;
var statearr_29880_29907 = state_29860__$1;
(statearr_29880_29907[(2)] = inst_29844);

(statearr_29880_29907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29861 === (8))){
var inst_29833 = (state_29860[(11)]);
var inst_29824 = (state_29860[(8)]);
var tmp29877 = inst_29824;
var inst_29824__$1 = tmp29877;
var inst_29825 = inst_29833;
var state_29860__$1 = (function (){var statearr_29881 = state_29860;
(statearr_29881[(7)] = inst_29825);

(statearr_29881[(8)] = inst_29824__$1);

return statearr_29881;
})();
var statearr_29882_29908 = state_29860__$1;
(statearr_29882_29908[(2)] = null);

(statearr_29882_29908[(1)] = (2));


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
});})(c__27234__auto___29894,out))
;
return ((function (switch__26547__auto__,c__27234__auto___29894,out){
return (function() {
var cljs$core$async$state_machine__26548__auto__ = null;
var cljs$core$async$state_machine__26548__auto____0 = (function (){
var statearr_29886 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29886[(0)] = cljs$core$async$state_machine__26548__auto__);

(statearr_29886[(1)] = (1));

return statearr_29886;
});
var cljs$core$async$state_machine__26548__auto____1 = (function (state_29860){
while(true){
var ret_value__26549__auto__ = (function (){try{while(true){
var result__26550__auto__ = switch__26547__auto__.call(null,state_29860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26550__auto__;
}
break;
}
}catch (e29887){if((e29887 instanceof Object)){
var ex__26551__auto__ = e29887;
var statearr_29888_29909 = state_29860;
(statearr_29888_29909[(5)] = ex__26551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29910 = state_29860;
state_29860 = G__29910;
continue;
} else {
return ret_value__26549__auto__;
}
break;
}
});
cljs$core$async$state_machine__26548__auto__ = function(state_29860){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26548__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26548__auto____1.call(this,state_29860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26548__auto____0;
cljs$core$async$state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26548__auto____1;
return cljs$core$async$state_machine__26548__auto__;
})()
;})(switch__26547__auto__,c__27234__auto___29894,out))
})();
var state__27236__auto__ = (function (){var statearr_29889 = f__27235__auto__.call(null);
(statearr_29889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27234__auto___29894);

return statearr_29889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27236__auto__);
});})(c__27234__auto___29894,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29911 = [];
var len__25604__auto___29985 = arguments.length;
var i__25605__auto___29986 = (0);
while(true){
if((i__25605__auto___29986 < len__25604__auto___29985)){
args29911.push((arguments[i__25605__auto___29986]));

var G__29987 = (i__25605__auto___29986 + (1));
i__25605__auto___29986 = G__29987;
continue;
} else {
}
break;
}

var G__29913 = args29911.length;
switch (G__29913) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29911.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27234__auto___29989 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27234__auto___29989,out){
return (function (){
var f__27235__auto__ = (function (){var switch__26547__auto__ = ((function (c__27234__auto___29989,out){
return (function (state_29955){
var state_val_29956 = (state_29955[(1)]);
if((state_val_29956 === (7))){
var inst_29951 = (state_29955[(2)]);
var state_29955__$1 = state_29955;
var statearr_29957_29990 = state_29955__$1;
(statearr_29957_29990[(2)] = inst_29951);

(statearr_29957_29990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29956 === (1))){
var inst_29914 = [];
var inst_29915 = inst_29914;
var inst_29916 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29955__$1 = (function (){var statearr_29958 = state_29955;
(statearr_29958[(7)] = inst_29916);

(statearr_29958[(8)] = inst_29915);

return statearr_29958;
})();
var statearr_29959_29991 = state_29955__$1;
(statearr_29959_29991[(2)] = null);

(statearr_29959_29991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29956 === (4))){
var inst_29919 = (state_29955[(9)]);
var inst_29919__$1 = (state_29955[(2)]);
var inst_29920 = (inst_29919__$1 == null);
var inst_29921 = cljs.core.not.call(null,inst_29920);
var state_29955__$1 = (function (){var statearr_29960 = state_29955;
(statearr_29960[(9)] = inst_29919__$1);

return statearr_29960;
})();
if(inst_29921){
var statearr_29961_29992 = state_29955__$1;
(statearr_29961_29992[(1)] = (5));

} else {
var statearr_29962_29993 = state_29955__$1;
(statearr_29962_29993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29956 === (15))){
var inst_29945 = (state_29955[(2)]);
var state_29955__$1 = state_29955;
var statearr_29963_29994 = state_29955__$1;
(statearr_29963_29994[(2)] = inst_29945);

(statearr_29963_29994[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29956 === (13))){
var state_29955__$1 = state_29955;
var statearr_29964_29995 = state_29955__$1;
(statearr_29964_29995[(2)] = null);

(statearr_29964_29995[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29956 === (6))){
var inst_29915 = (state_29955[(8)]);
var inst_29940 = inst_29915.length;
var inst_29941 = (inst_29940 > (0));
var state_29955__$1 = state_29955;
if(cljs.core.truth_(inst_29941)){
var statearr_29965_29996 = state_29955__$1;
(statearr_29965_29996[(1)] = (12));

} else {
var statearr_29966_29997 = state_29955__$1;
(statearr_29966_29997[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29956 === (3))){
var inst_29953 = (state_29955[(2)]);
var state_29955__$1 = state_29955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29955__$1,inst_29953);
} else {
if((state_val_29956 === (12))){
var inst_29915 = (state_29955[(8)]);
var inst_29943 = cljs.core.vec.call(null,inst_29915);
var state_29955__$1 = state_29955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29955__$1,(15),out,inst_29943);
} else {
if((state_val_29956 === (2))){
var state_29955__$1 = state_29955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29955__$1,(4),ch);
} else {
if((state_val_29956 === (11))){
var inst_29919 = (state_29955[(9)]);
var inst_29923 = (state_29955[(10)]);
var inst_29933 = (state_29955[(2)]);
var inst_29934 = [];
var inst_29935 = inst_29934.push(inst_29919);
var inst_29915 = inst_29934;
var inst_29916 = inst_29923;
var state_29955__$1 = (function (){var statearr_29967 = state_29955;
(statearr_29967[(11)] = inst_29935);

(statearr_29967[(7)] = inst_29916);

(statearr_29967[(8)] = inst_29915);

(statearr_29967[(12)] = inst_29933);

return statearr_29967;
})();
var statearr_29968_29998 = state_29955__$1;
(statearr_29968_29998[(2)] = null);

(statearr_29968_29998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29956 === (9))){
var inst_29915 = (state_29955[(8)]);
var inst_29931 = cljs.core.vec.call(null,inst_29915);
var state_29955__$1 = state_29955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29955__$1,(11),out,inst_29931);
} else {
if((state_val_29956 === (5))){
var inst_29919 = (state_29955[(9)]);
var inst_29923 = (state_29955[(10)]);
var inst_29916 = (state_29955[(7)]);
var inst_29923__$1 = f.call(null,inst_29919);
var inst_29924 = cljs.core._EQ_.call(null,inst_29923__$1,inst_29916);
var inst_29925 = cljs.core.keyword_identical_QMARK_.call(null,inst_29916,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29926 = (inst_29924) || (inst_29925);
var state_29955__$1 = (function (){var statearr_29969 = state_29955;
(statearr_29969[(10)] = inst_29923__$1);

return statearr_29969;
})();
if(cljs.core.truth_(inst_29926)){
var statearr_29970_29999 = state_29955__$1;
(statearr_29970_29999[(1)] = (8));

} else {
var statearr_29971_30000 = state_29955__$1;
(statearr_29971_30000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29956 === (14))){
var inst_29948 = (state_29955[(2)]);
var inst_29949 = cljs.core.async.close_BANG_.call(null,out);
var state_29955__$1 = (function (){var statearr_29973 = state_29955;
(statearr_29973[(13)] = inst_29948);

return statearr_29973;
})();
var statearr_29974_30001 = state_29955__$1;
(statearr_29974_30001[(2)] = inst_29949);

(statearr_29974_30001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29956 === (10))){
var inst_29938 = (state_29955[(2)]);
var state_29955__$1 = state_29955;
var statearr_29975_30002 = state_29955__$1;
(statearr_29975_30002[(2)] = inst_29938);

(statearr_29975_30002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29956 === (8))){
var inst_29919 = (state_29955[(9)]);
var inst_29923 = (state_29955[(10)]);
var inst_29915 = (state_29955[(8)]);
var inst_29928 = inst_29915.push(inst_29919);
var tmp29972 = inst_29915;
var inst_29915__$1 = tmp29972;
var inst_29916 = inst_29923;
var state_29955__$1 = (function (){var statearr_29976 = state_29955;
(statearr_29976[(14)] = inst_29928);

(statearr_29976[(7)] = inst_29916);

(statearr_29976[(8)] = inst_29915__$1);

return statearr_29976;
})();
var statearr_29977_30003 = state_29955__$1;
(statearr_29977_30003[(2)] = null);

(statearr_29977_30003[(1)] = (2));


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
});})(c__27234__auto___29989,out))
;
return ((function (switch__26547__auto__,c__27234__auto___29989,out){
return (function() {
var cljs$core$async$state_machine__26548__auto__ = null;
var cljs$core$async$state_machine__26548__auto____0 = (function (){
var statearr_29981 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29981[(0)] = cljs$core$async$state_machine__26548__auto__);

(statearr_29981[(1)] = (1));

return statearr_29981;
});
var cljs$core$async$state_machine__26548__auto____1 = (function (state_29955){
while(true){
var ret_value__26549__auto__ = (function (){try{while(true){
var result__26550__auto__ = switch__26547__auto__.call(null,state_29955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26550__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26550__auto__;
}
break;
}
}catch (e29982){if((e29982 instanceof Object)){
var ex__26551__auto__ = e29982;
var statearr_29983_30004 = state_29955;
(statearr_29983_30004[(5)] = ex__26551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30005 = state_29955;
state_29955 = G__30005;
continue;
} else {
return ret_value__26549__auto__;
}
break;
}
});
cljs$core$async$state_machine__26548__auto__ = function(state_29955){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26548__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26548__auto____1.call(this,state_29955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26548__auto____0;
cljs$core$async$state_machine__26548__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26548__auto____1;
return cljs$core$async$state_machine__26548__auto__;
})()
;})(switch__26547__auto__,c__27234__auto___29989,out))
})();
var state__27236__auto__ = (function (){var statearr_29984 = f__27235__auto__.call(null);
(statearr_29984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27234__auto___29989);

return statearr_29984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27236__auto__);
});})(c__27234__auto___29989,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1478192736222