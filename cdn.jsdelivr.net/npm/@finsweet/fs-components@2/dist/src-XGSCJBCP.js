import {
    a as Ce
} from "./chunk-WK2E33M5.js";
import {
    a as Ye,
    b as Je,
    e as Ee
} from "./chunk-H3HHQELI.js";
import {
    a as w
} from "./chunk-H6FOWRXT.js";
import "./chunk-2N4DPWLQ.js";
import {
    a as d,
    b as B
} from "./chunk-J7NTLVPZ.js";
import {
    a as Xe
} from "./chunk-GFOME4MB.js";
import {
    b as se
} from "./chunk-7M4AI6WI.js";
import {
    a as Qe
} from "./chunk-GKRNEMK2.js";
import "./chunk-F6EXHLQ2.js";
import {
    e as oe,
    f as Ge,
    g as Ve
} from "./chunk-6N5IPZLK.js";
import {
    a as qe
} from "./chunk-TJBOLOLV.js";
import "./chunk-TOEFD7DW.js";
import {
    a as We,
    b as Ze,
    d as et,
    e as I,
    f as tt
} from "./chunk-6CM65MJJ.js";
import "./chunk-FB3NVMMC.js";
var Ft = "0.1.7";

function re(n) {
    for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var s in t) n[s] = t[s]
    }
    return n
}
var Nt = {
    read: function(n) {
        return n[0] === '"' && (n = n.slice(1, -1)), n.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    },
    write: function(n) {
        return encodeURIComponent(n).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
    }
};

function xe(n, e) {
    function t(o, r, i) {
        if (!(typeof document > "u")) {
            i = re({}, e, i), typeof i.expires == "number" && (i.expires = new Date(Date.now() + i.expires * 864e5)), i.expires && (i.expires = i.expires.toUTCString()), o = encodeURIComponent(o).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var a = "";
            for (var c in i) i[c] && (a += "; " + c, i[c] !== !0 && (a += "=" + i[c].split(";")[0]));
            return document.cookie = o + "=" + n.write(r, o) + a
        }
    }

    function s(o) {
        if (!(typeof document > "u" || arguments.length && !o)) {
            for (var r = document.cookie ? document.cookie.split("; ") : [], i = {}, a = 0; a < r.length; a++) {
                var c = r[a].split("="),
                    p = c.slice(1).join("=");
                try {
                    var O = decodeURIComponent(c[0]);
                    if (i[O] = n.read(p, O), o === O) break
                } catch {}
            }
            return o ? i[o] : i
        }
    }
    return Object.create({
        set: t,
        get: s,
        remove: function(o, r) {
            t(o, "", re({}, r, {
                expires: -1
            }))
        },
        withAttributes: function(o) {
            return xe(this.converter, re({}, this.attributes, o))
        },
        withConverter: function(o) {
            return xe(re({}, this.converter, o), this.attributes)
        }
    }, {
        attributes: {
            value: Object.freeze(e)
        },
        converter: {
            value: Object.freeze(n)
        }
    })
}
var g = xe(Nt, {
    path: "/"
});
var Se = (n, e = !0) => n ? n.split(",").reduce((s, o) => {
    let r = o.trim();
    return (!e || r) && s.push(r), s
}, []) : [];
var nt = n => n.replace(/\/+$/, "");
var ie = class {
    constructor({
        element: e,
        duration: t
    }) {
        this.active = !1;
        this.running = !1;
        this.isActive = () => this.active;
        this.isRunning = () => this.running;
        this.untilFinished = () => this.runningPromise;
        this.element = typeof e == "string" ? document.querySelector(e) : e, this.duration = {
            first: typeof t == "number" ? t : t ? .first ? ? 0,
            second: typeof t == "number" ? t : t ? .second ? ? 0
        }
    }
    async trigger(e) {
        return e === "first" && this.active || e === "second" && !this.active ? !1 : (e || (e = this.active ? "second" : "first"), se(this.element, "click"), this.running = !0, this.runningPromise = Ze(this.duration[e]), await this.runningPromise, this.running = !1, this.active = e === "first", !0)
    }
};

