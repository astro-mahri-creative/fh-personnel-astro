/* empty css                                 */
import { e as createComponent, f as createAstro, h as addAttribute, k as renderHead, o as renderComponent, r as renderTemplate } from '../chunks/astro/server_BngO6c3o.mjs';
import 'kleur/colors';
import { $ as $$PersonnelForm } from '../chunks/PersonnelForm_u6--znec.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en" data-astro-cid-j7pv25f6> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderHead()}</head> <body data-astro-cid-j7pv25f6> <main data-astro-cid-j7pv25f6> ${renderComponent($$result, "PersonnelForm", $$PersonnelForm, { "data-astro-cid-j7pv25f6": true })} </main> </body></html>`;
}, "/home/user/fh-personnel-astro/src/pages/index.astro", void 0);

const $$file = "/home/user/fh-personnel-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
