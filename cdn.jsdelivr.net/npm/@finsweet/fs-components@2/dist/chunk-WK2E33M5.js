import {
    b as i
} from "./chunk-7M4AI6WI.js";
import {
    j as t
} from "./chunk-6N5IPZLK.js";
var d = (e, o) => {
    let {
        type: r
    } = e, c = r === "radio";
    if (c || r === "checkbox") {
        if (!t(e) || typeof o != "boolean" || o === e.checked || c && o === !1) return;
        e.checked = o
    } else {
        if (e.value === o) return;
        e.value = o.toString()
    }
    i(e, ["click", "input", "change"])
};
export {
    d as a
};