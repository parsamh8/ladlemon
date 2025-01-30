import {
    a as f,
    b as d
} from "./chunk-2N4DPWLQ.js";
var e = ({
    initialStyles: u,
    keyframes: l
}) => {
    let m = (i, s = {}) => {
        let {
            target: n,
            insertAfter: a,
            display: o = ""
        } = s;
        Array.isArray(i) || (i = [i]);
        for (let t of i) t.style.display = o, Object.assign(t.style, u), n && a !== void 0 ? a ? n.insertBefore(t, a.nextSibling) : n.prepend(t) : n && n.appendChild(t)
    };
    return {
        prepareIn: m,
        animateIn: async (i, s = {}) => {
            let {
                prepared: n,
                stagger: a,
                display: o,
                duration: t,
                ...y
            } = s, p = t ? t / 1e3 : void 0;
            n || m(i, s);
            let {
                finished: c
            } = d(i, l, { ...y,
                delay: a ? f(a / 1e3) : void 0,
                duration: p
            });
            return await c
        },
        animateOut: async (i, s = {}) => {
            let {
                remove: n,
                stagger: a,
                target: o,
                insertAfter: t,
                display: y = "none",
                duration: p,
                ...c
            } = s, g = p ? p / 1e3 : void 0;
            if (Array.isArray(i) || (i = [i]), i = i.filter(r => document.body.contains(r)), !i.length) return;
            let {
                finished: A
            } = d(i, l, { ...c,
                duration: g,
                delay: a ? f(a / 1e3) : void 0,
                direction: "reverse"
            });
            await A;
            for (let r of i) o && t !== void 0 ? t ? o.insertBefore(r, t.nextSibling) : o.prepend(r) : o && o.appendChild(r), n ? r.remove() : r.style.display = y
        }
    }
};
var I = {
    fade: e({
        keyframes: {
            opacity: [0, 1]
        },
        initialStyles: {
            opacity: "0"
        }
    }),
    "slide-up": e({
        keyframes: {
            y: [100, 0],
            opacity: [0, 1]
        },
        initialStyles: {
            transform: "translateY(100px)",
            opacity: "0"
        }
    }),
    "slide-down": e({
        keyframes: {
            y: [-100, 0],
            opacity: [0, 1]
        },
        initialStyles: {
            transform: "translateY(-100px)",
            opacity: "0"
        }
    }),
    "slide-right": e({
        keyframes: {
            x: [-100, 0],
            opacity: [0, 1]
        },
        initialStyles: {
            transform: "translateX(-100px)",
            opacity: "0"
        }
    }),
    "slide-left": e({
        keyframes: {
            x: [100, 0],
            opacity: [0, 1]
        },
        initialStyles: {
            transform: "translateX(100px)",
            opacity: "0"
        }
    }),
    grow: e({
        keyframes: {
            scale: [0, 1],
            opacity: [0, 1]
        },
        initialStyles: {
            transform: "scale(0)",
            opacity: "0"
        }
    }),
    shrink: e({
        keyframes: {
            scale: [1.25, 1],
            opacity: [0, 1]
        },
        initialStyles: {
            transform: "scale(1.25)",
            opacity: "0"
        }
    }),
    spin: e({
        keyframes: {
            rotate: [900, 0],
            opacity: [0, 1]
        },
        initialStyles: {
            transform: "rotate(900deg)",
            opacity: "0"
        }
    })
};
export {
    I as a
};