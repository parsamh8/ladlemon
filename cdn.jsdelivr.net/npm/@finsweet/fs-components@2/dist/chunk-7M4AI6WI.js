import {
    c as r
} from "./chunk-6N5IPZLK.js";

function E(t, e, o, n) {
    return t ? (t.addEventListener(e, o, n), () => t.removeEventListener(e, o, n)) : r
}
var a = (t, e) => (Array.isArray(e) || (e = [e]), e.map(n => t.dispatchEvent(new Event(n, {
    bubbles: !0
}))).every(n => n));
export {
    E as a, a as b
};