function jt(n) {
    if (Array.isArray(n)) {
        for (var e = 0, t = Array(n.length); e < n.length; e++) t[e] = n[e];
        return t
    } else return Array.from(n)
}
var Te = !1;
typeof window < "u" && (ke = {
    get passive() {
        Te = !0
    }
}, window.addEventListener("testPassive", null, ke), window.removeEventListener("testPassive", null, ke));
var ke, ae = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1),
    N = [],
    ce = !1,
    Me = -1,
    q = void 0,
    L = void 0,
    W = void 0,
    ot = function(e) {
        return N.some(function(t) {
            return !!(t.options.allowTouchMove && t.options.allowTouchMove(e))
        })
    },
    le = function(e) {
        var t = e || window.event;
        return ot(t.target) || t.touches.length > 1 ? !0 : (t.preventDefault && t.preventDefault(), !1)
    },
    Ht = function(e) {
        if (W === void 0) {
            var t = !!e && e.reserveScrollBarGap === !0,
                s = window.innerWidth - document.documentElement.clientWidth;
            if (t && s > 0) {
                let o = parseInt(window.getComputedStyle(window.top.document.body).getPropertyValue("padding-right"), 10);
                W = window.top.document.body.style.paddingRight, window.top.document.body.style.paddingRight = `${o+s}px`
            }
        }
        q === void 0 && (q = window.top.document.body.style.overflow, window.top.document.body.style.overflow = "hidden")
    },
    zt = function() {
        W !== void 0 && (window.top.document.body.style.paddingRight = W, W = void 0), q !== void 0 && (window.top.document.body.style.overflow = q, q = void 0)
    },
    Rt = function() {
        return window.requestAnimationFrame(function() {
            if (L === void 0) {
                L = {
                    position: window.top.body.style.position,
                    top: window.top.body.style.top,
                    left: window.top.body.style.left
                };
                let {
                    scrollY: e,
                    scrollX: t,
                    innerHeight: s
                } = window;
                window.top.document.body.style.position = "fixed", window.top.document.body.style.top = `${-e}px`, window.top.document.body.style.left = `${-t}px`
            }
        })
    },
    Kt = function() {
        if (L !== void 0) {
            let e = -parseInt(window.top.document.body.style.top, 10),
                t = -parseInt(window.top.document.body.style.left, 10);
            window.top.body.style.position = L.position, window.top.body.style.top = L.top, window.top.body.style.left = L.left, window.scrollTo(t, e), L = void 0
        }
    },
    Bt = function(e) {
        return e ? e.scrollHeight - e.scrollTop <= e.clientHeight : !1
    },
    qt = function(e, t) {
        var s = e.targetTouches[0].clientY - Me;
        return ot(e.target) ? !1 : t && t.scrollTop === 0 && s > 0 || Bt(t) && s < 0 ? le(e) : (e.stopPropagation(), !0)
    },
    st = function(e, t) {
        if (!e) {
            console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
            return
        }
        if (!N.some(function(o) {
                return o.targetElement === e
            })) {
            var s = {
                targetElement: e,
                options: t || {}
            };
            N = [].concat(jt(N), [s]), ae ? Rt() : Ht(t), ae && (e.ontouchstart = function(o) {
                o.targetTouches.length === 1 && (Me = o.targetTouches[0].clientY)
            }, e.ontouchmove = function(o) {
                o.targetTouches.length === 1 && qt(o, e)
            }, ce || (document.addEventListener("touchmove", le, Te ? {
                passive: !1
            } : void 0), ce = !0))
        }
    },
    rt = function() {
        ae && (N.forEach(function(e) {
            e.targetElement.ontouchstart = null, e.targetElement.ontouchmove = null
        }), ce && (document.removeEventListener("touchmove", le, Te ? {
            passive: !1
        } : void 0), ce = !1), Me = -1), ae ? Kt() : zt(), N = []
    };
var v = new WeakMap,
    k = new WeakMap,
    h = new WeakMap;
var pe = Symbol("anyProducer"),
    it = Promise.resolve(),
    ue = Symbol("listenerAdded"),
    me = Symbol("listenerRemoved"),
    ge = !1,
    Ae = !1,
    he = n => typeof n == "string" || typeof n == "symbol" || typeof n == "number";

function j(n) {
    if (!he(n)) throw new TypeError("`eventName` must be a string, symbol, or number")
}

function de(n) {
    if (typeof n != "function") throw new TypeError("listener must be a function")
}

function H(n, e) {
    let t = k.get(n);
    if (t.has(e)) return t.get(e)
}

function Y(n, e) {
    let t = he(e) ? e : pe,
        s = h.get(n);
    if (s.has(t)) return s.get(t)
}

function Wt(n, e, t) {
    let s = h.get(n);
    if (s.has(e))
        for (let o of s.get(e)) o.enqueue(t);
    if (s.has(pe)) {
        let o = Promise.all([e, t]);
        for (let r of s.get(pe)) r.enqueue(o)
    }
}

function at(n, e) {
    e = Array.isArray(e) ? e : [e];
    let t = !1,
        s = () => {},
        o = [],
        r = {
            enqueue(i) {
                o.push(i), s()
            },
            finish() {
                t = !0, s()
            }
        };
    for (let i of e) {
        let a = Y(n, i);
        a || (a = new Set, h.get(n).set(i, a)), a.add(r)
    }
    return {
        async next() {
            return o ? o.length === 0 ? t ? (o = void 0, this.next()) : (await new Promise(i => {
                s = i
            }), this.next()) : {
                done: !1,
                value: await o.shift()
            } : {
                done: !0
            }
        },
        async
        return (i) {
            o = void 0;
            for (let a of e) {
                let c = Y(n, a);
                c && (c.delete(r), c.size === 0 && h.get(n).delete(a))
            }
            return s(), arguments.length > 0 ? {
                done: !0,
                value: await i
            } : {
                done: !0
            }
        },
        [Symbol.asyncIterator]() {
            return this
        }
    }
}

function ct(n) {
    if (n === void 0) return lt;
    if (!Array.isArray(n)) throw new TypeError("`methodNames` must be an array of strings");
    for (let e of n)
        if (!lt.includes(e)) throw typeof e != "string" ? new TypeError("`methodNames` element must be a string") : new Error(`${e} is not Emittery method`);
    return n
}
var z = n => n === ue || n === me;

