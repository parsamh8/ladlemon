var k = (c, A, l) => {
    let g = `fs-${c}-element`,
        r = `fs-${c}-instance`,
        a = t => {
            let {
                key: e
            } = l[t];
            return `fs-${c}-${e}`
        },
        E = (t, e, n) => {
            let {
                values: s = {}
            } = l[t], i = a(t);
            if (e) {
                let f = s[e];
                return `[${i}="${f}" i]`
            }
            return n ? `[${i}="${n}" i]` : `[${i}]`
        },
        u = (t, {
            instance: e
        } = {}) => {
            if (!t) return `[${g}]`;
            let n = `[${g}="${t}" i]`;
            if (e === void 0) return n;
            if (e === null) return `${n}:not([${r}], [${r}] ${n})`;
            let s = `[${r}="${e}"]`;
            return `${n}${s}, ${s} ${n}`
        },
        d = (t, {
            instance: e,
            scope: n = document
        } = {}) => {
            let s = u(t, {
                instance: e
            });
            return n.querySelector(s)
        },
        $ = (t, {
            instance: e,
            scope: n = document
        } = {}) => {
            let s = u(t, {
                    instance: e
                }),
                i = n.querySelectorAll(s);
            return [...Array.from(i)]
        },
        y = t => {
            let e = t.closest(`[${r}]`);
            return e ? e.getAttribute(r) : null
        },
        b = (t, e, {
            instance: n
        } = {}) => {
            let s = u(e, {
                instance: n
            });
            return t.closest(s)
        },
        S = (t, e, n, s = !0) => {
            let i = a(e),
                f = E(e),
                o = (s ? t ? .closest(f) : t) ? .getAttribute(i);
            if (!o && s) {
                for (let m of window.fsComponents.scripts)
                    if (o = m.getAttribute(i), o) break
            }
            if (!o) return;
            if (n) {
                let {
                    values: m = {}
                } = l[e];
                if (!Object.values(m).includes(o)) return
            }
            return o
        };
    return {
        getClosestElement: b,
        getElementSelector: u,
        getSettingSelector: E,
        getSettingAttributeName: a,
        queryElement: d,
        queryAllElements: $,
        getInstance: y,
        getAttribute: S,
        hasAttributeValue: (t, e, n) => {
            let {
                values: s = {}
            } = l[e], i = s[n];
            return S(t, e) === i
        }
    }
};
export {
    k as a
};