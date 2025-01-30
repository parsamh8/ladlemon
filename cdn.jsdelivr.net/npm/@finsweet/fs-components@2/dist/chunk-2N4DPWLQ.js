function it(t, e) {
    t.indexOf(e) === -1 && t.push(e)
}
var _ = (t, e, r) => Math.min(Math.max(r, t), e);
var p = {
    duration: .3,
    delay: 0,
    endDelay: 0,
    repeat: 0,
    easing: "ease"
};
var y = t => typeof t == "number";
var v = t => Array.isArray(t) && !y(t[0]);
var ht = (t, e, r) => {
    let i = e - t;
    return ((r - t) % i + i) % i + t
};

function gt(t, e) {
    return v(t) ? t[ht(0, t.length, e)] : t
}
var J = (t, e, r) => -r * t + r * e + t;
var q = () => {},
    u = t => t;
var F = (t, e, r) => e - t === 0 ? 1 : (r - t) / (e - t);

function ot(t, e) {
    let r = t[t.length - 1];
    for (let i = 1; i <= e; i++) {
        let o = F(0, e, i);
        t.push(J(r, 1, o))
    }
}

function xt(t) {
    let e = [0];
    return ot(e, t - 1), e
}

function nt(t, e = xt(t.length), r = u) {
    let i = t.length,
        o = i - e.length;
    return o > 0 && ot(e, o), n => {
        let a = 0;
        for (; a < i - 2 && !(n < e[a + 1]); a++);
        let s = _(0, 1, F(e[a], e[a + 1], n));
        return s = gt(r, a)(s), J(t[a], t[a + 1], s)
    }
}
var B = t => Array.isArray(t) && y(t[0]);
var I = t => typeof t == "object" && !!t.createAnimation;
var g = t => typeof t == "function";
var st = t => typeof t == "string";
var T = {
    ms: t => t * 1e3,
    s: t => t / 1e3
};
var yt = (t, e, r) => (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t,
    It = 1e-7,
    Nt = 12;

function zt(t, e, r, i, o) {
    let n, a, s = 0;
    do a = e + (r - e) / 2, n = yt(a, i, o) - t, n > 0 ? r = a : e = a; while (Math.abs(n) > It && ++s < Nt);
    return a
}

function R(t, e, r, i) {
    if (t === e && r === i) return u;
    let o = n => zt(n, 0, 1, t, r);
    return n => n === 0 || n === 1 ? n : yt(o(n), e, i)
}
var at = (t, e = "end") => r => {
    r = e === "end" ? Math.min(r, .999) : Math.max(r, .001);
    let i = r * t,
        o = e === "end" ? Math.floor(i) : Math.ceil(i);
    return _(0, 1, o / t)
};
var Ut = {
        ease: R(.25, .1, .25, 1),
        "ease-in": R(.42, 0, 1, 1),
        "ease-in-out": R(.42, 0, .58, 1),
        "ease-out": R(0, 0, .58, 1)
    },
    _t = /\((.*?)\)/;

function N(t) {
    if (g(t)) return t;
    if (B(t)) return R(...t);
    let e = Ut[t];
    if (e) return e;
    if (t.startsWith("steps")) {
        let r = _t.exec(t);
        if (r) {
            let i = r[1].split(",");
            return at(parseFloat(i[0]), i[1].trim())
        }
    }
    return u
}
var M = class {
    constructor(e, r = [0, 1], {
        easing: i,
        duration: o = p.duration,
        delay: n = p.delay,
        endDelay: a = p.endDelay,
        repeat: s = p.repeat,
        offset: l,
        direction: d = "normal",
        autoplay: S = !0
    } = {}) {
        if (this.startTime = null, this.rate = 1, this.t = 0, this.cancelTimestamp = null, this.easing = u, this.duration = 0, this.totalDuration = 0, this.repeat = 0, this.playState = "idle", this.finished = new Promise((f, O) => {
                this.resolve = f, this.reject = O
            }), i = i || p.easing, I(i)) {
            let f = i.createAnimation(r);
            i = f.easing, r = f.keyframes || r, o = f.duration || o
        }
        this.repeat = s, this.easing = v(i) ? u : N(i), this.updateDuration(o);
        let P = nt(r, l, v(i) ? i.map(N) : u);
        this.tick = f => {
            var O;
            n = n;
            let h = 0;
            this.pauseTime !== void 0 ? h = this.pauseTime : h = (f - this.startTime) * this.rate, this.t = h, h /= 1e3, h = Math.max(h - n, 0), this.playState === "finished" && this.pauseTime === void 0 && (h = this.totalDuration);
            let V = h / this.duration,
                X = Math.floor(V),
                b = V % 1;
            !b && V >= 1 && (b = 1), b === 1 && X--;
            let Z = X % 2;
            (d === "reverse" || d === "alternate" && Z || d === "alternate-reverse" && !Z) && (b = 1 - b);
            let z = h >= this.totalDuration ? 1 : Math.min(b, 1),
                C = P(this.easing(z));
            e(C), this.pauseTime === void 0 && (this.playState === "finished" || h >= this.totalDuration + a) ? (this.playState = "finished", (O = this.resolve) === null || O === void 0 || O.call(this, C)) : this.playState !== "idle" && (this.frameRequestId = requestAnimationFrame(this.tick))
        }, S && this.play()
    }
    play() {
        let e = performance.now();
        this.playState = "running", this.pauseTime !== void 0 ? this.startTime = e - this.pauseTime : this.startTime || (this.startTime = e), this.cancelTimestamp = this.startTime, this.pauseTime = void 0, this.frameRequestId = requestAnimationFrame(this.tick)
    }
    pause() {
        this.playState = "paused", this.pauseTime = this.t
    }
    finish() {
        this.playState = "finished", this.tick(0)
    }
    stop() {
        var e;
        this.playState = "idle", this.frameRequestId !== void 0 && cancelAnimationFrame(this.frameRequestId), (e = this.reject) === null || e === void 0 || e.call(this, !1)
    }
    cancel() {
        this.stop(), this.tick(this.cancelTimestamp)
    }
    reverse() {
        this.rate *= -1
    }
    commitStyles() {}
    updateDuration(e) {
        this.duration = e, this.totalDuration = e * (this.repeat + 1)
    }
    get currentTime() {
        return this.t
    }
    set currentTime(e) {
        this.pauseTime !== void 0 || this.rate === 0 ? this.pauseTime = e : this.startTime = performance.now() - e / this.rate
    }
    get playbackRate() {
        return this.rate
    }
    set playbackRate(e) {
        this.rate = e
    }
};

function qt(t = .1, {
    start: e = 0,
    from: r = 0,
    easing: i
} = {}) {
    return (o, n) => {
        let a = y(r) ? r : Bt(r, n),
            s = Math.abs(a - o),
            l = t * s;
        if (i) {
            let d = n * t;
            l = N(i)(l / d) * d
        }
        return e + l
    }
}

function Bt(t, e) {
    if (t === "first") return 0; {
        let r = e - 1;
        return t === "last" ? r : r / 2
    }
}

function vt(t, e, r) {
    return g(t) ? t(e, r) : t
}
var ft = function() {};
var L = class {
    setAnimation(e) {
        this.animation = e, e ? .finished.then(() => this.clearAnimation()).catch(() => {})
    }
    clearAnimation() {
        this.animation = this.generator = void 0
    }
};
var ct = new WeakMap;

function Q(t) {
    return ct.has(t) || ct.set(t, {
        transforms: [],
        values: new Map
    }), ct.get(t)
}

function St(t, e) {
    return t.has(e) || t.set(e, new L), t.get(e)
}
var Lt = ["", "X", "Y", "Z"],
    $t = ["translate", "scale", "rotate", "skew"],
    $ = {
        x: "translateX",
        y: "translateY",
        z: "translateZ"
    },
    bt = {
        syntax: "<angle>",
        initialValue: "0deg",
        toDefaultUnit: t => t + "deg"
    },
    jt = {
        translate: {
            syntax: "<length-percentage>",
            initialValue: "0px",
            toDefaultUnit: t => t + "px"
        },
        rotate: bt,
        scale: {
            syntax: "<number>",
            initialValue: 1,
            toDefaultUnit: u
        },
        skew: bt
    },
    A = new Map,
    tt = t => `--motion-${t}`,
    Y = ["x", "y", "z"];
$t.forEach(t => {
    Lt.forEach(e => {
        Y.push(t + e), A.set(tt(t + e), jt[t])
    })
});
var Kt = (t, e) => Y.indexOf(t) - Y.indexOf(e),
    Gt = new Set(Y),
    et = t => Gt.has(t),
    Et = (t, e) => {
        $[e] && (e = $[e]);
        let {
            transforms: r
        } = Q(t);
        it(r, e), t.style.transform = Wt(r)
    },
    Wt = t => t.sort(Kt).reduce(Xt, "").trim(),
    Xt = (t, e) => `${t} ${e}(var(${tt(e)}))`;
var j = t => t.startsWith("--"),
    Tt = new Set;

function At(t) {
    if (!Tt.has(t)) {
        Tt.add(t);
        try {
            let {
                syntax: e,
                initialValue: r
            } = A.has(t) ? A.get(t) : {};
            CSS.registerProperty({
                name: t,
                inherits: !1,
                syntax: e,
                initialValue: r
            })
        } catch {}
    }
}
var mt = (t, e) => document.createElement("div").animate(t, e),
    wt = {
        cssRegisterProperty: () => typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
        waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
        partialKeyframes: () => {
            try {
                mt({
                    opacity: [1]
                })
            } catch {
                return !1
            }
            return !0
        },
        finished: () => !!mt({
            opacity: [0, 1]
        }, {
            duration: .001
        }).finished,
        linearEasing: () => {
            try {
                mt({
                    opacity: 0
                }, {
                    easing: "linear(0, 1)"
                })
            } catch {
                return !1
            }
            return !0
        }
    },
    pt = {},
    w = {};
for (let t in wt) w[t] = () => (pt[t] === void 0 && (pt[t] = wt[t]()), pt[t]);
var Zt = .015,
    kt = (t, e) => {
        let r = "",
            i = Math.round(e / Zt);
        for (let o = 0; o < i; o++) r += t(F(0, i - 1, o)) + ", ";
        return r.substring(0, r.length - 2)
    },
    lt = (t, e) => g(t) ? w.linearEasing() ? `linear(${kt(t,e)})` : p.easing : B(t) ? Ht(t) : t,
    Ht = ([t, e, r, i]) => `cubic-bezier(${t}, ${e}, ${r}, ${i})`;

function Ot(t, e) {
    for (let r = 0; r < t.length; r++) t[r] === null && (t[r] = r ? t[r - 1] : e());
    return t
}
var Dt = t => Array.isArray(t) ? t : [t];

function K(t) {
    return $[t] && (t = $[t]), et(t) ? tt(t) : t
}
var G = {
    get: (t, e) => {
        e = K(e);
        let r = j(e) ? t.style.getPropertyValue(e) : getComputedStyle(t)[e];
        if (!r && r !== 0) {
            let i = A.get(e);
            i && (r = i.initialValue)
        }
        return r
    },
    set: (t, e, r) => {
        e = K(e), j(e) ? t.style.setProperty(e, r) : t.style[e] = r
    }
};

function rt(t, e = !0) {
    if (!(!t || t.playState === "finished")) try {
        t.stop ? t.stop() : (e && t.commitStyles(), t.cancel())
    } catch {}
}

function Ft(t, e) {
    var r;
    let i = e ? .toDefaultUnit || u,
        o = t[t.length - 1];
    if (st(o)) {
        let n = ((r = o.match(/(-?[\d.]+)([a-z%]*)/)) === null || r === void 0 ? void 0 : r[2]) || "";
        n && (i = a => a + n)
    }
    return i
}

function Jt() {
    return window.__MOTION_DEV_TOOLS_RECORD
}

function Rt(t, e, r, i = {}, o) {
    let n = Jt(),
        a = i.record !== !1 && n,
        s, {
            duration: l = p.duration,
            delay: d = p.delay,
            endDelay: S = p.endDelay,
            repeat: P = p.repeat,
            easing: f = p.easing,
            persist: O = !1,
            direction: h,
            offset: V,
            allowWebkitAcceleration: X = !1,
            autoplay: b = !0
        } = i,
        Z = Q(t),
        z = et(e),
        C = w.waapi();
    z && Et(t, e);
    let x = K(e),
        k = St(Z.values, x),
        E = A.get(x);
    return rt(k.animation, !(I(f) && k.generator) && i.record !== !1), () => {
        let H = () => {
                var c, U;
                return (U = (c = G.get(t, x)) !== null && c !== void 0 ? c : E ? .initialValue) !== null && U !== void 0 ? U : 0
            },
            m = Ot(Dt(r), H),
            dt = Ft(m, E);
        if (I(f)) {
            let c = f.createAnimation(m, e !== "opacity", H, x, k);
            f = c.easing, m = c.keyframes || m, l = c.duration || l
        }
        if (j(x) && (w.cssRegisterProperty() ? At(x) : C = !1), z && !w.linearEasing() && (g(f) || v(f) && f.some(g)) && (C = !1), C) {
            E && (m = m.map(D => y(D) ? E.toDefaultUnit(D) : D)), m.length === 1 && (!w.partialKeyframes() || a) && m.unshift(H());
            let c = {
                delay: T.ms(d),
                duration: T.ms(l),
                endDelay: T.ms(S),
                easing: v(f) ? void 0 : lt(f, l),
                direction: h,
                iterations: P + 1,
                fill: "both"
            };
            s = t.animate({
                [x]: m,
                offset: V,
                easing: v(f) ? f.map(D => lt(D, l)) : void 0
            }, c), s.finished || (s.finished = new Promise((D, Ct) => {
                s.onfinish = D, s.oncancel = Ct
            }));
            let U = m[m.length - 1];
            s.finished.then(() => {
                O || (G.set(t, x, U), s.cancel())
            }).catch(q), X || (s.playbackRate = 1.000001)
        } else if (o && z) m = m.map(c => typeof c == "string" ? parseFloat(c) : c), m.length === 1 && m.unshift(parseFloat(H())), s = new o(c => {
            G.set(t, x, dt ? dt(c) : c)
        }, m, Object.assign(Object.assign({}, i), {
            duration: l,
            easing: f
        }));
        else {
            let c = m[m.length - 1];
            G.set(t, x, E && y(c) ? E.toDefaultUnit(c) : c)
        }
        return a && n(t, e, m, {
            duration: l,
            delay: d,
            easing: f,
            repeat: P,
            offset: V
        }, "motion-one"), k.setAnimation(s), s && !b && s.pause(), s
    }
}
var Mt = (t, e) => t[e] ? Object.assign(Object.assign({}, t), t[e]) : Object.assign({}, t);

function Pt(t, e) {
    var r;
    return typeof t == "string" ? e ? ((r = e[t]) !== null && r !== void 0 || (e[t] = document.querySelectorAll(t)), t = e[t]) : t = document.querySelectorAll(t) : t instanceof Element && (t = [t]), Array.from(t || [])
}
var Qt = t => t(),
    W = (t, e, r = p.duration) => new Proxy({
        animations: t.map(Qt).filter(Boolean),
        duration: r,
        options: e
    }, te),
    Yt = t => t.animations[0],
    te = {
        get: (t, e) => {
            let r = Yt(t);
            switch (e) {
                case "duration":
                    return t.duration;
                case "currentTime":
                    return T.s(r ? .[e] || 0);
                case "playbackRate":
                case "playState":
                    return r ? .[e];
                case "finished":
                    return t.finished || (t.finished = Promise.all(t.animations.map(ee)).catch(q)), t.finished;
                case "stop":
                    return () => {
                        t.animations.forEach(i => rt(i))
                    };
                case "forEachNative":
                    return i => {
                        t.animations.forEach(o => i(o, t))
                    };
                default:
                    return typeof r ? .[e] > "u" ? void 0 : () => t.animations.forEach(i => i[e]())
            }
        },
        set: (t, e, r) => {
            switch (e) {
                case "currentTime":
                    r = T.ms(r);
                case "playbackRate":
                    for (let i = 0; i < t.animations.length; i++) t.animations[i][e] = r;
                    return !0
            }
            return !1
        }
    },
    ee = t => t.finished;

function Vt(t) {
    return function(r, i, o = {}) {
        r = Pt(r);
        let n = r.length;
        ft(!!n, "No valid element provided."), ft(!!i, "No keyframes defined.");
        let a = [];
        for (let s = 0; s < n; s++) {
            let l = r[s];
            for (let d in i) {
                let S = Mt(o, d);
                S.delay = vt(S.delay, s, n);
                let P = Rt(l, d, i[d], S, t);
                a.push(P)
            }
        }
        return W(a, o, o.duration)
    }
}
var ut = Vt(M);

function re(t, e = {}) {
    return W([() => {
        let r = new M(t, [0, 1], e);
        return r.finished.catch(() => {}), r
    }], e, e.duration)
}

function ie(t, e, r) {
    return (g(t) ? re : ut)(t, e, r)
}
export {
    qt as a, ie as b
};