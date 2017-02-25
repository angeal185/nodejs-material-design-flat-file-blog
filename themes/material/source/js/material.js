jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(t, e, i, n, o) {
            return jQuery.easing[jQuery.easing.def](t, e, i, n, o)
        },
        easeInQuad: function(t, e, i, n, o) {
            return n * (e /= o) * e + i
        },
        easeOutQuad: function(t, e, i, n, o) {
            return -n * (e /= o) * (e - 2) + i
        },
        easeInOutQuad: function(t, e, i, n, o) {
            return (e /= o / 2) < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i
        },
        easeInCubic: function(t, e, i, n, o) {
            return n * (e /= o) * e * e + i
        },
        easeOutCubic: function(t, e, i, n, o) {
            return n * ((e = e / o - 1) * e * e + 1) + i
        },
        easeInOutCubic: function(t, e, i, n, o) {
            return (e /= o / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
        },
        easeInQuart: function(t, e, i, n, o) {
            return n * (e /= o) * e * e * e + i
        },
        easeOutQuart: function(t, e, i, n, o) {
            return -n * ((e = e / o - 1) * e * e * e - 1) + i
        },
        easeInOutQuart: function(t, e, i, n, o) {
            return (e /= o / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i
        },
        easeInQuint: function(t, e, i, n, o) {
            return n * (e /= o) * e * e * e * e + i
        },
        easeOutQuint: function(t, e, i, n, o) {
            return n * ((e = e / o - 1) * e * e * e * e + 1) + i
        },
        easeInOutQuint: function(t, e, i, n, o) {
            return (e /= o / 2) < 1 ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i
        },
        easeInSine: function(t, e, i, n, o) {
            return -n * Math.cos(e / o * (Math.PI / 2)) + n + i
        },
        easeOutSine: function(t, e, i, n, o) {
            return n * Math.sin(e / o * (Math.PI / 2)) + i
        },
        easeInOutSine: function(t, e, i, n, o) {
            return -n / 2 * (Math.cos(Math.PI * e / o) - 1) + i
        },
        easeInExpo: function(t, e, i, n, o) {
            return 0 == e ? i : n * Math.pow(2, 10 * (e / o - 1)) + i
        },
        easeOutExpo: function(t, e, i, n, o) {
            return e == o ? i + n : n * (-Math.pow(2, -10 * e / o) + 1) + i
        },
        easeInOutExpo: function(t, e, i, n, o) {
            return 0 == e ? i : e == o ? i + n : (e /= o / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (-Math.pow(2, -10 * --e) + 2) + i
        },
        easeInCirc: function(t, e, i, n, o) {
            return -n * (Math.sqrt(1 - (e /= o) * e) - 1) + i
        },
        easeOutCirc: function(t, e, i, n, o) {
            return n * Math.sqrt(1 - (e = e / o - 1) * e) + i
        },
        easeInOutCirc: function(t, e, i, n, o) {
            return (e /= o / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
        },
        easeInElastic: function(t, e, i, n, o) {
            var a = 1.70158,
                s = 0,
                r = n;
            if (0 == e) return i;
            if (1 == (e /= o)) return i + n;
            if (s || (s = .3 * o), r < Math.abs(n)) {
                r = n;
                var a = s / 4
            } else var a = s / (2 * Math.PI) * Math.asin(n / r);
            return -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - a) * (2 * Math.PI) / s)) + i
        },
        easeOutElastic: function(t, e, i, n, o) {
            var a = 1.70158,
                s = 0,
                r = n;
            if (0 == e) return i;
            if (1 == (e /= o)) return i + n;
            if (s || (s = .3 * o), r < Math.abs(n)) {
                r = n;
                var a = s / 4
            } else var a = s / (2 * Math.PI) * Math.asin(n / r);
            return r * Math.pow(2, -10 * e) * Math.sin((e * o - a) * (2 * Math.PI) / s) + n + i
        },
        easeInOutElastic: function(t, e, i, n, o) {
            var a = 1.70158,
                s = 0,
                r = n;
            if (0 == e) return i;
            if (2 == (e /= o / 2)) return i + n;
            if (s || (s = o * (.3 * 1.5)), r < Math.abs(n)) {
                r = n;
                var a = s / 4
            } else var a = s / (2 * Math.PI) * Math.asin(n / r);
            return 1 > e ? -.5 * (r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - a) * (2 * Math.PI) / s)) + i : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * o - a) * (2 * Math.PI) / s) * .5 + n + i
        },
        easeInBack: function(t, e, i, n, o, a) {
            return void 0 == a && (a = 1.70158), n * (e /= o) * e * ((a + 1) * e - a) + i
        },
        easeOutBack: function(t, e, i, n, o, a) {
            return void 0 == a && (a = 1.70158), n * ((e = e / o - 1) * e * ((a + 1) * e + a) + 1) + i
        },
        easeInOutBack: function(t, e, i, n, o, a) {
            return void 0 == a && (a = 1.70158), (e /= o / 2) < 1 ? n / 2 * (e * e * (((a *= 1.525) + 1) * e - a)) + i : n / 2 * ((e -= 2) * e * (((a *= 1.525) + 1) * e + a) + 2) + i
        },
        easeInBounce: function(t, e, i, n, o) {
            return n - jQuery.easing.easeOutBounce(t, o - e, 0, n, o) + i
        },
        easeOutBounce: function(t, e, i, n, o) {
            return (e /= o) < 1 / 2.75 ? n * (7.5625 * e * e) + i : 2 / 2.75 > e ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : 2.5 / 2.75 > e ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
        },
        easeInOutBounce: function(t, e, i, n, o) {
            return o / 2 > e ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, o) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - o, 0, n, o) + .5 * n + i
        }
    }),
    function(t) {
        t.Package ? Materialize = {} : t.Materialize = {}
    }(window), Materialize.guid = function() {
        function t() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return function() {
            return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
        }
    }(), Materialize.elementOrParentIsFixed = function(t) {
        var e = $(t),
            i = e.add(e.parents()),
            n = !1;
        return i.each(function() {
            return "fixed" === $(this).css("position") ? (n = !0, !1) : void 0
        }), n
    };
