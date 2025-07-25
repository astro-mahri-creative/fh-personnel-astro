import { e as createComponent, f as createAstro, h as addAttribute, k as renderHead, l as renderSlot, r as renderTemplate, n as renderComponent } from '../chunks/astro/server_CRX3IJ7T.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$PersonnelForm } from '../chunks/PersonnelForm_DlAhoBOj.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { theme } = Astro2.props;
  return renderTemplate`<html lang="en"${addAttribute([theme], "class:list")}> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${Astro2.props.title}</title><link rel="stylesheet" href="/src/styles/personnel-form.css">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/user/fh-personnel-astro/src/layouts/Layout.astro", void 0);

const $$Personnel = createComponent(($$result, $$props, $$slots) => {
  const themes = ["phax", "fheels", "futurehooman"];
  const randomTheme = themes[Math.floor(Math.random() * themes.length)];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Personnel Documentation Form", "theme": randomTheme }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PersonnelForm", $$PersonnelForm, {})} ` })}`;
}, "/home/user/fh-personnel-astro/src/pages/personnel.astro", void 0);

const $$file = "/home/user/fh-personnel-astro/src/pages/personnel.astro";
const $$url = "/personnel";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Personnel,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
