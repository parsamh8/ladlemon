const initFsComponents = async e => {
    const t = window ? .finsweetComponentsConfigLoading,
        n = document ? .querySelector("script[fs-components-src]");
    if (void 0 !==
        import.meta && !n && !t) {
        document ? .querySelector('script[finsweet="components"][async][type="module"]');
        const t = await
        import (
            import.meta.url), n = Object.keys(t) || [];
        return new Promise(((t, o) => {
            const s = document.createElement("script"),
                i = `${e}?v=${(new Date).getTime()}`;
            s.src = i, s.type = "module", s.async = !0, s.setAttribute("fs-components-src",
                import.meta.url), s.setAttribute("fs-components-installed", n ? .join(",")), s.onload = () => t(), s.onerror = () => o(new Error("Failed to load script")), document.head.appendChild(s)
        }))
    }
};
initFsComponents("https://cdn.jsdelivr.net/npm/@finsweet/fs-components@2/fs-components.js");
export const consent = {
    domain: "",
    endpoint: "",
    expires: "",
    mode: "opt-in",
    resetix: !1,
    source: "/"
};