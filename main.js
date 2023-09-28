if (!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (e.document)
            return t(e);
        throw new Error("jQuery requires a window with a document")
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(C, B) {
    "use strict";
    function y(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    }
    function m(e) {
        return null != e && e === e.window
    }
    var t = []
      , N = Object.getPrototypeOf
      , a = t.slice
      , H = t.flat ? function(e) {
        return t.flat.call(e)
    }
    : function(e) {
        return t.concat.apply([], e)
    }
      , P = t.push
      , Q = t.indexOf
      , R = {}
      , F = R.toString
      , W = R.hasOwnProperty
      , z = W.toString
      , G = z.call(Object)
      , g = {}
      , S = C.document
      , Y = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function U(e, t, i) {
        var n, o, s = (i = i || S).createElement("script");
        if (s.text = e,
        t)
            for (n in Y)
                (o = t[n] || t.getAttribute && t.getAttribute(n)) && s.setAttribute(n, o);
        i.head.appendChild(s).parentNode.removeChild(s)
    }
    function f(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? R[F.call(e)] || "object" : typeof e
    }
    var e = "3.6.3"
      , x = function(e, t) {
        return new x.fn.init(e,t)
    };
    function V(e) {
        var t = !!e && "length"in e && e.length
          , i = f(e);
        return !y(e) && !m(e) && ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    x.fn = x.prototype = {
        jquery: e,
        constructor: x,
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            e = x.merge(this.constructor(), e);
            return e.prevObject = this,
            e
        },
        each: function(e) {
            return x.each(this, e)
        },
        map: function(i) {
            return this.pushStack(x.map(this, function(e, t) {
                return i.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(x.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(x.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length
              , e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: P,
        sort: t.sort,
        splice: t.splice
    },
    x.extend = x.fn.extend = function() {
        var e, t, i, n, o, s = arguments[0] || {}, r = 1, a = arguments.length, l = !1;
        for ("boolean" == typeof s && (l = s,
        s = arguments[r] || {},
        r++),
        "object" == typeof s || y(s) || (s = {}),
        r === a && (s = this,
        r--); r < a; r++)
            if (null != (e = arguments[r]))
                for (t in e)
                    i = e[t],
                    "__proto__" !== t && s !== i && (l && i && (x.isPlainObject(i) || (n = Array.isArray(i))) ? (o = s[t],
                    o = n && !Array.isArray(o) ? [] : n || x.isPlainObject(o) ? o : {},
                    n = !1,
                    s[t] = x.extend(l, o, i)) : void 0 !== i && (s[t] = i));
        return s
    }
    ,
    x.extend({
        expando: "jQuery" + (e + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            return !(!e || "[object Object]" !== F.call(e) || (e = N(e)) && ("function" != typeof (e = W.call(e, "constructor") && e.constructor) || z.call(e) !== G))
        },
        isEmptyObject: function(e) {
            for (var t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, i) {
            U(e, {
                nonce: t && t.nonce
            }, i)
        },
        each: function(e, t) {
            var i, n = 0;
            if (V(e))
                for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++)
                    ;
            else
                for (n in e)
                    if (!1 === t.call(e[n], n, e[n]))
                        break;
            return e
        },
        makeArray: function(e, t) {
            t = t || [];
            return null != e && (V(Object(e)) ? x.merge(t, "string" == typeof e ? [e] : e) : P.call(t, e)),
            t
        },
        inArray: function(e, t, i) {
            return null == t ? -1 : Q.call(t, e, i)
        },
        merge: function(e, t) {
            for (var i = +t.length, n = 0, o = e.length; n < i; n++)
                e[o++] = t[n];
            return e.length = o,
            e
        },
        grep: function(e, t, i) {
            for (var n = [], o = 0, s = e.length, r = !i; o < s; o++)
                !t(e[o], o) != r && n.push(e[o]);
            return n
        },
        map: function(e, t, i) {
            var n, o, s = 0, r = [];
            if (V(e))
                for (n = e.length; s < n; s++)
                    null != (o = t(e[s], s, i)) && r.push(o);
            else
                for (s in e)
                    null != (o = t(e[s], s, i)) && r.push(o);
            return H(r)
        },
        guid: 1,
        support: g
    }),
    "function" == typeof Symbol && (x.fn[Symbol.iterator] = t[Symbol.iterator]),
    x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        R["[object " + t + "]"] = t.toLowerCase()
    });
    function n(e, t, i) {
        for (var n = [], o = void 0 !== i; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (o && x(e).is(i))
                    break;
                n.push(e)
            }
        return n
    }
    function q(e, t) {
        for (var i = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && i.push(e);
        return i
    }
    var e = function(B) {
        function h(e, t) {
            return e = "0x" + e.slice(1) - 65536,
            t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode(e >> 10 | 55296, 1023 & e | 56320))
        }
        function N(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }
        function H() {
            C()
        }
        var e, p, b, s, P, u, Q, R, A, l, c, C, S, i, x, f, n, o, m, E = "sizzle" + +new Date, d = B.document, k = 0, F = 0, W = D(), z = D(), G = D(), g = D(), Y = function(e, t) {
            return e === t && (c = !0),
            0
        }, U = {}.hasOwnProperty, t = [], V = t.pop, q = t.push, T = t.push, K = t.slice, y = function(e, t) {
            for (var i = 0, n = e.length; i < n; i++)
                if (e[i] === t)
                    return i;
            return -1
        }, X = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", r = "[\\x20\\t\\r\\n\\f]", a = "(?:\\\\[\\da-fA-F]{1,6}" + r + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", J = "\\[" + r + "*(" + a + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + a + "))|)" + r + "*\\]", Z = ":(" + a + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + J + ")*)|.*)\\)|)", ee = new RegExp(r + "+","g"), v = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$","g"), te = new RegExp("^" + r + "*," + r + "*"), ie = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"), ne = new RegExp(r + "|>"), oe = new RegExp(Z), se = new RegExp("^" + a + "$"), w = {
            ID: new RegExp("^#(" + a + ")"),
            CLASS: new RegExp("^\\.(" + a + ")"),
            TAG: new RegExp("^(" + a + "|[*])"),
            ATTR: new RegExp("^" + J),
            PSEUDO: new RegExp("^" + Z),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)","i"),
            bool: new RegExp("^(?:" + X + ")$","i"),
            needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)","i")
        }, re = /HTML$/i, ae = /^(?:input|select|textarea|button)$/i, le = /^h\d$/i, j = /^[^{]+\{\s*\[native \w/, ce = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, de = /[+~]/, I = new RegExp("\\\\[\\da-fA-F]{1,6}" + r + "?|\\\\([^\\r\\n\\f])","g"), he = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, pe = ye(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            T.apply(t = K.call(d.childNodes), d.childNodes),
            t[d.childNodes.length].nodeType
        } catch (e) {
            T = {
                apply: t.length ? function(e, t) {
                    q.apply(e, K.call(t))
                }
                : function(e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++]; )
                        ;
                    e.length = i - 1
                }
            }
        }
        function M(e, t, i, n) {
            var o, s, r, a, l, c, d = t && t.ownerDocument, h = t ? t.nodeType : 9;
            if (i = i || [],
            "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h)
                return i;
            if (!n && (C(t),
            t = t || S,
            x)) {
                if (11 !== h && (a = ce.exec(e)))
                    if (o = a[1]) {
                        if (9 === h) {
                            if (!(c = t.getElementById(o)))
                                return i;
                            if (c.id === o)
                                return i.push(c),
                                i
                        } else if (d && (c = d.getElementById(o)) && m(t, c) && c.id === o)
                            return i.push(c),
                            i
                    } else {
                        if (a[2])
                            return T.apply(i, t.getElementsByTagName(e)),
                            i;
                        if ((o = a[3]) && p.getElementsByClassName && t.getElementsByClassName)
                            return T.apply(i, t.getElementsByClassName(o)),
                            i
                    }
                if (p.qsa && !g[e + " "] && (!f || !f.test(e)) && (1 !== h || "object" !== t.nodeName.toLowerCase())) {
                    if (c = e,
                    d = t,
                    1 === h && (ne.test(e) || ie.test(e))) {
                        for ((d = de.test(e) && ge(t.parentNode) || t) === t && p.scope || ((r = t.getAttribute("id")) ? r = r.replace(he, N) : t.setAttribute("id", r = E)),
                        s = (l = u(e)).length; s--; )
                            l[s] = (r ? "#" + r : ":scope") + " " + O(l[s]);
                        c = l.join(",")
                    }
                    try {
                        if (p.cssSupportsSelector && !CSS.supports("selector(:is(" + c + "))"))
                            throw new Error;
                        return T.apply(i, d.querySelectorAll(c)),
                        i
                    } catch (t) {
                        g(e, !0)
                    } finally {
                        r === E && t.removeAttribute("id")
                    }
                }
            }
            return R(e.replace(v, "$1"), t, i, n)
        }
        function D() {
            var n = [];
            return function e(t, i) {
                return n.push(t + " ") > b.cacheLength && delete e[n.shift()],
                e[t + " "] = i
            }
        }
        function _(e) {
            return e[E] = !0,
            e
        }
        function $(e) {
            var t = S.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t)
            }
        }
        function ue(e, t) {
            for (var i = e.split("|"), n = i.length; n--; )
                b.attrHandle[i[n]] = t
        }
        function fe(e, t) {
            var i = t && e
              , n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (n)
                return n;
            if (i)
                for (; i = i.nextSibling; )
                    if (i === t)
                        return -1;
            return e ? 1 : -1
        }
        function me(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && pe(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function L(r) {
            return _(function(s) {
                return s = +s,
                _(function(e, t) {
                    for (var i, n = r([], e.length, s), o = n.length; o--; )
                        e[i = n[o]] && (e[i] = !(t[i] = e[i]))
                })
            })
        }
        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in p = M.support = {},
        P = M.isXML = function(e) {
            var t = e && e.namespaceURI
              , e = e && (e.ownerDocument || e).documentElement;
            return !re.test(t || e && e.nodeName || "HTML")
        }
        ,
        C = M.setDocument = function(e) {
            var e = e ? e.ownerDocument || e : d;
            return e != S && 9 === e.nodeType && e.documentElement && (i = (S = e).documentElement,
            x = !P(S),
            d != S && (e = S.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", H, !1) : e.attachEvent && e.attachEvent("onunload", H)),
            p.scope = $(function(e) {
                return i.appendChild(e).appendChild(S.createElement("div")),
                void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }),
            p.cssSupportsSelector = $(function() {
                return CSS.supports("selector(*)") && S.querySelectorAll(":is(:jqfake)") && !CSS.supports("selector(:is(*,:jqfake))")
            }),
            p.attributes = $(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            p.getElementsByTagName = $(function(e) {
                return e.appendChild(S.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            p.getElementsByClassName = j.test(S.getElementsByClassName),
            p.getById = $(function(e) {
                return i.appendChild(e).id = E,
                !S.getElementsByName || !S.getElementsByName(E).length
            }),
            p.getById ? (b.filter.ID = function(e) {
                var t = e.replace(I, h);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            b.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && x)
                    return (t = t.getElementById(e)) ? [t] : []
            }
            ) : (b.filter.ID = function(e) {
                var t = e.replace(I, h);
                return function(e) {
                    e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return e && e.value === t
                }
            }
            ,
            b.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && x) {
                    var i, n, o, s = t.getElementById(e);
                    if (s) {
                        if ((i = s.getAttributeNode("id")) && i.value === e)
                            return [s];
                        for (o = t.getElementsByName(e),
                        n = 0; s = o[n++]; )
                            if ((i = s.getAttributeNode("id")) && i.value === e)
                                return [s]
                    }
                    return []
                }
            }
            ),
            b.find.TAG = p.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var i, n = [], o = 0, s = t.getElementsByTagName(e);
                if ("*" !== e)
                    return s;
                for (; i = s[o++]; )
                    1 === i.nodeType && n.push(i);
                return n
            }
            ,
            b.find.CLASS = p.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && x)
                    return t.getElementsByClassName(e)
            }
            ,
            n = [],
            f = [],
            (p.qsa = j.test(S.querySelectorAll)) && ($(function(e) {
                var t;
                i.appendChild(e).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && f.push("[*^$]=" + r + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || f.push("\\[" + r + "*(?:value|" + X + ")"),
                e.querySelectorAll("[id~=" + E + "-]").length || f.push("~="),
                (t = S.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || f.push("\\[" + r + "*name" + r + "*=" + r + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || f.push(":checked"),
                e.querySelectorAll("a#" + E + "+*").length || f.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                f.push("[\\r\\n\\f]")
            }),
            $(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = S.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && f.push("name" + r + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && f.push(":enabled", ":disabled"),
                i.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && f.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                f.push(",.*:")
            })),
            (p.matchesSelector = j.test(o = i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.oMatchesSelector || i.msMatchesSelector)) && $(function(e) {
                p.disconnectedMatch = o.call(e, "*"),
                o.call(e, "[s!='']:x"),
                n.push("!=", Z)
            }),
            p.cssSupportsSelector || f.push(":has"),
            f = f.length && new RegExp(f.join("|")),
            n = n.length && new RegExp(n.join("|")),
            e = j.test(i.compareDocumentPosition),
            m = e || j.test(i.contains) ? function(e, t) {
                var i = 9 === e.nodeType && e.documentElement || e
                  , t = t && t.parentNode;
                return e === t || !(!t || 1 !== t.nodeType || !(i.contains ? i.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            Y = e ? function(e, t) {
                var i;
                return e === t ? (c = !0,
                0) : !e.compareDocumentPosition - !t.compareDocumentPosition || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === i ? e == S || e.ownerDocument == d && m(d, e) ? -1 : t == S || t.ownerDocument == d && m(d, t) ? 1 : l ? y(l, e) - y(l, t) : 0 : 4 & i ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return c = !0,
                    0;
                var i, n = 0, o = e.parentNode, s = t.parentNode, r = [e], a = [t];
                if (!o || !s)
                    return e == S ? -1 : t == S ? 1 : o ? -1 : s ? 1 : l ? y(l, e) - y(l, t) : 0;
                if (o === s)
                    return fe(e, t);
                for (i = e; i = i.parentNode; )
                    r.unshift(i);
                for (i = t; i = i.parentNode; )
                    a.unshift(i);
                for (; r[n] === a[n]; )
                    n++;
                return n ? fe(r[n], a[n]) : r[n] == d ? -1 : a[n] == d ? 1 : 0
            }
            ),
            S
        }
        ,
        M.matches = function(e, t) {
            return M(e, null, null, t)
        }
        ,
        M.matchesSelector = function(e, t) {
            if (C(e),
            p.matchesSelector && x && !g[t + " "] && (!n || !n.test(t)) && (!f || !f.test(t)))
                try {
                    var i = o.call(e, t);
                    if (i || p.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return i
                } catch (e) {
                    g(t, !0)
                }
            return 0 < M(t, S, null, [e]).length
        }
        ,
        M.contains = function(e, t) {
            return (e.ownerDocument || e) != S && C(e),
            m(e, t)
        }
        ,
        M.attr = function(e, t) {
            (e.ownerDocument || e) != S && C(e);
            var i = b.attrHandle[t.toLowerCase()]
              , i = i && U.call(b.attrHandle, t.toLowerCase()) ? i(e, t, !x) : void 0;
            return void 0 !== i ? i : p.attributes || !x ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }
        ,
        M.escape = function(e) {
            return (e + "").replace(he, N)
        }
        ,
        M.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        M.uniqueSort = function(e) {
            var t, i = [], n = 0, o = 0;
            if (c = !p.detectDuplicates,
            l = !p.sortStable && e.slice(0),
            e.sort(Y),
            c) {
                for (; t = e[o++]; )
                    t === e[o] && (n = i.push(o));
                for (; n--; )
                    e.splice(i[n], 1)
            }
            return l = null,
            e
        }
        ,
        s = M.getText = function(e) {
            var t, i = "", n = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        i += s(e)
                } else if (3 === o || 4 === o)
                    return e.nodeValue
            } else
                for (; t = e[n++]; )
                    i += s(t);
            return i
        }
        ,
        (b = M.selectors = {
            cacheLength: 50,
            createPseudo: _,
            match: w,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(I, h),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(I, h),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || M.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && M.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, i = !e[6] && e[2];
                    return w.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && oe.test(i) && (t = (t = u(i, !0)) && i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t),
                    e[2] = i.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(I, h).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + r + ")" + e + "(" + r + "|$)")) && W(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, i, n) {
                    return function(e) {
                        e = M.attr(e, t);
                        return null == e ? "!=" === i : !i || (e += "",
                        "=" === i ? e === n : "!=" === i ? e !== n : "^=" === i ? n && 0 === e.indexOf(n) : "*=" === i ? n && -1 < e.indexOf(n) : "$=" === i ? n && e.slice(-n.length) === n : "~=" === i ? -1 < (" " + e.replace(ee, " ") + " ").indexOf(n) : "|=" === i && (e === n || e.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(f, e, t, m, g) {
                    var v = "nth" !== f.slice(0, 3)
                      , y = "last" !== f.slice(-4)
                      , w = "of-type" === e;
                    return 1 === m && 0 === g ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, i) {
                        var n, o, s, r, a, l, c = v != y ? "nextSibling" : "previousSibling", d = e.parentNode, h = w && e.nodeName.toLowerCase(), p = !i && !w, u = !1;
                        if (d) {
                            if (v) {
                                for (; c; ) {
                                    for (r = e; r = r[c]; )
                                        if (w ? r.nodeName.toLowerCase() === h : 1 === r.nodeType)
                                            return !1;
                                    l = c = "only" === f && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [y ? d.firstChild : d.lastChild],
                            y && p) {
                                for (u = (a = (n = (o = (s = (r = d)[E] || (r[E] = {}))[r.uniqueID] || (s[r.uniqueID] = {}))[f] || [])[0] === k && n[1]) && n[2],
                                r = a && d.childNodes[a]; r = ++a && r && r[c] || (u = a = 0,
                                l.pop()); )
                                    if (1 === r.nodeType && ++u && r === e) {
                                        o[f] = [k, a, u];
                                        break
                                    }
                            } else if (!1 === (u = p ? a = (n = (o = (s = (r = e)[E] || (r[E] = {}))[r.uniqueID] || (s[r.uniqueID] = {}))[f] || [])[0] === k && n[1] : u))
                                for (; (r = ++a && r && r[c] || (u = a = 0,
                                l.pop())) && ((w ? r.nodeName.toLowerCase() !== h : 1 !== r.nodeType) || !++u || (p && ((o = (s = r[E] || (r[E] = {}))[r.uniqueID] || (s[r.uniqueID] = {}))[f] = [k, u]),
                                r !== e)); )
                                    ;
                            return (u -= g) === m || u % m == 0 && 0 <= u / m
                        }
                    }
                },
                PSEUDO: function(e, s) {
                    var t, r = b.pseudos[e] || b.setFilters[e.toLowerCase()] || M.error("unsupported pseudo: " + e);
                    return r[E] ? r(s) : 1 < r.length ? (t = [e, e, "", s],
                    b.setFilters.hasOwnProperty(e.toLowerCase()) ? _(function(e, t) {
                        for (var i, n = r(e, s), o = n.length; o--; )
                            e[i = y(e, n[o])] = !(t[i] = n[o])
                    }) : function(e) {
                        return r(e, 0, t)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: _(function(e) {
                    var n = []
                      , o = []
                      , a = Q(e.replace(v, "$1"));
                    return a[E] ? _(function(e, t, i, n) {
                        for (var o, s = a(e, null, n, []), r = e.length; r--; )
                            (o = s[r]) && (e[r] = !(t[r] = o))
                    }) : function(e, t, i) {
                        return n[0] = e,
                        a(n, null, i, o),
                        n[0] = null,
                        !o.pop()
                    }
                }),
                has: _(function(t) {
                    return function(e) {
                        return 0 < M(t, e).length
                    }
                }),
                contains: _(function(t) {
                    return t = t.replace(I, h),
                    function(e) {
                        return -1 < (e.textContent || s(e)).indexOf(t)
                    }
                }),
                lang: _(function(i) {
                    return se.test(i || "") || M.error("unsupported lang: " + i),
                    i = i.replace(I, h).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = x ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === i || 0 === t.indexOf(i + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = B.location && B.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === i
                },
                focus: function(e) {
                    return e === S.activeElement && (!S.hasFocus || S.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: me(!1),
                disabled: me(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                header: function(e) {
                    return le.test(e.nodeName)
                },
                input: function(e) {
                    return ae.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: L(function() {
                    return [0]
                }),
                last: L(function(e, t) {
                    return [t - 1]
                }),
                eq: L(function(e, t, i) {
                    return [i < 0 ? i + t : i]
                }),
                even: L(function(e, t) {
                    for (var i = 0; i < t; i += 2)
                        e.push(i);
                    return e
                }),
                odd: L(function(e, t) {
                    for (var i = 1; i < t; i += 2)
                        e.push(i);
                    return e
                }),
                lt: L(function(e, t, i) {
                    for (var n = i < 0 ? i + t : t < i ? t : i; 0 <= --n; )
                        e.push(n);
                    return e
                }),
                gt: L(function(e, t, i) {
                    for (var n = i < 0 ? i + t : i; ++n < t; )
                        e.push(n);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            b.pseudos[e] = function(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            b.pseudos[e] = function(i) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === i
                }
            }(e);
        function ve() {}
        function O(e) {
            for (var t = 0, i = e.length, n = ""; t < i; t++)
                n += e[t].value;
            return n
        }
        function ye(r, e, t) {
            var a = e.dir
              , l = e.next
              , c = l || a
              , d = t && "parentNode" === c
              , h = F++;
            return e.first ? function(e, t, i) {
                for (; e = e[a]; )
                    if (1 === e.nodeType || d)
                        return r(e, t, i);
                return !1
            }
            : function(e, t, i) {
                var n, o, s = [k, h];
                if (i) {
                    for (; e = e[a]; )
                        if ((1 === e.nodeType || d) && r(e, t, i))
                            return !0
                } else
                    for (; e = e[a]; )
                        if (1 === e.nodeType || d)
                            if (o = (o = e[E] || (e[E] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                            l && l === e.nodeName.toLowerCase())
                                e = e[a] || e;
                            else {
                                if ((n = o[c]) && n[0] === k && n[1] === h)
                                    return s[2] = n[2];
                                if ((o[c] = s)[2] = r(e, t, i))
                                    return !0
                            }
                return !1
            }
        }
        function we(o) {
            return 1 < o.length ? function(e, t, i) {
                for (var n = o.length; n--; )
                    if (!o[n](e, t, i))
                        return !1;
                return !0
            }
            : o[0]
        }
        function be(e, t, i, n, o) {
            for (var s, r = [], a = 0, l = e.length, c = null != t; a < l; a++)
                !(s = e[a]) || i && !i(s, n, o) || (r.push(s),
                c && t.push(a));
            return r
        }
        function Ae(e) {
            for (var n, t, i, o = e.length, s = b.relative[e[0].type], r = s || b.relative[" "], a = s ? 1 : 0, l = ye(function(e) {
                return e === n
            }, r, !0), c = ye(function(e) {
                return -1 < y(n, e)
            }, r, !0), d = [function(e, t, i) {
                e = !s && (i || t !== A) || ((n = t).nodeType ? l : c)(e, t, i);
                return n = null,
                e
            }
            ]; a < o; a++)
                if (t = b.relative[e[a].type])
                    d = [ye(we(d), t)];
                else {
                    if ((t = b.filter[e[a].type].apply(null, e[a].matches))[E]) {
                        for (i = ++a; i < o && !b.relative[e[i].type]; i++)
                            ;
                        return function e(u, f, m, g, v, t) {
                            return g && !g[E] && (g = e(g)),
                            v && !v[E] && (v = e(v, t)),
                            _(function(e, t, i, n) {
                                var o, s, r, a = [], l = [], c = t.length, d = e || function(e, t, i) {
                                    for (var n = 0, o = t.length; n < o; n++)
                                        M(e, t[n], i);
                                    return i
                                }(f || "*", i.nodeType ? [i] : i, []), h = !u || !e && f ? d : be(d, a, u, i, n), p = m ? v || (e ? u : c || g) ? [] : t : h;
                                if (m && m(h, p, i, n),
                                g)
                                    for (o = be(p, l),
                                    g(o, [], i, n),
                                    s = o.length; s--; )
                                        (r = o[s]) && (p[l[s]] = !(h[l[s]] = r));
                                if (e) {
                                    if (v || u) {
                                        if (v) {
                                            for (o = [],
                                            s = p.length; s--; )
                                                (r = p[s]) && o.push(h[s] = r);
                                            v(null, p = [], o, n)
                                        }
                                        for (s = p.length; s--; )
                                            (r = p[s]) && -1 < (o = v ? y(e, r) : a[s]) && (e[o] = !(t[o] = r))
                                    }
                                } else
                                    p = be(p === t ? p.splice(c, p.length) : p),
                                    v ? v(null, t, p, n) : T.apply(t, p)
                            })
                        }(1 < a && we(d), 1 < a && O(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(v, "$1"), t, a < i && Ae(e.slice(a, i)), i < o && Ae(e = e.slice(i)), i < o && O(e))
                    }
                    d.push(t)
                }
            return we(d)
        }
        return ve.prototype = b.filters = b.pseudos,
        b.setFilters = new ve,
        u = M.tokenize = function(e, t) {
            var i, n, o, s, r, a, l, c = z[e + " "];
            if (c)
                return t ? 0 : c.slice(0);
            for (r = e,
            a = [],
            l = b.preFilter; r; ) {
                for (s in i && !(n = te.exec(r)) || (n && (r = r.slice(n[0].length) || r),
                a.push(o = [])),
                i = !1,
                (n = ie.exec(r)) && (i = n.shift(),
                o.push({
                    value: i,
                    type: n[0].replace(v, " ")
                }),
                r = r.slice(i.length)),
                b.filter)
                    !(n = w[s].exec(r)) || l[s] && !(n = l[s](n)) || (i = n.shift(),
                    o.push({
                        value: i,
                        type: s,
                        matches: n
                    }),
                    r = r.slice(i.length));
                if (!i)
                    break
            }
            return t ? r.length : r ? M.error(e) : z(e, a).slice(0)
        }
        ,
        Q = M.compile = function(e, t) {
            var i, g, v, y, w, n, o = [], s = [], r = G[e + " "];
            if (!r) {
                for (i = (t = t || u(e)).length; i--; )
                    ((r = Ae(t[i]))[E] ? o : s).push(r);
                (r = G(e, (y = 0 < (v = o).length,
                w = 0 < (g = s).length,
                n = function(e, t, i, n, o) {
                    var s, r, a, l = 0, c = "0", d = e && [], h = [], p = A, u = e || w && b.find.TAG("*", o), f = k += null == p ? 1 : Math.random() || .1, m = u.length;
                    for (o && (A = t == S || t || o); c !== m && null != (s = u[c]); c++) {
                        if (w && s) {
                            for (r = 0,
                            t || s.ownerDocument == S || (C(s),
                            i = !x); a = g[r++]; )
                                if (a(s, t || S, i)) {
                                    n.push(s);
                                    break
                                }
                            o && (k = f)
                        }
                        y && ((s = !a && s) && l--,
                        e) && d.push(s)
                    }
                    if (l += c,
                    y && c !== l) {
                        for (r = 0; a = v[r++]; )
                            a(d, h, t, i);
                        if (e) {
                            if (0 < l)
                                for (; c--; )
                                    d[c] || h[c] || (h[c] = V.call(n));
                            h = be(h)
                        }
                        T.apply(n, h),
                        o && !e && 0 < h.length && 1 < l + v.length && M.uniqueSort(n)
                    }
                    return o && (k = f,
                    A = p),
                    d
                }
                ,
                y ? _(n) : n))).selector = e
            }
            return r
        }
        ,
        R = M.select = function(e, t, i, n) {
            var o, s, r, a, l, c = "function" == typeof e && e, d = !n && u(e = c.selector || e);
            if (i = i || [],
            1 === d.length) {
                if (2 < (s = d[0] = d[0].slice(0)).length && "ID" === (r = s[0]).type && 9 === t.nodeType && x && b.relative[s[1].type]) {
                    if (!(t = (b.find.ID(r.matches[0].replace(I, h), t) || [])[0]))
                        return i;
                    c && (t = t.parentNode),
                    e = e.slice(s.shift().value.length)
                }
                for (o = w.needsContext.test(e) ? 0 : s.length; o-- && (r = s[o],
                !b.relative[a = r.type]); )
                    if ((l = b.find[a]) && (n = l(r.matches[0].replace(I, h), de.test(s[0].type) && ge(t.parentNode) || t))) {
                        if (s.splice(o, 1),
                        e = n.length && O(s))
                            break;
                        return T.apply(i, n),
                        i
                    }
            }
            return (c || Q(e, d))(n, t, !x, i, !t || de.test(e) && ge(t.parentNode) || t),
            i
        }
        ,
        p.sortStable = E.split("").sort(Y).join("") === E,
        p.detectDuplicates = !!c,
        C(),
        p.sortDetached = $(function(e) {
            return 1 & e.compareDocumentPosition(S.createElement("fieldset"))
        }),
        $(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || ue("type|href|height|width", function(e, t, i) {
            if (!i)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        p.attributes && $(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || ue("value", function(e, t, i) {
            if (!i && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        $(function(e) {
            return null == e.getAttribute("disabled")
        }) || ue(X, function(e, t, i) {
            if (!i)
                return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }),
        M
    }(C)
      , K = (x.find = e,
    x.expr = e.selectors,
    x.expr[":"] = x.expr.pseudos,
    x.uniqueSort = x.unique = e.uniqueSort,
    x.text = e.getText,
    x.isXMLDoc = e.isXML,
    x.contains = e.contains,
    x.escapeSelector = e.escape,
    x.expr.match.needsContext);
    function l(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var X = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function J(e, i, n) {
        return y(i) ? x.grep(e, function(e, t) {
            return !!i.call(e, t, e) !== n
        }) : i.nodeType ? x.grep(e, function(e) {
            return e === i !== n
        }) : "string" != typeof i ? x.grep(e, function(e) {
            return -1 < Q.call(i, e) !== n
        }) : x.filter(i, e, n)
    }
    x.filter = function(e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"),
        1 === t.length && 1 === n.nodeType ? x.find.matchesSelector(n, e) ? [n] : [] : x.find.matches(e, x.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    x.fn.extend({
        find: function(e) {
            var t, i, n = this.length, o = this;
            if ("string" != typeof e)
                return this.pushStack(x(e).filter(function() {
                    for (t = 0; t < n; t++)
                        if (x.contains(o[t], this))
                            return !0
                }));
            for (i = this.pushStack([]),
            t = 0; t < n; t++)
                x.find(e, o[t], i);
            return 1 < n ? x.uniqueSort(i) : i
        },
        filter: function(e) {
            return this.pushStack(J(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(J(this, e || [], !0))
        },
        is: function(e) {
            return !!J(this, "string" == typeof e && K.test(e) ? x(e) : e || [], !1).length
        }
    });
    var Z, ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, te = ((x.fn.init = function(e, t, i) {
        if (e) {
            if (i = i || Z,
            "string" != typeof e)
                return e.nodeType ? (this[0] = e,
                this.length = 1,
                this) : y(e) ? void 0 !== i.ready ? i.ready(e) : e(x) : x.makeArray(e, this);
            if (!(n = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : ee.exec(e)) || !n[1] && t)
                return (!t || t.jquery ? t || i : this.constructor(t)).find(e);
            if (n[1]) {
                if (t = t instanceof x ? t[0] : t,
                x.merge(this, x.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : S, !0)),
                X.test(n[1]) && x.isPlainObject(t))
                    for (var n in t)
                        y(this[n]) ? this[n](t[n]) : this.attr(n, t[n])
            } else
                (i = S.getElementById(n[2])) && (this[0] = i,
                this.length = 1)
        }
        return this
    }
    ).prototype = x.fn,
    Z = x(S),
    /^(?:parents|prev(?:Until|All))/), ie = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function ne(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    x.fn.extend({
        has: function(e) {
            var t = x(e, this)
              , i = t.length;
            return this.filter(function() {
                for (var e = 0; e < i; e++)
                    if (x.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var i, n = 0, o = this.length, s = [], r = "string" != typeof e && x(e);
            if (!K.test(e))
                for (; n < o; n++)
                    for (i = this[n]; i && i !== t; i = i.parentNode)
                        if (i.nodeType < 11 && (r ? -1 < r.index(i) : 1 === i.nodeType && x.find.matchesSelector(i, e))) {
                            s.push(i);
                            break
                        }
            return this.pushStack(1 < s.length ? x.uniqueSort(s) : s)
        },
        index: function(e) {
            return e ? "string" == typeof e ? Q.call(x(e), this[0]) : Q.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    x.each({
        parent: function(e) {
            e = e.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(e) {
            return n(e, "parentNode")
        },
        parentsUntil: function(e, t, i) {
            return n(e, "parentNode", i)
        },
        next: function(e) {
            return ne(e, "nextSibling")
        },
        prev: function(e) {
            return ne(e, "previousSibling")
        },
        nextAll: function(e) {
            return n(e, "nextSibling")
        },
        prevAll: function(e) {
            return n(e, "previousSibling")
        },
        nextUntil: function(e, t, i) {
            return n(e, "nextSibling", i)
        },
        prevUntil: function(e, t, i) {
            return n(e, "previousSibling", i)
        },
        siblings: function(e) {
            return q((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return q(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && N(e.contentDocument) ? e.contentDocument : (l(e, "template") && (e = e.content || e),
            x.merge([], e.childNodes))
        }
    }, function(n, o) {
        x.fn[n] = function(e, t) {
            var i = x.map(this, o, e);
            return (t = "Until" !== n.slice(-5) ? e : t) && "string" == typeof t && (i = x.filter(t, i)),
            1 < this.length && (ie[n] || x.uniqueSort(i),
            te.test(n)) && i.reverse(),
            this.pushStack(i)
        }
    });
    var E = /[^\x20\t\r\n\f]+/g;
    function d(e) {
        return e
    }
    function oe(e) {
        throw e
    }
    function se(e, t, i, n) {
        var o;
        try {
            e && y(o = e.promise) ? o.call(e).done(t).fail(i) : e && y(o = e.then) ? o.call(e, t, i) : t.apply(void 0, [e].slice(n))
        } catch (e) {
            i.apply(void 0, [e])
        }
    }
    x.Callbacks = function(n) {
        var e, i;
        n = "string" == typeof n ? (e = n,
        i = {},
        x.each(e.match(E) || [], function(e, t) {
            i[t] = !0
        }),
        i) : x.extend({}, n);
        function o() {
            for (a = a || n.once,
            r = s = !0; c.length; d = -1)
                for (t = c.shift(); ++d < l.length; )
                    !1 === l[d].apply(t[0], t[1]) && n.stopOnFalse && (d = l.length,
                    t = !1);
            n.memory || (t = !1),
            s = !1,
            a && (l = t ? [] : "")
        }
        var s, t, r, a, l = [], c = [], d = -1, h = {
            add: function() {
                return l && (t && !s && (d = l.length - 1,
                c.push(t)),
                function i(e) {
                    x.each(e, function(e, t) {
                        y(t) ? n.unique && h.has(t) || l.push(t) : t && t.length && "string" !== f(t) && i(t)
                    })
                }(arguments),
                t) && !s && o(),
                this
            },
            remove: function() {
                return x.each(arguments, function(e, t) {
                    for (var i; -1 < (i = x.inArray(t, l, i)); )
                        l.splice(i, 1),
                        i <= d && d--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < x.inArray(e, l) : 0 < l.length
            },
            empty: function() {
                return l = l && [],
                this
            },
            disable: function() {
                return a = c = [],
                l = t = "",
                this
            },
            disabled: function() {
                return !l
            },
            lock: function() {
                return a = c = [],
                t || s || (l = t = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                c.push(t),
                s) || o(),
                this
            },
            fire: function() {
                return h.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!r
            }
        };
        return h
    }
    ,
    x.extend({
        Deferred: function(e) {
            var s = [["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2], ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]]
              , o = "pending"
              , r = {
                state: function() {
                    return o
                },
                always: function() {
                    return a.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return r.then(null, e)
                },
                pipe: function() {
                    var o = arguments;
                    return x.Deferred(function(n) {
                        x.each(s, function(e, t) {
                            var i = y(o[t[4]]) && o[t[4]];
                            a[t[1]](function() {
                                var e = i && i.apply(this, arguments);
                                e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[t[0] + "With"](this, i ? [e] : arguments)
                            })
                        }),
                        o = null
                    }).promise()
                },
                then: function(t, i, n) {
                    var l = 0;
                    function c(o, s, r, a) {
                        return function() {
                            function e() {
                                var e, t;
                                if (!(o < l)) {
                                    if ((e = r.apply(i, n)) === s.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    y(t) ? a ? t.call(e, c(l, s, d, a), c(l, s, oe, a)) : (l++,
                                    t.call(e, c(l, s, d, a), c(l, s, oe, a), c(l, s, d, s.notifyWith))) : (r !== d && (i = void 0,
                                    n = [e]),
                                    (a || s.resolveWith)(i, n))
                                }
                            }
                            var i = this
                              , n = arguments
                              , t = a ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    x.Deferred.exceptionHook && x.Deferred.exceptionHook(e, t.stackTrace),
                                    l <= o + 1 && (r !== oe && (i = void 0,
                                    n = [e]),
                                    s.rejectWith(i, n))
                                }
                            }
                            ;
                            o ? t() : (x.Deferred.getStackHook && (t.stackTrace = x.Deferred.getStackHook()),
                            C.setTimeout(t))
                        }
                    }
                    return x.Deferred(function(e) {
                        s[0][3].add(c(0, e, y(n) ? n : d, e.notifyWith)),
                        s[1][3].add(c(0, e, y(t) ? t : d)),
                        s[2][3].add(c(0, e, y(i) ? i : oe))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? x.extend(e, r) : r
                }
            }
              , a = {};
            return x.each(s, function(e, t) {
                var i = t[2]
                  , n = t[5];
                r[t[1]] = i.add,
                n && i.add(function() {
                    o = n
                }, s[3 - e][2].disable, s[3 - e][3].disable, s[0][2].lock, s[0][3].lock),
                i.add(t[3].fire),
                a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments),
                    this
                }
                ,
                a[t[0] + "With"] = i.fireWith
            }),
            r.promise(a),
            e && e.call(a, a),
            a
        },
        when: function(e) {
            function t(t) {
                return function(e) {
                    o[t] = this,
                    s[t] = 1 < arguments.length ? a.call(arguments) : e,
                    --i || r.resolveWith(o, s)
                }
            }
            var i = arguments.length
              , n = i
              , o = Array(n)
              , s = a.call(arguments)
              , r = x.Deferred();
            if (i <= 1 && (se(e, r.done(t(n)).resolve, r.reject, !i),
            "pending" === r.state() || y(s[n] && s[n].then)))
                return r.then();
            for (; n--; )
                se(s[n], t(n), r.reject);
            return r.promise()
        }
    });
    var re = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
      , ae = (x.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && re.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    x.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    }
    ,
    x.Deferred());
    function le() {
        S.removeEventListener("DOMContentLoaded", le),
        C.removeEventListener("load", le),
        x.ready()
    }
    x.fn.ready = function(e) {
        return ae.then(e).catch(function(e) {
            x.readyException(e)
        }),
        this
    }
    ,
    x.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --x.readyWait : x.isReady) || (x.isReady = !0) !== e && 0 < --x.readyWait || ae.resolveWith(S, [x])
        }
    }),
    x.ready.then = ae.then,
    "complete" === S.readyState || "loading" !== S.readyState && !S.documentElement.doScroll ? C.setTimeout(x.ready) : (S.addEventListener("DOMContentLoaded", le),
    C.addEventListener("load", le));
    function h(e, t, i, n, o, s, r) {
        var a = 0
          , l = e.length
          , c = null == i;
        if ("object" === f(i))
            for (a in o = !0,
            i)
                h(e, t, a, i[a], !0, s, r);
        else if (void 0 !== n && (o = !0,
        y(n) || (r = !0),
        t = c ? r ? (t.call(e, n),
        null) : (c = t,
        function(e, t, i) {
            return c.call(x(e), i)
        }
        ) : t))
            for (; a < l; a++)
                t(e[a], i, r ? n : n.call(e[a], a, t(e[a], i)));
        return o ? e : c ? t.call(e) : l ? t(e[0], i) : s
    }
    var ce = /^-ms-/
      , de = /-([a-z])/g;
    function he(e, t) {
        return t.toUpperCase()
    }
    function w(e) {
        return e.replace(ce, "ms-").replace(de, he)
    }
    function v(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }
    function pe() {
        this.expando = x.expando + pe.uid++
    }
    pe.uid = 1,
    pe.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            v(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, i) {
            var n, o = this.cache(e);
            if ("string" == typeof t)
                o[w(t)] = i;
            else
                for (n in t)
                    o[w(n)] = t[n];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][w(t)]
        },
        access: function(e, t, i) {
            return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i),
            void 0 !== i ? i : t)
        },
        remove: function(e, t) {
            var i, n = e[this.expando];
            if (void 0 !== n) {
                if (void 0 !== t) {
                    i = (t = Array.isArray(t) ? t.map(w) : (t = w(t))in n ? [t] : t.match(E) || []).length;
                    for (; i--; )
                        delete n[t[i]]
                }
                void 0 !== t && !x.isEmptyObject(n) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            e = e[this.expando];
            return void 0 !== e && !x.isEmptyObject(e)
        }
    };
    var b = new pe
      , c = new pe
      , ue = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , fe = /[A-Z]/g;
    function me(e, t, i) {
        var n, o;
        if (void 0 === i && 1 === e.nodeType)
            if (n = "data-" + t.replace(fe, "-$&").toLowerCase(),
            "string" == typeof (i = e.getAttribute(n))) {
                try {
                    i = "true" === (o = i) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : ue.test(o) ? JSON.parse(o) : o)
                } catch (e) {}
                c.set(e, t, i)
            } else
                i = void 0;
        return i
    }
    x.extend({
        hasData: function(e) {
            return c.hasData(e) || b.hasData(e)
        },
        data: function(e, t, i) {
            return c.access(e, t, i)
        },
        removeData: function(e, t) {
            c.remove(e, t)
        },
        _data: function(e, t, i) {
            return b.access(e, t, i)
        },
        _removeData: function(e, t) {
            b.remove(e, t)
        }
    }),
    x.fn.extend({
        data: function(i, e) {
            var t, n, o, s = this[0], r = s && s.attributes;
            if (void 0 !== i)
                return "object" == typeof i ? this.each(function() {
                    c.set(this, i)
                }) : h(this, function(e) {
                    var t;
                    if (s && void 0 === e)
                        return void 0 !== (t = c.get(s, i)) || void 0 !== (t = me(s, i)) ? t : void 0;
                    this.each(function() {
                        c.set(this, i, e)
                    })
                }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (o = c.get(s),
            1 === s.nodeType) && !b.get(s, "hasDataAttrs")) {
                for (t = r.length; t--; )
                    r[t] && 0 === (n = r[t].name).indexOf("data-") && (n = w(n.slice(5)),
                    me(s, n, o[n]));
                b.set(s, "hasDataAttrs", !0)
            }
            return o
        },
        removeData: function(e) {
            return this.each(function() {
                c.remove(this, e)
            })
        }
    }),
    x.extend({
        queue: function(e, t, i) {
            var n;
            if (e)
                return n = b.get(e, t = (t || "fx") + "queue"),
                i && (!n || Array.isArray(i) ? n = b.access(e, t, x.makeArray(i)) : n.push(i)),
                n || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var i = x.queue(e, t)
              , n = i.length
              , o = i.shift()
              , s = x._queueHooks(e, t);
            "inprogress" === o && (o = i.shift(),
            n--),
            o && ("fx" === t && i.unshift("inprogress"),
            delete s.stop,
            o.call(e, function() {
                x.dequeue(e, t)
            }, s)),
            !n && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var i = t + "queueHooks";
            return b.get(e, i) || b.access(e, i, {
                empty: x.Callbacks("once memory").add(function() {
                    b.remove(e, [t + "queue", i])
                })
            })
        }
    }),
    x.fn.extend({
        queue: function(t, i) {
            var e = 2;
            return "string" != typeof t && (i = t,
            t = "fx",
            e--),
            arguments.length < e ? x.queue(this[0], t) : void 0 === i ? this : this.each(function() {
                var e = x.queue(this, t, i);
                x._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && x.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                x.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function i() {
                --o || s.resolveWith(r, [r])
            }
            var n, o = 1, s = x.Deferred(), r = this, a = this.length;
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                (n = b.get(r[a], e + "queueHooks")) && n.empty && (o++,
                n.empty.add(i));
            return i(),
            s.promise(t)
        }
    });
    function ge(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && k(e) && "none" === x.css(e, "display")
    }
    var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , ve = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$","i")
      , p = ["Top", "Right", "Bottom", "Left"]
      , A = S.documentElement
      , k = function(e) {
        return x.contains(e.ownerDocument, e)
    }
      , ye = {
        composed: !0
    };
    A.getRootNode && (k = function(e) {
        return x.contains(e.ownerDocument, e) || e.getRootNode(ye) === e.ownerDocument
    }
    );
    function we(e, t, i, n) {
        var o, s, r = 20, a = n ? function() {
            return n.cur()
        }
        : function() {
            return x.css(e, t, "")
        }
        , l = a(), c = i && i[3] || (x.cssNumber[t] ? "" : "px"), d = e.nodeType && (x.cssNumber[t] || "px" !== c && +l) && ve.exec(x.css(e, t));
        if (d && d[3] !== c) {
            for (c = c || d[3],
            d = +(l /= 2) || 1; r--; )
                x.style(e, t, d + c),
                (1 - s) * (1 - (s = a() / l || .5)) <= 0 && (r = 0),
                d /= s;
            x.style(e, t, (d *= 2) + c),
            i = i || []
        }
        return i && (d = +d || +l || 0,
        o = i[1] ? d + (i[1] + 1) * i[2] : +i[2],
        n) && (n.unit = c,
        n.start = d,
        n.end = o),
        o
    }
    var be = {};
    function T(e, t) {
        for (var i, n, o, s, r, a, l = [], c = 0, d = e.length; c < d; c++)
            (n = e[c]).style && (i = n.style.display,
            t ? ("none" === i && (l[c] = b.get(n, "display") || null,
            l[c] || (n.style.display = "")),
            "" === n.style.display && ge(n) && (l[c] = (a = s = o = void 0,
            s = n.ownerDocument,
            r = n.nodeName,
            (a = be[r]) || (o = s.body.appendChild(s.createElement(r)),
            a = x.css(o, "display"),
            o.parentNode.removeChild(o),
            be[r] = a = "none" === a ? "block" : a)))) : "none" !== i && (l[c] = "none",
            b.set(n, "display", i)));
        for (c = 0; c < d; c++)
            null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    x.fn.extend({
        show: function() {
            return T(this, !0)
        },
        hide: function() {
            return T(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ge(this) ? x(this).show() : x(this).hide()
            })
        }
    });
    var Ae = /^(?:checkbox|radio)$/i
      , Ce = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
      , Se = /^$|^module$|\/(?:java|ecma)script/i
      , i = S.createDocumentFragment().appendChild(S.createElement("div"))
      , j = ((s = S.createElement("input")).setAttribute("type", "radio"),
    s.setAttribute("checked", "checked"),
    s.setAttribute("name", "t"),
    i.appendChild(s),
    g.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked,
    i.innerHTML = "<textarea>x</textarea>",
    g.noCloneChecked = !!i.cloneNode(!0).lastChild.defaultValue,
    i.innerHTML = "<option></option>",
    g.option = !!i.lastChild,
    {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    });
    function I(e, t) {
        var i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && l(e, t) ? x.merge([e], i) : i
    }
    function xe(e, t) {
        for (var i = 0, n = e.length; i < n; i++)
            b.set(e[i], "globalEval", !t || b.get(t[i], "globalEval"))
    }
    j.tbody = j.tfoot = j.colgroup = j.caption = j.thead,
    j.th = j.td,
    g.option || (j.optgroup = j.option = [1, "<select multiple='multiple'>", "</select>"]);
    var Ee = /<|&#?\w+;/;
    function ke(e, t, i, n, o) {
        for (var s, r, a, l, c, d = t.createDocumentFragment(), h = [], p = 0, u = e.length; p < u; p++)
            if ((s = e[p]) || 0 === s)
                if ("object" === f(s))
                    x.merge(h, s.nodeType ? [s] : s);
                else if (Ee.test(s)) {
                    for (r = r || d.appendChild(t.createElement("div")),
                    a = (Ce.exec(s) || ["", ""])[1].toLowerCase(),
                    a = j[a] || j._default,
                    r.innerHTML = a[1] + x.htmlPrefilter(s) + a[2],
                    c = a[0]; c--; )
                        r = r.lastChild;
                    x.merge(h, r.childNodes),
                    (r = d.firstChild).textContent = ""
                } else
                    h.push(t.createTextNode(s));
        for (d.textContent = "",
        p = 0; s = h[p++]; )
            if (n && -1 < x.inArray(s, n))
                o && o.push(s);
            else if (l = k(s),
            r = I(d.appendChild(s), "script"),
            l && xe(r),
            i)
                for (c = 0; s = r[c++]; )
                    Se.test(s.type || "") && i.push(s);
        return d
    }
    var Te = /^([^.]*)(?:\.(.+)|)/;
    function r() {
        return !0
    }
    function u() {
        return !1
    }
    function je(e, t) {
        return e === function() {
            try {
                return S.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function Ie(e, t, i, n, o, s) {
        var r, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof i && (n = n || i,
            i = void 0),
            t)
                Ie(e, a, i, n, t[a], s);
            return e
        }
        if (null == n && null == o ? (o = i,
        n = i = void 0) : null == o && ("string" == typeof i ? (o = n,
        n = void 0) : (o = n,
        n = i,
        i = void 0)),
        !1 === o)
            o = u;
        else if (!o)
            return e;
        return 1 === s && (r = o,
        (o = function(e) {
            return x().off(e),
            r.apply(this, arguments)
        }
        ).guid = r.guid || (r.guid = x.guid++)),
        e.each(function() {
            x.event.add(this, t, o, n, i)
        })
    }
    function Me(e, o, s) {
        s ? (b.set(e, o, !1),
        x.event.add(e, o, {
            namespace: !1,
            handler: function(e) {
                var t, i, n = b.get(this, o);
                if (1 & e.isTrigger && this[o]) {
                    if (n.length)
                        (x.event.special[o] || {}).delegateType && e.stopPropagation();
                    else if (n = a.call(arguments),
                    b.set(this, o, n),
                    t = s(this, o),
                    this[o](),
                    n !== (i = b.get(this, o)) || t ? b.set(this, o, !1) : i = {},
                    n !== i)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        i && i.value
                } else
                    n.length && (b.set(this, o, {
                        value: x.event.trigger(x.extend(n[0], x.Event.prototype), n.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === b.get(e, o) && x.event.add(e, o, r)
    }
    x.event = {
        global: {},
        add: function(t, e, i, n, o) {
            var s, r, a, l, c, d, h, p, u, f = b.get(t);
            if (v(t))
                for (i.handler && (i = (s = i).handler,
                o = s.selector),
                o && x.find.matchesSelector(A, o),
                i.guid || (i.guid = x.guid++),
                a = (a = f.events) || (f.events = Object.create(null)),
                r = (r = f.handle) || (f.handle = function(e) {
                    return void 0 !== x && x.event.triggered !== e.type ? x.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                l = (e = (e || "").match(E) || [""]).length; l--; )
                    h = u = (p = Te.exec(e[l]) || [])[1],
                    p = (p[2] || "").split(".").sort(),
                    h && (c = x.event.special[h] || {},
                    h = (o ? c.delegateType : c.bindType) || h,
                    c = x.event.special[h] || {},
                    u = x.extend({
                        type: h,
                        origType: u,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: o,
                        needsContext: o && x.expr.match.needsContext.test(o),
                        namespace: p.join(".")
                    }, s),
                    (d = a[h]) || ((d = a[h] = []).delegateCount = 0,
                    c.setup && !1 !== c.setup.call(t, n, p, r)) || t.addEventListener && t.addEventListener(h, r),
                    c.add && (c.add.call(t, u),
                    u.handler.guid || (u.handler.guid = i.guid)),
                    o ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                    x.event.global[h] = !0)
        },
        remove: function(e, t, i, n, o) {
            var s, r, a, l, c, d, h, p, u, f, m, g = b.hasData(e) && b.get(e);
            if (g && (l = g.events)) {
                for (c = (t = (t || "").match(E) || [""]).length; c--; )
                    if (u = m = (a = Te.exec(t[c]) || [])[1],
                    f = (a[2] || "").split(".").sort(),
                    u) {
                        for (h = x.event.special[u] || {},
                        p = l[u = (n ? h.delegateType : h.bindType) || u] || [],
                        a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        r = s = p.length; s--; )
                            d = p[s],
                            !o && m !== d.origType || i && i.guid !== d.guid || a && !a.test(d.namespace) || n && n !== d.selector && ("**" !== n || !d.selector) || (p.splice(s, 1),
                            d.selector && p.delegateCount--,
                            h.remove && h.remove.call(e, d));
                        r && !p.length && (h.teardown && !1 !== h.teardown.call(e, f, g.handle) || x.removeEvent(e, u, g.handle),
                        delete l[u])
                    } else
                        for (u in l)
                            x.event.remove(e, u + t[c], i, n, !0);
                x.isEmptyObject(l) && b.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, i, n, o, s, r = new Array(arguments.length), a = x.event.fix(e), e = (b.get(this, "events") || Object.create(null))[a.type] || [], l = x.event.special[a.type] || {};
            for (r[0] = a,
            t = 1; t < arguments.length; t++)
                r[t] = arguments[t];
            if (a.delegateTarget = this,
            !l.preDispatch || !1 !== l.preDispatch.call(this, a)) {
                for (s = x.event.handlers.call(this, a, e),
                t = 0; (n = s[t++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = n.elem,
                    i = 0; (o = n.handlers[i++]) && !a.isImmediatePropagationStopped(); )
                        a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o,
                        a.data = o.data,
                        void 0 !== (o = ((x.event.special[o.origType] || {}).handle || o.handler).apply(n.elem, r)) && !1 === (a.result = o) && (a.preventDefault(),
                        a.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(e, t) {
            var i, n, o, s, r, a = [], l = t.delegateCount, c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (s = [],
                        r = {},
                        i = 0; i < l; i++)
                            void 0 === r[o = (n = t[i]).selector + " "] && (r[o] = n.needsContext ? -1 < x(o, this).index(c) : x.find(o, this, null, [c]).length),
                            r[o] && s.push(n);
                        s.length && a.push({
                            elem: c,
                            handlers: s
                        })
                    }
            return c = this,
            l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }),
            a
        },
        addProp: function(t, e) {
            Object.defineProperty(x.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: y(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[x.expando] ? e : new x.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    e = this || e;
                    return Ae.test(e.type) && e.click && l(e, "input") && Me(e, "click", r),
                    !1
                },
                trigger: function(e) {
                    e = this || e;
                    return Ae.test(e.type) && e.click && l(e, "input") && Me(e, "click"),
                    !0
                },
                _default: function(e) {
                    e = e.target;
                    return Ae.test(e.type) && e.click && l(e, "input") && b.get(e, "click") || l(e, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    x.removeEvent = function(e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i)
    }
    ,
    x.Event = function(e, t) {
        if (!(this instanceof x.Event))
            return new x.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? r : u,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && x.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[x.expando] = !0
    }
    ,
    x.Event.prototype = {
        constructor: x.Event,
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = r,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = r,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = r,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    x.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, x.event.addProp),
    x.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        x.event.special[t] = {
            setup: function() {
                return Me(this, t, je),
                !1
            },
            trigger: function() {
                return Me(this, t),
                !0
            },
            _default: function(e) {
                return b.get(e.target, t)
            },
            delegateType: e
        }
    }),
    x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, o) {
        x.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function(e) {
                var t, i = e.relatedTarget, n = e.handleObj;
                return i && (i === this || x.contains(this, i)) || (e.type = n.origType,
                t = n.handler.apply(this, arguments),
                e.type = o),
                t
            }
        }
    }),
    x.fn.extend({
        on: function(e, t, i, n) {
            return Ie(this, e, t, i, n)
        },
        one: function(e, t, i, n) {
            return Ie(this, e, t, i, n, 1)
        },
        off: function(e, t, i) {
            var n, o;
            if (e && e.preventDefault && e.handleObj)
                n = e.handleObj,
                x(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler);
            else {
                if ("object" != typeof e)
                    return !1 !== t && "function" != typeof t || (i = t,
                    t = void 0),
                    !1 === i && (i = u),
                    this.each(function() {
                        x.event.remove(this, e, i, t)
                    });
                for (o in e)
                    this.off(o, t, e[o])
            }
            return this
        }
    });
    var De = /<script|<style|<link/i
      , _e = /checked\s*(?:[^=]|=\s*.checked.)/i
      , $e = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function Le(e, t) {
        return l(e, "table") && l(11 !== t.nodeType ? t : t.firstChild, "tr") && x(e).children("tbody")[0] || e
    }
    function Oe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function Be(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Ne(e, t) {
        var i, n, o, s;
        if (1 === t.nodeType) {
            if (b.hasData(e) && (s = b.get(e).events))
                for (o in b.remove(t, "handle events"),
                s)
                    for (i = 0,
                    n = s[o].length; i < n; i++)
                        x.event.add(t, o, s[o][i]);
            c.hasData(e) && (e = c.access(e),
            e = x.extend({}, e),
            c.set(t, e))
        }
    }
    function M(i, n, o, s) {
        n = H(n);
        var e, t, r, a, l, c, d = 0, h = i.length, p = h - 1, u = n[0], f = y(u);
        if (f || 1 < h && "string" == typeof u && !g.checkClone && _e.test(u))
            return i.each(function(e) {
                var t = i.eq(e);
                f && (n[0] = u.call(this, e, t.html())),
                M(t, n, o, s)
            });
        if (h && (t = (e = ke(n, i[0].ownerDocument, !1, i, s)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || s)) {
            for (a = (r = x.map(I(e, "script"), Oe)).length; d < h; d++)
                l = e,
                d !== p && (l = x.clone(l, !0, !0),
                a) && x.merge(r, I(l, "script")),
                o.call(i[d], l, d);
            if (a)
                for (c = r[r.length - 1].ownerDocument,
                x.map(r, Be),
                d = 0; d < a; d++)
                    l = r[d],
                    Se.test(l.type || "") && !b.access(l, "globalEval") && x.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? x._evalUrl && !l.noModule && x._evalUrl(l.src, {
                        nonce: l.nonce || l.getAttribute("nonce")
                    }, c) : U(l.textContent.replace($e, ""), l, c))
        }
        return i
    }
    function He(e, t, i) {
        for (var n, o = t ? x.filter(t, e) : e, s = 0; null != (n = o[s]); s++)
            i || 1 !== n.nodeType || x.cleanData(I(n)),
            n.parentNode && (i && k(n) && xe(I(n, "script")),
            n.parentNode.removeChild(n));
        return e
    }
    x.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, i) {
            var n, o, s, r, a, l, c, d = e.cloneNode(!0), h = k(e);
            if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                for (r = I(d),
                n = 0,
                o = (s = I(e)).length; n < o; n++)
                    a = s[n],
                    "input" === (c = (l = r[n]).nodeName.toLowerCase()) && Ae.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (t)
                if (i)
                    for (s = s || I(e),
                    r = r || I(d),
                    n = 0,
                    o = s.length; n < o; n++)
                        Ne(s[n], r[n]);
                else
                    Ne(e, d);
            return 0 < (r = I(d, "script")).length && xe(r, !h && I(e, "script")),
            d
        },
        cleanData: function(e) {
            for (var t, i, n, o = x.event.special, s = 0; void 0 !== (i = e[s]); s++)
                if (v(i)) {
                    if (t = i[b.expando]) {
                        if (t.events)
                            for (n in t.events)
                                o[n] ? x.event.remove(i, n) : x.removeEvent(i, n, t.handle);
                        i[b.expando] = void 0
                    }
                    i[c.expando] && (i[c.expando] = void 0)
                }
        }
    }),
    x.fn.extend({
        detach: function(e) {
            return He(this, e, !0)
        },
        remove: function(e) {
            return He(this, e)
        },
        text: function(e) {
            return h(this, function(e) {
                return void 0 === e ? x.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return M(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return M(this, arguments, function(e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = Le(this, e)).insertBefore(e, t.firstChild)
            })
        },
        before: function() {
            return M(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return M(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (x.cleanData(I(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return x.clone(this, e, t)
            })
        },
        html: function(e) {
            return h(this, function(e) {
                var t = this[0] || {}
                  , i = 0
                  , n = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !De.test(e) && !j[(Ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = x.htmlPrefilter(e);
                    try {
                        for (; i < n; i++)
                            1 === (t = this[i] || {}).nodeType && (x.cleanData(I(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var i = [];
            return M(this, arguments, function(e) {
                var t = this.parentNode;
                x.inArray(this, i) < 0 && (x.cleanData(I(this)),
                t) && t.replaceChild(e, this)
            }, i)
        }
    }),
    x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, r) {
        x.fn[e] = function(e) {
            for (var t, i = [], n = x(e), o = n.length - 1, s = 0; s <= o; s++)
                t = s === o ? this : this.clone(!0),
                x(n[s])[r](t),
                P.apply(i, t.get());
            return this.pushStack(i)
        }
    });
    function Pe(e) {
        var t = e.ownerDocument.defaultView;
        return (t = t && t.opener ? t : C).getComputedStyle(e)
    }
    function Qe(e, t, i) {
        var n, o = {};
        for (n in t)
            o[n] = e.style[n],
            e.style[n] = t[n];
        for (n in i = i.call(e),
        t)
            e.style[n] = o[n];
        return i
    }
    var Re, Fe, We, ze, Ge, Ye, Ue, o, Ve = new RegExp("^(" + e + ")(?!px)[a-z%]+$","i"), qe = /^--/, Ke = new RegExp(p.join("|"),"i"), s = "[\\x20\\t\\r\\n\\f]", Xe = new RegExp("^" + s + "+|((?:^|[^\\\\])(?:\\\\.)*)" + s + "+$","g");
    function Je(e, t, i) {
        var n, o = qe.test(t), s = e.style;
        return (i = i || Pe(e)) && (n = i.getPropertyValue(t) || i[t],
        "" !== (n = o ? n && (n.replace(Xe, "$1") || void 0) : n) || k(e) || (n = x.style(e, t)),
        !g.pixelBoxStyles()) && Ve.test(n) && Ke.test(t) && (o = s.width,
        e = s.minWidth,
        t = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = n,
        n = i.width,
        s.width = o,
        s.minWidth = e,
        s.maxWidth = t),
        void 0 !== n ? n + "" : n
    }
    function Ze(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    function et() {
        var e;
        o && (Ue.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
        o.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
        A.appendChild(Ue).appendChild(o),
        e = C.getComputedStyle(o),
        Re = "1%" !== e.top,
        Ye = 12 === tt(e.marginLeft),
        o.style.right = "60%",
        ze = 36 === tt(e.right),
        Fe = 36 === tt(e.width),
        o.style.position = "absolute",
        We = 12 === tt(o.offsetWidth / 3),
        A.removeChild(Ue),
        o = null)
    }
    function tt(e) {
        return Math.round(parseFloat(e))
    }
    Ue = S.createElement("div"),
    (o = S.createElement("div")).style && (o.style.backgroundClip = "content-box",
    o.cloneNode(!0).style.backgroundClip = "",
    g.clearCloneStyle = "content-box" === o.style.backgroundClip,
    x.extend(g, {
        boxSizingReliable: function() {
            return et(),
            Fe
        },
        pixelBoxStyles: function() {
            return et(),
            ze
        },
        pixelPosition: function() {
            return et(),
            Re
        },
        reliableMarginLeft: function() {
            return et(),
            Ye
        },
        scrollboxSize: function() {
            return et(),
            We
        },
        reliableTrDimensions: function() {
            var e, t, i;
            return null == Ge && (e = S.createElement("table"),
            t = S.createElement("tr"),
            i = S.createElement("div"),
            e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
            t.style.cssText = "border:1px solid",
            t.style.height = "1px",
            i.style.height = "9px",
            i.style.display = "block",
            A.appendChild(e).appendChild(t).appendChild(i),
            i = C.getComputedStyle(t),
            Ge = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === t.offsetHeight,
            A.removeChild(e)),
            Ge
        }
    }));
    var it = ["Webkit", "Moz", "ms"]
      , nt = S.createElement("div").style
      , ot = {};
    function st(e) {
        return x.cssProps[e] || ot[e] || (e in nt ? e : ot[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), i = it.length; i--; )
                if ((e = it[i] + t)in nt)
                    return e
        }(e) || e)
    }
    var rt = /^(none|table(?!-c[ea]).+)/
      , at = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , lt = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function ct(e, t, i) {
        var n = ve.exec(t);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
    }
    function dt(e, t, i, n, o, s) {
        var r = "width" === t ? 1 : 0
          , a = 0
          , l = 0;
        if (i === (n ? "border" : "content"))
            return 0;
        for (; r < 4; r += 2)
            "margin" === i && (l += x.css(e, i + p[r], !0, o)),
            n ? ("content" === i && (l -= x.css(e, "padding" + p[r], !0, o)),
            "margin" !== i && (l -= x.css(e, "border" + p[r] + "Width", !0, o))) : (l += x.css(e, "padding" + p[r], !0, o),
            "padding" !== i ? l += x.css(e, "border" + p[r] + "Width", !0, o) : a += x.css(e, "border" + p[r] + "Width", !0, o));
        return !n && 0 <= s && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - s - l - a - .5)) || 0),
        l
    }
    function ht(e, t, i) {
        var n = Pe(e)
          , o = (!g.boxSizingReliable() || i) && "border-box" === x.css(e, "boxSizing", !1, n)
          , s = o
          , r = Je(e, t, n)
          , a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Ve.test(r)) {
            if (!i)
                return r;
            r = "auto"
        }
        return (!g.boxSizingReliable() && o || !g.reliableTrDimensions() && l(e, "tr") || "auto" === r || !parseFloat(r) && "inline" === x.css(e, "display", !1, n)) && e.getClientRects().length && (o = "border-box" === x.css(e, "boxSizing", !1, n),
        s = a in e) && (r = e[a]),
        (r = parseFloat(r) || 0) + dt(e, t, i || (o ? "border" : "content"), s, n, r) + "px"
    }
    function D(e, t, i, n, o) {
        return new D.prototype.init(e,t,i,n,o)
    }
    x.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t)
                        return "" === (t = Je(e, "opacity")) ? "1" : t
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, s, r, a = w(t), l = qe.test(t), c = e.style;
                if (l || (t = st(a)),
                r = x.cssHooks[t] || x.cssHooks[a],
                void 0 === i)
                    return r && "get"in r && void 0 !== (o = r.get(e, !1, n)) ? o : c[t];
                "string" == (s = typeof i) && (o = ve.exec(i)) && o[1] && (i = we(e, t, o),
                s = "number"),
                null != i && i == i && ("number" !== s || l || (i += o && o[3] || (x.cssNumber[a] ? "" : "px")),
                g.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                r && "set"in r && void 0 === (i = r.set(e, i, n)) || (l ? c.setProperty(t, i) : c[t] = i))
            }
        },
        css: function(e, t, i, n) {
            var o, s = w(t);
            return qe.test(t) || (t = st(s)),
            "normal" === (o = void 0 === (o = (s = x.cssHooks[t] || x.cssHooks[s]) && "get"in s ? s.get(e, !0, i) : o) ? Je(e, t, n) : o) && t in lt && (o = lt[t]),
            ("" === i || i) && (s = parseFloat(o),
            !0 === i || isFinite(s)) ? s || 0 : o
        }
    }),
    x.each(["height", "width"], function(e, r) {
        x.cssHooks[r] = {
            get: function(e, t, i) {
                if (t)
                    return !rt.test(x.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ht(e, r, i) : Qe(e, at, function() {
                        return ht(e, r, i)
                    })
            },
            set: function(e, t, i) {
                var n = Pe(e)
                  , o = !g.scrollboxSize() && "absolute" === n.position
                  , s = (o || i) && "border-box" === x.css(e, "boxSizing", !1, n)
                  , i = i ? dt(e, r, i, s, n) : 0;
                return s && o && (i -= Math.ceil(e["offset" + r[0].toUpperCase() + r.slice(1)] - parseFloat(n[r]) - dt(e, r, "border", !1, n) - .5)),
                i && (s = ve.exec(t)) && "px" !== (s[3] || "px") && (e.style[r] = t,
                t = x.css(e, r)),
                ct(0, t, i)
            }
        }
    }),
    x.cssHooks.marginLeft = Ze(g.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Je(e, "marginLeft")) || e.getBoundingClientRect().left - Qe(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    x.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(o, s) {
        x.cssHooks[o + s] = {
            expand: function(e) {
                for (var t = 0, i = {}, n = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    i[o + p[t] + s] = n[t] || n[t - 2] || n[0];
                return i
            }
        },
        "margin" !== o && (x.cssHooks[o + s].set = ct)
    }),
    x.fn.extend({
        css: function(e, t) {
            return h(this, function(e, t, i) {
                var n, o, s = {}, r = 0;
                if (Array.isArray(t)) {
                    for (n = Pe(e),
                    o = t.length; r < o; r++)
                        s[t[r]] = x.css(e, t[r], !1, n);
                    return s
                }
                return void 0 !== i ? x.style(e, t, i) : x.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((x.Tween = D).prototype = {
        constructor: D,
        init: function(e, t, i, n, o, s) {
            this.elem = e,
            this.prop = i,
            this.easing = o || x.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = n,
            this.unit = s || (x.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var e = D.propHooks[this.prop];
            return (e && e.get ? e : D.propHooks._default).get(this)
        },
        run: function(e) {
            var t, i = D.propHooks[this.prop];
            return this.options.duration ? this.pos = t = x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            (i && i.set ? i : D.propHooks._default).set(this),
            this
        }
    }).init.prototype = D.prototype,
    (D.propHooks = {
        _default: {
            get: function(e) {
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = x.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !x.cssHooks[e.prop] && null == e.elem.style[st(e.prop)] ? e.elem[e.prop] = e.now : x.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = D.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    x.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    x.fx = D.prototype.init,
    x.fx.step = {};
    var _, pt, ut = /^(?:toggle|show|hide)$/, ft = /queueHooks$/;
    function mt() {
        pt && (!1 === S.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(mt) : C.setTimeout(mt, x.fx.interval),
        x.fx.tick())
    }
    function gt() {
        return C.setTimeout(function() {
            _ = void 0
        }),
        _ = Date.now()
    }
    function vt(e, t) {
        var i, n = 0, o = {
            height: e
        };
        for (t = t ? 1 : 0; n < 4; n += 2 - t)
            o["margin" + (i = p[n])] = o["padding" + i] = e;
        return t && (o.opacity = o.width = e),
        o
    }
    function yt(e, t, i) {
        for (var n, o = ($.tweeners[t] || []).concat($.tweeners["*"]), s = 0, r = o.length; s < r; s++)
            if (n = o[s].call(i, t, e))
                return n
    }
    function $(o, e, t) {
        var i, s, n, r, a, l, c, d = 0, h = $.prefilters.length, p = x.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (s)
                return !1;
            for (var e = _ || gt(), e = Math.max(0, f.startTime + f.duration - e), t = 1 - (e / f.duration || 0), i = 0, n = f.tweens.length; i < n; i++)
                f.tweens[i].run(t);
            return p.notifyWith(o, [f, t, e]),
            t < 1 && n ? e : (n || p.notifyWith(o, [f, 1, 0]),
            p.resolveWith(o, [f]),
            !1)
        }, f = p.promise({
            elem: o,
            props: x.extend({}, e),
            opts: x.extend(!0, {
                specialEasing: {},
                easing: x.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: _ || gt(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                t = x.Tween(o, f.opts, e, t, f.opts.specialEasing[e] || f.opts.easing);
                return f.tweens.push(t),
                t
            },
            stop: function(e) {
                var t = 0
                  , i = e ? f.tweens.length : 0;
                if (!s) {
                    for (s = !0; t < i; t++)
                        f.tweens[t].run(1);
                    e ? (p.notifyWith(o, [f, 1, 0]),
                    p.resolveWith(o, [f, e])) : p.rejectWith(o, [f, e])
                }
                return this
            }
        }), m = f.props, g = m, v = f.opts.specialEasing;
        for (n in g)
            if (a = v[r = w(n)],
            l = g[n],
            Array.isArray(l) && (a = l[1],
            l = g[n] = l[0]),
            n !== r && (g[r] = l,
            delete g[n]),
            (c = x.cssHooks[r]) && "expand"in c)
                for (n in l = c.expand(l),
                delete g[r],
                l)
                    n in g || (g[n] = l[n],
                    v[n] = a);
            else
                v[r] = a;
        for (; d < h; d++)
            if (i = $.prefilters[d].call(f, o, m, f.opts))
                return y(i.stop) && (x._queueHooks(f.elem, f.opts.queue).stop = i.stop.bind(i)),
                i;
        return x.map(m, yt, f),
        y(f.opts.start) && f.opts.start.call(o, f),
        f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always),
        x.fx.timer(x.extend(u, {
            elem: o,
            anim: f,
            queue: f.opts.queue
        })),
        f
    }
    x.Animation = x.extend($, {
        tweeners: {
            "*": [function(e, t) {
                var i = this.createTween(e, t);
                return we(i.elem, e, ve.exec(t), i),
                i
            }
            ]
        },
        tweener: function(e, t) {
            for (var i, n = 0, o = (e = y(e) ? (t = e,
            ["*"]) : e.match(E)).length; n < o; n++)
                i = e[n],
                $.tweeners[i] = $.tweeners[i] || [],
                $.tweeners[i].unshift(t)
        },
        prefilters: [function(e, t, i) {
            var n, o, s, r, a, l, c, d = "width"in t || "height"in t, h = this, p = {}, u = e.style, f = e.nodeType && ge(e), m = b.get(e, "fxshow");
            for (n in i.queue || (null == (r = x._queueHooks(e, "fx")).unqueued && (r.unqueued = 0,
            a = r.empty.fire,
            r.empty.fire = function() {
                r.unqueued || a()
            }
            ),
            r.unqueued++,
            h.always(function() {
                h.always(function() {
                    r.unqueued--,
                    x.queue(e, "fx").length || r.empty.fire()
                })
            })),
            t)
                if (o = t[n],
                ut.test(o)) {
                    if (delete t[n],
                    s = s || "toggle" === o,
                    o === (f ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[n])
                            continue;
                        f = !0
                    }
                    p[n] = m && m[n] || x.style(e, n)
                }
            if ((l = !x.isEmptyObject(t)) || !x.isEmptyObject(p))
                for (n in d && 1 === e.nodeType && (i.overflow = [u.overflow, u.overflowX, u.overflowY],
                null == (c = m && m.display) && (c = b.get(e, "display")),
                "none" === (d = x.css(e, "display")) && (c ? d = c : (T([e], !0),
                c = e.style.display || c,
                d = x.css(e, "display"),
                T([e]))),
                "inline" === d || "inline-block" === d && null != c) && "none" === x.css(e, "float") && (l || (h.done(function() {
                    u.display = c
                }),
                null == c && (d = u.display,
                c = "none" === d ? "" : d)),
                u.display = "inline-block"),
                i.overflow && (u.overflow = "hidden",
                h.always(function() {
                    u.overflow = i.overflow[0],
                    u.overflowX = i.overflow[1],
                    u.overflowY = i.overflow[2]
                })),
                l = !1,
                p)
                    l || (m ? "hidden"in m && (f = m.hidden) : m = b.access(e, "fxshow", {
                        display: c
                    }),
                    s && (m.hidden = !f),
                    f && T([e], !0),
                    h.done(function() {
                        for (n in f || T([e]),
                        b.remove(e, "fxshow"),
                        p)
                            x.style(e, n, p[n])
                    })),
                    l = yt(f ? m[n] : 0, n, h),
                    n in m || (m[n] = l.start,
                    f && (l.end = l.start,
                    l.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? $.prefilters.unshift(e) : $.prefilters.push(e)
        }
    }),
    x.speed = function(e, t, i) {
        var n = e && "object" == typeof e ? x.extend({}, e) : {
            complete: i || !i && t || y(e) && e,
            duration: e,
            easing: i && t || t && !y(t) && t
        };
        return x.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in x.fx.speeds ? n.duration = x.fx.speeds[n.duration] : n.duration = x.fx.speeds._default),
        null != n.queue && !0 !== n.queue || (n.queue = "fx"),
        n.old = n.complete,
        n.complete = function() {
            y(n.old) && n.old.call(this),
            n.queue && x.dequeue(this, n.queue)
        }
        ,
        n
    }
    ,
    x.fn.extend({
        fadeTo: function(e, t, i, n) {
            return this.filter(ge).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, i, n)
        },
        animate: function(t, e, i, n) {
            function o() {
                var e = $(this, x.extend({}, t), r);
                (s || b.get(this, "finish")) && e.stop(!0)
            }
            var s = x.isEmptyObject(t)
              , r = x.speed(e, i, n);
            return o.finish = o,
            s || !1 === r.queue ? this.each(o) : this.queue(r.queue, o)
        },
        stop: function(o, e, s) {
            function r(e) {
                var t = e.stop;
                delete e.stop,
                t(s)
            }
            return "string" != typeof o && (s = e,
            e = o,
            o = void 0),
            e && this.queue(o || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != o && o + "queueHooks"
                  , i = x.timers
                  , n = b.get(this);
                if (t)
                    n[t] && n[t].stop && r(n[t]);
                else
                    for (t in n)
                        n[t] && n[t].stop && ft.test(t) && r(n[t]);
                for (t = i.length; t--; )
                    i[t].elem !== this || null != o && i[t].queue !== o || (i[t].anim.stop(s),
                    e = !1,
                    i.splice(t, 1));
                !e && s || x.dequeue(this, o)
            })
        },
        finish: function(r) {
            return !1 !== r && (r = r || "fx"),
            this.each(function() {
                var e, t = b.get(this), i = t[r + "queue"], n = t[r + "queueHooks"], o = x.timers, s = i ? i.length : 0;
                for (t.finish = !0,
                x.queue(this, r, []),
                n && n.stop && n.stop.call(this, !0),
                e = o.length; e--; )
                    o[e].elem === this && o[e].queue === r && (o[e].anim.stop(!0),
                    o.splice(e, 1));
                for (e = 0; e < s; e++)
                    i[e] && i[e].finish && i[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    x.each(["toggle", "show", "hide"], function(e, n) {
        var o = x.fn[n];
        x.fn[n] = function(e, t, i) {
            return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(vt(n, !0), e, t, i)
        }
    }),
    x.each({
        slideDown: vt("show"),
        slideUp: vt("hide"),
        slideToggle: vt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, n) {
        x.fn[e] = function(e, t, i) {
            return this.animate(n, e, t, i)
        }
    }),
    x.timers = [],
    x.fx.tick = function() {
        var e, t = 0, i = x.timers;
        for (_ = Date.now(); t < i.length; t++)
            (e = i[t])() || i[t] !== e || i.splice(t--, 1);
        i.length || x.fx.stop(),
        _ = void 0
    }
    ,
    x.fx.timer = function(e) {
        x.timers.push(e),
        x.fx.start()
    }
    ,
    x.fx.interval = 13,
    x.fx.start = function() {
        pt || (pt = !0,
        mt())
    }
    ,
    x.fx.stop = function() {
        pt = null
    }
    ,
    x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    x.fn.delay = function(n, e) {
        return n = x.fx && x.fx.speeds[n] || n,
        this.queue(e = e || "fx", function(e, t) {
            var i = C.setTimeout(e, n);
            t.stop = function() {
                C.clearTimeout(i)
            }
        })
    }
    ,
    i = S.createElement("input"),
    e = S.createElement("select").appendChild(S.createElement("option")),
    i.type = "checkbox",
    g.checkOn = "" !== i.value,
    g.optSelected = e.selected,
    (i = S.createElement("input")).value = "t",
    i.type = "radio",
    g.radioValue = "t" === i.value;
    var wt, bt = x.expr.attrHandle, At = (x.fn.extend({
        attr: function(e, t) {
            return h(this, x.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                x.removeAttr(this, e)
            })
        }
    }),
    x.extend({
        attr: function(e, t, i) {
            var n, o, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s)
                return void 0 === e.getAttribute ? x.prop(e, t, i) : (1 === s && x.isXMLDoc(e) || (o = x.attrHooks[t.toLowerCase()] || (x.expr.match.bool.test(t) ? wt : void 0)),
                void 0 !== i ? null === i ? void x.removeAttr(e, t) : o && "set"in o && void 0 !== (n = o.set(e, i, t)) ? n : (e.setAttribute(t, i + ""),
                i) : !(o && "get"in o && null !== (n = o.get(e, t))) && null == (n = x.find.attr(e, t)) ? void 0 : n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    var i;
                    if (!g.radioValue && "radio" === t && l(e, "input"))
                        return i = e.value,
                        e.setAttribute("type", t),
                        i && (e.value = i),
                        t
                }
            }
        },
        removeAttr: function(e, t) {
            var i, n = 0, o = t && t.match(E);
            if (o && 1 === e.nodeType)
                for (; i = o[n++]; )
                    e.removeAttribute(i)
        }
    }),
    wt = {
        set: function(e, t, i) {
            return !1 === t ? x.removeAttr(e, i) : e.setAttribute(i, i),
            i
        }
    },
    x.each(x.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var r = bt[t] || x.find.attr;
        bt[t] = function(e, t, i) {
            var n, o, s = t.toLowerCase();
            return i || (o = bt[s],
            bt[s] = n,
            n = null != r(e, t, i) ? s : null,
            bt[s] = o),
            n
        }
    }),
    /^(?:input|select|textarea|button)$/i), Ct = /^(?:a|area)$/i;
    function L(e) {
        return (e.match(E) || []).join(" ")
    }
    function O(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function St(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(E) || []
    }
    x.fn.extend({
        prop: function(e, t) {
            return h(this, x.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[x.propFix[e] || e]
            })
        }
    }),
    x.extend({
        prop: function(e, t, i) {
            var n, o, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s)
                return 1 === s && x.isXMLDoc(e) || (t = x.propFix[t] || t,
                o = x.propHooks[t]),
                void 0 !== i ? o && "set"in o && void 0 !== (n = o.set(e, i, t)) ? n : e[t] = i : o && "get"in o && null !== (n = o.get(e, t)) ? n : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : At.test(e.nodeName) || Ct.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    g.optSelected || (x.propHooks.selected = {
        get: function(e) {
            e = e.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            e = e.parentNode;
            e && (e.selectedIndex,
            e.parentNode) && e.parentNode.selectedIndex
        }
    }),
    x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        x.propFix[this.toLowerCase()] = this
    }),
    x.fn.extend({
        addClass: function(t) {
            var e, i, n, o, s, r;
            return y(t) ? this.each(function(e) {
                x(this).addClass(t.call(this, e, O(this)))
            }) : (e = St(t)).length ? this.each(function() {
                if (n = O(this),
                i = 1 === this.nodeType && " " + L(n) + " ") {
                    for (s = 0; s < e.length; s++)
                        o = e[s],
                        i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                    r = L(i),
                    n !== r && this.setAttribute("class", r)
                }
            }) : this
        },
        removeClass: function(t) {
            var e, i, n, o, s, r;
            return y(t) ? this.each(function(e) {
                x(this).removeClass(t.call(this, e, O(this)))
            }) : arguments.length ? (e = St(t)).length ? this.each(function() {
                if (n = O(this),
                i = 1 === this.nodeType && " " + L(n) + " ") {
                    for (s = 0; s < e.length; s++)
                        for (o = e[s]; -1 < i.indexOf(" " + o + " "); )
                            i = i.replace(" " + o + " ", " ");
                    r = L(i),
                    n !== r && this.setAttribute("class", r)
                }
            }) : this : this.attr("class", "")
        },
        toggleClass: function(t, i) {
            var e, n, o, s, r = typeof t, a = "string" == r || Array.isArray(t);
            return y(t) ? this.each(function(e) {
                x(this).toggleClass(t.call(this, e, O(this), i), i)
            }) : "boolean" == typeof i && a ? i ? this.addClass(t) : this.removeClass(t) : (e = St(t),
            this.each(function() {
                if (a)
                    for (s = x(this),
                    o = 0; o < e.length; o++)
                        n = e[o],
                        s.hasClass(n) ? s.removeClass(n) : s.addClass(n);
                else
                    void 0 !== t && "boolean" != r || ((n = O(this)) && b.set(this, "__className__", n),
                    this.setAttribute && this.setAttribute("class", !n && !1 !== t && b.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(e) {
            for (var t, i = 0, n = " " + e + " "; t = this[i++]; )
                if (1 === t.nodeType && -1 < (" " + L(O(t)) + " ").indexOf(n))
                    return !0;
            return !1
        }
    });
    function xt(e) {
        e.stopPropagation()
    }
    var Et = /\r/g
      , kt = (x.fn.extend({
        val: function(t) {
            var i, e, n, o = this[0];
            return arguments.length ? (n = y(t),
            this.each(function(e) {
                1 === this.nodeType && (null == (e = n ? t.call(this, e, x(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = x.map(e, function(e) {
                    return null == e ? "" : e + ""
                })),
                (i = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set"in i && void 0 !== i.set(this, e, "value") || (this.value = e))
            })) : o ? (i = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()]) && "get"in i && void 0 !== (e = i.get(o, "value")) ? e : "string" == typeof (e = o.value) ? e.replace(Et, "") : null == e ? "" : e : void 0
        }
    }),
    x.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : L(x.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, i = e.options, n = e.selectedIndex, o = "select-one" === e.type, s = o ? null : [], r = o ? n + 1 : i.length, a = n < 0 ? r : o ? n : 0; a < r; a++)
                        if (((t = i[a]).selected || a === n) && !t.disabled && (!t.parentNode.disabled || !l(t.parentNode, "optgroup"))) {
                            if (t = x(t).val(),
                            o)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var i, n, o = e.options, s = x.makeArray(t), r = o.length; r--; )
                        ((n = o[r]).selected = -1 < x.inArray(x.valHooks.option.get(n), s)) && (i = !0);
                    return i || (e.selectedIndex = -1),
                    s
                }
            }
        }
    }),
    x.each(["radio", "checkbox"], function() {
        x.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < x.inArray(x(e).val(), t)
            }
        },
        g.checkOn || (x.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    g.focusin = "onfocusin"in C,
    /^(?:focusinfocus|focusoutblur)$/)
      , Tt = (x.extend(x.event, {
        trigger: function(e, t, i, n) {
            var o, s, r, a, l, c, d, h = [i || S], p = W.call(e, "type") ? e.type : e, u = W.call(e, "namespace") ? e.namespace.split(".") : [], f = d = s = i = i || S;
            if (3 !== i.nodeType && 8 !== i.nodeType && !kt.test(p + x.event.triggered) && (-1 < p.indexOf(".") && (p = (u = p.split(".")).shift(),
            u.sort()),
            a = p.indexOf(":") < 0 && "on" + p,
            (e = e[x.expando] ? e : new x.Event(p,"object" == typeof e && e)).isTrigger = n ? 2 : 3,
            e.namespace = u.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + u.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = i),
            t = null == t ? [e] : x.makeArray(t, [e]),
            c = x.event.special[p] || {},
            n || !c.trigger || !1 !== c.trigger.apply(i, t))) {
                if (!n && !c.noBubble && !m(i)) {
                    for (r = c.delegateType || p,
                    kt.test(r + p) || (f = f.parentNode); f; f = f.parentNode)
                        h.push(f),
                        s = f;
                    s === (i.ownerDocument || S) && h.push(s.defaultView || s.parentWindow || C)
                }
                for (o = 0; (f = h[o++]) && !e.isPropagationStopped(); )
                    d = f,
                    e.type = 1 < o ? r : c.bindType || p,
                    (l = (b.get(f, "events") || Object.create(null))[e.type] && b.get(f, "handle")) && l.apply(f, t),
                    (l = a && f[a]) && l.apply && v(f) && (e.result = l.apply(f, t),
                    !1 === e.result) && e.preventDefault();
                return e.type = p,
                n || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(h.pop(), t) || !v(i) || a && y(i[p]) && !m(i) && ((s = i[a]) && (i[a] = null),
                x.event.triggered = p,
                e.isPropagationStopped() && d.addEventListener(p, xt),
                i[p](),
                e.isPropagationStopped() && d.removeEventListener(p, xt),
                x.event.triggered = void 0,
                s) && (i[a] = s),
                e.result
            }
        },
        simulate: function(e, t, i) {
            i = x.extend(new x.Event, i, {
                type: e,
                isSimulated: !0
            });
            x.event.trigger(i, null, t)
        }
    }),
    x.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                x.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var i = this[0];
            if (i)
                return x.event.trigger(e, t, i, !0)
        }
    }),
    g.focusin || x.each({
        focus: "focusin",
        blur: "focusout"
    }, function(i, n) {
        function o(e) {
            x.event.simulate(n, e.target, x.event.fix(e))
        }
        x.event.special[n] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this
                  , t = b.access(e, n);
                t || e.addEventListener(i, o, !0),
                b.access(e, n, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this
                  , t = b.access(e, n) - 1;
                t ? b.access(e, n, t) : (e.removeEventListener(i, o, !0),
                b.remove(e, n))
            }
        }
    }),
    C.location)
      , jt = {
        guid: Date.now()
    }
      , It = /\?/
      , Mt = (x.parseXML = function(e) {
        var t, i;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return i = t && t.getElementsByTagName("parsererror")[0],
        t && !i || x.error("Invalid XML: " + (i ? x.map(i.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)),
        t
    }
    ,
    /\[\]$/)
      , Dt = /\r?\n/g
      , _t = /^(?:submit|button|image|reset|file)$/i
      , $t = /^(?:input|select|textarea|keygen)/i;
    x.param = function(e, t) {
        function i(e, t) {
            t = y(t) ? t() : t,
            o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
        }
        var n, o = [];
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !x.isPlainObject(e))
            x.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                !function i(n, e, o, s) {
                    if (Array.isArray(e))
                        x.each(e, function(e, t) {
                            o || Mt.test(n) ? s(n, t) : i(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, o, s)
                        });
                    else if (o || "object" !== f(e))
                        s(n, e);
                    else
                        for (var t in e)
                            i(n + "[" + t + "]", e[t], o, s)
                }(n, e[n], t, i);
        return o.join("&")
    }
    ,
    x.fn.extend({
        serialize: function() {
            return x.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && $t.test(this.nodeName) && !_t.test(e) && (this.checked || !Ae.test(e))
            }).map(function(e, t) {
                var i = x(this).val();
                return null == i ? null : Array.isArray(i) ? x.map(i, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Dt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(Dt, "\r\n")
                }
            }).get()
        }
    });
    var Lt = /%20/g
      , Ot = /#.*$/
      , Bt = /([?&])_=[^&]*/
      , Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Ht = /^(?:GET|HEAD)$/
      , Pt = /^\/\//
      , Qt = {}
      , Rt = {}
      , Ft = "*/".concat("*")
      , Wt = S.createElement("a");
    function zt(s) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var i, n = 0, o = e.toLowerCase().match(E) || [];
            if (y(t))
                for (; i = o[n++]; )
                    "+" === i[0] ? (i = i.slice(1) || "*",
                    (s[i] = s[i] || []).unshift(t)) : (s[i] = s[i] || []).push(t)
        }
    }
    function Gt(t, n, o, s) {
        var r = {}
          , a = t === Rt;
        function l(e) {
            var i;
            return r[e] = !0,
            x.each(t[e] || [], function(e, t) {
                t = t(n, o, s);
                return "string" != typeof t || a || r[t] ? a ? !(i = t) : void 0 : (n.dataTypes.unshift(t),
                l(t),
                !1)
            }),
            i
        }
        return l(n.dataTypes[0]) || !r["*"] && l("*")
    }
    function Yt(e, t) {
        var i, n, o = x.ajaxSettings.flatOptions || {};
        for (i in t)
            void 0 !== t[i] && ((o[i] ? e : n = n || {})[i] = t[i]);
        return n && x.extend(!0, e, n),
        e
    }
    Wt.href = Tt.href,
    x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ft,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Yt(Yt(e, x.ajaxSettings), t) : Yt(x.ajaxSettings, e)
        },
        ajaxPrefilter: zt(Qt),
        ajaxTransport: zt(Rt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0);
            var l, c, d, i, h, p, u, n, o, f = x.ajaxSetup({}, t = t || {}), m = f.context || f, g = f.context && (m.nodeType || m.jquery) ? x(m) : x.event, v = x.Deferred(), y = x.Callbacks("once memory"), w = f.statusCode || {}, s = {}, r = {}, a = "canceled", b = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (p) {
                        if (!i)
                            for (i = {}; t = Nt.exec(d); )
                                i[t[1].toLowerCase() + " "] = (i[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = i[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return p ? d : null
                },
                setRequestHeader: function(e, t) {
                    return null == p && (e = r[e.toLowerCase()] = r[e.toLowerCase()] || e,
                    s[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == p && (f.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    if (e)
                        if (p)
                            b.always(e[b.status]);
                        else
                            for (var t in e)
                                w[t] = [w[t], e[t]];
                    return this
                },
                abort: function(e) {
                    e = e || a;
                    return l && l.abort(e),
                    A(0, e),
                    this
                }
            };
            if (v.promise(b),
            f.url = ((e || f.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"),
            f.type = t.method || t.type || f.method || f.type,
            f.dataTypes = (f.dataType || "*").toLowerCase().match(E) || [""],
            null == f.crossDomain) {
                o = S.createElement("a");
                try {
                    o.href = f.url,
                    o.href = o.href,
                    f.crossDomain = Wt.protocol + "//" + Wt.host != o.protocol + "//" + o.host
                } catch (e) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = x.param(f.data, f.traditional)),
            Gt(Qt, f, t, b),
            !p) {
                for (n in (u = x.event && f.global) && 0 == x.active++ && x.event.trigger("ajaxStart"),
                f.type = f.type.toUpperCase(),
                f.hasContent = !Ht.test(f.type),
                c = f.url.replace(Ot, ""),
                f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Lt, "+")) : (o = f.url.slice(c.length),
                f.data && (f.processData || "string" == typeof f.data) && (c += (It.test(c) ? "&" : "?") + f.data,
                delete f.data),
                !1 === f.cache && (c = c.replace(Bt, "$1"),
                o = (It.test(c) ? "&" : "?") + "_=" + jt.guid++ + o),
                f.url = c + o),
                f.ifModified && (x.lastModified[c] && b.setRequestHeader("If-Modified-Since", x.lastModified[c]),
                x.etag[c]) && b.setRequestHeader("If-None-Match", x.etag[c]),
                (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && b.setRequestHeader("Content-Type", f.contentType),
                b.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : f.accepts["*"]),
                f.headers)
                    b.setRequestHeader(n, f.headers[n]);
                if (f.beforeSend && (!1 === f.beforeSend.call(m, b, f) || p))
                    return b.abort();
                if (a = "abort",
                y.add(f.complete),
                b.done(f.success),
                b.fail(f.error),
                l = Gt(Rt, f, t, b)) {
                    if (b.readyState = 1,
                    u && g.trigger("ajaxSend", [b, f]),
                    p)
                        return b;
                    f.async && 0 < f.timeout && (h = C.setTimeout(function() {
                        b.abort("timeout")
                    }, f.timeout));
                    try {
                        p = !1,
                        l.send(s, A)
                    } catch (e) {
                        if (p)
                            throw e;
                        A(-1, e)
                    }
                } else
                    A(-1, "No Transport")
            }
            return b;
            function A(e, t, i, n) {
                var o, s, r, a = t;
                p || (p = !0,
                h && C.clearTimeout(h),
                l = void 0,
                d = n || "",
                b.readyState = 0 < e ? 4 : 0,
                n = 200 <= e && e < 300 || 304 === e,
                i && (r = function(e, t, i) {
                    for (var n, o, s, r, a = e.contents, l = e.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (n)
                        for (o in a)
                            if (a[o] && a[o].test(n)) {
                                l.unshift(o);
                                break
                            }
                    if (l[0]in i)
                        s = l[0];
                    else {
                        for (o in i) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                s = o;
                                break
                            }
                            r = r || o
                        }
                        s = s || r
                    }
                    if (s)
                        return s !== l[0] && l.unshift(s),
                        i[s]
                }(f, b, i)),
                !n && -1 < x.inArray("script", f.dataTypes) && x.inArray("json", f.dataTypes) < 0 && (f.converters["text script"] = function() {}
                ),
                r = function(e, t, i, n) {
                    var o, s, r, a, l, c = {}, d = e.dataTypes.slice();
                    if (d[1])
                        for (r in e.converters)
                            c[r.toLowerCase()] = e.converters[r];
                    for (s = d.shift(); s; )
                        if (e.responseFields[s] && (i[e.responseFields[s]] = t),
                        !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        l = s,
                        s = d.shift())
                            if ("*" === s)
                                s = l;
                            else if ("*" !== l && l !== s) {
                                if (!(r = c[l + " " + s] || c["* " + s]))
                                    for (o in c)
                                        if ((a = o.split(" "))[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                                            !0 === r ? r = c[o] : !0 !== c[o] && (s = a[0],
                                            d.unshift(a[1]));
                                            break
                                        }
                                if (!0 !== r)
                                    if (r && e.throws)
                                        t = r(t);
                                    else
                                        try {
                                            t = r(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: r ? e : "No conversion from " + l + " to " + s
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(f, r, b, n),
                n ? (f.ifModified && ((i = b.getResponseHeader("Last-Modified")) && (x.lastModified[c] = i),
                i = b.getResponseHeader("etag")) && (x.etag[c] = i),
                204 === e || "HEAD" === f.type ? a = "nocontent" : 304 === e ? a = "notmodified" : (a = r.state,
                o = r.data,
                n = !(s = r.error))) : (s = a,
                !e && a || (a = "error",
                e < 0 && (e = 0))),
                b.status = e,
                b.statusText = (t || a) + "",
                n ? v.resolveWith(m, [o, a, b]) : v.rejectWith(m, [b, a, s]),
                b.statusCode(w),
                w = void 0,
                u && g.trigger(n ? "ajaxSuccess" : "ajaxError", [b, f, n ? o : s]),
                y.fireWith(m, [b, a]),
                u && (g.trigger("ajaxComplete", [b, f]),
                --x.active || x.event.trigger("ajaxStop")))
            }
        },
        getJSON: function(e, t, i) {
            return x.get(e, t, i, "json")
        },
        getScript: function(e, t) {
            return x.get(e, void 0, t, "script")
        }
    }),
    x.each(["get", "post"], function(e, o) {
        x[o] = function(e, t, i, n) {
            return y(t) && (n = n || i,
            i = t,
            t = void 0),
            x.ajax(x.extend({
                url: e,
                type: o,
                dataType: n,
                data: t,
                success: i
            }, x.isPlainObject(e) && e))
        }
    }),
    x.ajaxPrefilter(function(e) {
        for (var t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    x._evalUrl = function(e, t, i) {
        return x.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                x.globalEval(e, t, i)
            }
        })
    }
    ,
    x.fn.extend({
        wrapAll: function(e) {
            return this[0] && (y(e) && (e = e.call(this[0])),
            e = x(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && e.insertBefore(this[0]),
            e.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(i) {
            return y(i) ? this.each(function(e) {
                x(this).wrapInner(i.call(this, e))
            }) : this.each(function() {
                var e = x(this)
                  , t = e.contents();
                t.length ? t.wrapAll(i) : e.append(i)
            })
        },
        wrap: function(t) {
            var i = y(t);
            return this.each(function(e) {
                x(this).wrapAll(i ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                x(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    x.expr.pseudos.hidden = function(e) {
        return !x.expr.pseudos.visible(e)
    }
    ,
    x.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    x.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Ut = {
        0: 200,
        1223: 204
    }
      , Vt = x.ajaxSettings.xhr();
    g.cors = !!Vt && "withCredentials"in Vt,
    g.ajax = Vt = !!Vt,
    x.ajaxTransport(function(o) {
        var s, r;
        if (g.cors || Vt && !o.crossDomain)
            return {
                send: function(e, t) {
                    var i, n = o.xhr();
                    if (n.open(o.type, o.url, o.async, o.username, o.password),
                    o.xhrFields)
                        for (i in o.xhrFields)
                            n[i] = o.xhrFields[i];
                    for (i in o.mimeType && n.overrideMimeType && n.overrideMimeType(o.mimeType),
                    o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        n.setRequestHeader(i, e[i]);
                    s = function(e) {
                        return function() {
                            s && (s = r = n.onload = n.onerror = n.onabort = n.ontimeout = n.onreadystatechange = null,
                            "abort" === e ? n.abort() : "error" === e ? "number" != typeof n.status ? t(0, "error") : t(n.status, n.statusText) : t(Ut[n.status] || n.status, n.statusText, "text" !== (n.responseType || "text") || "string" != typeof n.responseText ? {
                                binary: n.response
                            } : {
                                text: n.responseText
                            }, n.getAllResponseHeaders()))
                        }
                    }
                    ,
                    n.onload = s(),
                    r = n.onerror = n.ontimeout = s("error"),
                    void 0 !== n.onabort ? n.onabort = r : n.onreadystatechange = function() {
                        4 === n.readyState && C.setTimeout(function() {
                            s && r()
                        })
                    }
                    ,
                    s = s("abort");
                    try {
                        n.send(o.hasContent && o.data || null)
                    } catch (e) {
                        if (s)
                            throw e
                    }
                },
                abort: function() {
                    s && s()
                }
            }
    }),
    x.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return x.globalEval(e),
                e
            }
        }
    }),
    x.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    x.ajaxTransport("script", function(i) {
        var n, o;
        if (i.crossDomain || i.scriptAttrs)
            return {
                send: function(e, t) {
                    n = x("<script>").attr(i.scriptAttrs || {}).prop({
                        charset: i.scriptCharset,
                        src: i.url
                    }).on("load error", o = function(e) {
                        n.remove(),
                        o = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    S.head.appendChild(n[0])
                },
                abort: function() {
                    o && o()
                }
            }
    });
    var qt = []
      , Kt = /(=)\?(?=&|$)|\?\?/
      , Xt = (x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = qt.pop() || x.expando + "_" + jt.guid++;
            return this[e] = !0,
            e
        }
    }),
    x.ajaxPrefilter("json jsonp", function(e, t, i) {
        var n, o, s, r = !1 !== e.jsonp && (Kt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Kt.test(e.data) && "data");
        if (r || "jsonp" === e.dataTypes[0])
            return n = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            r ? e[r] = e[r].replace(Kt, "$1" + n) : !1 !== e.jsonp && (e.url += (It.test(e.url) ? "&" : "?") + e.jsonp + "=" + n),
            e.converters["script json"] = function() {
                return s || x.error(n + " was not called"),
                s[0]
            }
            ,
            e.dataTypes[0] = "json",
            o = C[n],
            C[n] = function() {
                s = arguments
            }
            ,
            i.always(function() {
                void 0 === o ? x(C).removeProp(n) : C[n] = o,
                e[n] && (e.jsonpCallback = t.jsonpCallback,
                qt.push(n)),
                s && y(o) && o(s[0]),
                s = o = void 0
            }),
            "script"
    }),
    g.createHTMLDocument = ((s = S.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === s.childNodes.length),
    x.parseHTML = function(e, t, i) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (i = t,
        t = !1),
        t || (g.createHTMLDocument ? ((n = (t = S.implementation.createHTMLDocument("")).createElement("base")).href = S.location.href,
        t.head.appendChild(n)) : t = S),
        n = !i && [],
        (i = X.exec(e)) ? [t.createElement(i[1])] : (i = ke([e], t, n),
        n && n.length && x(n).remove(),
        x.merge([], i.childNodes)));
        var n
    }
    ,
    x.fn.load = function(e, t, i) {
        var n, o, s, r = this, a = e.indexOf(" ");
        return -1 < a && (n = L(e.slice(a)),
        e = e.slice(0, a)),
        y(t) ? (i = t,
        t = void 0) : t && "object" == typeof t && (o = "POST"),
        0 < r.length && x.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            s = arguments,
            r.html(n ? x("<div>").append(x.parseHTML(e)).find(n) : e)
        }).always(i && function(e, t) {
            r.each(function() {
                i.apply(this, s || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    x.expr.pseudos.animated = function(t) {
        return x.grep(x.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    x.offset = {
        setOffset: function(e, t, i) {
            var n, o, s, r, a = x.css(e, "position"), l = x(e), c = {};
            "static" === a && (e.style.position = "relative"),
            s = l.offset(),
            n = x.css(e, "top"),
            r = x.css(e, "left"),
            a = ("absolute" === a || "fixed" === a) && -1 < (n + r).indexOf("auto") ? (o = (a = l.position()).top,
            a.left) : (o = parseFloat(n) || 0,
            parseFloat(r) || 0),
            null != (t = y(t) ? t.call(e, i, x.extend({}, s)) : t).top && (c.top = t.top - s.top + o),
            null != t.left && (c.left = t.left - s.left + a),
            "using"in t ? t.using.call(e, c) : l.css(c)
        }
    },
    x.fn.extend({
        offset: function(t) {
            var e, i;
            return arguments.length ? void 0 === t ? this : this.each(function(e) {
                x.offset.setOffset(this, t, e)
            }) : (i = this[0]) ? i.getClientRects().length ? (e = i.getBoundingClientRect(),
            i = i.ownerDocument.defaultView,
            {
                top: e.top + i.pageYOffset,
                left: e.left + i.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, i, n = this[0], o = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === x.css(n, "position"))
                    t = n.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    i = n.ownerDocument,
                    e = n.offsetParent || i.documentElement; e && (e === i.body || e === i.documentElement) && "static" === x.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== n && 1 === e.nodeType && ((o = x(e).offset()).top += x.css(e, "borderTopWidth", !0),
                    o.left += x.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - x.css(n, "marginTop", !0),
                    left: t.left - o.left - x.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === x.css(e, "position"); )
                    e = e.offsetParent;
                return e || A
            })
        }
    }),
    x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, o) {
        var s = "pageYOffset" === o;
        x.fn[t] = function(e) {
            return h(this, function(e, t, i) {
                var n;
                if (m(e) ? n = e : 9 === e.nodeType && (n = e.defaultView),
                void 0 === i)
                    return n ? n[o] : e[t];
                n ? n.scrollTo(s ? n.pageXOffset : i, s ? i : n.pageYOffset) : e[t] = i
            }, t, e, arguments.length)
        }
    }),
    x.each(["top", "left"], function(e, i) {
        x.cssHooks[i] = Ze(g.pixelPosition, function(e, t) {
            if (t)
                return t = Je(e, i),
                Ve.test(t) ? x(e).position()[i] + "px" : t
        })
    }),
    x.each({
        Height: "height",
        Width: "width"
    }, function(r, a) {
        x.each({
            padding: "inner" + r,
            content: a,
            "": "outer" + r
        }, function(n, s) {
            x.fn[s] = function(e, t) {
                var i = arguments.length && (n || "boolean" != typeof e)
                  , o = n || (!0 === e || !0 === t ? "margin" : "border");
                return h(this, function(e, t, i) {
                    var n;
                    return m(e) ? 0 === s.indexOf("outer") ? e["inner" + r] : e.document.documentElement["client" + r] : 9 === e.nodeType ? (n = e.documentElement,
                    Math.max(e.body["scroll" + r], n["scroll" + r], e.body["offset" + r], n["offset" + r], n["client" + r])) : void 0 === i ? x.css(e, t, o) : x.style(e, t, i, o)
                }, a, i ? e : void 0, i)
            }
        })
    }),
    x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        x.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    x.fn.extend({
        bind: function(e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function(e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, i) {
        x.fn[i] = function(e, t) {
            return 0 < arguments.length ? this.on(i, null, e, t) : this.trigger(i)
        }
    }),
    /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g)
      , Jt = (x.proxy = function(e, t) {
        var i, n;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        y(e))
            return i = a.call(arguments, 2),
            (n = function() {
                return e.apply(t || this, i.concat(a.call(arguments)))
            }
            ).guid = e.guid = e.guid || x.guid++,
            n
    }
    ,
    x.holdReady = function(e) {
        e ? x.readyWait++ : x.ready(!0)
    }
    ,
    x.isArray = Array.isArray,
    x.parseJSON = JSON.parse,
    x.nodeName = l,
    x.isFunction = y,
    x.isWindow = m,
    x.camelCase = w,
    x.type = f,
    x.now = Date.now,
    x.isNumeric = function(e) {
        var t = x.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    x.trim = function(e) {
        return null == e ? "" : (e + "").replace(Xt, "$1")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return x
    }),
    C.jQuery)
      , Zt = C.$;
    return x.noConflict = function(e) {
        return C.$ === x && (C.$ = Zt),
        e && C.jQuery === x && (C.jQuery = Jt),
        x
    }
    ,
    void 0 === B && (C.jQuery = C.$ = x),
    x
}),
!function(e, t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : e.Tether = t()
}(this, function() {
    "use strict";
    function n(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(e) {
        var t, i, n, o = e.getBoundingClientRect(), s = {};
        for (t in o)
            s[t] = o[t];
        try {
            e.ownerDocument !== document && (i = e.ownerDocument.defaultView.frameElement) && (n = r(i),
            s.top += n.top,
            s.bottom += n.top,
            s.left += n.left,
            s.right += n.left)
        } catch (e) {}
        return s
    }
    function s(e) {
        var t = (getComputedStyle(e) || {}).position
          , i = [];
        if ("fixed" === t)
            return [e];
        for (var n = e; (n = n.parentNode) && 1 === n.nodeType; ) {
            var o = void 0;
            try {
                o = getComputedStyle(n)
            } catch (e) {}
            if (null == o)
                return i.push(n),
                i;
            var s = o
              , r = s.overflow
              , a = s.overflowX
              , s = s.overflowY;
            /(auto|scroll|overlay)/.test(r + s + a) && ("absolute" !== t || 0 <= ["relative", "absolute", "fixed"].indexOf(o.position)) && i.push(n)
        }
        return i.push(e.ownerDocument.body),
        e.ownerDocument !== document && i.push(e.ownerDocument.defaultView),
        i
    }
    function o() {
        p && document.body.removeChild(p),
        p = null
    }
    function C(e) {
        var t, i = void 0, n = (e === document ? e = (i = document).documentElement : i = e.ownerDocument,
        i.documentElement), e = r(e), o = ((o = p) && document.body.contains(o) || ((o = document.createElement("div")).setAttribute("data-tether-id", u()),
        A(o.style, {
            top: 0,
            left: 0,
            position: "absolute"
        }),
        document.body.appendChild(o),
        p = o),
        t = o.getAttribute("data-tether-id"),
        void 0 === f[t] && (f[t] = r(o),
        I(function() {
            delete f[t]
        })),
        f[t]);
        return e.top -= o.top,
        e.left -= o.left,
        void 0 === e.width && (e.width = document.body.scrollWidth - e.left - e.right),
        void 0 === e.height && (e.height = document.body.scrollHeight - e.top - e.bottom),
        e.top = e.top - n.clientTop,
        e.left = e.left - n.clientLeft,
        e.right = i.body.clientWidth - e.width - e.left,
        e.bottom = i.body.clientHeight - e.height - e.top,
        e
    }
    function S(e) {
        return e.offsetParent || document.documentElement
    }
    function x() {
        var e, t, i;
        return B || ((t = document.createElement("div")).style.width = "100%",
        t.style.height = "200px",
        i = document.createElement("div"),
        A(i.style, {
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
            visibility: "hidden",
            width: "200px",
            height: "150px",
            overflow: "hidden"
        }),
        i.appendChild(t),
        document.body.appendChild(i),
        e = t.offsetWidth,
        i.style.overflow = "scroll",
        e === (t = t.offsetWidth) && (t = i.clientWidth),
        document.body.removeChild(i),
        B = {
            width: i = e - t,
            height: i
        })
    }
    function A() {
        var i = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]
          , e = [];
        return Array.prototype.push.apply(e, arguments),
        e.slice(1).forEach(function(e) {
            if (e)
                for (var t in e)
                    !{}.hasOwnProperty.call(e, t) || (i[t] = e[t])
        }),
        i
    }
    function a(t, e) {
        void 0 !== t.classList ? e.split(" ").forEach(function(e) {
            e.trim() && t.classList.remove(e)
        }) : (e = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)","gi"),
        e = i(t).replace(e, " "),
        d(t, e))
    }
    function l(t, e) {
        void 0 !== t.classList ? e.split(" ").forEach(function(e) {
            e.trim() && t.classList.add(e)
        }) : (a(t, e),
        e = i(t) + " " + e,
        d(t, e))
    }
    function c(e, t) {
        return void 0 !== e.classList ? e.classList.contains(t) : (e = i(e),
        new RegExp("(^| )" + t + "( |$)","gi").test(e))
    }
    function i(e) {
        return e.className instanceof e.ownerDocument.defaultView.SVGAnimatedString ? e.className.baseVal : e.className
    }
    function d(e, t) {
        e.setAttribute("class", t)
    }
    function E(t, i, e) {
        e.forEach(function(e) {
            -1 === i.indexOf(e) && c(t, e) && a(t, e)
        }),
        i.forEach(function(e) {
            c(t, e) || l(t, e)
        })
    }
    function n(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function e() {
        return "object" == typeof performance && "function" == typeof performance.now ? performance.now() : +new Date
    }
    function k() {
        for (var i = {
            top: 0,
            left: 0
        }, e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return t.forEach(function(e) {
            var t = e.top
              , e = e.left;
            "string" == typeof t && (t = parseFloat(t, 10)),
            "string" == typeof e && (e = parseFloat(e, 10)),
            i.top += t,
            i.left += e
        }),
        i
    }
    function T(e, t) {
        return "string" == typeof e.left && -1 !== e.left.indexOf("%") && (e.left = parseFloat(e.left, 10) / 100 * t.width),
        "string" == typeof e.top && -1 !== e.top.indexOf("%") && (e.top = parseFloat(e.top, 10) / 100 * t.height),
        e
    }
    var j = void 0;
    function h(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    void 0 === j && (j = {
        modules: []
    });
    var t, p = null, u = (t = 0,
    function() {
        return ++t
    }
    ), f = {}, B = null, N = [], I = function(e) {
        N.push(e)
    }, M = function() {
        for (var e = void 0; e = N.pop(); )
            e()
    }, H = ((P = function(e, t, i) {
        return t && h(e.prototype, t),
        i && h(e, i),
        e
    }
    )(m, [{
        key: "on",
        value: function(e, t, i) {
            var n = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3];
            void 0 === this.bindings && (this.bindings = {}),
            void 0 === this.bindings[e] && (this.bindings[e] = []),
            this.bindings[e].push({
                handler: t,
                ctx: i,
                once: n
            })
        }
    }, {
        key: "once",
        value: function(e, t, i) {
            this.on(e, t, i, !0)
        }
    }, {
        key: "off",
        value: function(e, t) {
            if (void 0 !== this.bindings && void 0 !== this.bindings[e])
                if (void 0 === t)
                    delete this.bindings[e];
                else
                    for (var i = 0; i < this.bindings[e].length; )
                        this.bindings[e][i].handler === t ? this.bindings[e].splice(i, 1) : ++i
        }
    }, {
        key: "trigger",
        value: function(e) {
            if (void 0 !== this.bindings && this.bindings[e]) {
                for (var t = 0, i = arguments.length, n = Array(1 < i ? i - 1 : 0), o = 1; o < i; o++)
                    n[o - 1] = arguments[o];
                for (; t < this.bindings[e].length; ) {
                    var s = this.bindings[e][t]
                      , r = s.handler
                      , a = s.ctx
                      , s = s.once
                      , a = void 0 === a ? this : a;
                    r.apply(a, n),
                    s ? this.bindings[e].splice(t, 1) : ++t
                }
            }
        }
    }]),
    m);
    function m() {
        n(this, m)
    }
    j.Utils = {
        getActualBoundingClientRect: r,
        getScrollParents: s,
        getBounds: C,
        getOffsetParent: S,
        extend: A,
        addClass: l,
        removeClass: a,
        hasClass: c,
        updateClasses: E,
        defer: I,
        flush: M,
        uniqueId: u,
        Evented: H,
        getScrollBarSize: x,
        removeUtilElements: o
    };
    var D = function(e, t) {
        if (Array.isArray(e))
            return e;
        if (Symbol.iterator in Object(e)) {
            var i = t
              , n = []
              , o = !0
              , t = !1
              , s = void 0;
            try {
                for (var r, a = e[Symbol.iterator](); !(o = (r = a.next()).done) && (n.push(r.value),
                !i || n.length !== i); o = !0)
                    ;
            } catch (e) {
                t = !0,
                s = e
            } finally {
                try {
                    !o && a.return && a.return()
                } finally {
                    if (t)
                        throw s
                }
            }
            return n
        }
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
      , P = function(e, t, i) {
        return t && Q(e.prototype, t),
        i && Q(e, i),
        e
    };
    function Q(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    if (void 0 === j)
        throw new Error("You must include the utils.js file before tether.js");
    function R() {
        b.forEach(function(e) {
            e.position(!1)
        }),
        M()
    }
    var g, v, y, s = (O = j.Utils).getScrollParents, C = O.getBounds, S = O.getOffsetParent, A = O.extend, l = O.addClass, a = O.removeClass, E = O.updateClasses, I = O.defer, M = O.flush, x = O.getScrollBarSize, o = O.removeUtilElements, w = function() {
        if ("undefined" == typeof document)
            return "";
        for (var e = document.createElement("div"), t = ["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"], i = 0; i < t.length; ++i) {
            var n = t[i];
            if (void 0 !== e.style[n])
                return n
        }
    }(), b = [];
    function F() {
        return void 0 !== v && 16 < v ? (v = Math.min(v - 16, 250),
        void (y = setTimeout(F, 250))) : void (void 0 !== g && e() - g < 10 || (null != y && (clearTimeout(y),
        y = null),
        g = e(),
        R(),
        v = e() - g))
    }
    y = v = g = null,
    "undefined" != typeof window && void 0 !== window.addEventListener && ["resize", "scroll", "touchmove"].forEach(function(e) {
        window.addEventListener(e, F)
    });
    function W(e) {
        var t = e.left
          , i = e.top;
        return {
            left: t = void 0 !== $[e.left] ? $[e.left] : t,
            top: i = void 0 !== $[e.top] ? $[e.top] : i
        }
    }
    function _(e) {
        return e = e.split(" "),
        {
            top: (e = D(e, 2))[0],
            left: e[1]
        }
    }
    var z = {
        center: "center",
        left: "right",
        right: "left"
    }
      , G = {
        middle: "middle",
        top: "bottom",
        bottom: "top"
    }
      , $ = {
        top: 0,
        left: 0,
        middle: "50%",
        center: "50%",
        bottom: "100%",
        right: "100%"
    }
      , Y = _
      , L = function() {
        function i(e) {
            var t = this;
            n(this, i),
            function(e, t, i) {
                for (var n = !0; n; ) {
                    var o = e
                      , s = t
                      , r = i
                      , n = !1
                      , a = (null === o && (o = Function.prototype),
                    Object.getOwnPropertyDescriptor(o, s));
                    if (void 0 !== a)
                        return "value"in a ? a.value : void 0 === (a = a.get) ? void 0 : a.call(r);
                    a = Object.getPrototypeOf(o);
                    if (null === a)
                        return;
                    e = a,
                    t = s,
                    i = r,
                    n = !0
                }
            }(Object.getPrototypeOf(i.prototype), "constructor", this).call(this),
            this.position = this.position.bind(this),
            b.push(this),
            this.history = [],
            this.setOptions(e, !1),
            j.modules.forEach(function(e) {
                void 0 !== e.initialize && e.initialize.call(t)
            }),
            this.position()
        }
        var e = i
          , t = H;
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        return e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t),
        P(i, [{
            key: "getClass",
            value: function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0]
                  , t = this.options.classes;
                return void 0 !== t && t[e] ? this.options.classes[e] : this.options.classPrefix ? this.options.classPrefix + "-" + e : e
            }
        }, {
            key: "setOptions",
            value: function(e) {
                var t = this
                  , i = arguments.length <= 1 || void 0 === arguments[1] || arguments[1]
                  , e = (this.options = A({
                    offset: "0 0",
                    targetOffset: "0 0",
                    targetAttachment: "auto auto",
                    classPrefix: "tether"
                }, e),
                this.options)
                  , n = e.element
                  , o = e.target
                  , e = e.targetModifier;
                if (this.element = n,
                this.target = o,
                this.targetModifier = e,
                "viewport" === this.target ? (this.target = document.body,
                this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body,
                this.targetModifier = "scroll-handle"),
                ["element", "target"].forEach(function(e) {
                    if (void 0 === t[e])
                        throw new Error("Tether Error: Both element and target must be defined");
                    void 0 !== t[e].jquery ? t[e] = t[e][0] : "string" == typeof t[e] && (t[e] = document.querySelector(t[e]))
                }),
                l(this.element, this.getClass("element")),
                !1 !== this.options.addTargetClasses && l(this.target, this.getClass("target")),
                !this.options.attachment)
                    throw new Error("Tether Error: You must provide an attachment");
                this.targetAttachment = Y(this.options.targetAttachment),
                this.attachment = Y(this.options.attachment),
                this.offset = _(this.options.offset),
                this.targetOffset = _(this.options.targetOffset),
                void 0 !== this.scrollParents && this.disable(),
                "scroll-handle" === this.targetModifier ? this.scrollParents = [this.target] : this.scrollParents = s(this.target),
                !1 !== this.options.enabled && this.enable(i)
            }
        }, {
            key: "getTargetBounds",
            value: function() {
                var e, t, i, n, o, s;
                return void 0 === this.targetModifier ? C(this.target) : "visible" === this.targetModifier ? this.target === document.body ? {
                    top: pageYOffset,
                    left: pageXOffset,
                    height: innerHeight,
                    width: innerWidth
                } : ((n = {
                    height: (e = C(this.target)).height,
                    width: e.width,
                    top: e.top,
                    left: e.left
                }).height = Math.min(n.height, e.height - (pageYOffset - e.top)),
                n.height = Math.min(n.height, e.height - (e.top + e.height - (pageYOffset + innerHeight))),
                n.height = Math.min(innerHeight, n.height),
                n.height -= 2,
                n.width = Math.min(n.width, e.width - (pageXOffset - e.left)),
                n.width = Math.min(n.width, e.width - (e.left + e.width - (pageXOffset + innerWidth))),
                n.width = Math.min(innerWidth, n.width),
                n.width -= 2,
                n.top < pageYOffset && (n.top = pageYOffset),
                n.left < pageXOffset && (n.left = pageXOffset),
                n) : "scroll-handle" === this.targetModifier ? (e = void 0,
                e = (s = this.target) === document.body ? (s = document.documentElement,
                {
                    left: pageXOffset,
                    top: pageYOffset,
                    height: innerHeight,
                    width: innerWidth
                }) : C(s),
                t = getComputedStyle(s),
                i = 0,
                (s.scrollWidth > s.clientWidth || 0 <= [t.overflow, t.overflowX].indexOf("scroll") || this.target !== document.body) && (i = 15),
                n = {
                    width: 15,
                    height: .975 * (i = e.height - parseFloat(t.borderTopWidth) - parseFloat(t.borderBottomWidth) - i) * (i / s.scrollHeight),
                    left: e.left + e.width - parseFloat(t.borderLeftWidth) - 15
                },
                o = 0,
                i < 408 && this.target === document.body && (o = -11e-5 * Math.pow(i, 2) - .00727 * i + 22.58),
                this.target !== document.body && (n.height = Math.max(n.height, 24)),
                s = this.target.scrollTop / (s.scrollHeight - i),
                n.top = s * (i - n.height - o) + e.top + parseFloat(t.borderTopWidth),
                this.target === document.body && (n.height = Math.max(n.height, 24)),
                n) : void 0
            }
        }, {
            key: "clearCache",
            value: function() {
                this._cache = {}
            }
        }, {
            key: "cache",
            value: function(e, t) {
                return void 0 === this._cache && (this._cache = {}),
                void 0 === this._cache[e] && (this._cache[e] = t.call(this)),
                this._cache[e]
            }
        }, {
            key: "enable",
            value: function() {
                var t = this
                  , e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                !1 !== this.options.addTargetClasses && l(this.target, this.getClass("enabled")),
                l(this.element, this.getClass("enabled")),
                this.enabled = !0,
                this.scrollParents.forEach(function(e) {
                    e !== t.target.ownerDocument && e.addEventListener("scroll", t.position)
                }),
                e && this.position()
            }
        }, {
            key: "disable",
            value: function() {
                var t = this;
                a(this.target, this.getClass("enabled")),
                a(this.element, this.getClass("enabled")),
                this.enabled = !1,
                void 0 !== this.scrollParents && this.scrollParents.forEach(function(e) {
                    e.removeEventListener("scroll", t.position)
                })
            }
        }, {
            key: "destroy",
            value: function() {
                var i = this;
                this.disable(),
                b.forEach(function(e, t) {
                    e === i && b.splice(t, 1)
                }),
                0 === b.length && o()
            }
        }, {
            key: "updateAttachClasses",
            value: function(e, t) {
                var i = this
                  , n = (e = e || this.attachment,
                t = t || this.targetAttachment,
                void 0 !== this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length),
                void 0 === this._addAttachClasses && (this._addAttachClasses = []),
                this._addAttachClasses)
                  , o = (e.top && n.push(this.getClass("element-attached") + "-" + e.top),
                e.left && n.push(this.getClass("element-attached") + "-" + e.left),
                t.top && n.push(this.getClass("target-attached") + "-" + t.top),
                t.left && n.push(this.getClass("target-attached") + "-" + t.left),
                []);
                ["left", "top", "bottom", "right", "middle", "center"].forEach(function(e) {
                    o.push(i.getClass("element-attached") + "-" + e),
                    o.push(i.getClass("target-attached") + "-" + e)
                }),
                I(function() {
                    void 0 !== i._addAttachClasses && (E(i.element, i._addAttachClasses, o),
                    !1 !== i.options.addTargetClasses && E(i.target, i._addAttachClasses, o),
                    delete i._addAttachClasses)
                })
            }
        }, {
            key: "position",
            value: function() {
                var e, t, i, n = this, o = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                if (this.enabled) {
                    this.clearCache();
                    d = this.targetAttachment,
                    l = this.attachment,
                    a = d.left,
                    d = d.top;
                    for (var s = {
                        left: a = "auto" === a ? z[l.left] : a,
                        top: d = "auto" === d ? G[l.top] : d
                    }, r = (this.updateAttachClasses(this.attachment, s),
                    this.cache("element-bounds", function() {
                        return C(n.element)
                    })), a = r.width, l = r.height, c = (0 === a && 0 === l && void 0 !== this.lastSize ? (a = (d = this.lastSize).width,
                    l = d.height) : this.lastSize = {
                        width: a,
                        height: l
                    },
                    this.cache("target-bounds", function() {
                        return n.getTargetBounds()
                    })), d = c, h = T(W(this.attachment), {
                        width: a,
                        height: l
                    }), p = T(W(s), d), u = T(this.offset, {
                        width: a,
                        height: l
                    }), f = T(this.targetOffset, d), h = k(h, u), p = k(p, f), m = c.left + p.left - h.left, g = c.top + p.top - h.top, v = 0; v < j.modules.length; ++v) {
                        var y = j.modules[v].position.call(this, {
                            left: m,
                            top: g,
                            targetAttachment: s,
                            targetPos: c,
                            elementPos: r,
                            offset: h,
                            targetOffset: p,
                            manualOffset: u,
                            manualTargetOffset: f,
                            scrollbarSize: A,
                            attachment: this.attachment
                        });
                        if (!1 === y)
                            return !1;
                        void 0 !== y && "object" == typeof y && (g = y.top,
                        m = y.left)
                    }
                    var d = {
                        page: {
                            top: g,
                            left: m
                        },
                        viewport: {
                            top: g - pageYOffset,
                            bottom: pageYOffset - g - l + innerHeight,
                            left: m - pageXOffset,
                            right: pageXOffset - m - a + innerWidth
                        }
                    }
                      , w = this.target.ownerDocument
                      , b = w.defaultView
                      , A = void 0;
                    return b.innerHeight > w.documentElement.clientHeight && (A = this.cache("scrollbar-size", x),
                    d.viewport.bottom -= A.height),
                    b.innerWidth > w.documentElement.clientWidth && (A = this.cache("scrollbar-size", x),
                    d.viewport.right -= A.width),
                    -1 !== ["", "static"].indexOf(w.body.style.position) && -1 !== ["", "static"].indexOf(w.body.parentElement.style.position) || (d.page.bottom = w.body.scrollHeight - g - l,
                    d.page.right = w.body.scrollWidth - m - a),
                    void 0 !== this.options.optimizations && !1 !== this.options.optimizations.moveElement && void 0 === this.targetModifier && (e = n.cache("target-offsetparent", function() {
                        return S(n.target)
                    }),
                    b = n.cache("target-offsetparent-bounds", function() {
                        return C(e)
                    }),
                    t = getComputedStyle(e),
                    l = b,
                    i = {},
                    ["Top", "Left", "Bottom", "Right"].forEach(function(e) {
                        i[e.toLowerCase()] = parseFloat(t["border" + e + "Width"])
                    }),
                    b.right = w.body.scrollWidth - b.left - l.width + i.right,
                    b.bottom = w.body.scrollHeight - b.top - l.height + i.bottom,
                    d.page.top >= b.top + i.top && d.page.bottom >= b.bottom && d.page.left >= b.left + i.left && d.page.right >= b.right && (l = e.scrollTop,
                    a = e.scrollLeft,
                    d.offset = {
                        top: d.page.top - b.top + l - i.top,
                        left: d.page.left - b.left + a - i.left
                    })),
                    this.move(d),
                    this.history.unshift(d),
                    3 < this.history.length && this.history.pop(),
                    o && M(),
                    !0
                }
            }
        }, {
            key: "move",
            value: function(e) {
                var t, i, n, o = this;
                if (void 0 !== this.element.parentNode) {
                    var s, r = {};
                    for (s in e)
                        for (var a in r[s] = {},
                        e[s]) {
                            for (var l = !1, c = 0; c < this.history.length; ++c) {
                                var d = this.history[c];
                                if (void 0 !== d[s] && !function(e, t, i) {
                                    return t <= e + (i = arguments.length <= 2 || void 0 === i ? 1 : i) && e - i <= t
                                }(d[s][a], e[s][a])) {
                                    l = !0;
                                    break
                                }
                            }
                            l || (r[s][a] = !0)
                        }
                    var h = {
                        top: "",
                        left: "",
                        right: "",
                        bottom: ""
                    }
                      , p = function(e, t) {
                        var i, n;
                        !1 !== (void 0 !== o.options.optimizations ? o.options.optimizations.gpu : null) ? (n = i = void 0,
                        i = e.top ? (h.top = 0,
                        t.top) : (h.bottom = 0,
                        -t.bottom),
                        n = e.left ? (h.left = 0,
                        t.left) : (h.right = 0,
                        -t.right),
                        "number" == typeof window.devicePixelRatio && devicePixelRatio % 1 == 0 && (n = Math.round(n * devicePixelRatio) / devicePixelRatio,
                        i = Math.round(i * devicePixelRatio) / devicePixelRatio),
                        h[w] = "translateX(" + n + "px) translateY(" + i + "px)",
                        "msTransform" !== w && (h[w] += " translateZ(0)")) : (e.top ? h.top = t.top + "px" : h.bottom = t.bottom + "px",
                        e.left ? h.left = t.left + "px" : h.right = t.right + "px")
                    }
                      , u = !1;
                    if ((r.page.top || r.page.bottom) && (r.page.left || r.page.right) ? (h.position = "absolute",
                    p(r.page, e.page)) : (r.viewport.top || r.viewport.bottom) && (r.viewport.left || r.viewport.right) ? (h.position = "fixed",
                    p(r.viewport, e.viewport)) : void 0 !== r.offset && r.offset.top && r.offset.left ? (h.position = "absolute",
                    n = o.cache("target-offsetparent", function() {
                        return S(o.target)
                    }),
                    S(o.element) !== n && I(function() {
                        o.element.parentNode.removeChild(o.element),
                        n.appendChild(o.element)
                    }),
                    p(r.offset, e.offset),
                    u = !0) : (h.position = "absolute",
                    p({
                        top: !0,
                        left: !0
                    }, e.page)),
                    !u)
                        if (this.options.bodyElement)
                            this.element.parentNode !== this.options.bodyElement && this.options.bodyElement.appendChild(this.element);
                        else {
                            for (var f = !0, m = this.element.parentNode; m && 1 === m.nodeType && "BODY" !== m.tagName && (i = void 0,
                            ((i = (t = m).ownerDocument).fullscreenElement || i.webkitFullscreenElement || i.mozFullScreenElement || i.msFullscreenElement) !== t); ) {
                                if ("static" !== getComputedStyle(m).position) {
                                    f = !1;
                                    break
                                }
                                m = m.parentNode
                            }
                            f || (this.element.parentNode.removeChild(this.element),
                            this.element.ownerDocument.body.appendChild(this.element))
                        }
                    var g = {}
                      , v = !1;
                    for (a in h) {
                        var y = h[a];
                        this.element.style[a] !== y && (v = !0,
                        g[a] = y)
                    }
                    v && I(function() {
                        A(o.element.style, g),
                        o.trigger("repositioned")
                    })
                }
            }
        }]),
        i
    }()
      , L = (L.modules = [],
    j.position = R,
    A(L, j))
      , D = function(e, t) {
        if (Array.isArray(e))
            return e;
        if (Symbol.iterator in Object(e)) {
            var i = t
              , n = []
              , o = !0
              , t = !1
              , s = void 0;
            try {
                for (var r, a = e[Symbol.iterator](); !(o = (r = a.next()).done) && (n.push(r.value),
                !i || n.length !== i); o = !0)
                    ;
            } catch (e) {
                t = !0,
                s = e
            } finally {
                try {
                    !o && a.return && a.return()
                } finally {
                    if (t)
                        throw s
                }
            }
            return n
        }
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
      , C = (O = j.Utils).getBounds
      , A = O.extend
      , E = O.updateClasses
      , I = O.defer
      , U = ["left", "top", "right", "bottom"];
    j.modules.push({
        position: function(e) {
            var d, h, p, u, i, f, m, g, v = this, y = e.top, w = e.left, b = e.targetAttachment;
            return !this.options.constraints || (e = this.cache("element-bounds", function() {
                return C(v.element)
            }),
            h = e.height,
            0 === (d = e.width) && 0 === h && void 0 !== this.lastSize && (e = this.lastSize,
            d = e.width,
            h = e.height),
            e = this.cache("target-bounds", function() {
                return v.getTargetBounds()
            }),
            p = e.height,
            u = e.width,
            i = [this.getClass("pinned"), this.getClass("out-of-bounds")],
            this.options.constraints.forEach(function(e) {
                var t = e.outOfBoundsClass
                  , e = e.pinnedClass;
                t && i.push(t),
                e && i.push(e)
            }),
            i.forEach(function(t) {
                ["left", "top", "right", "bottom"].forEach(function(e) {
                    i.push(t + "-" + e)
                })
            }),
            f = [],
            m = A({}, b),
            g = A({}, this.attachment),
            this.options.constraints.forEach(function(e) {
                var t, i, n, o, s, r = e.to, a = e.attachment, e = e.pin, l = void 0, c = void 0, r = (l = 0 <= (a = void 0 === a ? "" : a).indexOf(" ") ? (t = a.split(" "),
                c = (t = D(t, 2))[0],
                t[1]) : c = a,
                t = v,
                "scrollParent" === (i = r) ? i = t.scrollParents[0] : "window" === i && (i = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]),
                void 0 !== (i = i === document ? i.documentElement : i).nodeType && (a = C(t = i),
                r = a,
                n = getComputedStyle(i),
                i = [r.left, r.top, a.width + r.left, a.height + r.top],
                t.ownerDocument !== document && (a = t.ownerDocument.defaultView,
                i[0] += a.pageXOffset,
                i[1] += a.pageYOffset,
                i[2] += a.pageXOffset,
                i[3] += a.pageYOffset),
                U.forEach(function(e, t) {
                    "Top" === (e = e[0].toUpperCase() + e.substr(1)) || "Left" === e ? i[t] += parseFloat(n["border" + e + "Width"]) : i[t] -= parseFloat(n["border" + e + "Width"])
                })),
                i), a = ("target" !== c && "both" !== c || (y < r[1] && "top" === m.top && (y += p,
                m.top = "bottom"),
                y + h > r[3] && "bottom" === m.top && (y -= p,
                m.top = "top")),
                "together" === c && ("top" === m.top && ("bottom" === g.top && y < r[1] ? (y += p,
                m.top = "bottom",
                y += h,
                g.top = "top") : "top" === g.top && y + h > r[3] && y - (h - p) >= r[1] && (y -= h - p,
                m.top = "bottom",
                g.top = "bottom")),
                "bottom" === m.top && ("top" === g.top && y + h > r[3] ? (y -= p,
                m.top = "top",
                y -= h,
                g.top = "bottom") : "bottom" === g.top && y < r[1] && y + (2 * h - p) <= r[3] && (y += h - p,
                m.top = "top",
                g.top = "top")),
                "middle" === m.top) && (y + h > r[3] && "top" === g.top ? (y -= h,
                g.top = "bottom") : y < r[1] && "bottom" === g.top && (y += h,
                g.top = "top")),
                "target" !== l && "both" !== l || (w < r[0] && "left" === m.left && (w += u,
                m.left = "right"),
                w + d > r[2] && "right" === m.left && (w -= u,
                m.left = "left")),
                "together" === l && (w < r[0] && "left" === m.left ? "right" === g.left ? (w += u,
                m.left = "right",
                w += d,
                g.left = "left") : "left" === g.left && (w += u,
                m.left = "right",
                w -= d,
                g.left = "right") : w + d > r[2] && "right" === m.left ? "left" === g.left ? (w -= u,
                m.left = "left",
                w -= d,
                g.left = "right") : "right" === g.left && (w -= u,
                m.left = "left",
                w += d,
                g.left = "left") : "center" === m.left && (w + d > r[2] && "left" === g.left ? (w -= d,
                g.left = "right") : w < r[0] && "right" === g.left && (w += d,
                g.left = "left"))),
                "element" !== c && "both" !== c || (y < r[1] && "bottom" === g.top && (y += h,
                g.top = "top"),
                y + h > r[3] && "top" === g.top && (y -= h,
                g.top = "bottom")),
                "element" !== l && "both" !== l || (w < r[0] && ("right" === g.left ? (w += d,
                g.left = "left") : "center" === g.left && (w += d / 2,
                g.left = "left")),
                w + d > r[2] && ("left" === g.left ? (w -= d,
                g.left = "right") : "center" === g.left && (w -= d / 2,
                g.left = "right"))),
                "string" == typeof e ? e = e.split(",").map(function(e) {
                    return e.trim()
                }) : !0 === e && (e = ["top", "left", "right", "bottom"]),
                e = e || [],
                []), c = [];
                y < r[1] && (0 <= e.indexOf("top") ? (y = r[1],
                a) : c).push("top"),
                y + h > r[3] && (0 <= e.indexOf("bottom") ? (y = r[3] - h,
                a) : c).push("bottom"),
                w < r[0] && (0 <= e.indexOf("left") ? (w = r[0],
                a) : c).push("left"),
                w + d > r[2] && (0 <= e.indexOf("right") ? (w = r[2] - d,
                a) : c).push("right"),
                a.length && (s = void 0 !== v.options.pinnedClass ? v.options.pinnedClass : v.getClass("pinned"),
                f.push(s),
                a.forEach(function(e) {
                    f.push(s + "-" + e)
                })),
                c.length && (o = void 0 !== v.options.outOfBoundsClass ? v.options.outOfBoundsClass : v.getClass("out-of-bounds"),
                f.push(o),
                c.forEach(function(e) {
                    f.push(o + "-" + e)
                })),
                (0 <= a.indexOf("left") || 0 <= a.indexOf("right")) && (g.left = m.left = !1),
                (0 <= a.indexOf("top") || 0 <= a.indexOf("bottom")) && (g.top = m.top = !1),
                m.top === b.top && m.left === b.left && g.top === v.attachment.top && g.left === v.attachment.left || (v.updateAttachClasses(g, m),
                v.trigger("update", {
                    attachment: g,
                    targetAttachment: m
                }))
            }),
            I(function() {
                !1 !== v.options.addTargetClasses && E(v.target, f, i),
                E(v.element, f, i)
            }),
            {
                top: y,
                left: w
            })
        }
    });
    var O, C = (O = j.Utils).getBounds, E = O.updateClasses, I = O.defer, D = (j.modules.push({
        position: function(e) {
            var t = this
              , i = e.top
              , n = e.left
              , e = this.cache("element-bounds", function() {
                return C(t.element)
            })
              , o = e.height
              , e = e.width
              , s = this.getTargetBounds()
              , r = i + o
              , a = n + e
              , l = []
              , c = (i <= s.bottom && r >= s.top && ["left", "right"].forEach(function(e) {
                var t = s[e];
                t !== n && t !== a || l.push(e)
            }),
            n <= s.right && a >= s.left && ["top", "bottom"].forEach(function(e) {
                var t = s[e];
                t !== i && t !== r || l.push(e)
            }),
            [])
              , d = [];
            return c.push(this.getClass("abutted")),
            ["left", "top", "right", "bottom"].forEach(function(e) {
                c.push(t.getClass("abutted") + "-" + e)
            }),
            l.length && d.push(this.getClass("abutted")),
            l.forEach(function(e) {
                d.push(t.getClass("abutted") + "-" + e)
            }),
            I(function() {
                !1 !== t.options.addTargetClasses && E(t.target, d, c),
                E(t.element, d, c)
            }),
            !0
        }
    }),
    function(e, t) {
        if (Array.isArray(e))
            return e;
        if (Symbol.iterator in Object(e)) {
            var i = t
              , n = []
              , o = !0
              , t = !1
              , s = void 0;
            try {
                for (var r, a = e[Symbol.iterator](); !(o = (r = a.next()).done) && (n.push(r.value),
                !i || n.length !== i); o = !0)
                    ;
            } catch (e) {
                t = !0,
                s = e
            } finally {
                try {
                    !o && a.return && a.return()
                } finally {
                    if (t)
                        throw s
                }
            }
            return n
        }
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
    );
    return j.modules.push({
        position: function(e) {
            var t, i, n, o, s = e.top, e = e.left;
            if (this.options.shift)
                return t = this.options.shift,
                o = n = void 0,
                o = "string" == typeof (t = "function" == typeof this.options.shift ? this.options.shift.call(this, {
                    top: s,
                    left: e
                }) : t) ? ((t = t.split(" "))[1] = t[1] || t[0],
                n = (i = D(t, 2))[0],
                o = i[1],
                n = parseFloat(n, 10),
                parseFloat(o, 10)) : (n = t.top,
                t.left),
                {
                    top: s += n,
                    left: e += o
                }
        }
    }),
    L
}),
"undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
!function() {
    var e = jQuery.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || 4 <= e[0])
        throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
}(),
function() {
    function A(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    var a, B, N, H, P, Q, R, F, W, z, G, Y, U, V, q, K, X, o, i, J, Z, ee, te, ie, ne, oe, se, re, ae, le, ce, de, he, pe, ue, fe, me, s, t, ge, e, ve, ye, we, r, be, Ae, Ce, l, Se, xe, Ee, ke, Te, c, je, Ie, n, Me, d, De, _e, $e, Le, Oe, Be, Ne, h, p, He, Pe, Qe, Re, Fe, We, ze, Ge, Ye, Ue, Ve, qe, Ke, Xe, u, Je, Ze, f, et, tt, it, m, g, nt, v, ot, st, rt, at, lt, ct, dt, ht, pt, ut, ft, mt, y, gt, vt, w, yt, wt, bt, At, Ct, St, xt, Et, kt, b, Tt, jt, C, It, Mt, Dt, _t, $t, Lt, Ot, Bt, Nt, Ht, S, Pt, Qt, x, Rt, Ft, Wt, zt, Gt, Yt, Ut, Vt, qt, E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    , k = function(e, t, i) {
        return t && Jt(e.prototype, t),
        i && Jt(e, i),
        e
    }, T = (Ot = jQuery,
    Bt = !1,
    Nt = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
    },
    Ht = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            for (; e += ~~(1e6 * Math.random()),
            document.getElementById(e); )
                ;
            return e
        },
        getSelectorFromElement: function(e) {
            var t = e.getAttribute("data-target");
            return t || (t = e.getAttribute("href") || "",
            t = /^#[a-z]/i.test(t) ? t : null),
            t
        },
        reflow: function(e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function(e) {
            Ot(e).trigger(Bt.end)
        },
        supportsTransitionEnd: function() {
            return Boolean(Bt)
        },
        typeCheckConfig: function(e, t, i) {
            for (var n in i)
                if (i.hasOwnProperty(n)) {
                    var o = i[n]
                      , s = t[n]
                      , r = s && ((r = s)[0] || r).nodeType ? "element" : {}.toString.call(s).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
                    if (!new RegExp(o).test(r))
                        throw new Error(e.toUpperCase() + ': Option "' + n + '" provided type "' + r + '" but expected type "' + o + '".')
                }
            var r
        }
    },
    Bt = function() {
        if (!window.QUnit) {
            var e, t = document.createElement("bootstrap");
            for (e in Nt)
                if (void 0 !== t.style[e])
                    return {
                        end: Nt[e]
                    }
        }
        return !1
    }(),
    Ot.fn.emulateTransitionEnd = Xt,
    Ht.supportsTransitionEnd() && (Ot.event.special[Ht.TRANSITION_END] = {
        bindType: Bt.end,
        delegateType: Bt.end,
        handle: function(e) {
            if (Ot(e.target).is(this))
                return e.handleObj.handler.apply(this, arguments)
        }
    }),
    Ht), j = (b = jQuery,
    Tt = "alert",
    C = "." + (jt = "bs.alert"),
    It = b.fn[Tt],
    Mt = {
        CLOSE: "close" + C,
        CLOSED: "closed" + C,
        CLICK_DATA_API: "click" + C + ".data-api"
    },
    Dt = "alert",
    _t = "fade",
    $t = "show",
    O.prototype.close = function(e) {
        e = e || this._element;
        e = this._getRootElement(e);
        this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
    }
    ,
    O.prototype.dispose = function() {
        b.removeData(this._element, jt),
        this._element = null
    }
    ,
    O.prototype._getRootElement = function(e) {
        var t = T.getSelectorFromElement(e)
          , i = !1;
        return i = (i = t ? b(t)[0] : i) || b(e).closest("." + Dt)[0]
    }
    ,
    O.prototype._triggerCloseEvent = function(e) {
        var t = b.Event(Mt.CLOSE);
        return b(e).trigger(t),
        t
    }
    ,
    O.prototype._removeElement = function(t) {
        var i = this;
        return b(t).removeClass($t),
        T.supportsTransitionEnd() && b(t).hasClass(_t) ? void b(t).one(T.TRANSITION_END, function(e) {
            return i._destroyElement(t, e)
        }).emulateTransitionEnd(150) : void this._destroyElement(t)
    }
    ,
    O.prototype._destroyElement = function(e) {
        b(e).detach().trigger(Mt.CLOSED).remove()
    }
    ,
    O._jQueryInterface = function(i) {
        return this.each(function() {
            var e = b(this)
              , t = e.data(jt);
            t || (t = new O(this),
            e.data(jt, t)),
            "close" === i && t[i](this)
        })
    }
    ,
    O._handleDismiss = function(t) {
        return function(e) {
            e && e.preventDefault(),
            t.close(this)
        }
    }
    ,
    k(O, null, [{
        key: "VERSION",
        get: function() {
            return "4.0.0-alpha.6"
        }
    }]),
    Lt = O,
    b(document).on(Mt.CLICK_DATA_API, '[data-dismiss="alert"]', Lt._handleDismiss(new Lt)),
    b.fn[Tt] = Lt._jQueryInterface,
    b.fn[Tt].Constructor = Lt,
    b.fn[Tt].noConflict = function() {
        return b.fn[Tt] = It,
        Lt._jQueryInterface
    }
    ,
    y = jQuery,
    gt = "button",
    C = "." + (vt = "bs.button"),
    w = ".data-api",
    yt = y.fn[gt],
    wt = "active",
    bt = "btn",
    j = '[data-toggle^="button"]',
    Ct = '[data-toggle="buttons"]',
    St = "input",
    xt = ".active",
    Et = ".btn",
    C = {
        CLICK_DATA_API: "click" + C + w,
        FOCUS_BLUR_DATA_API: (At = "focus") + C + w + " blur" + C + w
    },
    Kt.prototype.toggle = function() {
        var e, t = !0, i = y(this._element).closest(Ct)[0];
        i && (e = y(this._element).find(St)[0]) && ("radio" === e.type && (e.checked && y(this._element).hasClass(wt) ? t = !1 : (i = y(i).find(xt)[0]) && y(i).removeClass(wt)),
        t && (e.checked = !y(this._element).hasClass(wt),
        y(e).trigger("change")),
        e.focus()),
        this._element.setAttribute("aria-pressed", !y(this._element).hasClass(wt)),
        t && y(this._element).toggleClass(wt)
    }
    ,
    Kt.prototype.dispose = function() {
        y.removeData(this._element, vt),
        this._element = null
    }
    ,
    Kt._jQueryInterface = function(t) {
        return this.each(function() {
            var e = y(this).data(vt);
            e || (e = new Kt(this),
            y(this).data(vt, e)),
            "toggle" === t && e[t]()
        })
    }
    ,
    k(Kt, null, [{
        key: "VERSION",
        get: function() {
            return "4.0.0-alpha.6"
        }
    }]),
    kt = Kt,
    y(document).on(C.CLICK_DATA_API, j, function(e) {
        e.preventDefault();
        e = e.target;
        y(e).hasClass(bt) || (e = y(e).closest(Et)),
        kt._jQueryInterface.call(y(e), "toggle")
    }).on(C.FOCUS_BLUR_DATA_API, j, function(e) {
        var t = y(e.target).closest(Et)[0];
        y(t).toggleClass(At, /^focus(in)?$/.test(e.type))
    }),
    y.fn[gt] = kt._jQueryInterface,
    y.fn[gt].Constructor = kt,
    y.fn[gt].noConflict = function() {
        return y.fn[gt] = yt,
        kt._jQueryInterface
    }
    ,
    u = jQuery,
    Je = "carousel",
    f = "." + (Ze = "bs.carousel"),
    w = ".data-api",
    et = u.fn[Je],
    tt = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0
    },
    it = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean"
    },
    m = {
        NEXT: "next",
        PREV: "prev",
        LEFT: "left",
        RIGHT: "right"
    },
    g = {
        SLIDE: "slide" + f,
        SLID: "slid" + f,
        KEYDOWN: "keydown" + f,
        MOUSEENTER: "mouseenter" + f,
        MOUSELEAVE: "mouseleave" + f,
        LOAD_DATA_API: "load" + f + w,
        CLICK_DATA_API: "click" + f + w
    },
    nt = "carousel",
    v = "active",
    ot = "slide",
    st = "carousel-item-right",
    rt = "carousel-item-left",
    at = "carousel-item-next",
    lt = "carousel-item-prev",
    ct = ".active",
    dt = ".active.carousel-item",
    ht = ".carousel-item",
    pt = ".carousel-item-next, .carousel-item-prev",
    ut = ".carousel-indicators",
    w = "[data-slide], [data-slide-to]",
    ft = '[data-ride="carousel"]',
    L.prototype.next = function() {
        if (this._isSliding)
            throw new Error("Carousel is sliding");
        this._slide(m.NEXT)
    }
    ,
    L.prototype.nextWhenVisible = function() {
        document.hidden || this.next()
    }
    ,
    L.prototype.prev = function() {
        if (this._isSliding)
            throw new Error("Carousel is sliding");
        this._slide(m.PREVIOUS)
    }
    ,
    L.prototype.pause = function(e) {
        e || (this._isPaused = !0),
        u(this._element).find(pt)[0] && T.supportsTransitionEnd() && (T.triggerTransitionEnd(this._element),
        this.cycle(!0)),
        clearInterval(this._interval),
        this._interval = null
    }
    ,
    L.prototype.cycle = function(e) {
        e || (this._isPaused = !1),
        this._interval && (clearInterval(this._interval),
        this._interval = null),
        this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
    }
    ,
    L.prototype.to = function(e) {
        var t = this
          , i = (this._activeElement = u(this._element).find(dt)[0],
        this._getItemIndex(this._activeElement));
        e > this._items.length - 1 || e < 0 || (this._isSliding ? u(this._element).one(g.SLID, function() {
            return t.to(e)
        }) : i === e ? (this.pause(),
        this.cycle()) : this._slide(i < e ? m.NEXT : m.PREVIOUS, this._items[e]))
    }
    ,
    L.prototype.dispose = function() {
        u(this._element).off(f),
        u.removeData(this._element, Ze),
        this._items = null,
        this._config = null,
        this._element = null,
        this._interval = null,
        this._isPaused = null,
        this._isSliding = null,
        this._activeElement = null,
        this._indicatorsElement = null
    }
    ,
    L.prototype._getConfig = function(e) {
        return e = u.extend({}, tt, e),
        T.typeCheckConfig(Je, e, it),
        e
    }
    ,
    L.prototype._addEventListeners = function() {
        var t = this;
        this._config.keyboard && u(this._element).on(g.KEYDOWN, function(e) {
            return t._keydown(e)
        }),
        "hover" !== this._config.pause || "ontouchstart"in document.documentElement || u(this._element).on(g.MOUSEENTER, function(e) {
            return t.pause(e)
        }).on(g.MOUSELEAVE, function(e) {
            return t.cycle(e)
        })
    }
    ,
    L.prototype._keydown = function(e) {
        if (!/input|textarea/i.test(e.target.tagName))
            switch (e.which) {
            case 37:
                e.preventDefault(),
                this.prev();
                break;
            case 39:
                e.preventDefault(),
                this.next();
                break;
            default:
                return
            }
    }
    ,
    L.prototype._getItemIndex = function(e) {
        return this._items = u.makeArray(u(e).parent().find(ht)),
        this._items.indexOf(e)
    }
    ,
    L.prototype._getItemByDirection = function(e, t) {
        var i = e === m.NEXT
          , n = e === m.PREVIOUS
          , o = this._getItemIndex(t)
          , s = this._items.length - 1;
        return (n && 0 === o || i && o === s) && !this._config.wrap ? t : -1 == (n = (o + (e === m.PREVIOUS ? -1 : 1)) % this._items.length) ? this._items[this._items.length - 1] : this._items[n]
    }
    ,
    L.prototype._triggerSlideEvent = function(e, t) {
        e = u.Event(g.SLIDE, {
            relatedTarget: e,
            direction: t
        });
        return u(this._element).trigger(e),
        e
    }
    ,
    L.prototype._setActiveIndicatorElement = function(e) {
        this._indicatorsElement && (u(this._indicatorsElement).find(ct).removeClass(v),
        e = this._indicatorsElement.children[this._getItemIndex(e)]) && u(e).addClass(v)
    }
    ,
    L.prototype._slide = function(e, t) {
        var i, n = this, o = u(this._element).find(dt)[0], s = t || o && this._getItemByDirection(e, o), t = Boolean(this._interval), r = void 0, a = void 0, l = void 0;
        l = e === m.NEXT ? (r = rt,
        a = at,
        m.LEFT) : (r = st,
        a = lt,
        m.RIGHT),
        s && u(s).hasClass(v) ? this._isSliding = !1 : !this._triggerSlideEvent(s, l).isDefaultPrevented() && o && s && (this._isSliding = !0,
        t && this.pause(),
        this._setActiveIndicatorElement(s),
        i = u.Event(g.SLID, {
            relatedTarget: s,
            direction: l
        }),
        T.supportsTransitionEnd() && u(this._element).hasClass(ot) ? (u(s).addClass(a),
        T.reflow(s),
        u(o).addClass(r),
        u(s).addClass(r),
        u(o).one(T.TRANSITION_END, function() {
            u(s).removeClass(r + " " + a).addClass(v),
            u(o).removeClass(v + " " + a + " " + r),
            n._isSliding = !1,
            setTimeout(function() {
                return u(n._element).trigger(i)
            }, 0)
        }).emulateTransitionEnd(600)) : (u(o).removeClass(v),
        u(s).addClass(v),
        this._isSliding = !1,
        u(this._element).trigger(i)),
        t) && this.cycle()
    }
    ,
    L._jQueryInterface = function(n) {
        return this.each(function() {
            var e = u(this).data(Ze)
              , t = u.extend({}, tt, u(this).data())
              , i = ("object" === (void 0 === n ? "undefined" : E(n)) && u.extend(t, n),
            "string" == typeof n ? n : t.slide);
            if (e || (e = new L(this,t),
            u(this).data(Ze, e)),
            "number" == typeof n)
                e.to(n);
            else if ("string" == typeof i) {
                if (void 0 === e[i])
                    throw new Error('No method named "' + i + '"');
                e[i]()
            } else
                t.interval && (e.pause(),
                e.cycle())
        })
    }
    ,
    L._dataApiClickHandler = function(e) {
        var t, i, n = T.getSelectorFromElement(this);
        n && (n = u(n)[0]) && u(n).hasClass(nt) && (t = u.extend({}, u(n).data(), u(this).data()),
        (i = this.getAttribute("data-slide-to")) && (t.interval = !1),
        L._jQueryInterface.call(u(n), t),
        i && u(n).data(Ze).to(i),
        e.preventDefault())
    }
    ,
    k(L, null, [{
        key: "VERSION",
        get: function() {
            return "4.0.0-alpha.6"
        }
    }, {
        key: "Default",
        get: function() {
            return tt
        }
    }]),
    mt = L,
    u(document).on(g.CLICK_DATA_API, w, mt._dataApiClickHandler),
    u(window).on(g.LOAD_DATA_API, function() {
        u(ft).each(function() {
            var e = u(this);
            mt._jQueryInterface.call(e, e.data())
        })
    }),
    u.fn[Je] = mt._jQueryInterface,
    u.fn[Je].Constructor = mt,
    u.fn[Je].noConflict = function() {
        return u.fn[Je] = et,
        mt._jQueryInterface
    }
    ,
    p = jQuery,
    He = "collapse",
    C = "." + (Pe = "bs.collapse"),
    Qe = p.fn[He],
    Re = {
        toggle: !0,
        parent: ""
    },
    Fe = {
        toggle: "boolean",
        parent: "string"
    },
    We = {
        SHOW: "show" + C,
        SHOWN: "shown" + C,
        HIDE: "hide" + C,
        HIDDEN: "hidden" + C,
        CLICK_DATA_API: "click" + C + ".data-api"
    },
    ze = "show",
    Ge = "collapse",
    Ye = "collapsing",
    Ue = "collapsed",
    Ve = "width",
    qe = "height",
    Ke = ".card > .show, .card > .collapsing",
    C = '[data-toggle="collapse"]',
    $.prototype.toggle = function() {
        p(this._element).hasClass(ze) ? this.hide() : this.show()
    }
    ,
    $.prototype.show = function() {
        var e, t, i, n, o = this;
        if (this._isTransitioning)
            throw new Error("Collapse is transitioning");
        p(this._element).hasClass(ze) || (n = e = void 0,
        (e = this._parent && !(e = p.makeArray(p(this._parent).find(Ke))).length ? null : e) && (n = p(e).data(Pe)) && n._isTransitioning) || (i = p.Event(We.SHOW),
        p(this._element).trigger(i),
        i.isDefaultPrevented()) || (e && ($._jQueryInterface.call(p(e), "hide"),
        n || p(e).data(Pe, null)),
        t = this._getDimension(),
        p(this._element).removeClass(Ge).addClass(Ye),
        this._element.style[t] = 0,
        this._element.setAttribute("aria-expanded", !0),
        this._triggerArray.length && p(this._triggerArray).removeClass(Ue).attr("aria-expanded", !0),
        this.setTransitioning(!0),
        i = function() {
            p(o._element).removeClass(Ye).addClass(Ge).addClass(ze),
            o._element.style[t] = "",
            o.setTransitioning(!1),
            p(o._element).trigger(We.SHOWN)
        }
        ,
        T.supportsTransitionEnd() ? (n = "scroll" + (t[0].toUpperCase() + t.slice(1)),
        p(this._element).one(T.TRANSITION_END, i).emulateTransitionEnd(600),
        this._element.style[t] = this._element[n] + "px") : i())
    }
    ,
    $.prototype.hide = function() {
        var e = this;
        if (this._isTransitioning)
            throw new Error("Collapse is transitioning");
        if (p(this._element).hasClass(ze)) {
            var t, i = p.Event(We.HIDE);
            if (p(this._element).trigger(i),
            !i.isDefaultPrevented())
                return t = (i = this._getDimension()) === Ve ? "offsetWidth" : "offsetHeight",
                this._element.style[i] = this._element[t] + "px",
                T.reflow(this._element),
                p(this._element).addClass(Ye).removeClass(Ge).removeClass(ze),
                this._element.setAttribute("aria-expanded", !1),
                this._triggerArray.length && p(this._triggerArray).addClass(Ue).attr("aria-expanded", !1),
                this.setTransitioning(!0),
                t = function() {
                    e.setTransitioning(!1),
                    p(e._element).removeClass(Ye).addClass(Ge).trigger(We.HIDDEN)
                }
                ,
                this._element.style[i] = "",
                T.supportsTransitionEnd() ? void p(this._element).one(T.TRANSITION_END, t).emulateTransitionEnd(600) : void t()
        }
    }
    ,
    $.prototype.setTransitioning = function(e) {
        this._isTransitioning = e
    }
    ,
    $.prototype.dispose = function() {
        p.removeData(this._element, Pe),
        this._config = null,
        this._parent = null,
        this._element = null,
        this._triggerArray = null,
        this._isTransitioning = null
    }
    ,
    $.prototype._getConfig = function(e) {
        return (e = p.extend({}, Re, e)).toggle = Boolean(e.toggle),
        T.typeCheckConfig(He, e, Fe),
        e
    }
    ,
    $.prototype._getDimension = function() {
        return p(this._element).hasClass(Ve) ? Ve : qe
    }
    ,
    $.prototype._getParent = function() {
        var i = this
          , e = p(this._config.parent)[0]
          , t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
        return p(e).find(t).each(function(e, t) {
            i._addAriaAndCollapsedClass($._getTargetFromElement(t), [t])
        }),
        e
    }
    ,
    $.prototype._addAriaAndCollapsedClass = function(e, t) {
        var i;
        e && (i = p(e).hasClass(ze),
        e.setAttribute("aria-expanded", i),
        t.length) && p(t).toggleClass(Ue, !i).attr("aria-expanded", i)
    }
    ,
    $._getTargetFromElement = function(e) {
        e = T.getSelectorFromElement(e);
        return e ? p(e)[0] : null
    }
    ,
    $._jQueryInterface = function(n) {
        return this.each(function() {
            var e = p(this)
              , t = e.data(Pe)
              , i = p.extend({}, Re, e.data(), "object" === (void 0 === n ? "undefined" : E(n)) && n);
            if (!t && i.toggle && /show|hide/.test(n) && (i.toggle = !1),
            t || (t = new $(this,i),
            e.data(Pe, t)),
            "string" == typeof n) {
                if (void 0 === t[n])
                    throw new Error('No method named "' + n + '"');
                t[n]()
            }
        })
    }
    ,
    k($, null, [{
        key: "VERSION",
        get: function() {
            return "4.0.0-alpha.6"
        }
    }, {
        key: "Default",
        get: function() {
            return Re
        }
    }]),
    Xe = $,
    p(document).on(We.CLICK_DATA_API, C, function(e) {
        e.preventDefault();
        var e = Xe._getTargetFromElement(this)
          , t = p(e).data(Pe) ? "toggle" : p(this).data();
        Xe._jQueryInterface.call(p(e), t)
    }),
    p.fn[He] = Xe._jQueryInterface,
    p.fn[He].Constructor = Xe,
    p.fn[He].noConflict = function() {
        return p.fn[He] = Qe,
        Xe._jQueryInterface
    }
    ,
    c = jQuery,
    je = "dropdown",
    n = "." + (Ie = "bs.dropdown"),
    j = ".data-api",
    Me = c.fn[je],
    d = {
        HIDE: "hide" + n,
        HIDDEN: "hidden" + n,
        SHOW: "show" + n,
        SHOWN: "shown" + n,
        CLICK: "click" + n,
        CLICK_DATA_API: "click" + n + j,
        FOCUSIN_DATA_API: "focusin" + n + j,
        KEYDOWN_DATA_API: "keydown" + n + j
    },
    De = "dropdown-backdrop",
    _e = "disabled",
    $e = "show",
    Le = ".dropdown-backdrop",
    Oe = '[data-toggle="dropdown"]',
    j = ".dropdown form",
    w = '[role="menu"]',
    C = '[role="listbox"]',
    Be = ".navbar-nav",
    Ne = '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a',
    _.prototype.toggle = function() {
        if (this.disabled || c(this).hasClass(_e))
            return !1;
        var e = _._getParentFromElement(this)
          , t = c(e).hasClass($e);
        if (_._clearMenus(),
        t)
            return !1;
        "ontouchstart"in document.documentElement && !c(e).closest(Be).length && ((t = document.createElement("div")).className = De,
        c(t).insertBefore(this),
        c(t).on("click", _._clearMenus));
        var t = {
            relatedTarget: this
        }
          , i = c.Event(d.SHOW, t);
        return c(e).trigger(i),
        !i.isDefaultPrevented() && (this.focus(),
        this.setAttribute("aria-expanded", !0),
        c(e).toggleClass($e),
        c(e).trigger(c.Event(d.SHOWN, t)),
        !1)
    }
    ,
    _.prototype.dispose = function() {
        c.removeData(this._element, Ie),
        c(this._element).off(n),
        this._element = null
    }
    ,
    _.prototype._addEventListeners = function() {
        c(this._element).on(d.CLICK, this.toggle)
    }
    ,
    _._jQueryInterface = function(t) {
        return this.each(function() {
            var e = c(this).data(Ie);
            if (e || (e = new _(this),
            c(this).data(Ie, e)),
            "string" == typeof t) {
                if (void 0 === e[t])
                    throw new Error('No method named "' + t + '"');
                e[t].call(this)
            }
        })
    }
    ,
    _._clearMenus = function(e) {
        if (!e || 3 !== e.which) {
            var t = c(Le)[0];
            t && t.parentNode.removeChild(t);
            for (var i = c.makeArray(c(Oe)), n = 0; n < i.length; n++) {
                var o, s = _._getParentFromElement(i[n]), r = {
                    relatedTarget: i[n]
                };
                !c(s).hasClass($e) || e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "focusin" === e.type) && c.contains(s, e.target) || (o = c.Event(d.HIDE, r),
                c(s).trigger(o),
                o.isDefaultPrevented()) || (i[n].setAttribute("aria-expanded", "false"),
                c(s).removeClass($e).trigger(c.Event(d.HIDDEN, r)))
            }
        }
    }
    ,
    _._getParentFromElement = function(e) {
        var t = void 0
          , i = T.getSelectorFromElement(e);
        return (t = i ? c(i)[0] : t) || e.parentNode
    }
    ,
    _._dataApiKeydownHandler = function(e) {
        var t, i;
        !/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName) || (e.preventDefault(),
        e.stopPropagation(),
        this.disabled) || c(this).hasClass(_e) || (i = _._getParentFromElement(this),
        !(t = c(i).hasClass($e)) && 27 !== e.which || t && 27 === e.which ? (27 === e.which && (t = c(i).find(Oe)[0],
        c(t).trigger("focus")),
        c(this).trigger("click")) : (t = c(i).find(Ne).get()).length && (i = t.indexOf(e.target),
        38 === e.which && 0 < i && i--,
        40 === e.which && i < t.length - 1 && i++,
        t[i = i < 0 ? 0 : i].focus()))
    }
    ,
    k(_, null, [{
        key: "VERSION",
        get: function() {
            return "4.0.0-alpha.6"
        }
    }]),
    h = _,
    c(document).on(d.KEYDOWN_DATA_API, Oe, h._dataApiKeydownHandler).on(d.KEYDOWN_DATA_API, w, h._dataApiKeydownHandler).on(d.KEYDOWN_DATA_API, C, h._dataApiKeydownHandler).on(d.CLICK_DATA_API + " " + d.FOCUSIN_DATA_API, h._clearMenus).on(d.CLICK_DATA_API, Oe, h.prototype.toggle).on(d.CLICK_DATA_API, j, function(e) {
        e.stopPropagation()
    }),
    c.fn[je] = h._jQueryInterface,
    c.fn[je].Constructor = h,
    c.fn[je].noConflict = function() {
        return c.fn[je] = Me,
        h._jQueryInterface
    }
    ,
    s = jQuery,
    t = "modal",
    e = "." + (ge = "bs.modal"),
    ve = s.fn[t],
    ye = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    },
    we = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    },
    r = {
        HIDE: "hide" + e,
        HIDDEN: "hidden" + e,
        SHOW: "show" + e,
        SHOWN: "shown" + e,
        FOCUSIN: "focusin" + e,
        RESIZE: "resize" + e,
        CLICK_DISMISS: "click.dismiss" + e,
        KEYDOWN_DISMISS: "keydown.dismiss" + e,
        MOUSEUP_DISMISS: "mouseup.dismiss" + e,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + e,
        CLICK_DATA_API: "click" + e + ".data-api"
    },
    be = "modal-scrollbar-measure",
    Ae = "modal-backdrop",
    Ce = "modal-open",
    l = "fade",
    Se = "show",
    xe = ".modal-dialog",
    w = '[data-toggle="modal"]',
    Ee = '[data-dismiss="modal"]',
    ke = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    D.prototype.toggle = function(e) {
        return this._isShown ? this.hide() : this.show(e)
    }
    ,
    D.prototype.show = function(e) {
        var t = this;
        if (this._isTransitioning)
            throw new Error("Modal is transitioning");
        T.supportsTransitionEnd() && s(this._element).hasClass(l) && (this._isTransitioning = !0);
        var i = s.Event(r.SHOW, {
            relatedTarget: e
        });
        s(this._element).trigger(i),
        this._isShown || i.isDefaultPrevented() || (this._isShown = !0,
        this._checkScrollbar(),
        this._setScrollbar(),
        s(document.body).addClass(Ce),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        s(this._element).on(r.CLICK_DISMISS, Ee, function(e) {
            return t.hide(e)
        }),
        s(this._dialog).on(r.MOUSEDOWN_DISMISS, function() {
            s(t._element).one(r.MOUSEUP_DISMISS, function(e) {
                s(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
            })
        }),
        this._showBackdrop(function() {
            return t._showElement(e)
        }))
    }
    ,
    D.prototype.hide = function(e) {
        var t = this;
        if (e && e.preventDefault(),
        this._isTransitioning)
            throw new Error("Modal is transitioning");
        var e = T.supportsTransitionEnd() && s(this._element).hasClass(l)
          , i = (e && (this._isTransitioning = !0),
        s.Event(r.HIDE));
        s(this._element).trigger(i),
        this._isShown && !i.isDefaultPrevented() && (this._isShown = !1,
        this._setEscapeEvent(),
        this._setResizeEvent(),
        s(document).off(r.FOCUSIN),
        s(this._element).removeClass(Se),
        s(this._element).off(r.CLICK_DISMISS),
        s(this._dialog).off(r.MOUSEDOWN_DISMISS),
        e ? s(this._element).one(T.TRANSITION_END, function(e) {
            return t._hideModal(e)
        }).emulateTransitionEnd(300) : this._hideModal())
    }
    ,
    D.prototype.dispose = function() {
        s.removeData(this._element, ge),
        s(window, document, this._element, this._backdrop).off(e),
        this._config = null,
        this._element = null,
        this._dialog = null,
        this._backdrop = null,
        this._isShown = null,
        this._isBodyOverflowing = null,
        this._ignoreBackdropClick = null,
        this._originalBodyPadding = null,
        this._scrollbarWidth = null
    }
    ,
    D.prototype._getConfig = function(e) {
        return e = s.extend({}, ye, e),
        T.typeCheckConfig(t, e, we),
        e
    }
    ,
    D.prototype._showElement = function(e) {
        function t() {
            i._config.focus && i._element.focus(),
            i._isTransitioning = !1,
            s(i._element).trigger(o)
        }
        var i = this
          , n = T.supportsTransitionEnd() && s(this._element).hasClass(l)
          , o = (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
        this._element.style.display = "block",
        this._element.removeAttribute("aria-hidden"),
        this._element.scrollTop = 0,
        n && T.reflow(this._element),
        s(this._element).addClass(Se),
        this._config.focus && this._enforceFocus(),
        s.Event(r.SHOWN, {
            relatedTarget: e
        }));
        n ? s(this._dialog).one(T.TRANSITION_END, t).emulateTransitionEnd(300) : t()
    }
    ,
    D.prototype._enforceFocus = function() {
        var t = this;
        s(document).off(r.FOCUSIN).on(r.FOCUSIN, function(e) {
            document === e.target || t._element === e.target || s(t._element).has(e.target).length || t._element.focus()
        })
    }
    ,
    D.prototype._setEscapeEvent = function() {
        var t = this;
        this._isShown && this._config.keyboard ? s(this._element).on(r.KEYDOWN_DISMISS, function(e) {
            27 === e.which && t.hide()
        }) : this._isShown || s(this._element).off(r.KEYDOWN_DISMISS)
    }
    ,
    D.prototype._setResizeEvent = function() {
        var t = this;
        this._isShown ? s(window).on(r.RESIZE, function(e) {
            return t._handleUpdate(e)
        }) : s(window).off(r.RESIZE)
    }
    ,
    D.prototype._hideModal = function() {
        var e = this;
        this._element.style.display = "none",
        this._element.setAttribute("aria-hidden", "true"),
        this._isTransitioning = !1,
        this._showBackdrop(function() {
            s(document.body).removeClass(Ce),
            e._resetAdjustments(),
            e._resetScrollbar(),
            s(e._element).trigger(r.HIDDEN)
        })
    }
    ,
    D.prototype._removeBackdrop = function() {
        this._backdrop && (s(this._backdrop).remove(),
        this._backdrop = null)
    }
    ,
    D.prototype._showBackdrop = function(e) {
        var t, i = this, n = s(this._element).hasClass(l) ? l : "";
        this._isShown && this._config.backdrop ? (t = T.supportsTransitionEnd() && n,
        this._backdrop = document.createElement("div"),
        this._backdrop.className = Ae,
        n && s(this._backdrop).addClass(n),
        s(this._backdrop).appendTo(document.body),
        s(this._element).on(r.CLICK_DISMISS, function(e) {
            return i._ignoreBackdropClick ? void (i._ignoreBackdropClick = !1) : void (e.target === e.currentTarget && ("static" === i._config.backdrop ? i._element.focus() : i.hide()))
        }),
        t && T.reflow(this._backdrop),
        s(this._backdrop).addClass(Se),
        e && (t ? s(this._backdrop).one(T.TRANSITION_END, e).emulateTransitionEnd(150) : e())) : !this._isShown && this._backdrop ? (s(this._backdrop).removeClass(Se),
        n = function() {
            i._removeBackdrop(),
            e && e()
        }
        ,
        T.supportsTransitionEnd() && s(this._element).hasClass(l) ? s(this._backdrop).one(T.TRANSITION_END, n).emulateTransitionEnd(150) : n()) : e && e()
    }
    ,
    D.prototype._handleUpdate = function() {
        this._adjustDialog()
    }
    ,
    D.prototype._adjustDialog = function() {
        var e = this._element.scrollHeight > document.documentElement.clientHeight;
        !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
        this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
    }
    ,
    D.prototype._resetAdjustments = function() {
        this._element.style.paddingLeft = "",
        this._element.style.paddingRight = ""
    }
    ,
    D.prototype._checkScrollbar = function() {
        this._isBodyOverflowing = document.body.clientWidth < window.innerWidth,
        this._scrollbarWidth = this._getScrollbarWidth()
    }
    ,
    D.prototype._setScrollbar = function() {
        var e = parseInt(s(ke).css("padding-right") || 0, 10);
        this._originalBodyPadding = document.body.style.paddingRight || "",
        this._isBodyOverflowing && (document.body.style.paddingRight = e + this._scrollbarWidth + "px")
    }
    ,
    D.prototype._resetScrollbar = function() {
        document.body.style.paddingRight = this._originalBodyPadding
    }
    ,
    D.prototype._getScrollbarWidth = function() {
        var e = document.createElement("div")
          , t = (e.className = be,
        document.body.appendChild(e),
        e.offsetWidth - e.clientWidth);
        return document.body.removeChild(e),
        t
    }
    ,
    D._jQueryInterface = function(i, n) {
        return this.each(function() {
            var e = s(this).data(ge)
              , t = s.extend({}, D.Default, s(this).data(), "object" === (void 0 === i ? "undefined" : E(i)) && i);
            if (e || (e = new D(this,t),
            s(this).data(ge, e)),
            "string" == typeof i) {
                if (void 0 === e[i])
                    throw new Error('No method named "' + i + '"');
                e[i](n)
            } else
                t.show && e.show(n)
        })
    }
    ,
    k(D, null, [{
        key: "VERSION",
        get: function() {
            return "4.0.0-alpha.6"
        }
    }, {
        key: "Default",
        get: function() {
            return ye
        }
    }]),
    Te = D,
    s(document).on(r.CLICK_DATA_API, w, function(e) {
        var t = this
          , i = void 0
          , n = T.getSelectorFromElement(this)
          , n = (n && (i = s(n)[0]),
        s(i).data(ge) ? "toggle" : s.extend({}, s(i).data(), s(this).data()))
          , o = ("A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault(),
        s(i).one(r.SHOW, function(e) {
            e.isDefaultPrevented() || o.one(r.HIDDEN, function() {
                s(t).is(":visible") && t.focus()
            })
        }));
        Te._jQueryInterface.call(s(i), n, this)
    }),
    s.fn[t] = Te._jQueryInterface,
    s.fn[t].Constructor = Te,
    s.fn[t].noConflict = function() {
        return s.fn[t] = ve,
        Te._jQueryInterface
    }
    ,
    o = jQuery,
    i = "scrollspy",
    Z = "." + (J = "bs.scrollspy"),
    ee = o.fn[i],
    te = {
        offset: 10,
        method: "auto",
        target: ""
    },
    ie = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    },
    ne = {
        ACTIVATE: "activate" + Z,
        SCROLL: "scroll" + Z,
        LOAD_DATA_API: "load" + Z + ".data-api"
    },
    oe = "dropdown-item",
    se = "active",
    re = '[data-spy="scroll"]',
    ae = ".active",
    le = "li",
    ce = ".nav-link",
    de = ".dropdown",
    he = ".dropdown-item",
    pe = ".dropdown-toggle",
    ue = "offset",
    fe = "position",
    M.prototype.refresh = function() {
        var t = this
          , e = this._scrollElement !== this._scrollElement.window ? fe : ue
          , i = "auto" === this._config.method ? e : this._config.method
          , n = i === fe ? this._getScrollTop() : 0;
        this._offsets = [],
        this._targets = [],
        this._scrollHeight = this._getScrollHeight(),
        o.makeArray(o(this._selector)).map(function(e) {
            var t = void 0
              , e = T.getSelectorFromElement(e);
            return (t = e ? o(e)[0] : t) && (t.offsetWidth || t.offsetHeight) ? [o(t)[i]().top + n, e] : null
        }).filter(function(e) {
            return e
        }).sort(function(e, t) {
            return e[0] - t[0]
        }).forEach(function(e) {
            t._offsets.push(e[0]),
            t._targets.push(e[1])
        })
    }
    ,
    M.prototype.dispose = function() {
        o.removeData(this._element, J),
        o(this._scrollElement).off(Z),
        this._element = null,
        this._scrollElement = null,
        this._config = null,
        this._selector = null,
        this._offsets = null,
        this._targets = null,
        this._activeTarget = null,
        this._scrollHeight = null
    }
    ,
    M.prototype._getConfig = function(e) {
        var t;
        return "string" != typeof (e = o.extend({}, te, e)).target && ((t = o(e.target).attr("id")) || (t = T.getUID(i),
        o(e.target).attr("id", t)),
        e.target = "#" + t),
        T.typeCheckConfig(i, e, ie),
        e
    }
    ,
    M.prototype._getScrollTop = function() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
    }
    ,
    M.prototype._getScrollHeight = function() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
    }
    ,
    M.prototype._getOffsetHeight = function() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.offsetHeight
    }
    ,
    M.prototype._process = function() {
        var e = this._getScrollTop() + this._config.offset
          , t = this._getScrollHeight()
          , i = this._config.offset + t - this._getOffsetHeight();
        if (this._scrollHeight !== t && this.refresh(),
        i <= e)
            t = this._targets[this._targets.length - 1],
            this._activeTarget !== t && this._activate(t);
        else if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0])
            this._activeTarget = null,
            this._clear();
        else
            for (var n = this._offsets.length; n--; )
                this._activeTarget !== this._targets[n] && e >= this._offsets[n] && (void 0 === this._offsets[n + 1] || e < this._offsets[n + 1]) && this._activate(this._targets[n])
    }
    ,
    M.prototype._activate = function(t) {
        this._activeTarget = t,
        this._clear();
        var e = (e = this._selector.split(",")).map(function(e) {
            return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
        })
          , e = o(e.join(","));
        (e.hasClass(oe) ? (e.closest(de).find(pe).addClass(se),
        e) : e.parents(le).find("> " + ce)).addClass(se),
        o(this._scrollElement).trigger(ne.ACTIVATE, {
            relatedTarget: t
        })
    }
    ,
    M.prototype._clear = function() {
        o(this._selector).filter(ae).removeClass(se)
    }
    ,
    M._jQueryInterface = function(i) {
        return this.each(function() {
            var e = o(this).data(J)
              , t = "object" === (void 0 === i ? "undefined" : E(i)) && i;
            if (e || (e = new M(this,t),
            o(this).data(J, e)),
            "string" == typeof i) {
                if (void 0 === e[i])
                    throw new Error('No method named "' + i + '"');
                e[i]()
            }
        })
    }
    ,
    k(M, null, [{
        key: "VERSION",
        get: function() {
            return "4.0.0-alpha.6"
        }
    }, {
        key: "Default",
        get: function() {
            return te
        }
    }]),
    me = M,
    o(window).on(ne.LOAD_DATA_API, function() {
        for (var e = o.makeArray(o(re)), t = e.length; t--; ) {
            var i = o(e[t]);
            me._jQueryInterface.call(i, i.data())
        }
    }),
    o.fn[i] = me._jQueryInterface,
    o.fn[i].Constructor = me,
    o.fn[i].noConflict = function() {
        return o.fn[i] = ee,
        me._jQueryInterface
    }
    ,
    a = jQuery,
    C = "." + (B = "bs.tab"),
    N = a.fn.tab,
    H = {
        HIDE: "hide" + C,
        HIDDEN: "hidden" + C,
        SHOW: "show" + C,
        SHOWN: "shown" + C,
        CLICK_DATA_API: "click" + C + ".data-api"
    },
    P = "dropdown-menu",
    Q = "active",
    R = "disabled",
    F = "fade",
    W = "show",
    z = ".dropdown",
    G = "ul:not(.dropdown-menu), ol:not(.dropdown-menu), nav:not(.dropdown-menu)",
    Y = "> .nav-item .fade, > .fade",
    U = ".active",
    V = "> .nav-item > .active, > .active",
    C = '[data-toggle="tab"], [data-toggle="pill"]',
    q = ".dropdown-toggle",
    K = "> .dropdown-menu .active",
    I.prototype.show = function() {
        var e, i, t, n, o, s, r = this;
        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && a(this._element).hasClass(Q) || a(this._element).hasClass(R) || (i = e = void 0,
        t = a(this._element).closest(G)[0],
        n = T.getSelectorFromElement(this._element),
        t && (i = (i = a.makeArray(a(t).find(U)))[i.length - 1]),
        o = a.Event(H.HIDE, {
            relatedTarget: this._element
        }),
        s = a.Event(H.SHOW, {
            relatedTarget: i
        }),
        i && a(i).trigger(o),
        a(this._element).trigger(s),
        s.isDefaultPrevented()) || o.isDefaultPrevented() || (n && (e = a(n)[0]),
        this._activate(this._element, t),
        s = function() {
            var e = a.Event(H.HIDDEN, {
                relatedTarget: r._element
            })
              , t = a.Event(H.SHOWN, {
                relatedTarget: i
            });
            a(i).trigger(e),
            a(r._element).trigger(t)
        }
        ,
        e ? this._activate(e, e.parentNode, s) : s())
    }
    ,
    I.prototype.dispose = function() {
        a.removeClass(this._element, B),
        this._element = null
    }
    ,
    I.prototype._activate = function(e, t, i) {
        function n() {
            return o._transitionComplete(e, s, r, i)
        }
        var o = this
          , s = a(t).find(V)[0]
          , r = i && T.supportsTransitionEnd() && (s && a(s).hasClass(F) || Boolean(a(t).find(Y)[0]));
        s && r ? a(s).one(T.TRANSITION_END, n).emulateTransitionEnd(150) : n(),
        s && a(s).removeClass(W)
    }
    ,
    I.prototype._transitionComplete = function(e, t, i, n) {
        var o;
        t && (a(t).removeClass(Q),
        (o = a(t.parentNode).find(K)[0]) && a(o).removeClass(Q),
        t.setAttribute("aria-expanded", !1)),
        a(e).addClass(Q),
        e.setAttribute("aria-expanded", !0),
        i ? (T.reflow(e),
        a(e).addClass(W)) : a(e).removeClass(F),
        e.parentNode && a(e.parentNode).hasClass(P) && ((o = a(e).closest(z)[0]) && a(o).find(q).addClass(Q),
        e.setAttribute("aria-expanded", !0)),
        n && n()
    }
    ,
    I._jQueryInterface = function(i) {
        return this.each(function() {
            var e = a(this)
              , t = e.data(B);
            if (t || (t = new I(this),
            e.data(B, t)),
            "string" == typeof i) {
                if (void 0 === t[i])
                    throw new Error('No method named "' + i + '"');
                t[i]()
            }
        })
    }
    ,
    k(I, null, [{
        key: "VERSION",
        get: function() {
            return "4.0.0-alpha.6"
        }
    }]),
    X = I,
    a(document).on(H.CLICK_DATA_API, C, function(e) {
        e.preventDefault(),
        X._jQueryInterface.call(a(this), "show")
    }),
    a.fn.tab = X._jQueryInterface,
    a.fn.tab.Constructor = X,
    a.fn.tab.noConflict = function() {
        return a.fn.tab = N,
        X._jQueryInterface
    }
    ,
    function(s) {
        if ("undefined" == typeof Tether)
            throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");
        var t = "tooltip"
          , n = "bs.tooltip"
          , e = "." + n
          , i = s.fn[t]
          , o = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: "0 0",
            constraints: [],
            container: !1
        }
          , r = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "string",
            constraints: "array",
            container: "(string|element|boolean)"
        }
          , a = {
            TOP: "bottom center",
            RIGHT: "middle left",
            BOTTOM: "top center",
            LEFT: "middle right"
        }
          , l = "show"
          , c = "out"
          , d = {
            HIDE: "hide" + e,
            HIDDEN: "hidden" + e,
            SHOW: "show" + e,
            SHOWN: "shown" + e,
            INSERTED: "inserted" + e,
            CLICK: "click" + e,
            FOCUSIN: "focusin" + e,
            FOCUSOUT: "focusout" + e,
            MOUSEENTER: "mouseenter" + e,
            MOUSELEAVE: "mouseleave" + e
        }
          , h = "fade"
          , p = "show"
          , u = ".tooltip-inner"
          , f = {
            element: !1,
            enabled: !1
        }
          , m = "hover"
          , g = "focus"
          , v = "click"
          , y = "manual"
          , w = (b.prototype.enable = function() {
            this._isEnabled = !0
        }
        ,
        b.prototype.disable = function() {
            this._isEnabled = !1
        }
        ,
        b.prototype.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }
        ,
        b.prototype.toggle = function(e) {
            var t, i;
            e ? (t = this.constructor.DATA_KEY,
            (i = s(e.currentTarget).data(t)) || (i = new this.constructor(e.currentTarget,this._getDelegateConfig()),
            s(e.currentTarget).data(t, i)),
            i._activeTrigger.click = !i._activeTrigger.click,
            i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)) : s(this.getTipElement()).hasClass(p) ? this._leave(null, this) : this._enter(null, this)
        }
        ,
        b.prototype.dispose = function() {
            clearTimeout(this._timeout),
            this.cleanupTether(),
            s.removeData(this.element, this.constructor.DATA_KEY),
            s(this.element).off(this.constructor.EVENT_KEY),
            s(this.element).closest(".modal").off("hide.bs.modal"),
            this.tip && s(this.tip).remove(),
            this._isEnabled = null,
            this._timeout = null,
            this._hoverState = null,
            this._activeTrigger = null,
            this._tether = null,
            this.element = null,
            this.config = null,
            this.tip = null
        }
        ,
        b.prototype.show = function() {
            var t = this;
            if ("none" === s(this.element).css("display"))
                throw new Error("Please use show on visible elements");
            var e = s.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
                if (this._isTransitioning)
                    throw new Error("Tooltip is transitioning");
                s(this.element).trigger(e);
                var i, n = s.contains(this.element.ownerDocument.documentElement, this.element);
                !e.isDefaultPrevented() && n && (e = this.getTipElement(),
                n = T.getUID(this.constructor.NAME),
                e.setAttribute("id", n),
                this.element.setAttribute("aria-describedby", n),
                this.setContent(),
                this.config.animation && s(e).addClass(h),
                n = "function" == typeof this.config.placement ? this.config.placement.call(this, e, this.element) : this.config.placement,
                n = this._getAttachment(n),
                i = !1 === this.config.container ? document.body : s(this.config.container),
                s(e).data(this.constructor.DATA_KEY, this).appendTo(i),
                s(this.element).trigger(this.constructor.Event.INSERTED),
                this._tether = new Tether({
                    attachment: n,
                    element: e,
                    target: this.element,
                    classes: f,
                    classPrefix: "bs-tether",
                    offset: this.config.offset,
                    constraints: this.config.constraints,
                    addTargetClasses: !1
                }),
                T.reflow(e),
                this._tether.position(),
                s(e).addClass(p),
                i = function() {
                    var e = t._hoverState;
                    t._hoverState = null,
                    t._isTransitioning = !1,
                    s(t.element).trigger(t.constructor.Event.SHOWN),
                    e === c && t._leave(null, t)
                }
                ,
                T.supportsTransitionEnd() && s(this.tip).hasClass(h) ? (this._isTransitioning = !0,
                s(this.tip).one(T.TRANSITION_END, i).emulateTransitionEnd(b._TRANSITION_DURATION)) : i())
            }
        }
        ,
        b.prototype.hide = function(e) {
            var t = this
              , i = this.getTipElement()
              , n = s.Event(this.constructor.Event.HIDE);
            if (this._isTransitioning)
                throw new Error("Tooltip is transitioning");
            function o() {
                t._hoverState !== l && i.parentNode && i.parentNode.removeChild(i),
                t.element.removeAttribute("aria-describedby"),
                s(t.element).trigger(t.constructor.Event.HIDDEN),
                t._isTransitioning = !1,
                t.cleanupTether(),
                e && e()
            }
            s(this.element).trigger(n),
            n.isDefaultPrevented() || (s(i).removeClass(p),
            this._activeTrigger[v] = !1,
            this._activeTrigger[g] = !1,
            this._activeTrigger[m] = !1,
            T.supportsTransitionEnd() && s(this.tip).hasClass(h) ? (this._isTransitioning = !0,
            s(i).one(T.TRANSITION_END, o).emulateTransitionEnd(150)) : o(),
            this._hoverState = "")
        }
        ,
        b.prototype.isWithContent = function() {
            return Boolean(this.getTitle())
        }
        ,
        b.prototype.getTipElement = function() {
            return this.tip = this.tip || s(this.config.template)[0]
        }
        ,
        b.prototype.setContent = function() {
            var e = s(this.getTipElement());
            this.setElementContent(e.find(u), this.getTitle()),
            e.removeClass(h + " " + p),
            this.cleanupTether()
        }
        ,
        b.prototype.setElementContent = function(e, t) {
            var i = this.config.html;
            "object" === (void 0 === t ? "undefined" : E(t)) && (t.nodeType || t.jquery) ? i ? s(t).parent().is(e) || e.empty().append(t) : e.text(s(t).text()) : e[i ? "html" : "text"](t)
        }
        ,
        b.prototype.getTitle = function() {
            return this.element.getAttribute("data-original-title") || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title)
        }
        ,
        b.prototype.cleanupTether = function() {
            this._tether && this._tether.destroy()
        }
        ,
        b.prototype._getAttachment = function(e) {
            return a[e.toUpperCase()]
        }
        ,
        b.prototype._setListeners = function() {
            var i = this;
            this.config.trigger.split(" ").forEach(function(e) {
                var t;
                "click" === e ? s(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(e) {
                    return i.toggle(e)
                }) : e !== y && (t = e === m ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                e = e === m ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT,
                s(i.element).on(t, i.config.selector, function(e) {
                    return i._enter(e)
                }).on(e, i.config.selector, function(e) {
                    return i._leave(e)
                })),
                s(i.element).closest(".modal").on("hide.bs.modal", function() {
                    return i.hide()
                })
            }),
            this.config.selector ? this.config = s.extend({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }
        ,
        b.prototype._fixTitle = function() {
            var e = E(this.element.getAttribute("data-original-title"));
            !this.element.getAttribute("title") && "string" === e || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
            this.element.setAttribute("title", ""))
        }
        ,
        b.prototype._enter = function(e, t) {
            var i = this.constructor.DATA_KEY;
            return (t = t || s(e.currentTarget).data(i)) || (t = new this.constructor(e.currentTarget,this._getDelegateConfig()),
            s(e.currentTarget).data(i, t)),
            e && (t._activeTrigger["focusin" === e.type ? g : m] = !0),
            s(t.getTipElement()).hasClass(p) || t._hoverState === l ? void (t._hoverState = l) : (clearTimeout(t._timeout),
            t._hoverState = l,
            t.config.delay && t.config.delay.show ? void (t._timeout = setTimeout(function() {
                t._hoverState === l && t.show()
            }, t.config.delay.show)) : void t.show())
        }
        ,
        b.prototype._leave = function(e, t) {
            var i = this.constructor.DATA_KEY;
            if ((t = t || s(e.currentTarget).data(i)) || (t = new this.constructor(e.currentTarget,this._getDelegateConfig()),
            s(e.currentTarget).data(i, t)),
            e && (t._activeTrigger["focusout" === e.type ? g : m] = !1),
            !t._isWithActiveTrigger())
                return clearTimeout(t._timeout),
                t._hoverState = c,
                t.config.delay && t.config.delay.hide ? void (t._timeout = setTimeout(function() {
                    t._hoverState === c && t.hide()
                }, t.config.delay.hide)) : void t.hide()
        }
        ,
        b.prototype._isWithActiveTrigger = function() {
            for (var e in this._activeTrigger)
                if (this._activeTrigger[e])
                    return !0;
            return !1
        }
        ,
        b.prototype._getConfig = function(e) {
            return (e = s.extend({}, this.constructor.Default, s(this.element).data(), e)).delay && "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }),
            T.typeCheckConfig(t, e, this.constructor.DefaultType),
            e
        }
        ,
        b.prototype._getDelegateConfig = function() {
            var e = {};
            if (this.config)
                for (var t in this.config)
                    this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
            return e
        }
        ,
        b._jQueryInterface = function(i) {
            return this.each(function() {
                var e = s(this).data(n)
                  , t = "object" === (void 0 === i ? "undefined" : E(i)) && i;
                if ((e || !/dispose|hide/.test(i)) && (e || (e = new b(this,t),
                s(this).data(n, e)),
                "string" == typeof i)) {
                    if (void 0 === e[i])
                        throw new Error('No method named "' + i + '"');
                    e[i]()
                }
            })
        }
        ,
        k(b, null, [{
            key: "VERSION",
            get: function() {
                return "4.0.0-alpha.6"
            }
        }, {
            key: "Default",
            get: function() {
                return o
            }
        }, {
            key: "NAME",
            get: function() {
                return t
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return n
            }
        }, {
            key: "Event",
            get: function() {
                return d
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return e
            }
        }, {
            key: "DefaultType",
            get: function() {
                return r
            }
        }]),
        b);
        function b(e, t) {
            A(this, b),
            this._isEnabled = !0,
            this._timeout = 0,
            this._hoverState = "",
            this._activeTrigger = {},
            this._isTransitioning = !1,
            this._tether = null,
            this.element = e,
            this.config = this._getConfig(t),
            this.tip = null,
            this._setListeners()
        }
        return s.fn[t] = w._jQueryInterface,
        s.fn[t].Constructor = w,
        s.fn[t].noConflict = function() {
            return s.fn[t] = i,
            w._jQueryInterface
        }
        ,
        w
    }(jQuery));
    function I(e) {
        A(this, I),
        this._element = e
    }
    function M(e, t) {
        var i = this;
        A(this, M),
        this._element = e,
        this._scrollElement = "BODY" === e.tagName ? window : e,
        this._config = this._getConfig(t),
        this._selector = this._config.target + " " + ce + "," + this._config.target + " " + he,
        this._offsets = [],
        this._targets = [],
        this._activeTarget = null,
        this._scrollHeight = 0,
        o(this._scrollElement).on(ne.SCROLL, function(e) {
            return i._process(e)
        }),
        this.refresh(),
        this._process()
    }
    function D(e, t) {
        A(this, D),
        this._config = this._getConfig(t),
        this._element = e,
        this._dialog = s(e).find(xe)[0],
        this._backdrop = null,
        this._isShown = !1,
        this._isBodyOverflowing = !1,
        this._ignoreBackdropClick = !1,
        this._isTransitioning = !1,
        this._originalBodyPadding = 0,
        this._scrollbarWidth = 0
    }
    function _(e) {
        A(this, _),
        this._element = e,
        this._addEventListeners()
    }
    function $(e, t) {
        A(this, $),
        this._isTransitioning = !1,
        this._element = e,
        this._config = this._getConfig(t),
        this._triggerArray = p.makeArray(p('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]')),
        this._parent = this._config.parent ? this._getParent() : null,
        this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
        this._config.toggle && this.toggle()
    }
    function L(e, t) {
        A(this, L),
        this._items = null,
        this._interval = null,
        this._activeElement = null,
        this._isPaused = !1,
        this._isSliding = !1,
        this._config = this._getConfig(t),
        this._element = u(e)[0],
        this._indicatorsElement = u(this._element).find(ut)[0],
        this._addEventListeners()
    }
    function Kt(e) {
        A(this, Kt),
        this._element = e
    }
    function O(e) {
        A(this, O),
        this._element = e
    }
    function Xt(e) {
        var t = this
          , i = !1;
        return Ot(this).one(Ht.TRANSITION_END, function() {
            i = !0
        }),
        setTimeout(function() {
            i || Ht.triggerTransitionEnd(t)
        }, e),
        this
    }
    function Jt(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    S = jQuery,
    Pt = "popover",
    x = "." + (Qt = "bs.popover"),
    Rt = S.fn[Pt],
    Ft = S.extend({}, j.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    Wt = S.extend({}, j.DefaultType, {
        content: "(string|element|function)"
    }),
    zt = "fade",
    Yt = ".popover-title",
    Ut = ".popover-content",
    Vt = {
        HIDE: "hide" + x,
        HIDDEN: "hidden" + x,
        SHOW: (Gt = "show") + x,
        SHOWN: "shown" + x,
        INSERTED: "inserted" + x,
        CLICK: "click" + x,
        FOCUSIN: "focusin" + x,
        FOCUSOUT: "focusout" + x,
        MOUSEENTER: "mouseenter" + x,
        MOUSELEAVE: "mouseleave" + x
    },
    qt = function(i) {
        function n() {
            A(this, n);
            var e = this
              , t = i.apply(this, arguments);
            if (e)
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }
        var e = n
          , t = i;
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        return e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t),
        n.prototype.isWithContent = function() {
            return this.getTitle() || this._getContent()
        }
        ,
        n.prototype.getTipElement = function() {
            return this.tip = this.tip || S(this.config.template)[0]
        }
        ,
        n.prototype.setContent = function() {
            var e = S(this.getTipElement());
            this.setElementContent(e.find(Yt), this.getTitle()),
            this.setElementContent(e.find(Ut), this._getContent()),
            e.removeClass(zt + " " + Gt),
            this.cleanupTether()
        }
        ,
        n.prototype._getContent = function() {
            return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
        }
        ,
        n._jQueryInterface = function(i) {
            return this.each(function() {
                var e = S(this).data(Qt)
                  , t = "object" === (void 0 === i ? "undefined" : E(i)) ? i : null;
                if ((e || !/destroy|hide/.test(i)) && (e || (e = new n(this,t),
                S(this).data(Qt, e)),
                "string" == typeof i)) {
                    if (void 0 === e[i])
                        throw new Error('No method named "' + i + '"');
                    e[i]()
                }
            })
        }
        ,
        k(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.0.0-alpha.6"
            }
        }, {
            key: "Default",
            get: function() {
                return Ft
            }
        }, {
            key: "NAME",
            get: function() {
                return Pt
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return Qt
            }
        }, {
            key: "Event",
            get: function() {
                return Vt
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return x
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Wt
            }
        }]),
        n
    }(j),
    S.fn[Pt] = qt._jQueryInterface,
    S.fn[Pt].Constructor = qt,
    S.fn[Pt].noConflict = function() {
        return S.fn[Pt] = Rt,
        qt._jQueryInterface
    }
}(),
function(r, a) {
    function n(e, t) {
        var i, n, o = (e = r(e)).is("body"), s = e.data("LoadingOverlayCount");
        0 == (s = s === a ? 0 : s) && (i = r("<div>", {
            class: "loadingoverlay",
            css: {
                "background-color": t.color,
                position: "relative",
                display: "flex",
                "flex-direction": "column",
                "align-items": "center",
                "justify-content": "center"
            }
        }),
        t.zIndex !== a && i.css("z-index", t.zIndex),
        t.image && i.css({
            "background-image": "url(" + t.image + ")",
            "background-position": t.imagePosition,
            "background-repeat": "no-repeat"
        }),
        t.fontawesome && r("<div>", {
            class: "loadingoverlay_fontawesome " + t.fontawesome
        }).appendTo(i),
        t.custom && r(t.custom).appendTo(i),
        o ? i.css({
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
        }) : i.css("position", "fixed" == e.css("position") ? "fixed" : "absolute"),
        l(e, i, t, o),
        0 < t.resizeInterval && (n = setInterval(function() {
            l(e, i, t, o)
        }, t.resizeInterval),
        e.data("LoadingOverlayResizeIntervalId", n)),
        t.fade ? !0 === t.fade ? t.fade = [400, 200] : "string" != typeof t.fade && "number" != typeof t.fade || (t.fade = [t.fade, t.fade]) : t.fade = [0, 0],
        e.data({
            LoadingOverlay: i,
            LoadingOverlayFadeOutDuration: t.fade[1]
        }),
        i.hide().appendTo("body").fadeIn(t.fade[0])),
        e.data("LoadingOverlayCount", ++s)
    }
    function o(e, t) {
        var i = (e = r(e)).data("LoadingOverlayCount");
        i !== a && (i--,
        t || i <= 0 ? ((t = e.data("LoadingOverlayResizeIntervalId")) && clearInterval(t),
        e.data("LoadingOverlay").fadeOut(e.data("LoadingOverlayFadeOutDuration"), function() {
            r(this).remove()
        }),
        e.removeData(["LoadingOverlay", "LoadingOverlayCount", "LoadingOverlayFadeOutDuration", "LoadingOverlayResizeIntervalId"])) : e.data("LoadingOverlayCount", i))
    }
    function l(e, t, i, n) {
        n || (o = "fixed" == e.css("position") ? e.position() : e.offset(),
        t.css({
            top: o.top + parseInt(e.css("border-top-width"), 10),
            left: o.left + parseInt(e.css("border-left-width"), 10),
            width: e.innerWidth(),
            height: e.innerHeight()
        }));
        var o = n ? r(window) : e
          , n = "auto";
        i.size && "auto" != i.size && (n = Math.min(o.innerWidth(), o.innerHeight()) * parseFloat(i.size) / 100,
        i.maxSize && n > parseInt(i.maxSize, 10) && (n = parseInt(i.maxSize, 10) + "px"),
        i.minSize) && n < parseInt(i.minSize, 10) && (n = parseInt(i.minSize, 10) + "px"),
        t.css("background-size", n),
        t.children(".loadingoverlay_fontawesome").css("font-size", n)
    }
    var s = {
        color: "rgba(255, 255, 255, 0.8)",
        custom: "",
        fade: !0,
        fontawesome: "",
        image: "data:image/gif;base64,R0lGODlhZABkAKUAADQyNJyanGRmZMzOzExOTLS2tISChOzq7ERCRKyqrHR2dNze3FxaXMTCxIyOjPT29Dw6PKSipGxubNTW1FRWVLy+vIyKjPTy9ExKTLSytHx+fOTm5GRiZMzKzJSWlPz+/DQ2NJyenGxqbNTS1FRSVLy6vISGhOzu7ERGRKyurHx6fOTi5FxeXMTGxJSSlPz6/Dw+PKSmpHRydNza3P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJBQA0ACwAAAAAZABkAAAG/kCacEgsGo/IJO1SEEBAosJFSa1ar9jswQQBeAEgyyFLLpvNL893DXC9zvC4XDggsb+EwXzPtyZAd14gCX2FhkQRgIEAIYeOSAMWIgoxY1UpioEpj5xCFx6ZACQVH1QjFIt5nY8PIV1sKCtUaYsOpVcfb6tWM6iBJlUnJqEAJidYKxYaFbq7SSXEXxQPVQ8VEjBQFVNXDypeKCPOSR8ZiwAox50rLF8Z40kV0V7Tqw8WXgQT8EgzDIvAdm1I4WFAM35EPqSAcYeAul25ECZ5EYPAGgH7JGo08mFACAcOChy4tbHkkA8PDppcybKly5cwY8rc8+HEiBYDRs509qKF/goCCAhIaEBy56MBFtcQaGCU04ukbFgsaErlQAQFETZgGbAIRAmqEx0oskDNirlFMcAieWDHCwtZVkqce6fWyAMBXyQ8pHKCYcOMdROOEIBBQIssAQI5KBs44YEWcLGcELvGWONCHyZ40OBhQtHLoEOLHk26tOnTqFOrXs26tevXEj+0MCFDBTPYSi64QPAFhgFLrl8c2HCC5IsUvNeAiMB49YsCFBCwICrkgIRABICvboEBz1QaC7oHmuEa1JdBQhZAZfOdtXlBdE8oCERBa+tTX94KeZ58TYjPqfWkAAsaiDPEcX6B4UFzrV1wAoNCbBCCCSG0h9uFGGao4YYc/nbo4YcghijiiCW9sMEMG6i04QsjKKCICICJ9sACE6wAoRILcMAGBRZe9kIIDKDAQALcWBGCYgDWVcIrACBQQpJHtHOHAHs1dt0aGhRJhZRR2QeaCGwooKUSBgSiwY1qRcBGDCpCkqAgh4l2wpUAKOBlFS9UQIEiBFRQ2gsDFKAHGR8skEAIKSwAJYmMNuroo5BGSkSbHa6wmQEljNnJBzOMUGVJMxCgCAwWfOrIARpggAIFBSw6zgl4sZGAq3uc8M0ag5bUAApT0jrHAG8CoMFKBfQnDZp9tDDlSh3wyoYEvsoxgrNfOLDSA2Uq5ycuKzQAGaVHnOBCJrGwtEKsUwDAEAOyRbyQgQAoIMBBAeAasUEMArBgQq4rndCCB4myWwSwa8DAbzXDPRBtU/M9++E/O35I5xcCfNgAMdt2+EACe4JAAZsgvrBABRUsUK+knAQBACH5BAkFADQALAAAAABkAGQAAAb+QJpwSCwaj8gk7bNKaVSx2UtJrVqv2CytwgJ4AZTCVEsum7ED0veLaJzfcPhDsV4LTvG83jpR170oLXuDhEQdBH9eMBVXHwcHF4VnLwMJGQtXfYkAKB1VlBoMFAIekZJYLxMUXiAQBitVc5sseEovATB1LBMfp1Yjq3UyD1UtKH8gBVUNIIkSsL5KDxabjFQfBYhfMCljSQ8Cm8m90UgzXYkaVi8LMSoKIVJVExibACbE5Ucj2n8CvsbsScinr8gCBpvUnaJnTwPBgkMeGNhUwtcDdIlSkINI5NyfgdE6NPt4gOORCQJycbKwodyHEMfszDCJ5ESDFClGPLTYwgT+i1EhWtIcKu3AhhMbiSpdyrSp06dQoya5sOKEN6kcTyRQIEBGgFpYC14woRIACAklw+oLkMjATrVJUhWQ16jfGgoT4Fb50AIRCmtWLoysE0gvlRfUvGi4agtCok6GbYX44iApFTr+hEau6YKFAc1WOsT8Mm6zLataXlQIZrYEY9N6PjwYkKLFBcuwc+vezbu379/AgwsfTry48ePIk1950CFFA1PKr6GEQJ1ChdfIcS/gUAdDC9zFHzTI0ILgiwiDv6iAjjxFLgQJhpzQkIhAWuQXEHohkO8C/T8UgGbcA/qBkc956SnG3nHuAcANESuEs0Yg4BH3QgsFlEfEBzP+CNAMCAR8F91eM1QwwVsjpqjiiiy26OKLMMYo44w01gjXBy/kWCGLFxQgAgEsxADWbw9AosUDISCwhgUowvbBBBYoYMEA2CExgZJrwFCRb/l9wcJMV0SQiAm/ZVBHDDsWMdkfGqRpWAJ1hFClEQ0kEsJvE5S1CBYbSFAHAQLq9kIMx4AQQ5NIrKABCiDAIAAmwX1wVBkPTFBBBwvaqOmmnHbq6aegKiHpADrR+EIIBCCAggILuKnHCw1IwIADgQ71QQx1iABNNC806AUFmdJ0QoFfaFTOASLUkUJTE9jlRWXlLMDas01tQKwXIbgKxwEy1KFMUx78mRcWJ0wwwgFZ2grxQQn9CIBoVgqMRIAYjUxgAAkkKNDBnEY80JMGMdRK1AW0FbABv0WcgBEABOy63APpGlbAHx7IKGYdZMZY55kynuDnFwHOeIAHLLDgAKQzvnDCwaEqFQQAIfkECQUANAAsAAAAAGQAZAAABv5AmnBILBqPyKTwMqtUZheldEqtWq/ClQMDAMBMC6x4TMZeZKCuWnAou9/wGERN93zg+Dz1JaHTWSd6goNEJwJ+ahQrhIxJLxuBVQ8iiF0sG1QPJSYqHhONZh4YIBAsJQ9UEWmIJlQTHH4BkaBSJxZ+MCl3tYd+BItSGwyIICGotEoFMIgos0ozGnQCA1QhlQAUn8hIDwbXBVUnAyEhLSe7Si8s1wAF6NuFMtceoBcE7DEv8EYP0ZUpoD6s+7bPyIcEq+iAaAPKwzUUIwry8+ZHF60TFCqF0CexyAMHLFCgkFDhGK0BAhKC8BClo8EFA0Y4o/VhRQoLCjw04Oiy5/6RDw8u8PRJtKjRo0iTKh304cWDB++W7jtQwoUBFyU2RFXyYUIICwFabJX6TMGyLiAUaJvyogSFOQBQxCBb5YCChGpYmFQyAAGuDHSlvFA1j8otRApaBj5yQt41FoqTwELEIsziIxsGVvo1hRJlTJeNHNCMiABoJTHwdnEwNPQSE+wktD5yoA8dCpZdE/nQAsW1FlRqmlglIbduIg9CqAbA2grQE0+PI+FNAQYIGCwK7JWe58GEFiMicx9Pvrz58+jTq1/Pvr379/B9PtoeX8oFUTAQmFgxtj6RC7BJA4x/MPFHRAtcKJTAbO3NwAEGHMwwxAcxVKIBfe05oIYDRP5UiMiF/mm42oEJ0pECg+zNEJIAEg5xwWFrnFZfgVFdEAMB1zmglX/BncPjj0AGKeSQRBZp5JFIJqnkktx90B+RLyxQQAAVGHjkCw0M0wWL6b2wQgvGUZGZH7KdxxsLBHDQwBUNIALDWuRNEqMVKbgJnHkPZGRJmHyphsKA5L0QQBogOIAhEhf4syGKx52QggYxiDfFfQSgQIAHhwr5wQIj7Mjkp6CGKuqopJZqxQMrMKRkBwJggIEBgNLkaAAdZCrRAmd1IYGqtKiIlgtIueAHCHfS8oIHKvHqk2N0ZPBkHon6USxRDilEDTLJKTRTTyvco4YG23J1gY9XLHCXF08hJNWCCRRQ4IGMU5yQgAIyhKDsFDal0IKtEn1wwQYb8OtRAHCBYICkQq6QaxfXGjkDIhUguYFvaoDAp5AvxHDWSgL790IFJmignakk7xMEACH5BAkFADQALAAAAABkAGQAAAb+QJpwSCwaj8ik8HVaLU4vpXRKrVqvy4KKRFBkHtiweBxOoABoACxEbrvftMU5jYaN4Pj8NAKipy16gYJDJn5pEoOJeR6GaBpWJy0VM1GKVi8jFiwCMRsfVCMIhiANVCcBcyAsE5WWSh8Vc2giM1UOfXQarUkvFrhpJAOuUjMMhrpUFzEUaCghB1QTv7kXw0kxEKMnVS8bCxMbYFQBjQAEE9ZIjI3oihrlMB3pRzHTaduKDuUEd/NFEwQMsfikaEA5Afj8DfmQIVuac65evPODooXCIxUUsGDhYIG1Aw5kUahwEcmDDQd2uXowIEaMAh5LypxJs6bNmzhz6tzJM8/+hwUNSlRYoHLKiwElOlTrWeVBBhYw1LCIsZTKCg0EYKAQsYLplA8JRNGBwIbKAQl+KGzwqqRDwEbCpjQYFYEtkhchygFwQCXvMYJ2iVwoVA7RnkaPAhd5oK9wtKh0QJBUTORDCntp6k55EAIyGhPiKA9ZIaARCmjJCghAMTWhaCEfOshCA2FylQ8vHrwA/HrhBhMEUBDQsIB3bzgXNrg+zry58+fQo0ufTr269evYsy+ZUCJBgRnGtRtRxgAGBBgMElR90cGABBNEs58wYA+EhW0vEnjGUKGo9AKYAQBCATRMwAwdAqx1XWnliEBDBvbAYJF1L4jVCAw0pOBQGhL+XveCZ4ZgOAAJfrAQk3UMNiIADZz9AkIG/kWXgl4pCPFABQIQIMEAoVl3ggKNKLCceENsYIEsCDigIJFHsBSDByEMEB6TVFZp5ZVYZqnlllx26eWXrlwwQQcjDHnlBi6cAYMGSzrHxJRK4LUhACZAB5IA911xQIrNtNkbXn2A4AKcR6xwIIe1NNdLGirEeMQFKqTVY2+wqEmgFZWmAcKEzj0wQgEjTErFAhpQoICUYKaq6qqsturqq7CyekIMMijQgqOC4KYbTi/IkAYEMeCax1EahWDmRQbRwUJXwyzAILA3zUgHDO240gIGh9zUQYknWrIAC2mUVdMLaKEBQgpXwuLxQQkicHTsRRuEoIAGBVRFxQcTRBDCCOka0YSoND1wwgWEHhEbBRCAQEADBYt3QrloMPAukQccqgZqWV7gaxosTCzewSAoXEHDRC6QQAzFxaqyJUEAACH5BAkFADQALAAAAABkAGQAAAb+QJpwSCwaj8jk8HW5vJTQqHRKrQ4/q5jBEFt8rOCwGDzjgAAAEGsybrvftJcETQdwHvC8PjqA1dEgLXuDhEMlZ38gKYWMeg0Qf2gFVl+NYActIQkzeFInFJEoJ1IvAyowICQhF5ZTKxKIKKtTJSh1IJNRHw0EfxajrUovGn8wJZVQLxUKKCgKFZ1QD6CJGcFKAxiREk9SHxcbGyfIUB2RaAqs10cFCJEE3Ywp5wACG+tHLbZ/LPGFDfQkAMNH5AKHSCHIETrhJ5IHfwSFzOhFx8RARh8yNKQj4GLEIQs8KNBQIJqlBxkEwIBBQMW9jzCPfNjQocIEkzFz6tzJs6f+z59AgwodKuXBggkrcE45sAAiUSgzTHCgwMHCBIVKTgSgQIJDCqxPjUxg8YfBjCkXVPyJADaskAMizlFwemQAIjoEDrhF0mBfpAFS5hUDvNeI4HMxpBSIBINN4SIZ6AHIBWUFRTrcHhcZcPnPAlIFLlNwrHnIAwvnNFB5MSGEgxReShfZoOCPgBWUPrQt/SCFAgoSSsoeTry48ePIkytfzry58+fQoxN8sWDECrrSxWpgQIKFhs8FWySoMC76iwLa6pCoUIk2xxHRZ6T/QwH3C9R1FHhcHkFyAhorHFQHAfA9Vxs9qi1A1oCEOSeDZKo9YIJtej3ngWQhSLQgACj+tLDbcX2c05gQM8VgggcbYJfcCyHcBUgKKkp3ngAowIACBxXEmB0NGwxQwQD77SjkkEQWaeSRSCap5JJMjvHCDAM0teQHHQhAAAoYSNCCjkV8cMAKG3zo1gMxQLKWmEtUIAMLEmTAJVEdzFcHBA2WcxkMHRB3AX6poXnaHxIQt8GGkVBQoRIXEFMHC4JScw4BLwkTwh8OEAeXZBQodcQCAuAVaWksSlbpFA8U8FqQj73yqKY7jjBHHQKQduQGKWgggQYphDnlAxc8gGaTwAYr7LDEXkNdASVc8KseH7yJTwJmroHPASkEMICzrVzgFwAOsDrICw6gQYKsOS3wh35d16ywoTU8XWAmGiZ4u8cDagEAQ4E8hdAQC3W2soIJCpQgL0EXVOBBCFeB8QK2XQ4Mk25goMQCC24y2YI7HAqi5AcJ1JHAstA10BAMGiv5QAIEUJCAw0I2W+zLOgUBACH5BAkFADQALAAAAABkAGQAAAb+QJpwSCwaj8ikcslsOp/Q5WOQSAwe0ax2q724SAAQyYPlms9oWggEaIdj6bi8+cC43YTyfM+nLWB3bRAbfYVyB4CBMCeGjUMXAxUtBy9PKoEAGk4fBykqEh4TH45NByqJAh2VTQssdyyErDJsbSgNo6RJLw6BHCubCyEaGjELuEsvFrRuDAu5SQtggQXHTB8XJ9VLF4l3IHDPRx0omCHaewuYbQ7hRxvSdxWOJ8t3Ie1Gu4Gwjh8imDAG4DPywAQMEDAkiCI1gUKgGOcGflhRYYKefhNMUKAgIcXAj0pebFhwISLIkyhTqlzJsqXLlzBjSrlwUaajBxkMqDBQ4UL+lA0BNIQ4YJOOgW4IPPhs8qEFATcIJhQN6aBem3tNTly6I2HVVCMzXGEiYLLICjt3UBD9aqQFWkyMmKx4mjYuWyId6GKqieSBhUCa7hbZ8A8TiyczFNCS8EswkQ8prIKQt2lDixgtNpT9+iDGMhAp+FpznOTDhhgOUmQjzbq169ewY8ueTbu27du4c+vG9+KE193bEkgQoCDFbxovDmygtPvDBAnLIGhYS6OzHRQR7N4+IUOdgzIlusHwmLuD1TYEnL3Y6kbB0tsR1LXpgFxBIAnaaweQD4CyZ3vH0VaBfDBIRcMJVbVhQiy4bSBWIO4N8cAMFYlGW1N6tcHCDMD+KTGDRgRQ4ACDHSaxwgQHbFbiiiy26OKLMMYo44w01mgjEheEIAAFAiSQXxMvPBCgYx8M4NArBjoRjAUhzKCiTSsUFogAFhqxwixtCPCeYy8kcF4bLTAV2R0FtHaBAfyZAGR8d0TQmlb8KeBEBQjcIRBrD/AinwdOeEELGa19UEE3gYwAxQYVaPbaAy6cxyeMJ3hATi1KyThFAh6kYFGNHzx546egXvjAAQesZmkHDgyngY8xfhBBhiAY0FhKQb7gKRoNQKCOCVt+dEAIDCgwwK1cXPCgIregFAEtAsxayACTquPBkOF0Vwt9jRRQp3wmVJmLB26w4EwjLWzrHbVTz2xgAgsCVEDsFiccG4i7KT2wAHWOpCCfBCSyNoMLHoxLhwljLeRaK1n2q8QDFQhAAAoiesvWOOgZCsUDG8xQkmwIA9AsjR+MoIEJBodq8skDBQEAIfkECQUANAAsAAAAAGQAZAAABv5AmnBILBqPyKRyyWw6n9Dla1IqLV7RrHarfUQoMASrhOWaz2haAQJoA2CTtHzuZLndGrp+X8Tc2wJ8gnoCfwB5g4lDHxcbB2VOFWxuMAtPDxMpEQMnik8NKhwiKReXKSwwMAIVkEsXAShtICoHnkwTfm0wEQ9PLwstLRutSh8ZMH8mxLZFGn8EM4oPhX8o0cxHL3Z/A4ovsX8wDdhHHzLhcYkvFIYoI+RHDX8KnYkfAYYCvfBFHykEMFBo2GDrgAYQbggQ5HfkxABL2E4U0KDAw0KGGDNq3Mixo8ePIEOKHEmypMkPExIESLEiy4cBBWYsM3mkAAEIICBwaPHhyf6Kc20UlKKZpASyOyjSMXkRAKGbFESRXFBgCIADJyck/JER9ciCbX8CNTlB9Q6irkRWUAvr5MUxNyBaoC3ywETVGE9OhABDIcbMriMI/GFxscmDBRNW7JtL5MMIsBJm9GQ85/CEYZQza97MubPnz6BDix5NurTp06gZTghgIUZhIYxODD19wgUCWRgKtBqggoWKAZNJvwgxyQ0GnkJWsGvD4hrpDSSqahgaozgIvKVHVAVAYWEIpwBAhDDdYTsFiCNyAXBnegG4PxLqvSjAAAYFVqYfuDAEokLwDydscEJwpa2gAHggBLBYakY8UIACAmggF4MUVmjhhRhmqOGGHP526OGHIG7xwgABmBDBCgReeIBdlHgwmxMrDHBAinNdYAF4skQARQMCECCBUpR1oB5SCyqhlhsy/EXTBzFsB0A3TczAgBssFNnVcE5WgJUBsoSg5EkZ4HgHkEtsEIICMdST2QzLPUMjgwW810ZSGn5QgQAogICCAgN8idoHBwzQwgRqhmjooYiW9sIDfqb2wQoFeOBBAu/U2YEAxZGQQaO2fPDCm3xsIFg1BYCKzQsteJBBoYJ8wGVVArSk0QC5BMCpGSdEVxUME2bUZBscsLrHDEP+UcJGLUyiTF4ZCIAAAjJU8CISom4X10YPZKCAA68pcUBZcFkwrREfqLAdC1QQYWtqgw6IGV4Efk5w1B9+BTmqIectYYycAHhgZVQROAlCAU2YKQALJkBJ2T0CJ3BhwNYSbGEL9z5DZmp1bRfAuqVtAK4bJoxL4QYpCBCQBNJqFAQAIfkECQUANAAsAAAAAGQAZAAABv5AmnBILBqPyKRyyWw6n1Dma3P6RK/YrHZhEYhCB614TB4eOCAAAGS6lN9wZ0RNBwzi+HxRU1cn9IB4Ln0AFYGHRS8XD1EzKHUUJ09TJSUDjIhOKxEaLgMvkxUCKCgKE1ZNLwUUajAumJlKDyJpABQtqE0fGy0Dkk8TJH0xsUsZfQq/gR8hhJHFSSZ9LCuILxaEBAvQSDF9EsqAH97TbtxGJwx0MCm5gQssfSnnSCsmBBK4sR8zIjAwKEKAokcQyYMBAza4K8iwocOHECNKnEixosWLGDPSu9ChxISBUR6E0dhkgQAMMEiYGOnkQgQYAAhkAEnSyAJhdZI5+VABwf66DTWPfPBQiw6IO6k89CkQ1MgDFYQAEEsVoI+hpkReQCU0z8kAdWoomMM6JEXRVtt2ttAgwcQpskROGKgDIgQsJydO3IUr5EAICigEFNjLV8yHDw8OF17MuLHjx5AjS55MubLly5gza05ysMGChZuHvKhAAQYEGAqqEXnQosCnyx8aYPjGkkYEnxhKXD6xlW4GVBcI0OFAU/KG2YRMYApOh0XxyBseJR8bAgIAGEwtn1AQNUauCyVitHge+UUJmHVYACWiOLMq4WoEfA595ESBFANA09/Pv7///wAGKOCABBZo4GMfXDBAATO8oN9mDxTgkxocjBfFCyeQ19QLGf5MSAcBE0CxggYCBBAOWSsIEJUGk0izxm+FNSBdHzA8aMQF3KnhgYYkVYAeIYQh8UEGMBHQgY0aDYBTHwRA8cAIDAYZFI5RheBfin208d8GDgjAggQpnMjfBwcsIOaBaKap5hgYHrCBlKGtEIIMLIjgCY9xKFhABi2cec4IEpxFQAJIlrGBBSRAAAIGMqRV0AqBEgLDCIc8IMNZAHCgGj0vmBUVABLgOcYxUZkgKiAX8PEpCuvpIcOnAmzKzQUifAoACkjpwUpUFIS4kapRoSCrQRMEoIABMSxwKg0SfKoeQZ1iSocAhT4Qg4cAkFBCoTQU8KkDcCJi0qctMEEkIWsYULrECSoyOQNDHyhJSAiFbsDBpxpwu0COaoDILSInOEABAQSokB8TFczYBwWOKvHBBDHE0EG43Hxwwga1LVHAj0yqG5qMn2qzn72fKrCsZOf2gYKv+z2QAHxhXdXfCxN4IIECMazwbyBBAAAh+QQJBQA0ACwAAAAAZABkAAAG/kCacEgsGo/IpHLJbDqf0Kh0Sq1CLxmNpfWyer/fiwkGAKBSXbB63RyAymXCgU2vFzNw+MbOp7fyADBzfYRhCm8AICFpTg8HGxcfhU8XLSkle1ArHgIKKSdPHwsuHCwmI5NOLiiBGitRLyegUAcKeRSDqUkLEHAgMZKFDYhwEbpKFYAmD4UfEYAAGsdJM4CLk8nW00gfJnACC6kbAnkoudtFDxUeFSfBzSsKKCgS4ej3ShsbzPj9/v8AAwocSLCgwYMIEyr092LFiFcLC71wQQEDhQCznhyIoCJBxohHXnjLY+LCkxMm3oCIwAhkkQms8oCY8WQCg2/8XBYpQQZQ/oUnKzjAUdBSp5AWPfO0CFWCBQoBE4wauSACEItzTEQN2PBO6pABLOBQaNHVqxVRBTwUWFDW7JcPbd3KnUu3rt27ePPq3cu3r9+/gAMXeXGgqGAiHzaYQACDRIqcQkR1gOh3BjlfASAP4IBBAOW9D0IQizOAiAE4AfxesAUIRAYiGuB4UM1a5ushI5x69hsaGoHSQ7Rmqhw2jwPIh2l8WKEBBogzyJMPcWRYuvXr2LNr3869u/fvgU+MqDAhevIHGRigQNC5Q1ydLy4cePA+5Mg8EBKYj/hhgoReCLjAVRMFQEOaWSPc5IsKHyFBlYFleLBfQg+c1loBTMxAAIQA/gjQYEQzFAeIAkxMsCGEAmAVkU0GSsDEARRwqMGHC50ggYEOMCEShynUh9AHMYwWSFRMnBAjNDOa9UIAMQFAQAM+EjGAAKO5ItcHLXhgQghshbJBASZo4EAFJmn3wQsPvBAleGy22WYs9G2njgcGOJDBgJMkNsAAK1S3zQkuIAAHBBIQSQgWIpBAAAcB+KnLAy70YlWZfDiTVCIWTDjJABhAGAMhKwgZSAn4vBADhwIQkgCEJqxpxwsecEgAIS5AqICmfZiKahMfHNBBBAlMEEkTpxpogqOFDNAkIJ8y0YJQZUCggT1LrHBpGSD8hM8FDohKAI0vHZmHBJQm8UEAWEIu488JDgDCACpL7AgNCCk08UAKR8IQQrn9DOCABBqUgKsQCygIjQKuCqFPwghNQAKKyO61gsEjMmyXvNBgaN0KIg41MF8DHBKtCcNZ98EJA6RA3seEBAEAIfkECQUANAAsAAAAAGQAZAAABv5AmnBILBqPyKRyyWw6n9CodEqtQj+TSGZl7Xq/rwIBAmGNvuj080QCuAGah3pOL67ebtapzp8fMHgKF32EYCkEICAUA1EfFycvhVEXK3tRLwMhMQsfUCcZKioRB5JOByYcEg2lNA8RMG4gGqxMDm8CXJIzbXgTtEoCbwSMkiMQeAAFv0kBIG4CpJILFMi+y0cbLhQKI52SD81vCt7XRi8PD+TfFQoSKZbl8fLz9PX29/j5+vv8/f7/AAMKpPJhgAEOFhZIeTCiwAw5A498SICHQAd1Sz5kgGURY0QaB3i9MQCPyQUFbzxE+khkAAJkLKI1eWHiTQqPEWegQCahJP6TFRoEeBjEksgLFXhAxFj55MUFpkWHLFDgDIUHn1GtnBjQYgLErGDDih1LtqzZs2jTql3Ltq1bGi86RNA0AupbIgc8IAKgKALWtweoIgNggmjaBx0EEBDRYmWEwW+UpX0RA5YbGAnkMIDsRoLaCZvxUJhBwxlnFGorHMMDowSN1ZAJpLb8pjUNFpwByFC7gAMyCgpT5K6gNgxtEAU6ndAA2cRXtC8mBNUwgNwJB3sBEAhh+K7RASliFJiA07v58+jTq1/Pvr379+wvbHie/sMMAxQIMHDw9+OHFwCWh0QBO4lGXlYHRMACARJU0J0SKwAymAQbRLUcHgjEQB8SHv5wBoFkLCUAmxsYKLTEC8FwphJLR0GWARMv+MaZAxsC9ABKg8XQBHOcxSBgPx90OBgxS7TAGQFnFLUAAcgo0J8RDpj2BggvZjUBCyiAgIIJFTpxQQgUmMZCAXaxdEEL4/14xAsLVFBACyuoCd+cdNZp551CzFBAAimMUGMfJ6xQZjkfFMDAaiRcJQkWLsjAgQYd0PNBCRJO6cKgagwQ2mUVyNnHBiJwZiIfD2wqzKjXdFDgYCEQsoCUtaUgj2ozEtIBZ63GM0ClyOjYxAMbzLDCAZgasQBkyMlzgAScdbnEBgGQkAgLCTyIxAfMwuTsNR+0sGpKcl6AFB4QBODEAFi41RbpPJgwGYtfTWQwohsooJrEBwt4wAIFDhxYzwMDvPmnER/gOFgE6D0QKmQeoPcBjzmm1wCs9G7r3QcO0AYADMSp90AGChBAgQaNsffCCRtscIKnhAQBACH5BAkFADQALAAAAABkAGQAAAb+QJpwSCwaj8ikcslsOp/QqHRKrUofL6t2yxVeQiRKKtstm5efAgwAQHTO8PjwFWGzM/K8+VOCsFFveoJbDzEULAVkUC+Kg08vH1SQUi8jMREtD45NDwUqDhubNC0sbBgJoksdCGwmjXknBnYAMK+pRDF2HCeOKwKzAKG3RwMEbB62cReydijJwy8dHgW8jh8DFGwgBcNJH5OiHycFBQuR3ejp6uvs7e7v8PHy7y8PFw/n84MfKykmMhYyCNOnZ4AAP9oUzCAIKxswAAoOMFxyIoGHFs+MfLDw0E6MfBOLzMBgR8JAJQcYdGSjoFrIIhpmgYiRccgMYytZnHxJ4wP+CWAmLjBZ4bCjgJ08f83yoGnJCwUrAThoynNIHzsEBjhpAaIjCq1VibyIIYCCAoxOPnjoOCZskQ8HFpwAyeRFBQEwYCAQMICuWy0PFgxYUfOv4cOIEytezLix48eQI0sOe2JAgwEuJyt50UAEARQkZKDVjITOmlkIEhRG/GJFAAspJAoZgMLrwsgfKuAEIGCFkABRQ0hewQGYgywyoiqQ3KL2LAESoa7UILmDczsCeOVamULyBgnAPES66dU37gGl2Gio9qLA9T8VVh+GWyAG5iITFFAgQEDDbdJK8DPBCn4BaOCBCCao4IIMNujggxBG6MgFJajAggbxLfZNgUr+LCACMAZk5tYHMyTgQAwLyEfDUw+BwNRhIxTFQAUc4tfVQxRMYNgFStnBgmxL1NERCBUYtspDLTQhZIvc/FXBabM0uUQDKwFi2AokyaQjEw/sNosEIvKkFjAaULVEMcBQsABiHxiCAgUehOnNCCbsR4EJSP11glxTBDbBBipKKOighBZqqBEXjFBBBwfUKIejt6ygHwIYSJDhIONooEEEeUbaIxsIFADpFgdocBoIDHS6yQsO3DgLAWbC8QFwwEgQayrfrbSlHC8UZQcGuw6zQHEdFZnHA1DaAUMD6RyQXEfBBnjBBgdcMKoQL6T36n/DtOmqj/I9UCEJDJjQgXxkH6TwLQAmXJtHqcCgkGQTGbyXlRMneAClBECmk69zCowg3wZessGCig9MEEMILciZzq1LqNviCAxGsC4AIDC7YAkXg7Dmghf4yoYE7kKGzSw6OfjCBCEooEEMG5QsmTgXBJpHEAAh+QQJBQA0ACwAAAAAZABkAAAG/kCacEgsGo/IpHLJbDqf0Kh0Sq1ar9is9TMwmUYfrXjcXHAAAMGKzG5+LpPNK9pBoAmjth55cbBIFAoND08rLGgCG3uLQlwMaJAgLoROMx4ea4yLGyKQngAFmjQfKxMXokofGRCfkCyniy8FAgwWiqhHDxatkCh5iwOPaDG4RxcKvGgwLYwVKJAaxUa6yQAwE4wLhwAgKdJFHwUgyQKUey8dEhQhsN9DJyrJzJofLw9h7kULyJ4wKfj5Ah6IoYAFCwcD5gRcSOPFiQMnzDGcSLGixYsYxdQDmBHVgxEFQmRI2FHUCRcEIBEI0K6kHgvjPEEIoNClkhcLKhyA0iIZ/ooKNpU8MDAORAiJSnYl81AzaJEGnjDMYyKhmgakToU4+ESsSbxkDrBmjeEJRKgmKar9y2rkwDYAGm4xuUCBVyK2Rj5YMpFiAZQBdT2RwIb3yAexTA6EYEGABbvCkCNLnky5suXLmDNr3sy5s+d8HzZMyPS5yQoLLBiwsEC6tOERb9EwGMCR84URFWaYO8Dvk4ATn1doQAPCA6UBrHgN8PzCRUxrJYQUqNaV84FOnqLRmJ7MW+cDVT2ZEDLBDi/CnD9EeA6jg5ALBngpaLn5RAgYAAisFbJCwfM0C9S22QsbbHBCU6OkoIAACiQAnGtMHCYghBRWaOGFGGao4YYc/nbo4YeofHBACgGkcMCEkaEoVATmcZMCYlmF1kACLez0RAb49RPdZDOIMA4EGrR2U2CfSGAjZC/0xo1xTWzwn0roFbZASp6wIJcSKyRDwHKRLfCMJxRcmcQDX35ipWQPnJEdfUl4wIsHKgbVQo750ebECSb8Z0KcTi3ggAIhiDlXARpIoEEBMFr4wAWJgujoo5BGKukSH5ywwAoIZvhBAjKwIIADM+DywAAVYDrRCwEkhwYLfjHywQgiIIAACi5kKo0zrShg6xjafBICn4t84AIvEDR6hSqtUHDkNy+YkMyybHzg5icoRPmNB09aY+wQb1ywq2FpfRLmQiMQCYkDZ8COskACBpiQwArp0rCAuQB4wJAsdAKggKBIzKAmNyLwe8QLDbylwYMLceGAABKkcEK8SqIxnhOhVVDABAhLdkC+ymzL2QwcWwNthReU2Uu8nE3rSXUZ9vElCkxyOGoMMQzg8aRtBAEAOw==",
        imagePosition: "center center",
        maxSize: "100px",
        minSize: "20px",
        resizeInterval: 50,
        size: "50%",
        zIndex: 9999
    };
    r.LoadingOverlaySetup = function(e) {
        r.extend(!0, s, e)
    }
    ,
    r.LoadingOverlay = function(e, t) {
        switch (e.toLowerCase()) {
        case "show":
            n("body", r.extend(!0, {}, s, t));
            break;
        case "hide":
            o("body", t)
        }
    }
    ,
    r.fn.LoadingOverlay = function(e, t) {
        switch (e.toLowerCase()) {
        case "show":
            var i = r.extend(!0, {}, s, t);
            return this.each(function() {
                n(this, i)
            });
        case "hide":
            return this.each(function() {
                o(this, t)
            })
        }
    }
}(jQuery),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(c) {
    "use strict";
    var n, r = window.Slick || {};
    n = 0,
    (r = function(e, t) {
        var i = this;
        i.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: c(e),
            appendDots: c(e),
            arrows: !0,
            asNavFor: null,
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function(e, t) {
                return c('<button type="button" data-role="none" role="button" tabindex="0" />').text(t + 1)
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "",
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            verticalSwiping: !1,
            waitForAnimate: !0,
            zIndex: 1e3
        },
        i.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
        },
        c.extend(i, i.initials),
        i.activeBreakpoint = null,
        i.animType = null,
        i.animProp = null,
        i.breakpoints = [],
        i.breakpointSettings = [],
        i.cssTransitions = !1,
        i.focussed = !1,
        i.interrupted = !1,
        i.hidden = "hidden",
        i.paused = !0,
        i.positionProp = null,
        i.respondTo = null,
        i.rowCount = 1,
        i.shouldClick = !0,
        i.$slider = c(e),
        i.$slidesCache = null,
        i.transformType = null,
        i.transitionType = null,
        i.visibilityChange = "visibilitychange",
        i.windowWidth = 0,
        i.windowTimer = null,
        e = c(e).data("slick") || {},
        i.options = c.extend({}, i.defaults, t, e),
        i.currentSlide = i.options.initialSlide,
        i.originalSettings = i.options,
        void 0 !== document.mozHidden ? (i.hidden = "mozHidden",
        i.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (i.hidden = "webkitHidden",
        i.visibilityChange = "webkitvisibilitychange"),
        i.autoPlay = c.proxy(i.autoPlay, i),
        i.autoPlayClear = c.proxy(i.autoPlayClear, i),
        i.autoPlayIterator = c.proxy(i.autoPlayIterator, i),
        i.changeSlide = c.proxy(i.changeSlide, i),
        i.clickHandler = c.proxy(i.clickHandler, i),
        i.selectHandler = c.proxy(i.selectHandler, i),
        i.setPosition = c.proxy(i.setPosition, i),
        i.swipeHandler = c.proxy(i.swipeHandler, i),
        i.dragHandler = c.proxy(i.dragHandler, i),
        i.keyHandler = c.proxy(i.keyHandler, i),
        i.instanceUid = n++,
        i.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
        i.registerBreakpoints(),
        i.init(!0)
    }
    ).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
    ,
    r.prototype.addSlide = r.prototype.slickAdd = function(e, t, i) {
        var n = this;
        if ("boolean" == typeof t)
            i = t,
            t = null;
        else if (t < 0 || t >= n.slideCount)
            return !1;
        n.unload(),
        "number" == typeof t ? 0 === t && 0 === n.$slides.length ? c(e).appendTo(n.$slideTrack) : i ? c(e).insertBefore(n.$slides.eq(t)) : c(e).insertAfter(n.$slides.eq(t)) : !0 === i ? c(e).prependTo(n.$slideTrack) : c(e).appendTo(n.$slideTrack),
        n.$slides = n.$slideTrack.children(this.options.slide),
        n.$slideTrack.children(this.options.slide).detach(),
        n.$slideTrack.append(n.$slides),
        n.$slides.each(function(e, t) {
            c(t).attr("data-slick-index", e)
        }),
        n.$slidesCache = n.$slides,
        n.reinit()
    }
    ,
    r.prototype.animateHeight = function() {
        var e, t = this;
        1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical && (e = t.$slides.eq(t.currentSlide).outerHeight(!0),
        t.$list.animate({
            height: e
        }, t.options.speed))
    }
    ,
    r.prototype.animateSlide = function(e, t) {
        var i = {}
          , n = this;
        n.animateHeight(),
        !0 === n.options.rtl && !1 === n.options.vertical && (e = -e),
        !1 === n.transformsEnabled ? !1 === n.options.vertical ? n.$slideTrack.animate({
            left: e
        }, n.options.speed, n.options.easing, t) : n.$slideTrack.animate({
            top: e
        }, n.options.speed, n.options.easing, t) : !1 === n.cssTransitions ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft),
        c({
            animStart: n.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: n.options.speed,
            easing: n.options.easing,
            step: function(e) {
                e = Math.ceil(e),
                !1 === n.options.vertical ? i[n.animType] = "translate(" + e + "px, 0px)" : i[n.animType] = "translate(0px," + e + "px)",
                n.$slideTrack.css(i)
            },
            complete: function() {
                t && t.call()
            }
        })) : (n.applyTransition(),
        e = Math.ceil(e),
        !1 === n.options.vertical ? i[n.animType] = "translate3d(" + e + "px, 0px, 0px)" : i[n.animType] = "translate3d(0px," + e + "px, 0px)",
        n.$slideTrack.css(i),
        t && setTimeout(function() {
            n.disableTransition(),
            t.call()
        }, n.options.speed))
    }
    ,
    r.prototype.getNavTarget = function() {
        var e = this.options.asNavFor;
        return e = e && null !== e ? c(e).not(this.$slider) : e
    }
    ,
    r.prototype.asNavFor = function(t) {
        var e = this.getNavTarget();
        null !== e && "object" == typeof e && e.each(function() {
            var e = c(this).slick("getSlick");
            e.unslicked || e.slideHandler(t, !0)
        })
    }
    ,
    r.prototype.applyTransition = function(e) {
        var t = this
          , i = {};
        !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase,
        (!1 === t.options.fade ? t.$slideTrack : t.$slides.eq(e)).css(i)
    }
    ,
    r.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(),
        e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }
    ,
    r.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }
    ,
    r.prototype.autoPlayIterator = function() {
        var e = this
          , t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll,
        e.currentSlide - 1 == 0) && (e.direction = 1)),
        e.slideHandler(t))
    }
    ,
    r.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = c(e.options.prevArrow).addClass("slick-arrow"),
        e.$nextArrow = c(e.options.nextArrow).addClass("slick-arrow"),
        e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
        e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
        !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }
    ,
    r.prototype.buildDots = function() {
        var e, t, i = this;
        if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
            for (i.$slider.addClass("slick-dotted"),
            t = c("<ul />").addClass(i.options.dotsClass),
            e = 0; e <= i.getDotCount(); e += 1)
                t.append(c("<li />").append(i.options.customPaging.call(this, i, e)));
            i.$dots = t.appendTo(i.options.appendDots),
            i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }
    ,
    r.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.$slides.each(function(e, t) {
            c(t).attr("data-slick-index", e).data("originalStyling", c(t).attr("style") || "")
        }),
        e.$slider.addClass("slick-slider"),
        e.$slideTrack = 0 === e.slideCount ? c('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(),
        e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),
        e.$slideTrack.css("opacity", 0),
        !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1),
        c("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        !0 === e.options.draggable && e.$list.addClass("draggable")
    }
    ,
    r.prototype.buildRows = function() {
        var e, t, i, n = this, o = document.createDocumentFragment(), s = n.$slider.children();
        if (1 < n.options.rows) {
            for (i = n.options.slidesPerRow * n.options.rows,
            t = Math.ceil(s.length / i),
            e = 0; e < t; e++) {
                for (var r = document.createElement("div"), a = 0; a < n.options.rows; a++) {
                    for (var l = document.createElement("div"), c = 0; c < n.options.slidesPerRow; c++) {
                        var d = e * i + (a * n.options.slidesPerRow + c);
                        s.get(d) && l.appendChild(s.get(d))
                    }
                    r.appendChild(l)
                }
                o.appendChild(r)
            }
            n.$slider.empty().append(o),
            n.$slider.children().children().children().css({
                width: 100 / n.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ,
    r.prototype.checkResponsive = function(e, t) {
        var i, n, o, s = this, r = !1, a = s.$slider.width(), l = window.innerWidth || c(window).width();
        if ("window" === s.respondTo ? o = l : "slider" === s.respondTo ? o = a : "min" === s.respondTo && (o = Math.min(l, a)),
        s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
            for (i in n = null,
            s.breakpoints)
                s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? o < s.breakpoints[i] && (n = s.breakpoints[i]) : o > s.breakpoints[i] && (n = s.breakpoints[i]));
            null !== n ? null !== s.activeBreakpoint && n === s.activeBreakpoint && !t || (s.activeBreakpoint = n,
            "unslick" === s.breakpointSettings[n] ? s.unslick(n) : (s.options = c.extend({}, s.originalSettings, s.breakpointSettings[n]),
            !0 === e && (s.currentSlide = s.options.initialSlide),
            s.refresh(e)),
            r = n) : null !== s.activeBreakpoint && (s.activeBreakpoint = null,
            s.options = s.originalSettings,
            !0 === e && (s.currentSlide = s.options.initialSlide),
            s.refresh(e),
            r = n),
            e || !1 === r || s.$slider.trigger("breakpoint", [s, r])
        }
    }
    ,
    r.prototype.changeSlide = function(e, t) {
        var i, n = this, o = c(e.currentTarget);
        switch (o.is("a") && e.preventDefault(),
        o.is("li") || (o = o.closest("li")),
        i = n.slideCount % n.options.slidesToScroll != 0 ? 0 : (n.slideCount - n.currentSlide) % n.options.slidesToScroll,
        e.data.message) {
        case "previous":
            s = 0 == i ? n.options.slidesToScroll : n.options.slidesToShow - i,
            n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide - s, !1, t);
            break;
        case "next":
            s = 0 == i ? n.options.slidesToScroll : i,
            n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide + s, !1, t);
            break;
        case "index":
            var s = 0 === e.data.index ? 0 : e.data.index || o.index() * n.options.slidesToScroll;
            n.slideHandler(n.checkNavigable(s), !1, t),
            o.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    r.prototype.checkNavigable = function(e) {
        var t = this.getNavigableIndexes()
          , i = 0;
        if (e > t[t.length - 1])
            e = t[t.length - 1];
        else
            for (var n in t) {
                if (e < t[n]) {
                    e = i;
                    break
                }
                i = t[n]
            }
        return e
    }
    ,
    r.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && c("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", c.proxy(e.interrupt, e, !0)).off("mouseleave.slick", c.proxy(e.interrupt, e, !1)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
        e.$nextArrow) && e.$nextArrow.off("click.slick", e.changeSlide),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        c(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && c(e.$slideTrack).children().off("click.slick", e.selectHandler),
        c(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
        c(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        c("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
        c(window).off("load.slick.slick-" + e.instanceUid, e.setPosition),
        c(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }
    ,
    r.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", c.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", c.proxy(e.interrupt, e, !1))
    }
    ,
    r.prototype.cleanUpRows = function() {
        var e;
        1 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"),
        this.$slider.empty().append(e))
    }
    ,
    r.prototype.clickHandler = function(e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(),
        e.stopPropagation(),
        e.preventDefault())
    }
    ,
    r.prototype.destroy = function(e) {
        var t = this;
        t.autoPlayClear(),
        t.touchObject = {},
        t.cleanUpEvents(),
        c(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        t.htmlExpr.test(t.options.prevArrow)) && t.$prevArrow.remove(),
        t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        t.htmlExpr.test(t.options.nextArrow)) && t.$nextArrow.remove(),
        t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            c(this).attr("style", c(this).data("originalStyling"))
        }),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slideTrack.detach(),
        t.$list.detach(),
        t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        t.unslicked = !0,
        e || t.$slider.trigger("destroy", [t])
    }
    ,
    r.prototype.disableTransition = function(e) {
        var t = {};
        t[this.transitionType] = "",
        (!1 === this.options.fade ? this.$slideTrack : this.$slides.eq(e)).css(t)
    }
    ,
    r.prototype.fadeSlide = function(e, t) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(e).css({
            zIndex: i.options.zIndex
        }),
        i.$slides.eq(e).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e),
        i.$slides.eq(e).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }),
        t && setTimeout(function() {
            i.disableTransition(e),
            t.call()
        }, i.options.speed))
    }
    ,
    r.prototype.fadeSlideOut = function(e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e),
        t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }
    ,
    r.prototype.filterSlides = r.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides,
        t.unload(),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slidesCache.filter(e).appendTo(t.$slideTrack),
        t.reinit())
    }
    ,
    r.prototype.focusHandler = function() {
        var i = this;
        i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(e) {
            e.stopImmediatePropagation();
            var t = c(this);
            setTimeout(function() {
                i.options.pauseOnFocus && (i.focussed = t.is(":focus"),
                i.autoPlay())
            }, 0)
        })
    }
    ,
    r.prototype.getCurrent = r.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }
    ,
    r.prototype.getDotCount = function() {
        var e = this
          , t = 0
          , i = 0
          , n = 0;
        if (!0 === e.options.infinite)
            for (; t < e.slideCount; )
                ++n,
                t = i + e.options.slidesToScroll,
                i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (!0 === e.options.centerMode)
            n = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount; )
                ++n,
                t = i + e.options.slidesToScroll,
                i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else
            n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return n - 1
    }
    ,
    r.prototype.getLeft = function(e) {
        var t, i = this, n = 0;
        return i.slideOffset = 0,
        t = i.$slides.first().outerHeight(!0),
        !0 === i.options.infinite ? (i.slideCount > i.options.slidesToShow && (i.slideOffset = i.slideWidth * i.options.slidesToShow * -1,
        n = t * i.options.slidesToShow * -1),
        i.slideCount % i.options.slidesToScroll != 0 && e + i.options.slidesToScroll > i.slideCount && i.slideCount > i.options.slidesToShow && (n = e > i.slideCount ? (i.slideOffset = (i.options.slidesToShow - (e - i.slideCount)) * i.slideWidth * -1,
        (i.options.slidesToShow - (e - i.slideCount)) * t * -1) : (i.slideOffset = i.slideCount % i.options.slidesToScroll * i.slideWidth * -1,
        i.slideCount % i.options.slidesToScroll * t * -1))) : e + i.options.slidesToShow > i.slideCount && (i.slideOffset = (e + i.options.slidesToShow - i.slideCount) * i.slideWidth,
        n = (e + i.options.slidesToShow - i.slideCount) * t),
        i.slideCount <= i.options.slidesToShow && (n = i.slideOffset = 0),
        !0 === i.options.centerMode && !0 === i.options.infinite ? i.slideOffset += i.slideWidth * Math.floor(i.options.slidesToShow / 2) - i.slideWidth : !0 === i.options.centerMode && (i.slideOffset = 0,
        i.slideOffset += i.slideWidth * Math.floor(i.options.slidesToShow / 2)),
        t = !1 === i.options.vertical ? e * i.slideWidth * -1 + i.slideOffset : e * t * -1 + n,
        !0 === i.options.variableWidth && (n = i.slideCount <= i.options.slidesToShow || !1 === i.options.infinite ? i.$slideTrack.children(".slick-slide").eq(e) : i.$slideTrack.children(".slick-slide").eq(e + i.options.slidesToShow),
        t = !0 === i.options.rtl ? n[0] ? -1 * (i.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0,
        !0 === i.options.centerMode) && (n = i.slideCount <= i.options.slidesToShow || !1 === i.options.infinite ? i.$slideTrack.children(".slick-slide").eq(e) : i.$slideTrack.children(".slick-slide").eq(e + i.options.slidesToShow + 1),
        t = !0 === i.options.rtl ? n[0] ? -1 * (i.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0,
        t += (i.$list.width() - n.outerWidth()) / 2),
        t
    }
    ,
    r.prototype.getOption = r.prototype.slickGetOption = function(e) {
        return this.options[e]
    }
    ,
    r.prototype.getNavigableIndexes = function() {
        for (var e = this, t = 0, i = 0, n = [], o = !1 === e.options.infinite ? e.slideCount : (t = -1 * e.options.slidesToScroll,
        i = -1 * e.options.slidesToScroll,
        2 * e.slideCount); t < o; )
            n.push(t),
            t = i + e.options.slidesToScroll,
            i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return n
    }
    ,
    r.prototype.getSlick = function() {
        return this
    }
    ,
    r.prototype.getSlideCount = function() {
        var i, n = this, o = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0;
        return !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each(function(e, t) {
            return t.offsetLeft - o + c(t).outerWidth() / 2 > -1 * n.swipeLeft ? (i = t,
            !1) : void 0
        }),
        Math.abs(c(i).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
    }
    ,
    r.prototype.goTo = r.prototype.slickGoTo = function(e, t) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }
    ,
    r.prototype.init = function(e) {
        var t = this;
        c(t.$slider).hasClass("slick-initialized") || (c(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && (t.paused = !1,
        t.autoPlay())
    }
    ,
    r.prototype.initADA = function() {
        var t = this;
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        t.$slideTrack.attr("role", "listbox"),
        t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(e) {
            c(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + t.instanceUid + e
            })
        }),
        null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function(e) {
            c(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + t.instanceUid + e,
                id: "slick-slide" + t.instanceUid + e
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"),
        t.activateADA()
    }
    ,
    r.prototype.initArrowEvents = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide),
        e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide))
    }
    ,
    r.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && c("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide),
        !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && c("li", e.$dots).on("mouseenter.slick", c.proxy(e.interrupt, e, !0)).on("mouseleave.slick", c.proxy(e.interrupt, e, !1))
    }
    ,
    r.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", c.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", c.proxy(e.interrupt, e, !1)))
    }
    ,
    r.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler),
        e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler),
        e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("click.slick", e.clickHandler),
        c(document).on(e.visibilityChange, c.proxy(e.visibility, e)),
        !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler),
        c(window).on("orientationchange.slick.slick-" + e.instanceUid, c.proxy(e.orientationChange, e)),
        c(window).on("resize.slick.slick-" + e.instanceUid, c.proxy(e.resize, e)),
        c("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        c(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        c(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }
    ,
    r.prototype.initUI = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(),
        e.$nextArrow.show()),
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }
    ,
    r.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "next" : "previous"
            }
        }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "previous" : "next"
            }
        }))
    }
    ,
    r.prototype.lazyLoad = function() {
        function e(e) {
            c("img[data-lazy]", e).each(function() {
                var e = c(this)
                  , t = c(this).attr("data-lazy")
                  , i = document.createElement("img");
                i.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy").removeClass("slick-loading")
                        }),
                        n.$slider.trigger("lazyLoaded", [n, e, t])
                    })
                }
                ,
                i.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    n.$slider.trigger("lazyLoadError", [n, e, t])
                }
                ,
                i.src = t
            })
        }
        var t, i, n = this;
        !0 === n.options.centerMode ? i = !0 === n.options.infinite ? (t = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (t = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)),
        n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (t = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide,
        i = Math.ceil(t + n.options.slidesToShow),
        !0 === n.options.fade && (0 < t && t--,
        i <= n.slideCount) && i++),
        e(n.$slider.find(".slick-slide").slice(t, i)),
        n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
    }
    ,
    r.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(),
        e.$slideTrack.css({
            opacity: 1
        }),
        e.$slider.removeClass("slick-loading"),
        e.initUI(),
        "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }
    ,
    r.prototype.next = r.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    r.prototype.orientationChange = function() {
        this.checkResponsive(),
        this.setPosition()
    }
    ,
    r.prototype.pause = r.prototype.slickPause = function() {
        this.autoPlayClear(),
        this.paused = !0
    }
    ,
    r.prototype.play = r.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(),
        e.options.autoplay = !0,
        e.paused = !1,
        e.focussed = !1,
        e.interrupted = !1
    }
    ,
    r.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]),
        t.animating = !1,
        t.setPosition(),
        t.swipeLeft = null,
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility && t.initADA())
    }
    ,
    r.prototype.prev = r.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ,
    r.prototype.preventDefault = function(e) {
        e.preventDefault()
    }
    ,
    r.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var t, i, n = this, o = c("img[data-lazy]", n.$slider);
        o.length ? (t = o.first(),
        i = t.attr("data-lazy"),
        (o = document.createElement("img")).onload = function() {
            t.attr("src", i).removeAttr("data-lazy").removeClass("slick-loading"),
            !0 === n.options.adaptiveHeight && n.setPosition(),
            n.$slider.trigger("lazyLoaded", [n, t, i]),
            n.progressiveLazyLoad()
        }
        ,
        o.onerror = function() {
            e < 3 ? setTimeout(function() {
                n.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
            n.$slider.trigger("lazyLoadError", [n, t, i]),
            n.progressiveLazyLoad())
        }
        ,
        o.src = i) : n.$slider.trigger("allImagesLoaded", [n])
    }
    ,
    r.prototype.refresh = function(e) {
        var t = this
          , i = t.slideCount - t.options.slidesToShow;
        !t.options.infinite && t.currentSlide > i && (t.currentSlide = i),
        t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
        i = t.currentSlide,
        t.destroy(!0),
        c.extend(t, t.initials, {
            currentSlide: i
        }),
        t.init(),
        e || t.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !1)
    }
    ,
    r.prototype.registerBreakpoints = function() {
        var e, t, i, n = this, o = n.options.responsive || null;
        if ("array" === c.type(o) && o.length) {
            for (e in n.respondTo = n.options.respondTo || "window",
            o)
                if (i = n.breakpoints.length - 1,
                t = o[e].breakpoint,
                o.hasOwnProperty(e)) {
                    for (; 0 <= i; )
                        n.breakpoints[i] && n.breakpoints[i] === t && n.breakpoints.splice(i, 1),
                        i--;
                    n.breakpoints.push(t),
                    n.breakpointSettings[t] = o[e].settings
                }
            n.breakpoints.sort(function(e, t) {
                return n.options.mobileFirst ? e - t : t - e
            })
        }
    }
    ,
    r.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        e.setPosition(),
        e.focusHandler(),
        e.paused = !e.options.autoplay,
        e.autoPlay(),
        e.$slider.trigger("reInit", [e])
    }
    ,
    r.prototype.resize = function() {
        var e = this;
        c(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay),
        e.windowDelay = window.setTimeout(function() {
            e.windowWidth = c(window).width(),
            e.checkResponsive(),
            e.unslicked || e.setPosition()
        }, 50))
    }
    ,
    r.prototype.removeSlide = r.prototype.slickRemove = function(e, t, i) {
        var n = this;
        return e = "boolean" == typeof e ? !0 === (t = e) ? 0 : n.slideCount - 1 : !0 === t ? --e : e,
        !(n.slideCount < 1 || e < 0 || e > n.slideCount - 1) && (n.unload(),
        (!0 === i ? n.$slideTrack.children() : n.$slideTrack.children(this.options.slide).eq(e)).remove(),
        n.$slides = n.$slideTrack.children(this.options.slide),
        n.$slideTrack.children(this.options.slide).detach(),
        n.$slideTrack.append(n.$slides),
        n.$slidesCache = n.$slides,
        void n.reinit())
    }
    ,
    r.prototype.setCSS = function(e) {
        var t, i, n = this, o = {};
        !0 === n.options.rtl && (e = -e),
        t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px",
        i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px",
        o[n.positionProp] = e,
        !1 !== n.transformsEnabled && (!(o = {}) === n.cssTransitions ? o[n.animType] = "translate(" + t + ", " + i + ")" : o[n.animType] = "translate3d(" + t + ", " + i + ", 0px)"),
        n.$slideTrack.css(o)
    }
    ,
    r.prototype.setDimensions = function() {
        var e = this
          , t = (!1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow),
        !0 === e.options.centerMode && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })),
        e.listWidth = e.$list.width(),
        e.listHeight = e.$list.height(),
        !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow),
        e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth),
        e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length))),
        e.$slides.first().outerWidth(!0) - e.$slides.first().width());
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }
    ,
    r.prototype.setFade = function() {
        var i, n = this;
        n.$slides.each(function(e, t) {
            i = n.slideWidth * e * -1,
            !0 === n.options.rtl ? c(t).css({
                position: "relative",
                right: i,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            }) : c(t).css({
                position: "relative",
                left: i,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            })
        }),
        n.$slides.eq(n.currentSlide).css({
            zIndex: n.options.zIndex - 1,
            opacity: 1
        })
    }
    ,
    r.prototype.setHeight = function() {
        var e, t = this;
        1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical && (e = t.$slides.eq(t.currentSlide).outerHeight(!0),
        t.$list.css("height", e))
    }
    ,
    r.prototype.setOption = r.prototype.slickSetOption = function() {
        var e, t, i, n, o, s = this, r = !1;
        if ("object" === c.type(arguments[0]) ? (i = arguments[0],
        r = arguments[1],
        o = "multiple") : "string" === c.type(arguments[0]) && (i = arguments[0],
        n = arguments[1],
        r = arguments[2],
        "responsive" === arguments[0] && "array" === c.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")),
        "single" === o)
            s.options[i] = n;
        else if ("multiple" === o)
            c.each(i, function(e, t) {
                s.options[e] = t
            });
        else if ("responsive" === o)
            for (t in n)
                if ("array" !== c.type(s.options.responsive))
                    s.options.responsive = [n[t]];
                else {
                    for (e = s.options.responsive.length - 1; 0 <= e; )
                        s.options.responsive[e].breakpoint === n[t].breakpoint && s.options.responsive.splice(e, 1),
                        e--;
                    s.options.responsive.push(n[t])
                }
        r && (s.unload(),
        s.reinit())
    }
    ,
    r.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(),
        e.setHeight(),
        !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(),
        e.$slider.trigger("setPosition", [e])
    }
    ,
    r.prototype.setProps = function() {
        var e = this
          , t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left",
        "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"),
        void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 !== e.options.useCSS || (e.cssTransitions = !0),
        e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex),
        void 0 !== t.OTransform && (e.animType = "OTransform",
        e.transformType = "-o-transform",
        e.transitionType = "OTransition",
        void 0 === t.perspectiveProperty) && void 0 === t.webkitPerspective && (e.animType = !1),
        void 0 !== t.MozTransform && (e.animType = "MozTransform",
        e.transformType = "-moz-transform",
        e.transitionType = "MozTransition",
        void 0 === t.perspectiveProperty) && void 0 === t.MozPerspective && (e.animType = !1),
        void 0 !== t.webkitTransform && (e.animType = "webkitTransform",
        e.transformType = "-webkit-transform",
        e.transitionType = "webkitTransition",
        void 0 === t.perspectiveProperty) && void 0 === t.webkitPerspective && (e.animType = !1),
        void 0 !== t.msTransform && (e.animType = "msTransform",
        e.transformType = "-ms-transform",
        e.transitionType = "msTransition",
        void 0 === t.msTransform) && (e.animType = !1),
        void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform",
        e.transformType = "transform",
        e.transitionType = "transition"),
        e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }
    ,
    r.prototype.setSlideClasses = function(e) {
        var t, i, n = this, o = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
        n.$slides.eq(e).addClass("slick-current"),
        !0 === n.options.centerMode ? (i = Math.floor(n.options.slidesToShow / 2),
        !0 === n.options.infinite && ((i <= e && e <= n.slideCount - 1 - i ? n.$slides.slice(e - i, e + i + 1) : (t = n.options.slidesToShow + e,
        o.slice(t - i + 1, t + i + 2))).addClass("slick-active").attr("aria-hidden", "false"),
        0 === e ? o.eq(o.length - 1 - n.options.slidesToShow).addClass("slick-center") : e === n.slideCount - 1 && o.eq(n.options.slidesToShow).addClass("slick-center")),
        n.$slides.eq(e).addClass("slick-center")) : (0 <= e && e <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(e, e + n.options.slidesToShow) : o.length <= n.options.slidesToShow ? o : (i = n.slideCount % n.options.slidesToShow,
        t = !0 === n.options.infinite ? n.options.slidesToShow + e : e,
        n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - e < n.options.slidesToShow ? o.slice(t - (n.options.slidesToShow - i), t + i) : o.slice(t, t + n.options.slidesToShow))).addClass("slick-active").attr("aria-hidden", "false"),
        "ondemand" === n.options.lazyLoad && n.lazyLoad()
    }
    ,
    r.prototype.setupInfinite = function() {
        var e, t, i, n = this;
        if (!0 === n.options.fade && (n.options.centerMode = !1),
        !0 === n.options.infinite && !1 === n.options.fade && (t = null,
        n.slideCount > n.options.slidesToShow)) {
            for (i = !0 === n.options.centerMode ? n.options.slidesToShow + 1 : n.options.slidesToShow,
            e = n.slideCount; e > n.slideCount - i; --e)
                c(n.$slides[t = e - 1]).clone(!0).attr("id", "").attr("data-slick-index", t - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < i; e += 1)
                t = e,
                c(n.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
            n.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                c(this).attr("id", "")
            })
        }
    }
    ,
    r.prototype.interrupt = function(e) {
        e || this.autoPlay(),
        this.interrupted = e
    }
    ,
    r.prototype.selectHandler = function(e) {
        var t = this
          , e = c(e.target).is(".slick-slide") ? c(e.target) : c(e.target).parents(".slick-slide")
          , e = (e = parseInt(e.attr("data-slick-index"))) || 0;
        return t.slideCount <= t.options.slidesToShow ? (t.setSlideClasses(e),
        void t.asNavFor(e)) : void t.slideHandler(e)
    }
    ,
    r.prototype.slideHandler = function(e, t, i) {
        var n, o, s, r = this;
        return t = t || !1,
        !0 === r.animating && !0 === r.options.waitForAnimate || !0 === r.options.fade && r.currentSlide === e || r.slideCount <= r.options.slidesToShow ? void 0 : (!1 === t && r.asNavFor(e),
        n = e,
        t = r.getLeft(n),
        s = r.getLeft(r.currentSlide),
        r.currentLeft = null === r.swipeLeft ? s : r.swipeLeft,
        !1 === r.options.infinite && !1 === r.options.centerMode && (e < 0 || e > r.getDotCount() * r.options.slidesToScroll) || !1 === r.options.infinite && !0 === r.options.centerMode && (e < 0 || e > r.slideCount - r.options.slidesToScroll) ? void (!1 === r.options.fade && (n = r.currentSlide,
        !0 !== i ? r.animateSlide(s, function() {
            r.postSlide(n)
        }) : r.postSlide(n))) : (r.options.autoplay && clearInterval(r.autoPlayTimer),
        o = n < 0 ? r.slideCount % r.options.slidesToScroll != 0 ? r.slideCount - r.slideCount % r.options.slidesToScroll : r.slideCount + n : n >= r.slideCount ? r.slideCount % r.options.slidesToScroll != 0 ? 0 : n - r.slideCount : n,
        r.animating = !0,
        r.$slider.trigger("beforeChange", [r, r.currentSlide, o]),
        e = r.currentSlide,
        r.currentSlide = o,
        r.setSlideClasses(r.currentSlide),
        r.options.asNavFor && (s = (s = r.getNavTarget()).slick("getSlick")).slideCount <= s.options.slidesToShow && s.setSlideClasses(r.currentSlide),
        r.updateDots(),
        r.updateArrows(),
        !0 === r.options.fade ? (!0 !== i ? (r.fadeSlideOut(e),
        r.fadeSlide(o, function() {
            r.postSlide(o)
        })) : r.postSlide(o),
        void r.animateHeight()) : void (!0 !== i ? r.animateSlide(t, function() {
            r.postSlide(o)
        }) : r.postSlide(o))))
    }
    ,
    r.prototype.startLoad = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(),
        e.$nextArrow.hide()),
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(),
        e.$slider.addClass("slick-loading")
    }
    ,
    r.prototype.swipeDirection = function() {
        var e = this
          , t = e.touchObject.startX - e.touchObject.curX
          , i = e.touchObject.startY - e.touchObject.curY
          , i = Math.atan2(i, t)
          , t = Math.round(180 * i / Math.PI);
        return (t = t < 0 ? 360 - Math.abs(t) : t) <= 45 && 0 <= t || t <= 360 && 315 <= t ? !1 === e.options.rtl ? "left" : "right" : 135 <= t && t <= 225 ? !1 === e.options.rtl ? "right" : "left" : !0 === e.options.verticalSwiping ? 35 <= t && t <= 135 ? "down" : "up" : "vertical"
    }
    ,
    r.prototype.swipeEnd = function(e) {
        var t, i, n = this;
        if (n.dragging = !1,
        n.interrupted = !1,
        n.shouldClick = !(10 < n.touchObject.swipeLength),
        void 0 === n.touchObject.curX)
            return !1;
        if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]),
        n.touchObject.swipeLength >= n.touchObject.minSwipe) {
            switch (i = n.swipeDirection()) {
            case "left":
            case "down":
                t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(),
                n.currentDirection = 0;
                break;
            case "right":
            case "up":
                t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(),
                n.currentDirection = 1
            }
            "vertical" != i && (n.slideHandler(t),
            n.touchObject = {},
            n.$slider.trigger("swipe", [n, i]))
        } else
            n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide),
            n.touchObject = {})
    }
    ,
    r.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend"in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse")))
            switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1,
            t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold,
            !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold),
            e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
            }
    }
    ,
    r.prototype.swipeMove = function(e) {
        var t, i, n = this, o = void 0 !== e.originalEvent ? e.originalEvent.touches : null;
        return !(!n.dragging || o && 1 !== o.length) && (t = n.getLeft(n.currentSlide),
        n.touchObject.curX = void 0 !== o ? o[0].pageX : e.clientX,
        n.touchObject.curY = void 0 !== o ? o[0].pageY : e.clientY,
        n.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(n.touchObject.curX - n.touchObject.startX, 2))),
        !0 === n.options.verticalSwiping && (n.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(n.touchObject.curY - n.touchObject.startY, 2)))),
        "vertical" !== (o = n.swipeDirection()) ? (void 0 !== e.originalEvent && 4 < n.touchObject.swipeLength && e.preventDefault(),
        e = (!1 === n.options.rtl ? 1 : -1) * (n.touchObject.curX > n.touchObject.startX ? 1 : -1),
        !0 === n.options.verticalSwiping && (e = n.touchObject.curY > n.touchObject.startY ? 1 : -1),
        i = n.touchObject.swipeLength,
        (n.touchObject.edgeHit = !1) === n.options.infinite && (0 === n.currentSlide && "right" === o || n.currentSlide >= n.getDotCount() && "left" === o) && (i = n.touchObject.swipeLength * n.options.edgeFriction,
        n.touchObject.edgeHit = !0),
        !1 === n.options.vertical ? n.swipeLeft = t + i * e : n.swipeLeft = t + i * (n.$list.height() / n.listWidth) * e,
        !0 === n.options.verticalSwiping && (n.swipeLeft = t + i * e),
        !0 !== n.options.fade && !1 !== n.options.touchMove && (!0 === n.animating ? (n.swipeLeft = null,
        !1) : void n.setCSS(n.swipeLeft))) : void 0)
    }
    ,
    r.prototype.swipeStart = function(e) {
        var t, i = this;
        return i.interrupted = !0,
        1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? !(i.touchObject = {}) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]),
        i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX,
        i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY,
        void (i.dragging = !0))
    }
    ,
    r.prototype.unfilterSlides = r.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.appendTo(e.$slideTrack),
        e.reinit())
    }
    ,
    r.prototype.unload = function() {
        var e = this;
        c(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
        e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
        e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ,
    r.prototype.unslick = function(e) {
        this.$slider.trigger("unslick", [this, e]),
        this.destroy()
    }
    ,
    r.prototype.updateArrows = function() {
        var e = this;
        Math.floor(e.options.slidesToShow / 2);
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode || e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode) && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ,
    r.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"),
        e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }
    ,
    r.prototype.visibility = function() {
        this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
    }
    ,
    c.fn.slick = function() {
        for (var e, t = this, i = arguments[0], n = Array.prototype.slice.call(arguments, 1), o = t.length, s = 0; s < o; s++)
            if ("object" == typeof i || void 0 === i ? t[s].slick = new r(t[s],i) : e = t[s].slick[i].apply(t[s].slick, n),
            void 0 !== e)
                return e;
        return t
    }
}),
function(e) {
    var n = {
        set: {
            colors: 1,
            values: 1,
            backgroundColor: 1,
            scaleColors: 1,
            normalizeFunction: 1,
            focus: 1
        },
        get: {
            selectedRegions: 1,
            selectedMarkers: 1,
            mapObject: 1,
            regionName: 1
        }
    };
    e.fn.vectorMap = function(e) {
        var t, i = this.children(".jvectormap-container").data("mapObject");
        if ("addMap" === e)
            jvm.Map.maps[arguments[1]] = arguments[2];
        else {
            if (("set" === e || "get" === e) && n[e][arguments[1]])
                return t = arguments[1].charAt(0).toUpperCase() + arguments[1].substr(1),
                i[e + t].apply(i, Array.prototype.slice.call(arguments, 2));
            (e = e || {}).container = this,
            i = new jvm.Map(e)
        }
        return this
    }
}(jQuery),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function(a) {
    var l, c, e = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], t = "onwheel"in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], d = Array.prototype.slice;
    if (a.event.fixHooks)
        for (var i = e.length; i; )
            a.event.fixHooks[e[--i]] = a.event.mouseHooks;
    var n = a.event.special.mousewheel = {
        version: "3.1.9",
        setup: function() {
            if (this.addEventListener)
                for (var e = t.length; e; )
                    this.addEventListener(t[--e], o, !1);
            else
                this.onmousewheel = o;
            a.data(this, "mousewheel-line-height", n.getLineHeight(this)),
            a.data(this, "mousewheel-page-height", n.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var e = t.length; e; )
                    this.removeEventListener(t[--e], o, !1);
            else
                this.onmousewheel = null
        },
        getLineHeight: function(e) {
            return parseInt(a(e)["offsetParent"in a.fn ? "offsetParent" : "parent"]().css("fontSize"), 10)
        },
        getPageHeight: function(e) {
            return a(e).height()
        },
        settings: {
            adjustOldDeltas: !0
        }
    };
    function o(e) {
        var t, i = e || window.event, n = d.call(arguments, 1), o = 0, s = 0, r = 0;
        if ((e = a.event.fix(i)).type = "mousewheel",
        "detail"in i && (r = -1 * i.detail),
        "wheelDelta"in i && (r = i.wheelDelta),
        "wheelDeltaY"in i && (r = i.wheelDeltaY),
        "wheelDeltaX"in i && (s = -1 * i.wheelDeltaX),
        "axis"in i && i.axis === i.HORIZONTAL_AXIS && (s = -1 * r,
        r = 0),
        o = 0 === r ? s : r,
        "deltaY"in i && (o = r = -1 * i.deltaY),
        "deltaX"in i && (s = i.deltaX,
        0 === r) && (o = -1 * s),
        0 !== r || 0 !== s)
            return 1 === i.deltaMode ? (o *= t = a.data(this, "mousewheel-line-height"),
            r *= t,
            s *= t) : 2 === i.deltaMode && (o *= t = a.data(this, "mousewheel-page-height"),
            r *= t,
            s *= t),
            t = Math.max(Math.abs(r), Math.abs(s)),
            (!c || t < c) && p(i, c = t) && (c /= 40),
            p(i, t) && (o /= 40,
            s /= 40,
            r /= 40),
            o = Math[1 <= o ? "floor" : "ceil"](o / c),
            s = Math[1 <= s ? "floor" : "ceil"](s / c),
            r = Math[1 <= r ? "floor" : "ceil"](r / c),
            e.deltaX = s,
            e.deltaY = r,
            e.deltaFactor = c,
            e.deltaMode = 0,
            n.unshift(e, o, s, r),
            l && clearTimeout(l),
            l = setTimeout(h, 200),
            (a.event.dispatch || a.event.handle).apply(this, n)
    }
    function h() {
        c = null
    }
    function p(e, t) {
        return n.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
    }
    a.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
});
var jvm = {
    inherits: function(e, t) {
        function i() {}
        i.prototype = t.prototype,
        e.prototype = new i,
        (e.prototype.constructor = e).parentClass = t
    },
    mixin: function(e, t) {
        for (var i in t.prototype)
            t.prototype.hasOwnProperty(i) && (e.prototype[i] = t.prototype[i])
    },
    min: function(e) {
        var t, i = Number.MAX_VALUE;
        if (e instanceof Array)
            for (t = 0; t < e.length; t++)
                e[t] < i && (i = e[t]);
        else
            for (t in e)
                e[t] < i && (i = e[t]);
        return i
    },
    max: function(e) {
        var t, i = Number.MIN_VALUE;
        if (e instanceof Array)
            for (t = 0; t < e.length; t++)
                e[t] > i && (i = e[t]);
        else
            for (t in e)
                e[t] > i && (i = e[t]);
        return i
    },
    keys: function(e) {
        var t, i = [];
        for (t in e)
            i.push(t);
        return i
    },
    values: function(e) {
        for (var t, i = [], n = 0; n < arguments.length; n++)
            for (t in e = arguments[n])
                i.push(e[t]);
        return i
    },
    whenImageLoaded: function(e) {
        var t = new jvm.$.Deferred
          , i = jvm.$("<img/>");
        return i.error(function() {
            t.reject()
        }).load(function() {
            t.resolve(i)
        }),
        i.attr("src", e),
        t
    },
    isImageUrl: function(e) {
        return /\.\w{3,4}$/.test(e)
    }
};
function getStyleSheetPropertyValue(e) {
    for (var t = document.styleSheets.length - 1; 0 <= t; t--)
        for (var i = document.styleSheets[t].cssRules || document.styleSheets[t].rules || [], n = 0; n < i.length; n++)
            if (i[n].selectorText === e)
                return i[n].style
}
jvm.$ = jQuery,
Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
    var i;
    if (null == this)
        throw new TypeError('"this" is null or not defined');
    var n = Object(this)
      , o = n.length >>> 0;
    if (0 != o) {
        t = +t || 0;
        if (!(o <= (t = Math.abs(t) === 1 / 0 ? 0 : t)))
            for (i = Math.max(0 <= t ? t : o - Math.abs(t), 0); i < o; ) {
                if (i in n && n[i] === e)
                    return i;
                i++
            }
    }
    return -1
}
),
jvm.AbstractElement = function(e, t) {
    this.node = this.createElement(e),
    this.name = e,
    this.properties = {},
    t && this.set(t)
}
,
jvm.AbstractElement.prototype.set = function(e, t) {
    if ("object" == typeof e)
        for (var i in e)
            this.properties[i] = e[i],
            this.applyAttr(i, e[i]);
    else
        this.properties[e] = t,
        this.applyAttr(e, t)
}
,
jvm.AbstractElement.prototype.get = function(e) {
    return this.properties[e]
}
,
jvm.AbstractElement.prototype.applyAttr = function(e, t) {
    this.node.setAttribute(e, t)
}
,
jvm.AbstractElement.prototype.remove = function() {
    jvm.$(this.node).remove()
}
,
jvm.AbstractCanvasElement = function(e, t, i) {
    this.container = e,
    this.setSize(t, i),
    this.rootElement = new jvm[this.classPrefix + "GroupElement"],
    this.node.appendChild(this.rootElement.node),
    this.container.appendChild(this.node)
}
,
jvm.AbstractCanvasElement.prototype.add = function(e, t) {
    (t = t || this.rootElement).add(e),
    e.canvas = this
}
,
jvm.AbstractCanvasElement.prototype.addPath = function(e, t, i) {
    e = new jvm[this.classPrefix + "PathElement"](e,t);
    return this.add(e, i),
    e
}
,
jvm.AbstractCanvasElement.prototype.addCircle = function(e, t, i) {
    e = new jvm[this.classPrefix + "CircleElement"](e,t);
    return this.add(e, i),
    e
}
,
jvm.AbstractCanvasElement.prototype.addImage = function(e, t, i) {
    e = new jvm[this.classPrefix + "ImageElement"](e,t);
    return this.add(e, i),
    e
}
,
jvm.AbstractCanvasElement.prototype.addText = function(e, t, i) {
    e = new jvm[this.classPrefix + "TextElement"](e,t);
    return this.add(e, i),
    e
}
,
jvm.AbstractCanvasElement.prototype.addGroup = function(e) {
    var t = new jvm[this.classPrefix + "GroupElement"];
    return (e || this).node.appendChild(t.node),
    t.canvas = this,
    t
}
,
jvm.AbstractShapeElement = function(e, t, i) {
    this.style = i || {},
    this.style.current = this.style.current || {},
    this.isHovered = !1,
    this.isSelected = !1,
    this.updateStyle()
}
,
jvm.AbstractShapeElement.prototype.setStyle = function(e, t) {
    var i = {};
    "object" == typeof e ? i = e : i[e] = t,
    jvm.$.extend(this.style.current, i),
    this.updateStyle()
}
,
jvm.AbstractShapeElement.prototype.updateStyle = function() {
    var e = {};
    jvm.AbstractShapeElement.mergeStyles(e, this.style.initial),
    jvm.AbstractShapeElement.mergeStyles(e, this.style.current),
    this.isHovered && jvm.AbstractShapeElement.mergeStyles(e, this.style.hover),
    this.isSelected && (jvm.AbstractShapeElement.mergeStyles(e, this.style.selected),
    this.isHovered) && jvm.AbstractShapeElement.mergeStyles(e, this.style.selectedHover),
    this.set(e)
}
,
jvm.AbstractShapeElement.mergeStyles = function(e, t) {
    for (var i in t = t || {})
        null === t[i] ? delete e[i] : e[i] = t[i]
}
,
jvm.SVGElement = function(e, t) {
    jvm.SVGElement.parentClass.apply(this, arguments)
}
,
jvm.inherits(jvm.SVGElement, jvm.AbstractElement),
jvm.SVGElement.svgns = "http://www.w3.org/2000/svg",
jvm.SVGElement.prototype.createElement = function(e) {
    return document.createElementNS(jvm.SVGElement.svgns, e)
}
,
jvm.SVGElement.prototype.addClass = function(e) {
    this.node.setAttribute("class", e)
}
,
jvm.SVGElement.prototype.getElementCtr = function(e) {
    return jvm["SVG" + e]
}
,
jvm.SVGElement.prototype.getBBox = function() {
    return this.node.getBBox()
}
,
jvm.SVGGroupElement = function() {
    jvm.SVGGroupElement.parentClass.call(this, "g")
}
,
jvm.inherits(jvm.SVGGroupElement, jvm.SVGElement),
jvm.SVGGroupElement.prototype.add = function(e) {
    this.node.appendChild(e.node)
}
,
jvm.SVGCanvasElement = function(e, t, i) {
    this.classPrefix = "SVG",
    jvm.SVGCanvasElement.parentClass.call(this, "svg"),
    this.defsElement = new jvm.SVGElement("defs"),
    this.node.appendChild(this.defsElement.node),
    jvm.AbstractCanvasElement.apply(this, arguments)
}
,
jvm.inherits(jvm.SVGCanvasElement, jvm.SVGElement),
jvm.mixin(jvm.SVGCanvasElement, jvm.AbstractCanvasElement),
jvm.SVGCanvasElement.prototype.setSize = function(e, t) {
    this.width = e,
    this.height = t,
    this.node.setAttribute("width", e),
    this.node.setAttribute("height", t)
}
,
jvm.SVGCanvasElement.prototype.applyTransformParams = function(e, t, i) {
    this.scale = e,
    this.transX = t,
    this.transY = i,
    this.rootElement.node.setAttribute("transform", "scale(" + e + ") translate(" + t + ", " + i + ")")
}
,
jvm.SVGShapeElement = function(e, t, i) {
    jvm.SVGShapeElement.parentClass.call(this, e, t),
    jvm.AbstractShapeElement.apply(this, arguments)
}
,
jvm.inherits(jvm.SVGShapeElement, jvm.SVGElement),
jvm.mixin(jvm.SVGShapeElement, jvm.AbstractShapeElement),
jvm.SVGShapeElement.prototype.applyAttr = function(e, t) {
    var i, n, o = this;
    "fill" === e && jvm.isImageUrl(t) ? jvm.SVGShapeElement.images[t] ? this.applyAttr("fill", "url(#image" + jvm.SVGShapeElement.images[t] + ")") : jvm.whenImageLoaded(t).then(function(e) {
        (n = new jvm.SVGElement("image")).node.setAttributeNS("http://www.w3.org/1999/xlink", "href", t),
        n.applyAttr("x", "0"),
        n.applyAttr("y", "0"),
        n.applyAttr("width", e[0].width),
        n.applyAttr("height", e[0].height),
        (i = new jvm.SVGElement("pattern")).applyAttr("id", "image" + jvm.SVGShapeElement.imageCounter),
        i.applyAttr("x", 0),
        i.applyAttr("y", 0),
        i.applyAttr("width", e[0].width / 2),
        i.applyAttr("height", e[0].height / 2),
        i.applyAttr("viewBox", "0 0 " + e[0].width + " " + e[0].height),
        i.applyAttr("patternUnits", "userSpaceOnUse"),
        i.node.appendChild(n.node),
        o.canvas.defsElement.node.appendChild(i.node),
        jvm.SVGShapeElement.images[t] = jvm.SVGShapeElement.imageCounter++,
        o.applyAttr("fill", "url(#image" + jvm.SVGShapeElement.images[t] + ")")
    }) : jvm.SVGShapeElement.parentClass.prototype.applyAttr.apply(this, arguments)
}
,
jvm.SVGShapeElement.imageCounter = 1,
jvm.SVGShapeElement.images = {},
jvm.SVGPathElement = function(e, t) {
    jvm.SVGPathElement.parentClass.call(this, "path", e, t),
    this.node.setAttribute("fill-rule", "evenodd")
}
,
jvm.inherits(jvm.SVGPathElement, jvm.SVGShapeElement),
jvm.SVGCircleElement = function(e, t) {
    jvm.SVGCircleElement.parentClass.call(this, "circle", e, t)
}
,
jvm.inherits(jvm.SVGCircleElement, jvm.SVGShapeElement),
jvm.SVGImageElement = function(e, t) {
    jvm.SVGImageElement.parentClass.call(this, "image", e, t)
}
,
jvm.inherits(jvm.SVGImageElement, jvm.SVGShapeElement),
jvm.SVGImageElement.prototype.applyAttr = function(e, t) {
    var i = this;
    "image" == e ? jvm.whenImageLoaded(t).then(function(e) {
        i.node.setAttributeNS("http://www.w3.org/1999/xlink", "href", t),
        i.width = e[0].width,
        i.height = e[0].height,
        i.applyAttr("width", i.width),
        i.applyAttr("height", i.height),
        i.applyAttr("x", i.cx - i.width / 2),
        i.applyAttr("y", i.cy - i.height / 2),
        jvm.$(i.node).trigger("imageloaded", [e])
    }) : "cx" == e ? (this.cx = t,
    this.width && this.applyAttr("x", t - this.width / 2)) : "cy" == e ? (this.cy = t,
    this.height && this.applyAttr("y", t - this.height / 2)) : jvm.SVGImageElement.parentClass.prototype.applyAttr.apply(this, arguments)
}
,
jvm.SVGTextElement = function(e, t) {
    jvm.SVGTextElement.parentClass.call(this, "text", e, t)
}
,
jvm.inherits(jvm.SVGTextElement, jvm.SVGShapeElement),
jvm.SVGTextElement.prototype.applyAttr = function(e, t) {
    "text" === e ? this.node.textContent = t : jvm.SVGTextElement.parentClass.prototype.applyAttr.apply(this, arguments)
}
,
jvm.VMLElement = function(e, t) {
    jvm.VMLElement.VMLInitialized || jvm.VMLElement.initializeVML(),
    jvm.VMLElement.parentClass.apply(this, arguments)
}
,
jvm.inherits(jvm.VMLElement, jvm.AbstractElement),
jvm.VMLElement.VMLInitialized = !1,
jvm.VMLElement.initializeVML = function() {
    try {
        document.namespaces.rvml || document.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"),
        jvm.VMLElement.prototype.createElement = function(e) {
            return document.createElement("<rvml:" + e + ' class="rvml">')
        }
    } catch (e) {
        jvm.VMLElement.prototype.createElement = function(e) {
            return document.createElement("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
        }
    }
    document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)"),
    jvm.VMLElement.VMLInitialized = !0
}
,
jvm.VMLElement.prototype.getElementCtr = function(e) {
    return jvm["VML" + e]
}
,
jvm.VMLElement.prototype.addClass = function(e) {
    jvm.$(this.node).addClass(e)
}
,
jvm.VMLElement.prototype.applyAttr = function(e, t) {
    this.node[e] = t
}
,
jvm.VMLElement.prototype.getBBox = function() {
    var e = jvm.$(this.node);
    return {
        x: e.position().left / this.canvas.scale,
        y: e.position().top / this.canvas.scale,
        width: e.width() / this.canvas.scale,
        height: e.height() / this.canvas.scale
    }
}
,
jvm.VMLGroupElement = function() {
    jvm.VMLGroupElement.parentClass.call(this, "group"),
    this.node.style.left = "0px",
    this.node.style.top = "0px",
    this.node.coordorigin = "0 0"
}
,
jvm.inherits(jvm.VMLGroupElement, jvm.VMLElement),
jvm.VMLGroupElement.prototype.add = function(e) {
    this.node.appendChild(e.node)
}
,
jvm.VMLCanvasElement = function(e, t, i) {
    this.classPrefix = "VML",
    jvm.VMLCanvasElement.parentClass.call(this, "group"),
    jvm.AbstractCanvasElement.apply(this, arguments),
    this.node.style.position = "absolute"
}
,
jvm.inherits(jvm.VMLCanvasElement, jvm.VMLElement),
jvm.mixin(jvm.VMLCanvasElement, jvm.AbstractCanvasElement),
jvm.VMLCanvasElement.prototype.setSize = function(e, t) {
    var i, n, o, s;
    if (this.width = e,
    this.height = t,
    this.node.style.width = e + "px",
    this.node.style.height = t + "px",
    this.node.coordsize = e + " " + t,
    this.node.coordorigin = "0 0",
    this.rootElement) {
        for (o = 0,
        s = (i = this.rootElement.node.getElementsByTagName("shape")).length; o < s; o++)
            i[o].coordsize = e + " " + t,
            i[o].style.width = e + "px",
            i[o].style.height = t + "px";
        for (o = 0,
        s = (n = this.node.getElementsByTagName("group")).length; o < s; o++)
            n[o].coordsize = e + " " + t,
            n[o].style.width = e + "px",
            n[o].style.height = t + "px"
    }
}
,
jvm.VMLCanvasElement.prototype.applyTransformParams = function(e, t, i) {
    this.scale = e,
    this.transX = t,
    this.transY = i,
    this.rootElement.node.coordorigin = this.width - t - this.width / 100 + "," + (this.height - i - this.height / 100),
    this.rootElement.node.coordsize = this.width / e + "," + this.height / e
}
,
jvm.VMLShapeElement = function(e, t) {
    jvm.VMLShapeElement.parentClass.call(this, e, t),
    this.fillElement = new jvm.VMLElement("fill"),
    this.strokeElement = new jvm.VMLElement("stroke"),
    this.node.appendChild(this.fillElement.node),
    this.node.appendChild(this.strokeElement.node),
    this.node.stroked = !1,
    jvm.AbstractShapeElement.apply(this, arguments)
}
,
jvm.inherits(jvm.VMLShapeElement, jvm.VMLElement),
jvm.mixin(jvm.VMLShapeElement, jvm.AbstractShapeElement),
jvm.VMLShapeElement.prototype.applyAttr = function(e, t) {
    switch (e) {
    case "fill":
        this.node.fillcolor = t;
        break;
    case "fill-opacity":
        this.fillElement.node.opacity = Math.round(100 * t) + "%";
        break;
    case "stroke":
        this.node.stroked = "none" !== t,
        this.node.strokecolor = t;
        break;
    case "stroke-opacity":
        this.strokeElement.node.opacity = Math.round(100 * t) + "%";
        break;
    case "stroke-width":
        0 === parseInt(t, 10) ? this.node.stroked = !1 : this.node.stroked = !0,
        this.node.strokeweight = t;
        break;
    case "d":
        this.node.path = jvm.VMLPathElement.pathSvgToVml(t);
        break;
    default:
        jvm.VMLShapeElement.parentClass.prototype.applyAttr.apply(this, arguments)
    }
}
,
jvm.VMLPathElement = function(e, t) {
    var i = new jvm.VMLElement("skew");
    jvm.VMLPathElement.parentClass.call(this, "shape", e, t),
    this.node.coordorigin = "0 0",
    i.node.on = !0,
    i.node.matrix = "0.01,0,0,0.01,0,0",
    i.node.offset = "0,0",
    this.node.appendChild(i.node)
}
,
jvm.inherits(jvm.VMLPathElement, jvm.VMLShapeElement),
jvm.VMLPathElement.prototype.applyAttr = function(e, t) {
    "d" === e ? this.node.path = jvm.VMLPathElement.pathSvgToVml(t) : jvm.VMLShapeElement.prototype.applyAttr.call(this, e, t)
}
,
jvm.VMLPathElement.pathSvgToVml = function(e) {
    var r, a, l = 0, c = 0;
    return (e = e.replace(/(-?\d+)e(-?\d+)/g, "0")).replace(/([MmLlHhVvCcSs])\s*((?:-?\d*(?:\.\d+)?\s*,?\s*)+)/g, function(e, t, i, n) {
        (i = i.replace(/(\d)-/g, "$1,-").replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, ",").split(","))[0] || i.shift();
        for (var o = 0, s = i.length; o < s; o++)
            i[o] = Math.round(100 * i[o]);
        switch (t) {
        case "m":
            return l += i[0],
            c += i[1],
            "t" + i.join(",");
        case "M":
            return l = i[0],
            c = i[1],
            "m" + i.join(",");
        case "l":
            return l += i[0],
            c += i[1],
            "r" + i.join(",");
        case "L":
            return l = i[0],
            c = i[1],
            "l" + i.join(",");
        case "h":
            return l += i[0],
            "r" + i[0] + ",0";
        case "H":
            return "l" + (l = i[0]) + "," + c;
        case "v":
            return c += i[0],
            "r0," + i[0];
        case "V":
            return c = i[0],
            "l" + l + "," + c;
        case "c":
            return r = l + i[i.length - 4],
            a = c + i[i.length - 3],
            l += i[i.length - 2],
            c += i[i.length - 1],
            "v" + i.join(",");
        case "C":
            return r = i[i.length - 4],
            a = i[i.length - 3],
            l = i[i.length - 2],
            c = i[i.length - 1],
            "c" + i.join(",");
        case "s":
            return i.unshift(c - a),
            i.unshift(l - r),
            r = l + i[i.length - 4],
            a = c + i[i.length - 3],
            l += i[i.length - 2],
            c += i[i.length - 1],
            "v" + i.join(",");
        case "S":
            return i.unshift(c + c - a),
            i.unshift(l + l - r),
            r = i[i.length - 4],
            a = i[i.length - 3],
            l = i[i.length - 2],
            c = i[i.length - 1],
            "c" + i.join(",")
        }
        return ""
    }).replace(/z/g, "e")
}
,
jvm.VMLCircleElement = function(e, t) {
    jvm.VMLCircleElement.parentClass.call(this, "oval", e, t)
}
,
jvm.inherits(jvm.VMLCircleElement, jvm.VMLShapeElement),
jvm.VMLCircleElement.prototype.applyAttr = function(e, t) {
    switch (e) {
    case "r":
        this.node.style.width = 2 * t + "px",
        this.node.style.height = 2 * t + "px",
        this.applyAttr("cx", this.get("cx") || 0),
        this.applyAttr("cy", this.get("cy") || 0);
        break;
    case "cx":
        t && (this.node.style.left = t - (this.get("r") || 0) + "px");
        break;
    case "cy":
        t && (this.node.style.top = t - (this.get("r") || 0) + "px");
        break;
    default:
        jvm.VMLCircleElement.parentClass.prototype.applyAttr.call(this, e, t)
    }
}
,
jvm.VectorCanvas = function(e, t, i) {
    return this.mode = window.SVGAngle ? "svg" : "vml",
    "svg" == this.mode ? this.impl = new jvm.SVGCanvasElement(e,t,i) : this.impl = new jvm.VMLCanvasElement(e,t,i),
    this.impl.mode = this.mode,
    this.impl
}
,
jvm.SimpleScale = function(e) {
    this.scale = e
}
,
jvm.SimpleScale.prototype.getValue = function(e) {
    return e
}
,
jvm.OrdinalScale = function(e) {
    this.scale = e
}
,
jvm.OrdinalScale.prototype.getValue = function(e) {
    return this.scale[e]
}
,
jvm.OrdinalScale.prototype.getTicks = function() {
    var e, t = [];
    for (e in this.scale)
        t.push({
            label: e,
            value: this.scale[e]
        });
    return t
}
,
jvm.NumericScale = function(e, t, i, n) {
    this.scale = [],
    t = t || "linear",
    e && this.setScale(e),
    t && this.setNormalizeFunction(t),
    void 0 !== i && this.setMin(i),
    void 0 !== n && this.setMax(n)
}
,
jvm.NumericScale.prototype = {
    setMin: function(e) {
        this.clearMinValue = e,
        "function" == typeof this.normalize ? this.minValue = this.normalize(e) : this.minValue = e
    },
    setMax: function(e) {
        this.clearMaxValue = e,
        "function" == typeof this.normalize ? this.maxValue = this.normalize(e) : this.maxValue = e
    },
    setScale: function(e) {
        var t;
        for (this.scale = [],
        t = 0; t < e.length; t++)
            this.scale[t] = [e[t]]
    },
    setNormalizeFunction: function(e) {
        "polynomial" === e ? this.normalize = function(e) {
            return Math.pow(e, .2)
        }
        : "linear" === e ? delete this.normalize : this.normalize = e,
        this.setMin(this.clearMinValue),
        this.setMax(this.clearMaxValue)
    },
    getValue: function(e) {
        var t, i, n = [], o = 0, s = 0;
        for ("function" == typeof this.normalize && (e = this.normalize(e)),
        s = 0; s < this.scale.length - 1; s++)
            t = this.vectorLength(this.vectorSubtract(this.scale[s + 1], this.scale[s])),
            n.push(t),
            o += t;
        for (i = (this.maxValue - this.minValue) / o,
        s = 0; s < n.length; s++)
            n[s] *= i;
        for (s = 0,
        e -= this.minValue; 0 <= e - n[s]; )
            e -= n[s],
            s++;
        return e = s == this.scale.length - 1 ? this.vectorToNum(this.scale[s]) : this.vectorToNum(this.vectorAdd(this.scale[s], this.vectorMult(this.vectorSubtract(this.scale[s + 1], this.scale[s]), e / n[s])))
    },
    vectorToNum: function(e) {
        for (var t = 0, i = 0; i < e.length; i++)
            t += Math.round(e[i]) * Math.pow(256, e.length - i - 1);
        return t
    },
    vectorSubtract: function(e, t) {
        for (var i = [], n = 0; n < e.length; n++)
            i[n] = e[n] - t[n];
        return i
    },
    vectorAdd: function(e, t) {
        for (var i = [], n = 0; n < e.length; n++)
            i[n] = e[n] + t[n];
        return i
    },
    vectorMult: function(e, t) {
        for (var i = [], n = 0; n < e.length; n++)
            i[n] = e[n] * t;
        return i
    },
    vectorLength: function(e) {
        for (var t = 0, i = 0; i < e.length; i++)
            t += e[i] * e[i];
        return Math.sqrt(t)
    },
    getTicks: function() {
        var e, t, i = [this.clearMinValue, this.clearMaxValue], n = i[1] - i[0], o = Math.pow(10, Math.floor(Math.log(n / 5) / Math.LN10)), n = 5 / n * o, s = [];
        for (n <= .15 ? o *= 10 : n <= .35 ? o *= 5 : n <= .75 && (o *= 2),
        i[0] = Math.floor(i[0] / o) * o,
        i[1] = Math.ceil(i[1] / o) * o,
        e = i[0]; e <= i[1]; )
            t = e == i[0] ? this.clearMinValue : e == i[1] ? this.clearMaxValue : e,
            s.push({
                label: e,
                value: this.getValue(t)
            }),
            e += o;
        return s
    }
},
jvm.ColorScale = function(e, t, i, n) {
    jvm.ColorScale.parentClass.apply(this, arguments)
}
,
jvm.inherits(jvm.ColorScale, jvm.NumericScale),
jvm.ColorScale.prototype.setScale = function(e) {
    for (var t = 0; t < e.length; t++)
        this.scale[t] = jvm.ColorScale.rgbToArray(e[t])
}
,
jvm.ColorScale.prototype.getValue = function(e) {
    return jvm.ColorScale.numToRgb(jvm.ColorScale.parentClass.prototype.getValue.call(this, e))
}
,
jvm.ColorScale.arrayToRgb = function(e) {
    for (var t, i = "#", n = 0; n < e.length; n++)
        i += 1 == (t = e[n].toString(16)).length ? "0" + t : t;
    return i
}
,
jvm.ColorScale.numToRgb = function(e) {
    for (e = e.toString(16); e.length < 6; )
        e = "0" + e;
    return "#" + e
}
,
jvm.ColorScale.rgbToArray = function(e) {
    return e = e.substr(1),
    [parseInt(e.substr(0, 2), 16), parseInt(e.substr(2, 2), 16), parseInt(e.substr(4, 2), 16)]
}
,
jvm.Legend = function(e) {
    this.params = e || {},
    this.map = this.params.map,
    this.series = this.params.series,
    this.body = jvm.$("<div/>"),
    this.body.addClass("jvectormap-legend"),
    this.params.cssClass && this.body.addClass(this.params.cssClass),
    (e.vertical ? this.map.legendCntVertical : this.map.legendCntHorizontal).append(this.body),
    this.render()
}
,
jvm.Legend.prototype.render = function() {
    var e, t, i, n, o = this.series.scale.getTicks(), s = jvm.$("<div/>").addClass("jvectormap-legend-inner");
    for (this.body.html(""),
    this.params.title && this.body.append(jvm.$("<div/>").addClass("jvectormap-legend-title").html(this.params.title)),
    this.body.append(s),
    e = 0; e < o.length; e++) {
        switch (t = jvm.$("<div/>").addClass("jvectormap-legend-tick"),
        i = jvm.$("<div/>").addClass("jvectormap-legend-tick-sample"),
        this.series.params.attribute) {
        case "fill":
            jvm.isImageUrl(o[e].value) ? i.css("background", "url(" + o[e].value + ")") : i.css("background", o[e].value);
            break;
        case "stroke":
            i.css("background", o[e].value);
            break;
        case "image":
            i.css("background", "url(" + o[e].value + ") no-repeat center center");
            break;
        case "r":
            jvm.$("<div/>").css({
                "border-radius": o[e].value,
                border: this.map.params.markerStyle.initial["stroke-width"] + "px " + this.map.params.markerStyle.initial.stroke + " solid",
                width: 2 * o[e].value + "px",
                height: 2 * o[e].value + "px",
                background: this.map.params.markerStyle.initial.fill
            }).appendTo(i)
        }
        t.append(i),
        n = o[e].label,
        this.params.labelRender && (n = this.params.labelRender(n)),
        t.append(jvm.$("<div>" + n + " </div>").addClass("jvectormap-legend-tick-text")),
        s.append(t)
    }
    s.append(jvm.$("<div/>").css("clear", "both"))
}
,
jvm.DataSeries = function(e, t, i) {
    (e = e || {}).attribute = e.attribute || "fill",
    this.elements = t,
    this.params = e,
    this.map = i,
    e.attributes && this.setAttributes(e.attributes),
    jvm.$.isArray(e.scale) ? (t = "fill" === e.attribute || "stroke" === e.attribute ? jvm.ColorScale : jvm.NumericScale,
    this.scale = new t(e.scale,e.normalizeFunction,e.min,e.max)) : e.scale ? this.scale = new jvm.OrdinalScale(e.scale) : this.scale = new jvm.SimpleScale(e.scale),
    this.values = e.values || {},
    this.setValues(this.values),
    this.params.legend && (this.legend = new jvm.Legend($.extend({
        map: this.map,
        series: this
    }, this.params.legend)))
}
,
jvm.DataSeries.prototype = {
    setAttributes: function(e, t) {
        var i, n = e;
        if ("string" == typeof e)
            this.elements[e] && this.elements[e].setStyle(this.params.attribute, t);
        else
            for (i in n)
                this.elements[i] && this.elements[i].element.setStyle(this.params.attribute, n[i])
    },
    setValues: function(e) {
        var t, i, n = -Number.MAX_VALUE, o = Number.MAX_VALUE, s = {};
        if (this.scale instanceof jvm.OrdinalScale || this.scale instanceof jvm.SimpleScale)
            for (i in e)
                e[i] ? s[i] = this.scale.getValue(e[i]) : s[i] = this.elements[i].element.style.initial[this.params.attribute];
        else {
            if (void 0 === this.params.min || void 0 === this.params.max)
                for (i in e)
                    n < (t = parseFloat(e[i])) && (n = t),
                    t < o && (o = t);
            for (i in void 0 === this.params.min ? (this.scale.setMin(o),
            this.params.min = o) : this.scale.setMin(this.params.min),
            void 0 === this.params.max ? (this.scale.setMax(n),
            this.params.max = n) : this.scale.setMax(this.params.max),
            e)
                "indexOf" != i && (t = parseFloat(e[i]),
                isNaN(t) ? s[i] = this.elements[i].element.style.initial[this.params.attribute] : s[i] = this.scale.getValue(t))
        }
        this.setAttributes(s),
        jvm.$.extend(this.values, e)
    },
    clear: function() {
        var e, t = {};
        for (e in this.values)
            this.elements[e] && (t[e] = this.elements[e].element.shape.style.initial[this.params.attribute]);
        this.setAttributes(t),
        this.values = {}
    },
    setScale: function(e) {
        this.scale.setScale(e),
        this.values && this.setValues(this.values)
    },
    setNormalizeFunction: function(e) {
        this.scale.setNormalizeFunction(e),
        this.values && this.setValues(this.values)
    }
},
jvm.Proj = {
    degRad: 180 / Math.PI,
    radDeg: Math.PI / 180,
    radius: 6381372,
    sgn: function(e) {
        return 0 < e ? 1 : e < 0 ? -1 : e
    },
    mill: function(e, t, i) {
        return {
            x: this.radius * (t - i) * this.radDeg,
            y: -this.radius * Math.log(Math.tan((45 + .4 * e) * this.radDeg)) / .8
        }
    },
    mill_inv: function(e, t, i) {
        return {
            lat: (2.5 * Math.atan(Math.exp(.8 * t / this.radius)) - 5 * Math.PI / 8) * this.degRad,
            lng: (i * this.radDeg + e / this.radius) * this.degRad
        }
    },
    merc: function(e, t, i) {
        return {
            x: this.radius * (t - i) * this.radDeg,
            y: -this.radius * Math.log(Math.tan(Math.PI / 4 + e * Math.PI / 360))
        }
    },
    merc_inv: function(e, t, i) {
        return {
            lat: (2 * Math.atan(Math.exp(t / this.radius)) - Math.PI / 2) * this.degRad,
            lng: (i * this.radDeg + e / this.radius) * this.degRad
        }
    },
    aea: function(e, t, i) {
        var i = i * this.radDeg
          , n = 29.5 * this.radDeg
          , o = 45.5 * this.radDeg
          , e = e * this.radDeg
          , t = t * this.radDeg
          , o = (Math.sin(n) + Math.sin(o)) / 2
          , n = Math.cos(n) * Math.cos(n) + 2 * o * Math.sin(n)
          , t = o * (t - i)
          , i = Math.sqrt(n - 2 * o * Math.sin(e)) / o
          , e = Math.sqrt(n - 2 * o * Math.sin(0)) / o;
        return {
            x: i * Math.sin(t) * this.radius,
            y: -(e - i * Math.cos(t)) * this.radius
        }
    },
    aea_inv: function(e, t, i) {
        var e = e / this.radius
          , t = t / this.radius
          , i = i * this.radDeg
          , n = 29.5 * this.radDeg
          , o = 45.5 * this.radDeg
          , o = (Math.sin(n) + Math.sin(o)) / 2
          , n = Math.cos(n) * Math.cos(n) + 2 * o * Math.sin(n)
          , s = Math.sqrt(n - 2 * o * Math.sin(0)) / o
          , r = Math.sqrt(e * e + (s - t) * (s - t))
          , e = Math.atan(e / (s - t));
        return {
            lat: Math.asin((n - r * r * o * o) / (2 * o)) * this.degRad,
            lng: (i + e / o) * this.degRad
        }
    },
    lcc: function(e, t, i) {
        var i = i * this.radDeg
          , t = t * this.radDeg
          , n = 33 * this.radDeg
          , o = 45 * this.radDeg
          , e = e * this.radDeg
          , o = Math.log(Math.cos(n) * (1 / Math.cos(o))) / Math.log(Math.tan(Math.PI / 4 + o / 2) * (1 / Math.tan(Math.PI / 4 + n / 2)))
          , n = Math.cos(n) * Math.pow(Math.tan(Math.PI / 4 + n / 2), o) / o
          , e = n * Math.pow(1 / Math.tan(Math.PI / 4 + e / 2), o)
          , n = n * Math.pow(1 / Math.tan(Math.PI / 4 + 0), o);
        return {
            x: e * Math.sin(o * (t - i)) * this.radius,
            y: -(n - e * Math.cos(o * (t - i))) * this.radius
        }
    },
    lcc_inv: function(e, t, i) {
        var e = e / this.radius
          , t = t / this.radius
          , i = i * this.radDeg
          , n = 33 * this.radDeg
          , o = 45 * this.radDeg
          , o = Math.log(Math.cos(n) * (1 / Math.cos(o))) / Math.log(Math.tan(Math.PI / 4 + o / 2) * (1 / Math.tan(Math.PI / 4 + n / 2)))
          , n = Math.cos(n) * Math.pow(Math.tan(Math.PI / 4 + n / 2), o) / o
          , s = n * Math.pow(1 / Math.tan(Math.PI / 4 + 0), o)
          , r = this.sgn(o) * Math.sqrt(e * e + (s - t) * (s - t))
          , e = Math.atan(e / (s - t));
        return {
            lat: (2 * Math.atan(Math.pow(n / r, 1 / o)) - Math.PI / 2) * this.degRad,
            lng: (i + e / o) * this.degRad
        }
    }
},
jvm.MapObject = function(e) {}
,
jvm.MapObject.prototype.getLabelText = function(e) {
    e = this.config.label ? "function" == typeof this.config.label.render ? this.config.label.render(e) : e : null;
    return e
}
,
jvm.MapObject.prototype.getLabelOffsets = function(e) {
    var t;
    return this.config.label && ("function" == typeof this.config.label.offsets ? t = this.config.label.offsets(e) : "object" == typeof this.config.label.offsets && (t = this.config.label.offsets[e])),
    t || [0, 0]
}
,
jvm.MapObject.prototype.setHovered = function(e) {
    this.isHovered !== e && (this.isHovered = e,
    this.shape.isHovered = e,
    this.shape.updateStyle(),
    this.label) && (this.label.isHovered = e,
    this.label.updateStyle())
}
,
jvm.MapObject.prototype.setSelected = function(e) {
    this.isSelected !== e && (this.isSelected = e,
    this.shape.isSelected = e,
    this.shape.updateStyle(),
    this.label && (this.label.isSelected = e,
    this.label.updateStyle()),
    jvm.$(this.shape).trigger("selected", [e]))
}
,
jvm.MapObject.prototype.setStyle = function() {
    this.shape.setStyle.apply(this.shape, arguments)
}
,
jvm.MapObject.prototype.remove = function() {
    this.shape.remove(),
    this.label && this.label.remove()
}
,
jvm.Region = function(e) {
    var t, i, n;
    this.config = e,
    this.map = this.config.map,
    this.shape = e.canvas.addPath({
        d: e.path,
        "data-code": e.code
    }, e.style, e.canvas.rootElement),
    this.shape.addClass("jvectormap-region jvectormap-element"),
    t = this.shape.getBBox(),
    i = this.getLabelText(e.code),
    this.config.label && i && (n = this.getLabelOffsets(e.code),
    this.labelX = t.x + t.width / 2 + n[0],
    this.labelY = t.y + t.height / 2 + n[1],
    this.label = e.canvas.addText({
        text: i,
        "text-anchor": "middle",
        "alignment-baseline": "central",
        x: this.labelX,
        y: this.labelY,
        "data-code": e.code
    }, e.labelStyle, e.labelsGroup),
    this.label.addClass("jvectormap-region jvectormap-element"))
}
,
jvm.inherits(jvm.Region, jvm.MapObject),
jvm.Region.prototype.updateLabelPosition = function() {
    this.label && this.label.set({
        x: this.labelX * this.map.scale + this.map.transX * this.map.scale,
        y: this.labelY * this.map.scale + this.map.transY * this.map.scale
    })
}
,
jvm.Marker = function(e) {
    var t;
    this.config = e,
    this.map = this.config.map,
    this.isImage = !!this.config.style.initial.image,
    this.createShape(),
    t = this.getLabelText(e.index),
    this.config.label && t && (this.offsets = this.getLabelOffsets(e.index),
    this.labelX = e.cx / this.map.scale - this.map.transX,
    this.labelY = e.cy / this.map.scale - this.map.transY,
    this.label = e.canvas.addText({
        text: t,
        "data-index": e.index,
        dy: "0.6ex",
        x: this.labelX,
        y: this.labelY
    }, e.labelStyle, e.labelsGroup),
    this.label.addClass("jvectormap-marker jvectormap-element"))
}
,
jvm.inherits(jvm.Marker, jvm.MapObject),
jvm.Marker.prototype.createShape = function() {
    var e = this;
    this.shape && this.shape.remove(),
    this.shape = this.config.canvas[this.isImage ? "addImage" : "addCircle"]({
        "data-index": this.config.index,
        cx: this.config.cx,
        cy: this.config.cy
    }, this.config.style, this.config.group),
    this.shape.addClass("jvectormap-marker jvectormap-element"),
    this.isImage && jvm.$(this.shape.node).on("imageloaded", function() {
        e.updateLabelPosition()
    })
}
,
jvm.Marker.prototype.updateLabelPosition = function() {
    this.label && this.label.set({
        x: this.labelX * this.map.scale + this.offsets[0] + this.map.transX * this.map.scale + 5 + (this.isImage ? (this.shape.width || 0) / 2 : this.shape.properties.r),
        y: this.labelY * this.map.scale + this.map.transY * this.map.scale + this.offsets[1]
    })
}
,
jvm.Marker.prototype.setStyle = function(e, t) {
    var i;
    jvm.Marker.parentClass.prototype.setStyle.apply(this, arguments),
    "r" === e && this.updateLabelPosition(),
    (i = !!this.shape.get("image")) != this.isImage && (this.isImage = i,
    this.config.style = jvm.$.extend(!0, {}, this.shape.style),
    this.createShape())
}
,
jvm.Map = function(e) {
    var t, i = this;
    if (this.params = jvm.$.extend(!0, {}, jvm.Map.defaultParams, e),
    !jvm.Map.maps[this.params.map])
        throw new Error("Attempt to use map which was not loaded: " + this.params.map);
    for (t in this.mapData = jvm.Map.maps[this.params.map],
    this.markers = {},
    this.regions = {},
    this.regionsColors = {},
    this.regionsData = {},
    this.container = jvm.$("<div>").addClass("jvectormap-container"),
    this.params.container && this.params.container.append(this.container),
    this.container.data("mapObject", this),
    this.defaultWidth = this.mapData.width,
    this.defaultHeight = this.mapData.height,
    this.setBackgroundColor(this.params.backgroundColor),
    this.onResize = function() {
        i.updateSize()
    }
    ,
    jvm.$(window).resize(this.onResize),
    jvm.Map.apiEvents)
        this.params[t] && this.container.bind(jvm.Map.apiEvents[t] + ".jvectormap", this.params[t]);
    this.canvas = new jvm.VectorCanvas(this.container[0],this.width,this.height),
    ("ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch) && this.params.bindTouchEvents && this.bindContainerTouchEvents(),
    this.bindContainerEvents(),
    this.bindElementEvents(),
    this.createTip(),
    this.params.zoomButtons && this.bindZoomButtons(),
    this.createRegions(),
    this.createMarkers(this.params.markers || {}),
    this.updateSize(),
    this.params.focusOn && ("string" == typeof this.params.focusOn ? this.params.focusOn = {
        region: this.params.focusOn
    } : jvm.$.isArray(this.params.focusOn) && (this.params.focusOn = {
        regions: this.params.focusOn
    }),
    this.setFocus(this.params.focusOn)),
    this.params.selectedRegions && this.setSelectedRegions(this.params.selectedRegions),
    this.params.selectedMarkers && this.setSelectedMarkers(this.params.selectedMarkers),
    this.legendCntHorizontal = jvm.$("<div/>").addClass("jvectormap-legend-cnt jvectormap-legend-cnt-h"),
    this.legendCntVertical = jvm.$("<div/>").addClass("jvectormap-legend-cnt jvectormap-legend-cnt-v"),
    this.container.append(this.legendCntHorizontal),
    this.container.append(this.legendCntVertical),
    this.params.series && this.createSeries()
}
,
jvm.Map.prototype = {
    transX: 0,
    transY: 0,
    scale: 1,
    baseTransX: 0,
    baseTransY: 0,
    baseScale: 1,
    width: 0,
    height: 0,
    setBackgroundColor: function(e) {
        this.container.css("background-color", e)
    },
    resize: function() {
        var e = this.baseScale;
        this.width / this.height > this.defaultWidth / this.defaultHeight ? (this.baseScale = this.height / this.defaultHeight,
        this.baseTransX = Math.abs(this.width - this.defaultWidth * this.baseScale) / (2 * this.baseScale)) : (this.baseScale = this.width / this.defaultWidth,
        this.baseTransY = Math.abs(this.height - this.defaultHeight * this.baseScale) / (2 * this.baseScale)),
        this.scale *= this.baseScale / e,
        this.transX *= this.baseScale / e,
        this.transY *= this.baseScale / e
    },
    updateSize: function() {
        this.width = this.container.width(),
        this.height = this.container.height(),
        this.resize(),
        this.canvas.setSize(this.width, this.height),
        this.applyTransform()
    },
    reset: function() {
        var e, t;
        for (e in this.series)
            for (t = 0; t < this.series[e].length; t++)
                this.series[e][t].clear();
        this.scale = this.baseScale,
        this.transX = this.baseTransX,
        this.transY = this.baseTransY,
        this.applyTransform()
    },
    applyTransform: function() {
        var e, t, i = this.defaultWidth * this.scale <= this.width ? (e = (this.width - this.defaultWidth * this.scale) / (2 * this.scale),
        (this.width - this.defaultWidth * this.scale) / (2 * this.scale)) : (e = 0,
        (this.width - this.defaultWidth * this.scale) / this.scale), n = this.defaultHeight * this.scale <= this.height ? (t = (this.height - this.defaultHeight * this.scale) / (2 * this.scale),
        (this.height - this.defaultHeight * this.scale) / (2 * this.scale)) : (t = 0,
        (this.height - this.defaultHeight * this.scale) / this.scale);
        this.transY > t ? this.transY = t : this.transY < n && (this.transY = n),
        this.transX > e ? this.transX = e : this.transX < i && (this.transX = i),
        this.canvas.applyTransformParams(this.scale, this.transX, this.transY),
        this.markers && this.repositionMarkers(),
        this.repositionLabels(),
        this.container.trigger("viewportChange", [this.scale / this.baseScale, this.transX, this.transY])
    },
    bindContainerEvents: function() {
        var t, i, n = !1, a = this;
        this.params.panOnDrag && (this.container.mousemove(function(e) {
            return n && (a.transX -= (t - e.pageX) / a.scale,
            a.transY -= (i - e.pageY) / a.scale,
            a.applyTransform(),
            t = e.pageX,
            i = e.pageY),
            !1
        }).mousedown(function(e) {
            return n = !0,
            t = e.pageX,
            i = e.pageY,
            !1
        }),
        this.onContainerMouseUp = function() {
            n = !1
        }
        ,
        jvm.$("body").mouseup(this.onContainerMouseUp)),
        this.params.zoomOnScroll && this.container.mousewheel(function(e, t, i, n) {
            var o = jvm.$(a.container).offset()
              , s = e.pageX - o.left
              , o = e.pageY - o.top
              , r = Math.pow(1 + a.params.zoomOnScrollSpeed / 1e3, e.deltaFactor * e.deltaY);
            a.tip.hide(),
            a.setScale(a.scale * r, s, o),
            e.preventDefault()
        })
    },
    bindContainerTouchEvents: function() {
        function e(e) {
            var t, i, n = e.originalEvent.touches;
            "touchstart" == e.type && (d = 0),
            1 == n.length ? (1 == d && (t = h.transX,
            i = h.transY,
            h.transX -= (r - n[0].pageX) / h.scale,
            h.transY -= (a - n[0].pageY) / h.scale,
            h.applyTransform(),
            h.tip.hide(),
            t == h.transX && i == h.transY || e.preventDefault()),
            r = n[0].pageX,
            a = n[0].pageY) : 2 == n.length && (2 == d ? (t = Math.sqrt(Math.pow(n[0].pageX - n[1].pageX, 2) + Math.pow(n[0].pageY - n[1].pageY, 2)) / s,
            h.setScale(o * t, l, c),
            h.tip.hide(),
            e.preventDefault()) : (i = jvm.$(h.container).offset(),
            l = n[0].pageX > n[1].pageX ? n[1].pageX + (n[0].pageX - n[1].pageX) / 2 : n[0].pageX + (n[1].pageX - n[0].pageX) / 2,
            c = n[0].pageY > n[1].pageY ? n[1].pageY + (n[0].pageY - n[1].pageY) / 2 : n[0].pageY + (n[1].pageY - n[0].pageY) / 2,
            l -= i.left,
            c -= i.top,
            o = h.scale,
            s = Math.sqrt(Math.pow(n[0].pageX - n[1].pageX, 2) + Math.pow(n[0].pageY - n[1].pageY, 2)))),
            d = n.length
        }
        var o, s, r, a, l, c, d, h = this;
        jvm.$(this.container).bind("touchstart", e),
        jvm.$(this.container).bind("touchmove", e)
    },
    bindElementEvents: function() {
        var o, a = this;
        this.container.mousemove(function() {
            o = !0
        }),
        this.container.delegate("[class~='jvectormap-element']", "mouseover mouseout", function(e) {
            var t = -1 === (jvm.$(this).attr("class").baseVal || jvm.$(this).attr("class")).indexOf("jvectormap-region") ? "marker" : "region"
              , i = "region" == t ? jvm.$(this).attr("data-code") : jvm.$(this).attr("data-index")
              , n = ("region" == t ? a.regions : a.markers)[i].element
              , o = "region" == t ? a.mapData.paths[i].name : a.markers[i].config.name || ""
              , s = jvm.$.Event(t + "TipShow.jvectormap")
              , r = jvm.$.Event(t + "Over.jvectormap");
            "mouseover" == e.type ? (a.container.trigger(r, [i]),
            r.isDefaultPrevented() || n.setHovered(!0),
            a.tip.text(o),
            a.container.trigger(s, [a.tip, i]),
            s.isDefaultPrevented() || (a.tip.show(),
            a.tipWidth = a.tip.width(),
            a.tipHeight = a.tip.height())) : (n.setHovered(!1),
            a.tip.hide(),
            a.container.trigger(t + "Out.jvectormap", [i]))
        }),
        this.container.delegate("[class~='jvectormap-element']", "mousedown", function() {
            o = !1
        }),
        this.container.delegate("[class~='jvectormap-element']", "mouseup", function() {
            var e = -1 === (jvm.$(this).attr("class").baseVal ? jvm.$(this).attr("class").baseVal : jvm.$(this).attr("class")).indexOf("jvectormap-region") ? "marker" : "region"
              , t = "region" == e ? jvm.$(this).attr("data-code") : jvm.$(this).attr("data-index")
              , i = jvm.$.Event(e + "Click.jvectormap")
              , n = ("region" == e ? a.regions : a.markers)[t].element;
            !o && (a.container.trigger(i, [t]),
            "region" == e && a.params.regionsSelectable || "marker" == e && a.params.markersSelectable) && !i.isDefaultPrevented() && (a.params[e + "sSelectableOne"] && a.clearSelected(e + "s"),
            n.setSelected(!n.isSelected))
        })
    },
    bindZoomButtons: function() {
        var e = this;
        jvm.$("<div/>").addClass("jvectormap-zoomin").text("+").appendTo(this.container),
        jvm.$("<div/>").addClass("jvectormap-zoomout").html("&#x2212;").appendTo(this.container),
        this.container.find(".jvectormap-zoomin").click(function() {
            e.setScale(e.scale * e.params.zoomStep, e.width / 2, e.height / 2, !1, e.params.zoomAnimate)
        }),
        this.container.find(".jvectormap-zoomout").click(function() {
            e.setScale(e.scale / e.params.zoomStep, e.width / 2, e.height / 2, !1, e.params.zoomAnimate)
        })
    },
    createTip: function() {
        var n = this;
        this.tip = jvm.$("<div/>").addClass("jvectormap-tip").appendTo(jvm.$("body")),
        this.container.mousemove(function(e) {
            var t = e.pageX - 15 - n.tipWidth
              , i = e.pageY - 15 - n.tipHeight;
            t < 5 && (t = e.pageX + 15),
            i < 5 && (i = e.pageY + 15),
            n.tip.css({
                left: t,
                top: i
            })
        })
    },
    setScale: function(e, t, i, n, o) {
        var s, r, a, l, c, d, h, p, u, f = jvm.$.Event("zoom.jvectormap"), m = this, g = 0, v = Math.abs(Math.round(60 * (e - this.scale) / Math.max(e, this.scale))), y = new jvm.$.Deferred;
        return e > this.params.zoomMax * this.baseScale ? e = this.params.zoomMax * this.baseScale : e < this.params.zoomMin * this.baseScale && (e = this.params.zoomMin * this.baseScale),
        void 0 !== t && void 0 !== i && (zoomStep = e / this.scale,
        u = n ? (p = t + this.defaultWidth * (this.width / (this.defaultWidth * e)) / 2,
        i + this.defaultHeight * (this.height / (this.defaultHeight * e)) / 2) : (p = this.transX - (zoomStep - 1) / e * t,
        this.transY - (zoomStep - 1) / e * i)),
        o && 0 < v ? (r = this.scale,
        a = (e - r) / v,
        l = this.transX * this.scale,
        d = this.transY * this.scale,
        c = (p * e - l) / v,
        h = (u * e - d) / v,
        s = setInterval(function() {
            g += 1,
            m.scale = r + a * g,
            m.transX = (l + c * g) / m.scale,
            m.transY = (d + h * g) / m.scale,
            m.applyTransform(),
            g == v && (clearInterval(s),
            m.container.trigger(f, [e / m.baseScale]),
            y.resolve())
        }, 10)) : (this.transX = p,
        this.transY = u,
        this.scale = e,
        this.applyTransform(),
        this.container.trigger(f, [e / this.baseScale]),
        y.resolve()),
        y
    },
    setFocus: function(e) {
        var t, i, n, o, s;
        if ((e = e || {}).region ? n = [e.region] : e.regions && (n = e.regions),
        n) {
            for (o = 0; o < n.length; o++)
                this.regions[n[o]] && (i = this.regions[n[o]].element.shape.getBBox()) && (t = void 0 === t ? i : {
                    x: Math.min(t.x, i.x),
                    y: Math.min(t.y, i.y),
                    width: Math.max(t.x + t.width, i.x + i.width) - Math.min(t.x, i.x),
                    height: Math.max(t.y + t.height, i.y + i.height) - Math.min(t.y, i.y)
                });
            return this.setScale(Math.min(this.width / t.width, this.height / t.height), -(t.x + t.width / 2), -(t.y + t.height / 2), !0, e.animate)
        }
        return e.lat && e.lng ? (s = this.latLngToPoint(e.lat, e.lng),
        e.x = this.transX - s.x / this.scale,
        e.y = this.transY - s.y / this.scale) : e.x && e.y && (e.x *= -this.defaultWidth,
        e.y *= -this.defaultHeight),
        this.setScale(e.scale * this.baseScale, e.x, e.y, !0, e.animate)
    },
    getSelected: function(e) {
        var t, i = [];
        for (t in this[e])
            this[e][t].element.isSelected && i.push(t);
        return i
    },
    getSelectedRegions: function() {
        return this.getSelected("regions")
    },
    getSelectedMarkers: function() {
        return this.getSelected("markers")
    },
    setSelected: function(e, t) {
        if (jvm.$.isArray(t = "object" != typeof t ? [t] : t))
            for (i = 0; i < t.length; i++)
                this[e][t[i]].element.setSelected(!0);
        else
            for (var i in t)
                this[e][i].element.setSelected(!!t[i])
    },
    setSelectedRegions: function(e) {
        this.setSelected("regions", e)
    },
    setSelectedMarkers: function(e) {
        this.setSelected("markers", e)
    },
    clearSelected: function(e) {
        for (var t = {}, i = this.getSelected(e), n = 0; n < i.length; n++)
            t[i[n]] = !1;
        this.setSelected(e, t)
    },
    clearSelectedRegions: function() {
        this.clearSelected("regions")
    },
    clearSelectedMarkers: function() {
        this.clearSelected("markers")
    },
    getMapObject: function() {
        return this
    },
    getRegionName: function(e) {
        return this.mapData.paths[e].name
    },
    createRegions: function() {
        var e, t, i = this;
        for (e in this.regionLabelsGroup = this.regionLabelsGroup || this.canvas.addGroup(),
        this.mapData.paths)
            t = new jvm.Region({
                map: this,
                path: this.mapData.paths[e].path,
                code: e,
                style: jvm.$.extend(!0, {}, this.params.regionStyle),
                labelStyle: jvm.$.extend(!0, {}, this.params.regionLabelStyle),
                canvas: this.canvas,
                labelsGroup: this.regionLabelsGroup,
                label: "vml" != this.canvas.mode ? this.params.labels && this.params.labels.regions : null
            }),
            jvm.$(t.shape).bind("selected", function(e, t) {
                i.container.trigger("regionSelected.jvectormap", [jvm.$(this.node).attr("data-code"), t, i.getSelectedRegions()])
            }),
            this.regions[e] = {
                element: t,
                config: this.mapData.paths[e]
            }
    },
    createMarkers: function(e) {
        var t, i, n, o, s = this;
        if (this.markersGroup = this.markersGroup || this.canvas.addGroup(),
        this.markerLabelsGroup = this.markerLabelsGroup || this.canvas.addGroup(),
        jvm.$.isArray(e))
            for (o = e.slice(),
            e = {},
            t = 0; t < o.length; t++)
                e[t] = o[t];
        for (t in e)
            n = e[t]instanceof Array ? {
                latLng: e[t]
            } : e[t],
            !1 !== (i = this.getMarkerPosition(n)) && (i = new jvm.Marker({
                map: this,
                style: jvm.$.extend(!0, {}, this.params.markerStyle, {
                    initial: n.style || {}
                }),
                labelStyle: jvm.$.extend(!0, {}, this.params.markerLabelStyle),
                index: t,
                cx: i.x,
                cy: i.y,
                group: this.markersGroup,
                canvas: this.canvas,
                labelsGroup: this.markerLabelsGroup,
                label: "vml" != this.canvas.mode ? this.params.labels && this.params.labels.markers : null
            }),
            jvm.$(i.shape).bind("selected", function(e, t) {
                s.container.trigger("markerSelected.jvectormap", [jvm.$(this.node).attr("data-index"), t, s.getSelectedMarkers()])
            }),
            this.markers[t] && this.removeMarkers([t]),
            this.markers[t] = {
                element: i,
                config: n
            })
    },
    repositionMarkers: function() {
        var e, t;
        for (e in this.markers)
            !1 !== (t = this.getMarkerPosition(this.markers[e].config)) && this.markers[e].element.setStyle({
                cx: t.x,
                cy: t.y
            })
    },
    repositionLabels: function() {
        for (var e in this.regions)
            this.regions[e].element.updateLabelPosition();
        for (e in this.markers)
            this.markers[e].element.updateLabelPosition()
    },
    getMarkerPosition: function(e) {
        return jvm.Map.maps[this.params.map].projection ? this.latLngToPoint.apply(this, e.latLng || [0, 0]) : {
            x: e.coords[0] * this.scale + this.transX * this.scale,
            y: e.coords[1] * this.scale + this.transY * this.scale
        }
    },
    addMarker: function(e, t, i) {
        var n, o, s = {}, r = [], i = i || [];
        for (s[e] = t,
        o = 0; o < i.length; o++)
            n = {},
            void 0 !== i[o] && (n[e] = i[o]),
            r.push(n);
        this.addMarkers(s, r)
    },
    addMarkers: function(e, t) {
        var i;
        for (t = t || [],
        this.createMarkers(e),
        i = 0; i < t.length; i++)
            this.series.markers[i].setValues(t[i] || {})
    },
    removeMarkers: function(e) {
        for (var t = 0; t < e.length; t++)
            this.markers[e[t]].element.remove(),
            delete this.markers[e[t]]
    },
    removeAllMarkers: function() {
        var e, t = [];
        for (e in this.markers)
            t.push(e);
        this.removeMarkers(t)
    },
    latLngToPoint: function(e, t) {
        var i = jvm.Map.maps[this.params.map].projection
          , n = i.centralMeridian;
        return t < -180 + n && (t += 360),
        i = jvm.Proj[i.type](e, t, n),
        !!(e = this.getInsetForPoint(i.x, i.y)) && (t = e.bbox,
        i.x = (i.x - t[0].x) / (t[1].x - t[0].x) * e.width * this.scale,
        i.y = (i.y - t[0].y) / (t[1].y - t[0].y) * e.height * this.scale,
        {
            x: i.x + this.transX * this.scale + e.left * this.scale,
            y: i.y + this.transY * this.scale + e.top * this.scale
        })
    },
    pointToLatLng: function(e, t) {
        for (var i, n, o, s, r = jvm.Map.maps[this.params.map].projection, a = r.centralMeridian, l = jvm.Map.maps[this.params.map].insets, c = 0; c < l.length; c++)
            if (n = (i = l[c]).bbox,
            o = e - (this.transX * this.scale + i.left * this.scale),
            s = t - (this.transY * this.scale + i.top * this.scale),
            o = o / (i.width * this.scale) * (n[1].x - n[0].x) + n[0].x,
            s = s / (i.height * this.scale) * (n[1].y - n[0].y) + n[0].y,
            o > n[0].x && o < n[1].x && s > n[0].y && s < n[1].y)
                return jvm.Proj[r.type + "_inv"](o, -s, a);
        return !1
    },
    getInsetForPoint: function(e, t) {
        for (var i, n = jvm.Map.maps[this.params.map].insets, o = 0; o < n.length; o++)
            if (e > (i = n[o].bbox)[0].x && e < i[1].x && t > i[0].y && t < i[1].y)
                return n[o]
    },
    createSeries: function() {
        var e, t;
        for (t in this.series = {
            markers: [],
            regions: []
        },
        this.params.series)
            for (e = 0; e < this.params.series[t].length; e++)
                this.series[t][e] = new jvm.DataSeries(this.params.series[t][e],this[t],this)
    },
    remove: function() {
        this.tip.remove(),
        this.container.remove(),
        jvm.$(window).unbind("resize", this.onResize),
        jvm.$("body").unbind("mouseup", this.onContainerMouseUp)
    }
},
jvm.Map.maps = {},
jvm.Map.defaultParams = {
    map: "world_mill_en",
    backgroundColor: "#505050",
    zoomButtons: !0,
    zoomOnScroll: !0,
    zoomOnScrollSpeed: 3,
    panOnDrag: !0,
    zoomMax: 8,
    zoomMin: 1,
    zoomStep: 1.6,
    zoomAnimate: !0,
    regionsSelectable: !1,
    markersSelectable: !1,
    bindTouchEvents: !0,
    regionStyle: {
        initial: {
            fill: "white",
            "fill-opacity": 1,
            stroke: "none",
            "stroke-width": 0,
            "stroke-opacity": 1
        },
        hover: {
            "fill-opacity": .8,
            cursor: "pointer"
        },
        selected: {
            fill: "yellow"
        },
        selectedHover: {}
    },
    regionLabelStyle: {
        initial: {
            "font-family": "Verdana",
            "font-size": "12",
            "font-weight": "bold",
            cursor: "default",
            fill: "black"
        },
        hover: {
            cursor: "pointer"
        }
    },
    markerStyle: {
        initial: {
            fill: "grey",
            stroke: "#505050",
            "fill-opacity": 1,
            "stroke-width": 1,
            "stroke-opacity": 1,
            r: 5
        },
        hover: {
            stroke: "black",
            "stroke-width": 2,
            cursor: "pointer"
        },
        selected: {
            fill: "blue"
        },
        selectedHover: {}
    },
    markerLabelStyle: {
        initial: {
            "font-family": "Verdana",
            "font-size": "12",
            "font-weight": "bold",
            cursor: "default",
            fill: "black"
        },
        hover: {
            cursor: "pointer"
        }
    }
},
jvm.Map.apiEvents = {
    onRegionTipShow: "regionTipShow",
    onRegionOver: "regionOver",
    onRegionOut: "regionOut",
    onRegionClick: "regionClick",
    onRegionSelected: "regionSelected",
    onMarkerTipShow: "markerTipShow",
    onMarkerOver: "markerOver",
    onMarkerOut: "markerOut",
    onMarkerClick: "markerClick",
    onMarkerSelected: "markerSelected",
    onViewportChange: "viewportChange"
},
jvm.MultiMap = function(e) {
    var t = this;
    this.maps = {},
    this.params = jvm.$.extend(!0, {}, jvm.MultiMap.defaultParams, e),
    this.params.maxLevel = this.params.maxLevel || Number.MAX_VALUE,
    this.params.main = this.params.main || {},
    this.params.main.multiMapLevel = 0,
    this.history = [this.addMap(this.params.main.map, this.params.main)],
    this.defaultProjection = this.history[0].mapData.projection.type,
    this.mapsLoaded = {},
    this.params.container.css({
        position: "relative"
    }),
    this.backButton = jvm.$("<div/>").addClass("jvectormap-goback").text("Back").appendTo(this.params.container),
    this.backButton.hide(),
    this.backButton.click(function() {
        t.goBack()
    }),
    this.spinner = jvm.$("<div/>").addClass("jvectormap-spinner").appendTo(this.params.container),
    this.spinner.hide()
}
,
jvm.MultiMap.prototype = {
    addMap: function(e, t) {
        var i = jvm.$("<div/>").css({
            width: "100%",
            height: "100%"
        });
        return this.params.container.append(i),
        this.maps[e] = new jvm.Map(jvm.$.extend(t, {
            container: i
        })),
        this.params.maxLevel > t.multiMapLevel && this.maps[e].container.on("regionClick.jvectormap", {
            scope: this
        }, function(e, t) {
            var e = e.data.scope
              , i = e.params.mapNameByCode(t, e);
            e.drillDownPromise && "pending" === e.drillDownPromise.state() || e.drillDown(i, t)
        }),
        this.maps[e]
    },
    downloadMap: function(e) {
        var t = this
          , i = jvm.$.Deferred();
        return this.mapsLoaded[e] ? i.resolve() : jvm.$.get(this.params.mapUrlByCode(e, this)).then(function() {
            t.mapsLoaded[e] = !0,
            i.resolve()
        }, function() {
            i.reject()
        }),
        i
    },
    drillDown: function(e, t) {
        var i = this.history[this.history.length - 1]
          , n = this
          , o = i.setFocus({
            region: t,
            animate: !0
        })
          , s = this.downloadMap(t);
        o.then(function() {
            "pending" === s.state() && n.spinner.show()
        }),
        s.always(function() {
            n.spinner.hide()
        }),
        this.drillDownPromise = jvm.$.when(s, o),
        this.drillDownPromise.then(function() {
            i.params.container.hide(),
            n.maps[e] ? n.maps[e].params.container.show() : n.addMap(e, {
                map: e,
                multiMapLevel: i.params.multiMapLevel + 1
            }),
            n.history.push(n.maps[e]),
            n.backButton.show()
        })
    },
    goBack: function() {
        var e = this.history.pop()
          , t = this.history[this.history.length - 1]
          , i = this;
        e.setFocus({
            scale: 1,
            x: .5,
            y: .5,
            animate: !0
        }).then(function() {
            e.params.container.hide(),
            t.params.container.show(),
            t.updateSize(),
            1 === i.history.length && i.backButton.hide(),
            t.setFocus({
                scale: 1,
                x: .5,
                y: .5,
                animate: !0
            })
        })
    }
},
jvm.MultiMap.defaultParams = {
    mapNameByCode: function(e, t) {
        return e.toLowerCase() + "_" + t.defaultProjection + "_en"
    },
    mapUrlByCode: function(e, t) {
        return "jquery-jvectormap-data-" + e.toLowerCase() + "-" + t.defaultProjection + "-en.js"
    }
},
function(o, s, r, n) {
    function a(e, t) {
        var i = this
          , t = ("object" == typeof t && (delete t.refresh,
        delete t.render,
        o.extend(this, t)),
        this.$element = o(e),
        !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src")),
        (this.position + "").toLowerCase().match(/\S+/g) || []);
        if (t.length < 1 && t.push("center"),
        1 == t.length && t.push(t[0]),
        "top" != t[0] && "bottom" != t[0] && "left" != t[1] && "right" != t[1] || (t = [t[1], t[0]]),
        this.positionX != n && (t[0] = this.positionX.toLowerCase()),
        this.positionY != n && (t[1] = this.positionY.toLowerCase()),
        i.positionX = t[0],
        i.positionY = t[1],
        "left" != this.positionX && "right" != this.positionX && (this.positionX = isNaN(parseInt(this.positionX)) ? "center" : parseInt(this.positionX)),
        "top" != this.positionY && "bottom" != this.positionY && (this.positionY = isNaN(parseInt(this.positionY)) ? "center" : parseInt(this.positionY)),
        this.position = this.positionX + (isNaN(this.positionX) ? "" : "px") + " " + this.positionY + (isNaN(this.positionY) ? "" : "px"),
        navigator.userAgent.match(/(iPod|iPhone|iPad)/))
            return this.imageSrc && this.iosFix && !this.$element.is("img") && this.$element.css({
                backgroundImage: "url(" + this.imageSrc + ")",
                backgroundSize: "cover",
                backgroundPosition: this.position
            }),
            this;
        if (navigator.userAgent.match(/(Android)/))
            return this.imageSrc && this.androidFix && !this.$element.is("img") && this.$element.css({
                backgroundImage: "url(" + this.imageSrc + ")",
                backgroundSize: "cover",
                backgroundPosition: this.position
            }),
            this;
        this.$mirror = o("<div />").prependTo("body");
        e = this.$element.find(">.parallax-slider"),
        t = !1;
        0 == e.length ? this.$slider = o("<img />").prependTo(this.$mirror) : (this.$slider = e.prependTo(this.$mirror),
        t = !0),
        this.$mirror.addClass("parallax-mirror").css({
            visibility: "hidden",
            zIndex: this.zIndex,
            position: "fixed",
            top: 0,
            left: 0,
            overflow: "hidden"
        }),
        this.$slider.addClass("parallax-slider").one("load", function() {
            i.naturalHeight && i.naturalWidth || (i.naturalHeight = this.naturalHeight || this.height || 1,
            i.naturalWidth = this.naturalWidth || this.width || 1),
            i.aspectRatio = i.naturalWidth / i.naturalHeight,
            a.isSetup || a.setup(),
            a.sliders.push(i),
            a.isFresh = !1,
            a.requestRender()
        }),
        t || (this.$slider[0].src = this.imageSrc),
        (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || 0 < e.length) && this.$slider.trigger("load")
    }
    for (var l = 0, e = ["ms", "moz", "webkit", "o"], t = 0; t < e.length && !s.requestAnimationFrame; ++t)
        s.requestAnimationFrame = s[e[t] + "RequestAnimationFrame"],
        s.cancelAnimationFrame = s[e[t] + "CancelAnimationFrame"] || s[e[t] + "CancelRequestAnimationFrame"];
    s.requestAnimationFrame || (s.requestAnimationFrame = function(e) {
        var t = (new Date).getTime()
          , i = Math.max(0, 16 - (t - l))
          , n = s.setTimeout(function() {
            e(t + i)
        }, i);
        return l = t + i,
        n
    }
    ),
    s.cancelAnimationFrame || (s.cancelAnimationFrame = function(e) {
        clearTimeout(e)
    }
    ),
    o.extend(a.prototype, {
        speed: .2,
        bleed: 0,
        zIndex: -100,
        iosFix: !0,
        androidFix: !0,
        position: "center",
        overScrollFix: !1,
        refresh: function() {
            this.boxWidth = this.$element.outerWidth(),
            this.boxHeight = this.$element.outerHeight() + 2 * this.bleed,
            this.boxOffsetTop = this.$element.offset().top - this.bleed,
            this.boxOffsetLeft = this.$element.offset().left,
            this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;
            var e, t = a.winHeight, i = a.docHeight, i = Math.min(this.boxOffsetTop, i - t), t = Math.max(this.boxOffsetTop + this.boxHeight - t, 0), t = this.boxHeight + (i - t) * (1 - this.speed) | 0, i = (this.boxOffsetTop - i) * (1 - this.speed) | 0;
            t * this.aspectRatio >= this.boxWidth ? (this.imageWidth = t * this.aspectRatio | 0,
            this.imageHeight = t,
            this.offsetBaseTop = i,
            e = this.imageWidth - this.boxWidth,
            this.offsetLeft = "left" == this.positionX ? 0 : "right" == this.positionX ? -e : isNaN(this.positionX) ? -e / 2 | 0 : Math.max(this.positionX, -e)) : (this.imageWidth = this.boxWidth,
            this.imageHeight = this.boxWidth / this.aspectRatio | 0,
            this.offsetLeft = 0,
            e = this.imageHeight - t,
            this.offsetBaseTop = "top" == this.positionY ? i : "bottom" == this.positionY ? i - e : isNaN(this.positionY) ? i - e / 2 | 0 : i + Math.max(this.positionY, -e))
        },
        render: function() {
            var e = a.scrollTop
              , t = a.scrollLeft
              , i = this.overScrollFix ? a.overScroll : 0
              , n = e + a.winHeight;
            this.boxOffsetBottom > e && this.boxOffsetTop <= n ? (this.visibility = "visible",
            this.mirrorTop = this.boxOffsetTop - e,
            this.mirrorLeft = this.boxOffsetLeft - t,
            this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed)) : this.visibility = "hidden",
            this.$mirror.css({
                transform: "translate3d(0px, 0px, 0px)",
                visibility: this.visibility,
                top: this.mirrorTop - i,
                left: this.mirrorLeft,
                height: this.boxHeight,
                width: this.boxWidth
            }),
            this.$slider.css({
                transform: "translate3d(0px, 0px, 0px)",
                position: "absolute",
                top: this.offsetTop,
                left: this.offsetLeft,
                height: this.imageHeight,
                width: this.imageWidth,
                maxWidth: "none"
            })
        }
    }),
    o.extend(a, {
        scrollTop: 0,
        scrollLeft: 0,
        winHeight: 0,
        winWidth: 0,
        docHeight: 1 << 30,
        docWidth: 1 << 30,
        sliders: [],
        isReady: !1,
        isFresh: !1,
        isBusy: !1,
        setup: function() {
            var e, n, t, i;
            this.isReady || (e = o(r),
            n = o(s),
            t = function() {
                a.winHeight = n.height(),
                a.winWidth = n.width(),
                a.docHeight = e.height(),
                a.docWidth = e.width()
            }
            ,
            i = function() {
                var e = n.scrollTop()
                  , t = a.docHeight - a.winHeight
                  , i = a.docWidth - a.winWidth;
                a.scrollTop = Math.max(0, Math.min(t, e)),
                a.scrollLeft = Math.max(0, Math.min(i, n.scrollLeft())),
                a.overScroll = Math.max(e - t, Math.min(e, 0))
            }
            ,
            n.on("resize.px.parallax load.px.parallax", function() {
                t(),
                a.isFresh = !1,
                a.requestRender()
            }).on("scroll.px.parallax load.px.parallax", function() {
                i(),
                a.requestRender()
            }),
            t(),
            i(),
            this.isReady = !0)
        },
        configure: function(e) {
            "object" == typeof e && (delete e.refresh,
            delete e.render,
            o.extend(this.prototype, e))
        },
        refresh: function() {
            o.each(this.sliders, function() {
                this.refresh()
            }),
            this.isFresh = !0
        },
        render: function() {
            this.isFresh || this.refresh(),
            o.each(this.sliders, function() {
                this.render()
            })
        },
        requestRender: function() {
            var e = this;
            this.isBusy || (this.isBusy = !0,
            s.requestAnimationFrame(function() {
                e.render(),
                e.isBusy = !1
            }))
        },
        destroy: function(e) {
            var t, i = o(e).data("px.parallax");
            for (i.$mirror.remove(),
            t = 0; t < this.sliders.length; t += 1)
                this.sliders[t] == i && this.sliders.splice(t, 1);
            o(e).data("px.parallax", !1),
            0 === this.sliders.length && (o(s).off("scroll.px.parallax resize.px.parallax load.px.parallax"),
            this.isReady = !1,
            a.isSetup = !1)
        }
    });
    var i = o.fn.parallax;
    o.fn.parallax = function(i) {
        return this.each(function() {
            var e = o(this)
              , t = "object" == typeof i && i;
            this == s || this == r || e.is("body") ? a.configure(t) : e.data("px.parallax") ? "object" == typeof i && o.extend(e.data("px.parallax"), t) : (t = o.extend({}, e.data(), t),
            e.data("px.parallax", new a(this,t))),
            "string" == typeof i && ("destroy" == i ? a.destroy(this) : a[i]())
        })
    }
    ,
    o.fn.parallax.Constructor = a,
    o.fn.parallax.noConflict = function() {
        return o.fn.parallax = i,
        this
    }
    ,
    o(r).on("ready.px.parallax.data-api", function() {
        o('[data-parallax="scroll"]').parallax()
    })
}(jQuery, window, document),
jQuery.cookie = function(e, t, i) {
    if (void 0 === t) {
        var n = null;
        if (document.cookie && "" != document.cookie)
            for (var o = document.cookie.split(";"), s = 0; s < o.length; s++) {
                var r = jQuery.trim(o[s]);
                if (r.substring(0, e.length + 1) == e + "=") {
                    n = decodeURIComponent(r.substring(e.length + 1));
                    break
                }
            }
        return n
    }
    i = i || {},
    null === t && (t = "",
    i.expires = -1);
    var a = ""
      , l = (i.expires && ("number" == typeof i.expires || i.expires.toUTCString) && ("number" == typeof i.expires ? (l = new Date).setTime(l.getTime() + 24 * i.expires * 60 * 60 * 1e3) : l = i.expires,
    a = "; expires=" + l.toUTCString()),
    i.path ? "; path=" + i.path : "")
      , c = i.domain ? "; domain=" + i.domain : ""
      , i = i.secure ? "; secure" : "";
    document.cookie = [e, "=", encodeURIComponent(t), a, l, c, i].join("")
}
;
var thumbs, p = "http", d = "static", z = ("https:" == document.location.protocol && (p += "s",
d = "engine"),
document.createElement("script")), s = (z.type = "text/javascript",
z.async = !0,
z.src = p + "://" + d + ".adzerk.net/ados.js",
document.getElementsByTagName("script")[0]), onloadCallback = (s.parentNode.insertBefore(z, s),
function() {
    grecaptcha.render("recaptcha", {
        sitekey: "6LenqQ8UAAAAAMxLdWlGNGjHkwZfgDJXkMGa_DMf"
    })
}
), loadedImages = 0, allMainImgsLoaded = !1;
function countImages() {
    loadedImages += 1,
    $(".images").length === loadedImages && (allMainImgsLoaded = !0,
    thumbs) && thumbs.loadSlideImages()
}
function checkLoadedImgs() {
    return allMainImgsLoaded
}
function clearCount() {
    loadedImages = $('.featuredGirls[style="display: none;"]') ? $(".featuredGirls .images").length : 0,
    allMainImgsLoaded = !1
}
function showMassageModal() {
    -1 < window.location.hostname.indexOf("massage.eros") && $("#massageModal").length && !$("#ageModal").length && ("1" == $.cookie("massage_agreement") ? $("#massageModal").remove() : ($("#massageModal").modal("show"),
    $(".modal-backdrop").addClass("dark-overlay"),
    $(".massageCloseOverlay").click(function() {
        var e;
        $("#massage_agree_enter_website").is(":checked") ? (e = (e = domain.split(":"))[0],
        $.cookie("massage_agreement", "1", {
            path: "/",
            domain: "." + e
        }),
        $("#massageModal").modal("hide"),
        $("#massageModal").on("hidden.bs.modal", function(e) {
            $("#massageModal").remove()
        })) : $("#massage_agree_enter_website").parent().addClass("error_agreement")
    })))
}
function loadMap(e, t) {
    t.LoadingOverlay("show", {
        color: "rgba(0, 0, 0, 0.7)",
        image: "/img/loading.gif"
    }),
    $.ajax({
        url: "/show-map",
        data: {
            map_type: e
        },
        type: "GET",
        success: function(e) {
            $("#mapWrap").html(e),
            t.LoadingOverlay("hide")
        },
        error: function() {}
    })
}
function openSearch() {
    document.getElementById("searchBar").style.height = "606px",
    $('input[name="sch"]').focus()
}
function closeSearch() {
    document.getElementById("searchBar").style.height = "0%"
}
function centerPopup(e) {
    e.css("top", (jQuery(window).height() - e.height()) / 2 + jQuery(window).scrollTop() + "px"),
    e.css("left", (jQuery(window).width() - e.width()) / 2 + jQuery(window).scrollLeft() + "px")
}
function rowCountSwitch(o) {
    o && $(".switchable").hasClass("onePerRow") && 767 < window.innerWidth && o.stop("list"),
    $(".rowCount").length && $(".rowCount a").click(function() {
        var e = $(this)
          , t = e.attr("rel")
          , i = 4
          , n = ($(".switchable").removeClass("onePerRow"),
        $(".switchable").removeClass("fourPerRow"),
        $(".switchable").removeClass("sixPerRow"),
        e.parent().parent().children())
          , e = e.parent().parent().children(".m");
        n.removeClass("active"),
        e.removeClass("active"),
        "one" == t ? ($(".switchable").addClass("onePerRow"),
        n.children('a[rel="one"]').parent().addClass("active"),
        i = 1,
        o && 767 < window.innerWidth && (o.stop("list"),
        o.addDataphotos("onePerRow"))) : "four" == t ? ($(".switchable").addClass("fourPerRow"),
        n.children('a[rel="four"]').parent().addClass("active"),
        o && (o.addDataphotos(),
        o.restart()),
        setNicknameWidth()) : "six" == t && ($(".switchable").addClass("sixPerRow"),
        n.children('a[rel="six"]').parent().addClass("active"),
        e.children('a[rel="four"]').parent().addClass("active"),
        i = 6,
        o && (o.addDataphotos(),
        o.restart()),
        setNicknameWidth());
        t = domain.split(":")[0];
        return $.cookie("per_row_count", i, {
            expires: 365,
            path: "/",
            domain: "." + t
        }),
        !1
    })
}
function newsletter() {
    $.ajax({
        url: "/newsletter",
        method: "GET",
        success: function(e) {
            e.length && ($("body").append(e),
            $(".sign-up").modal("show"),
            $(".sign-up").on("shown.bs.modal", function() {
                $("#nz-send").click(function() {
                    $("#nz-email").removeClass("err"),
                    $("#nz-city").removeClass("err");
                    var e = !1
                      , t = $("#nz-email").val()
                      , i = $("#nz-city").val();
                    if (0 != t.length && /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(t) || ($("#nz-email").addClass("err"),
                    e = !0),
                    0 == i.length && ($("#nz-city").addClass("err"),
                    e = !0),
                    e)
                        return !1;
                    $.ajax({
                        url: "https://ersapps.newsmanapp.com/subscribe.php",
                        jsonp: "nzsub_SubscribeResponder",
                        dataType: "jsonp",
                        data: {
                            email: t,
                            city: i
                        },
                        success: function(e) {
                            alert(e)
                        }
                    })
                })
            }),
            $(".sign-up").on("hidden.bs.modal", function() {
                $(".sign-up").remove()
            }))
        }
    })
}
function collectEmails() {
    $.ajax({
        url: "/collect-emails",
        method: "GET",
        success: function(e) {
            e.length && ($("body").append(e),
            $(".collect-emails").on("shown.bs.modal", function() {
                $("#ce-send").click(function() {
                    $("#ce-email").removeClass("err");
                    var e = !1
                      , t = $("#ce-email").val();
                    if (0 != t.length && /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(t) || ($("#ce-email").addClass("err"),
                    e = !0),
                    e)
                        return !1;
                    $.ajax({
                        url: "/collect-emails",
                        method: "POST",
                        data: {
                            email: t
                        },
                        success: function(e) {
                            $(".n-block").css({
                                display: "none"
                            }),
                            $("#resp-message").css({
                                display: "block"
                            }),
                            $.cookie("pv_ce", 100, {
                                expires: 1e4,
                                path: "/"
                            }),
                            $(".collect-emails").modal("hide")
                        }
                    })
                })
            }),
            $(".collect-emails").on("hidden.bs.modal", function() {
                $(".collect-emails").remove(),
                $.cookie("pv_ce") && 100 != parseInt($.cookie("pv_ce")) && $.cookie("pv_ce", 100, {
                    expires: 14,
                    path: "/"
                })
            }))
        }
    })
}
function setNicknameWidth() {
    $(".grid-item").each(function(e, t) {
        var i = $(this)
          , n = i.find(".infoIcons").width();
        n && !$(".onePerRow").length ? i.find(".nickname").css({
            width: "calc(100% - " + (parseInt(n) + 15) + "px)"
        }) : i.find(".nickname").css({
            width: "100%"
        })
    })
}
function nzsub_SubscribeResponder(e) {
    1 === e ? ($(".n-block").hide(),
    $("#resp-message").show()) : alert("An error has occured. Please try again")
}
document.documentElement.setAttribute("data-useragent", navigator.userAgent),
function(e) {
    -1 != navigator.userAgent.indexOf("Safari") && -1 != navigator.userAgent.indexOf("Mac") && navigator.vendor.indexOf("Google Inc.") < 0 && e("html").addClass("safari-mac")
}(jQuery),
$(document).ready(function() {
    var o, s, e, t, i = $(window).width(), n = 1, r = (showMassageModal(),
    setNicknameWidth(),
    $("#ageModal").length && ("1" == $.cookie("spalsh") ? $("#ageModal").remove() : ($("#ageModal").modal("show"),
    $(".modal-backdrop").addClass("dark-overlay"),
    $(".closeOverlay").click(function() {
        var e;
        $("#agree_enter_website").is(":checked") ? (e = (e = domain.split(":"))[0],
        $.cookie("spalsh", "1", {
            path: "/",
            domain: "." + e
        }),
        $("#ageModal").modal("hide"),
        $("#ageModal").on("hidden.bs.modal", function(e) {
            $("#ageModal").remove(),
            "1" !== $.cookie("massage_agreement") && showMassageModal()
        })) : $("#agree_enter_website").parent().addClass("error_agreement")
    }))),
    $(".menuTip").length && window.innerWidth < 768 && $("body > *").not(".enterWebsitePopUp, #enterWebsitePopUpOverlay").click(function() {
        var e = domain.split(":")[0];
        $.cookie("menuTip", "1", {
            expires: 7e3,
            path: "/",
            domain: "." + e
        }),
        $(".menuTip").remove()
    }),
    $(window).on("scroll", function() {
        var e = $("header");
        45 <= $(window).scrollTop() ? e.addClass("sticky") : e.removeClass("sticky")
    }),
    rowCountSwitch(thumbs = $(".images").length ? $(".images").animatedThumbnails({
        domain: domainMedia,
        thumb: thumb,
        thumb2x: thumb2x,
        thumb3x: thumb3x,
        thumbWn: thumbWn,
        thumbWn2x: thumbWn2x,
        thumbWn3x: thumbWn3x
    }) : thumbs),
    $(".expandWrapper .show").click(function() {
        var e = $(this)
          , t = (e.hasClass("more") ? (e.html("Show less"),
        e.removeClass("more"),
        e.addClass("less")) : (e.html("Show more"),
        e.removeClass("less"),
        e.addClass("more")),
        $(".mainContentWrap"));
        return $(".categoriesWrapper").hasClass("openCatWrapper") ? $(".showMoreContent").slideUp(400, function() {
            $(".categoriesWrapper").removeClass("openCatWrapper"),
            t.css({
                top: 0
            }),
            $("footer").css({
                top: 0
            })
        }) : (e = t.offset().top,
        t.css({
            position: "relative",
            top: e - 109 + "px"
        }),
        $("footer").css({
            position: "relative",
            top: e - 109 + "px"
        }),
        $(".categoriesWrapper").addClass("openCatWrapper"),
        $(".showMoreContent").slideDown(400)),
        !1
    }),
    $(window).resize(function() {
        var e;
        $(window).width() != i && (i = $(window).width(),
        $(".images").length && ($(".onePerRow").length && (window.innerWidth <= 767 ? thumbs.restart() : thumbs.stop("list")),
        window.innerWidth <= 767 ? $(".singleGrid > a").hasClass("slideshow") && 1 == n && (thumbs.addDataphotos(),
        thumbs.startSlides($(".singleGrid > a").attr("id"), "one"),
        n += 1) : (thumbs.stop("one"),
        n = 1,
        thumbs.addDataphotos())),
        $(".categoriesWrapper").hasClass("openCatWrapper")) && (e = $(".categoriesWrapper").height() - $(".showMoreContent").height() + 32,
        $(".mainContentWrap").css({
            top: e + "px"
        }))
    }),
    $("#newsletter-link").length && $("#newsletter-link").click(function(e) {
        return newsletter(),
        !1
    }),
    $("#searchForm input").keypress(function(e) {
        if (13 == e.which)
            return $("#searchForm").submit(),
            !1
    }),
    window.innerWidth <= 414 && $("#searchBar .ion-search").click(function() {
        $("#searchForm").submit()
    }),
    $(window).scroll(function() {
        0 < $(this).scrollTop() ? $("#toTop").css({
            opacity: 1
        }) : $("#toTop").css({
            opacity: 0
        })
    }),
    0 < jQuery(window).scrollTop() && $("#toTop").css({
        opacity: 1
    }),
    $("#toTop").click(function() {
        return $("html, body").animate({
            scrollTop: 0
        }, 500),
        !1
    }),
    $(".pp").length && ($(".pp").click(function(e) {
        var t, i = $(this), n = (s = i.attr("data-adid"),
        i.attr("data-social-type")), i = (i.hasClass("web") ? (t = i.html(),
        o = i.attr("href")) : t = o = i.attr("href"),
        '<strong class="disclaimer-text">DISCLAIMER</strong>: You are now leaving the Eros.com website and are going to a website that is not owned, operated, endorsed or controlled in any way by Eros. We are not responsible for the content on, or availability of, the linked site, nor do we affirm or make any guarantees about the accuracy of the information on this site.  Please also be aware that the security and privacy policies on this site may be different than those of Eros.com. <br/><br/>' + t);
        return $("#ppModal .modal-title").html(n),
        $("#ppModal .modal-body").html(i),
        $("#ppModal").modal("show"),
        !1
    }),
    $(".goToLink").click(function() {
        $("#ppModal").modal("hide"),
        trackEvents("website", s),
        window.open(o, "_blank")
    })),
    !1);
    window.innerWidth <= 736 && (e = Math.ceil($(".usCities ul").children().length / 2),
    e = $(".usCities ul li:lt(" + e + ")"),
    (t = document.createElement("ul")).className = "nav locationCats bigCats firstRow",
    $(e).appendTo(t),
    $(t).prependTo($(".usCities")),
    r = !0),
    $(window).resize(function() {
        var e, t;
        window.innerWidth <= 736 && !r && (e = Math.ceil($(".usCities ul").children().length / 2),
        e = $(".usCities ul li:lt(" + e + ")"),
        (t = document.createElement("ul")).className = "nav locationCats bigCats firstRow",
        $(e).appendTo(t),
        $(t).prependTo($(".usCities")),
        r = !0),
        736 < window.innerWidth && r && ($(".firstRow").children().prependTo(".usCities ul").not(".firstRow"),
        $(".firstRow").remove(),
        r = !1)
    }),
    $("a.countryName").click(function() {
        var e, t = $(this);
        return t.hasClass("active") ? (t.removeClass("active"),
        t.next(".col").addClass("hidden-xs-up"),
        e = "world") : ($("a.countryName").removeClass("active"),
        $("a.countryName").next(".col").addClass("hidden-xs-up"),
        t.addClass("active"),
        t.next(".col").removeClass("hidden-xs-up"),
        e = t.attr("rel"),
        window.innerWidth <= 736 && $("html, body").animate({
            scrollTop: t.offset().top - 55
        }, 300)),
        "none" != $("#mapWrap").css("display") && loadMap(e, $("#mapWrap")),
        !1
    }),
    $(".erosVerified").length && $(".erosVerified").click(function() {
        return $.ajax({
            url: "/verified",
            method: "GET",
            success: function(e) {
                e.length && ($("body").append(e),
                $("#authenticatedBox").modal("show"),
                $("#authenticatedBox").on("hidden.bs.modal", function() {
                    $("#authenticatedBox").remove()
                }))
            }
        }),
        !1
    }),
    $("#map-switcher").length && ($("#map-switcher").unbind("click"),
    $("#map-switcher").click(function() {
        var t = $(this)
          , e = "world";
        return $(".countryName").hasClass("active") && (e = $(".countryName.active").attr("rel")),
        $.ajax({
            url: "/show-map",
            method: "GET",
            data: {
                map_type: e
            },
            success: function(e) {
                $("#mapWrap").html(e),
                t.hasClass("map-view") ? ($("#mapContainer").show(),
                $("#countriesContainer").hide(),
                t.html("Switch to directory view"),
                t.removeClass("map-view"),
                initMap()) : ($("#mapContainer").hide(),
                $("#countriesContainer").show(),
                t.html("Switch to map view"),
                t.addClass("map-view"))
            }
        }),
        !1
    }))
}),
$.fn.disableZoomStart = function(e) {
    1 < e.touches.length && e.preventDefault()
}
,
$.fn.disableZoomEnd = function(e) {
    var t = (new Date).getTime();
    t - lastTouchEnd <= 300 && e.preventDefault(),
    lastTouchEnd = t
}
,
document.addEventListener("touchstart", $.fn.disableZoomStart, !1);
var pinchZoom, lastTouchEnd = 0, allIDs = (document.addEventListener("touchend", $.fn.disableZoomEnd, !1),
{}), settings = "", arrOfDataPhotos = [], checkIfAnimStarted = !1, noPhotosIds = [], checkIfNoPhotosReq = !1, checkSlideStart = !0, allIMgsLoaded = !0, ua = (["one", "two", "four", "list", "foot"].forEach(function(e) {
    allIDs[e] = {}
}),
!function(p) {
    "use strict";
    var r, a = {
        animationTime: 3e3,
        fadeOutTime: 1500
    };
    p.fn.animatedThumbnails = function(e) {
        return p.fn.resetAll(),
        settings = p.extend({}, a, e),
        allIMgsLoaded = !0,
        p(".gotd").addClass("girlOfTheDay"),
        p(this).each(function(e, t) {
            var i, n, o, s, r, t = p(t), a = "", l = p(t).attr("id"), c = "";
            t.attr("data-photos") && (i = !!p("#" + l).parent().hasClass("singleGrid"),
            n = !!p("#" + l).parent().parent().parent().hasClass("twoColumns"),
            o = p("#" + l).parent().parent().hasClass("fourPerRow") && !p("#" + l).parent().parent().hasClass("switchable"),
            s = p("#" + l).parent().hasClass("item"),
            r = !1,
            i && (t.hasClass("slideshow") && (allIDs.one[l] = ""),
            c = a = "one"),
            n && (t.hasClass("slideshow") && (allIDs.two[l] = ""),
            c = a = "two"),
            o && (t.hasClass("slideshow") && (allIDs.four[l] = ""),
            c = a = "four"),
            s && (t.hasClass("slideshow") && (allIDs.foot[l] = ""),
            c = a = "foot"),
            i || n || o || s || (t.hasClass("slideshow") && (allIDs.list[l] = ""),
            a = "list",
            c = p("#" + l).parent().parent().hasClass("onePerRow") ? "one" : "few"),
            r = !!t.hasClass("slideshow"),
            arrOfDataPhotos.push({
                isSlideshow: r,
                data: JSON.parse(t.attr("data-photos")),
                id: t.attr("id"),
                type: a,
                row: c
            })),
            t.attr("data-photos", "")
        }),
        p.fn.addMissedPhotos(arrOfDataPhotos, !0),
        p.fn
    }
    ,
    p.fn.resetAll = function() {
        allIDs = {},
        settings = "",
        arrOfDataPhotos = [],
        checkIfAnimStarted = !(allIMgsLoaded = checkSlideStart = !(checkIfNoPhotosReq = !(noPhotosIds = []))),
        ["one", "two", "four", "list", "foot"].forEach(function(e) {
            allIDs[e] = {}
        })
    }
    ,
    p.fn.addMissedPhotos = function(c, d) {
        var h = 0;
        checkIfNoPhotosReq = !0,
        c.forEach(function(e, t) {
            d && (e.data.splice(0, 1),
            0 === e.data.length) && h++;
            var i, n = 0, o = e.data.slice(), s = e.id, r = p("#" + e.id);
            if (window.innerWidth <= 767)
                r.hasClass("slideshow") ? o = [] : (o = [],
                e.data = []);
            else {
                if (!r.hasClass("slideshow") && (r.parent().parent().hasClass("onePerRow") || r.parent().hasClass("singleGrid"))) {
                    if (3 <= p("#" + s + " .image").length)
                        return;
                    e.data.length < 2 && noPhotosIds.push(s),
                    e.data = [],
                    o.splice(2, 16)
                }
                if (!r.hasClass("slideshow") && !r.parent().parent().hasClass("onePerRow") && !r.parent().hasClass("singleGrid")) {
                    if (1 <= p("#" + s + " .image").length)
                        return;
                    e.data.splice(0, 1),
                    o.splice(1, 16)
                }
                if (r.hasClass("slideshow") && (r.parent().parent().hasClass("onePerRow") || r.parent().hasClass("singleGrid"))) {
                    if (3 <= p("#" + s + " .image").length)
                        return;
                    e.data.length < 2 && noPhotosIds.push(s),
                    e.data.splice(0, 2),
                    o.splice(2, 16)
                }
                if (r.hasClass("slideshow") && !r.parent().parent().hasClass("onePerRow") && !r.parent().hasClass("singleGrid")) {
                    if (1 <= p("#" + s + " .image").length)
                        return;
                    e.data.splice(0, 1),
                    o.splice(1, 16)
                }
            }
            for (i in o) {
                var a = new Image
                  , l = "";
                p(a).on("load", function() {
                    checkSlideStart = !1,
                    ++n == o.length && (h++,
                    p(".gotd").addClass("girlOfTheDay")),
                    h >= c.filter(function(e) {
                        return "one" === e.row
                    }).length && (allIMgsLoaded = !0,
                    p.fn.addNoPhotos(),
                    p.fn.loadSlideImages())
                }),
                p(a).on("error", function(e) {
                    ++h >= c.filter(function(e) {
                        return "one" === e.row
                    }).length && (allIMgsLoaded = !0,
                    p.fn.addNoPhotos(),
                    p.fn.loadSlideImages())
                }),
                l = r.parent().hasClass("item") ? "thumbWn" : "thumb",
                p.fn.createImgSrcs(o[i], l, a, r, !1)
            }
            checkIfNoPhotosReq || p.fn.addNoPhotos()
        }),
        checkSlideStart && checkLoadedImgs() && p.fn.loadSlideImages()
    }
    ,
    p.fn.addNoPhotos = function() {
        noPhotosIds.forEach(function(e) {
            var t = 3 - p("#" + e + " .image").length;
            if (3 != t)
                for (var i, n = p("#" + e), o = 0; o < t; o++)
                    (n.parent().parent().hasClass("onePerRow") || n.parent().hasClass("singleGrid")) && (i = p("#" + e + " .image:last-child()"),
                    n.append('<div class="image no-photo"><img src="' + i.children().attr("src") + '" /></div>'))
        })
    }
    ,
    p.fn.loadSlideImages = function(e) {
        !(allIMgsLoaded && checkLoadedImgs() || e) || checkIfAnimStarted || (p.fn.loopForInitSlides(),
        checkIfAnimStarted = !0)
    }
    ,
    p.fn.handleSingleSlideImage = function(t) {
        var i;
        try {
            i = arrOfDataPhotos.find(function(e) {
                if (e.id === t)
                    return e
            })
        } catch (e) {
            arrOfDataPhotos.forEach(function(e) {
                e.id === t && (i = e)
            })
        }
        i && i.isSlideshow && 767 < window.innerWidth && "one" !== i.type && !p("#" + i.id).parent().parent().hasClass("onePerRow") && p.fn.loadSlideSingleImages(i.data[0], i),
        i && i.isSlideshow && window.innerWidth <= 767 && p.fn.loadSlideSingleImages(i.data[0], i)
    }
    ,
    p.fn.loadSlideSingleImages = function(e, t) {
        var i, n, o;
        e && t && (t.data.splice(0, 1),
        i = p("#" + t.id),
        n = new Image,
        o = "",
        o = i.parent().hasClass("item") ? "thumbWn" : "thumb",
        p(n).on("load", function() {
            p("#" + t.id).append('<div class="image" style="position:absolute; top:0; left:0; display:none; width:100%"><img src="' + this.src + '" srcset="' + this.srcset + '" /></div>')
        }),
        p.fn.createImgSrcs(e, o, n, i, !0))
    }
    ,
    p.fn.loopForInitSlides = function() {
        for (var t in allIDs)
            Object.keys(allIDs[t]).forEach(function(e) {
                p.fn.initSlide(e, t)
            })
    }
    ,
    p.fn.createImgSrcs = function(e, t, i, n, o) {
        i.src = settings.domain + "/" + e.path + "/" + e.hash + "_" + settings[t] + "." + e.ext;
        var s = settings.domain + "/" + e.path + "/" + e.hash + "_" + settings[t] + "." + e.ext + " 1x, "
          , s = (s += settings.domain + "/" + e.path + "/" + e.hash + "_" + settings[t + "2x"] + "." + e.ext + " 2x, ") + (settings.domain + "/" + e.path + "/" + e.hash + "_" + settings[t + "3x"] + "." + e.ext + " 3x");
        i.srcset = s,
        o || n.append('<div class="image"><img src="' + i.src + '" srcset="' + i.srcset + '" /></div>'),
        checkIfNoPhotosReq = !(checkSlideStart = !1),
        allIMgsLoaded = o
    }
    ,
    p.fn.addDataphotos = function(e) {
        window.innerWidth <= 767 || (e ? p.fn.addMissedPhotos(arrOfDataPhotos, !1) : p.fn.loadSlideImages("1"))
    }
    ,
    p.fn.initSlide = function(e, t) {
        "one" == t && window.innerWidth <= 767 ? p.fn.startSlides(e, "one") : "two" == t ? p.fn.startSlides(e, "two") : "four" == t ? p.fn.startSlides(e, "four") : "foot" == t ? p.fn.startSlides(e, "foot") : ("list" == t && p(".switchable").length && (!p(".switchable").hasClass("onePerRow") || p(".switchable").hasClass("onePerRow") && window.innerWidth <= 767) || !p(".switchable").length && window.innerWidth <= 767) && p.fn.startSlides(e)
    }
    ,
    p.fn.stop = function(t) {
        p(".custImage").remove();
        var e = Object.keys(allIDs[t]);
        e.forEach(function(e) {
            clearInterval(allIDs[t][e]),
            allIDs[t][e] = ""
        }),
        "one" === t && (p.fn.resetStyles("one"),
        e.forEach(function(e) {
            p("#" + e + " .linkToProfile").removeAttr("style")
        })),
        "list" === t && (p.fn.resetStyles("list"),
        e.forEach(function(e) {
            p("#" + e + " .linkToProfile").removeAttr("style")
        })),
        767 < window.innerWidth && p.fn.addNoPhotos()
    }
    ,
    p.fn.resetStyles = function(e) {
        Object.keys(allIDs[e]).forEach(function(e) {
            p("#" + e + " div:not(.linkToProfile):nth-child(n+2):nth-child(-n+4)").css({
                display: "block",
                position: ""
            })
        })
    }
    ,
    p.fn.restart = function() {
        var e = Object.keys(allIDs.list);
        allIDs.list[e[0]] || e.forEach(function(e) {
            p.fn.startSlides(e)
        })
    }
    ,
    p.fn.startSlides = function(e, t, i, n) {
        var o, s;
        i = i || a.animationTime,
        n = n || a.fadeOutTime,
        allIDs[t = t || "list"][e] || (p("#" + e + " > div:not(.linkToProfile)").css({
            position: "absolute",
            display: "block",
            width: "100%",
            top: 0,
            left: 0
        }),
        p("#" + e + " > div:not(.linkToProfile)").hide(),
        p("#" + e + " > div:gt(0)").hide(),
        p("#" + e).parent().parent().hasClass("onePerRow") && p("#" + e).parent().hasClass("singleGrid"),
        p("#" + e + " .custImage").length || (o = p("#" + e + " .linkToProfile > img").attr("src"),
        (s = p("#" + e + " .linkToProfile").clone()).children().prop("onload", null),
        s.removeClass("linkToProfile").addClass("custImage"),
        s.css({
            position: "absolute",
            display: "none",
            width: "100%",
            top: 0,
            left: 0
        }),
        s.children().attr("src", o),
        p("#" + e).append(s)),
        r = setInterval(function() {
            p.fn.handleSingleSlideImage(e),
            p(p("#" + e + " > div")[1]).fadeOut(n, function() {}).next().fadeIn(n, function() {
                p("#" + e + " .linkToProfile").css({
                    display: "block",
                    visibility: "hidden"
                }),
                p("#" + e).parent().parent().hasClass("onePerRow") && 767 < window.innerWidth && p.fn.stop("list"),
                p("#" + e).parent().hasClass("singleGrid") && 767 < window.innerWidth && p.fn.stop("one")
            }).end().appendTo("#" + e)
        }, i),
        allIDs[t][e] = r)
    }
}(jQuery),
$(document).ready(function() {
    $(".parallax-slider").parallax({
        imageSrc: "/img/bg-map.png"
    }),
    $("#redirectModal").length && $("#redirectModal").modal("show")
}),
$(document).ready(function() {
    $(".slider").length && $(".slider").slick({
        infinite: !1,
        speed: 300,
        slidesToShow: 8,
        slidesToScroll: 8,
        responsive: [{
            breakpoint: 1280,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 7
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 461,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 345,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    })
}),
navigator.userAgent.toLowerCase()), isAndroid = -1 < ua.indexOf("android"), isMobile = window.matchMedia("only screen and (max-width: 768px)"), currentWidth = $(window).width(), disableScroll = function(e) {
    e.preventDefault()
}, disableRightClick = function(e) {
    e.preventDefault()
}, zoomOptions = $.fn, startX = 0, startY = 0, swiped = 0, swipedY = 0, isScrolling = !1, swipable = !0;
function submitReportForm() {
    $("#reportForm").submit(function(e) {
        e.preventDefault();
        e = $("#photosAt").val();
        if ("http://" !== e)
            return $("#reportBox").modal("hide"),
            $.ajax({
                url: "/report-fake-photos",
                data: {
                    photosAt: e,
                    adUrl: $("#adUrl").val(),
                    "g-recaptcha-response": $("#g-recaptcha-response").val()
                },
                method: "POST",
                success: function(e) {
                    $("#reportBoxWrap").html(e),
                    $("#reportBox").modal("show"),
                    $("#reportBox").on("shown.bs.modal", function() {
                        submitReportForm()
                    }),
                    $("#reportBox").on("hidden.bs.modal", function() {
                        $("#reportBox").remove()
                    })
                }
            }),
            !1;
        $("#photosAt").addClass("err")
    })
}
function sliderFullscreenOpen(e, t) {
    e.addClass("fullscreen-out"),
    $(".pSlider").addClass("fullscreen-slider"),
    $("header, .profileWrapper , .callButton, footer").css({
        display: "none"
    }),
    $("body").css({
        height: $(window).height(),
        "touch-action": "auto",
        "margin-top": 0
    }).prepend($(".profile-slider")),
    document.removeEventListener("touchstart", zoomOptions.disableZoomStart),
    document.removeEventListener("touchend", zoomOptions.disableZoomEnd)
}
function sliderFullscreenClose(e) {
    e.removeClass("fullscreen-out"),
    $(".pinchZoomOverlay").remove(),
    $(".pSlider").removeClass("fullscreen-slider"),
    $("html,body").removeAttr("style"),
    $("header, .profileWrapper , .callButton, footer").css({
        display: ""
    }),
    $(".profile-slider").insertAfter(".profileHeading"),
    document.addEventListener("touchstart", zoomOptions.disableZoomStart),
    document.addEventListener("touchend", zoomOptions.disableZoomEnd)
}
function sliderNavigate(e) {
    var t = e.slick("slickCurrentSlide");
    e.slick("slickGoTo", t, !0)
}
function initProfileSlider() {
    var n = $(".pSlider").slick({
        infinite: !0,
        speed: 300,
        slidesToShow: 1,
        centerMode: !0,
        variableWidth: !0
    });
    $(n).on("afterChange", function(e, t, i, n) {}),
    $(".slick-slide").on("mousedown", function(t) {
        var i;
        0 != t.button || $(".fullscreenToggle").hasClass("fullscreen-out") || $(".slick-slide").on("mouseup", i = function(e) {
            $(".slick-slide").off("mouseup", i),
            Math.abs(t.screenX - e.screenX) < 10 && Math.abs(t.screenY - e.screenY) < 10 && (sliderFullscreenOpen($(".fullscreenToggle"), $(".slick-current")),
            sliderNavigate(n))
        }
        )
    }),
    $(window).on("keydown", function(e) {
        37 == e.keyCode && n.slick("slickPrev"),
        39 == e.keyCode && n.slick("slickNext"),
        27 == e.keyCode && $(".fullscreenToggle").hasClass("fullscreen-out") && (sliderFullscreenClose($(".fullscreenToggle")),
        sliderNavigate(n))
    }),
    $(".fullscreenToggle").click(function() {
        ($(".fullscreenToggle").hasClass("fullscreen-out") ? sliderFullscreenClose : sliderFullscreenOpen)($(".fullscreenToggle"), $(".slick-current")),
        sliderNavigate(n)
    })
}
$(document).ready(function() {
    $(".pImg").length && $(".pImg").on("contextmenu", disableRightClick),
    $(".profileTip").length && $(".close").click(function() {
        var e = domain.split(":")[0];
        return $.cookie("profileTip", "1", {
            expires: 7e3,
            path: "/",
            domain: "." + e
        }),
        $(".alert").alert("close"),
        !1
    }),
    $(window).on("orientationchange", function() {
        currentWidth = $(window).width()
    }),
    $("#swNext").length && $("#swPrev").length && ($(".profileWrapper").on("touchstart", function(e) {
        startX = e.originalEvent.touches[0].pageX || e.originalEvent.changedTouches[0].pageX,
        startY = e.originalEvent.touches[0].clientY || e.originalEvent.changedTouches[0].clientY,
        swiped = 0,
        isScrolling = !1,
        swipable = !(e.originalEvent.touches[0].pageX < 15 || e.originalEvent.touches[0].pageX > $(window).width() - 15)
    }),
    $(".profileWrapper").on("touchmove", function(e) {
        var t = e.originalEvent.touches[0].pageX || e.originalEvent.changedTouches[0].pageX;
        if (!$(e.target).hasClass("pImg") && !$(e.target).hasClass("slick-track") && swipable) {
            if (swiped = startX - t,
            swipedY = startY - e.originalEvent.touches[0].clientY,
            15 < Math.abs(swiped) && !isScrolling) {
                if (e.preventDefault(),
                !$("#swNext").length && swiped < 0)
                    return;
                if (!$("#swPrev").length && 0 < swiped)
                    return;
                if (!$("#swPrev").length && !$("#swNext").length)
                    return;
                0 < swiped ? $("#swipeText").html("loading <br> next ad") : $("#swipeText").html("loading <br> previous ad"),
                $("html, body").css({
                    overflow: "hidden"
                }),
                $(".swipeLoading").css({
                    display: "none"
                }),
                $(".profileWrapper ").css({
                    transform: "translateX(" + -swiped + "px)",
                    "margin-top": "0px"
                })
            }
            Math.abs(swiped) > 35 * currentWidth / 100 && !isScrolling && (0 < swiped ? $(".swipeLoading").css({
                left: 75 * currentWidth / 100 - 30 * swiped / 100 + "px",
                display: "block"
            }) : $(".swipeLoading").css({
                left: 4 * currentWidth / 100 + 30 * -swiped / 100 + "px",
                display: "block"
            }))
        }
    }),
    $(".profileWrapper").on("touchend", function(e) {
        Math.abs(swiped) >= 35 * currentWidth / 100 && $("#swPrev").length && $("#swNext").length && $(".profileWrapper").attr("style") ? window.location.href = (0 < swiped ? $("#swNext") : $("#swPrev")).attr("href") : ($("html, body").removeAttr("style"),
        $(".profileWrapper ").removeAttr("style"),
        $(".swipeLoading").css({
            display: "none"
        }))
    })),
    $(window).on("scroll", function() {
        isScrolling = !0;
        var e = $(".callButton");
        $(window).scrollTop() >= $(".profileHeading").height() ? e.css({
            opacity: 1
        }) : e.css({
            opacity: 0
        })
    }),
    $("#contentShow").click(function() {
        $(".about").toggleClass("expanded");
        var e = $(this);
        return e.hasClass("more") ? (e.html("Tap for less"),
        e.removeClass("more"),
        e.addClass("less")) : (e.html("Tap for more"),
        e.removeClass("less"),
        e.addClass("more")),
        !1
    });
    var e = 0
      , t = $(".pImg").length
      , i = ($(".pImg").on("load", function() {
        ++e == t && initProfileSlider()
    }).each(function() {
        this.complete && $(this).trigger("load")
    }),
    $("#bookmark").length && $("#bookmark").click(function() {
        return alert("Press " + (-1 != navigator.userAgent.toLowerCase().indexOf("mac") ? "Command/Cmd" : "CTRL") + " + D to bookmark this page."),
        !1
    }),
    $("#permalink").length && $("#permalink").click(function() {
        var e = $("#permalinkage textarea");
        return "none" === $("#permalinkage").css("display") ? ($("#permalink").html('<i class="ion-link"></i>Close direct link'),
        $("#permalinkage").slideDown(function() {
            $(this).css({
                display: "block"
            }),
            e.focus(),
            e.select()
        })) : ($("#permalink").html('<i class="ion-link"></i>View direct link'),
        $("#permalinkage").slideUp(function() {
            $(this).css({
                display: "none"
            })
        })),
        !1
    }),
    ($("#erosAuthenticated").length || $("#erosAuthenticatedTop").length) && $("#erosAuthenticated, #erosAuthenticatedTop").click(function() {
        return $.ajax({
            url: "/verified",
            method: "GET",
            success: function(e) {
                e.length && ($("body").append(e),
                $("#authenticatedBox").modal("show"),
                $("#authenticatedBox").on("hidden.bs.modal", function() {
                    $("#authenticatedBox").remove()
                }))
            }
        }),
        !1
    }),
    '<a href="#" id="reportFakePhotos" data-profile-id="' + $("#p-ref-id").val() + '"><i class="ion-image"></i> Report Fake Photos</a><a href="https://www.eros.com/disclaimer/report" target="_blank"><i class="ion-android-warning"></i> Report Trafficking</a>');
    $(".reports").html(i);
    $(".underText").html('<small>Notice Regarding Third Party Advertisements: This is an Ad and all content is created and provided by the advertiser who is solely responsible for such content including, without limitation, all text, images, and websites. We assume no responsibility or liability for such content or the content or operation of websites that you may link to and visit. We do not endorse, review, or control any websites that are linked to or from an advertisement. Please see <a target="_blank" alt="About Eros/Ads" href="https://www.eros.com/disclaimer/disclaimer">About Eros/Ads</a> and <a target="_blank" alt="Terms and Conditions" href="https://www.eros.com/disclaimer/terms">Terms and Conditions</a> for additional information about Eros Guide and Ads appearing on our sites. <br>Please see our <a target="_blank" alt="Anti-Trafficking Awareness" href="https://www.eros.com/disclaimer/report">Anti-Trafficking Awareness</a> page for additional information about identifying and reporting suspected Human Trafficking.</small>'),
    ($("#reportFakePhotos").length || "#reportFakePhotosM".length) && $("#reportFakePhotos, #reportFakePhotosM").click(function() {
        var e = parseInt($(this).attr("data-profile-id"));
        return e && $.ajax({
            url: "/report-fake-photos",
            data: {
                id: e
            },
            method: "GET",
            success: function(e) {
                e.length && ($("body").append(e),
                $("#reportBox").modal("show"),
                $("#reportBox").on("shown.bs.modal", function() {
                    submitReportForm()
                }),
                $("#reportBox").on("hidden.bs.modal", function() {
                    $("#reportBox").remove()
                }))
            }
        }),
        !1
    })
});
