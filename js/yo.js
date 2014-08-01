! function() {
    function a() {
        for (var a, b = navigator.userAgent.toLowerCase(), c = ["", "webkit", "moz", "ms", "o"], d = "Transform", e = !1, f = 0; f < c.length && !e; f++) a = c[f] + (c[f] ? d : d.toLowerCase()), e = void 0 !== document.body.style[a];
        e && (A.enginePrefix = c[f - 1], A.transformProperty = a), A.isTouch = "ontouchstart" in document.body, A.isIE = -1 !== b.indexOf("trident"), A.isIE9 = -1 !== b.indexOf("msie 9.")
    }

    function b(a, b) {
        for (var c = a["offset" + b], d = "scroll" + ("Left" === b ? "Width" : "Height"), e = "offset" + ("Left" === b ? "Width" : "Height"); a.offsetParent;) a = a.offsetParent, c += a.offsetParent && a.offsetParent[d] > a.offsetParent[e] ? a["offset" + b] : 0;
        return c
    }

    function c() {
        return A.isIE ? document.documentElement.clientWidth : window.innerWidth
    }

    function d() {
        return A.isIE ? document.documentElement.clientHeight : window.innerHeight
    }

    function e(a, b, c) {
        var d, e;
        c = c.split(" "), a = Array.isArray(a) ? a : [a];
        for (var f = 0, g = c.length; g > f; f++) {
            d = new RegExp("( \\b" + c[f] + "\\b|\\b" + c[f] + "\\b |^" + c[f] + "$)");
            for (var h = 0; h < a.length; h++) e = d.test(a[h].className), "add" !== b && "toggle" !== b || e ? "remove" !== b && "toggle" !== b || !e || (a[h].className = a[h].className.replace(d, "")) : a[h].className += (a[h].className ? " " : "") + c[f]
        }
    }

    function f(a, b, c) {
        a.style[A.transformProperty] = A.isIE9 ? b || c ? "translateX(" + b + "px) translateY(" + c + "px" : "" : b || c ? "translate3d(" + b + "px," + c + "px,0)" : ""
    }

    function g(a, b, c) {
        c = c || a, a.addEventListener("touchstart", function(a) {
            e(c, "add", "yo-pressed"), this._x = a.touches[0].pageX, this._y = a.touches[0].pageY, this._didMove = !1
        }), a.addEventListener("touchmove", function(a) {
            this._didMove || (this._didMove = Math.abs(this._x - a.touches[0].pageX) > 10 || Math.abs(this._y - a.touches[0].pageY) > 10, this._didMove && e(c, "remove", "yo-pressed"))
        }), a.addEventListener("touchend", function() {
            e(c, "remove", "yo-pressed"), !this._didMove && b()
        })
    }

    function h(a, b) {
        var c = document.createElement("link");
        c.rel = "stylesheet", c.href = a, c.onload = b ? b : null, (document.head || document.getElementsByTagName("head")[0]).appendChild(c)
    }

    function i(a) {
        window.open("http://justyo.co/" + a)
    }

    function j() {
        u = document.createElement("div"), u.className = "yo-button yo-" + (A.isTouch ? "mobile" : "desktop");
        var a = '<div class="yo-button-icon"><div class="yo-button-icon-plus"></div></div>';
        a += '<div class="yo-button-meta">', a += '<div class="yo-button-meta-extra"><span class="yo-button-meta-extra-dummy">Yo </span>' + _yoData.username + " to get Yo's<br/>when " + _yoData.trigger + "!</div>", a += '<div class="yo-button-meta-base">Yo</div>', a += "</div>", a += '<div class="yo-button-icon-target"></div>', u.innerHTML = a, t.appendChild(u), setTimeout(function() {
            e(u, "add", "yo-transitionable")
        }, 200);
        var b = document.querySelector(".yo-button-meta-extra");
        b.style.minWidth = b.textContent.length / 2.9 + "em"
    }

    function k() {
        if (A.isTouch) {
            var a = u.querySelector(".yo-button-icon-target"),
                b = u.querySelector(".yo-button-icon");
            g(u, m), g(a, function() {
                i(_yoData.username)
            }, b)
        } else u.addEventListener("mousedown", function(a) {
            a.preventDefault()
        }), u.addEventListener("click", function(a) {
            a.stopPropagation(), a.preventDefault(), m()
        })
    }

    function l() {
        w = u.offsetWidth, x = u.offsetHeight, y || (y = w, z = x)
    }

    function m() {
        var a, g, h, i, j, k = 0,
            m = 0,
            n = c(),
            o = d();
        l(), v ? (v = !1, w = y + 2, x = z, e(u.querySelector(".yo-button-meta"), "remove", "yo-show-meta")) : (v = !0, a = document.querySelector(".yo-button-meta-extra"), g = a.offsetWidth - 20, h = a.offsetHeight / 1.7, w += g, x += h, clearTimeout(p), p = setTimeout(function() {
            e(u.querySelector(".yo-button-meta"), "add", "yo-show-meta")
        }, 200), i = b(u, "Left"), j = b(u, "Top") - window.scrollY, k = i + w >= n ? parseInt(n - w - i - r, 10) : 0, m = j + x >= o ? parseInt(o - x - j - r, 10) : 0), e(u, v ? "add" : "remove", "yo-open"), u.style.width = w + "px", u.style.height = x + "px", k || m ? f(u, k, m) : f(u), clearTimeout(q), q = setTimeout(function() {
            e(u.querySelector(".yo-button-icon-plus"), v ? "add" : "remove", "yo-active")
        }, 200)
    }

    function n() {
        window._yoData && _yoData.username && _yoData.trigger && (t = document.getElementById(_yoData.buttonID || "yo-button"), t && (a(), h(s + "yo.css", o), h("http://fonts.googleapis.com/css?family=Montserrat:400")))
    }

    function o() {
        j(), k()
    }
    var p, q, r = 10,
        s = "http://yoapp.s3.amazonaws.com/js/",
        t = null,
        u = null,
        v = !1,
        w = 0,
        x = 0,
        y = 0,
        z = 0,
        A = {};
    ("interactive" === document.readyState || "complete" === document.readyState || "loaded" === document.readyState) && n(), document.addEventListener("DOMContentLoaded", n)
}();