function fe(n, e, t) {
    if (z(e)) try {
        ge = !0, n.emit(e, t)
    } finally {
        ge = !1
    }
}
var m = class n {
        static mixin(e, t) {
            return t = ct(t), s => {
                if (typeof s != "function") throw new TypeError("`target` must be function");
                for (let i of t)
                    if (s.prototype[i] !== void 0) throw new Error(`The property \`${i}\` already exists on \`target\``);

                function o() {
                    return Object.defineProperty(this, e, {
                        enumerable: !1,
                        value: new n
                    }), this[e]
                }
                Object.defineProperty(s.prototype, e, {
                    enumerable: !1,
                    get: o
                });
                let r = i => function(...a) {
                    return this[e][i](...a)
                };
                for (let i of t) Object.defineProperty(s.prototype, i, {
                    enumerable: !1,
                    value: r(i)
                });
                return s
            }
        }
        static get isDebugEnabled() {
            if (typeof globalThis.process ? .env != "object") return Ae;
            let {
                env: e
            } = globalThis.process ? ? {
                env: {}
            };
            return e.DEBUG === "emittery" || e.DEBUG === "*" || Ae
        }
        static set isDebugEnabled(e) {
            Ae = e
        }
        constructor(e = {}) {
            v.set(this, new Set), k.set(this, new Map), h.set(this, new Map), h.get(this).set(pe, new Set), this.debug = e.debug ? ? {}, this.debug.enabled === void 0 && (this.debug.enabled = !1), this.debug.logger || (this.debug.logger = (t, s, o, r) => {
                try {
                    r = JSON.stringify(r)
                } catch {
                    r = `Object with the following keys failed to stringify: ${Object.keys(r).join(",")}`
                }(typeof o == "symbol" || typeof o == "number") && (o = o.toString());
                let i = new Date,
                    a = `${i.getHours()}:${i.getMinutes()}:${i.getSeconds()}.${i.getMilliseconds()}`;
                console.log(`[${a}][emittery:${t}][${s}] Event Name: ${o}
	data: ${r}`)
            })
        }
        logIfDebugEnabled(e, t, s) {
            (n.isDebugEnabled || this.debug.enabled) && this.debug.logger(e, this.debug.name, t, s)
        }
        on(e, t) {
            de(t), e = Array.isArray(e) ? e : [e];
            for (let s of e) {
                j(s);
                let o = H(this, s);
                o || (o = new Set, k.get(this).set(s, o)), o.add(t), this.logIfDebugEnabled("subscribe", s, void 0), z(s) || fe(this, ue, {
                    eventName: s,
                    listener: t
                })
            }
            return this.off.bind(this, e, t)
        }
        off(e, t) {
            de(t), e = Array.isArray(e) ? e : [e];
            for (let s of e) {
                j(s);
                let o = H(this, s);
                o && (o.delete(t), o.size === 0 && k.get(this).delete(s)), this.logIfDebugEnabled("unsubscribe", s, void 0), z(s) || fe(this, me, {
                    eventName: s,
                    listener: t
                })
            }
        }
        once(e) {
            let t, s = new Promise(o => {
                t = this.on(e, r => {
                    t(), o(r)
                })
            });
            return s.off = t, s
        }
        events(e) {
            e = Array.isArray(e) ? e : [e];
            for (let t of e) j(t);
            return at(this, e)
        }
        async emit(e, t) {
            if (j(e), z(e) && !ge) throw new TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");
            this.logIfDebugEnabled("emit", e, t), Wt(this, e, t);
            let s = H(this, e) ? ? new Set,
                o = v.get(this),
                r = [...s],
                i = z(e) ? [] : [...o];
            await it, await Promise.all([...r.map(async a => {
                if (s.has(a)) return a(t)
            }), ...i.map(async a => {
                if (o.has(a)) return a(e, t)
            })])
        }
        async emitSerial(e, t) {
            if (j(e), z(e) && !ge) throw new TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");
            this.logIfDebugEnabled("emitSerial", e, t);
            let s = H(this, e) ? ? new Set,
                o = v.get(this),
                r = [...s],
                i = [...o];
            await it;
            for (let a of r) s.has(a) && await a(t);
            for (let a of i) o.has(a) && await a(e, t)
        }
        onAny(e) {
            return de(e), this.logIfDebugEnabled("subscribeAny", void 0, void 0), v.get(this).add(e), fe(this, ue, {
                listener: e
            }), this.offAny.bind(this, e)
        }
        anyEvent() {
            return at(this)
        }
        offAny(e) {
            de(e), this.logIfDebugEnabled("unsubscribeAny", void 0, void 0), fe(this, me, {
                listener: e
            }), v.get(this).delete(e)
        }
        clearListeners(e) {
            e = Array.isArray(e) ? e : [e];
            for (let t of e)
                if (this.logIfDebugEnabled("clear", t, void 0), he(t)) {
                    let s = H(this, t);
                    s && s.clear();
                    let o = Y(this, t);
                    if (o) {
                        for (let r of o) r.finish();
                        o.clear()
                    }
                } else {
                    v.get(this).clear();
                    for (let [s, o] of k.get(this).entries()) o.clear(), k.get(this).delete(s);
                    for (let [s, o] of h.get(this).entries()) {
                        for (let r of o) r.finish();
                        o.clear(), h.get(this).delete(s)
                    }
                }
        }
        listenerCount(e) {
            e = Array.isArray(e) ? e : [e];
            let t = 0;
            for (let s of e) {
                if (he(s)) {
                    t += v.get(this).size + (H(this, s) ? .size ? ? 0) + (Y(this, s) ? .size ? ? 0) + (Y(this) ? .size ? ? 0);
                    continue
                }
                s !== void 0 && j(s), t += v.get(this).size;
                for (let o of k.get(this).values()) t += o.size;
                for (let o of h.get(this).values()) t += o.size
            }
            return t
        }
        bindMethods(e, t) {
            if (typeof e != "object" || e === null) throw new TypeError("`target` must be an object");
            t = ct(t);
            for (let s of t) {
                if (e[s] !== void 0) throw new Error(`The property \`${s}\` already exists on \`target\``);
                Object.defineProperty(e, s, {
                    enumerable: !1,
                    value: this[s].bind(this)
                })
            }
        }
    },
    lt = Object.getOwnPropertyNames(m.prototype).filter(n => n !== "constructor");
