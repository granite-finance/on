!function(r) {
    "use strict";
    "function" == typeof define && define.amd ? define("parollerjs", ["jquery"], r) : "object" == typeof module && "object" == typeof module.exports ? module.exports = r(require("jquery")) : r(jQuery)
}(function(g) {
    "use strict";
    var v = !1
      , x = function() {
        v = !1
    }
      , b = function(r, t) {
        return r.css({
            "background-position": "center " + -t + "px"
        })
    }
      , k = function(r, t) {
        return r.css({
            "background-position": -t + "px center"
        })
    }
      , y = function(r, t, o, n) {
        return "none" !== n || (n = ""),
        r.css({
            "-webkit-transform": "translateY(" + t + "px)" + n,
            "-moz-transform": "translateY(" + t + "px)" + n,
            transform: "translate(0," + t + "px)" + n,
            transition: o,
            "will-change": "transform"
        })
    }
      , z = function(r, t, o, n) {
        return "none" !== n || (n = ""),
        r.css({
            "-webkit-transform": "translateX(" + t + "px)" + n,
            "-moz-transform": "translateX(" + t + "px)" + n,
            transform: "translate(" + t + "px, 0)" + n,
            transition: o,
            "will-change": "transform"
        })
    }
      , M = function(r, t, o) {
        var n = r.data("paroller-factor")
          , a = n || o.factor;
        if (t < 576) {
            var e = r.data("paroller-factor-xs")
              , i = e || o.factorXs;
            return i || a
        }
        if (t <= 768) {
            var c = r.data("paroller-factor-sm")
              , s = c || o.factorSm;
            return s || a
        }
        if (t <= 1024) {
            var u = r.data("paroller-factor-md")
              , f = u || o.factorMd;
            return f || a
        }
        if (t <= 1200) {
            var l = r.data("paroller-factor-lg")
              , d = l || o.factorLg;
            return d || a
        }
        if (t <= 1920) {
            var p = r.data("paroller-factor-xl")
              , h = p || o.factorXl;
            return h || a
        }
        return a
    }
      , j = function(r, t) {
        return Math.round(r * t)
    }
      , X = function(r, t, o, n) {
        return Math.round((r - o / 2 + n) * t)
    }
      , q = function(r) {
        return r.css({
            "background-position": "unset"
        })
    }
      , T = function(r) {
        return r.css({
            transform: "unset",
            transition: "unset"
        })
    };
    g.fn.paroller = function(h) {
        var m = g(window).height()
          , w = g(document).height();
        h = g.extend({
            factor: 0,
            factorXs: 0,
            factorSm: 0,
            factorMd: 0,
            factorLg: 0,
            factorXl: 0,
            transition: "transform .1s ease",
            type: "background",
            direction: "vertical"
        }, h);
        return this.each(function() {
            var o = g(this)
              , n = g(window).width()
              , a = o.offset().top
              , e = o.outerHeight()
              , r = o.data("paroller-type")
              , t = o.data("paroller-direction")
              , i = o.data("paroller-transition")
              , c = o.css("transform")
              , s = i || h.transition
              , u = r || h.type
              , f = t || h.direction
              , l = 0
              , d = j(a, l)
              , p = X(a, l, m, e);
            "background" === u ? "vertical" === f ? b(o, d) : "horizontal" === f && k(o, d) : "foreground" === u && ("vertical" === f ? y(o, p, s, c) : "horizontal" === f && z(o, p, s, c)),
            g(window).on("resize", function() {
                var r = g(this).scrollTop();
                n = g(window).width(),
                a = o.offset().top,
                e = o.outerHeight(),
                l = M(o, n, h),
                d = Math.round(a * l),
                p = Math.round((a - m / 2 + e) * l),
                v || (window.requestAnimationFrame(x),
                v = !0),
                "background" === u ? (q(o),
                "vertical" === f ? b(o, d) : "horizontal" === f && k(o, d)) : "foreground" === u && r <= w && (T(o),
                "vertical" === f ? y(o, p, s) : "horizontal" === f && z(o, p, s))
            }),
            g(window).on("scroll", function() {
                var r = g(this).scrollTop()
                  , t = g(document).scrollTop();
                l = 0 === t ? 0 : M(o, n, h),
                d = Math.round((a - r) * l),
                p = Math.round((a - m / 2 + e - r) * l),
                v || (window.requestAnimationFrame(x),
                v = !0),
                "background" === u ? "vertical" === f ? b(o, d) : "horizontal" === f && k(o, d) : "foreground" === u && r <= w && ("vertical" === f ? y(o, p, s, c) : "horizontal" === f && z(o, p, s, c))
            })
        })
    }
});
