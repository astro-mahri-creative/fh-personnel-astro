import 'kleur/colors';
import { p as decodeKey } from './chunks/astro/server_BngO6c3o.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CkXWD8Hj.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/user/fh-personnel-astro/","cacheDir":"file:///home/user/fh-personnel-astro/node_modules/.astro/","outDir":"file:///home/user/fh-personnel-astro/dist/","srcDir":"file:///home/user/fh-personnel-astro/src/","publicDir":"file:///home/user/fh-personnel-astro/public/","buildClientDir":"file:///home/user/fh-personnel-astro/dist/client/","buildServerDir":"file:///home/user/fh-personnel-astro/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/submit","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/submit\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"submit","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/submit.js","pathname":"/api/submit","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.Bpc5rkA_.css"},{"type":"external","src":"/_astro/personnel.zDcyquKL.css"}],"routeData":{"route":"/personnel","isIndex":false,"type":"page","pattern":"^\\/personnel\\/?$","segments":[[{"content":"personnel","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/personnel.astro","pathname":"/personnel","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.Bpc5rkA_.css"},{"type":"inline","content":"html,body{font-family:system-ui;margin:0}body{padding:2rem}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/user/fh-personnel-astro/src/pages/personnel.astro",{"propagation":"none","containsHead":true}],["/home/user/fh-personnel-astro/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/api/submit@_@js":"pages/api/submit.astro.mjs","\u0000@astro-page:src/pages/personnel@_@astro":"pages/personnel.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CPpHg2Ap.mjs","/home/user/fh-personnel-astro/node_modules/astro/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/home/user/fh-personnel-astro/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Ch9UIlb_.mjs","/home/user/fh-personnel-astro/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.B7JgrRqe.js","/home/user/fh-personnel-astro/src/components/PersonnelForm.astro?astro&type=script&index=0&lang.ts":"_astro/PersonnelForm.astro_astro_type_script_index_0_lang.DxmLkmkN.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/user/fh-personnel-astro/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const t=[\"phax\",\"fheels\",\"futurehooman\"];let e=\"futurehooman\";document.body.classList.add(e);const n=()=>{const o=t[Math.floor(Math.random()*t.length)];document.body.classList.remove(e),document.body.classList.add(o),e=o};document.addEventListener(\"click\",n),document.addEventListener(\"focusin\",n)});"],["/home/user/fh-personnel-astro/src/components/PersonnelForm.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const t=document.getElementById(\"characterForm\");if(!t)return;const e=document.getElementById(\"submitBtn\"),n=document.getElementById(\"successMessage\"),o=document.getElementById(\"errorMessage\"),c=t.querySelectorAll('input[type=\"text\"]'),r=[\"phax\",\"fheels\",\"futurehooman\"],a=()=>{document.body.classList.remove(...r);const s=r[Math.floor(Math.random()*r.length)];document.body.classList.add(s)};c.forEach(s=>{s.addEventListener(\"focus\",a)}),a(),t.addEventListener(\"submit\",async s=>{s.preventDefault(),e&&(e.disabled=!0,e.textContent=\"TRANSMITTING...\");const d=new FormData(t),i=Object.fromEntries(d.entries());try{if((await fetch(\"/api/submit\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(i)})).ok)n&&(n.style.display=\"block\"),o&&(o.style.display=\"none\"),t.reset();else throw new Error(\"Network response was not ok.\")}catch{o&&(o.style.display=\"block\"),n&&(n.style.display=\"none\")}finally{e&&(e.disabled=!1,e.textContent=\"TRANSMIT DOCUMENTATION\")}})});"]],"assets":["/_astro/index.Bpc5rkA_.css","/_astro/personnel.zDcyquKL.css","/favicon.svg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"FYYaf53bSXOVIimFLXIBCeas/wQeaHvN7KM5jzIPn4s=","sessionConfig":{"driver":"fs-lite","options":{"base":"/home/user/fh-personnel-astro/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
