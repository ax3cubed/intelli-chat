import {
  compose
} from "./chunk-QATEURQD.js";
import "./chunk-RSJERJUL.js";

// node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js
var createSymbol = function createSymbol2(name) {
  return "@@redux-saga/" + name;
};
var CANCEL = createSymbol("CANCEL_PROMISE");
var CHANNEL_END_TYPE = createSymbol("CHANNEL_END");
var IO = createSymbol("IO");
var MATCH = createSymbol("MATCH");
var MULTICAST = createSymbol("MULTICAST");
var SAGA_ACTION = createSymbol("SAGA_ACTION");
var SELF_CANCELLATION = createSymbol("SELF_CANCELLATION");
var TASK = createSymbol("TASK");
var TASK_CANCEL = createSymbol("TASK_CANCEL");
var TERMINATE = createSymbol("TERMINATE");
var SAGA_LOCATION = createSymbol("LOCATION");

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// node_modules/@redux-saga/is/dist/redux-saga-is.esm.js
var undef = function undef2(v) {
  return v === null || v === void 0;
};
var notUndef = function notUndef2(v) {
  return v !== null && v !== void 0;
};
var func = function func2(f) {
  return typeof f === "function";
};
var string = function string2(s) {
  return typeof s === "string";
};
var array = Array.isArray;
var object = function object2(obj) {
  return obj && !array(obj) && typeof obj === "object";
};
var promise = function promise2(p) {
  return p && func(p.then);
};
var iterator = function iterator2(it) {
  return it && func(it.next) && func(it.throw);
};
var buffer = function buffer2(buf) {
  return buf && func(buf.isEmpty) && func(buf.take) && func(buf.put);
};
var channel = function channel2(ch) {
  return ch && func(ch.take) && func(ch.close);
};
var stringableFunc = function stringableFunc2(f) {
  return func(f) && f.hasOwnProperty("toString");
};
var symbol = function symbol2(sym) {
  return Boolean(sym) && typeof Symbol === "function" && sym.constructor === Symbol && sym !== Symbol.prototype;
};
var effect = function effect2(eff) {
  return eff && eff[IO];
};

// node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js
var MAX_SIGNED_INT = 2147483647;
function delayP(ms, val) {
  if (val === void 0) {
    val = true;
  }
  if (ms > MAX_SIGNED_INT) {
    throw new Error("delay only supports a maximum value of " + MAX_SIGNED_INT + "ms");
  }
  var timeoutId;
  var promise3 = new Promise(function(resolve) {
    timeoutId = setTimeout(resolve, Math.min(MAX_SIGNED_INT, ms), val);
  });
  promise3[CANCEL] = function() {
    clearTimeout(timeoutId);
  };
  return promise3;
}
var redux_saga_delay_p_esm_default = delayP;

