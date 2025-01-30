function l() {}

function b(e, t) {
    return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function"
}

function g(e, ...t) {
    if (e == null) {
        for (let o of t) o(void 0);
        return l
    }
    let n = e.subscribe(...t);
    return n.unsubscribe ? () => n.unsubscribe() : n
}

function M(e) {
    let t;
    return g(e, n => t = n)(), t
}
var h = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
var d = class e {
    _listeners = "WeakMap" in h ? new WeakMap : void 0;
    _observer = void 0;
    options;
    constructor(t) {
        this.options = t
    }
    observe(t, n) {
        return this._listeners.set(t, n), this._getObserver().observe(t, this.options), () => {
            this._listeners.delete(t), this._observer.unobserve(t)
        }
    }
    _getObserver() {
        return this._observer ? ? (this._observer = new ResizeObserver(t => {
            for (let n of t) e.entries.set(n.target, n), this._listeners.get(n.target) ? .(n)
        }))
    }
};
d.entries = "WeakMap" in h ? new WeakMap : void 0;

function m(e, t, n) {
    e.insertBefore(t, n || null)
}

function _(e) {
    e.parentNode && e.parentNode.removeChild(e)
}

function w(e) {
    return document.createElement(e)
}

function x(e, t, n) {
    n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
}

function F(e) {
    let t = {};
    return e.childNodes.forEach(n => {
        t[n.slot || "default"] = !0
    }), t
}
var I = ["allowfullscreen", "allowpaymentrequest", "async", "autofocus", "autoplay", "checked", "controls", "default", "defer", "disabled", "formnovalidate", "hidden", "inert", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "selected"],
    B = new Set([...I]);
var H;
typeof HTMLElement == "function" && (H = class extends HTMLElement {
    $$ctor;
    $$s;
    $$c;
    $$cn = !1;
    $$d = {};
    $$r = !1;
    $$p_d = {};
    $$l = {};
    $$l_u = new Map;
    constructor(e, t, n) {
        super(), this.$$ctor = e, this.$$s = t, n && this.attachShadow({
            mode: "open"
        })
    }
    addEventListener(e, t, n) {
        if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
            let o = this.$$c.$on(e, t);
            this.$$l_u.set(t, o)
        }
        super.addEventListener(e, t, n)
    }
    removeEventListener(e, t, n) {
        if (super.removeEventListener(e, t, n), this.$$c) {
            let o = this.$$l_u.get(t);
            o && (o(), this.$$l_u.delete(t))
        }
    }
    async connectedCallback() {
        if (this.$$cn = !0, !this.$$c) {
            let e = function(r) {
                return () => {
                    let i;
                    return {
                        c: function() {
                            i = w("slot"), r !== "default" && x(i, "name", r)
                        },
                        m: function(u, s) {
                            m(u, i, s)
                        },
                        d: function(u) {
                            u && _(i)
                        }
                    }
                }
            };
            if (await Promise.resolve(), !this.$$cn || this.$$c) return;
            let t = {},
                n = F(this);
            for (let r of this.$$s) r in n && (t[r] = [e(r)]);
            for (let r of this.attributes) {
                let i = this.$$g_p(r.name);
                i in this.$$d || (this.$$d[i] = y(i, r.value, this.$$p_d, "toProp"))
            }
            for (let r in this.$$p_d) !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
            this.$$c = new this.$$ctor({
                target: this.shadowRoot || this,
                props: { ...this.$$d,
                    $$slots: t,
                    $$scope: {
                        ctx: []
                    }
                }
            });
            let o = () => {
                this.$$r = !0;
                for (let r in this.$$p_d)
                    if (this.$$d[r] = this.$$c.$$.ctx[this.$$c.$$.props[r]], this.$$p_d[r].reflect) {
                        let i = y(r, this.$$d[r], this.$$p_d, "toAttribute");
                        i == null ? this.removeAttribute(this.$$p_d[r].attribute || r) : this.setAttribute(this.$$p_d[r].attribute || r, i)
                    }
                this.$$r = !1
            };
            this.$$c.$$.after_update.push(o), o();
            for (let r in this.$$l)
                for (let i of this.$$l[r]) {
                    let p = this.$$c.$on(r, i);
                    this.$$l_u.set(i, p)
                }
            this.$$l = {}
        }
    }
    attributeChangedCallback(e, t, n) {
        this.$$r || (e = this.$$g_p(e), this.$$d[e] = y(e, n, this.$$p_d, "toProp"), this.$$c ? .$set({
            [e]: this.$$d[e]
        }))
    }
    disconnectedCallback() {
        this.$$cn = !1, Promise.resolve().then(() => {
            !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$c = void 0)
        })
    }
    $$g_p(e) {
        return Object.keys(this.$$p_d).find(t => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e) || e
    }
});

function y(e, t, n, o) {
    let r = n[e] ? .type;
    if (t = r === "Boolean" && typeof t != "boolean" ? t != null : t, !o || !n[e]) return t;
    if (o === "toAttribute") switch (r) {
        case "Object":
        case "Array":
            return t == null ? null : JSON.stringify(t);
        case "Boolean":
            return t ? "" : null;
        case "Number":
            return t ? ? null;
        default:
            return t
    } else switch (r) {
        case "Object":
        case "Array":
            return t && JSON.parse(t);
        case "Boolean":
            return t;
        case "Number":
            return t != null ? +t : t;
        default:
            return t
    }
}
var f = [];

function O(e, t = l) {
    let n, o = new Set;

    function r(c) {
        if (b(e, c) && (e = c, n)) {
            let u = !f.length;
            for (let s of o) s[1](), f.push(s, e);
            if (u) {
                for (let s = 0; s < f.length; s += 2) f[s][0](f[s + 1]);
                f.length = 0
            }
        }
    }

    function i(c) {
        r(c(e))
    }

    function p(c, u = l) {
        let s = [c, u];
        return o.add(s), o.size === 1 && (n = t(r, i) || l), c(e), () => {
            o.delete(s), o.size === 0 && n && (n(), n = null)
        }
    }
    return {
        set: r,
        update: i,
        subscribe: p
    }
}
var Ge = e => new Promise(t => setTimeout(t, e)),
    We = e => window.fsComponents.solutions[e] ? .loading,
    He = async () => new Promise(e => {
        window.Webflow || = [], window.Webflow.push(e)
    }),
    Ve = async () => new Promise(e => {
        document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e) : e(void 0)
    });
var Je = O(!1);
export {
    M as a, Ge as b, We as c, He as d, Ve as e, Je as f
};