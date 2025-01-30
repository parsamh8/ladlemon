var a = (t = document) => t.documentElement.getAttribute("data-wf-site");
var f = async t => {
    let {
        Webflow: i
    } = window;
    if (!(!i || !("destroy" in i) || !("ready" in i) || !("require" in i)) && !(t && !t.length)) {
        if (t || (i.destroy(), i.ready()), !t || t.includes("ix2")) {
            let e = i.require("ix2");
            if (e) {
                let {
                    store: r,
                    actions: o
                } = e, {
                    eventState: s
                } = r.getState().ixSession, n = Object.entries(s);
                n ? .length > 0 && (t || e.destroy(), e.init(), await Promise.all(n.map(c => r.dispatch(o.eventStateChanged(...c)))))
            }
        }
        if (!t || t.includes("commerce")) {
            let e = i.require("commerce"),
                r = a();
            e && r && (e.destroy(), e.init({
                siteId: r,
                apiUrl: "https://render.webflow.com"
            }))
        }
        if (t ? .includes("lightbox") && i.require("lightbox") ? .ready(), t ? .includes("slider")) {
            let e = i.require("slider");
            e && (e.redraw(), e.ready())
        }
        return t ? .includes("tabs") && i.require("tabs") ? .redraw(), new Promise(e => i.push(() => e(void 0)))
    }
};
export {
    f as a
};