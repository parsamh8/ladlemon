import {
    a as F
} from "./dist/chunk-J7NTLVPZ.js";
import {
    a as y,
    p as f
} from "./dist/chunk-F6EXHLQ2.js";
import {
    a as g
} from "./dist/chunk-TJBOLOLV.js";
import "./dist/chunk-TOEFD7DW.js";
import {
    c as h,
    f as w
} from "./dist/chunk-6CM65MJJ.js";
import "./dist/chunk-FB3NVMMC.js";
var b = async (n, e, o = !0) => {
    if (!n) return [];
    let i = o ? f.accountsApiProduction : f.accountsApiDev,
        s = async a => {
            let m = new URL(i);
            m.searchParams.set("componentId", a), m.searchParams.set("siteId", n);
            try {
                let p = await fetch(m.toString());
                return p.ok ? (await p.json()).valid : (console.error(`Failed to fetch Finsweet Components license for [${a}].`, p.statusText), !1)
            } catch (p) {
                return console.error("Error fetching data:", p), !1
            }
        },
        r = e.map(async a => {
            let {
                name: m = "",
                componentNeedsLicense: p = !1
            } = g[a] || null;
            if (!p) return {
                app: a,
                licensed: !0,
                name: m
            };
            let C = await s(a);
            return {
                app: a,
                licensed: C,
                name: m
            }
        });
    return await Promise.all(r)
};
var S = (n, e = 10, o = 100) => new Promise((i, s) => {
        let t = 0,
            r = () => {
                let l = document.querySelector(n);
                l ? i(l) : t < e ? (t += 1, setTimeout(r, o)) : s(new Error(`Element with selector "${n}" not found after ${e} retries`))
            };
        r()
    }),
    d = async (n, e) => {
        if (e) try {
            console.warn("Finsweet Component is in preview mode. Configs will be fetched from the Component Configurator.");
            let s = await S(`[fs-${e}-previewmodeconfigs]`);
            if (!s) throw new Error(`Failed to initialize ${e} in preview mode. Ensure preview element contains [fs-${e}-previewmodeconfigs] attribute.`);
            let t = s ? .getAttribute(`fs-${e}-previewmodeconfigs`) || "{}",
                r = s ? .getAttribute(`fs-${e}-instance`);
            if (!r || !t) throw new Error(`Failed to initialize ${e} in preview mode. Ensure preview element contains [fs-${e}-instance] attribute.`);
            let l = y(t, e),
                a = {
                    [e]: {
                        instances: {
                            [r]: l
                        }
                    }
                };
            return console.log(`Preview mode: Initialising ${e} preview configs from [fs-${e}-previewmodeconfigs]:`, a), w.set(!0), a
        } catch (s) {
            return console.error(s), {}
        }
        if (!n) throw new Error("Failed to initialize Finsweet Component. No core script tag found.");
        let o = n ? .getAttribute("fs-components-src");
        if (!o) throw new Error("Failed to initialize Finsweet Component. No fs-components-src attribute found on script tag.");
        if (o === "dev") return console.warn("You are currently in development mode. Configs will be fetched from the Component Configurator for preview mode."), {
            dev: !0
        };
        let i = await
        import (o);
        if (!n) throw new Error('No script tag found with type="module" and fs-components-src attribute');
        return w.set(!1), i
    };
var u = F({
        fetched: !1,
        license: []
    }),
    $ = async (n, e, o) => {
        let i = await h(e) || {};
        if (Object.keys(i).length > 0) {
            let {
                destroy: s = null
            } = n, {
                licensed: t = !1,
                name: r = "this Component"
            } = o ? .find(l => l.app === e && l.licensed) || {};
            !t && s && (console.error(`Finsweet Components - ${r} is not available for production use. Please purchase a plan at https://my.finsweet.com/subscriptions/create/finsweet-components.`), s())
        }
    };
