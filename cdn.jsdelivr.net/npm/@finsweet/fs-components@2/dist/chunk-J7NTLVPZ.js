var f = [],
    x = (e, u) => {
        let r = [],
            n = {
                get() {
                    return n.lc || n.listen(() => {})(), n.value
                },
                l: u || 0,
                lc: 0,
                listen(t, i) {
                    return n.lc = r.push(t, i || n.l) / 2, () => {
                        let o = r.indexOf(t);
                        ~o && (r.splice(o, 2), --n.lc || n.off())
                    }
                },
                notify(t, i) {
                    let o = !f.length;
                    for (let l = 0; l < r.length; l += 2) f.push(r[l], r[l + 1], n.value, t, i);
                    if (o) {
                        for (let l = 0; l < f.length; l += 5) {
                            let m;
                            for (let a = l + 1; !m && (a += 5) < f.length;) f[a] < f[l + 1] && (m = f.push(f[l], f[l + 1], f[l + 2], f[l + 3], f[l + 4]));
                            m || f[l](f[l + 2], f[l + 3], f[l + 4])
                        }
                        f.length = 0
                    }
                },
                off() {},
                set(t) {
                    let i = n.value;
                    i !== t && (n.value = t, n.notify(i))
                },
                subscribe(t, i) {
                    let o = n.listen(t, i);
                    return t(n.value), o
                },
                value: e
            };
        return n
    };
var g = 5,
    c = 6,
    d = 10,
    N = (e, u, r, n) => (e.events = e.events || {}, e.events[r + d] || (e.events[r + d] = n(t => {
        e.events[r].reduceRight((i, o) => (o(i), i), {
            shared: {},
            ...t
        })
    })), e.events[r] = e.events[r] || [], e.events[r].push(u), () => {
        let t = e.events[r],
            i = t.indexOf(u);
        t.splice(i, 1), t.length || (delete e.events[r], e.events[r + d](), delete e.events[r + d])
    });
var O = 1e3,
    v = (e, u) => N(e, n => {
        let t = u(n);
        t && e.events[c].push(t)
    }, g, n => {
        let t = e.listen;
        e.listen = (...o) => (!e.lc && !e.active && (e.active = !0, n()), t(...o));
        let i = e.off;
        return e.events[c] = [], e.off = () => {
            i(), setTimeout(() => {
                if (e.active && !e.lc) {
                    e.active = !1;
                    for (let o of e.events[c]) o();
                    e.events[c] = []
                }
            }, O)
        }, () => {
            e.listen = t, e.off = i
        }
    });
var h = (e, u, r) => {
        Array.isArray(e) || (e = [e]);
        let n, t = 0,
            i = () => {
                let a = e.map(s => s.get());
                if (n === void 0 || a.some((s, p) => s !== n[p])) {
                    let s = ++t;
                    n = a;
                    let p = u(...a);
                    p && p.then && p.t ? p.then(T => {
                        s === t && o.set(T)
                    }) : o.set(p)
                }
            },
            o = x(void 0, Math.max(...e.map(a => a.l)) + 1),
            l, m = r ? () => {
                clearTimeout(l), l = setTimeout(i)
            } : i;
        return v(o, () => {
            let a = e.map(s => s.listen(m, -1 / o.l));
            return i(), () => {
                for (let s of a) s()
            }
        }), o
    },
    S = (e, u) => h(e, u);
export {
    x as a, S as b
};