// node_modules/@redux-saga/core/dist/io-c3792963.js
var konst = function konst2(v) {
  return function() {
    return v;
  };
};
var kTrue = konst(true);
var noop = function noop2() {
};
if (typeof Proxy !== "undefined") {
  noop = new Proxy(noop, {
    set: function set() {
      throw internalErr("There was an attempt to assign a property to internal `noop` function.");
    }
  });
}
var identity = function identity2(v) {
  return v;
};
var hasSymbol = typeof Symbol === "function";
var asyncIteratorSymbol = hasSymbol && Symbol.asyncIterator ? Symbol.asyncIterator : "@@asyncIterator";
function check(value, predicate3, error) {
  if (!predicate3(value)) {
    throw new Error(error);
  }
}
var assignWithSymbols = function assignWithSymbols2(target, source) {
  _extends(target, source);
  if (Object.getOwnPropertySymbols) {
    Object.getOwnPropertySymbols(source).forEach(function(s) {
      target[s] = source[s];
    });
  }
};
var flatMap = function flatMap2(mapper, arr) {
  var _ref;
  return (_ref = []).concat.apply(_ref, arr.map(mapper));
};
function remove(array4, item) {
  var index = array4.indexOf(item);
  if (index >= 0) {
    array4.splice(index, 1);
  }
}
function once(fn) {
  var called = false;
  return function() {
    if (called) {
      return;
    }
    called = true;
    fn();
  };
}
var kThrow = function kThrow2(err) {
  throw err;
};
var kReturn = function kReturn2(value) {
  return {
    value,
    done: true
  };
};
function makeIterator(next, thro, name) {
  if (thro === void 0) {
    thro = kThrow;
  }
  if (name === void 0) {
    name = "iterator";
  }
  var iterator3 = {
    meta: {
      name
    },
    next,
    throw: thro,
    return: kReturn,
    isSagaIterator: true
  };
  if (typeof Symbol !== "undefined") {
    iterator3[Symbol.iterator] = function() {
      return iterator3;
    };
  }
  return iterator3;
}
function logError(error, _ref2) {
  var sagaStack2 = _ref2.sagaStack;
  console.error(error);
  console.error(sagaStack2);
}
var internalErr = function internalErr2(err) {
  return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: " + err + "\n");
};
var createSetContextWarning = function createSetContextWarning2(ctx, props) {
  return (ctx ? ctx + "." : "") + "setContext(props): argument " + props + " is not a plain object";
};
var FROZEN_ACTION_ERROR = "You can't put (a.k.a. dispatch from saga) frozen actions.\nWe have to define a special non-enumerable property on those actions for scheduling purposes.\nOtherwise you wouldn't be able to communicate properly between sagas & other subscribers (action ordering would become far less predictable).\nIf you are using redux and you care about this behaviour (frozen actions),\nthen you might want to switch to freezing actions in a middleware rather than in action creator.\nExample implementation:\n\nconst freezeActions = store => next => action => next(Object.freeze(action))\n";
var createEmptyArray = function createEmptyArray2(n) {
  return Array.apply(null, new Array(n));
};
var wrapSagaDispatch = function wrapSagaDispatch2(dispatch) {
  return function(action) {
    if (true) {
      check(action, function(ac) {
        return !Object.isFrozen(ac);
      }, FROZEN_ACTION_ERROR);
    }
    return dispatch(Object.defineProperty(action, SAGA_ACTION, {
      value: true
    }));
  };
};
var shouldTerminate = function shouldTerminate2(res) {
  return res === TERMINATE;
};
var shouldCancel = function shouldCancel2(res) {
  return res === TASK_CANCEL;
};
var shouldComplete = function shouldComplete2(res) {
  return shouldTerminate(res) || shouldCancel(res);
};
function createAllStyleChildCallbacks(shape, parentCallback) {
  var keys = Object.keys(shape);
  var totalCount = keys.length;
  if (true) {
    check(totalCount, function(c) {
      return c > 0;
    }, "createAllStyleChildCallbacks: get an empty array or object");
  }
  var completedCount = 0;
  var completed;
  var results = array(shape) ? createEmptyArray(totalCount) : {};
  var childCallbacks = {};
  function checkEnd() {
    if (completedCount === totalCount) {
      completed = true;
      parentCallback(results);
    }
  }
  keys.forEach(function(key) {
    var chCbAtKey = function chCbAtKey2(res, isErr) {
      if (completed) {
        return;
      }
      if (isErr || shouldComplete(res)) {
        parentCallback.cancel();
        parentCallback(res, isErr);
      } else {
        results[key] = res;
        completedCount++;
        checkEnd();
      }
    };
    chCbAtKey.cancel = noop;
    childCallbacks[key] = chCbAtKey;
  });
  parentCallback.cancel = function() {
    if (!completed) {
      completed = true;
      keys.forEach(function(key) {
        return childCallbacks[key].cancel();
      });
    }
  };
  return childCallbacks;
}
function getMetaInfo(fn) {
  return {
    name: fn.name || "anonymous",
    location: getLocation(fn)
  };
}
function getLocation(instrumented) {
  return instrumented[SAGA_LOCATION];
}
var BUFFER_OVERFLOW = "Channel's Buffer overflow!";
var ON_OVERFLOW_THROW = 1;
var ON_OVERFLOW_DROP = 2;
var ON_OVERFLOW_SLIDE = 3;
var ON_OVERFLOW_EXPAND = 4;
var zeroBuffer = {
  isEmpty: kTrue,
  put: noop,
  take: noop
};
function ringBuffer(limit, overflowAction) {
  if (limit === void 0) {
    limit = 10;
  }
  var arr = new Array(limit);
  var length = 0;
  var pushIndex = 0;
  var popIndex = 0;
  var push = function push2(it) {
    arr[pushIndex] = it;
    pushIndex = (pushIndex + 1) % limit;
    length++;
  };
  var take = function take2() {
    if (length != 0) {
      var it = arr[popIndex];
      arr[popIndex] = null;
      length--;
      popIndex = (popIndex + 1) % limit;
      return it;
    }
  };
  var flush2 = function flush3() {
    var items = [];
    while (length) {
      items.push(take());
    }
    return items;
  };
  return {
    isEmpty: function isEmpty() {
      return length == 0;
    },
    put: function put(it) {
      if (length < limit) {
        push(it);
      } else {
        var doubledLimit;
        switch (overflowAction) {
          case ON_OVERFLOW_THROW:
            throw new Error(BUFFER_OVERFLOW);
          case ON_OVERFLOW_SLIDE:
            arr[pushIndex] = it;
            pushIndex = (pushIndex + 1) % limit;
            popIndex = pushIndex;
            break;
          case ON_OVERFLOW_EXPAND:
            doubledLimit = 2 * limit;
            arr = flush2();
            length = arr.length;
            pushIndex = arr.length;
            popIndex = 0;
            arr.length = doubledLimit;
            limit = doubledLimit;
            push(it);
            break;
          default:
        }
      }
    },
    take,
    flush: flush2
  };
}
var none = function none2() {
  return zeroBuffer;
};
var fixed = function fixed2(limit) {
  return ringBuffer(limit, ON_OVERFLOW_THROW);
};
var dropping = function dropping2(limit) {
  return ringBuffer(limit, ON_OVERFLOW_DROP);
};
var sliding = function sliding2(limit) {
  return ringBuffer(limit, ON_OVERFLOW_SLIDE);
};
var expanding = function expanding2(initialSize) {
  return ringBuffer(initialSize, ON_OVERFLOW_EXPAND);
};
var buffers = Object.freeze({
  __proto__: null,
  none,
  fixed,
  dropping,
  sliding,
  expanding
});
var TAKE = "TAKE";
var PUT = "PUT";
var ALL = "ALL";
var RACE = "RACE";
var CALL = "CALL";
var CPS = "CPS";
var FORK = "FORK";
var JOIN = "JOIN";
var CANCEL2 = "CANCEL";
var SELECT = "SELECT";
var ACTION_CHANNEL = "ACTION_CHANNEL";
var CANCELLED = "CANCELLED";
var FLUSH = "FLUSH";
var GET_CONTEXT = "GET_CONTEXT";
var SET_CONTEXT = "SET_CONTEXT";
var effectTypes = Object.freeze({
  __proto__: null,
  TAKE,
  PUT,
  ALL,
  RACE,
  CALL,
  CPS,
  FORK,
  JOIN,
  CANCEL: CANCEL2,
  SELECT,
  ACTION_CHANNEL,
  CANCELLED,
  FLUSH,
  GET_CONTEXT,
  SET_CONTEXT
});
var makeEffect = function makeEffect2(type, payload) {
  var _ref;
  return _ref = {}, _ref[IO] = true, _ref.combinator = false, _ref.type = type, _ref.payload = payload, _ref;
};
var isForkEffect = function isForkEffect2(eff) {
  return effect(eff) && eff.type === FORK;
};
var detach = function detach2(eff) {
  if (true) {
    check(eff, isForkEffect, "detach(eff): argument must be a fork effect");
  }
  return makeEffect(FORK, _extends({}, eff.payload, {
    detached: true
  }));
};
var validateFnDescriptor = function validateFnDescriptor2(effectName, fnDescriptor) {
  check(fnDescriptor, notUndef, effectName + ": argument fn is undefined or null");
  if (func(fnDescriptor)) {
    return;
  }
  var context = null;
  var fn;
  if (array(fnDescriptor)) {
    context = fnDescriptor[0];
    fn = fnDescriptor[1];
    check(fn, notUndef, effectName + ": argument of type [context, fn] has undefined or null `fn`");
  } else if (object(fnDescriptor)) {
    context = fnDescriptor.context;
    fn = fnDescriptor.fn;
    check(fn, notUndef, effectName + ": argument of type {context, fn} has undefined or null `fn`");
  } else {
    check(fnDescriptor, func, effectName + ": argument fn is not function");
    return;
  }
  if (context && string(fn)) {
    check(context[fn], func, effectName + ': context arguments has no such method - "' + fn + '"');
    return;
  }
  check(fn, func, effectName + ": unpacked fn argument (from [context, fn] or {context, fn}) is not a function");
};
function getFnCallDescriptor(fnDescriptor, args) {
  var context = null;
  var fn;
  if (func(fnDescriptor)) {
    fn = fnDescriptor;
  } else {
    if (array(fnDescriptor)) {
      context = fnDescriptor[0];
      fn = fnDescriptor[1];
    } else {
      context = fnDescriptor.context;
      fn = fnDescriptor.fn;
    }
    if (context && string(fn) && func(context[fn])) {
      fn = context[fn];
    }
  }
  return {
    context,
    fn,
    args
  };
}
var isNotDelayEffect = function isNotDelayEffect2(fn) {
  return fn !== delay;
};
function call(fnDescriptor) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  if (true) {
    var arg0 = typeof args[0] === "number" ? args[0] : "ms";
    check(fnDescriptor, isNotDelayEffect, "instead of writing `yield call(delay, " + arg0 + ")` where delay is an effect from `redux-saga/effects` you should write `yield delay(" + arg0 + ")`");
    validateFnDescriptor("call", fnDescriptor);
  }
  return makeEffect(CALL, getFnCallDescriptor(fnDescriptor, args));
}
var delay = call.bind(null, redux_saga_delay_p_esm_default);

