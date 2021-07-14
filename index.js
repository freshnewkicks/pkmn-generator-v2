! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Pokedex = t() : e.Pokedex = t() }("undefined" != typeof self ? self : this, function() {
    return function(e) {
        function t(r) { if (n[r]) return n[r].exports; var o = n[r] = { i: r, l: !1, exports: {} }; return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports }
        var n = {};
        return t.m = e, t.c = n, t.d = function(e, n, r) { t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: r }) }, t.n = function(e) { var n = e && e.__esModule ? function() { return e.default } : function() { return e }; return t.d(n, "a", n), n }, t.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, t.p = "", t(t.s = 17)
    }([function(e, t, n) {
        "use strict";

        function r(e) { return "[object Array]" === R.call(e) }

        function o(e) { return void 0 === e }

        function i(e) { return null !== e && !o(e) && null !== e.constructor && !o(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e) }

        function a(e) { return "[object ArrayBuffer]" === R.call(e) }

        function s(e) { return "undefined" != typeof FormData && e instanceof FormData }

        function c(e) { return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer }

        function u(e) { return "string" == typeof e }

        function f(e) { return "number" == typeof e }

        function l(e) { return null !== e && "object" === (void 0 === e ? "undefined" : N(e)) }

        function d(e) { if ("[object Object]" !== R.call(e)) return !1; var t = Object.getPrototypeOf(e); return null === t || t === Object.prototype }

        function p(e) { return "[object Date]" === R.call(e) }

        function h(e) { return "[object File]" === R.call(e) }

        function m(e) { return "[object Blob]" === R.call(e) }

        function v(e) { return "[object Function]" === R.call(e) }

        function g(e) { return l(e) && v(e.pipe) }

        function y(e) { return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams }

        function b(e) { return e.replace(/^\s*/, "").replace(/\s*$/, "") }

        function _() { return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document) }

        function w(e, t) {
            if (null !== e && void 0 !== e)
                if ("object" !== (void 0 === e ? "undefined" : N(e)) && (e = [e]), r(e))
                    for (var n = 0, o = e.length; n < o; n++) t.call(null, e[n], n, e);
                else
                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e)
        }

        function x() {
            function e(e, n) { d(t[n]) && d(e) ? t[n] = x(t[n], e) : d(e) ? t[n] = x({}, e) : r(e) ? t[n] = e.slice() : t[n] = e }
            for (var t = {}, n = 0, o = arguments.length; n < o; n++) w(arguments[n], e);
            return t
        }

        function E(e, t, n) { return w(t, function(t, r) { e[r] = n && "function" == typeof t ? B(t, n) : t }), e }

        function S(e) { return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e }
        var N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
            B = n(4),
            R = Object.prototype.toString;
        e.exports = { isArray: r, isArrayBuffer: a, isBuffer: i, isFormData: s, isArrayBufferView: c, isString: u, isNumber: f, isObject: l, isPlainObject: d, isUndefined: o, isDate: p, isFile: h, isBlob: m, isFunction: v, isStream: g, isURLSearchParams: y, isStandardBrowserEnv: _, forEach: w, merge: x, extend: E, trim: b, stripBOM: S }
    }, function(e, t, n) {
        "use strict";

        function r(e) { return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]") }
        var o = n(0);
        e.exports = function(e, t, n) {
            if (!t) return e;
            var i;
            if (n) i = n(t);
            else if (o.isURLSearchParams(t)) i = t.toString();
            else {
                var a = [];
                o.forEach(t, function(e, t) { null !== e && void 0 !== e && (o.isArray(e) ? t += "[]" : e = [e], o.forEach(e, function(e) { o.isDate(e) ? e = e.toISOString() : o.isObject(e) && (e = JSON.stringify(e)), a.push(r(t) + "=" + r(e)) })) }), i = a.join("&")
            }
            if (i) { var s = e.indexOf("#"); - 1 !== s && (e = e.slice(0, s)), e += (-1 === e.indexOf("?") ? "?" : "&") + i }
            return e
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(8);
        e.exports = function(e, t, n, o, i) { var a = new Error(e); return r(a, t, n, o, i) }
    }, function(e, t, n) {
        var r, r;
        /*!
            localForage -- Offline Storage, Improved
            Version 1.9.0
            https://localforage.github.io/localForage
            (c) 2013-2017 Mozilla, Apache License 2.0
        */
        ! function(t) { e.exports = t() }(function() {
            return function e(t, n, o) {
                function i(s, c) {
                    if (!n[s]) {
                        if (!t[s]) { var u = "function" == typeof r && r; if (!c && u) return r(s, !0); if (a) return a(s, !0); var f = new Error("Cannot find module '" + s + "'"); throw f.code = "MODULE_NOT_FOUND", f }
                        var l = n[s] = { exports: {} };
                        t[s][0].call(l.exports, function(e) { var n = t[s][1][e]; return i(n || e) }, l, l.exports, e, t, n, o)
                    }
                    return n[s].exports
                }
                for (var a = "function" == typeof r && r, s = 0; s < o.length; s++) i(o[s]);
                return i
            }({
                1: [function(e, t, n) {
                    (function(e) {
                        "use strict";

                        function n() {
                            f = !0;
                            for (var e, t, n = l.length; n;) {
                                for (t = l, l = [], e = -1; ++e < n;) t[e]();
                                n = l.length
                            }
                            f = !1
                        }

                        function r(e) { 1 !== l.push(e) || f || o() }
                        var o, i = e.MutationObserver || e.WebKitMutationObserver;
                        if (i) {
                            var a = 0,
                                s = new i(n),
                                c = e.document.createTextNode("");
                            s.observe(c, { characterData: !0 }), o = function() { c.data = a = ++a % 2 }
                        } else if (e.setImmediate || void 0 === e.MessageChannel) o = "document" in e && "onreadystatechange" in e.document.createElement("script") ? function() {
                            var t = e.document.createElement("script");
                            t.onreadystatechange = function() { n(), t.onreadystatechange = null, t.parentNode.removeChild(t), t = null }, e.document.documentElement.appendChild(t)
                        } : function() { setTimeout(n, 0) };
                        else {
                            var u = new e.MessageChannel;
                            u.port1.onmessage = n, o = function() { u.port2.postMessage(0) }
                        }
                        var f, l = [];
                        t.exports = r
                    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                }, {}],
                2: [function(e, t, n) {
                    "use strict";

                    function r() {}

                    function o(e) {
                        if ("function" != typeof e) throw new TypeError("resolver must be a function");
                        this.state = y, this.queue = [], this.outcome = void 0, e !== r && c(this, e)
                    }

                    function i(e, t, n) { this.promise = e, "function" == typeof t && (this.onFulfilled = t, this.callFulfilled = this.otherCallFulfilled), "function" == typeof n && (this.onRejected = n, this.callRejected = this.otherCallRejected) }

                    function a(e, t, n) {
                        h(function() {
                            var r;
                            try { r = t(n) } catch (t) { return m.reject(e, t) }
                            r === e ? m.reject(e, new TypeError("Cannot resolve promise with itself")) : m.resolve(e, r)
                        })
                    }

                    function s(e) { var t = e && e.then; if (e && ("object" == typeof e || "function" == typeof e) && "function" == typeof t) return function() { t.apply(e, arguments) } }

                    function c(e, t) {
                        function n(t) { i || (i = !0, m.reject(e, t)) }

                        function r(t) { i || (i = !0, m.resolve(e, t)) }

                        function o() { t(r, n) }
                        var i = !1,
                            a = u(o);
                        "error" === a.status && n(a.value)
                    }

                    function u(e, t) { var n = {}; try { n.value = e(t), n.status = "success" } catch (e) { n.status = "error", n.value = e } return n }

                    function f(e) { return e instanceof this ? e : m.resolve(new this(r), e) }

                    function l(e) { var t = new this(r); return m.reject(t, e) }

                    function d(e) {
                        var t = this;
                        if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
                        var n = e.length,
                            o = !1;
                        if (!n) return this.resolve([]);
                        for (var i = new Array(n), a = 0, s = -1, c = new this(r); ++s < n;) ! function(e, r) {
                            function s(e) { i[r] = e, ++a !== n || o || (o = !0, m.resolve(c, i)) }
                            t.resolve(e).then(s, function(e) { o || (o = !0, m.reject(c, e)) })
                        }(e[s], s);
                        return c
                    }

                    function p(e) {
                        var t = this;
                        if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
                        var n = e.length,
                            o = !1;
                        if (!n) return this.resolve([]);
                        for (var i = -1, a = new this(r); ++i < n;) ! function(e) { t.resolve(e).then(function(e) { o || (o = !0, m.resolve(a, e)) }, function(e) { o || (o = !0, m.reject(a, e)) }) }(e[i]);
                        return a
                    }
                    var h = e(1),
                        m = {},
                        v = ["REJECTED"],
                        g = ["FULFILLED"],
                        y = ["PENDING"];
                    t.exports = o, o.prototype.catch = function(e) { return this.then(null, e) }, o.prototype.then = function(e, t) { if ("function" != typeof e && this.state === g || "function" != typeof t && this.state === v) return this; var n = new this.constructor(r); if (this.state !== y) { a(n, this.state === g ? e : t, this.outcome) } else this.queue.push(new i(n, e, t)); return n }, i.prototype.callFulfilled = function(e) { m.resolve(this.promise, e) }, i.prototype.otherCallFulfilled = function(e) { a(this.promise, this.onFulfilled, e) }, i.prototype.callRejected = function(e) { m.reject(this.promise, e) }, i.prototype.otherCallRejected = function(e) { a(this.promise, this.onRejected, e) }, m.resolve = function(e, t) {
                        var n = u(s, t);
                        if ("error" === n.status) return m.reject(e, n.value);
                        var r = n.value;
                        if (r) c(e, r);
                        else { e.state = g, e.outcome = t; for (var o = -1, i = e.queue.length; ++o < i;) e.queue[o].callFulfilled(t) }
                        return e
                    }, m.reject = function(e, t) { e.state = v, e.outcome = t; for (var n = -1, r = e.queue.length; ++n < r;) e.queue[n].callRejected(t); return e }, o.resolve = f, o.reject = l, o.all = d, o.race = p
                }, { 1: 1 }],
                3: [function(e, t, n) {
                    (function(t) { "use strict"; "function" != typeof t.Promise && (t.Promise = e(2)) }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                }, { 2: 2 }],
                4: [function(e, t, n) {
                    "use strict";

                    function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

                    function o(e, t) { e = e || [], t = t || {}; try { return new Blob(e, t) } catch (i) { if ("TypeError" !== i.name) throw i; for (var n = "undefined" != typeof BlobBuilder ? BlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : WebKitBlobBuilder, r = new n, o = 0; o < e.length; o += 1) r.append(e[o]); return r.getBlob(t.type) } }

                    function i(e, t) { t && e.then(function(e) { t(null, e) }, function(e) { t(e) }) }

                    function a(e, t, n) { "function" == typeof t && e.then(t), "function" == typeof n && e.catch(n) }

                    function s(e) { return "string" != typeof e && (console.warn(e + " used as a key, but it is not a string."), e = String(e)), e }

                    function c() { if (arguments.length && "function" == typeof arguments[arguments.length - 1]) return arguments[arguments.length - 1] }

                    function u(e) { for (var t = e.length, n = new ArrayBuffer(t), r = new Uint8Array(n), o = 0; o < t; o++) r[o] = e.charCodeAt(o); return n }

                    function f(e) {
                        return new ge(function(t) {
                            var n = e.transaction(ye, Ee),
                                r = o([""]);
                            n.objectStore(ye).put(r, "key"), n.onabort = function(e) { e.preventDefault(), e.stopPropagation(), t(!1) }, n.oncomplete = function() {
                                var e = navigator.userAgent.match(/Chrome\/(\d+)/),
                                    n = navigator.userAgent.match(/Edge\//);
                                t(n || !e || parseInt(e[1], 10) >= 43)
                            }
                        }).catch(function() { return !1 })
                    }

                    function l(e) { return "boolean" == typeof be ? ge.resolve(be) : f(e).then(function(e) { return be = e }) }

                    function d(e) {
                        var t = _e[e.name],
                            n = {};
                        n.promise = new ge(function(e, t) { n.resolve = e, n.reject = t }), t.deferredOperations.push(n), t.dbReady ? t.dbReady = t.dbReady.then(function() { return n.promise }) : t.dbReady = n.promise
                    }

                    function p(e) {
                        var t = _e[e.name],
                            n = t.deferredOperations.pop();
                        if (n) return n.resolve(), n.promise
                    }

                    function h(e, t) {
                        var n = _e[e.name],
                            r = n.deferredOperations.pop();
                        if (r) return r.reject(t), r.promise
                    }

                    function m(e, t) {
                        return new ge(function(n, r) {
                            if (_e[e.name] = _e[e.name] || N(), e.db) {
                                if (!t) return n(e.db);
                                d(e), e.db.close()
                            }
                            var o = [e.name];
                            t && o.push(e.version);
                            var i = ve.open.apply(ve, o);
                            t && (i.onupgradeneeded = function(t) {
                                var n = i.result;
                                try { n.createObjectStore(e.storeName), t.oldVersion <= 1 && n.createObjectStore(ye) } catch (n) {
                                    if ("ConstraintError" !== n.name) throw n;
                                    console.warn('The database "' + e.name + '" has been upgraded from version ' + t.oldVersion + " to version " + t.newVersion + ', but the storage "' + e.storeName + '" already exists.')
                                }
                            }), i.onerror = function(e) { e.preventDefault(), r(i.error) }, i.onsuccess = function() { n(i.result), p(e) }
                        })
                    }

                    function v(e) { return m(e, !1) }

                    function g(e) { return m(e, !0) }

                    function y(e, t) {
                        if (!e.db) return !0;
                        var n = !e.db.objectStoreNames.contains(e.storeName),
                            r = e.version < e.db.version,
                            o = e.version > e.db.version;
                        if (r && (e.version !== t && console.warn('The database "' + e.name + "\" can't be downgraded from version " + e.db.version + " to version " + e.version + "."), e.version = e.db.version), o || n) {
                            if (n) {
                                var i = e.db.version + 1;
                                i > e.version && (e.version = i)
                            }
                            return !0
                        }
                        return !1
                    }

                    function b(e) {
                        return new ge(function(t, n) {
                            var r = new FileReader;
                            r.onerror = n, r.onloadend = function(n) {
                                var r = btoa(n.target.result || "");
                                t({ __local_forage_encoded_blob: !0, data: r, type: e.type })
                            }, r.readAsBinaryString(e)
                        })
                    }

                    function _(e) { return o([u(atob(e.data))], { type: e.type }) }

                    function w(e) { return e && e.__local_forage_encoded_blob }

                    function x(e) {
                        var t = this,
                            n = t._initReady().then(function() { var e = _e[t._dbInfo.name]; if (e && e.dbReady) return e.dbReady });
                        return a(n, e, e), n
                    }

                    function E(e) {
                        d(e);
                        for (var t = _e[e.name], n = t.forages, r = 0; r < n.length; r++) {
                            var o = n[r];
                            o._dbInfo.db && (o._dbInfo.db.close(), o._dbInfo.db = null)
                        }
                        return e.db = null, v(e).then(function(t) { return e.db = t, y(e) ? g(e) : t }).then(function(r) { e.db = t.db = r; for (var o = 0; o < n.length; o++) n[o]._dbInfo.db = r }).catch(function(t) { throw h(e, t), t })
                    }

                    function S(e, t, n, r) {
                        void 0 === r && (r = 1);
                        try {
                            var o = e.db.transaction(e.storeName, t);
                            n(null, o)
                        } catch (o) {
                            if (r > 0 && (!e.db || "InvalidStateError" === o.name || "NotFoundError" === o.name)) return ge.resolve().then(function() { if (!e.db || "NotFoundError" === o.name && !e.db.objectStoreNames.contains(e.storeName) && e.version <= e.db.version) return e.db && (e.version = e.db.version + 1), g(e) }).then(function() { return E(e).then(function() { S(e, t, n, r - 1) }) }).catch(n);
                            n(o)
                        }
                    }

                    function N() { return { forages: [], db: null, dbReady: null, deferredOperations: [] } }

                    function B(e) {
                        function t() { return ge.resolve() }
                        var n = this,
                            r = { db: null };
                        if (e)
                            for (var o in e) r[o] = e[o];
                        var i = _e[r.name];
                        i || (i = N(), _e[r.name] = i), i.forages.push(n), n._initReady || (n._initReady = n.ready, n.ready = x);
                        for (var a = [], s = 0; s < i.forages.length; s++) {
                            var c = i.forages[s];
                            c !== n && a.push(c._initReady().catch(t))
                        }
                        var u = i.forages.slice(0);
                        return ge.all(a).then(function() { return r.db = i.db, v(r) }).then(function(e) { return r.db = e, y(r, n._defaultConfig.version) ? g(r) : e }).then(function(e) {
                            r.db = i.db = e, n._dbInfo = r;
                            for (var t = 0; t < u.length; t++) {
                                var o = u[t];
                                o !== n && (o._dbInfo.db = r.db, o._dbInfo.version = r.version)
                            }
                        })
                    }

                    function R(e, t) {
                        var n = this;
                        e = s(e);
                        var r = new ge(function(t, r) {
                            n.ready().then(function() {
                                S(n._dbInfo, xe, function(o, i) {
                                    if (o) return r(o);
                                    try {
                                        var a = i.objectStore(n._dbInfo.storeName),
                                            s = a.get(e);
                                        s.onsuccess = function() {
                                            var e = s.result;
                                            void 0 === e && (e = null), w(e) && (e = _(e)), t(e)
                                        }, s.onerror = function() { r(s.error) }
                                    } catch (e) { r(e) }
                                })
                            }).catch(r)
                        });
                        return i(r, t), r
                    }

                    function k(e, t) {
                        var n = this,
                            r = new ge(function(t, r) {
                                n.ready().then(function() {
                                    S(n._dbInfo, xe, function(o, i) {
                                        if (o) return r(o);
                                        try {
                                            var a = i.objectStore(n._dbInfo.storeName),
                                                s = a.openCursor(),
                                                c = 1;
                                            s.onsuccess = function() {
                                                var n = s.result;
                                                if (n) {
                                                    var r = n.value;
                                                    w(r) && (r = _(r));
                                                    var o = e(r, n.key, c++);
                                                    void 0 !== o ? t(o) : n.continue()
                                                } else t()
                                            }, s.onerror = function() { r(s.error) }
                                        } catch (e) { r(e) }
                                    })
                                }).catch(r)
                            });
                        return i(r, t), r
                    }

                    function I(e, t, n) {
                        var r = this;
                        e = s(e);
                        var o = new ge(function(n, o) {
                            var i;
                            r.ready().then(function() { return i = r._dbInfo, "[object Blob]" === we.call(t) ? l(i.db).then(function(e) { return e ? t : b(t) }) : t }).then(function(t) {
                                S(r._dbInfo, Ee, function(i, a) {
                                    if (i) return o(i);
                                    try {
                                        var s = a.objectStore(r._dbInfo.storeName);
                                        null === t && (t = void 0);
                                        var c = s.put(t, e);
                                        a.oncomplete = function() { void 0 === t && (t = null), n(t) }, a.onabort = a.onerror = function() {
                                            var e = c.error ? c.error : c.transaction.error;
                                            o(e)
                                        }
                                    } catch (e) { o(e) }
                                })
                            }).catch(o)
                        });
                        return i(o, n), o
                    }

                    function j(e, t) {
                        var n = this;
                        e = s(e);
                        var r = new ge(function(t, r) {
                            n.ready().then(function() {
                                S(n._dbInfo, Ee, function(o, i) {
                                    if (o) return r(o);
                                    try {
                                        var a = i.objectStore(n._dbInfo.storeName),
                                            s = a.delete(e);
                                        i.oncomplete = function() { t() }, i.onerror = function() { r(s.error) }, i.onabort = function() {
                                            var e = s.error ? s.error : s.transaction.error;
                                            r(e)
                                        }
                                    } catch (e) { r(e) }
                                })
                            }).catch(r)
                        });
                        return i(r, t), r
                    }

                    function O(e) {
                        var t = this,
                            n = new ge(function(e, n) {
                                t.ready().then(function() {
                                    S(t._dbInfo, Ee, function(r, o) {
                                        if (r) return n(r);
                                        try {
                                            var i = o.objectStore(t._dbInfo.storeName),
                                                a = i.clear();
                                            o.oncomplete = function() { e() }, o.onabort = o.onerror = function() {
                                                var e = a.error ? a.error : a.transaction.error;
                                                n(e)
                                            }
                                        } catch (e) { n(e) }
                                    })
                                }).catch(n)
                            });
                        return i(n, e), n
                    }

                    function C(e) {
                        var t = this,
                            n = new ge(function(e, n) {
                                t.ready().then(function() {
                                    S(t._dbInfo, xe, function(r, o) {
                                        if (r) return n(r);
                                        try {
                                            var i = o.objectStore(t._dbInfo.storeName),
                                                a = i.count();
                                            a.onsuccess = function() { e(a.result) }, a.onerror = function() { n(a.error) }
                                        } catch (e) { n(e) }
                                    })
                                }).catch(n)
                            });
                        return i(n, e), n
                    }

                    function A(e, t) {
                        var n = this,
                            r = new ge(function(t, r) {
                                if (e < 0) return void t(null);
                                n.ready().then(function() {
                                    S(n._dbInfo, xe, function(o, i) {
                                        if (o) return r(o);
                                        try {
                                            var a = i.objectStore(n._dbInfo.storeName),
                                                s = !1,
                                                c = a.openKeyCursor();
                                            c.onsuccess = function() {
                                                var n = c.result;
                                                if (!n) return void t(null);
                                                0 === e ? t(n.key) : s ? t(n.key) : (s = !0, n.advance(e))
                                            }, c.onerror = function() { r(c.error) }
                                        } catch (e) { r(e) }
                                    })
                                }).catch(r)
                            });
                        return i(r, t), r
                    }

                    function L(e) {
                        var t = this,
                            n = new ge(function(e, n) {
                                t.ready().then(function() {
                                    S(t._dbInfo, xe, function(r, o) {
                                        if (r) return n(r);
                                        try {
                                            var i = o.objectStore(t._dbInfo.storeName),
                                                a = i.openKeyCursor(),
                                                s = [];
                                            a.onsuccess = function() {
                                                var t = a.result;
                                                if (!t) return void e(s);
                                                s.push(t.key), t.continue()
                                            }, a.onerror = function() { n(a.error) }
                                        } catch (e) { n(e) }
                                    })
                                }).catch(n)
                            });
                        return i(n, e), n
                    }

                    function P(e, t) {
                        t = c.apply(this, arguments);
                        var n = this.config();
                        e = "function" != typeof e && e || {}, e.name || (e.name = e.name || n.name, e.storeName = e.storeName || n.storeName);
                        var r, o = this;
                        if (e.name) {
                            var a = e.name === n.name && o._dbInfo.db,
                                s = a ? ge.resolve(o._dbInfo.db) : v(e).then(function(t) {
                                    var n = _e[e.name],
                                        r = n.forages;
                                    n.db = t;
                                    for (var o = 0; o < r.length; o++) r[o]._dbInfo.db = t;
                                    return t
                                });
                            r = e.storeName ? s.then(function(t) {
                                if (t.objectStoreNames.contains(e.storeName)) {
                                    var n = t.version + 1;
                                    d(e);
                                    var r = _e[e.name],
                                        o = r.forages;
                                    t.close();
                                    for (var i = 0; i < o.length; i++) {
                                        var a = o[i];
                                        a._dbInfo.db = null, a._dbInfo.version = n
                                    }
                                    return new ge(function(t, r) {
                                        var o = ve.open(e.name, n);
                                        o.onerror = function(e) { o.result.close(), r(e) }, o.onupgradeneeded = function() { o.result.deleteObjectStore(e.storeName) }, o.onsuccess = function() {
                                            var e = o.result;
                                            e.close(), t(e)
                                        }
                                    }).then(function(e) {
                                        r.db = e;
                                        for (var t = 0; t < o.length; t++) {
                                            var n = o[t];
                                            n._dbInfo.db = e, p(n._dbInfo)
                                        }
                                    }).catch(function(t) { throw (h(e, t) || ge.resolve()).catch(function() {}), t })
                                }
                            }) : s.then(function(t) {
                                d(e);
                                var n = _e[e.name],
                                    r = n.forages;
                                t.close();
                                for (var o = 0; o < r.length; o++) { r[o]._dbInfo.db = null }
                                return new ge(function(t, n) {
                                    var r = ve.deleteDatabase(e.name);
                                    r.onerror = r.onblocked = function(e) {
                                        var t = r.result;
                                        t && t.close(), n(e)
                                    }, r.onsuccess = function() {
                                        var e = r.result;
                                        e && e.close(), t(e)
                                    }
                                }).then(function(e) { n.db = e; for (var t = 0; t < r.length; t++) p(r[t]._dbInfo) }).catch(function(t) { throw (h(e, t) || ge.resolve()).catch(function() {}), t })
                            })
                        } else r = ge.reject("Invalid arguments");
                        return i(r, t), r
                    }

                    function T(e) {
                        var t, n, r, o, i, a = .75 * e.length,
                            s = e.length,
                            c = 0;
                        "=" === e[e.length - 1] && (a--, "=" === e[e.length - 2] && a--);
                        var u = new ArrayBuffer(a),
                            f = new Uint8Array(u);
                        for (t = 0; t < s; t += 4) n = Ne.indexOf(e[t]), r = Ne.indexOf(e[t + 1]), o = Ne.indexOf(e[t + 2]), i = Ne.indexOf(e[t + 3]), f[c++] = n << 2 | r >> 4, f[c++] = (15 & r) << 4 | o >> 2, f[c++] = (3 & o) << 6 | 63 & i;
                        return u
                    }

                    function D(e) {
                        var t, n = new Uint8Array(e),
                            r = "";
                        for (t = 0; t < n.length; t += 3) r += Ne[n[t] >> 2], r += Ne[(3 & n[t]) << 4 | n[t + 1] >> 4], r += Ne[(15 & n[t + 1]) << 2 | n[t + 2] >> 6], r += Ne[63 & n[t + 2]];
                        return n.length % 3 == 2 ? r = r.substring(0, r.length - 1) + "=" : n.length % 3 == 1 && (r = r.substring(0, r.length - 2) + "=="), r
                    }

                    function q(e, t) {
                        var n = "";
                        if (e && (n = ze.call(e)), e && ("[object ArrayBuffer]" === n || e.buffer && "[object ArrayBuffer]" === ze.call(e.buffer))) {
                            var r, o = ke;
                            e instanceof ArrayBuffer ? (r = e, o += je) : (r = e.buffer, "[object Int8Array]" === n ? o += Ce : "[object Uint8Array]" === n ? o += Ae : "[object Uint8ClampedArray]" === n ? o += Le : "[object Int16Array]" === n ? o += Pe : "[object Uint16Array]" === n ? o += De : "[object Int32Array]" === n ? o += Te : "[object Uint32Array]" === n ? o += qe : "[object Float32Array]" === n ? o += Me : "[object Float64Array]" === n ? o += Ue : t(new Error("Failed to get type for BinaryArray"))), t(o + D(r))
                        } else if ("[object Blob]" === n) {
                            var i = new FileReader;
                            i.onload = function() {
                                var n = Be + e.type + "~" + D(this.result);
                                t(ke + Oe + n)
                            }, i.readAsArrayBuffer(e)
                        } else try { t(JSON.stringify(e)) } catch (n) { console.error("Couldn't convert value into a JSON string: ", e), t(null, n) }
                    }

                    function M(e) {
                        if (e.substring(0, Ie) !== ke) return JSON.parse(e);
                        var t, n = e.substring(Fe),
                            r = e.substring(Ie, Fe);
                        if (r === Oe && Re.test(n)) {
                            var i = n.match(Re);
                            t = i[1], n = n.substring(i[0].length)
                        }
                        var a = T(n);
                        switch (r) {
                            case je:
                                return a;
                            case Oe:
                                return o([a], { type: t });
                            case Ce:
                                return new Int8Array(a);
                            case Ae:
                                return new Uint8Array(a);
                            case Le:
                                return new Uint8ClampedArray(a);
                            case Pe:
                                return new Int16Array(a);
                            case De:
                                return new Uint16Array(a);
                            case Te:
                                return new Int32Array(a);
                            case qe:
                                return new Uint32Array(a);
                            case Me:
                                return new Float32Array(a);
                            case Ue:
                                return new Float64Array(a);
                            default:
                                throw new Error("Unkown type: " + r)
                        }
                    }

                    function U(e, t, n, r) { e.executeSql("CREATE TABLE IF NOT EXISTS " + t.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], n, r) }

                    function F(e) {
                        var t = this,
                            n = { db: null };
                        if (e)
                            for (var r in e) n[r] = "string" != typeof e[r] ? e[r].toString() : e[r];
                        var o = new ge(function(e, r) {
                            try { n.db = openDatabase(n.name, String(n.version), n.description, n.size) } catch (e) { return r(e) }
                            n.db.transaction(function(o) { U(o, n, function() { t._dbInfo = n, e() }, function(e, t) { r(t) }) }, r)
                        });
                        return n.serializer = He, o
                    }

                    function z(e, t, n, r, o, i) { e.executeSql(n, r, o, function(e, a) { a.code === a.SYNTAX_ERR ? e.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [t.storeName], function(e, s) { s.rows.length ? i(e, a) : U(e, t, function() { e.executeSql(n, r, o, i) }, i) }, i) : i(e, a) }, i) }

                    function H(e, t) {
                        var n = this;
                        e = s(e);
                        var r = new ge(function(t, r) {
                            n.ready().then(function() {
                                var o = n._dbInfo;
                                o.db.transaction(function(n) {
                                    z(n, o, "SELECT * FROM " + o.storeName + " WHERE key = ? LIMIT 1", [e], function(e, n) {
                                        var r = n.rows.length ? n.rows.item(0).value : null;
                                        r && (r = o.serializer.deserialize(r)), t(r)
                                    }, function(e, t) { r(t) })
                                })
                            }).catch(r)
                        });
                        return i(r, t), r
                    }

                    function G(e, t) {
                        var n = this,
                            r = new ge(function(t, r) {
                                n.ready().then(function() {
                                    var o = n._dbInfo;
                                    o.db.transaction(function(n) {
                                        z(n, o, "SELECT * FROM " + o.storeName, [], function(n, r) {
                                            for (var i = r.rows, a = i.length, s = 0; s < a; s++) {
                                                var c = i.item(s),
                                                    u = c.value;
                                                if (u && (u = o.serializer.deserialize(u)), void 0 !== (u = e(u, c.key, s + 1))) return void t(u)
                                            }
                                            t()
                                        }, function(e, t) { r(t) })
                                    })
                                }).catch(r)
                            });
                        return i(r, t), r
                    }

                    function W(e, t, n, r) {
                        var o = this;
                        e = s(e);
                        var a = new ge(function(i, a) {
                            o.ready().then(function() {
                                void 0 === t && (t = null);
                                var s = t,
                                    c = o._dbInfo;
                                c.serializer.serialize(t, function(t, u) {
                                    u ? a(u) : c.db.transaction(function(n) { z(n, c, "INSERT OR REPLACE INTO " + c.storeName + " (key, value) VALUES (?, ?)", [e, t], function() { i(s) }, function(e, t) { a(t) }) }, function(t) {
                                        if (t.code === t.QUOTA_ERR) {
                                            if (r > 0) return void i(W.apply(o, [e, s, n, r - 1]));
                                            a(t)
                                        }
                                    })
                                })
                            }).catch(a)
                        });
                        return i(a, n), a
                    }

                    function V(e, t, n) { return W.apply(this, [e, t, n, 1]) }

                    function X(e, t) {
                        var n = this;
                        e = s(e);
                        var r = new ge(function(t, r) {
                            n.ready().then(function() {
                                var o = n._dbInfo;
                                o.db.transaction(function(n) { z(n, o, "DELETE FROM " + o.storeName + " WHERE key = ?", [e], function() { t() }, function(e, t) { r(t) }) })
                            }).catch(r)
                        });
                        return i(r, t), r
                    }

                    function J(e) {
                        var t = this,
                            n = new ge(function(e, n) {
                                t.ready().then(function() {
                                    var r = t._dbInfo;
                                    r.db.transaction(function(t) { z(t, r, "DELETE FROM " + r.storeName, [], function() { e() }, function(e, t) { n(t) }) })
                                }).catch(n)
                            });
                        return i(n, e), n
                    }

                    function K(e) {
                        var t = this,
                            n = new ge(function(e, n) {
                                t.ready().then(function() {
                                    var r = t._dbInfo;
                                    r.db.transaction(function(t) {
                                        z(t, r, "SELECT COUNT(key) as c FROM " + r.storeName, [], function(t, n) {
                                            var r = n.rows.item(0).c;
                                            e(r)
                                        }, function(e, t) { n(t) })
                                    })
                                }).catch(n)
                            });
                        return i(n, e), n
                    }

                    function $(e, t) {
                        var n = this,
                            r = new ge(function(t, r) {
                                n.ready().then(function() {
                                    var o = n._dbInfo;
                                    o.db.transaction(function(n) {
                                        z(n, o, "SELECT key FROM " + o.storeName + " WHERE id = ? LIMIT 1", [e + 1], function(e, n) {
                                            var r = n.rows.length ? n.rows.item(0).key : null;
                                            t(r)
                                        }, function(e, t) { r(t) })
                                    })
                                }).catch(r)
                            });
                        return i(r, t), r
                    }

                    function Y(e) {
                        var t = this,
                            n = new ge(function(e, n) {
                                t.ready().then(function() {
                                    var r = t._dbInfo;
                                    r.db.transaction(function(t) {
                                        z(t, r, "SELECT key FROM " + r.storeName, [], function(t, n) {
                                            for (var r = [], o = 0; o < n.rows.length; o++) r.push(n.rows.item(o).key);
                                            e(r)
                                        }, function(e, t) { n(t) })
                                    })
                                }).catch(n)
                            });
                        return i(n, e), n
                    }

                    function Q(e) {
                        return new ge(function(t, n) {
                            e.transaction(function(r) {
                                r.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(n, r) {
                                    for (var o = [], i = 0; i < r.rows.length; i++) o.push(r.rows.item(i).name);
                                    t({ db: e, storeNames: o })
                                }, function(e, t) { n(t) })
                            }, function(e) { n(e) })
                        })
                    }

                    function Z(e, t) {
                        t = c.apply(this, arguments);
                        var n = this.config();
                        e = "function" != typeof e && e || {}, e.name || (e.name = e.name || n.name, e.storeName = e.storeName || n.storeName);
                        var r, o = this;
                        return r = e.name ? new ge(function(t) {
                            var r;
                            r = e.name === n.name ? o._dbInfo.db : openDatabase(e.name, "", "", 0), t(e.storeName ? { db: r, storeNames: [e.storeName] } : Q(r))
                        }).then(function(e) {
                            return new ge(function(t, n) {
                                e.db.transaction(function(r) {
                                    for (var o = [], i = 0, a = e.storeNames.length; i < a; i++) o.push(function(e) { return new ge(function(t, n) { r.executeSql("DROP TABLE IF EXISTS " + e, [], function() { t() }, function(e, t) { n(t) }) }) }(e.storeNames[i]));
                                    ge.all(o).then(function() { t() }).catch(function(e) { n(e) })
                                }, function(e) { n(e) })
                            })
                        }) : ge.reject("Invalid arguments"), i(r, t), r
                    }

                    function ee(e, t) { var n = e.name + "/"; return e.storeName !== t.storeName && (n += e.storeName + "/"), n }

                    function te() { try { return localStorage.setItem("_localforage_support_test", !0), localStorage.removeItem("_localforage_support_test"), !1 } catch (e) { return !0 } }

                    function ne() { return !te() || localStorage.length > 0 }

                    function re(e) {
                        var t = this,
                            n = {};
                        if (e)
                            for (var r in e) n[r] = e[r];
                        return n.keyPrefix = ee(e, t._defaultConfig), ne() ? (t._dbInfo = n, n.serializer = He, ge.resolve()) : ge.reject()
                    }

                    function oe(e) {
                        var t = this,
                            n = t.ready().then(function() {
                                for (var e = t._dbInfo.keyPrefix, n = localStorage.length - 1; n >= 0; n--) {
                                    var r = localStorage.key(n);
                                    0 === r.indexOf(e) && localStorage.removeItem(r)
                                }
                            });
                        return i(n, e), n
                    }

                    function ie(e, t) {
                        var n = this;
                        e = s(e);
                        var r = n.ready().then(function() {
                            var t = n._dbInfo,
                                r = localStorage.getItem(t.keyPrefix + e);
                            return r && (r = t.serializer.deserialize(r)), r
                        });
                        return i(r, t), r
                    }

                    function ae(e, t) {
                        var n = this,
                            r = n.ready().then(function() { for (var t = n._dbInfo, r = t.keyPrefix, o = r.length, i = localStorage.length, a = 1, s = 0; s < i; s++) { var c = localStorage.key(s); if (0 === c.indexOf(r)) { var u = localStorage.getItem(c); if (u && (u = t.serializer.deserialize(u)), void 0 !== (u = e(u, c.substring(o), a++))) return u } } });
                        return i(r, t), r
                    }

                    function se(e, t) {
                        var n = this,
                            r = n.ready().then(function() { var t, r = n._dbInfo; try { t = localStorage.key(e) } catch (e) { t = null } return t && (t = t.substring(r.keyPrefix.length)), t });
                        return i(r, t), r
                    }

                    function ce(e) {
                        var t = this,
                            n = t.ready().then(function() {
                                for (var e = t._dbInfo, n = localStorage.length, r = [], o = 0; o < n; o++) {
                                    var i = localStorage.key(o);
                                    0 === i.indexOf(e.keyPrefix) && r.push(i.substring(e.keyPrefix.length))
                                }
                                return r
                            });
                        return i(n, e), n
                    }

                    function ue(e) {
                        var t = this,
                            n = t.keys().then(function(e) { return e.length });
                        return i(n, e), n
                    }

                    function fe(e, t) {
                        var n = this;
                        e = s(e);
                        var r = n.ready().then(function() {
                            var t = n._dbInfo;
                            localStorage.removeItem(t.keyPrefix + e)
                        });
                        return i(r, t), r
                    }

                    function le(e, t, n) {
                        var r = this;
                        e = s(e);
                        var o = r.ready().then(function() {
                            void 0 === t && (t = null);
                            var n = t;
                            return new ge(function(o, i) {
                                var a = r._dbInfo;
                                a.serializer.serialize(t, function(t, r) {
                                    if (r) i(r);
                                    else try { localStorage.setItem(a.keyPrefix + e, t), o(n) } catch (e) { "QuotaExceededError" !== e.name && "NS_ERROR_DOM_QUOTA_REACHED" !== e.name || i(e), i(e) }
                                })
                            })
                        });
                        return i(o, n), o
                    }

                    function de(e, t) {
                        if (t = c.apply(this, arguments), e = "function" != typeof e && e || {}, !e.name) {
                            var n = this.config();
                            e.name = e.name || n.name, e.storeName = e.storeName || n.storeName
                        }
                        var r, o = this;
                        return r = e.name ? new ge(function(t) { t(e.storeName ? ee(e, o._defaultConfig) : e.name + "/") }).then(function(e) {
                            for (var t = localStorage.length - 1; t >= 0; t--) {
                                var n = localStorage.key(t);
                                0 === n.indexOf(e) && localStorage.removeItem(n)
                            }
                        }) : ge.reject("Invalid arguments"), i(r, t), r
                    }

                    function pe(e, t) { e[t] = function() { var n = arguments; return e.ready().then(function() { return e[t].apply(e, n) }) } }

                    function he() {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = arguments[e];
                            if (t)
                                for (var n in t) t.hasOwnProperty(n) && (Je(t[n]) ? arguments[0][n] = t[n].slice() : arguments[0][n] = t[n])
                        }
                        return arguments[0]
                    }
                    var me = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
                        ve = function() { try { if ("undefined" != typeof indexedDB) return indexedDB; if ("undefined" != typeof webkitIndexedDB) return webkitIndexedDB; if ("undefined" != typeof mozIndexedDB) return mozIndexedDB; if ("undefined" != typeof OIndexedDB) return OIndexedDB; if ("undefined" != typeof msIndexedDB) return msIndexedDB } catch (e) { return } }();
                    "undefined" == typeof Promise && e(3);
                    var ge = Promise,
                        ye = "local-forage-detect-blob-support",
                        be = void 0,
                        _e = {},
                        we = Object.prototype.toString,
                        xe = "readonly",
                        Ee = "readwrite",
                        Se = {
                            _driver: "asyncStorage",
                            _initStorage: B,
                            _support: function() {
                                try {
                                    if (!ve || !ve.open) return !1;
                                    var e = "undefined" != typeof openDatabase && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform),
                                        t = "function" == typeof fetch && -1 !== fetch.toString().indexOf("[native code");
                                    return (!e || t) && "undefined" != typeof indexedDB && "undefined" != typeof IDBKeyRange
                                } catch (e) { return !1 }
                            }(),
                            iterate: k,
                            getItem: R,
                            setItem: I,
                            removeItem: j,
                            clear: O,
                            length: C,
                            key: A,
                            keys: L,
                            dropInstance: P
                        },
                        Ne = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                        Be = "~~local_forage_type~",
                        Re = /^~~local_forage_type~([^~]+)~/,
                        ke = "__lfsc__:",
                        Ie = ke.length,
                        je = "arbf",
                        Oe = "blob",
                        Ce = "si08",
                        Ae = "ui08",
                        Le = "uic8",
                        Pe = "si16",
                        Te = "si32",
                        De = "ur16",
                        qe = "ui32",
                        Me = "fl32",
                        Ue = "fl64",
                        Fe = Ie + je.length,
                        ze = Object.prototype.toString,
                        He = { serialize: q, deserialize: M, stringToBuffer: T, bufferToString: D },
                        Ge = { _driver: "webSQLStorage", _initStorage: F, _support: function() { return "function" == typeof openDatabase }(), iterate: G, getItem: H, setItem: V, removeItem: X, clear: J, length: K, key: $, keys: Y, dropInstance: Z },
                        We = { _driver: "localStorageWrapper", _initStorage: re, _support: function() { try { return "undefined" != typeof localStorage && "setItem" in localStorage && !!localStorage.setItem } catch (e) { return !1 } }(), iterate: ae, getItem: ie, setItem: le, removeItem: fe, clear: oe, length: ue, key: se, keys: ce, dropInstance: de },
                        Ve = function(e, t) { return e === t || "number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t) },
                        Xe = function(e, t) {
                            for (var n = e.length, r = 0; r < n;) {
                                if (Ve(e[r], t)) return !0;
                                r++
                            }
                            return !1
                        },
                        Je = Array.isArray || function(e) { return "[object Array]" === Object.prototype.toString.call(e) },
                        Ke = {},
                        $e = {},
                        Ye = { INDEXEDDB: Se, WEBSQL: Ge, LOCALSTORAGE: We },
                        Qe = [Ye.INDEXEDDB._driver, Ye.WEBSQL._driver, Ye.LOCALSTORAGE._driver],
                        Ze = ["dropInstance"],
                        et = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(Ze),
                        tt = { description: "", driver: Qe.slice(), name: "localforage", size: 4980736, storeName: "keyvaluepairs", version: 1 },
                        nt = function() {
                            function e(t) {
                                r(this, e);
                                for (var n in Ye)
                                    if (Ye.hasOwnProperty(n)) {
                                        var o = Ye[n],
                                            i = o._driver;
                                        this[n] = i, Ke[i] || this.defineDriver(o)
                                    }
                                this._defaultConfig = he({}, tt), this._config = he({}, this._defaultConfig, t), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {})
                            }
                            return e.prototype.config = function(e) {
                                if ("object" === (void 0 === e ? "undefined" : me(e))) {
                                    if (this._ready) return new Error("Can't call config() after localforage has been used.");
                                    for (var t in e) {
                                        if ("storeName" === t && (e[t] = e[t].replace(/\W/g, "_")), "version" === t && "number" != typeof e[t]) return new Error("Database version must be a number.");
                                        this._config[t] = e[t]
                                    }
                                    return !("driver" in e && e.driver) || this.setDriver(this._config.driver)
                                }
                                return "string" == typeof e ? this._config[e] : this._config
                            }, e.prototype.defineDriver = function(e, t, n) {
                                var r = new ge(function(t, n) {
                                    try {
                                        var r = e._driver,
                                            o = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                                        if (!e._driver) return void n(o);
                                        for (var a = et.concat("_initStorage"), s = 0, c = a.length; s < c; s++) { var u = a[s]; if ((!Xe(Ze, u) || e[u]) && "function" != typeof e[u]) return void n(o) }! function() {
                                            for (var t = 0, n = Ze.length; t < n; t++) {
                                                var r = Ze[t];
                                                e[r] || (e[r] = function(e) {
                                                    return function() {
                                                        var t = new Error("Method " + e + " is not implemented by the current driver"),
                                                            n = ge.reject(t);
                                                        return i(n, arguments[arguments.length - 1]), n
                                                    }
                                                }(r))
                                            }
                                        }();
                                        var f = function(n) { Ke[r] && console.info("Redefining LocalForage driver: " + r), Ke[r] = e, $e[r] = n, t() };
                                        "_support" in e ? e._support && "function" == typeof e._support ? e._support().then(f, n) : f(!!e._support) : f(!0)
                                    } catch (e) { n(e) }
                                });
                                return a(r, t, n), r
                            }, e.prototype.driver = function() { return this._driver || null }, e.prototype.getDriver = function(e, t, n) { var r = Ke[e] ? ge.resolve(Ke[e]) : ge.reject(new Error("Driver not found.")); return a(r, t, n), r }, e.prototype.getSerializer = function(e) { var t = ge.resolve(He); return a(t, e), t }, e.prototype.ready = function(e) {
                                var t = this,
                                    n = t._driverSet.then(function() { return null === t._ready && (t._ready = t._initDriver()), t._ready });
                                return a(n, e, e), n
                            }, e.prototype.setDriver = function(e, t, n) {
                                function r() { s._config.driver = s.driver() }

                                function o(e) { return s._extend(e), r(), s._ready = s._initStorage(s._config), s._ready }

                                function i(e) {
                                    return function() {
                                        function t() {
                                            for (; n < e.length;) { var i = e[n]; return n++, s._dbInfo = null, s._ready = null, s.getDriver(i).then(o).catch(t) }
                                            r();
                                            var a = new Error("No available storage method found.");
                                            return s._driverSet = ge.reject(a), s._driverSet
                                        }
                                        var n = 0;
                                        return t()
                                    }
                                }
                                var s = this;
                                Je(e) || (e = [e]);
                                var c = this._getSupportedDrivers(e),
                                    u = null !== this._driverSet ? this._driverSet.catch(function() { return ge.resolve() }) : ge.resolve();
                                return this._driverSet = u.then(function() { var e = c[0]; return s._dbInfo = null, s._ready = null, s.getDriver(e).then(function(e) { s._driver = e._driver, r(), s._wrapLibraryMethodsWithReady(), s._initDriver = i(c) }) }).catch(function() { r(); var e = new Error("No available storage method found."); return s._driverSet = ge.reject(e), s._driverSet }), a(this._driverSet, t, n), this._driverSet
                            }, e.prototype.supports = function(e) { return !!$e[e] }, e.prototype._extend = function(e) { he(this, e) }, e.prototype._getSupportedDrivers = function(e) {
                                for (var t = [], n = 0, r = e.length; n < r; n++) {
                                    var o = e[n];
                                    this.supports(o) && t.push(o)
                                }
                                return t
                            }, e.prototype._wrapLibraryMethodsWithReady = function() { for (var e = 0, t = et.length; e < t; e++) pe(this, et[e]) }, e.prototype.createInstance = function(t) { return new e(t) }, e
                        }(),
                        rt = new nt;
                    t.exports = rt
                }, { 3: 3 }]
            }, {}, [4])(4)
        })
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e, t) { return function() { for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r]; return e.apply(t, n) } }
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) { return !(!e || !e.__CANCEL__) }
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {!o.isUndefined(e) && o.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t) }
        var o = n(0),
            i = n(27),
            a = { "Content-Type": "application/x-www-form-urlencoded" },
            s = {
                adapter: function() { var e; return "undefined" != typeof XMLHttpRequest ? e = n(28) : "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process) && (e = n(34)), e }(),
                transformRequest: [function(e, t) { return i(t, "Accept"), i(t, "Content-Type"), o.isFormData(e) || o.isArrayBuffer(e) || o.isBuffer(e) || o.isStream(e) || o.isFile(e) || o.isBlob(e) ? e : o.isArrayBufferView(e) ? e.buffer : o.isURLSearchParams(e) ? (r(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : o.isObject(e) ? (r(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e }],
                transformResponse: [function(e) {
                    if ("string" == typeof e) try { e = JSON.parse(e) } catch (e) {}
                    return e
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                maxBodyLength: -1,
                validateStatus: function(e) { return e >= 200 && e < 300 }
            };
        s.headers = { common: { Accept: "application/json, text/plain, */*" } }, o.forEach(["delete", "get", "head"], function(e) { s.headers[e] = {} }), o.forEach(["post", "put", "patch"], function(e) { s.headers[e] = o.merge(a) }), e.exports = s
    }, function(e, t, n) {
        "use strict";
        var r = n(2);
        e.exports = function(e, t, n) {
            var o = n.config.validateStatus;
            n.status && o && !o(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e, t, n, r, o) { return e.config = t, n && (e.code = n), e.request = r, e.response = o, e.isAxiosError = !0, e.toJSON = function() { return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: this.config, code: this.code } }, e }
    }, function(e, t, n) {
        "use strict";
        var r = n(30),
            o = n(31);
        e.exports = function(e, t) { return e && !r(t) ? o(e, t) : t }
    }, function(e, t) { e.exports = require("http") }, function(e, t) { e.exports = require("https") }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            v.call(this), this._sanitizeOptions(e), this._options = e, this._ended = !1, this._ending = !1, this._redirectCount = 0, this._redirects = [], this._requestBodyLength = 0, this._requestBodyBuffers = [], t && this.on("response", t);
            var n = this;
            this._onNativeResponse = function(e) { n._processResponse(e) }, this._performRequest()
        }

        function o(e, t) { clearTimeout(e._timeout), e._timeout = setTimeout(function() { e.emit("timeout") }, t) }

        function i() { clearTimeout(this._timeout) }

        function a(e) {
            var t = { maxRedirects: 21, maxBodyLength: 10485760 },
                n = {};
            return Object.keys(e).forEach(function(o) {
                var i = o + ":",
                    a = n[i] = e[o],
                    s = t[o] = Object.create(a);
                s.request = function(e, o, a) { if ("string" == typeof e) { var s = e; try { e = c(new p(s)) } catch (t) { e = d.parse(s) } } else p && e instanceof p ? e = c(e) : (a = o, o = e, e = { protocol: i }); return "function" == typeof o && (a = o, o = null), o = Object.assign({ maxRedirects: t.maxRedirects, maxBodyLength: t.maxBodyLength }, e, o), o.nativeProtocols = n, g.equal(o.protocol, i, "protocol mismatch"), y("options", o), new r(o, a) }, s.get = function(e, t, n) { var r = s.request(e, t, n); return r.end(), r }
            }), t
        }

        function s() {}

        function c(e) { var t = { protocol: e.protocol, hostname: e.hostname.startsWith("[") ? e.hostname.slice(1, -1) : e.hostname, hash: e.hash, search: e.search, pathname: e.pathname, path: e.pathname + e.search, href: e.href }; return "" !== e.port && (t.port = Number(e.port)), t }

        function u(e, t) { var n; for (var r in t) e.test(r) && (n = t[r], delete t[r]); return n }

        function f(e, t) {
            function n(e) { Error.captureStackTrace(this, this.constructor), this.message = e || t }
            return n.prototype = new Error, n.prototype.constructor = n, n.prototype.name = "Error [" + e + "]", n.prototype.code = e, n
        }
        var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
            d = n(13),
            p = d.URL,
            h = n(10),
            m = n(11),
            v = n(35).Writable,
            g = n(36),
            y = n(37),
            b = Object.create(null);
        ["abort", "aborted", "connect", "error", "socket", "timeout"].forEach(function(e) { b[e] = function(t, n, r) { this._redirectable.emit(e, t, n, r) } });
        var _ = f("ERR_FR_REDIRECTION_FAILURE", ""),
            w = f("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded"),
            x = f("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit"),
            E = f("ERR_STREAM_WRITE_AFTER_END", "write after end");
        r.prototype = Object.create(v.prototype), r.prototype.write = function(e, t, n) {
            if (this._ending) throw new E;
            if (!("string" == typeof e || "object" === (void 0 === e ? "undefined" : l(e)) && "length" in e)) throw new TypeError("data should be a string, Buffer or Uint8Array");
            if ("function" == typeof t && (n = t, t = null), 0 === e.length) return void(n && n());
            this._requestBodyLength + e.length <= this._options.maxBodyLength ? (this._requestBodyLength += e.length, this._requestBodyBuffers.push({ data: e, encoding: t }), this._currentRequest.write(e, t, n)) : (this.emit("error", new x), this.abort())
        }, r.prototype.end = function(e, t, n) {
            if ("function" == typeof e ? (n = e, e = t = null) : "function" == typeof t && (n = t, t = null), e) {
                var r = this,
                    o = this._currentRequest;
                this.write(e, t, function() { r._ended = !0, o.end(null, null, n) }), this._ending = !0
            } else this._ended = this._ending = !0, this._currentRequest.end(null, null, n)
        }, r.prototype.setHeader = function(e, t) { this._options.headers[e] = t, this._currentRequest.setHeader(e, t) }, r.prototype.removeHeader = function(e) { delete this._options.headers[e], this._currentRequest.removeHeader(e) }, r.prototype.setTimeout = function(e, t) {
            if (t && this.once("timeout", t), this.socket) o(this, e);
            else {
                var n = this;
                this._currentRequest.once("socket", function() { o(n, e) })
            }
            return this.once("response", i), this.once("error", i), this
        }, ["abort", "flushHeaders", "getHeader", "setNoDelay", "setSocketKeepAlive"].forEach(function(e) { r.prototype[e] = function(t, n) { return this._currentRequest[e](t, n) } }), ["aborted", "connection", "socket"].forEach(function(e) { Object.defineProperty(r.prototype, e, { get: function() { return this._currentRequest[e] } }) }), r.prototype._sanitizeOptions = function(e) {
            if (e.headers || (e.headers = {}), e.host && (e.hostname || (e.hostname = e.host), delete e.host), !e.pathname && e.path) {
                var t = e.path.indexOf("?");
                t < 0 ? e.pathname = e.path : (e.pathname = e.path.substring(0, t), e.search = e.path.substring(t))
            }
        }, r.prototype._performRequest = function() {
            var e = this._options.protocol,
                t = this._options.nativeProtocols[e];
            if (!t) return void this.emit("error", new TypeError("Unsupported protocol " + e));
            if (this._options.agents) {
                var n = e.substr(0, e.length - 1);
                this._options.agent = this._options.agents[n]
            }
            var r = this._currentRequest = t.request(this._options, this._onNativeResponse);
            this._currentUrl = d.format(this._options), r._redirectable = this;
            for (var o in b) o && r.on(o, b[o]);
            if (this._isRedirect) {
                var i = 0,
                    a = this,
                    s = this._requestBodyBuffers;
                ! function e(t) {
                    if (r === a._currentRequest)
                        if (t) a.emit("error", t);
                        else if (i < s.length) {
                        var n = s[i++];
                        r.finished || r.write(n.data, n.encoding, e)
                    } else a._ended && r.end()
                }()
            }
        }, r.prototype._processResponse = function(e) {
            var t = e.statusCode;
            this._options.trackRedirects && this._redirects.push({ url: this._currentUrl, headers: e.headers, statusCode: t });
            var n = e.headers.location;
            if (n && !1 !== this._options.followRedirects && t >= 300 && t < 400) {
                if (this._currentRequest.removeAllListeners(), this._currentRequest.on("error", s), this._currentRequest.abort(), e.destroy(), ++this._redirectCount > this._options.maxRedirects) return void this.emit("error", new w);
                ((301 === t || 302 === t) && "POST" === this._options.method || 303 === t && !/^(?:GET|HEAD)$/.test(this._options.method)) && (this._options.method = "GET", this._requestBodyBuffers = [], u(/^content-/i, this._options.headers));
                var r = u(/^host$/i, this._options.headers) || d.parse(this._currentUrl).hostname,
                    o = d.resolve(this._currentUrl, n);
                y("redirecting to", o), this._isRedirect = !0;
                var i = d.parse(o);
                if (Object.assign(this._options, i), i.hostname !== r && u(/^authorization$/i, this._options.headers), "function" == typeof this._options.beforeRedirect) {
                    var a = { headers: e.headers };
                    try { this._options.beforeRedirect.call(null, this._options, a) } catch (e) { return void this.emit("error", e) }
                    this._sanitizeOptions(this._options)
                }
                try { this._performRequest() } catch (e) {
                    var c = new _("Redirected request failed: " + e.message);
                    c.cause = e, this.emit("error", c)
                }
            } else e.responseUrl = this._currentUrl, e.redirects = this._redirects, this.emit("response", e), this._requestBodyBuffers = []
        }, e.exports = a({ http: h, https: m }), e.exports.wrap = a
    }, function(e, t) { e.exports = require("url") }, function(e, t, n) {
        "use strict";

        function r(e) { var n, r = 0; for (n in e) r = (r << 5) - r + e.charCodeAt(n), r |= 0; return t.colors[Math.abs(r) % t.colors.length] }

        function o(e) {
            function n() {
                if (n.enabled) {
                    var e = n,
                        r = +new Date,
                        o = r - (u || r);
                    e.diff = o, e.prev = u, e.curr = r, u = r;
                    for (var i = new Array(arguments.length), a = 0; a < i.length; a++) i[a] = arguments[a];
                    i[0] = t.coerce(i[0]), "string" != typeof i[0] && i.unshift("%O");
                    var s = 0;
                    i[0] = i[0].replace(/%([a-zA-Z%])/g, function(n, r) {
                        if ("%%" === n) return n;
                        s++;
                        var o = t.formatters[r];
                        if ("function" == typeof o) {
                            var a = i[s];
                            n = o.call(e, a), i.splice(s, 1), s--
                        }
                        return n
                    }), t.formatArgs.call(e, i);
                    (n.log || t.log || console.log.bind(console)).apply(e, i)
                }
            }
            return n.namespace = e, n.enabled = t.enabled(e), n.useColors = t.useColors(), n.color = r(e), "function" == typeof t.init && t.init(n), n
        }

        function i(e) { t.save(e), t.names = [], t.skips = []; for (var n = ("string" == typeof e ? e : "").split(/[\s,]+/), r = n.length, o = 0; o < r; o++) n[o] && (e = n[o].replace(/\*/g, ".*?"), "-" === e[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$"))) }

        function a() { t.enable("") }

        function s(e) {
            var n, r;
            for (n = 0, r = t.skips.length; n < r; n++)
                if (t.skips[n].test(e)) return !1;
            for (n = 0, r = t.names.length; n < r; n++)
                if (t.names[n].test(e)) return !0;
            return !1
        }

        function c(e) { return e instanceof Error ? e.stack || e.message : e }
        t = e.exports = o.debug = o.default = o, t.coerce = c, t.disable = a, t.enable = i, t.enabled = s, t.humanize = n(40), t.names = [], t.skips = [], t.formatters = {};
        var u
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        e.exports = function(e, t) {
            function n(e, t) { return r.isPlainObject(e) && r.isPlainObject(t) ? r.merge(e, t) : r.isPlainObject(t) ? r.merge({}, t) : r.isArray(t) ? t.slice() : t }

            function o(o) { r.isUndefined(t[o]) ? r.isUndefined(e[o]) || (i[o] = n(void 0, e[o])) : i[o] = n(e[o], t[o]) }
            t = t || {};
            var i = {},
                a = ["url", "method", "data"],
                s = ["headers", "auth", "proxy", "params"],
                c = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"],
                u = ["validateStatus"];
            r.forEach(a, function(e) { r.isUndefined(t[e]) || (i[e] = n(void 0, t[e])) }), r.forEach(s, o), r.forEach(c, function(o) { r.isUndefined(t[o]) ? r.isUndefined(e[o]) || (i[o] = n(void 0, e[o])) : i[o] = n(void 0, t[o]) }), r.forEach(u, function(r) { r in t ? i[r] = n(e[r], t[r]) : r in e && (i[r] = n(void 0, e[r])) });
            var f = a.concat(s).concat(c).concat(u),
                l = Object.keys(e).concat(Object.keys(t)).filter(function(e) { return -1 === f.indexOf(e) });
            return r.forEach(l, o), i
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) { this.message = e }
        r.prototype.toString = function() { return "Cancel" + (this.message ? ": " + this.message : "") }, r.prototype.__CANCEL__ = !0, e.exports = r
    }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }

        function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function i(e, t, n) { return n.map(function(n) { return (0, h.loadResource)(e, "" + e.versionPath + t[1] + "/" + n + "/") }) }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.Pokedex = void 0;
        var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
            s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t }
            }(),
            c = n(3),
            u = r(c),
            f = n(18),
            l = r(f),
            d = n(19),
            p = r(d),
            h = n(20),
            m = n(50),
            v = n(51);
        t.Pokedex = function() {
            function e(t) {
                var n = this;
                o(this, e), this.config = new v.Config(t), this.getConfig = function() { return this.config }, l.default.forEach(function(e) { n[e[0]] = function(t) { if (t) { if ("number" == typeof t || "string" == typeof t) return (0, h.loadResource)(n.config, "" + n.config.versionPath + e[1] + "/" + t + "/"); if ("object" === (void 0 === t ? "undefined" : a(t))) return Promise.all(i(n.config, e, t)) } } }), p.default.forEach(function(e) {
                    n[e[0]] = function(t) {
                        var r = n.config.limit,
                            o = n.config.offset;
                        return t && (t.hasOwnProperty("offset") && (o = t.offset), t.hasOwnProperty("limit") && (r = t.limit)), (0, h.loadResource)(n.config, "" + n.config.versionPath + e[1] + "?limit=" + r + "&offset=" + o)
                    }
                }), u.default.config({ name: "pokeapi-js-wrapper" }), this.config.cacheImages && (0, m.installSW)()
            }
            return s(e, [{ key: "resource", value: function(e) { var t = this; return "string" == typeof e ? (0, h.loadResource)(this.config, e) : "object" === (void 0 === e ? "undefined" : a(e)) ? Promise.all(e.map(function(e) { return (0, h.loadResource)(t.config, e) })) : "String or Array is required" } }]), e
        }()
    }, function(e, t) {
        e.exports = [
            ["getBerryByName", "berry"],
            ["getBerryFirmnessByName", "berry-firmness"],
            ["getBerryFlavorByName", "berry-flavor"],
            ["getContestTypeByName", "contest-type"],
            ["getContestEffectById", "contest-effect"],
            ["getSuperContestEffectById", "super-contest-effect"],
            ["getEncounterMethodByName", "encounter-method"],
            ["getEncounterConditionByName", "encounter-condition"],
            ["getEncounterConditionValueByName", "encounter-condition-value"],
            ["getEvolutionChainById", "evolution-chain"],
            ["getEvolutionTriggerByName", "evolution-trigger"],
            ["getGenerationByName", "generation"],
            ["getPokedexByName", "pokedex"],
            ["getVersionByName", "version"],
            ["getVersionGroupByName", "version-group"],
            ["getItemByName", "item"],
            ["getItemAttributeByName", "item-attribute"],
            ["getItemCategoryByName", "item-category"],
            ["getItemFlingEffectByName", "item-fling-effect"],
            ["getItemPocketByName", "item-pocket"],
            ["getMachineById", "machine"],
            ["getMoveByName", "move"],
            ["getMoveAilmentByName", "move-ailment"],
            ["getMoveBattleStyleByName", "move-battle-style"],
            ["getMoveCategoryByName", "move-category"],
            ["getMoveDamageClassByName", "move-damage-class"],
            ["getMoveLearnMethodByName", "move-learn-method"],
            ["getMoveTargetByName", "move-target"],
            ["getLocationByName", "location"],
            ["getLocationAreaByName", "location-area"],
            ["getPalParkAreaByName", "pal-park-area"],
            ["getRegionByName", "region"],
            ["getAbilityByName", "ability"],
            ["getCharacteristicById", "characteristic"],
            ["getEggGroupByName", "egg-group"],
            ["getGenderByName", "gender"],
            ["getGrowthRateByName", "growth-rate"],
            ["getNatureByName", "nature"],
            ["getPokeathlonStatByName", "pokeathlon-stat"],
            ["getPokemonByName", "pokemon"],
            ["getPokemonColorByName", "pokemon-color"],
            ["getPokemonFormByName", "pokemon-form"],
            ["getPokemonHabitatByName", "pokemon-habitat"],
            ["getPokemonShapeByName", "pokemon-shape"],
            ["getPokemonSpeciesByName", "pokemon-species"],
            ["getStatByName", "stat"],
            ["getTypeByName", "type"],
            ["getLanguageByName", "language"]
        ]
    }, function(e, t) {
        e.exports = [
            ["getEndpointsList", ""],
            ["getBerriesList", "berry/"],
            ["getBerriesFirmnesssList", "berry-firmness/"],
            ["getBerriesFlavorsList", "berry-flavor/"],
            ["getContestTypesList", "contest-type/"],
            ["getContestEffectsList", "contest-effect/"],
            ["getSuperContestEffectsList", "super-contest-effect/"],
            ["getEncounterMethodsList", "encounter-method/"],
            ["getEncounterConditionsList", "encounter-condition/"],
            ["getEncounterConditionValuesList", "encounter-condition-value/"],
            ["getEvolutionChainsList", "evolution-chain/"],
            ["getEvolutionTriggersList", "evolution-trigger/"],
            ["getGenerationsList", "generation/"],
            ["getPokedexsList", "pokedex/"],
            ["getVersionsList", "version/"],
            ["getVersionGroupsList", "version-group/"],
            ["getItemsList", "item/"],
            ["getItemAttributesList", "item-attribute/"],
            ["getItemCategoriesList", "item-category/"],
            ["getItemFlingEffectsList", "item-fling-effect/"],
            ["getItemPocketsList", "item-pocket/"],
            ["getMachinesList", "machine/"],
            ["getMovesList", "move/"],
            ["getMoveAilmentsList", "move-ailment/"],
            ["getMoveBattleStylesList", "move-battle-style/"],
            ["getMoveCategoriesList", "move-category/"],
            ["getMoveDamageClassesList", "move-damage-class/"],
            ["getMoveLearnMethodsList", "move-learn-method/"],
            ["getMoveTargetsList", "move-target/"],
            ["getLocationsList", "location/"],
            ["getLocationAreasList", "location-area/"],
            ["getPalParkAreasList", "pal-park-area/"],
            ["getRegionsList", "region/"],
            ["getAbilitiesList", "ability/"],
            ["getCharacteristicsList", "characteristic/"],
            ["getEggGroupsList", "egg-group/"],
            ["getGendersList", "gender/"],
            ["getGrowthRatesList", "growth-rate/"],
            ["getNaturesList", "nature/"],
            ["getPokeathlonStatsList", "pokeathlon-stat/"],
            ["getPokemonsList", "pokemon/"],
            ["getPokemonColorsList", "pokemon-color/"],
            ["getPokemonFormsList", "pokemon-form/"],
            ["getPokemonHabitatsList", "pokemon-habitat/"],
            ["getPokemonShapesList", "pokemon-shape/"],
            ["getPokemonSpeciesList", "pokemon-species/"],
            ["getStatsList", "stat/"],
            ["getTypesList", "type/"],
            ["getLanguagesList", "language/"]
        ]
    }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }

        function o(e, t) { return new Promise(function(n, r) { u.default.ready().then(function() { u.default.getItem("" + f + t).then(function(o) { null === o ? i(e, t).then(function(e) { n(e) }).catch(function(e) { r(e) }) : n(addCacheMark(o)) }).catch(function(o) { i(e, t).then(function(e) { n(e) }).catch(function(e) { r(e) }) }) }).catch(function(o) { i(e, t).then(function(e) { n(e) }).catch(function(e) { r(e) }) }) }) }

        function i(e, t) {
            return new Promise(function(n, r) {
                var o = { baseURL: e.protocol + "://" + e.hostName + "/", timeout: e.timeout };
                s.default.get(t, o).then(function(o) { o.status >= 400 ? r(o) : (e.cache && u.default.setItem("" + f + t, o.data), n(o.data)) }).catch(function(e) { r(e) })
            })
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.loadResource = void 0;
        var a = n(21),
            s = r(a),
            c = n(3),
            u = r(c),
            f = "pokeapi-js-wrapper-";
        t.loadResource = o
    }, function(e, t, n) {
        "use strict";
        e.exports = n(22)
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            var t = new a(e),
                n = i(a.prototype.request, t);
            return o.extend(n, a.prototype, t), o.extend(n, t), n
        }
        var o = n(0),
            i = n(4),
            a = n(23),
            s = n(15),
            c = n(6),
            u = r(c);
        u.Axios = a, u.create = function(e) { return r(s(u.defaults, e)) }, u.Cancel = n(16), u.CancelToken = n(48), u.isCancel = n(5), u.all = function(e) { return Promise.all(e) }, u.spread = n(49), e.exports = u, e.exports.default = u
    }, function(e, t, n) {
        "use strict";

        function r(e) { this.defaults = e, this.interceptors = { request: new a, response: new a } }
        var o = n(0),
            i = n(1),
            a = n(24),
            s = n(25),
            c = n(15);
        r.prototype.request = function(e) {
            "string" == typeof e ? (e = arguments[1] || {}, e.url = arguments[0]) : e = e || {}, e = c(this.defaults, e), e.method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
            var t = [s, void 0],
                n = Promise.resolve(e);
            for (this.interceptors.request.forEach(function(e) { t.unshift(e.fulfilled, e.rejected) }), this.interceptors.response.forEach(function(e) { t.push(e.fulfilled, e.rejected) }); t.length;) n = n.then(t.shift(), t.shift());
            return n
        }, r.prototype.getUri = function(e) { return e = c(this.defaults, e), i(e.url, e.params, e.paramsSerializer).replace(/^\?/, "") }, o.forEach(["delete", "get", "head", "options"], function(e) { r.prototype[e] = function(t, n) { return this.request(c(n || {}, { method: e, url: t, data: (n || {}).data })) } }), o.forEach(["post", "put", "patch"], function(e) { r.prototype[e] = function(t, n, r) { return this.request(c(r || {}, { method: e, url: t, data: n })) } }), e.exports = r
    }, function(e, t, n) {
        "use strict";

        function r() { this.handlers = [] }
        var o = n(0);
        r.prototype.use = function(e, t) { return this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1 }, r.prototype.eject = function(e) { this.handlers[e] && (this.handlers[e] = null) }, r.prototype.forEach = function(e) { o.forEach(this.handlers, function(t) { null !== t && e(t) }) }, e.exports = r
    }, function(e, t, n) {
        "use strict";

        function r(e) { e.cancelToken && e.cancelToken.throwIfRequested() }
        var o = n(0),
            i = n(26),
            a = n(5),
            s = n(6);
        e.exports = function(e) { return r(e), e.headers = e.headers || {}, e.data = i(e.data, e.headers, e.transformRequest), e.headers = o.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), o.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) { delete e.headers[t] }), (e.adapter || s.adapter)(e).then(function(t) { return r(e), t.data = i(t.data, t.headers, e.transformResponse), t }, function(t) { return a(t) || (r(e), t && t.response && (t.response.data = i(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t) }) }
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        e.exports = function(e, t, n) { return r.forEach(n, function(n) { e = n(e, t) }), e }
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        e.exports = function(e, t) { r.forEach(e, function(n, r) { r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r]) }) }
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            o = n(7),
            i = n(29),
            a = n(1),
            s = n(9),
            c = n(32),
            u = n(33),
            f = n(2);
        e.exports = function(e) {
            return new Promise(function(t, n) {
                var l = e.data,
                    d = e.headers;
                r.isFormData(l) && delete d["Content-Type"];
                var p = new XMLHttpRequest;
                if (e.auth) {
                    var h = e.auth.username || "",
                        m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                    d.Authorization = "Basic " + btoa(h + ":" + m)
                }
                var v = s(e.baseURL, e.url);
                if (p.open(e.method.toUpperCase(), a(v, e.params, e.paramsSerializer), !0), p.timeout = e.timeout, p.onreadystatechange = function() {
                        if (p && 4 === p.readyState && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
                            var r = "getAllResponseHeaders" in p ? c(p.getAllResponseHeaders()) : null,
                                i = e.responseType && "text" !== e.responseType ? p.response : p.responseText,
                                a = { data: i, status: p.status, statusText: p.statusText, headers: r, config: e, request: p };
                            o(t, n, a), p = null
                        }
                    }, p.onabort = function() { p && (n(f("Request aborted", e, "ECONNABORTED", p)), p = null) }, p.onerror = function() { n(f("Network Error", e, null, p)), p = null }, p.ontimeout = function() {
                        var t = "timeout of " + e.timeout + "ms exceeded";
                        e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(f(t, e, "ECONNABORTED", p)), p = null
                    }, r.isStandardBrowserEnv()) {
                    var g = (e.withCredentials || u(v)) && e.xsrfCookieName ? i.read(e.xsrfCookieName) : void 0;
                    g && (d[e.xsrfHeaderName] = g)
                }
                if ("setRequestHeader" in p && r.forEach(d, function(e, t) { void 0 === l && "content-type" === t.toLowerCase() ? delete d[t] : p.setRequestHeader(t, e) }), r.isUndefined(e.withCredentials) || (p.withCredentials = !!e.withCredentials), e.responseType) try { p.responseType = e.responseType } catch (t) { if ("json" !== e.responseType) throw t }
                "function" == typeof e.onDownloadProgress && p.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && p.upload && p.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function(e) { p && (p.abort(), n(e), p = null) }), l || (l = null), p.send(l)
            })
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        e.exports = r.isStandardBrowserEnv() ? function() {
            return {
                write: function(e, t, n, o, i, a) {
                    var s = [];
                    s.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), r.isString(o) && s.push("path=" + o), r.isString(i) && s.push("domain=" + i), !0 === a && s.push("secure"), document.cookie = s.join("; ")
                },
                read: function(e) { var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")); return t ? decodeURIComponent(t[3]) : null },
                remove: function(e) { this.write(e, "", Date.now() - 864e5) }
            }
        }() : function() { return { write: function() {}, read: function() { return null }, remove: function() {} } }()
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) { return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e) }
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e, t) { return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e }
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
        e.exports = function(e) {
            var t, n, i, a = {};
            return e ? (r.forEach(e.split("\n"), function(e) {
                if (i = e.indexOf(":"), t = r.trim(e.substr(0, i)).toLowerCase(), n = r.trim(e.substr(i + 1)), t) {
                    if (a[t] && o.indexOf(t) >= 0) return;
                    a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([n]) : a[t] ? a[t] + ", " + n : n
                }
            }), a) : a
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        e.exports = r.isStandardBrowserEnv() ? function() {
            function e(e) { var t = e; return n && (o.setAttribute("href", t), t = o.href), o.setAttribute("href", t), { href: o.href, protocol: o.protocol ? o.protocol.replace(/:$/, "") : "", host: o.host, search: o.search ? o.search.replace(/^\?/, "") : "", hash: o.hash ? o.hash.replace(/^#/, "") : "", hostname: o.hostname, port: o.port, pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname } }
            var t, n = /(msie|trident)/i.test(navigator.userAgent),
                o = document.createElement("a");
            return t = e(window.location.href),
                function(n) { var o = r.isString(n) ? e(n) : n; return o.protocol === t.protocol && o.host === t.host }
        }() : function() { return function() { return !0 } }()
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            o = n(7),
            i = n(9),
            a = n(1),
            s = n(10),
            c = n(11),
            u = n(12).http,
            f = n(12).https,
            l = n(13),
            d = n(46),
            p = n(47),
            h = n(2),
            m = n(8),
            v = /https:?/;
        e.exports = function(e) {
            return new Promise(function(t, n) {
                var g = function(e) { t(e) },
                    y = function(e) { n(e) },
                    b = e.data,
                    _ = e.headers;
                if (_["User-Agent"] || _["user-agent"] || (_["User-Agent"] = "axios/" + p.version), b && !r.isStream(b)) {
                    if (Buffer.isBuffer(b));
                    else if (r.isArrayBuffer(b)) b = Buffer.from(new Uint8Array(b));
                    else {
                        if (!r.isString(b)) return y(h("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream", e));
                        b = Buffer.from(b, "utf-8")
                    }
                    _["Content-Length"] = b.length
                }
                var w = void 0;
                if (e.auth) { w = (e.auth.username || "") + ":" + (e.auth.password || "") }
                var x = i(e.baseURL, e.url),
                    E = l.parse(x),
                    S = E.protocol || "http:";
                if (!w && E.auth) {
                    var N = E.auth.split(":");
                    w = (N[0] || "") + ":" + (N[1] || "")
                }
                w && delete _.Authorization;
                var B = v.test(S),
                    R = B ? e.httpsAgent : e.httpAgent,
                    k = { path: a(E.path, e.params, e.paramsSerializer).replace(/^\?/, ""), method: e.method.toUpperCase(), headers: _, agent: R, agents: { http: e.httpAgent, https: e.httpsAgent }, auth: w };
                e.socketPath ? k.socketPath = e.socketPath : (k.hostname = E.hostname, k.port = E.port);
                var I = e.proxy;
                if (!I && !1 !== I) {
                    var j = S.slice(0, -1) + "_proxy",
                        O = process.env[j] || process.env[j.toUpperCase()];
                    if (O) {
                        var C = l.parse(O),
                            A = process.env.no_proxy || process.env.NO_PROXY,
                            L = !0;
                        if (A) { L = !A.split(",").map(function(e) { return e.trim() }).some(function(e) { return !!e && ("*" === e || ("." === e[0] && E.hostname.substr(E.hostname.length - e.length) === e || E.hostname === e)) }) }
                        if (L && (I = { host: C.hostname, port: C.port }, C.auth)) {
                            var P = C.auth.split(":");
                            I.auth = { username: P[0], password: P[1] }
                        }
                    }
                }
                if (I && (k.hostname = I.host, k.host = I.host, k.headers.host = E.hostname + (E.port ? ":" + E.port : ""), k.port = I.port, k.path = S + "//" + E.hostname + (E.port ? ":" + E.port : "") + k.path, I.auth)) {
                    var T = Buffer.from(I.auth.username + ":" + I.auth.password, "utf8").toString("base64");
                    k.headers["Proxy-Authorization"] = "Basic " + T
                }
                var D, q = B && (!I || v.test(I.protocol));
                e.transport ? D = e.transport : 0 === e.maxRedirects ? D = q ? c : s : (e.maxRedirects && (k.maxRedirects = e.maxRedirects), D = q ? f : u), e.maxBodyLength > -1 && (k.maxBodyLength = e.maxBodyLength);
                var M = D.request(k, function(t) {
                    if (!M.aborted) {
                        var n = t,
                            i = t.req || M;
                        if (204 !== t.statusCode && "HEAD" !== i.method && !1 !== e.decompress) switch (t.headers["content-encoding"]) {
                            case "gzip":
                            case "compress":
                            case "deflate":
                                n = n.pipe(d.createUnzip()), delete t.headers["content-encoding"]
                        }
                        var a = { status: t.statusCode, statusText: t.statusMessage, headers: t.headers, config: e, request: i };
                        if ("stream" === e.responseType) a.data = n, o(g, y, a);
                        else {
                            var s = [];
                            n.on("data", function(t) { s.push(t), e.maxContentLength > -1 && Buffer.concat(s).length > e.maxContentLength && (n.destroy(), y(h("maxContentLength size of " + e.maxContentLength + " exceeded", e, null, i))) }), n.on("error", function(t) { M.aborted || y(m(t, e, null, i)) }), n.on("end", function() { var t = Buffer.concat(s); "arraybuffer" !== e.responseType && (t = t.toString(e.responseEncoding), e.responseEncoding && "utf8" !== e.responseEncoding || (t = r.stripBOM(t))), a.data = t, o(g, y, a) })
                        }
                    }
                });
                M.on("error", function(t) { M.aborted && "ERR_FR_TOO_MANY_REDIRECTS" !== t.code || y(m(t, e, null, M)) }), e.timeout && M.setTimeout(e.timeout, function() { M.abort(), y(h("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", M)) }), e.cancelToken && e.cancelToken.promise.then(function(e) { M.aborted || (M.abort(), y(e)) }), r.isStream(b) ? b.on("error", function(t) { y(m(t, e, null, M)) }).pipe(M) : M.end(b)
            })
        }
    }, function(e, t) { e.exports = require("stream") }, function(e, t) { e.exports = require("assert") }, function(e, t, n) {
        "use strict";
        var r;
        try { r = n(38)("follow-redirects") } catch (e) { r = function() {} }
        e.exports = r
    }, function(e, t, n) { "use strict"; "undefined" != typeof process && "renderer" === process.type ? e.exports = n(39) : e.exports = n(41) }, function(e, t, n) {
        "use strict";

        function r() { return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)) }

        function o(e) {
            var n = this.useColors;
            if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), n) {
                var r = "color: " + this.color;
                e.splice(1, 0, r, "color: inherit");
                var o = 0,
                    i = 0;
                e[0].replace(/%[a-zA-Z%]/g, function(e) { "%%" !== e && (o++, "%c" === e && (i = o)) }), e.splice(i, 0, r)
            }
        }

        function i() { return "object" === ("undefined" == typeof console ? "undefined" : c(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments) }

        function a(e) { try { null == e ? t.storage.removeItem("debug") : t.storage.debug = e } catch (e) {} }

        function s() { var e; try { e = t.storage.debug } catch (e) {} return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), e }
        var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };
        t = e.exports = n(14), t.log = i, t.formatArgs = o, t.save = a, t.load = s, t.useColors = r, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() { try { return window.localStorage } catch (e) {} }(), t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], t.formatters.j = function(e) { try { return JSON.stringify(e) } catch (e) { return "[UnexpectedJSONParseError]: " + e.message } }, t.enable(s())
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e = String(e), !(e.length > 100)) {
                var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                if (t) {
                    var n = parseFloat(t[1]);
                    switch ((t[2] || "ms").toLowerCase()) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return n * d;
                        case "days":
                        case "day":
                        case "d":
                            return n * l;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return n * f;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return n * u;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return n * c;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return n;
                        default:
                            return
                    }
                }
            }
        }

        function o(e) { return e >= l ? Math.round(e / l) + "d" : e >= f ? Math.round(e / f) + "h" : e >= u ? Math.round(e / u) + "m" : e >= c ? Math.round(e / c) + "s" : e + "ms" }

        function i(e) { return a(e, l, "day") || a(e, f, "hour") || a(e, u, "minute") || a(e, c, "second") || e + " ms" }

        function a(e, t, n) { if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s" }
        var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
            c = 1e3,
            u = 60 * c,
            f = 60 * u,
            l = 24 * f,
            d = 365.25 * l;
        e.exports = function(e, t) { t = t || {}; var n = void 0 === e ? "undefined" : s(e); if ("string" === n && e.length > 0) return r(e); if ("number" === n && !1 === isNaN(e)) return t.long ? i(e) : o(e); throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e)) }
    }, function(e, t, n) {
        "use strict";

        function r() { return "colors" in t.inspectOpts ? Boolean(t.inspectOpts.colors) : u.isatty(l) }

        function o(e) {
            var n = this.namespace;
            if (this.useColors) {
                var r = this.color,
                    o = "  [3" + r + ";1m" + n + " [0m";
                e[0] = o + e[0].split("\n").join("\n" + o), e.push("[3" + r + "m+" + t.humanize(this.diff) + "[0m")
            } else e[0] = (new Date).toUTCString() + " " + n + " " + e[0]
        }

        function i() { return d.write(f.format.apply(f, arguments) + "\n") }

        function a(e) { null == e ? delete process.env.DEBUG : process.env.DEBUG = e }

        function s() { return process.env.DEBUG }

        function c(e) { e.inspectOpts = {}; for (var n = Object.keys(t.inspectOpts), r = 0; r < n.length; r++) e.inspectOpts[n[r]] = t.inspectOpts[n[r]] }
        var u = n(42),
            f = n(43);
        t = e.exports = n(14), t.init = c, t.log = i, t.formatArgs = o, t.save = a, t.load = s, t.useColors = r, t.colors = [6, 2, 3, 4, 5, 1], t.inspectOpts = Object.keys(process.env).filter(function(e) { return /^debug_/i.test(e) }).reduce(function(e, t) {
            var n = t.substring(6).toLowerCase().replace(/_([a-z])/g, function(e, t) { return t.toUpperCase() }),
                r = process.env[t];
            return r = !!/^(yes|on|true|enabled)$/i.test(r) || !/^(no|off|false|disabled)$/i.test(r) && ("null" === r ? null : Number(r)), e[n] = r, e
        }, {});
        var l = parseInt(process.env.DEBUG_FD, 10) || 2;
        1 !== l && 2 !== l && f.deprecate(function() {}, "except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)")();
        var d = 1 === l ? process.stdout : 2 === l ? process.stderr : function(e) {
            var t;
            switch (process.binding("tty_wrap").guessHandleType(e)) {
                case "TTY":
                    t = new u.WriteStream(e), t._type = "tty", t._handle && t._handle.unref && t._handle.unref();
                    break;
                case "FILE":
                    t = new(n(44).SyncWriteStream)(e, { autoClose: !1 }), t._type = "fs";
                    break;
                case "PIPE":
                case "TCP":
                    t = new(n(45).Socket)({ fd: e, readable: !1, writable: !0 }), t.readable = !1, t.read = null, t._type = "pipe", t._handle && t._handle.unref && t._handle.unref();
                    break;
                default:
                    throw new Error("Implement me. Unknown stream file type!")
            }
            return t.fd = e, t._isStdio = !0, t
        }(l);
        t.formatters.o = function(e) { return this.inspectOpts.colors = this.useColors, f.inspect(e, this.inspectOpts).split("\n").map(function(e) { return e.trim() }).join(" ") }, t.formatters.O = function(e) { return this.inspectOpts.colors = this.useColors, f.inspect(e, this.inspectOpts) }, t.enable(s())
    }, function(e, t) { e.exports = require("tty") }, function(e, t) { e.exports = require("util") }, function(e, t) { e.exports = require("fs") }, function(e, t) { e.exports = require("net") }, function(e, t) { e.exports = require("zlib") }, function(e, t) { e.exports = { _from: "axios@^0.21.0", _id: "axios@0.21.0", _inBundle: !1, _integrity: "sha512-fmkJBknJKoZwem3/IKSSLpkdNXZeBu5Q7GA/aRsr2btgrptmSCxi2oFjZHqGdK9DoTil9PIHlPIZw2EcRJXRvw==", _location: "/axios", _phantomChildren: {}, _requested: { type: "range", registry: !0, raw: "axios@^0.21.0", name: "axios", escapedName: "axios", rawSpec: "^0.21.0", saveSpec: null, fetchSpec: "^0.21.0" }, _requiredBy: ["/"], _resolved: "https://registry.npmjs.org/axios/-/axios-0.21.0.tgz", _shasum: "26df088803a2350dff2c27f96fef99fe49442aca", _spec: "axios@^0.21.0", _where: "C:\\Users\\Ale\\Documents\\GitHub\\pokeapi-js-wrapper", author: { name: "Matt Zabriskie" }, browser: { "./lib/adapters/http.js": "./lib/adapters/xhr.js" }, bugs: { url: "https://github.com/axios/axios/issues" }, bundleDependencies: !1, bundlesize: [{ path: "./dist/axios.min.js", threshold: "5kB" }], dependencies: { "follow-redirects": "^1.10.0" }, deprecated: !1, description: "Promise based HTTP client for the browser and node.js", devDependencies: { bundlesize: "^0.17.0", coveralls: "^3.0.0", "es6-promise": "^4.2.4", grunt: "^1.0.2", "grunt-banner": "^0.6.0", "grunt-cli": "^1.2.0", "grunt-contrib-clean": "^1.1.0", "grunt-contrib-watch": "^1.0.0", "grunt-eslint": "^20.1.0", "grunt-karma": "^2.0.0", "grunt-mocha-test": "^0.13.3", "grunt-ts": "^6.0.0-beta.19", "grunt-webpack": "^1.0.18", "istanbul-instrumenter-loader": "^1.0.0", "jasmine-core": "^2.4.1", karma: "^1.3.0", "karma-chrome-launcher": "^2.2.0", "karma-coverage": "^1.1.1", "karma-firefox-launcher": "^1.1.0", "karma-jasmine": "^1.1.1", "karma-jasmine-ajax": "^0.1.13", "karma-opera-launcher": "^1.0.0", "karma-safari-launcher": "^1.0.0", "karma-sauce-launcher": "^1.2.0", "karma-sinon": "^1.0.5", "karma-sourcemap-loader": "^0.3.7", "karma-webpack": "^1.7.0", "load-grunt-tasks": "^3.5.2", minimist: "^1.2.0", mocha: "^5.2.0", sinon: "^4.5.0", typescript: "^2.8.1", "url-search-params": "^0.10.0", webpack: "^1.13.1", "webpack-dev-server": "^1.14.1" }, homepage: "https://github.com/axios/axios", jsdelivr: "dist/axios.min.js", keywords: ["xhr", "http", "ajax", "promise", "node"], license: "MIT", main: "index.js", name: "axios", repository: { type: "git", url: "git+https://github.com/axios/axios.git" }, scripts: { build: "NODE_ENV=production grunt build", coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js", examples: "node ./examples/server.js", fix: "eslint --fix lib/**/*.js", postversion: "git push && git push --tags", preversion: "npm test", start: "node ./sandbox/server.js", test: "grunt test && bundlesize", version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json" }, typings: "./index.d.ts", unpkg: "dist/axios.min.js", version: "0.21.0" } }, function(e, t, n) {
        "use strict";

        function r(e) {
            if ("function" != typeof e) throw new TypeError("executor must be a function.");
            var t;
            this.promise = new Promise(function(e) { t = e });
            var n = this;
            e(function(e) { n.reason || (n.reason = new o(e), t(n.reason)) })
        }
        var o = n(16);
        r.prototype.throwIfRequested = function() { if (this.reason) throw this.reason }, r.source = function() { var e; return { token: new r(function(t) { e = t }), cancel: e } }, e.exports = r
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) { return function(t) { return e.apply(null, t) } }
    }, function(e, t, n) {
        "use strict";

        function r() { navigator && window && "serviceWorker" in navigator && window.addEventListener("load", function() { navigator.serviceWorker.register("./pokeapi-js-wrapper-sw.js", { scope: "./" }).catch(function(e) { console.log("Pokeapi-js-wrapper SW installation failed with the following error:"), console.error(e) }) }) }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.installSW = r
    }, function(e, t, n) {
        "use strict";

        function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            r(this, e), this.protocol = "https", this.hostName = "pokeapi.co", this.versionPath = "/api/v2/", this.offset = 0, this.limit = 1e5, this.timeout = 1e4, this.cache = !0, this.cacheImages = !1, t.hasOwnProperty("protocol") && (this.protocol = t.protocol), t.hasOwnProperty("hostName") && (this.hostName = t.hostName), t.hasOwnProperty("versionPath") && (this.versionPath = t.versionPath), t.hasOwnProperty("offset") && (this.offset = t.offset - 1), t.hasOwnProperty("limit") && (this.limit = t.limit), t.hasOwnProperty("timeout") && (this.timeout = t.timeout), t.hasOwnProperty("cache") && (this.cache = t.cache), t.hasOwnProperty("cacheImages") && (this.cacheImages = t.cacheImages)
        };
        t.Config = o
    }])
});
//# sourceMappingURL=index.js.map