Object.defineProperty(m, "listenerAdded", {
    value: ue,
    writable: !1,
    enumerable: !0,
    configurable: !1
});
Object.defineProperty(m, "listenerRemoved", {
    value: me,
    writable: !1,
    enumerable: !0,
    configurable: !1
});
var dt = async ({
    id: n,
    endpoint: e,
    consents: t,
    action: s,
    bannerText: o
}) => {
    if (e) try {
        let r = JSON.stringify({
                id: n,
                action: s,
                consents: t,
                bannerText: o,
                url: window.location.href,
                userAgent: navigator.userAgent
            }),
            i = await fetch(e, {
                body: r,
                method: "POST"
            });
        if (i.ok) l.alert("The new consents were successfully POSTed to the API endpoint.", "info");
        else throw new Error(`The API returned a ${i.status} status.`)
    } catch (r) {
        l.alert(`There was an error while POSTing to the API: ${r}`, "error")
    }
};
var Oe = ["banner", "preferences", "open-preferences", "fixed-preferences", "allow", "deny", "close", "submit", "interaction", "placeholder", "form", "checkbox-essential", "checkbox-marketing", "checkbox-personalization", "checkbox-analytics", "internal-component"],
    Ie = {
        animation: {
            key: "animation",
            values: {
                fade: "fade",
                "slide-up": "slide-up",
                "slide-down": "slide-down",
                "slide-left": "slide-left",
                "slide-right": "slide-right",
                grow: "grow",
                shrink: "shrink",
                spin: "spin"
            }
        },
        duration: {
            key: "duration"
        },
        easing: {
            key: "easing",
            values: {
                linear: "linear",
                ease: "ease",
                "ease-in": "ease-in",
                "ease-out": "ease-out",
                "ease-in-out": "ease-in-out"
            }
        },
        mode: {
            key: "mode",
            values: {
                informational: "informational",
                "opt-out": "opt-out",
                "opt-in": "opt-in"
            }
        },
        source: {
            key: "source"
        },
        resetix: {
            key: "resetix"
        },
        updated: {
            key: "updated"
        },
        domain: {
            key: "domain"
        },
        type: {
            key: "type",
            values: {
                "cookie-consent": "cookie-consent"
            }
        },
        categories: {
            key: "categories",
            values: {
                personalization: "personalization",
                marketing: "marketing",
                analytics: "analytics"
            }
        },
        scroll: {
            key: "scroll",
            values: {
                disable: "disable"
            }
        },
        expires: {
            key: "expires"
        },
        endpoint: {
            key: "endpoint"
        },
        placeholder: {
            key: "placeholder"
        },
        src: {
            key: "src"
        }
    },
    Yt = ["essential"],
    Le = ["personalization", "analytics", "marketing"],
    Pe = "uncategorized",
    ft = [...Le, ...Yt, Pe],
    P = "fs-consent",
    pt = ["informational", "opt-in", "opt-out"],
    ut = {
        allow: "allow",
        deny: "deny",
        submit: "submit"
    },
    D = {
        main: P,
        consentsUpdated: `${P}-updated`
    },
    R = {
        checkbox: n => `[${P}-element="checkbox-${n}"]`,
        gtmEvent: n => `${n}-activated`
    };
var G = Object.freeze({
        analytics: !1,
        essential: !0,
        marketing: !1,
        personalization: !1,
        uncategorized: !1
    }),
    T = Object.freeze({
        analytics: !0,
        essential: !0,
        marketing: !0,
        personalization: !0,
        uncategorized: !0
    }),
    mt = 180;
var V = d({
    mode: "opt-in",
    source: "",
    resetix: !1,
    domain: "",
    expires: "365",
    endpoint: ""
});
var U = d("opt-in"),
    E = d(Number(mt)),
    $ = d(null),
    De = d(null),
    M = d(null),
    ye = d(!1),
    y = d({ ...G
    }),
    C = d({}),
    Q = d(""),
    J = d([]),
    X = d([]),
    gt = () => {
        let {
            mode: n,
            expires: e,
            endpoint: t,
            source: s,
            domain: o
        } = V.get();
        switch (U.set(oe(n, pt) ? n : "opt-in"), U.get()) {
            case "informational":
            case "opt-out":
                y.set({ ...T
                });
                break;
            default:
                y.set({ ...G
                })
        }
        E.set(Number(e)), $.set(t), De.set(s), M.set(o), l.alert(`The cookie banner is set to ${U.get()} mode with a consent expiry time of ${E.get()} days.${$.get()?`The consents will be POSTed to ${$.get()}`:""}`, "info")
    },
    ht = B(ye, n => n),
    yt = n => {
        J.set([...J.get(), { ...n,
            type: "script"
        }])
    },
    bt = n => {
        X.set([...X.get(), { ...n,
            type: "iframe"
        }])
    },
    Z = B([J, X], (n, e) => [...n, ...e]),
    wt = () => {
        let n = Z.get(),
            e = y.get();
        return n.filter(({
            active: s,
            categories: o
        }) => !s && o.every(r => e[r]))
    },
    Ue = n => {
        let e = [];
        return Ge(n).forEach(t => {
            if (t === "essential") return;
            let s = n[t];
            s === void 0 || s === y.get()[t] || (y.set({ ...y.get(),
                [t]: s
            }), e.push(t))
        }), ye.set(!0), e
    },
    _ = B([y, C], (n, e) => {
        let t = { ...n
        };
        return Object.keys(e).forEach(s => {
            let o = s;
            e[o].length === 0 && (t[o] = !1)
        }), t
    }),
    kn = B(y, n => Ve(n));