// node_modules/@redux-saga/deferred/dist/redux-saga-deferred.esm.js
function deferred() {
  var def = {};
  def.promise = new Promise(function(resolve, reject) {
    def.resolve = resolve;
    def.reject = reject;
  });
  return def;
}
var redux_saga_deferred_esm_default = deferred;

// node_modules/@redux-saga/core/dist/redux-saga-core.esm.js
var queue = [];
var semaphore = 0;
function exec(task2) {
  try {
    suspend();
    task2();
  } finally {
    release();
  }
}
function asap(task2) {
  queue.push(task2);
  if (!semaphore) {
    suspend();
    flush();
  }
}
function immediately(task2) {
  try {
    suspend();
    return task2();
  } finally {
    flush();
  }
}
function suspend() {
  semaphore++;
}
function release() {
  semaphore--;
}
function flush() {
  release();
  var task2;
  while (!semaphore && (task2 = queue.shift()) !== void 0) {
    exec(task2);
  }
}
var array2 = function array3(patterns) {
  return function(input) {
    return patterns.some(function(p) {
      return matcher(p)(input);
    });
  };
};
var predicate = function predicate2(_predicate) {
  return function(input) {
    return _predicate(input);
  };
};
var string3 = function string4(pattern2) {
  return function(input) {
    return input.type === String(pattern2);
  };
};
var symbol3 = function symbol4(pattern2) {
  return function(input) {
    return input.type === pattern2;
  };
};
var wildcard = function wildcard2() {
  return kTrue;
};
function matcher(pattern2) {
  var matcherCreator = pattern2 === "*" ? wildcard : string(pattern2) ? string3 : array(pattern2) ? array2 : stringableFunc(pattern2) ? string3 : func(pattern2) ? predicate : symbol(pattern2) ? symbol3 : null;
  if (matcherCreator === null) {
    throw new Error("invalid pattern: " + pattern2);
  }
  return matcherCreator(pattern2);
}
var END = {
  type: CHANNEL_END_TYPE
};
var isEnd = function isEnd2(a) {
  return a && a.type === CHANNEL_END_TYPE;
};
var CLOSED_CHANNEL_WITH_TAKERS = "Cannot have a closed channel with pending takers";
var INVALID_BUFFER = "invalid buffer passed to channel factory function";
var UNDEFINED_INPUT_ERROR = "Saga or channel was provided with an undefined action\nHints:\n  - check that your Action Creator returns a non-undefined value\n  - if the Saga was started using runSaga, check that your subscribe source provides the action to its listeners";
function channel3(buffer$1) {
  if (buffer$1 === void 0) {
    buffer$1 = expanding();
  }
  var closed = false;
  var takers = [];
  if (true) {
    check(buffer$1, buffer, INVALID_BUFFER);
  }
  function checkForbiddenStates() {
    if (closed && takers.length) {
      throw internalErr(CLOSED_CHANNEL_WITH_TAKERS);
    }
    if (takers.length && !buffer$1.isEmpty()) {
      throw internalErr("Cannot have pending takers with non empty buffer");
    }
  }
  function put(input) {
    if (true) {
      checkForbiddenStates();
      check(input, notUndef, UNDEFINED_INPUT_ERROR);
    }
    if (closed) {
      return;
    }
    if (takers.length === 0) {
      return buffer$1.put(input);
    }
    var cb = takers.shift();
    cb(input);
  }
  function take(cb) {
    if (true) {
      checkForbiddenStates();
      check(cb, func, "channel.take's callback must be a function");
    }
    if (closed && buffer$1.isEmpty()) {
      cb(END);
    } else if (!buffer$1.isEmpty()) {
      cb(buffer$1.take());
    } else {
      takers.push(cb);
      cb.cancel = function() {
        remove(takers, cb);
      };
    }
  }
  function flush2(cb) {
    if (true) {
      checkForbiddenStates();
      check(cb, func, "channel.flush' callback must be a function");
    }
    if (closed && buffer$1.isEmpty()) {
      cb(END);
      return;
    }
    cb(buffer$1.flush());
  }
  function close() {
    if (true) {
      checkForbiddenStates();
    }
    if (closed) {
      return;
    }
    closed = true;
    var arr = takers;
    takers = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      var taker = arr[i];
      taker(END);
    }
  }
  return {
    take,
    put,
    flush: flush2,
    close
  };
}
function eventChannel(subscribe, buffer3) {
  if (buffer3 === void 0) {
    buffer3 = none();
  }
  var closed = false;
  var unsubscribe;
  var chan = channel3(buffer3);
  var close = function close2() {
    if (closed) {
      return;
    }
    closed = true;
    if (func(unsubscribe)) {
      unsubscribe();
    }
    chan.close();
  };
  unsubscribe = subscribe(function(input) {
    if (isEnd(input)) {
      close();
      return;
    }
    chan.put(input);
  });
  if (true) {
    check(unsubscribe, func, "in eventChannel: subscribe should return a function to unsubscribe");
  }
  unsubscribe = once(unsubscribe);
  if (closed) {
    unsubscribe();
  }
  return {
    take: chan.take,
    flush: chan.flush,
    close
  };
}
function multicastChannel() {
  var _ref;
  var closed = false;
  var currentTakers = [];
  var nextTakers = currentTakers;
  function checkForbiddenStates() {
    if (closed && nextTakers.length) {
      throw internalErr(CLOSED_CHANNEL_WITH_TAKERS);
    }
  }
  var ensureCanMutateNextTakers = function ensureCanMutateNextTakers2() {
    if (nextTakers !== currentTakers) {
      return;
    }
    nextTakers = currentTakers.slice();
  };
  var close = function close2() {
    if (true) {
      checkForbiddenStates();
    }
    closed = true;
    var takers = currentTakers = nextTakers;
    nextTakers = [];
    takers.forEach(function(taker) {
      taker(END);
    });
  };
  return _ref = {}, _ref[MULTICAST] = true, _ref.put = function put(input) {
    if (true) {
      checkForbiddenStates();
      check(input, notUndef, UNDEFINED_INPUT_ERROR);
    }
    if (closed) {
      return;
    }
    if (isEnd(input)) {
      close();
      return;
    }
    var takers = currentTakers = nextTakers;
    for (var i = 0, len = takers.length; i < len; i++) {
      var taker = takers[i];
      if (taker[MATCH](input)) {
        taker.cancel();
        taker(input);
      }
    }
  }, _ref.take = function take(cb, matcher2) {
    if (matcher2 === void 0) {
      matcher2 = wildcard;
    }
    if (true) {
      checkForbiddenStates();
    }
    if (closed) {
      cb(END);
      return;
    }
    cb[MATCH] = matcher2;
    ensureCanMutateNextTakers();
    nextTakers.push(cb);
    cb.cancel = once(function() {
      ensureCanMutateNextTakers();
      remove(nextTakers, cb);
    });
  }, _ref.close = close, _ref;
}
function stdChannel() {
  var chan = multicastChannel();
  var put = chan.put;
  chan.put = function(input) {
    if (input[SAGA_ACTION]) {
      put(input);
      return;
    }
    asap(function() {
      put(input);
    });
  };
  return chan;
}
var RUNNING = 0;
var CANCELLED2 = 1;
var ABORTED = 2;
var DONE = 3;
function resolvePromise(promise3, cb) {
  var cancelPromise = promise3[CANCEL];
  if (func(cancelPromise)) {
    cb.cancel = cancelPromise;
  }
  promise3.then(cb, function(error) {
    cb(error, true);
  });
}
var current = 0;
var nextSagaId = function() {
  return ++current;
};
var _effectRunnerMap;
function getIteratorMetaInfo(iterator3, fn) {
  if (iterator3.isSagaIterator) {
    return {
      name: iterator3.meta.name
    };
  }
  return getMetaInfo(fn);
}
function createTaskIterator(_ref) {
  var context = _ref.context, fn = _ref.fn, args = _ref.args;
  try {
    var result = fn.apply(context, args);
    if (iterator(result)) {
      return result;
    }
    var resolved = false;
    var next = function next2(arg) {
      if (!resolved) {
        resolved = true;
        return {
          value: result,
          done: !promise(result)
        };
      } else {
        return {
          value: arg,
          done: true
        };
      }
    };
    return makeIterator(next);
  } catch (err) {
    return makeIterator(function() {
      throw err;
    });
  }
}
function runPutEffect(env, _ref2, cb) {
  var channel4 = _ref2.channel, action = _ref2.action, resolve = _ref2.resolve;
  asap(function() {
    var result;
    try {
      result = (channel4 ? channel4.put : env.dispatch)(action);
    } catch (error) {
      cb(error, true);
      return;
    }
    if (resolve && promise(result)) {
      resolvePromise(result, cb);
    } else {
      cb(result);
    }
  });
}
function runTakeEffect(env, _ref3, cb) {
  var _ref3$channel = _ref3.channel, channel4 = _ref3$channel === void 0 ? env.channel : _ref3$channel, pattern2 = _ref3.pattern, maybe = _ref3.maybe;
  var takeCb = function takeCb2(input) {
    if (input instanceof Error) {
      cb(input, true);
      return;
    }
    if (isEnd(input) && !maybe) {
      cb(TERMINATE);
      return;
    }
    cb(input);
  };
  try {
    channel4.take(takeCb, notUndef(pattern2) ? matcher(pattern2) : null);
  } catch (err) {
    cb(err, true);
    return;
  }
  cb.cancel = takeCb.cancel;
}
function runCallEffect(env, _ref4, cb, _ref5) {
  var context = _ref4.context, fn = _ref4.fn, args = _ref4.args;
  var task2 = _ref5.task;
  try {
    var result = fn.apply(context, args);
    if (promise(result)) {
      resolvePromise(result, cb);
      return;
    }
    if (iterator(result)) {
      proc(
        env,
        result,
        task2.context,
        current,
        getMetaInfo(fn),
        /* isRoot */
        false,
        cb
      );
      return;
    }
    cb(result);
  } catch (error) {
    cb(error, true);
  }
}
function runCPSEffect(env, _ref6, cb) {
  var context = _ref6.context, fn = _ref6.fn, args = _ref6.args;
  try {
    var cpsCb = function cpsCb2(err, res) {
      if (undef(err)) {
        cb(res);
      } else {
        cb(err, true);
      }
    };
    fn.apply(context, args.concat(cpsCb));
    if (cpsCb.cancel) {
      cb.cancel = cpsCb.cancel;
    }
  } catch (error) {
    cb(error, true);
  }
}
function runForkEffect(env, _ref7, cb, _ref8) {
  var context = _ref7.context, fn = _ref7.fn, args = _ref7.args, detached = _ref7.detached;
  var parent = _ref8.task;
  var taskIterator = createTaskIterator({
    context,
    fn,
    args
  });
  var meta = getIteratorMetaInfo(taskIterator, fn);
  immediately(function() {
    var child = proc(env, taskIterator, parent.context, current, meta, detached, void 0);
    if (detached) {
      cb(child);
    } else {
      if (child.isRunning()) {
        parent.queue.addTask(child);
        cb(child);
      } else if (child.isAborted()) {
        parent.queue.abort(child.error());
      } else {
        cb(child);
      }
    }
  });
}
function runJoinEffect(env, taskOrTasks, cb, _ref9) {
  var task2 = _ref9.task;
  var joinSingleTask = function joinSingleTask2(taskToJoin, cb2) {
    if (taskToJoin.isRunning()) {
      var joiner = {
        task: task2,
        cb: cb2
      };
      cb2.cancel = function() {
        if (taskToJoin.isRunning())
          remove(taskToJoin.joiners, joiner);
      };
      taskToJoin.joiners.push(joiner);
    } else {
      if (taskToJoin.isAborted()) {
        cb2(taskToJoin.error(), true);
      } else {
        cb2(taskToJoin.result());
      }
    }
  };
  if (array(taskOrTasks)) {
    if (taskOrTasks.length === 0) {
      cb([]);
      return;
    }
    var childCallbacks = createAllStyleChildCallbacks(taskOrTasks, cb);
    taskOrTasks.forEach(function(t, i) {
      joinSingleTask(t, childCallbacks[i]);
    });
  } else {
    joinSingleTask(taskOrTasks, cb);
  }
}
function cancelSingleTask(taskToCancel) {
  if (taskToCancel.isRunning()) {
    taskToCancel.cancel();
  }
}
function runCancelEffect(env, taskOrTasks, cb, _ref10) {
  var task2 = _ref10.task;
  if (taskOrTasks === SELF_CANCELLATION) {
    cancelSingleTask(task2);
  } else if (array(taskOrTasks)) {
    taskOrTasks.forEach(cancelSingleTask);
  } else {
    cancelSingleTask(taskOrTasks);
  }
  cb();
}
function runAllEffect(env, effects, cb, _ref11) {
  var digestEffect = _ref11.digestEffect;
  var effectId = current;
  var keys = Object.keys(effects);
  if (keys.length === 0) {
    cb(array(effects) ? [] : {});
    return;
  }
  var childCallbacks = createAllStyleChildCallbacks(effects, cb);
  keys.forEach(function(key) {
    digestEffect(effects[key], effectId, childCallbacks[key], key);
  });
}
function runRaceEffect(env, effects, cb, _ref12) {
  var digestEffect = _ref12.digestEffect;
  var effectId = current;
  var keys = Object.keys(effects);
  var response = array(effects) ? createEmptyArray(keys.length) : {};
  var childCbs = {};
  var completed = false;
  keys.forEach(function(key) {
    var chCbAtKey = function chCbAtKey2(res, isErr) {
      if (completed) {
        return;
      }
      if (isErr || shouldComplete(res)) {
        cb.cancel();
        cb(res, isErr);
      } else {
        cb.cancel();
        completed = true;
        response[key] = res;
        cb(response);
      }
    };
    chCbAtKey.cancel = noop;
    childCbs[key] = chCbAtKey;
  });
  cb.cancel = function() {
    if (!completed) {
      completed = true;
      keys.forEach(function(key) {
        return childCbs[key].cancel();
      });
    }
  };
  keys.forEach(function(key) {
    if (completed) {
      return;
    }
    digestEffect(effects[key], effectId, childCbs[key], key);
  });
}
function runSelectEffect(env, _ref13, cb) {
  var selector = _ref13.selector, args = _ref13.args;
  try {
    var state = selector.apply(void 0, [env.getState()].concat(args));
    cb(state);
  } catch (error) {
    cb(error, true);
  }
}
function runChannelEffect(env, _ref14, cb) {
  var pattern2 = _ref14.pattern, buffer3 = _ref14.buffer;
  var chan = channel3(buffer3);
  var match = matcher(pattern2);
  var taker = function taker2(action) {
    if (!isEnd(action)) {
      env.channel.take(taker2, match);
    }
    chan.put(action);
  };
  var close = chan.close;
  chan.close = function() {
    taker.cancel();
    close();
  };
  env.channel.take(taker, match);
  cb(chan);
}
function runCancelledEffect(env, data, cb, _ref15) {
  var task2 = _ref15.task;
  cb(task2.isCancelled());
}
function runFlushEffect(env, channel4, cb) {
  channel4.flush(cb);
}
function runGetContextEffect(env, prop, cb, _ref16) {
  var task2 = _ref16.task;
  cb(task2.context[prop]);
}
function runSetContextEffect(env, props, cb, _ref17) {
  var task2 = _ref17.task;
  assignWithSymbols(task2.context, props);
  cb();
}
var effectRunnerMap = (_effectRunnerMap = {}, _effectRunnerMap[TAKE] = runTakeEffect, _effectRunnerMap[PUT] = runPutEffect, _effectRunnerMap[ALL] = runAllEffect, _effectRunnerMap[RACE] = runRaceEffect, _effectRunnerMap[CALL] = runCallEffect, _effectRunnerMap[CPS] = runCPSEffect, _effectRunnerMap[FORK] = runForkEffect, _effectRunnerMap[JOIN] = runJoinEffect, _effectRunnerMap[CANCEL2] = runCancelEffect, _effectRunnerMap[SELECT] = runSelectEffect, _effectRunnerMap[ACTION_CHANNEL] = runChannelEffect, _effectRunnerMap[CANCELLED] = runCancelledEffect, _effectRunnerMap[FLUSH] = runFlushEffect, _effectRunnerMap[GET_CONTEXT] = runGetContextEffect, _effectRunnerMap[SET_CONTEXT] = runSetContextEffect, _effectRunnerMap);
function forkQueue(mainTask, onAbort, cont) {
  var tasks = [];
  var result;
  var completed = false;
  addTask(mainTask);
  var getTasks = function getTasks2() {
    return tasks;
  };
  function abort(err) {
    onAbort();
    cancelAll();
    cont(err, true);
  }
  function addTask(task2) {
    tasks.push(task2);
    task2.cont = function(res, isErr) {
      if (completed) {
        return;
      }
      remove(tasks, task2);
      task2.cont = noop;
      if (isErr) {
        abort(res);
      } else {
        if (task2 === mainTask) {
          result = res;
        }
        if (!tasks.length) {
          completed = true;
          cont(result);
        }
      }
    };
  }
  function cancelAll() {
    if (completed) {
      return;
    }
    completed = true;
    tasks.forEach(function(t) {
      t.cont = noop;
      t.cancel();
    });
    tasks = [];
  }
  return {
    addTask,
    cancelAll,
    abort,
    getTasks
  };
}
function formatLocation(fileName, lineNumber) {
  return fileName + "?" + lineNumber;
}
function effectLocationAsString(effect3) {
  var location = getLocation(effect3);
  if (location) {
    var code = location.code, fileName = location.fileName, lineNumber = location.lineNumber;
    var source = code + "  " + formatLocation(fileName, lineNumber);
    return source;
  }
  return "";
}
function sagaLocationAsString(sagaMeta) {
  var name = sagaMeta.name, location = sagaMeta.location;
  if (location) {
    return name + "  " + formatLocation(location.fileName, location.lineNumber);
  }
  return name;
}
function cancelledTasksAsString(sagaStack2) {
  var cancelledTasks = flatMap(function(i) {
    return i.cancelledTasks;
  }, sagaStack2);
  if (!cancelledTasks.length) {
    return "";
  }
  return ["Tasks cancelled due to error:"].concat(cancelledTasks).join("\n");
}
var crashedEffect = null;
var sagaStack = [];
var addSagaFrame = function addSagaFrame2(frame) {
  frame.crashedEffect = crashedEffect;
  sagaStack.push(frame);
};
var clear = function clear2() {
  crashedEffect = null;
  sagaStack.length = 0;
};
var setCrashedEffect = function setCrashedEffect2(effect3) {
  crashedEffect = effect3;
};
var toString = function toString2() {
  var firstSaga = sagaStack[0], otherSagas = sagaStack.slice(1);
  var crashedEffectLocation = firstSaga.crashedEffect ? effectLocationAsString(firstSaga.crashedEffect) : null;
  var errorMessage = "The above error occurred in task " + sagaLocationAsString(firstSaga.meta) + (crashedEffectLocation ? " \n when executing effect " + crashedEffectLocation : "");
  return [errorMessage].concat(otherSagas.map(function(s) {
    return "    created by " + sagaLocationAsString(s.meta);
  }), [cancelledTasksAsString(sagaStack)]).join("\n");
};
function newTask(env, mainTask, parentContext, parentEffectId, meta, isRoot, cont) {
  var _task;
  if (cont === void 0) {
    cont = noop;
  }
  var status = RUNNING;
  var taskResult;
  var taskError;
  var deferredEnd = null;
  var cancelledDueToErrorTasks = [];
  var context = Object.create(parentContext);
  var queue2 = forkQueue(mainTask, function onAbort() {
    cancelledDueToErrorTasks.push.apply(cancelledDueToErrorTasks, queue2.getTasks().map(function(t) {
      return t.meta.name;
    }));
  }, end);
  function cancel() {
    if (status === RUNNING) {
      status = CANCELLED2;
      queue2.cancelAll();
      end(TASK_CANCEL, false);
    }
  }
  function end(result, isErr) {
    if (!isErr) {
      if (result === TASK_CANCEL) {
        status = CANCELLED2;
      } else if (status !== CANCELLED2) {
        status = DONE;
      }
      taskResult = result;
      deferredEnd && deferredEnd.resolve(result);
    } else {
      status = ABORTED;
      addSagaFrame({
        meta,
        cancelledTasks: cancelledDueToErrorTasks
      });
      if (task2.isRoot) {
        var sagaStack2 = toString();
        clear();
        env.onError(result, {
          sagaStack: sagaStack2
        });
      }
      taskError = result;
      deferredEnd && deferredEnd.reject(result);
    }
    task2.cont(result, isErr);
    task2.joiners.forEach(function(joiner) {
      joiner.cb(result, isErr);
    });
    task2.joiners = null;
  }
  function setContext(props) {
    if (true) {
      check(props, object, createSetContextWarning("task", props));
    }
    assignWithSymbols(context, props);
  }
  function toPromise() {
    if (deferredEnd) {
      return deferredEnd.promise;
    }
    deferredEnd = redux_saga_deferred_esm_default();
    if (status === ABORTED) {
      deferredEnd.reject(taskError);
    } else if (status !== RUNNING) {
      deferredEnd.resolve(taskResult);
    }
    return deferredEnd.promise;
  }
  var task2 = (_task = {}, _task[TASK] = true, _task.id = parentEffectId, _task.meta = meta, _task.isRoot = isRoot, _task.context = context, _task.joiners = [], _task.queue = queue2, _task.cancel = cancel, _task.cont = cont, _task.end = end, _task.setContext = setContext, _task.toPromise = toPromise, _task.isRunning = function isRunning() {
    return status === RUNNING;
  }, _task.isCancelled = function isCancelled() {
    return status === CANCELLED2 || status === RUNNING && mainTask.status === CANCELLED2;
  }, _task.isAborted = function isAborted() {
    return status === ABORTED;
  }, _task.result = function result() {
    return taskResult;
  }, _task.error = function error() {
    return taskError;
  }, _task);
  return task2;
}
function proc(env, iterator$1, parentContext, parentEffectId, meta, isRoot, cont) {
  if (iterator$1[asyncIteratorSymbol]) {
    throw new Error("redux-saga doesn't support async generators, please use only regular ones");
  }
  var finalRunEffect = env.finalizeRunEffect(runEffect);
  next.cancel = noop;
  var mainTask = {
    meta,
    cancel: cancelMain,
    status: RUNNING
  };
  var task2 = newTask(env, mainTask, parentContext, parentEffectId, meta, isRoot, cont);
  var executingContext = {
    task: task2,
    digestEffect
  };
  function cancelMain() {
    if (mainTask.status === RUNNING) {
      mainTask.status = CANCELLED2;
      next(TASK_CANCEL);
    }
  }
  if (cont) {
    cont.cancel = task2.cancel;
  }
  next();
  return task2;
  function next(arg, isErr) {
    try {
      var result;
      if (isErr) {
        result = iterator$1.throw(arg);
        clear();
      } else if (shouldCancel(arg)) {
        mainTask.status = CANCELLED2;
        next.cancel();
        result = func(iterator$1.return) ? iterator$1.return(TASK_CANCEL) : {
          done: true,
          value: TASK_CANCEL
        };
      } else if (shouldTerminate(arg)) {
        result = func(iterator$1.return) ? iterator$1.return() : {
          done: true
        };
      } else {
        result = iterator$1.next(arg);
      }
      if (!result.done) {
        digestEffect(result.value, parentEffectId, next);
      } else {
        if (mainTask.status !== CANCELLED2) {
          mainTask.status = DONE;
        }
        mainTask.cont(result.value);
      }
    } catch (error) {
      if (mainTask.status === CANCELLED2) {
        throw error;
      }
      mainTask.status = ABORTED;
      mainTask.cont(error, true);
    }
  }
  function runEffect(effect3, effectId, currCb) {
    if (promise(effect3)) {
      resolvePromise(effect3, currCb);
    } else if (iterator(effect3)) {
      proc(
        env,
        effect3,
        task2.context,
        effectId,
        meta,
        /* isRoot */
        false,
        currCb
      );
    } else if (effect3 && effect3[IO]) {
      var effectRunner = effectRunnerMap[effect3.type];
      effectRunner(env, effect3.payload, currCb, executingContext);
    } else {
      currCb(effect3);
    }
  }
  function digestEffect(effect3, parentEffectId2, cb, label) {
    if (label === void 0) {
      label = "";
    }
    var effectId = nextSagaId();
    env.sagaMonitor && env.sagaMonitor.effectTriggered({
      effectId,
      parentEffectId: parentEffectId2,
      label,
      effect: effect3
    });
    var effectSettled;
    function currCb(res, isErr) {
      if (effectSettled) {
        return;
      }
      effectSettled = true;
      cb.cancel = noop;
      if (env.sagaMonitor) {
        if (isErr) {
          env.sagaMonitor.effectRejected(effectId, res);
        } else {
          env.sagaMonitor.effectResolved(effectId, res);
        }
      }
      if (isErr) {
        setCrashedEffect(effect3);
      }
      cb(res, isErr);
    }
    currCb.cancel = noop;
    cb.cancel = function() {
      if (effectSettled) {
        return;
      }
      effectSettled = true;
      currCb.cancel();
      currCb.cancel = noop;
      env.sagaMonitor && env.sagaMonitor.effectCancelled(effectId);
    };
    finalRunEffect(effect3, effectId, currCb);
  }
}
var RUN_SAGA_SIGNATURE = "runSaga(options, saga, ...args)";
var NON_GENERATOR_ERR = RUN_SAGA_SIGNATURE + ": saga argument must be a Generator function!";
function runSaga(_ref, saga) {
  var _ref$channel = _ref.channel, channel4 = _ref$channel === void 0 ? stdChannel() : _ref$channel, dispatch = _ref.dispatch, getState = _ref.getState, _ref$context = _ref.context, context = _ref$context === void 0 ? {} : _ref$context, sagaMonitor = _ref.sagaMonitor, effectMiddlewares = _ref.effectMiddlewares, _ref$onError = _ref.onError, onError = _ref$onError === void 0 ? logError : _ref$onError;
  if (true) {
    check(saga, func, NON_GENERATOR_ERR);
  }
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  var iterator$1 = saga.apply(void 0, args);
  if (true) {
    check(iterator$1, iterator, NON_GENERATOR_ERR);
  }
  var effectId = nextSagaId();
  if (sagaMonitor) {
    sagaMonitor.rootSagaStarted = sagaMonitor.rootSagaStarted || noop;
    sagaMonitor.effectTriggered = sagaMonitor.effectTriggered || noop;
    sagaMonitor.effectResolved = sagaMonitor.effectResolved || noop;
    sagaMonitor.effectRejected = sagaMonitor.effectRejected || noop;
    sagaMonitor.effectCancelled = sagaMonitor.effectCancelled || noop;
    sagaMonitor.actionDispatched = sagaMonitor.actionDispatched || noop;
    sagaMonitor.rootSagaStarted({
      effectId,
      saga,
      args
    });
  }
  if (true) {
    if (notUndef(dispatch)) {
      check(dispatch, func, "dispatch must be a function");
    }
    if (notUndef(getState)) {
      check(getState, func, "getState must be a function");
    }
    if (notUndef(effectMiddlewares)) {
      var MIDDLEWARE_TYPE_ERROR = "effectMiddlewares must be an array of functions";
      check(effectMiddlewares, array, MIDDLEWARE_TYPE_ERROR);
      effectMiddlewares.forEach(function(effectMiddleware) {
        return check(effectMiddleware, func, MIDDLEWARE_TYPE_ERROR);
      });
    }
    check(onError, func, "onError passed to the redux-saga is not a function!");
  }
  var finalizeRunEffect;
  if (effectMiddlewares) {
    var middleware = compose.apply(void 0, effectMiddlewares);
    finalizeRunEffect = function finalizeRunEffect2(runEffect) {
      return function(effect3, effectId2, currCb) {
        var plainRunEffect = function plainRunEffect2(eff) {
          return runEffect(eff, effectId2, currCb);
        };
        return middleware(plainRunEffect)(effect3);
      };
    };
  } else {
    finalizeRunEffect = identity;
  }
  var env = {
    channel: channel4,
    dispatch: wrapSagaDispatch(dispatch),
    getState,
    sagaMonitor,
    onError,
    finalizeRunEffect
  };
  return immediately(function() {
    var task2 = proc(
      env,
      iterator$1,
      context,
      effectId,
      getMetaInfo(saga),
      /* isRoot */
      true,
      void 0
    );
    if (sagaMonitor) {
      sagaMonitor.effectResolved(effectId, task2);
    }
    return task2;
  });
}
function sagaMiddlewareFactory(_temp) {
  var _ref = _temp === void 0 ? {} : _temp, _ref$context = _ref.context, context = _ref$context === void 0 ? {} : _ref$context, _ref$channel = _ref.channel, channel4 = _ref$channel === void 0 ? stdChannel() : _ref$channel, sagaMonitor = _ref.sagaMonitor, options = _objectWithoutPropertiesLoose(_ref, ["context", "channel", "sagaMonitor"]);
  var boundRunSaga;
  if (true) {
    check(channel4, channel, "options.channel passed to the Saga middleware is not a channel");
  }
  function sagaMiddleware(_ref2) {
    var getState = _ref2.getState, dispatch = _ref2.dispatch;
    boundRunSaga = runSaga.bind(null, _extends({}, options, {
      context,
      channel: channel4,
      dispatch,
      getState,
      sagaMonitor
    }));
    return function(next) {
      return function(action) {
        if (sagaMonitor && sagaMonitor.actionDispatched) {
          sagaMonitor.actionDispatched(action);
        }
        var result = next(action);
        channel4.put(action);
        return result;
      };
    };
  }
  sagaMiddleware.run = function() {
    if (!boundRunSaga) {
      throw new Error("Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware");
    }
    return boundRunSaga.apply(void 0, arguments);
  };
  sagaMiddleware.setContext = function(props) {
    if (true) {
      check(props, object, createSetContextWarning("sagaMiddleware", props));
    }
    assignWithSymbols(context, props);
  };
  return sagaMiddleware;
}
var redux_saga_core_esm_default = sagaMiddlewareFactory;

// node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js
var redux_saga_core_npm_proxy_esm_default = redux_saga_core_esm_default;
export {
  CANCEL,
  END,
  SAGA_LOCATION,
  buffers,
  channel3 as channel,
  redux_saga_core_npm_proxy_esm_default as default,
  detach,
  eventChannel,
  isEnd,
  multicastChannel,
  runSaga,
  stdChannel
};
//# sourceMappingURL=redux-saga.js.map
