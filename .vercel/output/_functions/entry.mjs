import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_D5jO2J3H.mjs';
import { manifest } from './manifest_D06ZTSwX.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/admin/locations.astro.mjs');
const _page3 = () => import('./pages/admin/services.astro.mjs');
const _page4 = () => import('./pages/admin/settings.astro.mjs');
const _page5 = () => import('./pages/admin/short-links.astro.mjs');
const _page6 = () => import('./pages/admin.astro.mjs');
const _page7 = () => import('./pages/contact.astro.mjs');
const _page8 = () => import('./pages/cookies.astro.mjs');
const _page9 = () => import('./pages/faq.astro.mjs');
const _page10 = () => import('./pages/locations/_location_.astro.mjs');
const _page11 = () => import('./pages/locations.astro.mjs');
const _page12 = () => import('./pages/privacy.astro.mjs');
const _page13 = () => import('./pages/services/_service_.astro.mjs');
const _page14 = () => import('./pages/services.astro.mjs');
const _page15 = () => import('./pages/sitemap.xml.astro.mjs');
const _page16 = () => import('./pages/terms.astro.mjs');
const _page17 = () => import('./pages/_short_.astro.mjs');
const _page18 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/admin/locations.astro", _page2],
    ["src/pages/admin/services.astro", _page3],
    ["src/pages/admin/settings.astro", _page4],
    ["src/pages/admin/short-links.astro", _page5],
    ["src/pages/admin/index.astro", _page6],
    ["src/pages/contact.astro", _page7],
    ["src/pages/cookies.astro", _page8],
    ["src/pages/faq.astro", _page9],
    ["src/pages/locations/[location].astro", _page10],
    ["src/pages/locations.astro", _page11],
    ["src/pages/privacy.astro", _page12],
    ["src/pages/services/[service].astro", _page13],
    ["src/pages/services.astro", _page14],
    ["src/pages/sitemap.xml.ts", _page15],
    ["src/pages/terms.astro", _page16],
    ["src/pages/[short].astro", _page17],
    ["src/pages/index.astro", _page18]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "7be38fcc-5f99-457f-93a7-f7c0bad4d78c",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
