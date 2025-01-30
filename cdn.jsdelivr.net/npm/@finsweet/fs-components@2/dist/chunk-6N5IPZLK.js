var i = e => typeof e == "string",
    r = e => typeof e == "number";
var l = () => {},
    c = e => e != null,
    T = (e, n) => !!e && n.includes(e),
    m = e => Object.keys(e),
    u = e => Object.entries(e),
    a = e => e instanceof Element,
    E = e => e instanceof HTMLElement;
var t = e => e instanceof HTMLInputElement,
    o = e => e instanceof HTMLSelectElement,
    s = e => e instanceof HTMLTextAreaElement,
    p = e => t(e) || o(e) || s(e);
export {
    i as a, r as b, l as c, c as d, T as e, m as f, u as g, a as h, E as i, t as j, p as k
};