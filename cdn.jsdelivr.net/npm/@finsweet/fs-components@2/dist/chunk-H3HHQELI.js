import {
    i as n
} from "./chunk-6N5IPZLK.js";
var s = (o = 21) => crypto.getRandomValues(new Uint8Array(o)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
var i = o => !!(o.offsetWidth || o.offsetHeight || o.getClientRects().length);
var l = o => {
        let e;
        for (let t of Array.from(o.childNodes))
            if (n(t) && t.childNodes.length ? e = l(t) : t.nodeType === Node.TEXT_NODE && t.textContent ? .trim() && (e = t), e) break;
        return e
    },
    c = o => {
        if (i(o)) return;
        let e = o,
            t = ({
                parentElement: r
            }) => {
                r && (i(r) || (e = r, t(r)))
            };
        return t(o), e
    },
    f = o => {
        let {
            overflow: e
        } = getComputedStyle(o);
        return e === "auto" || e === "scroll"
    };
export {
    s as a, i as b, l as c, c as d, f as e
};