var vt = n => {
        n && n.textContent && Q.set(n.textContent)
    },
    Et = () => ({
        marketing: ["ad_storage", "ad_user_data", "ad_personalization"],
        analytics: ["analytics_storage"],
        personalization: ["functionality_storage", "personalization_storage"],
        essential: ["security_storage"],
        uncategorized: []
    }),
    $e = n => ({
        consentModes: {
            ad_storage: n ? .marketing ? "granted" : "denied",
            ad_user_data: n ? .marketing ? "granted" : "denied",
            ad_personalization: n ? .marketing ? "granted" : "denied",
            analytics_storage: n ? .analytics ? "granted" : "denied",
            functionality_storage: n ? .personalization ? "granted" : "denied",
            personalization_storage: n ? .personalization ? "granted" : "denied",
            security_storage: "granted"
        },
        consents: n
    });
var Ct = n => Object.keys(n).every(e => oe(e, ft));
var _e = n => {
        if (!n) return;
        let {
            hostname: e
        } = window.location;
        return e.includes("webflow.io") ? e : n
    },
    xt = () => {
        let n = g.get(D.main);
        if (!n) return;
        let e = JSON.parse(decodeURIComponent(n));
        if (e.consents && Ct(e.consents)) {
            let s = C.get(),
                o = { ...e.consents
                };
            return Object.keys(s).forEach(r => {
                let i = r;
                s[i].length === 0 && (o[i] = !1)
            }), o
        }
    },
    St = (n, e, t = 120, s) => {
        let r = encodeURIComponent(JSON.stringify({
            id: n,
            consents: e
        }));
        s = _e(s), g.set(D.main, r, {
            expires: t,
            domain: s,
            sameSite: "None",
            secure: !0
        })
    },
    kt = () => {
        let n = g.get();
        for (let e in n) {
            if (e.includes(D.main)) continue;
            let t = window.location.host.split(".");
            for (; t.length > 1;) g.remove(e), g.remove(e, {
                domain: `.${t.join(".")}`
            }), g.remove(e, {
                domain: `${t.join(".")}`
            }), t.splice(0, 1)
        }
    },
    Tt = () => !!g.get(D.consentsUpdated),
    Mt = (n = 120, e) => {
        e = _e(e), g.set(D.consentsUpdated, "true", {
            expires: n,
            domain: e,
            sameSite: "None",
            secure: !0
        })
    },
    Fe = (n, e = 120, t) => {
        t = _e(t);
        let s = C.get();
        for (let o in n) {
            let r = o,
                i = `${D.main}-${o}`;
            Object.keys(s).find(c => s[c].includes(o)) ? g.set(i, String(n[r] === "granted"), {
                expires: e,
                domain: t
            }) : g.remove(i)
        }
    };
var {
    getElementSelector: f,
    queryElement: b,
    queryAllElements: ee,
    getInstance: Hn,
    getAttribute: x,
    hasAttributeValue: zn,
    getSettingSelector: At
} = Qe(qe.consent.key, Oe, Ie), Ot = `<style>${f("banner")},${f("fixed-preferences")},${f("preferences")},${f("interaction")}{display:none}</style>`;
var It = async (n, e) => {
        let {
            origin: t,
            pathname: s,
            href: o
        } = window.location, {
            origin: r,
            pathname: i,
            href: a
        } = new URL(document.baseURI);
        try {
            if (n.startsWith("/")) {
                let ve = a === o ? t : r + i;
                n = nt(ve) + n
            }
            let {
                origin: c,
                pathname: p
            } = new URL(n);
            if (c + p === t + s) return;
            let u = await (await fetch(n)).text(),
                S = new DOMParser().parseFromString(u, "text/html");
            [f("banner"), f("fixed-preferences"), f("preferences")].forEach(ve => {
                let Be = S.querySelector(ve);
                Be && document.body.appendChild(Be)
            }), e && (await I(), await Xe(["ix2"]))
        } catch (c) {
            l.alert(`${c}`, "error")
        }
    },
    Lt = (n, e) => {
        let t = n;
        for (; t;) {
            let s = Array.from(t.children);
            for (let o of s)
                if (o.matches(e)) return o;
            t = t.parentElement
        }
    },
    Pt = () => {
        let n = b("internal-component");
        if (!n) return;
        window.getComputedStyle(n).display === "none" && (n.style.display = "block")
    },
    Dt = n => {
        if (Ee(n)) return n;
        let e = n.querySelectorAll("*");
        for (let t of Array.from(e))
            if (Ee(t)) return t
    },
    Gt = ({
        element: n
    }) => {
        let e = document.createElement("script"),
            t = n.getAttribute("fs-consent-scripttype");
        t ? e.type = t : e.type = "text/javascript";
        let s = Array.from(n.attributes).map(o => ({
            name: o.name,
            value: o.value
        })) ? .filter(o => !o.name.startsWith("fs-consent") && o.name !== "type");
        return e.innerText = n.innerText, e.text = n.text, n.src && (e.src = n.src), s.length > 0 && s ? .forEach(o => e.setAttribute(o.name, `${o.value}`)), e
    },
    Vt = ({
        element: n,
        src: e,
        placeholder: t
    }) => {
        let s = document.createElement("iframe");
        for (let {
                name: o,
                value: r
            } of Array.from(n.attributes)) s.setAttribute(o, r);
        return s.innerText = n.innerText, s.src = e, t && s.addEventListener("load", async () => {
            await w.fade.animateOut(t, {
                display: "none"
            })
        }), s
    },
    Ut = () => {
        let n = document.querySelectorAll('[fs-consent-element^="checkbox-"]'),
            e = new Set,
            t = Et();
        if (!n || n ? .length === 0) {
            let o = Object.entries(T).reduce((r, [i, a]) => {
                let c = i;
                return r[c] = t[c], r
            }, {});
            C.set({ ...o
            });
            return
        }
        n.forEach(o => {
            let r = o.getAttribute("fs-consent-element");
            if (r) {
                let i = r.replace("checkbox-", "");
                e.add(i)
            }
        });
        let s = Object.entries(T).reduce((o, [r, i]) => {
            let a = r;
            return e.has(r) ? o[a] = t[a] : o[a] = [], o
        }, {});
        C.set({ ...s,
            essential: t.essential
        })
    },
    be = async n => {
        for (let e of n) await new Promise(t => {
            let {
                element: s
            } = e, {
                src: o,
                parentElement: r
            } = s, i;
            if (e.type === "script") i = Gt(e);
            else if (e.type === "iframe") i = Vt(e);
            else {
                t(void 0);
                return
            }
            let a = () => {
                e.element = i, e.active = !0, t(void 0)
            };
            o && i.addEventListener("load", a), r ? .insertBefore(i, s), s.remove(), o || a()
        })
    };
