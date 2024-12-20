import { _ as __nuxt_component_0$1 } from "./nuxt-link-DmHYatqt.js";
import { _ as _sfc_main$3 } from "./NuxtImg-bQEFAF_g.js";
import { defineComponent, inject, computed, openBlock, createElementBlock, mergeProps, renderSlot, createCommentVNode, createElementVNode, ref, watch, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "ufo";
import "hookable";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "destr";
import "klona";
import "devalue";
import "@formkit/auto-animate/vue";
const Z$2 = ["width", "height", "fill", "transform"], f$5 = { key: 0 }, w$5 = /* @__PURE__ */ createElementVNode("path", { d: "M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z" }, null, -1), A$3 = [
  w$5
], k$5 = { key: 1 }, x$5 = /* @__PURE__ */ createElementVNode("path", {
  d: "M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z",
  opacity: "0.2"
}, null, -1), S$5 = /* @__PURE__ */ createElementVNode("path", { d: "M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" }, null, -1), z$5 = [
  x$5,
  S$5
], C$5 = { key: 2 }, B$5 = /* @__PURE__ */ createElementVNode("path", { d: "M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z" }, null, -1), N$5 = [
  B$5
], b$5 = { key: 3 }, E$5 = /* @__PURE__ */ createElementVNode("path", { d: "M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z" }, null, -1), P$5 = [
  E$5
], V$4 = { key: 4 }, W$5 = /* @__PURE__ */ createElementVNode("path", { d: "M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" }, null, -1), $$5 = [
  W$5
], j$5 = { key: 5 }, G$2 = /* @__PURE__ */ createElementVNode("path", { d: "M226.83,221.17l-52.7-52.7a84.1,84.1,0,1,0-5.66,5.66l52.7,52.7a4,4,0,0,0,5.66-5.66ZM36,112a76,76,0,1,1,76,76A76.08,76.08,0,0,1,36,112Z" }, null, -1), q$4 = [
  G$2
], D$2 = {
  name: "PhMagnifyingGlass"
}, I$1 = /* @__PURE__ */ defineComponent({
  ...D$2,
  props: {
    weight: {
      type: String
    },
    size: {
      type: [String, Number]
    },
    color: {
      type: String
    },
    mirrored: {
      type: Boolean
    }
  },
  setup(d) {
    const l = d, c = inject("weight", "regular"), _ = inject("size", "1em"), h = inject("color", "currentColor"), u = inject("mirrored", false), s = computed(() => l.weight ?? c), i = computed(() => l.size ?? _), p = computed(() => l.color ?? h), g = computed(() => l.mirrored !== void 0 ? l.mirrored ? "scale(-1, 1)" : void 0 : u ? "scale(-1, 1)" : void 0);
    return (r, F2) => (openBlock(), createElementBlock("svg", mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: p.value,
      transform: g.value
    }, r.$attrs), [
      renderSlot(r.$slots, "default"),
      s.value === "bold" ? (openBlock(), createElementBlock("g", f$5, A$3)) : s.value === "duotone" ? (openBlock(), createElementBlock("g", k$5, z$5)) : s.value === "fill" ? (openBlock(), createElementBlock("g", C$5, N$5)) : s.value === "light" ? (openBlock(), createElementBlock("g", b$5, P$5)) : s.value === "regular" ? (openBlock(), createElementBlock("g", V$4, $$5)) : s.value === "thin" ? (openBlock(), createElementBlock("g", j$5, q$4)) : createCommentVNode("", true)
    ], 16, Z$2));
  }
});
const v$1 = ["width", "height", "fill", "transform"], y$3 = { key: 0 }, f$4 = /* @__PURE__ */ createElementVNode("path", { d: "M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z" }, null, -1), w$4 = [
  f$4
], k$4 = { key: 1 }, A$2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M216,64V192H40V64Z",
  opacity: "0.2"
}, null, -1), x$4 = /* @__PURE__ */ createElementVNode("path", { d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" }, null, -1), S$4 = [
  A$2,
  x$4
], V$3 = { key: 2 }, z$4 = /* @__PURE__ */ createElementVNode("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM192,184H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z" }, null, -1), C$4 = [
  z$4
], B$4 = { key: 3 }, N$4 = /* @__PURE__ */ createElementVNode("path", { d: "M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM40,70H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12ZM216,186H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z" }, null, -1), b$4 = [
  N$4
], E$4 = { key: 4 }, P$4 = /* @__PURE__ */ createElementVNode("path", { d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" }, null, -1), W$4 = [
  P$4
], $$4 = { key: 5 }, j$4 = /* @__PURE__ */ createElementVNode("path", { d: "M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128ZM40,68H216a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8ZM216,188H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z" }, null, -1), L$1 = [
  j$4
], q$3 = {
  name: "PhList"
}, G$1 = /* @__PURE__ */ defineComponent({
  ...q$3,
  props: {
    weight: {
      type: String
    },
    size: {
      type: [String, Number]
    },
    color: {
      type: String
    },
    mirrored: {
      type: Boolean
    }
  },
  setup(d) {
    const s = d, c = inject("weight", "regular"), _ = inject("size", "1em"), h = inject("color", "currentColor"), H2 = inject("mirrored", false), a = computed(() => s.weight ?? c), l = computed(() => s.size ?? _), u = computed(() => s.color ?? h), p = computed(() => s.mirrored !== void 0 ? s.mirrored ? "scale(-1, 1)" : void 0 : H2 ? "scale(-1, 1)" : void 0);
    return (r, D2) => (openBlock(), createElementBlock("svg", mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: l.value,
      height: l.value,
      fill: u.value,
      transform: p.value
    }, r.$attrs), [
      renderSlot(r.$slots, "default"),
      a.value === "bold" ? (openBlock(), createElementBlock("g", y$3, w$4)) : a.value === "duotone" ? (openBlock(), createElementBlock("g", k$4, S$4)) : a.value === "fill" ? (openBlock(), createElementBlock("g", V$3, C$4)) : a.value === "light" ? (openBlock(), createElementBlock("g", B$4, b$4)) : a.value === "regular" ? (openBlock(), createElementBlock("g", E$4, W$4)) : a.value === "thin" ? (openBlock(), createElementBlock("g", $$4, L$1)) : createCommentVNode("", true)
    ], 16, v$1));
  }
});
const f$3 = ["width", "height", "fill", "transform"], w$3 = { key: 0 }, M$2 = /* @__PURE__ */ createElementVNode("path", { d: "M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z" }, null, -1), k$3 = [
  M$2
], Z$1 = { key: 1 }, A$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
  opacity: "0.2"
}, null, -1), x$3 = /* @__PURE__ */ createElementVNode("path", { d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }, null, -1), S$3 = [
  A$1,
  x$3
], V$2 = { key: 2 }, z$3 = /* @__PURE__ */ createElementVNode("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }, null, -1), C$3 = [
  z$3
], B$3 = { key: 3 }, H$2 = /* @__PURE__ */ createElementVNode("path", { d: "M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z" }, null, -1), N$3 = [
  H$2
], b$3 = { key: 4 }, E$3 = /* @__PURE__ */ createElementVNode("path", { d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }, null, -1), P$3 = [
  E$3
], W$3 = { key: 5 }, $$3 = /* @__PURE__ */ createElementVNode("path", { d: "M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z" }, null, -1), j$3 = [
  $$3
], X = {
  name: "PhX"
}, F$1 = /* @__PURE__ */ defineComponent({
  ...X,
  props: {
    weight: {
      type: String
    },
    size: {
      type: [String, Number]
    },
    color: {
      type: String
    },
    mirrored: {
      type: Boolean
    }
  },
  setup(d) {
    const a = d, c = inject("weight", "regular"), _ = inject("size", "1em"), h = inject("color", "currentColor"), u = inject("mirrored", false), s = computed(() => a.weight ?? c), i = computed(() => a.size ?? _), p = computed(() => a.color ?? h), L2 = computed(() => a.mirrored !== void 0 ? a.mirrored ? "scale(-1, 1)" : void 0 : u ? "scale(-1, 1)" : void 0);
    return (r, q2) => (openBlock(), createElementBlock("svg", mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: p.value,
      transform: L2.value
    }, r.$attrs), [
      renderSlot(r.$slots, "default"),
      s.value === "bold" ? (openBlock(), createElementBlock("g", w$3, k$3)) : s.value === "duotone" ? (openBlock(), createElementBlock("g", Z$1, S$3)) : s.value === "fill" ? (openBlock(), createElementBlock("g", V$2, C$3)) : s.value === "light" ? (openBlock(), createElementBlock("g", B$3, N$3)) : s.value === "regular" ? (openBlock(), createElementBlock("g", b$3, P$3)) : s.value === "thin" ? (openBlock(), createElementBlock("g", W$3, j$3)) : createCommentVNode("", true)
    ], 16, f$3));
  }
});
const _sfc_main$2 = {
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [
      { name: "Főoldal", href: "/" },
      { name: "Rólunk", href: "rolunk" },
      { name: "Referenciák", href: "referenciak" },
      { name: "Új gépek", href: "uj-gepek" },
      { name: "Használt gépek", href: "hasznalt-gepek" },
      { name: "Kapcsolat", href: "kapcsolat" }
    ];
    const isMobileMenuOpen = ref(false);
    const isScrolled = ref(false);
    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };
    const disableScroll = () => {
      (void 0).body.style.overflow = "hidden";
    };
    const enableScroll = () => {
      (void 0).body.style.overflow = "";
    };
    watch(isMobileMenuOpen, (newValue) => {
      if (newValue) {
        disableScroll();
      } else {
        enableScroll();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_NuxtImg = _sfc_main$3;
      const _component_PhosphorIconMagnifyingGlass = I$1;
      const _component_PhosphorIconList = G$1;
      const _component_PhosphorIconX = F$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "sticky top-0 z-50 transition-shadow duration-300" }, _attrs))} data-v-314f3085><div class="${ssrRenderClass([{ "h-0 overflow-hidden": isScrolled.value }, "items-center justify-center hidden w-full h-8 gap-4 px-4 text-xs transition-all duration-300 md:flex bg-Grey md:text-sm"])}" data-v-314f3085><p class="hidden md:block" data-v-314f3085><span class="font-semibold" data-v-314f3085>Nyitvatartás: </span>Hétfő - Pétek: 7:30 - 16:00</p><div class="hidden md:block h-3.5 w-[1px] bg-Grey-2" data-v-314f3085></div><p class="font-semibold" data-v-314f3085>+36 70 775 56 66</p></div><div class="relative w-full bg-Light shadow-Shadow md:shadow-none" data-v-314f3085><div class="container flex items-center justify-between gap-4 px-4 py-4 md:py-7 md:gap-9 md:px-0" data-v-314f3085>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex-shrink-0 transition-transform duration-300 hover:scale-105"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/Logo.svg",
              class: "w-[150px] md:w-[202px] pb-1"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "/Logo.svg",
                class: "w-[150px] md:w-[202px] pb-1"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative flex-1 hidden md:block" data-v-314f3085><input class="w-full pl-6 transition-all duration-300 border-0 pr-14 placeholder:text-Grey-2 bg-light rounded-rounded-7 shadow-Shadow focus:ring-Primary focus:shadow-lg" placeholder="Keressen a termékek között..." data-v-314f3085>`);
      _push(ssrRenderComponent(_component_PhosphorIconMagnifyingGlass, { class: "absolute translate-y-1/2 top-1 right-6" }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, { class: "hidden px-4 py-2 transition-all duration-300 rounded-full md:block bg-Primary button text-Light hover:bg-opacity-90 hover:shadow-md" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Kérjen árajánlatot `);
          } else {
            return [
              createTextVNode(" Kérjen árajánlatot ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="p-2 transition-colors duration-300 rounded-full md:hidden text-Primary hover:bg-Grey" data-v-314f3085>`);
      if (!isMobileMenuOpen.value) {
        _push(ssrRenderComponent(_component_PhosphorIconList, { class: "w-6 h-6" }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_PhosphorIconX, { class: "w-6 h-6" }, null, _parent));
      }
      _push(`</button></div></div><div class="relative z-10 hidden w-screen md:block" data-v-314f3085><nav class="relative z-10 container bg-Light w-fit px-[50px] rounded-full shadow-Shadow_Strong" data-v-314f3085><div class="flex items-center justify-center text-center" data-v-314f3085><!--[-->`);
      ssrRenderList(links, (link, index) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: index,
          to: link.href,
          class: "px-[18.5px] py-3 text-sm font-medium hover:bg-Grey transition-all duration-300 relative group",
          activeClass: "bg-Primary text-Light hover:bg-Primary hover:text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.name)} <span class="absolute bottom-0 left-0 w-full h-0.5 bg-Primary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" data-v-314f3085${_scopeId}></span>`);
            } else {
              return [
                createTextVNode(toDisplayString(link.name) + " ", 1),
                createVNode("span", { class: "absolute bottom-0 left-0 w-full h-0.5 bg-Primary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" })
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></nav><div class="${ssrRenderClass([{ "shadow-sm": isScrolled.value }, "absolute top-0 bottom-0 z-0 w-full bg-Light h-1/2"])}" data-v-314f3085></div></div>`);
      if (isMobileMenuOpen.value) {
        _push(`<div class="fixed inset-0 z-50 flex flex-col bg-Light md:hidden" data-v-314f3085><div class="container flex items-center justify-between px-4 py-4" data-v-314f3085>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "flex-shrink-0",
          onClick: toggleMobileMenu
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtImg, {
                src: "/Logo.svg",
                class: "w-[150px] pb-1"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtImg, {
                  src: "/Logo.svg",
                  class: "w-[150px] pb-1"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button class="p-2 transition-colors duration-300 rounded-full text-Primary hover:bg-Grey" data-v-314f3085>`);
        _push(ssrRenderComponent(_component_PhosphorIconX, { class: "w-6 h-6" }, null, _parent));
        _push(`</button></div><div class="flex flex-col justify-center flex-grow px-4" data-v-314f3085><div class="relative mb-8" data-v-314f3085><input class="w-full py-4 pl-4 pr-10 text-sm transition-all duration-300 border rounded-full border-Grey-2 placeholder:text-gray-400 shadow-Shadow focus:ring-Primary focus:shadow-md" placeholder="Keressen a termékek között..." data-v-314f3085>`);
        _push(ssrRenderComponent(_component_PhosphorIconMagnifyingGlass, { class: "absolute w-5 h-5 transition-colors duration-300 cursor-pointer top-4 right-6" }, null, _parent));
        _push(`</div><nav class="flex flex-col space-y-4" data-v-314f3085><!--[-->`);
        ssrRenderList(links, (link, index) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: index,
            to: link.href,
            class: "relative px-4 py-3 overflow-hidden text-lg font-medium text-center transition-all duration-300 rounded-full hover:bg-Grey hover:text-gray-900 group",
            activeClass: "bg-Grey",
            onClick: toggleMobileMenu
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(link.name)} <span class="absolute bottom-0 left-0 w-full h-0.5 bg-Primary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" data-v-314f3085${_scopeId}></span>`);
              } else {
                return [
                  createTextVNode(toDisplayString(link.name) + " ", 1),
                  createVNode("span", { class: "absolute bottom-0 left-0 w-full h-0.5 bg-Primary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" })
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></nav>`);
        _push(ssrRenderComponent(_component_NuxtLink, { class: "px-6 py-3 mt-8 text-lg text-center transition-all duration-300 rounded-full bg-Primary text-Light hover:bg-opacity-90 hover:shadow-md" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Kérjen árajánlatot `);
            } else {
              return [
                createTextVNode(" Kérjen árajánlatot ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-314f3085"]]);
const y$2 = ["width", "height", "fill", "transform"], C$2 = { key: 0 }, f$2 = /* @__PURE__ */ createElementVNode("path", { d: "M128,60a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,60Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,124Zm0-112a92.1,92.1,0,0,0-92,92c0,77.36,81.64,135.4,85.12,137.83a12,12,0,0,0,13.76,0,259,259,0,0,0,42.18-39C205.15,170.57,220,136.37,220,104A92.1,92.1,0,0,0,128,12Zm31.3,174.71A249.35,249.35,0,0,1,128,216.89a249.35,249.35,0,0,1-31.3-30.18C80,167.37,60,137.31,60,104a68,68,0,0,1,136,0C196,137.31,176,167.37,159.3,186.71Z" }, null, -1), w$2 = [
  f$2
], M$1 = { key: 1 }, k$2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M128,24a80,80,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z",
  opacity: "0.2"
}, null, -1), x$2 = /* @__PURE__ */ createElementVNode("path", { d: "M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z" }, null, -1), S$2 = [
  k$2,
  x$2
], z$2 = { key: 2 }, B$2 = /* @__PURE__ */ createElementVNode("path", { d: "M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z" }, null, -1), N$2 = [
  B$2
], P$2 = { key: 3 }, b$2 = /* @__PURE__ */ createElementVNode("path", { d: "M128,66a38,38,0,1,0,38,38A38,38,0,0,0,128,66Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,128,130Zm0-112a86.1,86.1,0,0,0-86,86c0,30.91,14.34,63.74,41.47,94.94a252.32,252.32,0,0,0,41.09,38,6,6,0,0,0,6.88,0,252.32,252.32,0,0,0,41.09-38c27.13-31.2,41.47-64,41.47-94.94A86.1,86.1,0,0,0,128,18Zm0,206.51C113,212.93,54,163.62,54,104a74,74,0,0,1,148,0C202,163.62,143,212.93,128,224.51Z" }, null, -1), E$2 = [
  b$2
], V$1 = { key: 4 }, W$2 = /* @__PURE__ */ createElementVNode("path", { d: "M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z" }, null, -1), $$2 = [
  W$2
], j$2 = { key: 5 }, q$2 = /* @__PURE__ */ createElementVNode("path", { d: "M128,68a36,36,0,1,0,36,36A36,36,0,0,0,128,68Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,128,132Zm0-112a84.09,84.09,0,0,0-84,84c0,30.42,14.17,62.79,41,93.62a250,250,0,0,0,40.73,37.66,4,4,0,0,0,4.58,0A250,250,0,0,0,171,197.62c26.81-30.83,41-63.2,41-93.62A84.09,84.09,0,0,0,128,20Zm37.1,172.23A254.62,254.62,0,0,1,128,227a254.62,254.62,0,0,1-37.1-34.81C73.15,171.8,52,139.9,52,104a76,76,0,0,1,152,0C204,139.9,182.85,171.8,165.1,192.23Z" }, null, -1), D$1 = [
  q$2
], F = {
  name: "PhMapPin"
}, I = /* @__PURE__ */ defineComponent({
  ...F,
  props: {
    weight: {
      type: String
    },
    size: {
      type: [String, Number]
    },
    color: {
      type: String
    },
    mirrored: {
      type: Boolean
    }
  },
  setup(r) {
    const a = r, d = inject("weight", "regular"), _ = inject("size", "1em"), h = inject("color", "currentColor"), m = inject("mirrored", false), s = computed(() => a.weight ?? d), i = computed(() => a.size ?? _), u = computed(() => a.color ?? h), p = computed(() => a.mirrored !== void 0 ? a.mirrored ? "scale(-1, 1)" : void 0 : m ? "scale(-1, 1)" : void 0);
    return (l, G2) => (openBlock(), createElementBlock("svg", mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: u.value,
      transform: p.value
    }, l.$attrs), [
      renderSlot(l.$slots, "default"),
      s.value === "bold" ? (openBlock(), createElementBlock("g", C$2, w$2)) : s.value === "duotone" ? (openBlock(), createElementBlock("g", M$1, S$2)) : s.value === "fill" ? (openBlock(), createElementBlock("g", z$2, N$2)) : s.value === "light" ? (openBlock(), createElementBlock("g", P$2, E$2)) : s.value === "regular" ? (openBlock(), createElementBlock("g", V$1, $$2)) : s.value === "thin" ? (openBlock(), createElementBlock("g", j$2, D$1)) : createCommentVNode("", true)
    ], 16, y$2));
  }
});
const v = ["width", "height", "fill", "transform"], H$1 = { key: 0 }, y$1 = /* @__PURE__ */ createElementVNode("path", { d: "M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44ZM193.15,68,128,127.72,62.85,68ZM44,188V83.28l75.89,69.57a12,12,0,0,0,16.22,0L212,83.28V188Z" }, null, -1), f$1 = [
  y$1
], w$1 = { key: 1 }, A = /* @__PURE__ */ createElementVNode("path", {
  d: "M224,56l-96,88L32,56Z",
  opacity: "0.2"
}, null, -1), L = /* @__PURE__ */ createElementVNode("path", { d: "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z" }, null, -1), k$1 = [
  A,
  L
], S$1 = { key: 2 }, x$1 = /* @__PURE__ */ createElementVNode("path", { d: "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z" }, null, -1), z$1 = [
  x$1
], C$1 = { key: 3 }, B$1 = /* @__PURE__ */ createElementVNode("path", { d: "M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50ZM208.58,62,128,135.86,47.42,62ZM216,194H40a2,2,0,0,1-2-2V69.64l86,78.78a6,6,0,0,0,8.1,0L218,69.64V192A2,2,0,0,1,216,194Z" }, null, -1), E$1 = [
  B$1
], N$1 = { key: 4 }, b$1 = /* @__PURE__ */ createElementVNode("path", { d: "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z" }, null, -1), P$1 = [
  b$1
], W$1 = { key: 5 }, $$1 = /* @__PURE__ */ createElementVNode("path", { d: "M224,52H32a4,4,0,0,0-4,4V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A4,4,0,0,0,224,52Zm-10.28,8L128,138.57,42.28,60ZM216,196H40a4,4,0,0,1-4-4V65.09L125.3,147a4,4,0,0,0,5.4,0L220,65.09V192A4,4,0,0,1,216,196Z" }, null, -1), j$1 = [
  $$1
], q$1 = {
  name: "PhEnvelopeSimple"
}, G = /* @__PURE__ */ defineComponent({
  ...q$1,
  props: {
    weight: {
      type: String
    },
    size: {
      type: [String, Number]
    },
    color: {
      type: String
    },
    mirrored: {
      type: Boolean
    }
  },
  setup(d) {
    const a = d, c = inject("weight", "regular"), _ = inject("size", "1em"), h = inject("color", "currentColor"), p = inject("mirrored", false), s = computed(() => a.weight ?? c), i = computed(() => a.size ?? _), u = computed(() => a.color ?? h), V2 = computed(() => a.mirrored !== void 0 ? a.mirrored ? "scale(-1, 1)" : void 0 : p ? "scale(-1, 1)" : void 0);
    return (r, D2) => (openBlock(), createElementBlock("svg", mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: u.value,
      transform: V2.value
    }, r.$attrs), [
      renderSlot(r.$slots, "default"),
      s.value === "bold" ? (openBlock(), createElementBlock("g", H$1, f$1)) : s.value === "duotone" ? (openBlock(), createElementBlock("g", w$1, k$1)) : s.value === "fill" ? (openBlock(), createElementBlock("g", S$1, z$1)) : s.value === "light" ? (openBlock(), createElementBlock("g", C$1, E$1)) : s.value === "regular" ? (openBlock(), createElementBlock("g", N$1, P$1)) : s.value === "thin" ? (openBlock(), createElementBlock("g", W$1, j$1)) : createCommentVNode("", true)
    ], 16, v));
  }
});
const y = ["width", "height", "fill", "transform"], M = { key: 0 }, f = /* @__PURE__ */ createElementVNode("path", { d: "M224,154.8l-47.09-21.11-.18-.08a19.94,19.94,0,0,0-19,1.75,13.08,13.08,0,0,0-1.12.84l-22.31,19c-13-7.05-26.43-20.37-33.49-33.21l19.06-22.66a11.76,11.76,0,0,0,.85-1.15,20,20,0,0,0,1.66-18.83,1.42,1.42,0,0,1-.08-.18L101.2,32A20.06,20.06,0,0,0,80.42,20.15,60.27,60.27,0,0,0,28,80c0,81.61,66.39,148,148,148a60.27,60.27,0,0,0,59.85-52.42A20.06,20.06,0,0,0,224,154.8ZM176,204A124.15,124.15,0,0,1,52,80,36.29,36.29,0,0,1,80.48,44.46l18.82,42L80.14,109.28a12,12,0,0,0-.86,1.16A20,20,0,0,0,78,130.08c9.42,19.28,28.83,38.56,48.31,48A20,20,0,0,0,146,176.63a11.63,11.63,0,0,0,1.11-.85l22.43-19.07,42,18.81A36.29,36.29,0,0,1,176,204Z" }, null, -1), Z = [
  f
], w = { key: 1 }, k = /* @__PURE__ */ createElementVNode("path", {
  d: "M223.94,174.08A48.33,48.33,0,0,1,176,216,136,136,0,0,1,40,80,48.33,48.33,0,0,1,81.92,32.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L89.32,117a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59l25-21.3a8,8,0,0,1,7.59-.69l47.16,21.13A8,8,0,0,1,223.94,174.08Z",
  opacity: "0.2"
}, null, -1), C = /* @__PURE__ */ createElementVNode("path", { d: "M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z" }, null, -1), x = [
  k,
  C
], S = { key: 2 }, z = /* @__PURE__ */ createElementVNode("path", { d: "M231.88,175.08A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Z" }, null, -1), B = [
  z
], N = { key: 3 }, P = /* @__PURE__ */ createElementVNode("path", { d: "M221.59,160.3l-47.24-21.17a14,14,0,0,0-13.28,1.22,4.81,4.81,0,0,0-.56.42l-24.69,21a1.88,1.88,0,0,1-1.68.06c-15.87-7.66-32.31-24-40-39.65a1.91,1.91,0,0,1,0-1.68l21.07-25a6.13,6.13,0,0,0,.42-.58,14,14,0,0,0,1.12-13.27L95.73,34.49a14,14,0,0,0-14.56-8.38A54.24,54.24,0,0,0,34,80c0,78.3,63.7,142,142,142a54.25,54.25,0,0,0,53.89-47.17A14,14,0,0,0,221.59,160.3ZM176,210C104.32,210,46,151.68,46,80A42.23,42.23,0,0,1,82.67,38h.23a2,2,0,0,1,1.84,1.31l21.1,47.11a2,2,0,0,1,0,1.67L84.73,113.15a4.73,4.73,0,0,0-.43.57,14,14,0,0,0-.91,13.73c8.87,18.16,27.17,36.32,45.53,45.19a14,14,0,0,0,13.77-1c.19-.13.38-.27.56-.42l24.68-21a1.92,1.92,0,0,1,1.6-.1l47.25,21.17a2,2,0,0,1,1.21,2A42.24,42.24,0,0,1,176,210Z" }, null, -1), b = [
  P
], E = { key: 4 }, V = /* @__PURE__ */ createElementVNode("path", { d: "M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z" }, null, -1), W = [
  V
], $ = { key: 5 }, j = /* @__PURE__ */ createElementVNode("path", { d: "M220.78,162.13,173.56,141A12,12,0,0,0,162.18,142a3.37,3.37,0,0,0-.38.28L137,163.42a3.93,3.93,0,0,1-3.7.21c-16.24-7.84-33.05-24.52-40.89-40.57a3.9,3.9,0,0,1,.18-3.69l21.2-25.21c.1-.12.19-.25.28-.38a12,12,0,0,0,1-11.36L93.9,35.28a12,12,0,0,0-12.48-7.19A52.25,52.25,0,0,0,36,80c0,77.2,62.8,140,140,140a52.25,52.25,0,0,0,51.91-45.42A12,12,0,0,0,220.78,162.13ZM220,173.58A44.23,44.23,0,0,1,176,212C103.22,212,44,152.78,44,80A44.23,44.23,0,0,1,82.42,36a3.87,3.87,0,0,1,.48,0,4,4,0,0,1,3.67,2.49l21.11,47.14a4,4,0,0,1-.23,3.6l-21.19,25.2c-.1.13-.2.25-.29.39a12,12,0,0,0-.78,11.75c8.69,17.79,26.61,35.58,44.6,44.27a12,12,0,0,0,11.79-.87l.37-.28,24.83-21.12a3.93,3.93,0,0,1,3.57-.27l47.21,21.16A4,4,0,0,1,220,173.58Z" }, null, -1), q = [
  j
], D = {
  name: "PhPhone"
}, H = /* @__PURE__ */ defineComponent({
  ...D,
  props: {
    weight: {
      type: String
    },
    size: {
      type: [String, Number]
    },
    color: {
      type: String
    },
    mirrored: {
      type: Boolean
    }
  },
  setup(r) {
    const l = r, d = inject("weight", "regular"), h = inject("size", "1em"), _ = inject("color", "currentColor"), u = inject("mirrored", false), a = computed(() => l.weight ?? d), n = computed(() => l.size ?? h), A2 = computed(() => l.color ?? _), p = computed(() => l.mirrored !== void 0 ? l.mirrored ? "scale(-1, 1)" : void 0 : u ? "scale(-1, 1)" : void 0);
    return (i, F2) => (openBlock(), createElementBlock("svg", mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: n.value,
      height: n.value,
      fill: A2.value,
      transform: p.value
    }, i.$attrs), [
      renderSlot(i.$slots, "default"),
      a.value === "bold" ? (openBlock(), createElementBlock("g", M, Z)) : a.value === "duotone" ? (openBlock(), createElementBlock("g", w, x)) : a.value === "fill" ? (openBlock(), createElementBlock("g", S, B)) : a.value === "light" ? (openBlock(), createElementBlock("g", N, b)) : a.value === "regular" ? (openBlock(), createElementBlock("g", E, W)) : a.value === "thin" ? (openBlock(), createElementBlock("g", $, q)) : createCommentVNode("", true)
    ], 16, y));
  }
});
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = _sfc_main$3;
  const _component_PhosphorIconMapPin = I;
  const _component_PhosphorIconEnvelopeSimple = G;
  const _component_PhosphorIconPhone = H;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "relative py-16 overflow-hidden bg-Grey" }, _attrs))}><div class="container px-4 mx-auto"><div class="flex flex-wrap items-center lg:gap-[162px] gap-4"><div class="w-full mb-8 md:w-auto md:mb-0">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/Logo2.svg",
    alt: "Kore Agro Logo",
    class: "w-auto h-[125px]"
  }, null, _parent));
  _push(`</div><div class="flex flex-wrap gap-8 lg:gap-16"><div><h3 class="mb-4 font-semibold">Keresés</h3><ul class="space-y-2"><li><a href="#" class="hover:text-primary">Részletes Kereső</a></li><li><a href="#" class="hover:text-primary">Összes gép</a></li><li><a href="#" class="hover:text-primary">Új gépek</a></li><li><a href="#" class="hover:text-primary">Használt gépek</a></li></ul></div><div><h3 class="mb-4 font-semibold">Információk</h3><ul class="space-y-2"><li><a href="#" class="hover:text-primary">Rólunk</a></li><li><a href="#" class="hover:text-primary">Referenciák</a></li><li><a href="#" class="hover:text-primary">Adatkezelési Tájékoztató</a></li><li><a href="#" class="hover:text-primary">Blog</a></li></ul></div><div><h3 class="mb-4 font-semibold">Kapcsolat</h3><ul class="space-y-2"><li class="flex items-center">`);
  _push(ssrRenderComponent(_component_PhosphorIconMapPin, { class: "w-5 h-5 mr-2 text-primary" }, null, _parent));
  _push(`<span class="font-semibold">5200 Törökszentmiklós Surjány, Nyírfa út 3.</span></li><li class="flex items-center">`);
  _push(ssrRenderComponent(_component_PhosphorIconEnvelopeSimple, { class: "w-5 h-5 mr-2 text-primary" }, null, _parent));
  _push(`<a href="mailto:korezsolt2@gmail.com" class="font-semibold hover:text-primary">korezsolt2@gmail.com</a></li><li class="flex items-center">`);
  _push(ssrRenderComponent(_component_PhosphorIconPhone, { class: "w-5 h-5 mr-2 text-primary" }, null, _parent));
  _push(`<a href="tel:+36707755666" class="font-semibold hover:text-primary">+36 70 775 56 66</a></li></ul></div></div></div></div>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/digital_seed.svg",
    alt: "Digital Seed Studio",
    class: "absolute bottom-0 right-0 h-[50px]"
  }, null, _parent));
  _push(`</footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppHeader = __nuxt_component_0;
  const _component_AppFooter = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default--8GMvVfB.js.map