var Vel;
Vel = $ ? $.Velocity : jQuery ? jQuery.Velocity : Velocity, jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (! function(t) {
        function e(t) {
            var e = t.length,
                n = i.type(t);
            return "function" === n || i.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
        }
        if (!t.jQuery) {
            var i = function(t, e) {
                return new i.fn.init(t, e)
            };
            i.isWindow = function(t) {
                return null != t && t == t.window
            }, i.type = function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? o[s.call(t)] || "object" : typeof t
            }, i.isArray = Array.isArray || function(t) {
                return "array" === i.type(t)
            }, i.isPlainObject = function(t) {
                var e;
                if (!t || "object" !== i.type(t) || t.nodeType || i.isWindow(t)) return !1;
                try {
                    if (t.constructor && !a.call(t, "constructor") && !a.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                for (e in t);
                return void 0 === e || a.call(t, e)
            }, i.each = function(t, i, n) {
                var o, a = 0,
                    s = t.length,
                    r = e(t);
                if (n) {
                    if (r)
                        for (; s > a && (o = i.apply(t[a], n), o !== !1); a++);
                    else
                        for (a in t)
                            if (o = i.apply(t[a], n), o === !1) break
                } else if (r)
                    for (; s > a && (o = i.call(t[a], a, t[a]), o !== !1); a++);
                else
                    for (a in t)
                        if (o = i.call(t[a], a, t[a]), o === !1) break; return t
            }, i.data = function(t, e, o) {
                if (void 0 === o) {
                    var a = t[i.expando],
                        s = a && n[a];
                    if (void 0 === e) return s;
                    if (s && e in s) return s[e]
                } else if (void 0 !== e) {
                    var a = t[i.expando] || (t[i.expando] = ++i.uuid);
                    return n[a] = n[a] || {}, n[a][e] = o, o
                }
            }, i.removeData = function(t, e) {
                var o = t[i.expando],
                    a = o && n[o];
                a && i.each(e, function(t, e) {
                    delete a[e]
                })
            }, i.extend = function() {
                var t, e, n, o, a, s, r = arguments[0] || {},
                    l = 1,
                    c = arguments.length,
                    u = !1;
                for ("boolean" == typeof r && (u = r, r = arguments[l] || {}, l++), "object" != typeof r && "function" !== i.type(r) && (r = {}), l === c && (r = this, l--); c > l; l++)
                    if (null != (a = arguments[l]))
                        for (o in a) t = r[o], n = a[o], r !== n && (u && n && (i.isPlainObject(n) || (e = i.isArray(n))) ? (e ? (e = !1, s = t && i.isArray(t) ? t : []) : s = t && i.isPlainObject(t) ? t : {}, r[o] = i.extend(u, s, n)) : void 0 !== n && (r[o] = n));
                return r
            }, i.queue = function(t, n, o) {
                function a(t, i) {
                    var n = i || [];
                    return null != t && (e(Object(t)) ? ! function(t, e) {
                        for (var i = +e.length, n = 0, o = t.length; i > n;) t[o++] = e[n++];
                        if (i !== i)
                            for (; void 0 !== e[n];) t[o++] = e[n++];
                        return t.length = o, t
                    }(n, "string" == typeof t ? [t] : t) : [].push.call(n, t)), n
                }
                if (t) {
                    n = (n || "fx") + "queue";
                    var s = i.data(t, n);
                    return o ? (!s || i.isArray(o) ? s = i.data(t, n, a(o)) : s.push(o), s) : s || []
                }
            }, i.dequeue = function(t, e) {
                i.each(t.nodeType ? [t] : t, function(t, n) {
                    e = e || "fx";
                    var o = i.queue(n, e),
                        a = o.shift();
                    "inprogress" === a && (a = o.shift()), a && ("fx" === e && o.unshift("inprogress"), a.call(n, function() {
                        i.dequeue(n, e)
                    }))
                })
            }, i.fn = i.prototype = {
                init: function(t) {
                    if (t.nodeType) return this[0] = t, this;
                    throw new Error("Not a DOM node.")
                },
                offset: function() {
                    var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                        left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    }
                },
                position: function() {
                    function t() {
                        for (var t = this.offsetParent || document; t && "html" === !t.nodeType.toLowerCase && "static" === t.style.position;) t = t.offsetParent;
                        return t || document
                    }
                    var e = this[0],
                        t = t.apply(e),
                        n = this.offset(),
                        o = /^(?:body|html)$/i.test(t.nodeName) ? {
                            top: 0,
                            left: 0
                        } : i(t).offset();
                    return n.top -= parseFloat(e.style.marginTop) || 0, n.left -= parseFloat(e.style.marginLeft) || 0, t.style && (o.top += parseFloat(t.style.borderTopWidth) || 0, o.left += parseFloat(t.style.borderLeftWidth) || 0), {
                        top: n.top - o.top,
                        left: n.left - o.left
                    }
                }
            };
            var n = {};
            i.expando = "velocity" + (new Date).getTime(), i.uuid = 0;
            for (var o = {}, a = o.hasOwnProperty, s = o.toString, r = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < r.length; l++) o["[object " + r[l] + "]"] = r[l].toLowerCase();
            i.fn.init.prototype = i.fn, t.Velocity = {
                Utilities: i
            }
        }
    }(window), function(t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : t()
    }(function() {
        return function(t, e, i, n) {
            function o(t) {
                for (var e = -1, i = t ? t.length : 0, n = []; ++e < i;) {
                    var o = t[e];
                    o && n.push(o)
                }
                return n
            }

            function a(t) {
                return v.isWrapped(t) ? t = [].slice.call(t) : v.isNode(t) && (t = [t]), t
            }

            function s(t) {
                var e = d.data(t, "velocity");
                return null === e ? n : e
            }

            function r(t) {
                return function(e) {
                    return Math.round(e * t) * (1 / t)
                }
            }

            function l(t, i, n, o) {
                function a(t, e) {
                    return 1 - 3 * e + 3 * t
                }

                function s(t, e) {
                    return 3 * e - 6 * t
                }

                function r(t) {
                    return 3 * t
                }

                function l(t, e, i) {
                    return ((a(e, i) * t + s(e, i)) * t + r(e)) * t
                }

                function c(t, e, i) {
                    return 3 * a(e, i) * t * t + 2 * s(e, i) * t + r(e)
                }

                function u(e, i) {
                    for (var o = 0; v > o; ++o) {
                        var a = c(i, t, n);
                        if (0 === a) return i;
                        var s = l(i, t, n) - e;
                        i -= s / a
                    }
                    return i
                }

                function h() {
                    for (var e = 0; b > e; ++e) S[e] = l(e * w, t, n)
                }

                function d(e, i, o) {
                    var a, s, r = 0;
                    do s = i + (o - i) / 2, a = l(s, t, n) - e, a > 0 ? o = s : i = s; while (Math.abs(a) > g && ++r < y);
                    return s
                }

                function f(e) {
                    for (var i = 0, o = 1, a = b - 1; o != a && S[o] <= e; ++o) i += w;
                    --o;
                    var s = (e - S[o]) / (S[o + 1] - S[o]),
                        r = i + s * w,
                        l = c(r, t, n);
                    return l >= m ? u(e, r) : 0 == l ? r : d(e, i, i + w)
                }

                function p() {
                    k = !0, (t != i || n != o) && h()
                }
                var v = 4,
                    m = .001,
                    g = 1e-7,
                    y = 10,
                    b = 11,
                    w = 1 / (b - 1),
                    x = "Float32Array" in e;
                if (4 !== arguments.length) return !1;
                for (var C = 0; 4 > C; ++C)
                    if ("number" != typeof arguments[C] || isNaN(arguments[C]) || !isFinite(arguments[C])) return !1;
                t = Math.min(t, 1), n = Math.min(n, 1), t = Math.max(t, 0), n = Math.max(n, 0);
                var S = x ? new Float32Array(b) : new Array(b),
                    k = !1,
                    P = function(e) {
                        return k || p(), t === i && n === o ? e : 0 === e ? 0 : 1 === e ? 1 : l(f(e), i, o)
                    };
                P.getControlPoints = function() {
                    return [{
                        x: t,
                        y: i
                    }, {
                        x: n,
                        y: o
                    }]
                };
                var T = "generateBezier(" + [t, i, n, o] + ")";
                return P.toString = function() {
                    return T
                }, P
            }

            function c(t, e) {
                var i = t;
                return v.isString(t) ? b.Easings[t] || (i = !1) : i = v.isArray(t) && 1 === t.length ? r.apply(null, t) : v.isArray(t) && 2 === t.length ? w.apply(null, t.concat([e])) : v.isArray(t) && 4 === t.length ? l.apply(null, t) : !1, i === !1 && (i = b.Easings[b.defaults.easing] ? b.defaults.easing : y), i
            }

            function u(t) {
                if (t) {
                    var e = (new Date).getTime(),
                        i = b.State.calls.length;
                    i > 1e4 && (b.State.calls = o(b.State.calls));
                    for (var a = 0; i > a; a++)
                        if (b.State.calls[a]) {
                            var r = b.State.calls[a],
                                l = r[0],
                                c = r[2],
                                f = r[3],
                                p = !!f,
                                m = null;
                            f || (f = b.State.calls[a][3] = e - 16);
                            for (var g = Math.min((e - f) / c.duration, 1), y = 0, w = l.length; w > y; y++) {
                                var C = l[y],
                                    k = C.element;
                                if (s(k)) {
                                    var P = !1;
                                    if (c.display !== n && null !== c.display && "none" !== c.display) {
                                        if ("flex" === c.display) {
                                            var T = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                            d.each(T, function(t, e) {
                                                x.setPropertyValue(k, "display", e)
                                            })
                                        }
                                        x.setPropertyValue(k, "display", c.display)
                                    }
                                    c.visibility !== n && "hidden" !== c.visibility && x.setPropertyValue(k, "visibility", c.visibility);
                                    for (var E in C)
                                        if ("element" !== E) {
                                            var A, L = C[E],
                                                M = v.isString(L.easing) ? b.Easings[L.easing] : L.easing;
                                            if (1 === g) A = L.endValue;
                                            else {
                                                var I = L.endValue - L.startValue;
                                                if (A = L.startValue + I * M(g, c, I), !p && A === L.currentValue) continue
                                            }
                                            if (L.currentValue = A, "tween" === E) m = A;
                                            else {
                                                if (x.Hooks.registered[E]) {
                                                    var O = x.Hooks.getRoot(E),
                                                        F = s(k).rootPropertyValueCache[O];
                                                    F && (L.rootPropertyValue = F)
                                                }
                                                var R = x.setPropertyValue(k, E, L.currentValue + (0 === parseFloat(A) ? "" : L.unitType), L.rootPropertyValue, L.scrollData);
                                                x.Hooks.registered[E] && (s(k).rootPropertyValueCache[O] = x.Normalizations.registered[O] ? x.Normalizations.registered[O]("extract", null, R[1]) : R[1]), "transform" === R[0] && (P = !0)
                                            }
                                        }
                                    c.mobileHA && s(k).transformCache.translate3d === n && (s(k).transformCache.translate3d = "(0px, 0px, 0px)", P = !0), P && x.flushTransformCache(k)
                                }
                            }
                            c.display !== n && "none" !== c.display && (b.State.calls[a][2].display = !1), c.visibility !== n && "hidden" !== c.visibility && (b.State.calls[a][2].visibility = !1), c.progress && c.progress.call(r[1], r[1], g, Math.max(0, f + c.duration - e), f, m), 1 === g && h(a)
                        }
                }
                b.State.isTicking && S(u)
            }

            function h(t, e) {
                if (!b.State.calls[t]) return !1;
                for (var i = b.State.calls[t][0], o = b.State.calls[t][1], a = b.State.calls[t][2], r = b.State.calls[t][4], l = !1, c = 0, u = i.length; u > c; c++) {
                    var h = i[c].element;
                    if (e || a.loop || ("none" === a.display && x.setPropertyValue(h, "display", a.display), "hidden" === a.visibility && x.setPropertyValue(h, "visibility", a.visibility)), a.loop !== !0 && (d.queue(h)[1] === n || !/\.velocityQueueEntryFlag/i.test(d.queue(h)[1])) && s(h)) {
                        s(h).isAnimating = !1, s(h).rootPropertyValueCache = {};
                        var f = !1;
                        d.each(x.Lists.transforms3D, function(t, e) {
                            var i = /^scale/.test(e) ? 1 : 0,
                                o = s(h).transformCache[e];
                            s(h).transformCache[e] !== n && new RegExp("^\\(" + i + "[^.]").test(o) && (f = !0, delete s(h).transformCache[e])
                        }), a.mobileHA && (f = !0, delete s(h).transformCache.translate3d), f && x.flushTransformCache(h), x.Values.removeClass(h, "velocity-animating")
                    }
                    if (!e && a.complete && !a.loop && c === u - 1) try {
                        a.complete.call(o, o)
                    } catch (p) {
                        setTimeout(function() {
                            throw p
                        }, 1)
                    }
                    r && a.loop !== !0 && r(o), s(h) && a.loop === !0 && !e && (d.each(s(h).tweensContainer, function(t, e) {
                        /^rotate/.test(t) && 360 === parseFloat(e.endValue) && (e.endValue = 0, e.startValue = 360), /^backgroundPosition/.test(t) && 100 === parseFloat(e.endValue) && "%" === e.unitType && (e.endValue = 0, e.startValue = 100)
                    }), b(h, "reverse", {
                        loop: !0,
                        delay: a.delay
                    })), a.queue !== !1 && d.dequeue(h, a.queue)
                }
                b.State.calls[t] = !1;
                for (var v = 0, m = b.State.calls.length; m > v; v++)
                    if (b.State.calls[v] !== !1) {
                        l = !0;
                        break
                    }
                l === !1 && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = [])
            }
            var d, f = function() {
                    if (i.documentMode) return i.documentMode;
                    for (var t = 7; t > 4; t--) {
                        var e = i.createElement("div");
                        if (e.innerHTML = "<!--[if IE " + t + "]><span></span><![endif]-->", e.getElementsByTagName("span").length) return e = null, t
                    }
                    return n
                }(),
                p = function() {
                    var t = 0;
                    return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function(e) {
                        var i, n = (new Date).getTime();
                        return i = Math.max(0, 16 - (n - t)), t = n + i, setTimeout(function() {
                            e(n + i)
                        }, i)
                    }
                }(),
                v = {
                    isString: function(t) {
                        return "string" == typeof t
                    },
                    isArray: Array.isArray || function(t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    },
                    isFunction: function(t) {
                        return "[object Function]" === Object.prototype.toString.call(t)
                    },
                    isNode: function(t) {
                        return t && t.nodeType
                    },
                    isNodeList: function(t) {
                        return "object" == typeof t && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t)) && t.length !== n && (0 === t.length || "object" == typeof t[0] && t[0].nodeType > 0)
                    },
                    isWrapped: function(t) {
                        return t && (t.jquery || e.Zepto && e.Zepto.zepto.isZ(t))
                    },
                    isSVG: function(t) {
                        return e.SVGElement && t instanceof e.SVGElement
                    },
                    isEmptyObject: function(t) {
                        for (var e in t) return !1;
                        return !0
                    }
                },
                m = !1;
            if (t.fn && t.fn.jquery ? (d = t, m = !0) : d = e.Velocity.Utilities, 8 >= f && !m) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (7 >= f) return void(jQuery.fn.velocity = jQuery.fn.animate);
            var g = 400,
                y = "swing",
                b = {
                    State: {
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        isAndroid: /Android/i.test(navigator.userAgent),
                        isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                        isChrome: e.chrome,
                        isFirefox: /Firefox/i.test(navigator.userAgent),
                        prefixElement: i.createElement("div"),
                        prefixMatches: {},
                        scrollAnchor: null,
                        scrollPropertyLeft: null,
                        scrollPropertyTop: null,
                        isTicking: !1,
                        calls: []
                    },
                    CSS: {},
                    Utilities: d,
                    Redirects: {},
                    Easings: {},
                    Promise: e.Promise,
                    defaults: {
                        queue: "",
                        duration: g,
                        easing: y,
                        begin: n,
                        complete: n,
                        progress: n,
                        display: n,
                        visibility: n,
                        loop: !1,
                        delay: !1,
                        mobileHA: !0,
                        _cacheValues: !0
                    },
                    init: function(t) {
                        d.data(t, "velocity", {
                            isSVG: v.isSVG(t),
                            isAnimating: !1,
                            computedStyle: null,
                            tweensContainer: null,
                            rootPropertyValueCache: {},
                            transformCache: {}
                        })
                    },
                    hook: null,
                    mock: !1,
                    version: {
                        major: 1,
                        minor: 2,
                        patch: 2
                    },
                    debug: !1
                };
            e.pageYOffset !== n ? (b.State.scrollAnchor = e, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");
            var w = function() {
                function t(t) {
                    return -t.tension * t.x - t.friction * t.v
                }

                function e(e, i, n) {
                    var o = {
                        x: e.x + n.dx * i,
                        v: e.v + n.dv * i,
                        tension: e.tension,
                        friction: e.friction
                    };
                    return {
                        dx: o.v,
                        dv: t(o)
                    }
                }

                function i(i, n) {
                    var o = {
                            dx: i.v,
                            dv: t(i)
                        },
                        a = e(i, .5 * n, o),
                        s = e(i, .5 * n, a),
                        r = e(i, n, s),
                        l = 1 / 6 * (o.dx + 2 * (a.dx + s.dx) + r.dx),
                        c = 1 / 6 * (o.dv + 2 * (a.dv + s.dv) + r.dv);
                    return i.x = i.x + l * n, i.v = i.v + c * n, i
                }
                return function n(t, e, o) {
                    var a, s, r, l = {
                            x: -1,
                            v: 0,
                            tension: null,
                            friction: null
                        },
                        c = [0],
                        u = 0,
                        h = 1e-4,
                        d = .016;
                    for (t = parseFloat(t) || 500, e = parseFloat(e) || 20, o = o || null, l.tension = t, l.friction = e, a = null !== o, a ? (u = n(t, e), s = u / o * d) : s = d; r = i(r || l, s), c.push(1 + r.x), u += 16, Math.abs(r.x) > h && Math.abs(r.v) > h;);
                    return a ? function(t) {
                        return c[t * (c.length - 1) | 0]
                    } : u
                }
            }();
            b.Easings = {
                linear: function(t) {
                    return t
                },
                swing: function(t) {
                    return .5 - Math.cos(t * Math.PI) / 2
                },
                spring: function(t) {
                    return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(6 * -t)
                }
            }, d.each([
                ["ease", [.25, .1, .25, 1]],
                ["ease-in", [.42, 0, 1, 1]],
                ["ease-out", [0, 0, .58, 1]],
                ["ease-in-out", [.42, 0, .58, 1]],
                ["easeInSine", [.47, 0, .745, .715]],
                ["easeOutSine", [.39, .575, .565, 1]],
                ["easeInOutSine", [.445, .05, .55, .95]],
                ["easeInQuad", [.55, .085, .68, .53]],
                ["easeOutQuad", [.25, .46, .45, .94]],
                ["easeInOutQuad", [.455, .03, .515, .955]],
                ["easeInCubic", [.55, .055, .675, .19]],
                ["easeOutCubic", [.215, .61, .355, 1]],
                ["easeInOutCubic", [.645, .045, .355, 1]],
                ["easeInQuart", [.895, .03, .685, .22]],
                ["easeOutQuart", [.165, .84, .44, 1]],
                ["easeInOutQuart", [.77, 0, .175, 1]],
                ["easeInQuint", [.755, .05, .855, .06]],
                ["easeOutQuint", [.23, 1, .32, 1]],
                ["easeInOutQuint", [.86, 0, .07, 1]],
                ["easeInExpo", [.95, .05, .795, .035]],
                ["easeOutExpo", [.19, 1, .22, 1]],
                ["easeInOutExpo", [1, 0, 0, 1]],
                ["easeInCirc", [.6, .04, .98, .335]],
                ["easeOutCirc", [.075, .82, .165, 1]],
                ["easeInOutCirc", [.785, .135, .15, .86]]
            ], function(t, e) {
                b.Easings[e[0]] = l.apply(null, e[1])
            });
            var x = b.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                },
                Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                        boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"]
                    },
                    registered: {},
                    register: function() {
                        for (var t = 0; t < x.Lists.colors.length; t++) {
                            var e = "color" === x.Lists.colors[t] ? "0 0 0 1" : "255 255 255 1";
                            x.Hooks.templates[x.Lists.colors[t]] = ["Red Green Blue Alpha", e]
                        }
                        var i, n, o;
                        if (f)
                            for (i in x.Hooks.templates) {
                                n = x.Hooks.templates[i], o = n[0].split(" ");
                                var a = n[1].match(x.RegEx.valueSplit);
                                "Color" === o[0] && (o.push(o.shift()), a.push(a.shift()), x.Hooks.templates[i] = [o.join(" "), a.join(" ")])
                            }
                        for (i in x.Hooks.templates) {
                            n = x.Hooks.templates[i], o = n[0].split(" ");
                            for (var t in o) {
                                var s = i + o[t],
                                    r = t;
                                x.Hooks.registered[s] = [i, r]
                            }
                        }
                    },
                    getRoot: function(t) {
                        var e = x.Hooks.registered[t];
                        return e ? e[0] : t
                    },
                    cleanRootPropertyValue: function(t, e) {
                        return x.RegEx.valueUnwrap.test(e) && (e = e.match(x.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(e) && (e = x.Hooks.templates[t][1]), e
                    },
                    extractValue: function(t, e) {
                        var i = x.Hooks.registered[t];
                        if (i) {
                            var n = i[0],
                                o = i[1];
                            return e = x.Hooks.cleanRootPropertyValue(n, e), e.toString().match(x.RegEx.valueSplit)[o]
                        }
                        return e
                    },
                    injectValue: function(t, e, i) {
                        var n = x.Hooks.registered[t];
                        if (n) {
                            var o, a, s = n[0],
                                r = n[1];
                            return i = x.Hooks.cleanRootPropertyValue(s, i), o = i.toString().match(x.RegEx.valueSplit), o[r] = e, a = o.join(" ")
                        }
                        return i
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function(t, e, i) {
                            switch (t) {
                                case "name":
                                    return "clip";
                                case "extract":
                                    var n;
                                    return x.RegEx.wrappedValueAlreadyExtracted.test(i) ? n = i : (n = i.toString().match(x.RegEx.valueUnwrap), n = n ? n[1].replace(/,(\s+)?/g, " ") : i), n;
                                case "inject":
                                    return "rect(" + i + ")"
                            }
                        },
                        blur: function(t, e, i) {
                            switch (t) {
                                case "name":
                                    return b.State.isFirefox ? "filter" : "-webkit-filter";
                                case "extract":
                                    var n = parseFloat(i);
                                    if (!n && 0 !== n) {
                                        var o = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                        n = o ? o[1] : 0
                                    }
                                    return n;
                                case "inject":
                                    return parseFloat(i) ? "blur(" + i + ")" : "none"
                            }
                        },
                        opacity: function(t, e, i) {
                            if (8 >= f) switch (t) {
                                case "name":
                                    return "filter";
                                case "extract":
                                    var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
                                    return i = n ? n[1] / 100 : 1;
                                case "inject":
                                    return e.style.zoom = 1, parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
                            } else switch (t) {
                                case "name":
                                    return "opacity";
                                case "extract":
                                    return i;
                                case "inject":
                                    return i
                            }
                        }
                    },
                    register: function() {
                        9 >= f || b.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
                        for (var t = 0; t < x.Lists.transformsBase.length; t++) ! function() {
                            var e = x.Lists.transformsBase[t];
                            x.Normalizations.registered[e] = function(t, i, o) {
                                switch (t) {
                                    case "name":
                                        return "transform";
                                    case "extract":
                                        return s(i) === n || s(i).transformCache[e] === n ? /^scale/i.test(e) ? 1 : 0 : s(i).transformCache[e].replace(/[()]/g, "");
                                    case "inject":
                                        var a = !1;
                                        switch (e.substr(0, e.length - 1)) {
                                            case "translate":
                                                a = !/(%|px|em|rem|vw|vh|\d)$/i.test(o);
                                                break;
                                            case "scal":
                                            case "scale":
                                                b.State.isAndroid && s(i).transformCache[e] === n && 1 > o && (o = 1), a = !/(\d)$/i.test(o);
                                                break;
                                            case "skew":
                                                a = !/(deg|\d)$/i.test(o);
                                                break;
                                            case "rotate":
                                                a = !/(deg|\d)$/i.test(o)
                                        }
                                        return a || (s(i).transformCache[e] = "(" + o + ")"), s(i).transformCache[e]
                                }
                            }
                        }();
                        for (var t = 0; t < x.Lists.colors.length; t++) ! function() {
                            var e = x.Lists.colors[t];
                            x.Normalizations.registered[e] = function(t, i, o) {
                                switch (t) {
                                    case "name":
                                        return e;
                                    case "extract":
                                        var a;
                                        if (x.RegEx.wrappedValueAlreadyExtracted.test(o)) a = o;
                                        else {
                                            var s, r = {
                                                black: "rgb(0, 0, 0)",
                                                blue: "rgb(0, 0, 255)",
                                                gray: "rgb(128, 128, 128)",
                                                green: "rgb(0, 128, 0)",
                                                red: "rgb(255, 0, 0)",
                                                white: "rgb(255, 255, 255)"
                                            };
                                            /^[A-z]+$/i.test(o) ? s = r[o] !== n ? r[o] : r.black : x.RegEx.isHex.test(o) ? s = "rgb(" + x.Values.hexToRgb(o).join(" ") + ")" : /^rgba?\(/i.test(o) || (s = r.black), a = (s || o).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                        }
                                        return 8 >= f || 3 !== a.split(" ").length || (a += " 1"), a;
                                    case "inject":
                                        return 8 >= f ? 4 === o.split(" ").length && (o = o.split(/\s+/).slice(0, 3).join(" ")) : 3 === o.split(" ").length && (o += " 1"), (8 >= f ? "rgb" : "rgba") + "(" + o.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                }
                            }
                        }()
                    }
                },
                Names: {
                    camelCase: function(t) {
                        return t.replace(/-(\w)/g, function(t, e) {
                            return e.toUpperCase()
                        })
                    },
                    SVGAttribute: function(t) {
                        var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (f || b.State.isAndroid && !b.State.isChrome) && (e += "|transform"), new RegExp("^(" + e + ")$", "i").test(t)
                    },
                    prefixCheck: function(t) {
                        if (b.State.prefixMatches[t]) return [b.State.prefixMatches[t], !0];
                        for (var e = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = e.length; n > i; i++) {
                            var o;
                            if (o = 0 === i ? t : e[i] + t.replace(/^\w/, function(t) {
                                    return t.toUpperCase()
                                }), v.isString(b.State.prefixElement.style[o])) return b.State.prefixMatches[t] = o, [o, !0]
                        }
                        return [t, !1]
                    }
                },
                Values: {
                    hexToRgb: function(t) {
                        var e, i = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                            n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                        return t = t.replace(i, function(t, e, i, n) {
                            return e + e + i + i + n + n
                        }), e = n.exec(t), e ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : [0, 0, 0]
                    },
                    isCSSNullValue: function(t) {
                        return 0 == t || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)
                    },
                    getUnitType: function(t) {
                        return /^(rotate|skew)/i.test(t) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t) ? "" : "px"
                    },
                    getDisplayType: function(t) {
                        var e = t && t.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e) ? "inline" : /^(li)$/i.test(e) ? "list-item" : /^(tr)$/i.test(e) ? "table-row" : /^(table)$/i.test(e) ? "table" : /^(tbody)$/i.test(e) ? "table-row-group" : "block"
                    },
                    addClass: function(t, e) {
                        t.classList ? t.classList.add(e) : t.className += (t.className.length ? " " : "") + e
                    },
                    removeClass: function(t, e) {
                        t.classList ? t.classList.remove(e) : t.className = t.className.toString().replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                    }
                },
                getPropertyValue: function(t, i, o, a) {
                    function r(t, i) {
                        function o() {
                            c && x.setPropertyValue(t, "display", "none")
                        }
                        var l = 0;
                        if (8 >= f) l = d.css(t, i);
                        else {
                            var c = !1;
                            if (/^(width|height)$/.test(i) && 0 === x.getPropertyValue(t, "display") && (c = !0, x.setPropertyValue(t, "display", x.Values.getDisplayType(t))), !a) {
                                if ("height" === i && "border-box" !== x.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                    var u = t.offsetHeight - (parseFloat(x.getPropertyValue(t, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingBottom")) || 0);
                                    return o(), u
                                }
                                if ("width" === i && "border-box" !== x.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                    var h = t.offsetWidth - (parseFloat(x.getPropertyValue(t, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingRight")) || 0);
                                    return o(), h
                                }
                            }
                            var p;
                            p = s(t) === n ? e.getComputedStyle(t, null) : s(t).computedStyle ? s(t).computedStyle : s(t).computedStyle = e.getComputedStyle(t, null), "borderColor" === i && (i = "borderTopColor"), l = 9 === f && "filter" === i ? p.getPropertyValue(i) : p[i], ("" === l || null === l) && (l = t.style[i]), o()
                        }
                        if ("auto" === l && /^(top|right|bottom|left)$/i.test(i)) {
                            var v = r(t, "position");
                            ("fixed" === v || "absolute" === v && /top|left/i.test(i)) && (l = d(t).position()[i] + "px")
                        }
                        return l
                    }
                    var l;
                    if (x.Hooks.registered[i]) {
                        var c = i,
                            u = x.Hooks.getRoot(c);
                        o === n && (o = x.getPropertyValue(t, x.Names.prefixCheck(u)[0])), x.Normalizations.registered[u] && (o = x.Normalizations.registered[u]("extract", t, o)), l = x.Hooks.extractValue(c, o)
                    } else if (x.Normalizations.registered[i]) {
                        var h, p;
                        h = x.Normalizations.registered[i]("name", t), "transform" !== h && (p = r(t, x.Names.prefixCheck(h)[0]), x.Values.isCSSNullValue(p) && x.Hooks.templates[i] && (p = x.Hooks.templates[i][1])), l = x.Normalizations.registered[i]("extract", t, p)
                    }
                    if (!/^[\d-]/.test(l))
                        if (s(t) && s(t).isSVG && x.Names.SVGAttribute(i))
                            if (/^(height|width)$/i.test(i)) try {
                                l = t.getBBox()[i]
                            } catch (v) {
                                l = 0
                            } else l = t.getAttribute(i);
                            else l = r(t, x.Names.prefixCheck(i)[0]);
                    return x.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + i + ": " + l), l
                },
                setPropertyValue: function(t, i, n, o, a) {
                    var r = i;
                    if ("scroll" === i) a.container ? a.container["scroll" + a.direction] = n : "Left" === a.direction ? e.scrollTo(n, a.alternateValue) : e.scrollTo(a.alternateValue, n);
                    else if (x.Normalizations.registered[i] && "transform" === x.Normalizations.registered[i]("name", t)) x.Normalizations.registered[i]("inject", t, n), r = "transform", n = s(t).transformCache[i];
                    else {
                        if (x.Hooks.registered[i]) {
                            var l = i,
                                c = x.Hooks.getRoot(i);
                            o = o || x.getPropertyValue(t, c), n = x.Hooks.injectValue(l, n, o), i = c
                        }
                        if (x.Normalizations.registered[i] && (n = x.Normalizations.registered[i]("inject", t, n), i = x.Normalizations.registered[i]("name", t)), r = x.Names.prefixCheck(i)[0], 8 >= f) try {
                            t.style[r] = n
                        } catch (u) {
                            b.debug && console.log("Browser does not support [" + n + "] for [" + r + "]")
                        } else s(t) && s(t).isSVG && x.Names.SVGAttribute(i) ? t.setAttribute(i, n) : t.style[r] = n;
                        b.debug >= 2 && console.log("Set " + i + " (" + r + "): " + n)
                    }
                    return [r, n]
                },
                flushTransformCache: function(t) {
                    function e(e) {
                        return parseFloat(x.getPropertyValue(t, e))
                    }
                    var i = "";
                    if ((f || b.State.isAndroid && !b.State.isChrome) && s(t).isSVG) {
                        var n = {
                            translate: [e("translateX"), e("translateY")],
                            skewX: [e("skewX")],
                            skewY: [e("skewY")],
                            scale: 1 !== e("scale") ? [e("scale"), e("scale")] : [e("scaleX"), e("scaleY")],
                            rotate: [e("rotateZ"), 0, 0]
                        };
                        d.each(s(t).transformCache, function(t) {
                            /^translate/i.test(t) ? t = "translate" : /^scale/i.test(t) ? t = "scale" : /^rotate/i.test(t) && (t = "rotate"), n[t] && (i += t + "(" + n[t].join(" ") + ") ", delete n[t])
                        })
                    } else {
                        var o, a;
                        d.each(s(t).transformCache, function(e) {
                            return o = s(t).transformCache[e], "transformPerspective" === e ? (a = o, !0) : (9 === f && "rotateZ" === e && (e = "rotate"), void(i += e + o + " "))
                        }), a && (i = "perspective" + a + " " + i)
                    }
                    x.setPropertyValue(t, "transform", i)
                }
            };
            x.Hooks.register(), x.Normalizations.register(), b.hook = function(t, e, i) {
                var o = n;
                return t = a(t), d.each(t, function(t, a) {
                    if (s(a) === n && b.init(a), i === n) o === n && (o = b.CSS.getPropertyValue(a, e));
                    else {
                        var r = b.CSS.setPropertyValue(a, e, i);
                        "transform" === r[0] && b.CSS.flushTransformCache(a), o = r
                    }
                }), o
            };
            var C = function() {
                function t() {
                    return r ? E.promise || null : l
                }

                function o() {
                    function t(t) {
                        function h(t, e) {
                            var i = n,
                                o = n,
                                s = n;
                            return v.isArray(t) ? (i = t[0], !v.isArray(t[1]) && /^[\d-]/.test(t[1]) || v.isFunction(t[1]) || x.RegEx.isHex.test(t[1]) ? s = t[1] : (v.isString(t[1]) && !x.RegEx.isHex.test(t[1]) || v.isArray(t[1])) && (o = e ? t[1] : c(t[1], r.duration), t[2] !== n && (s = t[2]))) : i = t, e || (o = o || r.easing), v.isFunction(i) && (i = i.call(a, k, S)), v.isFunction(s) && (s = s.call(a, k, S)), [i || 0, o, s]
                        }

                        function f(t, e) {
                            var i, n;
                            return n = (e || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(t) {
                                return i = t, ""
                            }), i || (i = x.Values.getUnitType(t)), [n, i]
                        }

                        function g() {
                            var t = {
                                    myParent: a.parentNode || i.body,
                                    position: x.getPropertyValue(a, "position"),
                                    fontSize: x.getPropertyValue(a, "fontSize")
                                },
                                n = t.position === R.lastPosition && t.myParent === R.lastParent,
                                o = t.fontSize === R.lastFontSize;
                            R.lastParent = t.myParent, R.lastPosition = t.position, R.lastFontSize = t.fontSize;
                            var r = 100,
                                l = {};
                            if (o && n) l.emToPx = R.lastEmToPx, l.percentToPxWidth = R.lastPercentToPxWidth, l.percentToPxHeight = R.lastPercentToPxHeight;
                            else {
                                var c = s(a).isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
                                b.init(c), t.myParent.appendChild(c), d.each(["overflow", "overflowX", "overflowY"], function(t, e) {
                                    b.CSS.setPropertyValue(c, e, "hidden")
                                }), b.CSS.setPropertyValue(c, "position", t.position), b.CSS.setPropertyValue(c, "fontSize", t.fontSize), b.CSS.setPropertyValue(c, "boxSizing", "content-box"), d.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(t, e) {
                                    b.CSS.setPropertyValue(c, e, r + "%")
                                }), b.CSS.setPropertyValue(c, "paddingLeft", r + "em"), l.percentToPxWidth = R.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(c, "width", null, !0)) || 1) / r, l.percentToPxHeight = R.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(c, "height", null, !0)) || 1) / r, l.emToPx = R.lastEmToPx = (parseFloat(x.getPropertyValue(c, "paddingLeft")) || 1) / r, t.myParent.removeChild(c)
                            }
                            return null === R.remToPx && (R.remToPx = parseFloat(x.getPropertyValue(i.body, "fontSize")) || 16), null === R.vwToPx && (R.vwToPx = parseFloat(e.innerWidth) / 100, R.vhToPx = parseFloat(e.innerHeight) / 100), l.remToPx = R.remToPx, l.vwToPx = R.vwToPx, l.vhToPx = R.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), a), l
                        }
                        if (r.begin && 0 === k) try {
                            r.begin.call(p, p)
                        } catch (w) {
                            setTimeout(function() {
                                throw w
                            }, 1)
                        }
                        if ("scroll" === A) {
                            var C, P, T, L = /^x$/i.test(r.axis) ? "Left" : "Top",
                                M = parseFloat(r.offset) || 0;
                            r.container ? v.isWrapped(r.container) || v.isNode(r.container) ? (r.container = r.container[0] || r.container, C = r.container["scroll" + L], T = C + d(a).position()[L.toLowerCase()] + M) : r.container = null : (C = b.State.scrollAnchor[b.State["scrollProperty" + L]], P = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === L ? "Top" : "Left")]], T = d(a).offset()[L.toLowerCase()] + M), l = {
                                scroll: {
                                    rootPropertyValue: !1,
                                    startValue: C,
                                    currentValue: C,
                                    endValue: T,
                                    unitType: "",
                                    easing: r.easing,
                                    scrollData: {
                                        container: r.container,
                                        direction: L,
                                        alternateValue: P
                                    }
                                },
                                element: a
                            }, b.debug && console.log("tweensContainer (scroll): ", l.scroll, a)
                        } else if ("reverse" === A) {
                            if (!s(a).tweensContainer) return void d.dequeue(a, r.queue);
                            "none" === s(a).opts.display && (s(a).opts.display = "auto"), "hidden" === s(a).opts.visibility && (s(a).opts.visibility = "visible"), s(a).opts.loop = !1, s(a).opts.begin = null, s(a).opts.complete = null, y.easing || delete r.easing, y.duration || delete r.duration, r = d.extend({}, s(a).opts, r);
                            var I = d.extend(!0, {}, s(a).tweensContainer);
                            for (var O in I)
                                if ("element" !== O) {
                                    var F = I[O].startValue;
                                    I[O].startValue = I[O].currentValue = I[O].endValue, I[O].endValue = F, v.isEmptyObject(y) || (I[O].easing = r.easing), b.debug && console.log("reverse tweensContainer (" + O + "): " + JSON.stringify(I[O]), a)
                                }
                            l = I
                        } else if ("start" === A) {
                            var I;
                            s(a).tweensContainer && s(a).isAnimating === !0 && (I = s(a).tweensContainer), d.each(m, function(t, e) {
                                if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(t)) {
                                    var i = h(e, !0),
                                        o = i[0],
                                        a = i[1],
                                        s = i[2];
                                    if (x.RegEx.isHex.test(o)) {
                                        for (var r = ["Red", "Green", "Blue"], l = x.Values.hexToRgb(o), c = s ? x.Values.hexToRgb(s) : n, u = 0; u < r.length; u++) {
                                            var d = [l[u]];
                                            a && d.push(a), c !== n && d.push(c[u]), m[t + r[u]] = d
                                        }
                                        delete m[t]
                                    }
                                }
                            });
                            for (var W in m) {
                                var z = h(m[W]),
                                    H = z[0],
                                    V = z[1],
                                    _ = z[2];
                                W = x.Names.camelCase(W);
                                var Y = x.Hooks.getRoot(W),
                                    X = !1;
                                if (s(a).isSVG || "tween" === Y || x.Names.prefixCheck(Y)[1] !== !1 || x.Normalizations.registered[Y] !== n) {
                                    (r.display !== n && null !== r.display && "none" !== r.display || r.visibility !== n && "hidden" !== r.visibility) && /opacity|filter/.test(W) && !_ && 0 !== H && (_ = 0), r._cacheValues && I && I[W] ? (_ === n && (_ = I[W].endValue + I[W].unitType), X = s(a).rootPropertyValueCache[Y]) : x.Hooks.registered[W] ? _ === n ? (X = x.getPropertyValue(a, Y), _ = x.getPropertyValue(a, W, X)) : X = x.Hooks.templates[Y][1] : _ === n && (_ = x.getPropertyValue(a, W));
                                    var N, B, j, $ = !1;
                                    if (N = f(W, _), _ = N[0], j = N[1], N = f(W, H), H = N[0].replace(/^([+-\/*])=/, function(t, e) {
                                            return $ = e, ""
                                        }), B = N[1], _ = parseFloat(_) || 0, H = parseFloat(H) || 0,
                                        "%" === B && (/^(fontSize|lineHeight)$/.test(W) ? (H /= 100, B = "em") : /^scale/.test(W) ? (H /= 100, B = "") : /(Red|Green|Blue)$/i.test(W) && (H = H / 100 * 255, B = "")), /[\/*]/.test($)) B = j;
                                    else if (j !== B && 0 !== _)
                                        if (0 === H) B = j;
                                        else {
                                            o = o || g();
                                            var q = /margin|padding|left|right|width|text|word|letter/i.test(W) || /X$/.test(W) || "x" === W ? "x" : "y";
                                            switch (j) {
                                                case "%":
                                                    _ *= "x" === q ? o.percentToPxWidth : o.percentToPxHeight;
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    _ *= o[j + "ToPx"]
                                            }
                                            switch (B) {
                                                case "%":
                                                    _ *= 1 / ("x" === q ? o.percentToPxWidth : o.percentToPxHeight);
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    _ *= 1 / o[B + "ToPx"]
                                            }
                                        }
                                    switch ($) {
                                        case "+":
                                            H = _ + H;
                                            break;
                                        case "-":
                                            H = _ - H;
                                            break;
                                        case "*":
                                            H = _ * H;
                                            break;
                                        case "/":
                                            H = _ / H
                                    }
                                    l[W] = {
                                        rootPropertyValue: X,
                                        startValue: _,
                                        currentValue: _,
                                        endValue: H,
                                        unitType: B,
                                        easing: V
                                    }, b.debug && console.log("tweensContainer (" + W + "): " + JSON.stringify(l[W]), a)
                                } else b.debug && console.log("Skipping [" + Y + "] due to a lack of browser support.")
                            }
                            l.element = a
                        }
                        l.element && (x.Values.addClass(a, "velocity-animating"), D.push(l), "" === r.queue && (s(a).tweensContainer = l, s(a).opts = r), s(a).isAnimating = !0, k === S - 1 ? (b.State.calls.push([D, p, r, null, E.resolver]), b.State.isTicking === !1 && (b.State.isTicking = !0, u())) : k++)
                    }
                    var o, a = this,
                        r = d.extend({}, b.defaults, y),
                        l = {};
                    switch (s(a) === n && b.init(a), parseFloat(r.delay) && r.queue !== !1 && d.queue(a, r.queue, function(t) {
                        b.velocityQueueEntryFlag = !0, s(a).delayTimer = {
                            setTimeout: setTimeout(t, parseFloat(r.delay)),
                            next: t
                        }
                    }), r.duration.toString().toLowerCase()) {
                        case "fast":
                            r.duration = 200;
                            break;
                        case "normal":
                            r.duration = g;
                            break;
                        case "slow":
                            r.duration = 600;
                            break;
                        default:
                            r.duration = parseFloat(r.duration) || 1
                    }
                    b.mock !== !1 && (b.mock === !0 ? r.duration = r.delay = 1 : (r.duration *= parseFloat(b.mock) || 1, r.delay *= parseFloat(b.mock) || 1)), r.easing = c(r.easing, r.duration), r.begin && !v.isFunction(r.begin) && (r.begin = null), r.progress && !v.isFunction(r.progress) && (r.progress = null), r.complete && !v.isFunction(r.complete) && (r.complete = null), r.display !== n && null !== r.display && (r.display = r.display.toString().toLowerCase(), "auto" === r.display && (r.display = b.CSS.Values.getDisplayType(a))), r.visibility !== n && null !== r.visibility && (r.visibility = r.visibility.toString().toLowerCase()), r.mobileHA = r.mobileHA && b.State.isMobile && !b.State.isGingerbread, r.queue === !1 ? r.delay ? setTimeout(t, r.delay) : t() : d.queue(a, r.queue, function(e, i) {
                        return i === !0 ? (E.promise && E.resolver(p), !0) : (b.velocityQueueEntryFlag = !0, void t(e))
                    }), "" !== r.queue && "fx" !== r.queue || "inprogress" === d.queue(a)[0] || d.dequeue(a)
                }
                var r, l, f, p, m, y, w = arguments[0] && (arguments[0].p || d.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || v.isString(arguments[0].properties));
                if (v.isWrapped(this) ? (r = !1, f = 0, p = this, l = this) : (r = !0, f = 1, p = w ? arguments[0].elements || arguments[0].e : arguments[0]), p = a(p)) {
                    w ? (m = arguments[0].properties || arguments[0].p, y = arguments[0].options || arguments[0].o) : (m = arguments[f], y = arguments[f + 1]);
                    var S = p.length,
                        k = 0;
                    if (!/^(stop|finish)$/i.test(m) && !d.isPlainObject(y)) {
                        var P = f + 1;
                        y = {};
                        for (var T = P; T < arguments.length; T++) v.isArray(arguments[T]) || !/^(fast|normal|slow)$/i.test(arguments[T]) && !/^\d/.test(arguments[T]) ? v.isString(arguments[T]) || v.isArray(arguments[T]) ? y.easing = arguments[T] : v.isFunction(arguments[T]) && (y.complete = arguments[T]) : y.duration = arguments[T]
                    }
                    var E = {
                        promise: null,
                        resolver: null,
                        rejecter: null
                    };
                    r && b.Promise && (E.promise = new b.Promise(function(t, e) {
                        E.resolver = t, E.rejecter = e
                    }));
                    var A;
                    switch (m) {
                        case "scroll":
                            A = "scroll";
                            break;
                        case "reverse":
                            A = "reverse";
                            break;
                        case "finish":
                        case "stop":
                            d.each(p, function(t, e) {
                                s(e) && s(e).delayTimer && (clearTimeout(s(e).delayTimer.setTimeout), s(e).delayTimer.next && s(e).delayTimer.next(), delete s(e).delayTimer)
                            });
                            var L = [];
                            return d.each(b.State.calls, function(t, e) {
                                e && d.each(e[1], function(i, o) {
                                    var a = y === n ? "" : y;
                                    return a === !0 || e[2].queue === a || y === n && e[2].queue === !1 ? void d.each(p, function(i, n) {
                                        n === o && ((y === !0 || v.isString(y)) && (d.each(d.queue(n, v.isString(y) ? y : ""), function(t, e) {
                                            v.isFunction(e) && e(null, !0)
                                        }), d.queue(n, v.isString(y) ? y : "", [])), "stop" === m ? (s(n) && s(n).tweensContainer && a !== !1 && d.each(s(n).tweensContainer, function(t, e) {
                                            e.endValue = e.currentValue
                                        }), L.push(t)) : "finish" === m && (e[2].duration = 1))
                                    }) : !0
                                })
                            }), "stop" === m && (d.each(L, function(t, e) {
                                h(e, !0)
                            }), E.promise && E.resolver(p)), t();
                        default:
                            if (!d.isPlainObject(m) || v.isEmptyObject(m)) {
                                if (v.isString(m) && b.Redirects[m]) {
                                    var M = d.extend({}, y),
                                        I = M.duration,
                                        O = M.delay || 0;
                                    return M.backwards === !0 && (p = d.extend(!0, [], p).reverse()), d.each(p, function(t, e) {
                                        parseFloat(M.stagger) ? M.delay = O + parseFloat(M.stagger) * t : v.isFunction(M.stagger) && (M.delay = O + M.stagger.call(e, t, S)), M.drag && (M.duration = parseFloat(I) || (/^(callout|transition)/.test(m) ? 1e3 : g), M.duration = Math.max(M.duration * (M.backwards ? 1 - t / S : (t + 1) / S), .75 * M.duration, 200)), b.Redirects[m].call(e, e, M || {}, t, S, p, E.promise ? E : n)
                                    }), t()
                                }
                                var F = "Velocity: First argument (" + m + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                return E.promise ? E.rejecter(new Error(F)) : console.log(F), t()
                            }
                            A = "start"
                    }
                    var R = {
                            lastParent: null,
                            lastPosition: null,
                            lastFontSize: null,
                            lastPercentToPxWidth: null,
                            lastPercentToPxHeight: null,
                            lastEmToPx: null,
                            remToPx: null,
                            vwToPx: null,
                            vhToPx: null
                        },
                        D = [];
                    d.each(p, function(t, e) {
                        v.isNode(e) && o.call(e)
                    });
                    var W, M = d.extend({}, b.defaults, y);
                    if (M.loop = parseInt(M.loop), W = 2 * M.loop - 1, M.loop)
                        for (var z = 0; W > z; z++) {
                            var H = {
                                delay: M.delay,
                                progress: M.progress
                            };
                            z === W - 1 && (H.display = M.display, H.visibility = M.visibility, H.complete = M.complete), C(p, "reverse", H)
                        }
                    return t()
                }
            };
            b = d.extend(C, b), b.animate = C;
            var S = e.requestAnimationFrame || p;
            return b.State.isMobile || i.hidden === n || i.addEventListener("visibilitychange", function() {
                i.hidden ? (S = function(t) {
                    return setTimeout(function() {
                        t(!0)
                    }, 16)
                }, u()) : S = e.requestAnimationFrame || p
            }), t.Velocity = b, t !== e && (t.fn.velocity = C, t.fn.velocity.defaults = b.defaults), d.each(["Down", "Up"], function(t, e) {
                b.Redirects["slide" + e] = function(t, i, o, a, s, r) {
                    var l = d.extend({}, i),
                        c = l.begin,
                        u = l.complete,
                        h = {
                            height: "",
                            marginTop: "",
                            marginBottom: "",
                            paddingTop: "",
                            paddingBottom: ""
                        },
                        f = {};
                    l.display === n && (l.display = "Down" === e ? "inline" === b.CSS.Values.getDisplayType(t) ? "inline-block" : "block" : "none"), l.begin = function() {
                        c && c.call(s, s);
                        for (var i in h) {
                            f[i] = t.style[i];
                            var n = b.CSS.getPropertyValue(t, i);
                            h[i] = "Down" === e ? [n, 0] : [0, n]
                        }
                        f.overflow = t.style.overflow, t.style.overflow = "hidden"
                    }, l.complete = function() {
                        for (var e in f) t.style[e] = f[e];
                        u && u.call(s, s), r && r.resolver(s)
                    }, b(t, h, l)
                }
            }), d.each(["In", "Out"], function(t, e) {
                b.Redirects["fade" + e] = function(t, i, o, a, s, r) {
                    var l = d.extend({}, i),
                        c = {
                            opacity: "In" === e ? 1 : 0
                        },
                        u = l.complete;
                    l.complete = o !== a - 1 ? l.begin = null : function() {
                        u && u.call(s, s), r && r.resolver(s)
                    }, l.display === n && (l.display = "In" === e ? "auto" : "none"), b(this, c, l)
                }
            }), b
        }(window.jQuery || window.Zepto || window, window, document)
    })),
    function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = function(t) {
                this.canvas = t.canvas, this.ctx = t;
                var i = function(t, e) {
                        return t["offset" + e] ? t["offset" + e] : document.defaultView.getComputedStyle(t).getPropertyValue(e)
                    },
                    o = this.width = i(t.canvas, "Width") || t.canvas.width,
                    a = this.height = i(t.canvas, "Height") || t.canvas.height;
                return o = this.width = t.canvas.width, a = this.height = t.canvas.height, this.aspectRatio = this.width / this.height, n.retinaScale(this), this
            };
        i.defaults = {
            global: {
                animation: !0,
                animationSteps: 60,
                animationEasing: "easeOutQuart",
                showScale: !0,
                scaleOverride: !1,
                scaleSteps: null,
                scaleStepWidth: null,
                scaleStartValue: null,
                scaleLineColor: "rgba(0,0,0,.1)",
                scaleLineWidth: 1,
                scaleShowLabels: !0,
                scaleLabel: "<%=value%>",
                scaleIntegersOnly: !0,
                scaleBeginAtZero: !1,
                scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                scaleFontSize: 12,
                scaleFontStyle: "normal",
                scaleFontColor: "#666",
                responsive: !1,
                maintainAspectRatio: !0,
                showTooltips: !0,
                customTooltips: !1,
                tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],
                tooltipFillColor: "rgba(0,0,0,0.8)",
                tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                tooltipFontSize: 14,
                tooltipFontStyle: "normal",
                tooltipFontColor: "#fff",
                tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                tooltipTitleFontSize: 14,
                tooltipTitleFontStyle: "bold",
                tooltipTitleFontColor: "#fff",
                tooltipTitleTemplate: "<%= label%>",
                tooltipYPadding: 6,
                tooltipXPadding: 6,
                tooltipCaretSize: 8,
                tooltipCornerRadius: 6,
                tooltipXOffset: 10,
                tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
                multiTooltipTemplate: "<%= value %>",
                multiTooltipKeyBackground: "#fff",
                segmentColorDefault: ["#A6CEE3", "#1F78B4", "#B2DF8A", "#33A02C", "#FB9A99", "#E31A1C", "#FDBF6F", "#FF7F00", "#CAB2D6", "#6A3D9A", "#B4B482", "#B15928"],
                segmentHighlightColorDefaults: ["#CEF6FF", "#47A0DC", "#DAFFB2", "#5BC854", "#FFC2C1", "#FF4244", "#FFE797", "#FFA728", "#F2DAFE", "#9265C2", "#DCDCAA", "#D98150"],
                onAnimationProgress: function() {},
                onAnimationComplete: function() {}
            }
        }, i.types = {};
        var n = i.helpers = {},
            o = n.each = function(t, e, i) {
                var n = Array.prototype.slice.call(arguments, 3);
                if (t)
                    if (t.length === +t.length) {
                        var o;
                        for (o = 0; o < t.length; o++) e.apply(i, [t[o], o].concat(n))
                    } else
                        for (var a in t) e.apply(i, [t[a], a].concat(n))
            },
            a = n.clone = function(t) {
                var e = {};
                return o(t, function(i, n) {
                    t.hasOwnProperty(n) && (e[n] = i)
                }), e
            },
            s = n.extend = function(t) {
                return o(Array.prototype.slice.call(arguments, 1), function(e) {
                    o(e, function(i, n) {
                        e.hasOwnProperty(n) && (t[n] = i)
                    })
                }), t
            },
            r = n.merge = function(t, e) {
                var i = Array.prototype.slice.call(arguments, 0);
                return i.unshift({}), s.apply(null, i)
            },
            l = n.indexOf = function(t, e) {
                if (Array.prototype.indexOf) return t.indexOf(e);
                for (var i = 0; i < t.length; i++)
                    if (t[i] === e) return i;
                return -1
            },
            d = (n.where = function(t, e) {
                var i = [];
                return n.each(t, function(t) {
                    e(t) && i.push(t)
                }), i
            }, n.findNextWhere = function(t, e, i) {
                i || (i = -1);
                for (var n = i + 1; n < t.length; n++) {
                    var o = t[n];
                    if (e(o)) return o
                }
            }, n.findPreviousWhere = function(t, e, i) {
                i || (i = t.length);
                for (var n = i - 1; n >= 0; n--) {
                    var o = t[n];
                    if (e(o)) return o
                }
            }, n.inherits = function(t) {
                var e = this,
                    i = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                        return e.apply(this, arguments)
                    },
                    n = function() {
                        this.constructor = i
                    };
                return n.prototype = e.prototype, i.prototype = new n, i.extend = d, t && s(i.prototype, t), i.__super__ = e.prototype, i
            }),
            f = n.noop = function() {},
            p = n.uid = function() {
                var t = 0;
                return function() {
                    return "chart-" + t++
                }
            }(),
            v = n.warn = function(t) {
                window.console && "function" == typeof window.console.warn && console.warn(t)
            },
            m = n.amd = "function" == typeof define && define.amd,
            g = n.isNumber = function(t) {
                return !isNaN(parseFloat(t)) && isFinite(t)
            },
            y = n.max = function(t) {
                return Math.max.apply(Math, t)
            },
            b = n.min = function(t) {
                return Math.min.apply(Math, t)
            },
            x = (n.cap = function(t, e, i) {
                if (g(e)) {
                    if (t > e) return e
                } else if (g(i) && i > t) return i;
                return t
            }, n.getDecimalPlaces = function(t) {
                if (t % 1 !== 0 && g(t)) {
                    var e = t.toString();
                    if (e.indexOf("e-") < 0) return e.split(".")[1].length;
                    if (e.indexOf(".") < 0) return parseInt(e.split("e-")[1]);
                    var i = e.split(".")[1].split("e-");
                    return i[0].length + parseInt(i[1])
                }
                return 0
            }),
            C = n.radians = function(t) {
                return t * (Math.PI / 180)
            },
            k = (n.getAngleFromPoint = function(t, e) {
                var i = e.x - t.x,
                    n = e.y - t.y,
                    o = Math.sqrt(i * i + n * n),
                    a = 2 * Math.PI + Math.atan2(n, i);
                return 0 > i && 0 > n && (a += 2 * Math.PI), {
                    angle: a,
                    distance: o
                }
            }, n.aliasPixel = function(t) {
                return t % 2 === 0 ? 0 : .5
            }),
            T = (n.splineCurve = function(t, e, i, n) {
                var o = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)),
                    a = Math.sqrt(Math.pow(i.x - e.x, 2) + Math.pow(i.y - e.y, 2)),
                    s = n * o / (o + a),
                    r = n * a / (o + a);
                return {
                    inner: {
                        x: e.x - s * (i.x - t.x),
                        y: e.y - s * (i.y - t.y)
                    },
                    outer: {
                        x: e.x + r * (i.x - t.x),
                        y: e.y + r * (i.y - t.y)
                    }
                }
            }, n.calculateOrderOfMagnitude = function(t) {
                return Math.floor(Math.log(t) / Math.LN10)
            }),
            A = (n.calculateScaleRange = function(t, e, i, n, a) {
                var s = 2,
                    r = Math.floor(e / (1.5 * i)),
                    l = s >= r,
                    c = [];
                o(t, function(t) {
                    null == t || c.push(t)
                });
                var u = b(c),
                    h = y(c);
                h === u && (h += .5, u >= .5 && !n ? u -= .5 : h += .5);
                for (var d = Math.abs(h - u), f = T(d), p = Math.ceil(h / (1 * Math.pow(10, f))) * Math.pow(10, f), v = n ? 0 : Math.floor(u / (1 * Math.pow(10, f))) * Math.pow(10, f), m = p - v, g = Math.pow(10, f), w = Math.round(m / g);
                    (w > r || r > 2 * w) && !l;)
                    if (w > r) g *= 2, w = Math.round(m / g), w % 1 !== 0 && (l = !0);
                    else if (a && f >= 0) {
                    if (g / 2 % 1 !== 0) break;
                    g /= 2, w = Math.round(m / g)
                } else g /= 2, w = Math.round(m / g);
                return l && (w = s, g = m / w), {
                    steps: w,
                    stepValue: g,
                    min: v,
                    max: v + w * g
                }
            }, n.template = function(t, e) {
                function n(t, e) {
                    var n = /\W/.test(t) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : i[t] = i[t];
                    return e ? n(e) : n
                }
                if (t instanceof Function) return t(e);
                var i = {};
                return n(t, e)
            }),
            M = (n.generateLabels = function(t, e, i, n) {
                var a = new Array(e);
                return t && o(a, function(e, o) {
                    a[o] = A(t, {
                        value: i + n * (o + 1)
                    })
                }), a
            }, n.easingEffects = {
                linear: function(t) {
                    return t
                },
                easeInQuad: function(t) {
                    return t * t
                },
                easeOutQuad: function(t) {
                    return -1 * t * (t - 2)
                },
                easeInOutQuad: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t : -0.5 * (--t * (t - 2) - 1)
                },
                easeInCubic: function(t) {
                    return t * t * t
                },
                easeOutCubic: function(t) {
                    return 1 * ((t = t / 1 - 1) * t * t + 1)
                },
                easeInOutCubic: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                },
                easeInQuart: function(t) {
                    return t * t * t * t
                },
                easeOutQuart: function(t) {
                    return -1 * ((t = t / 1 - 1) * t * t * t - 1)
                },
                easeInOutQuart: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2)
                },
                easeInQuint: function(t) {
                    return 1 * (t /= 1) * t * t * t * t
                },
                easeOutQuint: function(t) {
                    return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
                },
                easeInOutQuint: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                },
                easeInSine: function(t) {
                    return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
                },
                easeOutSine: function(t) {
                    return 1 * Math.sin(t / 1 * (Math.PI / 2))
                },
                easeInOutSine: function(t) {
                    return -0.5 * (Math.cos(Math.PI * t / 1) - 1)
                },
                easeInExpo: function(t) {
                    return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
                },
                easeOutExpo: function(t) {
                    return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1)
                },
                easeInOutExpo: function(t) {
                    return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
                },
                easeInCirc: function(t) {
                    return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
                },
                easeOutCirc: function(t) {
                    return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
                },
                easeInOutCirc: function(t) {
                    return (t /= .5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                },
                easeInElastic: function(t) {
                    var e = 1.70158,
                        i = 0,
                        n = 1;
                    return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (i || (i = .3), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i)))
                },
                easeOutElastic: function(t) {
                    var e = 1.70158,
                        i = 0,
                        n = 1;
                    return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (i || (i = .3), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / i) + 1)
                },
                easeInOutElastic: function(t) {
                    var e = 1.70158,
                        i = 0,
                        n = 1;
                    return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = 1 * (.3 * 1.5)), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), 1 > t ? -.5 * (n * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i)) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i) * .5 + 1)
                },
                easeInBack: function(t) {
                    var e = 1.70158;
                    return 1 * (t /= 1) * t * ((e + 1) * t - e)
                },
                easeOutBack: function(t) {
                    var e = 1.70158;
                    return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1)
                },
                easeInOutBack: function(t) {
                    var e = 1.70158;
                    return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
                },
                easeInBounce: function(t) {
                    return 1 - M.easeOutBounce(1 - t)
                },
                easeOutBounce: function(t) {
                    return (t /= 1) < 1 / 2.75 ? 1 * (7.5625 * t * t) : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                },
                easeInOutBounce: function(t) {
                    return .5 > t ? .5 * M.easeInBounce(2 * t) : .5 * M.easeOutBounce(2 * t - 1) + .5
                }
            }),
            I = n.requestAnimFrame = function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                    return window.setTimeout(t, 1e3 / 60)
                }
            }(),
            D = (n.cancelAnimFrame = function() {
                return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(t) {
                    return window.clearTimeout(t, 1e3 / 60)
                }
            }(), n.animationLoop = function(t, e, i, n, o, a) {
                var s = 0,
                    r = M[i] || M.linear,
                    l = function() {
                        s++;
                        var i = s / e,
                            c = r(i);
                        t.call(a, c, i, s), n.call(a, c, i), e > s ? a.animationFrame = I(l) : o.apply(a)
                    };
                I(l)
            }, n.getRelativePosition = function(t) {
                var e, i, n = t.originalEvent || t,
                    o = t.currentTarget || t.srcElement,
                    a = o.getBoundingClientRect();
                return n.touches ? (e = n.touches[0].clientX - a.left, i = n.touches[0].clientY - a.top) : (e = n.clientX - a.left, i = n.clientY - a.top), {
                    x: e,
                    y: i
                }
            }, n.addEvent = function(t, e, i) {
                t.addEventListener ? t.addEventListener(e, i) : t.attachEvent ? t.attachEvent("on" + e, i) : t["on" + e] = i
            }),
            W = n.removeEvent = function(t, e, i) {
                t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent ? t.detachEvent("on" + e, i) : t["on" + e] = f
            },
            H = (n.bindEvents = function(t, e, i) {
                t.events || (t.events = {}), o(e, function(e) {
                    t.events[e] = function() {
                        i.apply(t, arguments)
                    }, D(t.chart.canvas, e, t.events[e])
                })
            }, n.unbindEvents = function(t, e) {
                o(e, function(e, i) {
                    W(t.chart.canvas, i, e)
                })
            }),
            V = n.getMaximumWidth = function(t) {
                var e = t.parentNode,
                    i = parseInt(Y(e, "padding-left")) + parseInt(Y(e, "padding-right"));
                return e.clientWidth - i
            },
            _ = n.getMaximumHeight = function(t) {
                var e = t.parentNode,
                    i = parseInt(Y(e, "padding-bottom")) + parseInt(Y(e, "padding-top"));
                return e.clientHeight - i
            },
            Y = n.getStyle = function(t, e) {
                return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
            },
            N = (n.getMaximumSize = n.getMaximumWidth, n.retinaScale = function(t) {
                var e = t.ctx,
                    i = t.canvas.width,
                    n = t.canvas.height;
                window.devicePixelRatio && (e.canvas.style.width = i + "px", e.canvas.style.height = n + "px", e.canvas.height = n * window.devicePixelRatio, e.canvas.width = i * window.devicePixelRatio, e.scale(window.devicePixelRatio, window.devicePixelRatio))
            }),
            B = n.clear = function(t) {
                t.ctx.clearRect(0, 0, t.width, t.height)
            },
            j = n.fontString = function(t, e, i) {
                return e + " " + t + "px " + i
            },
            $ = n.longestText = function(t, e, i) {
                t.font = e;
                var n = 0;
                return o(i, function(e) {
                    var i = t.measureText(e).width;
                    n = i > n ? i : n
                }), n
            },
            q = n.drawRoundedRectangle = function(t, e, i, n, o, a) {
                t.beginPath(), t.moveTo(e + a, i), t.lineTo(e + n - a, i), t.quadraticCurveTo(e + n, i, e + n, i + a), t.lineTo(e + n, i + o - a), t.quadraticCurveTo(e + n, i + o, e + n - a, i + o), t.lineTo(e + a, i + o), t.quadraticCurveTo(e, i + o, e, i + o - a), t.lineTo(e, i + a), t.quadraticCurveTo(e, i, e + a, i), t.closePath()
            };
        i.instances = {}, i.Type = function(t, e, n) {
            this.options = e, this.chart = n, this.id = p(), i.instances[this.id] = this, e.responsive && this.resize(), this.initialize.call(this, t)
        }, s(i.Type.prototype, {
            initialize: function() {
                return this
            },
            clear: function() {
                return B(this.chart), this
            },
            stop: function() {
                return i.animationService.cancelAnimation(this), this
            },
            resize: function(t) {
                this.stop();
                var e = this.chart.canvas,
                    i = V(this.chart.canvas),
                    n = this.options.maintainAspectRatio ? i / this.chart.aspectRatio : _(this.chart.canvas);
                return e.width = this.chart.width = i, e.height = this.chart.height = n, N(this.chart), "function" == typeof t && t.apply(this, Array.prototype.slice.call(arguments, 1)), this
            },
            reflow: f,
            render: function(t) {
                if (t && this.reflow(), this.options.animation && !t) {
                    var e = new i.Animation;
                    e.numSteps = this.options.animationSteps, e.easing = this.options.animationEasing, e.render = function(t, e) {
                        var i = n.easingEffects[e.easing],
                            o = e.currentStep / e.numSteps,
                            a = i(o);
                        t.draw(a, o, e.currentStep)
                    }, e.onAnimationProgress = this.options.onAnimationProgress, e.onAnimationComplete = this.options.onAnimationComplete, i.animationService.addAnimation(this, e)
                } else this.draw(), this.options.onAnimationComplete.call(this);
                return this
            },
            generateLegend: function() {
                return A(this.options.legendTemplate, this)
            },
            destroy: function() {
                this.clear(), H(this, this.events);
                var t = this.chart.canvas;
                t.width = this.chart.width, t.height = this.chart.height, t.style.removeProperty ? (t.style.removeProperty("width"), t.style.removeProperty("height")) : (t.style.removeAttribute("width"), t.style.removeAttribute("height")), delete i.instances[this.id]
            },
            showTooltip: function(t, e) {
                "undefined" == typeof this.activeElements && (this.activeElements = []);
                var a = function(t) {
                    var e = !1;
                    return t.length !== this.activeElements.length ? e = !0 : (o(t, function(t, i) {
                        t !== this.activeElements[i] && (e = !0)
                    }, this), e)
                }.call(this, t);
                if (a || e) {
                    if (this.activeElements = t, this.draw(), this.options.customTooltips && this.options.customTooltips(!1), t.length > 0)
                        if (this.datasets && this.datasets.length > 1) {
                            for (var s, r, c = this.datasets.length - 1; c >= 0 && (s = this.datasets[c].points || this.datasets[c].bars || this.datasets[c].segments, r = l(s, t[0]), -1 === r); c--);
                            var u = [],
                                h = [],
                                d = function(t) {
                                    var i, s, l, c, d, e = [],
                                        o = [],
                                        a = [];
                                    return n.each(this.datasets, function(t) {
                                        i = t.points || t.bars || t.segments, i[r] && i[r].hasValue() && e.push(i[r])
                                    }), n.each(e, function(t) {
                                        o.push(t.x), a.push(t.y), u.push(n.template(this.options.multiTooltipTemplate, t)), h.push({
                                            fill: t._saved.fillColor || t.fillColor,
                                            stroke: t._saved.strokeColor || t.strokeColor
                                        })
                                    }, this), d = b(a), l = y(a), c = b(o), s = y(o), {
                                        x: c > this.chart.width / 2 ? c : s,
                                        y: (d + l) / 2
                                    }
                                }.call(this, r);
                            new i.MultiTooltip({
                                x: d.x,
                                y: d.y,
                                xPadding: this.options.tooltipXPadding,
                                yPadding: this.options.tooltipYPadding,
                                xOffset: this.options.tooltipXOffset,
                                fillColor: this.options.tooltipFillColor,
                                textColor: this.options.tooltipFontColor,
                                fontFamily: this.options.tooltipFontFamily,
                                fontStyle: this.options.tooltipFontStyle,
                                fontSize: this.options.tooltipFontSize,
                                titleTextColor: this.options.tooltipTitleFontColor,
                                titleFontFamily: this.options.tooltipTitleFontFamily,
                                titleFontStyle: this.options.tooltipTitleFontStyle,
                                titleFontSize: this.options.tooltipTitleFontSize,
                                cornerRadius: this.options.tooltipCornerRadius,
                                labels: u,
                                legendColors: h,
                                legendColorBackground: this.options.multiTooltipKeyBackground,
                                title: A(this.options.tooltipTitleTemplate, t[0]),
                                chart: this.chart,
                                ctx: this.chart.ctx,
                                custom: this.options.customTooltips
                            }).draw()
                        } else o(t, function(t) {
                            var e = t.tooltipPosition();
                            new i.Tooltip({
                                x: Math.round(e.x),
                                y: Math.round(e.y),
                                xPadding: this.options.tooltipXPadding,
                                yPadding: this.options.tooltipYPadding,
                                fillColor: this.options.tooltipFillColor,
                                textColor: this.options.tooltipFontColor,
                                fontFamily: this.options.tooltipFontFamily,
                                fontStyle: this.options.tooltipFontStyle,
                                fontSize: this.options.tooltipFontSize,
                                caretHeight: this.options.tooltipCaretSize,
                                cornerRadius: this.options.tooltipCornerRadius,
                                text: A(this.options.tooltipTemplate, t),
                                chart: this.chart,
                                custom: this.options.customTooltips
                            }).draw()
                        }, this);
                    return this
                }
            },
            toBase64Image: function() {
                return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
            }
        }), i.Type.extend = function(t) {
            var e = this,
                n = function() {
                    return e.apply(this, arguments)
                };
            if (n.prototype = a(e.prototype), s(n.prototype, t), n.extend = i.Type.extend, t.name || e.prototype.name) {
                var o = t.name || e.prototype.name,
                    l = i.defaults[e.prototype.name] ? a(i.defaults[e.prototype.name]) : {};
                i.defaults[o] = s(l, t.defaults), i.types[o] = n, i.prototype[o] = function(t, e) {
                    var a = r(i.defaults.global, i.defaults[o], e || {});
                    return new n(t, a, this)
                }
            } else v("Name not provided for this chart, so it hasn't been registered");
            return e
        }, i.Element = function(t) {
            s(this, t), this.initialize.apply(this, arguments), this.save()
        }, s(i.Element.prototype, {
            initialize: function() {},
            restore: function(t) {
                return t ? o(t, function(t) {
                    this[t] = this._saved[t]
                }, this) : s(this, this._saved), this
            },
            save: function() {
                return this._saved = a(this), delete this._saved._saved, this
            },
            update: function(t) {
                return o(t, function(t, e) {
                    this._saved[e] = this[e], this[e] = t
                }, this), this
            },
            transition: function(t, e) {
                return o(t, function(t, i) {
                    this[i] = (t - this._saved[i]) * e + this._saved[i]
                }, this), this
            },
            tooltipPosition: function() {
                return {
                    x: this.x,
                    y: this.y
                }
            },
            hasValue: function() {
                return g(this.value)
            }
        }), i.Element.extend = d, i.Point = i.Element.extend({
            display: !0,
            inRange: function(t, e) {
                var i = this.hitDetectionRadius + this.radius;
                return Math.pow(t - this.x, 2) + Math.pow(e - this.y, 2) < Math.pow(i, 2)
            },
            draw: function() {
                if (this.display) {
                    var t = this.ctx;
                    t.beginPath(), t.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), t.closePath(), t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.fillStyle = this.fillColor, t.fill(), t.stroke()
                }
            }
        }), i.Arc = i.Element.extend({
            inRange: function(t, e) {
                var i = n.getAngleFromPoint(this, {
                        x: t,
                        y: e
                    }),
                    o = i.angle % (2 * Math.PI),
                    a = (2 * Math.PI + this.startAngle) % (2 * Math.PI),
                    s = (2 * Math.PI + this.endAngle) % (2 * Math.PI) || 360,
                    r = a > s ? s >= o || o >= a : o >= a && s >= o,
                    l = i.distance >= this.innerRadius && i.distance <= this.outerRadius;
                return r && l
            },
            tooltipPosition: function() {
                var t = this.startAngle + (this.endAngle - this.startAngle) / 2,
                    e = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
                return {
                    x: this.x + Math.cos(t) * e,
                    y: this.y + Math.sin(t) * e
                }
            },
            draw: function(t) {
                var i = this.ctx;
                i.beginPath(), i.arc(this.x, this.y, this.outerRadius < 0 ? 0 : this.outerRadius, this.startAngle, this.endAngle), i.arc(this.x, this.y, this.innerRadius < 0 ? 0 : this.innerRadius, this.endAngle, this.startAngle, !0), i.closePath(), i.strokeStyle = this.strokeColor, i.lineWidth = this.strokeWidth, i.fillStyle = this.fillColor, i.fill(), i.lineJoin = "bevel", this.showStroke && i.stroke()
            }
        }), i.Rectangle = i.Element.extend({
            draw: function() {
                var t = this.ctx,
                    e = this.width / 2,
                    i = this.x - e,
                    n = this.x + e,
                    o = this.base - (this.base - this.y),
                    a = this.strokeWidth / 2;
                this.showStroke && (i += a, n -= a, o += a), t.beginPath(), t.fillStyle = this.fillColor, t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.moveTo(i, this.base), t.lineTo(i, o), t.lineTo(n, o), t.lineTo(n, this.base), t.fill(), this.showStroke && t.stroke()
            },
            height: function() {
                return this.base - this.y
            },
            inRange: function(t, e) {
                return t >= this.x - this.width / 2 && t <= this.x + this.width / 2 && e >= this.y && e <= this.base
            }
        }), i.Animation = i.Element.extend({
            currentStep: null,
            numSteps: 60,
            easing: "",
            render: null,
            onAnimationProgress: null,
            onAnimationComplete: null
        }), i.Tooltip = i.Element.extend({
            draw: function() {
                var t = this.chart.ctx;
                t.font = j(this.fontSize, this.fontStyle, this.fontFamily), this.xAlign = "center", this.yAlign = "above";
                var e = this.caretPadding = 2,
                    i = t.measureText(this.text).width + 2 * this.xPadding,
                    n = this.fontSize + 2 * this.yPadding,
                    o = n + this.caretHeight + e;
                this.x + i / 2 > this.chart.width ? this.xAlign = "left" : this.x - i / 2 < 0 && (this.xAlign = "right"), this.y - o < 0 && (this.yAlign = "below");
                var a = this.x - i / 2,
                    s = this.y - o;
                if (t.fillStyle = this.fillColor, this.custom) this.custom(this);
                else {
                    switch (this.yAlign) {
                        case "above":
                            t.beginPath(), t.moveTo(this.x, this.y - e), t.lineTo(this.x + this.caretHeight, this.y - (e + this.caretHeight)), t.lineTo(this.x - this.caretHeight, this.y - (e + this.caretHeight)), t.closePath(), t.fill();
                            break;
                        case "below":
                            s = this.y + e + this.caretHeight, t.beginPath(), t.moveTo(this.x, this.y + e), t.lineTo(this.x + this.caretHeight, this.y + e + this.caretHeight), t.lineTo(this.x - this.caretHeight, this.y + e + this.caretHeight), t.closePath(), t.fill()
                    }
                    switch (this.xAlign) {
                        case "left":
                            a = this.x - i + (this.cornerRadius + this.caretHeight);
                            break;
                        case "right":
                            a = this.x - (this.cornerRadius + this.caretHeight)
                    }
                    q(t, a, s, i, n, this.cornerRadius), t.fill(), t.fillStyle = this.textColor, t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.text, a + i / 2, s + n / 2)
                }
            }
        }), i.MultiTooltip = i.Element.extend({
            initialize: function() {
                this.font = j(this.fontSize, this.fontStyle, this.fontFamily), this.titleFont = j(this.titleFontSize, this.titleFontStyle, this.titleFontFamily), this.titleHeight = this.title ? 1.5 * this.titleFontSize : 0, this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + this.titleHeight, this.ctx.font = this.titleFont;
                var t = this.ctx.measureText(this.title).width,
                    e = $(this.ctx, this.font, this.labels) + this.fontSize + 3,
                    i = y([e, t]);
                this.width = i + 2 * this.xPadding;
                var n = this.height / 2;
                this.y - n < 0 ? this.y = n : this.y + n > this.chart.height && (this.y = this.chart.height - n), this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset
            },
            getLineHeight: function(t) {
                var e = this.y - this.height / 2 + this.yPadding,
                    i = t - 1;
                return 0 === t ? e + this.titleHeight / 3 : e + (1.5 * this.fontSize * i + this.fontSize / 2) + this.titleHeight
            },
            draw: function() {
                if (this.custom) this.custom(this);
                else {
                    q(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
                    var t = this.ctx;
                    t.fillStyle = this.fillColor, t.fill(), t.closePath(), t.textAlign = "left", t.textBaseline = "middle", t.fillStyle = this.titleTextColor, t.font = this.titleFont, t.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)), t.font = this.font, n.each(this.labels, function(e, i) {
                        t.fillStyle = this.textColor, t.fillText(e, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(i + 1)), t.fillStyle = this.legendColorBackground, t.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize), t.fillStyle = this.legendColors[i].fill, t.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize)
                    }, this)
                }
            }
        }), i.Scale = i.Element.extend({
            initialize: function() {
                this.fit()
            },
            buildYLabels: function() {
                this.yLabels = [];
                for (var t = x(this.stepValue), e = 0; e <= this.steps; e++) this.yLabels.push(A(this.templateString, {
                    value: (this.min + e * this.stepValue).toFixed(t)
                }));
                this.yLabelWidth = this.display && this.showLabels ? $(this.ctx, this.font, this.yLabels) + 10 : 0
            },
            addXLabel: function(t) {
                this.xLabels.push(t), this.valuesCount++, this.fit()
            },
            removeXLabel: function() {
                this.xLabels.shift(), this.valuesCount--, this.fit()
            },
            fit: function() {
                this.startPoint = this.display ? this.fontSize : 0, this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height, this.startPoint += this.padding, this.endPoint -= this.padding;
                var i, t = this.endPoint,
                    e = this.endPoint - this.startPoint;
                for (this.calculateYRange(e), this.buildYLabels(), this.calculateXLabelRotation(); e > this.endPoint - this.startPoint;) e = this.endPoint - this.startPoint, i = this.yLabelWidth, this.calculateYRange(e), this.buildYLabels(), i < this.yLabelWidth && (this.endPoint = t, this.calculateXLabelRotation())
            },
            calculateXLabelRotation: function() {
                this.ctx.font = this.font;
                var i, n, t = this.ctx.measureText(this.xLabels[0]).width,
                    e = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
                if (this.xScalePaddingRight = e / 2 + 3, this.xScalePaddingLeft = t / 2 > this.yLabelWidth ? t / 2 : this.yLabelWidth, this.xLabelRotation = 0, this.display) {
                    var a, o = $(this.ctx, this.font, this.xLabels);
                    this.xLabelWidth = o;
                    for (var r = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > r && 0 === this.xLabelRotation || this.xLabelWidth > r && this.xLabelRotation <= 90 && this.xLabelRotation > 0;) a = Math.cos(C(this.xLabelRotation)), i = a * t, n = a * e, i + this.fontSize / 2 > this.yLabelWidth && (this.xScalePaddingLeft = i + this.fontSize / 2), this.xScalePaddingRight = this.fontSize / 2, this.xLabelRotation++, this.xLabelWidth = a * o;
                    this.xLabelRotation > 0 && (this.endPoint -= Math.sin(C(this.xLabelRotation)) * o + 3)
                } else this.xLabelWidth = 0, this.xScalePaddingRight = this.padding, this.xScalePaddingLeft = this.padding
            },
            calculateYRange: f,
            drawingArea: function() {
                return this.startPoint - this.endPoint
            },
            calculateY: function(t) {
                var e = this.drawingArea() / (this.min - this.max);
                return this.endPoint - e * (t - this.min)
            },
            calculateX: function(t) {
                var i = (this.xLabelRotation > 0, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)),
                    n = i / Math.max(this.valuesCount - (this.offsetGridLines ? 0 : 1), 1),
                    o = n * t + this.xScalePaddingLeft;
                return this.offsetGridLines && (o += n / 2), Math.round(o)
            },
            update: function(t) {
                n.extend(this, t), this.fit()
            },
            draw: function() {
                var t = this.ctx,
                    e = (this.endPoint - this.startPoint) / this.steps,
                    i = Math.round(this.xScalePaddingLeft);
                this.display && (t.fillStyle = this.textColor, t.font = this.font, o(this.yLabels, function(o, a) {
                    var s = this.endPoint - e * a,
                        r = Math.round(s),
                        l = this.showHorizontalLines;
                    t.textAlign = "right", t.textBaseline = "middle", this.showLabels && t.fillText(o, i - 10, s), 0 !== a || l || (l = !0), l && t.beginPath(), a > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), r += n.aliasPixel(t.lineWidth), l && (t.moveTo(i, r), t.lineTo(this.width, r), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(i - 5, r), t.lineTo(i, r), t.stroke(), t.closePath()
                }, this), o(this.xLabels, function(e, i) {
                    var n = this.calculateX(i) + k(this.lineWidth),
                        o = this.calculateX(i - (this.offsetGridLines ? .5 : 0)) + k(this.lineWidth),
                        a = this.xLabelRotation > 0,
                        s = this.showVerticalLines;
                    0 !== i || s || (s = !0), s && t.beginPath(), i > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), s && (t.moveTo(o, this.endPoint), t.lineTo(o, this.startPoint - 3), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(o, this.endPoint), t.lineTo(o, this.endPoint + 5), t.stroke(), t.closePath(), t.save(), t.translate(n, a ? this.endPoint + 12 : this.endPoint + 8), t.rotate(-1 * C(this.xLabelRotation)), t.font = this.font, t.textAlign = a ? "right" : "center", t.textBaseline = a ? "middle" : "top", t.fillText(e, 0, 0), t.restore()
                }, this))
            }
        }), i.RadialScale = i.Element.extend({
            initialize: function() {
                this.size = b([this.height, this.width]), this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2
            },
            calculateCenterOffset: function(t) {
                var e = this.drawingArea / (this.max - this.min);
                return (t - this.min) * e
            },
            update: function() {
                this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(),
                    this.buildYLabels()
            },
            buildYLabels: function() {
                this.yLabels = [];
                for (var t = x(this.stepValue), e = 0; e <= this.steps; e++) this.yLabels.push(A(this.templateString, {
                    value: (this.min + e * this.stepValue).toFixed(t)
                }))
            },
            getCircumference: function() {
                return 2 * Math.PI / this.valuesCount
            },
            setScaleSize: function() {
                var e, i, n, o, s, r, c, u, h, d, f, p, t = b([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]),
                    a = this.width,
                    l = 0;
                for (this.ctx.font = j(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), i = 0; i < this.valuesCount; i++) e = this.getPointPosition(i, t), n = this.ctx.measureText(A(this.templateString, {
                    value: this.labels[i]
                })).width + 5, 0 === i || i === this.valuesCount / 2 ? (o = n / 2, e.x + o > a && (a = e.x + o, s = i), e.x - o < l && (l = e.x - o, c = i)) : i < this.valuesCount / 2 ? e.x + n > a && (a = e.x + n, s = i) : i > this.valuesCount / 2 && e.x - n < l && (l = e.x - n, c = i);
                h = l, d = Math.ceil(a - this.width), r = this.getIndexAngle(s), u = this.getIndexAngle(c), f = d / Math.sin(r + Math.PI / 2), p = h / Math.sin(u + Math.PI / 2), f = g(f) ? f : 0, p = g(p) ? p : 0, this.drawingArea = t - (p + f) / 2, this.setCenterPoint(p, f)
            },
            setCenterPoint: function(t, e) {
                var i = this.width - e - this.drawingArea,
                    n = t + this.drawingArea;
                this.xCenter = (n + i) / 2, this.yCenter = this.height / 2
            },
            getIndexAngle: function(t) {
                var e = 2 * Math.PI / this.valuesCount;
                return t * e - Math.PI / 2
            },
            getPointPosition: function(t, e) {
                var i = this.getIndexAngle(t);
                return {
                    x: Math.cos(i) * e + this.xCenter,
                    y: Math.sin(i) * e + this.yCenter
                }
            },
            draw: function() {
                if (this.display) {
                    var t = this.ctx;
                    if (o(this.yLabels, function(e, i) {
                            if (i > 0) {
                                var a, n = i * (this.drawingArea / this.steps),
                                    o = this.yCenter - n;
                                if (this.lineWidth > 0)
                                    if (t.strokeStyle = this.lineColor, t.lineWidth = this.lineWidth, this.lineArc) t.beginPath(), t.arc(this.xCenter, this.yCenter, n, 0, 2 * Math.PI), t.closePath(), t.stroke();
                                    else {
                                        t.beginPath();
                                        for (var s = 0; s < this.valuesCount; s++) a = this.getPointPosition(s, this.calculateCenterOffset(this.min + i * this.stepValue)), 0 === s ? t.moveTo(a.x, a.y) : t.lineTo(a.x, a.y);
                                        t.closePath(), t.stroke()
                                    }
                                if (this.showLabels) {
                                    if (t.font = j(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) {
                                        var r = t.measureText(e).width;
                                        t.fillStyle = this.backdropColor, t.fillRect(this.xCenter - r / 2 - this.backdropPaddingX, o - this.fontSize / 2 - this.backdropPaddingY, r + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY)
                                    }
                                    t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = this.fontColor, t.fillText(e, this.xCenter, o)
                                }
                            }
                        }, this), !this.lineArc) {
                        t.lineWidth = this.angleLineWidth, t.strokeStyle = this.angleLineColor;
                        for (var e = this.valuesCount - 1; e >= 0; e--) {
                            var i = null,
                                n = null;
                            if (this.angleLineWidth > 0 && (i = this.calculateCenterOffset(this.max), n = this.getPointPosition(e, i), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(n.x, n.y), t.stroke(), t.closePath()), this.backgroundColors && this.backgroundColors.length == this.valuesCount) {
                                null == i && (i = this.calculateCenterOffset(this.max)), null == n && (n = this.getPointPosition(e, i));
                                var a = this.getPointPosition(0 === e ? this.valuesCount - 1 : e - 1, i),
                                    s = this.getPointPosition(e === this.valuesCount - 1 ? 0 : e + 1, i),
                                    r = {
                                        x: (a.x + n.x) / 2,
                                        y: (a.y + n.y) / 2
                                    },
                                    l = {
                                        x: (n.x + s.x) / 2,
                                        y: (n.y + s.y) / 2
                                    };
                                t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(r.x, r.y), t.lineTo(n.x, n.y), t.lineTo(l.x, l.y), t.fillStyle = this.backgroundColors[e], t.fill(), t.closePath()
                            }
                            var c = this.getPointPosition(e, this.calculateCenterOffset(this.max) + 5);
                            t.font = j(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), t.fillStyle = this.pointLabelFontColor;
                            var u = this.labels.length,
                                h = this.labels.length / 2,
                                d = h / 2,
                                f = d > e || e > u - d,
                                p = e === d || e === u - d;
                            0 === e ? t.textAlign = "center" : e === h ? t.textAlign = "center" : h > e ? t.textAlign = "left" : t.textAlign = "right", p ? t.textBaseline = "middle" : f ? t.textBaseline = "bottom" : t.textBaseline = "top", t.fillText(this.labels[e], c.x, c.y)
                        }
                    }
                }
            }
        }), i.animationService = {
            frameDuration: 17,
            animations: [],
            dropFrames: 0,
            addAnimation: function(t, e) {
                for (var i = 0; i < this.animations.length; ++i)
                    if (this.animations[i].chartInstance === t) return void(this.animations[i].animationObject = e);
                this.animations.push({
                    chartInstance: t,
                    animationObject: e
                }), 1 == this.animations.length && n.requestAnimFrame.call(window, this.digestWrapper)
            },
            cancelAnimation: function(t) {
                var e = n.findNextWhere(this.animations, function(e) {
                    return e.chartInstance === t
                });
                e && this.animations.splice(e, 1)
            },
            digestWrapper: function() {
                i.animationService.startDigest.call(i.animationService)
            },
            startDigest: function() {
                var t = Date.now(),
                    e = 0;
                this.dropFrames > 1 && (e = Math.floor(this.dropFrames), this.dropFrames -= e);
                for (var i = 0; i < this.animations.length; i++) null === this.animations[i].animationObject.currentStep && (this.animations[i].animationObject.currentStep = 0), this.animations[i].animationObject.currentStep += 1 + e, this.animations[i].animationObject.currentStep > this.animations[i].animationObject.numSteps && (this.animations[i].animationObject.currentStep = this.animations[i].animationObject.numSteps), this.animations[i].animationObject.render(this.animations[i].chartInstance, this.animations[i].animationObject), this.animations[i].animationObject.currentStep == this.animations[i].animationObject.numSteps && (this.animations[i].animationObject.onAnimationComplete.call(this.animations[i].chartInstance), this.animations.splice(i, 1), i--);
                var o = Date.now(),
                    a = o - t - this.frameDuration,
                    s = a / this.frameDuration;
                s > 1 && (this.dropFrames += s), this.animations.length > 0 && n.requestAnimFrame.call(window, this.digestWrapper)
            }
        }, n.addEvent(window, "resize", function() {
            var t;
            return function() {
                clearTimeout(t), t = setTimeout(function() {
                    o(i.instances, function(t) {
                        t.options.responsive && t.resize(t.render, !0)
                    })
                }, 50)
            }
        }()), m ? define(function() {
            return i
        }) : "object" == typeof module && module.exports && (module.exports = i), t.Chart = i, i.noConflict = function() {
            return t.Chart = e, i
        }
    }.call(this),
    function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers,
            n = {
                scaleBeginAtZero: !0,
                scaleShowGridLines: !0,
                scaleGridLineColor: "rgba(0,0,0,.05)",
                scaleGridLineWidth: 1,
                scaleShowHorizontalLines: !0,
                scaleShowVerticalLines: !0,
                barShowStroke: !0,
                barStrokeWidth: 2,
                barValueSpacing: 5,
                barDatasetSpacing: 1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>'
            };
        e.Type.extend({
            name: "Bar",
            defaults: n,
            initialize: function(t) {
                var n = this.options;
                this.ScaleClass = e.Scale.extend({
                    offsetGridLines: !0,
                    calculateBarX: function(t, e, i) {
                        var o = this.calculateBaseWidth(),
                            a = this.calculateX(i) - o / 2,
                            s = this.calculateBarWidth(t);
                        return a + s * e + e * n.barDatasetSpacing + s / 2
                    },
                    calculateBaseWidth: function() {
                        return this.calculateX(1) - this.calculateX(0) - 2 * n.barValueSpacing
                    },
                    calculateBarWidth: function(t) {
                        var e = this.calculateBaseWidth() - (t - 1) * n.barDatasetSpacing;
                        return e / t
                    }
                }), this.datasets = [], this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getBarsAtEvent(t) : [];
                    this.eachBars(function(t) {
                        t.restore(["fillColor", "strokeColor"])
                    }), i.each(e, function(t) {
                        t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                    }), this.showTooltip(e)
                }), this.BarClass = e.Rectangle.extend({
                    strokeWidth: this.options.barStrokeWidth,
                    showStroke: this.options.barShowStroke,
                    ctx: this.chart.ctx
                }), i.each(t.datasets, function(e, n) {
                    var o = {
                        label: e.label || null,
                        fillColor: e.fillColor,
                        strokeColor: e.strokeColor,
                        bars: []
                    };
                    this.datasets.push(o), i.each(e.data, function(i, n) {
                        o.bars.push(new this.BarClass({
                            value: i,
                            label: t.labels[n],
                            datasetLabel: e.label,
                            strokeColor: e.strokeColor,
                            fillColor: e.fillColor,
                            highlightFill: e.highlightFill || e.fillColor,
                            highlightStroke: e.highlightStroke || e.strokeColor
                        }))
                    }, this)
                }, this), this.buildScale(t.labels), this.BarClass.prototype.base = this.scale.endPoint, this.eachBars(function(t, e, n) {
                    i.extend(t, {
                        width: this.scale.calculateBarWidth(this.datasets.length),
                        x: this.scale.calculateBarX(this.datasets.length, n, e),
                        y: this.scale.endPoint
                    }), t.save()
                }, this), this.render()
            },
            update: function() {
                this.scale.update(), i.each(this.activeElements, function(t) {
                    t.restore(["fillColor", "strokeColor"])
                }), this.eachBars(function(t) {
                    t.save()
                }), this.render()
            },
            eachBars: function(t) {
                i.each(this.datasets, function(e, n) {
                    i.each(e.bars, t, this, n)
                }, this)
            },
            getBarsAtEvent: function(t) {
                for (var a, e = [], n = i.getRelativePosition(t), o = function(t) {
                        e.push(t.bars[a])
                    }, s = 0; s < this.datasets.length; s++)
                    for (a = 0; a < this.datasets[s].bars.length; a++)
                        if (this.datasets[s].bars[a].inRange(n.x, n.y)) return i.each(this.datasets, o), e;
                return e
            },
            buildScale: function(t) {
                var e = this,
                    n = function() {
                        var t = [];
                        return e.eachBars(function(e) {
                            t.push(e.value)
                        }), t
                    },
                    o = {
                        templateString: this.options.scaleLabel,
                        height: this.chart.height,
                        width: this.chart.width,
                        ctx: this.chart.ctx,
                        textColor: this.options.scaleFontColor,
                        fontSize: this.options.scaleFontSize,
                        fontStyle: this.options.scaleFontStyle,
                        fontFamily: this.options.scaleFontFamily,
                        valuesCount: t.length,
                        beginAtZero: this.options.scaleBeginAtZero,
                        integersOnly: this.options.scaleIntegersOnly,
                        calculateYRange: function(t) {
                            var e = i.calculateScaleRange(n(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                            i.extend(this, e)
                        },
                        xLabels: t,
                        font: i.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                        lineWidth: this.options.scaleLineWidth,
                        lineColor: this.options.scaleLineColor,
                        showHorizontalLines: this.options.scaleShowHorizontalLines,
                        showVerticalLines: this.options.scaleShowVerticalLines,
                        gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                        gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                        padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0,
                        showLabels: this.options.scaleShowLabels,
                        display: this.options.showScale
                    };
                this.options.scaleOverride && i.extend(o, {
                    calculateYRange: i.noop,
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                }), this.scale = new this.ScaleClass(o)
            },
            addData: function(t, e) {
                i.each(t, function(t, i) {
                    this.datasets[i].bars.push(new this.BarClass({
                        value: t,
                        label: e,
                        datasetLabel: this.datasets[i].label,
                        x: this.scale.calculateBarX(this.datasets.length, i, this.scale.valuesCount + 1),
                        y: this.scale.endPoint,
                        width: this.scale.calculateBarWidth(this.datasets.length),
                        base: this.scale.endPoint,
                        strokeColor: this.datasets[i].strokeColor,
                        fillColor: this.datasets[i].fillColor
                    }))
                }, this), this.scale.addXLabel(e), this.update()
            },
            removeData: function() {
                this.scale.removeXLabel(), i.each(this.datasets, function(t) {
                    t.bars.shift()
                }, this), this.update()
            },
            reflow: function() {
                i.extend(this.BarClass.prototype, {
                    y: this.scale.endPoint,
                    base: this.scale.endPoint
                });
                var t = i.extend({
                    height: this.chart.height,
                    width: this.chart.width
                });
                this.scale.update(t)
            },
            draw: function(t) {
                var e = t || 1;
                this.clear();
                this.chart.ctx;
                this.scale.draw(e), i.each(this.datasets, function(t, n) {
                    i.each(t.bars, function(t, i) {
                        t.hasValue() && (t.base = this.scale.endPoint, t.transition({
                            x: this.scale.calculateBarX(this.datasets.length, n, i),
                            y: this.scale.calculateY(t.value),
                            width: this.scale.calculateBarWidth(this.datasets.length)
                        }, e).draw())
                    }, this)
                }, this)
            }
        })
    }.call(this),
    function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers,
            n = {
                segmentShowStroke: !0,
                segmentStrokeColor: "#fff",
                segmentStrokeWidth: 2,
                percentageInnerCutout: 50,
                animationSteps: 100,
                animationEasing: "easeOutBounce",
                animateRotate: !0,
                animateScale: !1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>'
            };
        e.Type.extend({
            name: "Doughnut",
            defaults: n,
            initialize: function(t) {
                this.segments = [], this.outerRadius = (i.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, this.SegmentArc = e.Arc.extend({
                    ctx: this.chart.ctx,
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                    i.each(this.segments, function(t) {
                        t.restore(["fillColor"])
                    }), i.each(e, function(t) {
                        t.fillColor = t.highlightColor
                    }), this.showTooltip(e)
                }), this.calculateTotal(t), i.each(t, function(e, i) {
                    e.color || (e.color = "hsl(" + 360 * i / t.length + ", 100%, 50%)"), this.addData(e, i, !0)
                }, this), this.render()
            },
            getSegmentsAtEvent: function(t) {
                var e = [],
                    n = i.getRelativePosition(t);
                return i.each(this.segments, function(t) {
                    t.inRange(n.x, n.y) && e.push(t)
                }, this), e
            },
            addData: function(t, i, n) {
                var o = void 0 !== i ? i : this.segments.length;
                "undefined" == typeof t.color && (t.color = e.defaults.global.segmentColorDefault[o % e.defaults.global.segmentColorDefault.length], t.highlight = e.defaults.global.segmentHighlightColorDefaults[o % e.defaults.global.segmentHighlightColorDefaults.length]), this.segments.splice(o, 0, new this.SegmentArc({
                    value: t.value,
                    outerRadius: this.options.animateScale ? 0 : this.outerRadius,
                    innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout,
                    fillColor: t.color,
                    highlightColor: t.highlight || t.color,
                    showStroke: this.options.segmentShowStroke,
                    strokeWidth: this.options.segmentStrokeWidth,
                    strokeColor: this.options.segmentStrokeColor,
                    startAngle: 1.5 * Math.PI,
                    circumference: this.options.animateRotate ? 0 : this.calculateCircumference(t.value),
                    label: t.label
                })), n || (this.reflow(), this.update())
            },
            calculateCircumference: function(t) {
                return this.total > 0 ? 2 * Math.PI * (t / this.total) : 0
            },
            calculateTotal: function(t) {
                this.total = 0, i.each(t, function(t) {
                    this.total += Math.abs(t.value)
                }, this)
            },
            update: function() {
                this.calculateTotal(this.segments), i.each(this.activeElements, function(t) {
                    t.restore(["fillColor"])
                }), i.each(this.segments, function(t) {
                    t.save()
                }), this.render()
            },
            removeData: function(t) {
                var e = i.isNumber(t) ? t : this.segments.length - 1;
                this.segments.splice(e, 1), this.reflow(), this.update()
            },
            reflow: function() {
                i.extend(this.SegmentArc.prototype, {
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.outerRadius = (i.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, i.each(this.segments, function(t) {
                    t.update({
                        outerRadius: this.outerRadius,
                        innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                    })
                }, this)
            },
            draw: function(t) {
                var e = t ? t : 1;
                this.clear(), i.each(this.segments, function(t, i) {
                    t.transition({
                        circumference: this.calculateCircumference(t.value),
                        outerRadius: this.outerRadius,
                        innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                    }, e), t.endAngle = t.startAngle + t.circumference, t.draw(), 0 === i && (t.startAngle = 1.5 * Math.PI), i < this.segments.length - 1 && (this.segments[i + 1].startAngle = t.endAngle)
                }, this)
            }
        }), e.types.Doughnut.extend({
            name: "Pie",
            defaults: i.merge(n, {
                percentageInnerCutout: 0
            })
        })
    }.call(this),
    function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers,
            n = {
                scaleShowGridLines: !0,
                scaleGridLineColor: "rgba(0,0,0,.05)",
                scaleGridLineWidth: 1,
                scaleShowHorizontalLines: !0,
                scaleShowVerticalLines: !0,
                bezierCurve: !0,
                bezierCurveTension: .4,
                pointDot: !0,
                pointDotRadius: 4,
                pointDotStrokeWidth: 1,
                pointHitDetectionRadius: 20,
                datasetStroke: !0,
                datasetStrokeWidth: 2,
                datasetFill: !0,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>',
                offsetGridLines: !1
            };
        e.Type.extend({
            name: "Line",
            defaults: n,
            initialize: function(t) {
                this.PointClass = e.Point.extend({
                    offsetGridLines: this.options.offsetGridLines,
                    strokeWidth: this.options.pointDotStrokeWidth,
                    radius: this.options.pointDotRadius,
                    display: this.options.pointDot,
                    hitDetectionRadius: this.options.pointHitDetectionRadius,
                    ctx: this.chart.ctx,
                    inRange: function(t) {
                        return Math.pow(t - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2)
                    }
                }), this.datasets = [], this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                    this.eachPoints(function(t) {
                        t.restore(["fillColor", "strokeColor"])
                    }), i.each(e, function(t) {
                        t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                    }), this.showTooltip(e)
                }), i.each(t.datasets, function(e) {
                    var n = {
                        label: e.label || null,
                        fillColor: e.fillColor,
                        strokeColor: e.strokeColor,
                        pointColor: e.pointColor,
                        pointStrokeColor: e.pointStrokeColor,
                        points: []
                    };
                    this.datasets.push(n), i.each(e.data, function(i, o) {
                        n.points.push(new this.PointClass({
                            value: i,
                            label: t.labels[o],
                            datasetLabel: e.label,
                            strokeColor: e.pointStrokeColor,
                            fillColor: e.pointColor,
                            highlightFill: e.pointHighlightFill || e.pointColor,
                            highlightStroke: e.pointHighlightStroke || e.pointStrokeColor
                        }))
                    }, this), this.buildScale(t.labels), this.eachPoints(function(t, e) {
                        i.extend(t, {
                            x: this.scale.calculateX(e),
                            y: this.scale.endPoint
                        }), t.save()
                    }, this)
                }, this), this.render()
            },
            update: function() {
                this.scale.update(), i.each(this.activeElements, function(t) {
                    t.restore(["fillColor", "strokeColor"])
                }), this.eachPoints(function(t) {
                    t.save()
                }), this.render()
            },
            eachPoints: function(t) {
                i.each(this.datasets, function(e) {
                    i.each(e.points, t, this)
                }, this)
            },
            getPointsAtEvent: function(t) {
                var e = [],
                    n = i.getRelativePosition(t);
                return i.each(this.datasets, function(t) {
                    i.each(t.points, function(t) {
                        t.inRange(n.x, n.y) && e.push(t)
                    })
                }, this), e
            },
            buildScale: function(t) {
                var n = this,
                    o = function() {
                        var t = [];
                        return n.eachPoints(function(e) {
                            t.push(e.value)
                        }), t
                    },
                    a = {
                        templateString: this.options.scaleLabel,
                        height: this.chart.height,
                        width: this.chart.width,
                        ctx: this.chart.ctx,
                        textColor: this.options.scaleFontColor,
                        offsetGridLines: this.options.offsetGridLines,
                        fontSize: this.options.scaleFontSize,
                        fontStyle: this.options.scaleFontStyle,
                        fontFamily: this.options.scaleFontFamily,
                        valuesCount: t.length,
                        beginAtZero: this.options.scaleBeginAtZero,
                        integersOnly: this.options.scaleIntegersOnly,
                        calculateYRange: function(t) {
                            var e = i.calculateScaleRange(o(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                            i.extend(this, e)
                        },
                        xLabels: t,
                        font: i.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                        lineWidth: this.options.scaleLineWidth,
                        lineColor: this.options.scaleLineColor,
                        showHorizontalLines: this.options.scaleShowHorizontalLines,
                        showVerticalLines: this.options.scaleShowVerticalLines,
                        gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                        gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                        padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
                        showLabels: this.options.scaleShowLabels,
                        display: this.options.showScale
                    };
                this.options.scaleOverride && i.extend(a, {
                    calculateYRange: i.noop,
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                }), this.scale = new e.Scale(a)
            },
            addData: function(t, e) {
                i.each(t, function(t, i) {
                    this.datasets[i].points.push(new this.PointClass({
                        value: t,
                        label: e,
                        datasetLabel: this.datasets[i].label,
                        x: this.scale.calculateX(this.scale.valuesCount + 1),
                        y: this.scale.endPoint,
                        strokeColor: this.datasets[i].pointStrokeColor,
                        fillColor: this.datasets[i].pointColor
                    }))
                }, this), this.scale.addXLabel(e), this.update()
            },
            removeData: function() {
                this.scale.removeXLabel(), i.each(this.datasets, function(t) {
                    t.points.shift()
                }, this), this.update()
            },
            reflow: function() {
                var t = i.extend({
                    height: this.chart.height,
                    width: this.chart.width
                });
                this.scale.update(t)
            },
            draw: function(t) {
                var e = t || 1;
                this.clear();
                var n = this.chart.ctx,
                    o = function(t) {
                        return null !== t.value
                    },
                    a = function(t, e, n) {
                        return i.findNextWhere(e, o, n) || t
                    },
                    s = function(t, e, n) {
                        return i.findPreviousWhere(e, o, n) || t
                    };
                this.scale && (this.scale.draw(e), i.each(this.datasets, function(t) {
                    var r = i.where(t.points, o);
                    i.each(t.points, function(t, i) {
                        t.hasValue() && t.transition({
                            y: this.scale.calculateY(t.value),
                            x: this.scale.calculateX(i)
                        }, e)
                    }, this), this.options.bezierCurve && i.each(r, function(t, e) {
                        var n = e > 0 && e < r.length - 1 ? this.options.bezierCurveTension : 0;
                        t.controlPoints = i.splineCurve(s(t, r, e), t, a(t, r, e), n), t.controlPoints.outer.y > this.scale.endPoint ? t.controlPoints.outer.y = this.scale.endPoint : t.controlPoints.outer.y < this.scale.startPoint && (t.controlPoints.outer.y = this.scale.startPoint), t.controlPoints.inner.y > this.scale.endPoint ? t.controlPoints.inner.y = this.scale.endPoint : t.controlPoints.inner.y < this.scale.startPoint && (t.controlPoints.inner.y = this.scale.startPoint)
                    }, this), n.lineWidth = this.options.datasetStrokeWidth, n.strokeStyle = t.strokeColor, n.beginPath(), i.each(r, function(t, e) {
                        if (0 === e) n.moveTo(t.x, t.y);
                        else if (this.options.bezierCurve) {
                            var i = s(t, r, e);
                            n.bezierCurveTo(i.controlPoints.outer.x, i.controlPoints.outer.y, t.controlPoints.inner.x, t.controlPoints.inner.y, t.x, t.y)
                        } else n.lineTo(t.x, t.y)
                    }, this), this.options.datasetStroke && n.stroke(), this.options.datasetFill && r.length > 0 && (n.lineTo(r[r.length - 1].x, this.scale.endPoint), n.lineTo(r[0].x, this.scale.endPoint), n.fillStyle = t.fillColor, n.closePath(), n.fill()), i.each(r, function(t) {
                        t.draw()
                    })
                }, this))
            }
        })
    }.call(this),
    function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers,
            n = {
                scaleShowLabelBackdrop: !0,
                scaleBackdropColor: "rgba(255,255,255,0.75)",
                scaleBeginAtZero: !0,
                scaleBackdropPaddingY: 2,
                scaleBackdropPaddingX: 2,
                scaleShowLine: !0,
                segmentShowStroke: !0,
                segmentStrokeColor: "#fff",
                segmentStrokeWidth: 2,
                animationSteps: 100,
                animationEasing: "easeOutBounce",
                animateRotate: !0,
                animateScale: !1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>'
            };
        e.Type.extend({
            name: "PolarArea",
            defaults: n,
            initialize: function(t) {
                this.segments = [], this.SegmentArc = e.Arc.extend({
                    showStroke: this.options.segmentShowStroke,
                    strokeWidth: this.options.segmentStrokeWidth,
                    strokeColor: this.options.segmentStrokeColor,
                    ctx: this.chart.ctx,
                    innerRadius: 0,
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.scale = new e.RadialScale({
                    display: this.options.showScale,
                    fontStyle: this.options.scaleFontStyle,
                    fontSize: this.options.scaleFontSize,
                    fontFamily: this.options.scaleFontFamily,
                    fontColor: this.options.scaleFontColor,
                    showLabels: this.options.scaleShowLabels,
                    showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                    backdropColor: this.options.scaleBackdropColor,
                    backdropPaddingY: this.options.scaleBackdropPaddingY,
                    backdropPaddingX: this.options.scaleBackdropPaddingX,
                    lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                    lineColor: this.options.scaleLineColor,
                    lineArc: !0,
                    width: this.chart.width,
                    height: this.chart.height,
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2,
                    ctx: this.chart.ctx,
                    templateString: this.options.scaleLabel,
                    valuesCount: t.length
                }), this.updateScaleRange(t), this.scale.update(), i.each(t, function(t, e) {
                    this.addData(t, e, !0)
                }, this), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                    i.each(this.segments, function(t) {
                        t.restore(["fillColor"])
                    }), i.each(e, function(t) {
                        t.fillColor = t.highlightColor
                    }), this.showTooltip(e)
                }), this.render()
            },
            getSegmentsAtEvent: function(t) {
                var e = [],
                    n = i.getRelativePosition(t);
                return i.each(this.segments, function(t) {
                    t.inRange(n.x, n.y) && e.push(t)
                }, this), e
            },
            addData: function(t, e, i) {
                var n = e || this.segments.length;
                this.segments.splice(n, 0, new this.SegmentArc({
                    fillColor: t.color,
                    highlightColor: t.highlight || t.color,
                    label: t.label,
                    value: t.value,
                    outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(t.value),
                    circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(),
                    startAngle: 1.5 * Math.PI
                })), i || (this.reflow(), this.update())
            },
            removeData: function(t) {
                var e = i.isNumber(t) ? t : this.segments.length - 1;
                this.segments.splice(e, 1), this.reflow(), this.update()
            },
            calculateTotal: function(t) {
                this.total = 0, i.each(t, function(t) {
                    this.total += t.value
                }, this), this.scale.valuesCount = this.segments.length
            },
            updateScaleRange: function(t) {
                var e = [];
                i.each(t, function(t) {
                    e.push(t.value)
                });
                var n = this.options.scaleOverride ? {
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                } : i.calculateScaleRange(e, i.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                i.extend(this.scale, n, {
                    size: i.min([this.chart.width, this.chart.height]),
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                })
            },
            update: function() {
                this.calculateTotal(this.segments), i.each(this.segments, function(t) {
                    t.save()
                }), this.reflow(), this.render()
            },
            reflow: function() {
                i.extend(this.SegmentArc.prototype, {
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.updateScaleRange(this.segments), this.scale.update(), i.extend(this.scale, {
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                }), i.each(this.segments, function(t) {
                    t.update({
                        outerRadius: this.scale.calculateCenterOffset(t.value)
                    })
                }, this)
            },
            draw: function(t) {
                var e = t || 1;
                this.clear(), i.each(this.segments, function(t, i) {
                    t.transition({
                        circumference: this.scale.getCircumference(),
                        outerRadius: this.scale.calculateCenterOffset(t.value)
                    }, e), t.endAngle = t.startAngle + t.circumference, 0 === i && (t.startAngle = 1.5 * Math.PI), i < this.segments.length - 1 && (this.segments[i + 1].startAngle = t.endAngle), t.draw()
                }, this), this.scale.draw()
            }
        })
    }.call(this),
    function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers;
        e.Type.extend({
            name: "Radar",
            defaults: {
                scaleShowLine: !0,
                angleShowLineOut: !0,
                scaleShowLabels: !1,
                scaleBeginAtZero: !0,
                angleLineColor: "rgba(0,0,0,.1)",
                angleLineWidth: 1,
                pointLabelFontFamily: "'Arial'",
                pointLabelFontStyle: "normal",
                pointLabelFontSize: 10,
                pointLabelFontColor: "#666",
                pointDot: !0,
                pointDotRadius: 3,
                pointDotStrokeWidth: 1,
                pointHitDetectionRadius: 20,
                datasetStroke: !0,
                datasetStrokeWidth: 2,
                datasetFill: !0,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>'
            },
            initialize: function(t) {
                this.PointClass = e.Point.extend({
                    strokeWidth: this.options.pointDotStrokeWidth,
                    radius: this.options.pointDotRadius,
                    display: this.options.pointDot,
                    hitDetectionRadius: this.options.pointHitDetectionRadius,
                    ctx: this.chart.ctx
                }), this.datasets = [], this.buildScale(t), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                    this.eachPoints(function(t) {
                        t.restore(["fillColor", "strokeColor"])
                    }), i.each(e, function(t) {
                        t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                    }), this.showTooltip(e)
                }), i.each(t.datasets, function(e) {
                    var n = {
                        label: e.label || null,
                        fillColor: e.fillColor,
                        strokeColor: e.strokeColor,
                        pointColor: e.pointColor,
                        pointStrokeColor: e.pointStrokeColor,
                        points: []
                    };
                    this.datasets.push(n), i.each(e.data, function(i, o) {
                        var a;
                        this.scale.animation || (a = this.scale.getPointPosition(o, this.scale.calculateCenterOffset(i))), n.points.push(new this.PointClass({
                            value: i,
                            label: t.labels[o],
                            datasetLabel: e.label,
                            x: this.options.animation ? this.scale.xCenter : a.x,
                            y: this.options.animation ? this.scale.yCenter : a.y,
                            strokeColor: e.pointStrokeColor,
                            fillColor: e.pointColor,
                            highlightFill: e.pointHighlightFill || e.pointColor,
                            highlightStroke: e.pointHighlightStroke || e.pointStrokeColor
                        }))
                    }, this)
                }, this), this.render()
            },
            eachPoints: function(t) {
                i.each(this.datasets, function(e) {
                    i.each(e.points, t, this)
                }, this)
            },
            getPointsAtEvent: function(t) {
                var e = i.getRelativePosition(t),
                    n = i.getAngleFromPoint({
                        x: this.scale.xCenter,
                        y: this.scale.yCenter
                    }, e),
                    o = 2 * Math.PI / this.scale.valuesCount,
                    a = Math.round((n.angle - 1.5 * Math.PI) / o),
                    s = [];
                return (a >= this.scale.valuesCount || 0 > a) && (a = 0), n.distance <= this.scale.drawingArea && i.each(this.datasets, function(t) {
                    s.push(t.points[a])
                }), s
            },
            buildScale: function(t) {
                this.scale = new e.RadialScale({
                    display: this.options.showScale,
                    fontStyle: this.options.scaleFontStyle,
                    fontSize: this.options.scaleFontSize,
                    fontFamily: this.options.scaleFontFamily,
                    fontColor: this.options.scaleFontColor,
                    showLabels: this.options.scaleShowLabels,
                    showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                    backdropColor: this.options.scaleBackdropColor,
                    backgroundColors: this.options.scaleBackgroundColors,
                    backdropPaddingY: this.options.scaleBackdropPaddingY,
                    backdropPaddingX: this.options.scaleBackdropPaddingX,
                    lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                    lineColor: this.options.scaleLineColor,
                    angleLineColor: this.options.angleLineColor,
                    angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0,
                    pointLabelFontColor: this.options.pointLabelFontColor,
                    pointLabelFontSize: this.options.pointLabelFontSize,
                    pointLabelFontFamily: this.options.pointLabelFontFamily,
                    pointLabelFontStyle: this.options.pointLabelFontStyle,
                    height: this.chart.height,
                    width: this.chart.width,
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2,
                    ctx: this.chart.ctx,
                    templateString: this.options.scaleLabel,
                    labels: t.labels,
                    valuesCount: t.datasets[0].data.length
                }), this.scale.setScaleSize(), this.updateScaleRange(t.datasets), this.scale.buildYLabels()
            },
            updateScaleRange: function(t) {
                var e = function() {
                        var e = [];
                        return i.each(t, function(t) {
                            t.data ? e = e.concat(t.data) : i.each(t.points, function(t) {
                                e.push(t.value)
                            })
                        }), e
                    }(),
                    n = this.options.scaleOverride ? {
                        steps: this.options.scaleSteps,
                        stepValue: this.options.scaleStepWidth,
                        min: this.options.scaleStartValue,
                        max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                    } : i.calculateScaleRange(e, i.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                i.extend(this.scale, n)
            },
            addData: function(t, e) {
                this.scale.valuesCount++, i.each(t, function(t, i) {
                    var n = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(t));
                    this.datasets[i].points.push(new this.PointClass({
                        value: t,
                        label: e,
                        datasetLabel: this.datasets[i].label,
                        x: n.x,
                        y: n.y,
                        strokeColor: this.datasets[i].pointStrokeColor,
                        fillColor: this.datasets[i].pointColor
                    }))
                }, this), this.scale.labels.push(e), this.reflow(), this.update()
            },
            removeData: function() {
                this.scale.valuesCount--, this.scale.labels.shift(), i.each(this.datasets, function(t) {
                    t.points.shift()
                }, this), this.reflow(), this.update()
            },
            update: function() {
                this.eachPoints(function(t) {
                    t.save()
                }), this.reflow(), this.render()
            },
            reflow: function() {
                i.extend(this.scale, {
                    width: this.chart.width,
                    height: this.chart.height,
                    size: i.min([this.chart.width, this.chart.height]),
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                }), this.updateScaleRange(this.datasets), this.scale.setScaleSize(), this.scale.buildYLabels()
            },
            draw: function(t) {
                var e = t || 1,
                    n = this.chart.ctx;
                this.clear(), this.scale.draw(), i.each(this.datasets, function(t) {
                    i.each(t.points, function(t, i) {
                        t.hasValue() && t.transition(this.scale.getPointPosition(i, this.scale.calculateCenterOffset(t.value)), e)
                    }, this), n.lineWidth = this.options.datasetStrokeWidth, n.strokeStyle = t.strokeColor, n.beginPath(), i.each(t.points, function(t, e) {
                        0 === e ? n.moveTo(t.x, t.y) : n.lineTo(t.x, t.y)
                    }, this), n.closePath(), n.stroke(), n.fillStyle = t.fillColor, this.options.datasetFill && n.fill(), i.each(t.points, function(t) {
                        t.hasValue() && t.draw()
                    })
                }, this)
            }
        })
    }.call(this),
    function() {
        var t, e, i, n, o, a = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            s = [].indexOf || function(t) {
                for (var e = 0, i = this.length; i > e; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            };
        e = function() {
            function t() {}
            return t.prototype.extend = function(t, e) {
                var i, n;
                for (i in e) n = e[i], null == t[i] && (t[i] = n);
                return t
            }, t.prototype.isMobile = function(t) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
            }, t.prototype.createEvent = function(t, e, i, n) {
                var o;
                return null == e && (e = !1), null == i && (i = !1), null == n && (n = null), null != document.createEvent ? (o = document.createEvent("CustomEvent"), o.initCustomEvent(t, e, i, n)) : null != document.createEventObject ? (o = document.createEventObject(), o.eventType = t) : o.eventName = t, o
            }, t.prototype.emitEvent = function(t, e) {
                return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
            }, t.prototype.addEvent = function(t, e, i) {
                return null != t.addEventListener ? t.addEventListener(e, i, !1) : null != t.attachEvent ? t.attachEvent("on" + e, i) : t[e] = i
            }, t.prototype.removeEvent = function(t, e, i) {
                return null != t.removeEventListener ? t.removeEventListener(e, i, !1) : null != t.detachEvent ? t.detachEvent("on" + e, i) : delete t[e]
            }, t.prototype.innerHeight = function() {
                return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
            }, t
        }(), i = this.WeakMap || this.MozWeakMap || (i = function() {
            function t() {
                this.keys = [], this.values = []
            }
            return t.prototype.get = function(t) {
                var e, i, n, o, a;
                for (a = this.keys, e = n = 0, o = a.length; o > n; e = ++n)
                    if (i = a[e], i === t) return this.values[e]
            }, t.prototype.set = function(t, e) {
                var i, n, o, a, s;
                for (s = this.keys, i = o = 0, a = s.length; a > o; i = ++o)
                    if (n = s[i], n === t) return void(this.values[i] = e);
                return this.keys.push(t), this.values.push(e)
            }, t
        }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function() {
            function t() {
                "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
            }
            return t.notSupported = !0, t.prototype.observe = function() {}, t
        }()), n = this.getComputedStyle || function(t, e) {
            return this.getPropertyValue = function(e) {
                var i;
                return "float" === e && (e = "styleFloat"), o.test(e) && e.replace(o, function(t, e) {
                    return e.toUpperCase()
                }), (null != (i = t.currentStyle) ? i[e] : void 0) || null
            }, this
        }, o = /(\-([a-z]){1})/g, this.WOW = function() {
            function o(t) {
                null == t && (t = {}), this.scrollCallback = a(this.scrollCallback, this), this.scrollHandler = a(this.scrollHandler, this), this.resetAnimation = a(this.resetAnimation, this), this.start = a(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)), this.animationNameCache = new i, this.wowEvent = this.util().createEvent(this.config.boxClass)
            }
            return o.prototype.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0,
                callback: null,
                scrollContainer: null
            }, o.prototype.init = function() {
                var t;
                return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
            }, o.prototype.start = function() {
                var e, i, n, o;
                if (this.stopped = !1, this.boxes = function() {
                        var t, i, n, o;
                        for (n = this.element.querySelectorAll("." + this.config.boxClass), o = [], t = 0, i = n.length; i > t; t++) e = n[t], o.push(e);
                        return o
                    }.call(this), this.all = function() {
                        var t, i, n, o;
                        for (n = this.boxes, o = [], t = 0, i = n.length; i > t; t++) e = n[t], o.push(e);
                        return o
                    }.call(this), this.boxes.length)
                    if (this.disabled()) this.resetStyle();
                    else
                        for (o = this.boxes, i = 0, n = o.length; n > i; i++) e = o[i], this.applyStyle(e, !0);
                return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new t(function(t) {
                    return function(e) {
                        var i, n, o, a, s;
                        for (s = [], i = 0, n = e.length; n > i; i++) a = e[i], s.push(function() {
                            var t, e, i, n;
                            for (i = a.addedNodes || [], n = [], t = 0, e = i.length; e > t; t++) o = i[t], n.push(this.doSync(o));
                            return n
                        }.call(t));
                        return s
                    }
                }(this)).observe(document.body, {
                    childList: !0,
                    subtree: !0
                }) : void 0
            }, o.prototype.stop = function() {
                return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
            }, o.prototype.sync = function(e) {
                return t.notSupported ? this.doSync(this.element) : void 0
            }, o.prototype.doSync = function(t) {
                var e, i, n, o, a;
                if (null == t && (t = this.element), 1 === t.nodeType) {
                    for (t = t.parentNode || t, o = t.querySelectorAll("." + this.config.boxClass), a = [], i = 0, n = o.length; n > i; i++) e = o[i], s.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), a.push(this.scrolled = !0)) : a.push(void 0);
                    return a
                }
            }, o.prototype.show = function(t) {
                return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t
            }, o.prototype.applyStyle = function(t, e) {
                var i, n, o;
                return n = t.getAttribute("data-wow-duration"), i = t.getAttribute("data-wow-delay"), o = t.getAttribute("data-wow-iteration"), this.animate(function(a) {
                    return function() {
                        return a.customStyle(t, e, n, i, o)
                    }
                }(this))
            }, o.prototype.animate = function() {
                return "requestAnimationFrame" in window ? function(t) {
                    return window.requestAnimationFrame(t)
                } : function(t) {
                    return t()
                }
            }(), o.prototype.resetStyle = function() {
                var t, e, i, n, o;
                for (n = this.boxes, o = [], e = 0, i = n.length; i > e; e++) t = n[e], o.push(t.style.visibility = "visible");
                return o
            }, o.prototype.resetAnimation = function(t) {
                var e;
                return t.type.toLowerCase().indexOf("animationend") >= 0 ? (e = t.target || t.srcElement, e.className = e.className.replace(this.config.animateClass, "").trim()) : void 0
            }, o.prototype.customStyle = function(t, e, i, n, o) {
                return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", i && this.vendorSet(t.style, {
                    animationDuration: i
                }), n && this.vendorSet(t.style, {
                    animationDelay: n
                }), o && this.vendorSet(t.style, {
                    animationIterationCount: o
                }), this.vendorSet(t.style, {
                    animationName: e ? "none" : this.cachedAnimationName(t)
                }), t
            }, o.prototype.vendors = ["moz", "webkit"], o.prototype.vendorSet = function(t, e) {
                var i, n, o, a;
                n = [];
                for (i in e) o = e[i], t["" + i] = o, n.push(function() {
                    var e, n, s, r;
                    for (s = this.vendors, r = [], e = 0, n = s.length; n > e; e++) a = s[e], r.push(t["" + a + i.charAt(0).toUpperCase() + i.substr(1)] = o);
                    return r
                }.call(this));
                return n
            }, o.prototype.vendorCSS = function(t, e) {
                var i, o, a, s, r, l;
                for (r = n(t), s = r.getPropertyCSSValue(e), a = this.vendors, i = 0, o = a.length; o > i; i++) l = a[i], s = s || r.getPropertyCSSValue("-" + l + "-" + e);
                return s
            }, o.prototype.animationName = function(t) {
                var e;
                try {
                    e = this.vendorCSS(t, "animation-name").cssText
                } catch (i) {
                    e = n(t).getPropertyValue("animation-name")
                }
                return "none" === e ? "" : e
            }, o.prototype.cacheAnimationName = function(t) {
                return this.animationNameCache.set(t, this.animationName(t))
            }, o.prototype.cachedAnimationName = function(t) {
                return this.animationNameCache.get(t)
            }, o.prototype.scrollHandler = function() {
                return this.scrolled = !0
            }, o.prototype.scrollCallback = function() {
                var t;
                return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                    var e, i, n, o;
                    for (n = this.boxes, o = [], e = 0, i = n.length; i > e; e++) t = n[e], t && (this.isVisible(t) ? this.show(t) : o.push(t));
                    return o
                }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
            }, o.prototype.offsetTop = function(t) {
                for (var e; void 0 === t.offsetTop;) t = t.parentNode;
                for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
                return e
            }, o.prototype.isVisible = function(t) {
                var e, i, n, o, a;
                return i = t.getAttribute("data-wow-offset") || this.config.offset, a = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, o = a + Math.min(this.element.clientHeight, this.util().innerHeight()) - i, n = this.offsetTop(t), e = n + t.clientHeight, o >= n && e >= a
            }, o.prototype.util = function() {
                return null != this._util ? this._util : this._util = new e
            }, o.prototype.disabled = function() {
                return !this.config.mobile && this.util().isMobile(navigator.userAgent)
            }, o
        }()
    }.call(this), $(window).scroll(function() {
        $(".navbar").offset() && ($(".navbar").offset().top > 50 ? $(".scrolling-navbar").addClass("top-nav-collapse") : $(".scrolling-navbar").removeClass("top-nav-collapse"))
    }), $(function() {
        $("a.page-scroll").bind("click", function(t) {
            var e = $(this);
            $("html, body").stop().animate({
                scrollTop: $(e.attr("href")).offset().top
            }, 1500, "easeInOutExpo"), t.preventDefault()
        })
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define([], function() {
            return e.apply(t)
        }) : "object" == typeof exports ? module.exports = e.call(t) : t.Waves = e.call(t)
    }("object" == typeof global ? global : this, function() {
        "use strict";

        function o(t) {
            return null !== t && t === t.window
        }

        function a(t) {
            return o(t) ? t : 9 === t.nodeType && t.defaultView
        }

        function s(t) {
            var e = typeof t;
            return "function" === e || "object" === e && !!t
        }

        function r(t) {
            return s(t) && t.nodeType > 0
        }

        function l(t) {
            var n = i.call(t);
            return "[object String]" === n ? e(t) : s(t) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(n) && t.hasOwnProperty("length") ? t : r(t) ? [t] : []
        }

        function c(t) {
            var e, i, n = {
                    top: 0,
                    left: 0
                },
                o = t && t.ownerDocument;
            return e = o.documentElement, "undefined" != typeof t.getBoundingClientRect && (n = t.getBoundingClientRect()), i = a(o), {
                top: n.top + i.pageYOffset - e.clientTop,
                left: n.left + i.pageXOffset - e.clientLeft
            }
        }

        function u(t) {
            var e = "";
            for (var i in t) t.hasOwnProperty(i) && (e += i + ":" + t[i] + ";");
            return e
        }

        function f(t, e, i) {
            if (i) {
                i.classList.remove("waves-rippling");
                var n = i.getAttribute("data-x"),
                    o = i.getAttribute("data-y"),
                    a = i.getAttribute("data-scale"),
                    s = i.getAttribute("data-translate"),
                    r = Date.now() - Number(i.getAttribute("data-hold")),
                    l = 350 - r;
                0 > l && (l = 0), "mousemove" === t.type && (l = 150);
                var c = "mousemove" === t.type ? 2500 : h.duration;
                setTimeout(function() {
                    var t = {
                        top: o + "px",
                        left: n + "px",
                        opacity: "0",
                        "-webkit-transition-duration": c + "ms",
                        "-moz-transition-duration": c + "ms",
                        "-o-transition-duration": c + "ms",
                        "transition-duration": c + "ms",
                        "-webkit-transform": a + " " + s,
                        "-moz-transform": a + " " + s,
                        "-ms-transform": a + " " + s,
                        "-o-transform": a + " " + s,
                        transform: a + " " + s
                    };
                    i.setAttribute("style", u(t)), setTimeout(function() {
                        try {
                            e.removeChild(i)
                        } catch (t) {
                            return !1
                        }
                    }, c)
                }, l)
            }
        }

        function v(t) {
            if (p.allowEvent(t) === !1) return null;
            for (var e = null, i = t.target || t.srcElement; null !== i.parentElement;) {
                if (i.classList.contains("waves-effect") && !(i instanceof SVGElement)) {
                    e = i;
                    break
                }
                i = i.parentElement
            }
            return e
        }

        function m(t) {
            var e = v(t);
            if (null !== e) {
                if (e.disabled || e.getAttribute("disabled") || e.classList.contains("disabled")) return;
                if (p.registerEvent(t), "touchstart" === t.type && h.delay) {
                    var i = !1,
                        o = setTimeout(function() {
                            o = null, h.show(t, e)
                        }, h.delay),
                        a = function(n) {
                            o && (clearTimeout(o), o = null, h.show(t, e)), i || (i = !0, h.hide(n, e))
                        },
                        s = function(t) {
                            o && (clearTimeout(o), o = null), a(t)
                        };
                    e.addEventListener("touchmove", s, !1), e.addEventListener("touchend", a, !1), e.addEventListener("touchcancel", a, !1)
                } else h.show(t, e), n && (e.addEventListener("touchend", h.hide, !1), e.addEventListener("touchcancel", h.hide, !1)), e.addEventListener("mouseup", h.hide, !1), e.addEventListener("mouseleave", h.hide, !1)
            }
        }
        var t = t || {},
            e = document.querySelectorAll.bind(document),
            i = Object.prototype.toString,
            n = "ontouchstart" in window,
            h = {
                duration: 750,
                delay: 200,
                show: function(t, e, i) {
                    if (2 === t.button) return !1;
                    e = e || this;
                    var n = document.createElement("div");
                    n.className = "waves-ripple waves-rippling", e.appendChild(n);
                    var o = c(e),
                        a = 0,
                        s = 0;
                    "touches" in t && t.touches.length ? (a = t.touches[0].pageY - o.top, s = t.touches[0].pageX - o.left) : (a = t.pageY - o.top, s = t.pageX - o.left), s = s >= 0 ? s : 0, a = a >= 0 ? a : 0;
                    var r = "scale(" + e.clientWidth / 100 * 3 + ")",
                        l = "translate(0,0)";
                    i && (l = "translate(" + i.x + "px, " + i.y + "px)"), n.setAttribute("data-hold", Date.now()), n.setAttribute("data-x", s), n.setAttribute("data-y", a), n.setAttribute("data-scale", r), n.setAttribute("data-translate", l);
                    var d = {
                        top: a + "px",
                        left: s + "px"
                    };
                    n.classList.add("waves-notransition"), n.setAttribute("style", u(d)), n.classList.remove("waves-notransition"), d["-webkit-transform"] = r + " " + l, d["-moz-transform"] = r + " " + l, d["-ms-transform"] = r + " " + l, d["-o-transform"] = r + " " + l, d.transform = r + " " + l, d.opacity = "1";
                    var f = "mousemove" === t.type ? 2500 : h.duration;
                    d["-webkit-transition-duration"] = f + "ms", d["-moz-transition-duration"] = f + "ms", d["-o-transition-duration"] = f + "ms", d["transition-duration"] = f + "ms", n.setAttribute("style", u(d))
                },
                hide: function(t, e) {
                    e = e || this;
                    for (var i = e.getElementsByClassName("waves-rippling"), n = 0, o = i.length; o > n; n++) f(t, e, i[n])
                }
            },
            d = {
                input: function(t) {
                    var e = t.parentNode;
                    if ("i" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) {
                        var i = document.createElement("i");
                        i.className = t.className + " waves-input-wrapper", t.className = "waves-button-input", e.replaceChild(i, t), i.appendChild(t);
                        var n = window.getComputedStyle(t, null),
                            o = n.color,
                            a = n.backgroundColor;
                        i.setAttribute("style", "color:" + o + ";background:" + a), t.setAttribute("style", "background-color:rgba(0,0,0,0);")
                    }
                },
                img: function(t) {
                    var e = t.parentNode;
                    if ("i" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) {
                        var i = document.createElement("i");
                        e.replaceChild(i, t), i.appendChild(t)
                    }
                }
            },
            p = {
                touches: 0,
                allowEvent: function(t) {
                    var e = !0;
                    return /^(mousedown|mousemove)$/.test(t.type) && p.touches && (e = !1), e
                },
                registerEvent: function(t) {
                    var e = t.type;
                    "touchstart" === e ? p.touches += 1 : /^(touchend|touchcancel)$/.test(e) && setTimeout(function() {
                        p.touches && (p.touches -= 1)
                    }, 500)
                }
            };
        return t.init = function(t) {
            var e = document.body;
            t = t || {}, "duration" in t && (h.duration = t.duration), "delay" in t && (h.delay = t.delay), n && (e.addEventListener("touchstart", m, !1), e.addEventListener("touchcancel", p.registerEvent, !1), e.addEventListener("touchend", p.registerEvent, !1)), e.addEventListener("mousedown", m, !1)
        }, t.attach = function(t, e) {
            t = l(t), "[object Array]" === i.call(e) && (e = e.join(" ")), e = e ? " " + e : "";
            for (var n, o, a = 0, s = t.length; s > a; a++) n = t[a], o = n.tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(o) && (d[o](n), n = n.parentElement), -1 === n.className.indexOf("waves-effect") && (n.className += " waves-effect" + e)
        }, t.ripple = function(t, e) {
            t = l(t);
            var i = t.length;
            if (e = e || {}, e.wait = e.wait || 0, e.position = e.position || null, i)
                for (var n, o, a, s = {}, r = 0, u = {
                        type: "mousedown",
                        button: 1
                    }, d = function(t, e) {
                        return function() {
                            h.hide(t, e)
                        }
                    }; i > r; r++)
                    if (n = t[r], o = e.position || {
                            x: n.clientWidth / 2,
                            y: n.clientHeight / 2
                        }, a = c(n), s.x = a.left + o.x, s.y = a.top + o.y, u.pageX = s.x, u.pageY = s.y, h.show(u, n), e.wait >= 0 && null !== e.wait) {
                        var f = {
                            type: "mouseup",
                            button: 1
                        };
                        setTimeout(d(f, n), e.wait)
                    }
        }, t.calm = function(t) {
            t = l(t);
            for (var e = {
                    type: "mouseup",
                    button: 1
                }, i = 0, n = t.length; n > i; i++) h.hide(e, t[i])
        }, t.displayEffect = function(e) {
            console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), t.init(e)
        }, t
    }), Waves.attach(".btn, .btn-floating", ["waves-light"]), Waves.attach(".waves-light", ["waves-light"]), Waves.attach(".navbar-nav a:not(.navbar-brand), .nav-icons li a, .navbar form, .nav-tabs .nav-item", ["waves-light"]), Waves.attach(".pager li a", ["waves-light"]), Waves.attach(".pagination .page-item .page-link", ["waves-effect"]), Waves.init(),
    function(t) {
        t(document).ready(function() {
            function o(e) {
                var n = e.css("font-family"),
                    o = e.css("font-size");
                o && i.css("font-size", o), n && i.css("font-family", n), "off" === e.attr("wrap") && i.css("overflow-wrap", "normal").css("white-space", "pre"), i.text(e.val() + "\n");
                var a = i.html().replace(/\n/g, "<br>");
                i.html(a), e.is(":visible") ? i.css("width", e.width()) : i.css("width", t(window).width() / 2), e.css("height", i.height())
            }
            Materialize.updateTextFields = function() {
                var e = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
                t(e).each(function(e, i) {
                    t(i).val().length > 0 || void 0 !== t(this).attr("placeholder") || t(i)[0].validity.badInput === !0 ? t(this).siblings("label, i").addClass("active") : t(this).siblings("label, i").removeClass("active")
                })
            };
            var e = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
            t("input[autofocus]").siblings("label, i").addClass("active"), t(document).on("change", e, function() {
                (0 !== t(this).val().length || void 0 !== t(this).attr("placeholder")) && t(this).siblings("label, i").addClass("active"), validate_field(t(this))
            }), t(document).ready(function() {
                Materialize.updateTextFields()
            }), t(document).on("reset", function(i) {
                var n = t(i.target);
                n.is("form") && (n.find(e).removeClass("valid").removeClass("invalid"), n.find(e).each(function() {
                    "" === t(this).attr("value") && t(this).siblings("label, i").removeClass("active")
                }), n.find("select.initialized").each(function() {
                    var t = n.find("option[selected]").text();
                    n.siblings("input.select-dropdown").val(t)
                }))
            }), t(document).on("focus", e, function() {
                t(this).siblings("label, i").addClass("active")
            }), t(document).on("blur", e, function() {
                var e = t(this);
                0 === e.val().length && e[0].validity.badInput !== !0 && void 0 === e.attr("placeholder") && e.siblings("label, i").removeClass("active"), validate_field(e)
            }), validate_field = function(t) {
                var e = void 0 !== t.attr("length"),
                    i = parseInt(t.attr("length")),
                    n = t.val().length;
                0 === t.val().length && t[0].validity.badInput === !1 ? t.hasClass("validate") && (t.removeClass("valid"), t.removeClass("invalid")) : t.hasClass("validate") && (t.is(":valid") && e && i > n || t.is(":valid") && !e ? (t.removeClass("invalid"), t.addClass("valid")) : (t.removeClass("valid"), t.addClass("invalid")))
            };
            var i = t(".hiddendiv").first();
            i.length || (i = t('<div class="hiddendiv common"></div>'), t("body").append(i));
            var n = ".materialize-textarea";
            t(n).each(function() {
                var e = t(this);
                e.val().length && o(e)
            }), t("body").on("keyup keydown", n, function() {
                o(t(this))
            })
        })
    }(jQuery);