var Jt = {
        info: "green",
        warning: "yellow",
        error: "red"
    },
    $t = d(!1),
    Ne = d(null),
    Xt = () => {
        let n = document.createElement("div");
        return Object.assign(n.style, {
            position: "fixed",
            left: "auto",
            top: "auto",
            right: "16px",
            bottom: "0px",
            "z-index": "999999",
            "max-width": "320px",
            "font-size": "14px",
            "line-height": "1.25"
        }), document.body.appendChild(n), n
    },
    Qt = (n, e) => {
        let t = document.createElement("div");
        Object.assign(t.style, {
            position: "relative",
            padding: "16px",
            opacity: "0",
            "margin-bottom": "16px",
            "border-left": `4px solid ${Jt[e]}`,
            "background-color": "#fff",
            "box-shadow": "1px 1px 3px 0 rgba(0, 0, 0, 0.1)",
            "word-break": "break-all"
        });
        let s = document.createElement("div");
        return s.innerText = n, t.appendChild(s), t.insertAdjacentHTML("beforeend", `<div ${P}-element="close" style="position: absolute; left: auto; top: 4px; right: 8px; bottom: auto; cursor: pointer">\u2716</div>`), t
    },
    Zt = () => {
        Ne.get() || Ne.set(Xt()), $t.set(!0)
    },
    en = (n, e) => {
        if (!$t.get()) return;
        let t = Qt(n, e);
        tn(t)
    },
    tn = async n => {
        let e = t => {
            t.target instanceof Element && t.target.closest(f("close")) && (n.removeEventListener("click", e), n.remove())
        };
        n.addEventListener("click", e), Ne.get() ? .insertAdjacentElement("afterbegin", n), w.fade.prepareIn(n, {
            display: "block"
        }), await w.fade.animateIn(n, {
            display: "block"
        })
    },
    l = {
        activate: Zt,
        alert: en
    };
var je = (n, e) => {
        nn("consent", n, e)
    },
    He = n => {
        window.dataLayer = window.dataLayer || [], !window.dataLayer.find(t => typeof t == "object" && "event" in t && t.event === n) && (window.dataLayer.push({
            event: n
        }), l.alert(`The GTM event ${n} has been fired with its equivalent consent mode.`, "info"))
    };

