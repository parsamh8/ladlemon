var s = "ArrowUp",
    r = "ArrowDown",
    i = "ArrowRight",
    c = "ArrowLeft";
var a = (t, e) => {
    let o = atob(t);
    return JSON.parse(o)
};
var w = {
    wrapper: "w-dyn-list",
    list: "w-dyn-items",
    item: "w-dyn-item",
    paginationWrapper: "w-pagination-wrapper",
    paginationNext: "w-pagination-next",
    paginationPrevious: "w-pagination-previous",
    pageCount: "w-page-count",
    emptyState: "w-dyn-empty"
};
var u = "role";
var x = "tabindex",
    E = "aria-label",
    S = "aria-labelledby",
    l = "aria-valuenow",
    C = "aria-valuemin",
    f = "aria-valuemax";
var A = "aria-roledescription",
    _ = "aria-description";
var g = {
    wized: "wized",
    wizedLegacy: "w-el",
    wizedElementsSitemaps: "wized-elements-sitemaps",
    wizedAttributesEndpoint: "https://server.wized.com/v2/site/attributes",
    wizedAttributesEndpointStaging: "https://ss.wized.com/v2/site/attributes",
    wizedReverseProxyUrl: "https://server.wized.com/v2/page/proxy?url=",
    finsweetReverseProxyUrl: "https://api.finsweet.com/cors?url=",
    wizedV2SiteConfigurationEndPoint: "https://server.wized.com/v2/extensions/configuration",
    wizedV2SiteConfigurationEndPointStaging: "https://ss.wized.com/v2/extensions/configuration",
    wizedSubscriptionsEndpoint: "https://accounts.finsweet.com/v1/subscriptions",
    wizedProdSubscriptionsAPI: "http://accounts.finsweet.com",
    wizedDevSubscriptionsAPI: "http://test-accounts.finsweet.com",
    wizedAllSubscriptionsAPI: "https://accounts.finsweet.com/v1/subscriptions",
    wizedProdSubscriptionPageUrl: "https://my.finsweet.com/subscriptions/create?product=finsweet-community",
    wizedDevSubscriptionPageUrl: "https://my.finsweet.com/subscriptions/create?product=finsweet-community",
    wizedAppConfiguratorStaging: "https://sa.wized.com/configurator",
    wizedAppConfiguratorProd: "https://app.wized.com/configurator",
    accountsApiProduction: "https://accounts.finsweet.com/v1/components/verify?",
    accountsApiDev: "https://test-accounts.finsweet.com/v1/components/verify?",
    componentsSubscriptionsEndpointDev: "https://test-my.finsweet.com/subscriptions/create",
    componentsSubscriptionsEndpointProd: "https://my.finsweet.com/subscriptions/create",
    auth0Domain: "finsweet.auth0.com",
    auth0ClientID: "5xTAnXb3mwUby3YGJRKJpVaNCMWqXtb1",
    auth0ClientSecret: "5xTAnXb3mwUby3YGJRKJpVaNCMWqXtb1",
    auth0RedirectURL: "https://accounts.finsweet.com/v1/auth0/oauth2/fs-components",
    auth0Scope: "openid profile email offline_access",
    auth0Audience: "https://sso.finsweet.com",
    authLoginURL: "https://sso.finsweet.com/authorize",
    prodFinsweetAccountsOrigin: "https://accounts.finsweet.com",
    componentsServerDevEndpoint: "https://fs-components-api-prod.finsweet.workers.dev/",
    componentsServerProdEndpoint: "https://fs-components-api-dev.finsweet.workers.dev/",
    componentsCoreScript: "https://cdn.jsdelivr.net/npm/@finsweet/fs-components@2/fs-components.js"
};
export {
    a,
    u as b,
    x as c,
    E as d,
    S as e,
    l as f,
    C as g,
    f as h,
    A as i,
    _ as j,
    s as k,
    r as l,
    i as m,
    c as n,
    w as o,
    g as p
};