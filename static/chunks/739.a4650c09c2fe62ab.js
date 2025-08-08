"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [739], {
        4739: function(e, r, i) {
            i.r(r);
            var n = i(1799),
                s = i(9396),
                t = i(5893),
                a = i(8494),
                l = i(5968),
                p = {
                    light: ["img/partners/1.png", "img/partners/2.png", "img/partners/3.png", "img/partners/4.png", "img/partners/5.png", "img/partners/6.png", "img/partners/7.png", "img/partners/8.png"],
                    dark: ["img/partners/light/1.png", "img/partners/light/2.png", "img/partners/light/3.png", "img/partners/light/4.png", "img/partners/light/5.png", "img/partners/light/6.png", "img/partners/light/7.png", "img/partners/light/8.png"]
                };
            r.default = function(e) {
                var r = e.dark;
                return (0, t.jsx)("div", {
                    className: "orido_tm_section",
                    children: (0, t.jsx)("div", {
                        className: "orido_tm_partners",
                        children: (0, t.jsx)("div", {
                            className: "container",
                            children: (0, t.jsx)("div", {
                                className: "partners_list",
                                children: (0, t.jsx)(a.tq, (0, s.Z)((0, n.Z)({}, l.r), {
                                    className: "owl-carousel",
                                    children: p[r ? "dark" : "light"].map((function(e, r) {
                                        return (0, t.jsx)(a.o5, {
                                            className: "item",
                                            children: (0, t.jsx)("a", {
                                                href: "#",
                                                children: (0, t.jsx)("img", {
                                                    src: e,
                                                    alt: ""
                                                })
                                            })
                                        }, r)
                                    }))
                                }))
                            })
                        })
                    })
                })
            }
        },
        5968: function(e, r, i) {
            i.d(r, {
                P: function() {
                    return s
                },
                r: function() {
                    return t
                }
            });
            var n = i(8116);
            n.ZP.use([n.tl, n.W_, n.xW, n.pt]);
            var s = {
                    slidesPerView: 1,
                    spaceBetween: 50,
                    loop: !0,
                    navigation: {
                        nextEl: ".next_button",
                        prevEl: ".prev_button"
                    },
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: !1
                    },
                    breakpoints: {
                        0: {
                            slidesPerView: 1
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 50
                        },
                        1040: {
                            slidesPerView: 3,
                            spaceBetween: 50
                        }
                    }
                },
                t = {
                    slidesPerView: 1,
                    spaceBetween: 50,
                    loop: !0,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: !1
                    },
                    breakpoints: {
                        0: {
                            slidesPerView: 2
                        },
                        480: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 3
                        },
                        1040: {
                            slidesPerView: 4
                        },
                        1200: {
                            slidesPerView: 5
                        },
                        1600: {
                            slidesPerView: 5
                        },
                        1920: {
                            slidesPerView: 5
                        }
                    }
                }
        }
    }
]);