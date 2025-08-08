(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        1118: function(t, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return n(8510)
            }])
        },
        8510: function(t, e, n) {
            "use strict";
            n.r(e);
            var s = n(1799),
                r = n(5893),
                o = n(9008),
                i = n.n(o),
                l = n(7294);
            n(906);
            e.default = function(t) {
                var e = t.Component,
                    n = t.pageProps;
                return (0, r.jsxs)(l.Fragment, {
                    children: [(0, r.jsxs)(i(), {
                        children: [(0, r.jsx)("link", {
                            href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;800;900&display=swap",
                            rel: "stylesheet"
                        }), (0, r.jsx)("link", {
                            href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap",
                            rel: "stylesheet"
                        }), (0, r.jsx)("link", {
                            href: "https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap",
                            rel: "stylesheet"
                        }), (0, r.jsx)("link", {
                            href: "https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap",
                            rel: "stylesheet"
                        })]
                    }), (0, r.jsx)(e, (0, s.Z)({}, n))]
                })
            }
        },
        906: function() {},
        9008: function(t, e, n) {
            t.exports = n(5443)
        },
        1799: function(t, e, n) {
            "use strict";

            function s(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function r(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    })))), r.forEach((function(e) {
                        s(t, e, n[e])
                    }))
                }
                return t
            }
            n.d(e, {
                Z: function() {
                    return r
                }
            })
        }
    },
    function(t) {
        var e = function(e) {
            return t(t.s = e)
        };
        t.O(0, [774, 179], (function() {
            return e(1118), e(387)
        }));
        var n = t.O();
        _N_E = n
    }
]);