u.subscribe(n => {
    let {
        license: e,
        fetched: o
    } = n;
    if (!o || !window ? .fsComponents ? .solutions) return;
    let {
        solutions: i
    } = window.fsComponents;
    Object.keys(i).forEach(t => {
        let r = i[t];
        $(r, t, e)
    })
});
var v = async n => {
    if (!window ? .fsComponents || u.get().fetched) return;
    let {
        scripts: e = []
    } = window.fsComponents;
    if (e.length === 0) return;
    let o = document.documentElement.getAttribute("data-wf-site"),
        i = await b(o, n, !0);
    u.set({
        fetched: !0,
        license: i
    })
};
var c, L = async (n, e) => {
    let {
        scripts: o = []
    } = window.fsComponents, [i = null] = o;
    if (document.querySelector('script[type="module"][fs-components-src="dev"]') ? c = await d(null, n) : !c && i && (c = await d(i)), !i) throw new Error('No script tag found with type="module" and fs-components-src attribute');
    switch (n) {
        case "consent":
            {
                let {
                    init: t
                } = await
                import ("./dist/src-XGSCJBCP.js");
                return t(c.consent)
            }
        case "slider":
            {
                let {
                    init: t
                } = await
                import ("./dist/src-53UWXJ7D.js");
                return t(c.slider)
            }
        case "marquee":
            {
                let {
                    init: t
                } = await
                import ("./dist/src-5C66FSBV.js");
                return t(c.marquee)
            }
        case "tooltip":
            {
                let {
                    init: t
                } = await
                import ("./dist/src-IIDLFZU7.js");
                return t(c.tooltip)
            }
        case "cursor":
            {
                let {
                    init: t
                } = await
                import ("./dist/src-ONQCYQJQ.js");
                return t(c.cursor)
            }
        case "numbercount":
            {
                let {
                    init: t
                } = await
                import ("./dist/src-6YSBYAHP.js");
                return t(c.numbercount)
            }
        case "rangeslider":
            {
                let {
                    init: t
                } = await
                import ("./dist/src-I4FBXKT2.js");
                return t(c.rangeslider)
            }
        case "socialshare":
            {
                let {
                    init: t
                } = await
                import ("./dist/src-EHZERD55.js");
                return t(c.socialshare)
            }
        case "tabs":
            {
                let {
                    init: t
                } = await
                import ("./dist/src-EMWOIYBO.js");
                return t(c.tabs)
            }
        case "table":
            {
                let {
                    init: t
                } = await
                import ("./dist/src-VMPFA2N7.js");
                return t(c.table)
            }
        default:
            throw `Finsweet Component "${n}" is not supported.`
    }
};
var A = () => {
        let n = ["font-size: 1.25rem", "font-weight: bold", "line-height: 1.3", "font-family: Graphik web, sans-serif", "color: #111", "background: #51ffcb", "padding: 0.75rem 1rem", "border-radius: 0.25rem"].join(";"),
            e = "https://finsweet.com/components";
        console.log(`



%cFinsweet Components`, n), console.log(`This site uses Finsweet Components. Visit ${e} to learn more.




`)
    },
    K = () => {
        A();
        let {
            fsComponents: n
        } = window;
        if (n && !Array.isArray(n)) {
            E();
            return
        }
        let e = Array.isArray(n) ? n : [],
            o = [],
            i = document.querySelector('script[type="module"][fs-components-src="dev"]');
        if (i) o = [i];
        else {
            let s = document.querySelectorAll(`script[type="module"][src="${import.meta.url}"]`);
            o = [...Array.from(s)]
        }
        window.fsComponents = window.FsComponents = {
            scripts: o,
            solutions: {},
            process: new Set,
            load: k,
            push(...s) {
                for (let [t, r] of s) this.solutions[t] ? .loading ? .then(r)
            },
            destroy() {
                for (let s in this.solutions) this.solutions[s] ? .destroy ? .()
            }
        }, E(), window.fsComponents.push(...e)
    },
    E = () => {
        let [n] = window.fsComponents.scripts, o = (n ? .getAttribute("fs-components-installed") || "") ? .split(",");
        if (o.length === 0) {
            console.error("No Finsweet Components installed in this project.");
            return
        }
        for (let s of o) k(s);
        window.location.href.includes("webflow.io") || window.location.href.includes("webflow-ext.com") || window.location.href.includes("localhost") || v(o)
    },
    k = async n => {
        if (window.fsComponents.process.has(n)) return;
        window.fsComponents.process.add(n);
        let e = window.fsComponents.solutions[n] || = {};
        e.loading = new Promise(o => {
            e.resolve = i => {
                o(i), delete e.resolve
            }
        });
        try {
            let {
                init: o,
                version: i
            } = await L(n), s = await o();
            if (!s) return;
            let {
                result: t,
                destroy: r
            } = s;
            return e.version = i, e.destroy = () => {
                r ? .(), window.fsComponents.process.delete(n)
            }, e.restart = () => (e.destroy ? .(), window.fsComponents.load(n)), e.resolve ? .(t), t
        } catch (o) {
            console.error(o)
        }
    };
K();