function nn(...n) {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push(arguments)
}
var ze = (n, e) => {
    let t = new CustomEvent("fs-consent-consentModeUpdate", {
        detail: {
            consentModes: e,
            consents: n
        }
    });
    document.dispatchEvent(t)
};
var Re = async n => {
    let e = n ? .analytics || !1,
        t = window.Webflow,
        s = t ? .analytics ? .getIsOptedOut();
    if (e) {
        s && t ? .analytics ? .optIn({
            reload: !1
        });
        return
    }
    s || t ? .analytics ? .optOut({
        reload: !1
    })
};
var K = class extends m {
    constructor(t) {
        super();
        this.element = t;
        this.checkboxes = new Map;
        this.initElements(), this.listenEvents(), this.updateCheckboxes()
    }
    initElements() {
        let t = Le.filter(s => {
            let o = R.checkbox(s),
                r = this.element.querySelector(`input${o}, ${o} input`);
            return !r || r.type !== "checkbox" ? !0 : (r.checked && Ce(r, !1), this.checkboxes.set(s, r), !1)
        });
        t.length && l.alert(`The Consents Form is missing the following checkboxes: ${t.map(s=>R.checkbox(s)).join(", ")}.`, "warning")
    }
    listenEvents() {
        this.element.addEventListener("submit", t => this.handleSubmit(t))
    }
    handleSubmit(t) {
        t.preventDefault(), t.stopPropagation();
        let s = {};
        this.checkboxes.forEach((o, r) => {
            s[r] = o.checked ? ? !1
        }), this.emit("submit", s)
    }
    updateCheckboxes() {
        let t = _.get();
        this.checkboxes.forEach((s, o) => {
            !!t[o] !== s.checked && Ce(s, t[o])
        })
    }
    submit() {
        se(this.element, "submit")
    }
};
var A = class extends m {
    constructor(t) {
        super();
        this.element = t;
        this.disableScrollOnOpen = !1;
        this.init()
    }
    init() {
        this.initElements(), this.handleAccessibility(), this.listenEvents()
    }
    initElements() {
        let {
            element: t
        } = this, s = b("form", {
            scope: t
        });
        s && (this.form = new K(s)), this.disableScrollOnOpen = x(t, "scroll", !0) === "disable", this.disableScrollOnOpen && (this.scrollableElement = Dt(t));
        let o = b("interaction", {
            scope: t
        });
        return this.displayController = new we({
            element: t,
            interaction: o ? {
                element: o
            } : void 0,
            startsHidden: !0,
            animation: x(t, "animation", !0),
            animationDuration: Number(x(t, "duration")),
            animationEasing: x(t, "easing")
        }), !0
    }
    handleAccessibility() {
        let {
            element: t
        } = this;
        if (!t) return;
        [ee("allow", {
            scope: t
        }), ee("deny", {
            scope: t
        }), ee("submit", {
            scope: t
        }), ee("close", {
            scope: t
        })].flat().forEach(o => {
            o && (o.setAttribute("role", "button"), o.setAttribute("tabindex", "0"))
        })
    }
    listenEvents() {
        let {
            element: t,
            form: s
        } = this;
        t && (t.addEventListener("click", o => this.handleMouseAndKeyboard(o)), t.addEventListener("keydown", o => this.handleMouseAndKeyboard(o)), s ? .on("submit", o => this.handleFormSubmit(o)))
    }
    handleMouseAndKeyboard(t) {
        let {
            target: s
        } = t, [o, r, i, a] = [f("allow"), f("deny"), f("close"), f("submit")];
        s instanceof Element && ("key" in t && t.key !== "Enter" || (s.closest(o) ? (this.emit("allow"), this.close()) : s.closest(r) ? (this.emit("deny"), this.close()) : s.closest(i) ? this.close() : s.closest(a) && this.form ? .submit()))
    }
    handleFormSubmit(t) {
        this.emit("formsubmit", t), this.close()
    }
    show(t = !0) {
        let {
            element: s,
            displayController: o,
            disableScrollOnOpen: r,
            scrollableElement: i
        } = this;
        !s || !o || o.isVisible() === t || (o[t ? "show" : "hide"](), r && (t ? st(i || s, {
            reserveScrollBarGap: !0
        }) : rt()), this.emit(t ? "open" : "close"))
    }
    open() {
        this.show()
    }
    close() {
        this.show(!1)
    }
};
var we = class {
    constructor({
        element: e,
        interaction: t,
        animation: s,
        startsHidden: o,
        animationEasing: r,
        animationDuration: i
    }) {
        this.isVisible = () => this.visible;
        if (this.element = e, this.animation = s, this.animationEasing = r, this.animationDuration = i, o ? (this.element.style.display = "none", this.visible = !1) : this.visible = Je(this.element), t) {
            let {
                element: a,
                duration: c
            } = t;
            this.interaction = new ie({
                element: a,
                duration: c
            })
        }
    }
    async show() {
        if (this.visible) return;
        let {
            interaction: e,
            animation: t,
            element: s,
            animationDuration: o,
            animationEasing: r
        } = this, i = "block";
        e ? await e.trigger("first") : t ? (w[t].prepareIn(s, {
            display: i
        }), await w[t].animateIn(s, {
            display: i,
            duration: o,
            easing: r
        })) : s.style.display = i, this.visible = !0
    }
    async hide() {
        if (!this.visible) return;
        let {
            interaction: e,
            animation: t,
            element: s,
            animationDuration: o,
            animationEasing: r
        } = this;
        e ? await e.trigger("second") : t ? await w[t].animateOut(s, {
            display: "none",
            duration: o,
            easing: r
        }) : s.style.display = "none", this.visible = !1
    }
};
var te = class extends m {
    constructor() {
        super(), this.loadConsents(), this.storeElements(), this.applyConsents()
    }
    storeElements() {
        let e = document.querySelectorAll(`script[type="${P}"], iframe${At("src")}`),
            t = Z.get();
        [...Array.from(e)].filter(o => !t.find(({
            element: r
        }) => o === r)).forEach(o => {
            let r = [];
            if (x(o, "categories") ? r = Se(`${x(o,"categories")}`, !0) : r = Se(`${Pe}`, !0), o instanceof HTMLScriptElement && yt({
                    categories: r,
                    element: o,
                    active: !1
                }), o instanceof HTMLIFrameElement) {
                let i = x(o, "src");
                if (!i) return;
                o.src = "";
                let a = Lt(o, '[fs-consent-element="placeholder"]');
                bt({
                    categories: r,
                    element: o,
                    src: i,
                    placeholder: a,
                    active: !1
                })
            }
            l.alert(`Stored the element: ${o.outerHTML} in the categories: ${r.join(", ")}`, "info")
        })
    }
    loadConsents() {
        let e = xt();
        Re(e);
        let {
            consentModes: t
        } = $e(e);
        if (Fe(t, Number(E.get()), M.get()), je("default", t), ze(e, t), !e) return;
        for (let o in e || {}) {
            let r = o;
            if (e[r]) {
                let a = R.gtmEvent(r);
                He(a)
            }
        }
        l.alert(`The following consents were loaded from the stored cookies: ${JSON.stringify(e)}`, "info"), Ue(e), Tt() && (kt(), l.alert("Previously denied cookies have been deleted.", "info"))
    }
    async applyConsents() {
        let e = wt();
        await be(e)
    }
    updateConsents(e, t) {
        let s = { ...e,
                essential: !0
            },
            o = C.get();
        Object.keys(o).forEach(u => {
            let F = u;
            o[F].length === 0 && (s[F] = !1)
        });
        let r = Ue(s),
            i = Ye();
        St(i, _.get(), Number(E.get()), M.get());
        let a = {},
            c = [];
        for (let u of r) {
            let F = s[u],
                S = F ? "granted" : "denied";
            if (u === "marketing" && (a.ad_storage = S, a.ad_user_data = S, a.ad_personalization = S), u === "analytics" && (a.analytics_storage = S), u === "personalization" && (a.functionality_storage = S, a.personalization_storage = S), F) {
                let Ke = R.gtmEvent(u);
                c.push(Ke)
            }
        }
        Fe(a, Number(E.get()), M.get()), je("update", a), c.length > 0 && c.forEach(u => He(u)), window.dataLayer.push({
            event: "fs-consent-consentModeUpdate"
        }), ze(s, a);
        let p = $.get();
        p && dt({
            action: t,
            endpoint: p,
            id: i,
            consents: _.get(),
            bannerText: Q.get() || ""
        }), r.length && (Mt(Number(E.get()), M.get()), this.applyConsents(), l.alert(`The following consents were updated: ${r.join(", ")}`, "info"));
        let O = $e(s);
        Re(O ? .consents), this.emit("updateconsents", O)
    }
};
var ne = class {
    constructor() {
        this.consentController = new te, this.initComponents()
    }
    async initComponents() {
        await I(), Pt();
        let e = b("banner");
        if (e) this.banner = new A(e);
        else {
            l.alert('No [fs-consent-element="banner"] element was found, it is required to have it!', "error");
            return
        }
        let t = b("preferences");
        t ? this.preferences = new A(t) : l.alert('No [fs-consent-element="preferences"] element was found, did you want to use the Preferences component?', "info");
        let s = b("fixed-preferences");
        s ? this.manager = new A(s) : l.alert('No [fs-consent-element="fixed-preferences"] element was found, did you want to use the Manager component?', "info");
        let {
            manager: o,
            banner: r
        } = this;
        ht.get() ? o ? .open() : r ? .open(), this.listenEvents()
    }
    listenEvents() {
        let {
            allow: e,
            deny: t,
            submit: s
        } = ut, o = ["banner", "manager", "preferences"], {
            consentController: r,
            banner: i,
            manager: a
        } = this;
        document.addEventListener("click", c => this.handleMouseAndKeyboard(c)), document.addEventListener("keydown", c => this.handleMouseAndKeyboard(c)), vt(i ? .element), r.on("updateconsents", () => {
            o.forEach(c => this[c] ? .form ? .updateCheckboxes())
        }), o.forEach(c => {
            this[c] ? .on("allow", () => {
                l.alert(`Allow button was clicked in the ${c} component.`, "info"), r.updateConsents(T, e)
            }), this[c] ? .on("deny", () => {
                l.alert(`Deny button was clicked in the ${c} component.`, "info"), r.updateConsents(G, t)
            }), this[c] ? .on("formsubmit", p => {
                l.alert(`Consents Form was submitted in the ${c} component with the following consents: ${JSON.stringify(p)}`, "info"), r.updateConsents(p, s)
            }), c !== "manager" && this[c] ? .on("close", () => {
                l.alert(`The ${c} component was closed.`, "info"), U.get() === "informational" && (l.alert(`All cookies were accepted because the mode is set to ${U.get()}.`, "warning"), r.updateConsents(T, e)), a ? .open()
            })
        })
    }
    handleMouseAndKeyboard(e) {
        let {
            target: t
        } = e, {
            banner: s,
            manager: o,
            preferences: r
        } = this;
        if (!(t instanceof Element) || "key" in e && e.key !== "Enter") return;
        let i = f("open-preferences"),
            a = t.closest(i),
            c = b("fixed-preferences") ? .contains(t);
        (a || c) && (s ? .close(), o ? .close(), r ? .open(), l.alert("Open Preferences button was clicked.", "info"))
    }
    getStore() {
        return {
            mode: U.get(),
            cookieMaxAge: E.get(),
            endpoint: $.get(),
            componentsSource: De.get(),
            domain: M.get(),
            confirmed: ye.get(),
            consents: y.get(),
            bannerText: Q.get(),
            scripts: J.get(),
            iFrames: X.get(),
            allConsents: _.get()
        }
    }
    destroy() {
        document.removeEventListener("click", this.handleMouseAndKeyboard), document.removeEventListener("keydown", this.handleMouseAndKeyboard), this.consentController ? .clearListeners(), this.banner ? .clearListeners(), this.preferences ? .clearListeners(), this.manager ? .clearListeners(), this.banner ? .element ? .remove(), this.preferences ? .element ? .remove(), this.manager ? .element ? .remove(), l.alert("FsCookieConsent instance destroyed.", "info")
    }
    async activateAllElements() {
        let e = Z.get();
        await be(e), l.alert("All elements have been activated.", "info")
    }
};
var on = async n => ({
    init: async () => {
        let t = We(tt);
        t || (await I(), await et());
        let s = Number(n ? .expires) < 1 ? 120 : Number(n ? .expires),
            o = { ...n,
                expires: String(s)
            };
        if (V.set(o), gt(), new URLSearchParams(window.location.search).get("fs-consent") === "debugger" && l.activate(), /bot|crawler|spider|crawling/i.test(navigator.userAgent)) return;
        document.head.insertAdjacentHTML("beforeend", Ot);
        let {
            source: a,
            resetix: c
        } = V.get();
        a && await It(a, c), Ut();
        let p = new ne;
        return await I(), {
            result: p,
            destroy() {
                t || p.destroy()
            }
        }
    },
    version: "1.0.0"
});
export {
    Oe as ELEMENTS, Ie as SETTINGS, on as init, Ft as version
};
/*! Bundled license information:

js-cookie/dist/js.cookie.mjs:
  (*! js-cookie v3.0.5 | MIT *)
*/