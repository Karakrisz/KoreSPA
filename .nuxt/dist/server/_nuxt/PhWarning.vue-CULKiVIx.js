import { defineComponent, inject, computed, openBlock, createElementBlock, mergeProps, renderSlot, createCommentVNode, createElementVNode } from "vue";
const M = ["width", "height", "fill", "transform"], y = { key: 0 }, L = /* @__PURE__ */ createElementVNode("path", { d: "M240.26,186.1,152.81,34.23h0a28.74,28.74,0,0,0-49.62,0L15.74,186.1a27.45,27.45,0,0,0,0,27.71A28.31,28.31,0,0,0,40.55,228h174.9a28.31,28.31,0,0,0,24.79-14.19A27.45,27.45,0,0,0,240.26,186.1Zm-20.8,15.7a4.46,4.46,0,0,1-4,2.2H40.55a4.46,4.46,0,0,1-4-2.2,3.56,3.56,0,0,1,0-3.73L124,46.2a4.77,4.77,0,0,1,8,0l87.44,151.87A3.56,3.56,0,0,1,219.46,201.8ZM116,136V104a12,12,0,0,1,24,0v32a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,176Z" }, null, -1), f = [
  L
], w = { key: 1 }, k = /* @__PURE__ */ createElementVNode("path", {
  d: "M215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22c6.3-11,22.52-11,28.82,0l87.46,151.87C236,202.79,228.08,216,215.46,216Z",
  opacity: "0.2"
}, null, -1), C = /* @__PURE__ */ createElementVNode("path", { d: "M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z" }, null, -1), H = [
  k,
  C
], V = { key: 2 }, x = /* @__PURE__ */ createElementVNode("path", { d: "M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z" }, null, -1), S = [
  x
], z = { key: 3 }, B = /* @__PURE__ */ createElementVNode("path", { d: "M235.07,189.09,147.61,37.22h0a22.75,22.75,0,0,0-39.22,0L20.93,189.09a21.53,21.53,0,0,0,0,21.72A22.35,22.35,0,0,0,40.55,222h174.9a22.35,22.35,0,0,0,19.6-11.19A21.53,21.53,0,0,0,235.07,189.09ZM224.66,204.8a10.46,10.46,0,0,1-9.21,5.2H40.55a10.46,10.46,0,0,1-9.21-5.2,9.51,9.51,0,0,1,0-9.72L118.79,43.21a10.75,10.75,0,0,1,18.42,0l87.46,151.87A9.51,9.51,0,0,1,224.66,204.8ZM122,144V104a6,6,0,0,1,12,0v40a6,6,0,0,1-12,0Zm16,36a10,10,0,1,1-10-10A10,10,0,0,1,138,180Z" }, null, -1), N = [
  B
], W = { key: 4 }, b = /* @__PURE__ */ createElementVNode("path", { d: "M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z" }, null, -1), E = [
  b
], P = { key: 5 }, $ = /* @__PURE__ */ createElementVNode("path", { d: "M233.34,190.09,145.88,38.22h0a20.75,20.75,0,0,0-35.76,0L22.66,190.09a19.52,19.52,0,0,0,0,19.71A20.36,20.36,0,0,0,40.54,220H215.46a20.36,20.36,0,0,0,17.86-10.2A19.52,19.52,0,0,0,233.34,190.09ZM226.4,205.8a12.47,12.47,0,0,1-10.94,6.2H40.54a12.47,12.47,0,0,1-10.94-6.2,11.45,11.45,0,0,1,0-11.72L117.05,42.21a12.76,12.76,0,0,1,21.9,0L226.4,194.08A11.45,11.45,0,0,1,226.4,205.8ZM124,144V104a4,4,0,0,1,8,0v40a4,4,0,0,1-8,0Zm12,36a8,8,0,1,1-8-8A8,8,0,0,1,136,180Z" }, null, -1), j = [
  $
], q = {
  name: "PhWarning"
}, G = /* @__PURE__ */ defineComponent({
  ...q,
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
  setup(h) {
    const s = h, c = inject("weight", "regular"), d = inject("size", "1em"), _ = inject("color", "currentColor"), u = inject("mirrored", false), a = computed(() => s.weight ?? c), i = computed(() => s.size ?? d), p = computed(() => s.color ?? _), m = computed(() => s.mirrored !== void 0 ? s.mirrored ? "scale(-1, 1)" : void 0 : u ? "scale(-1, 1)" : void 0);
    return (r, D) => (openBlock(), createElementBlock("svg", mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: p.value,
      transform: m.value
    }, r.$attrs), [
      renderSlot(r.$slots, "default"),
      a.value === "bold" ? (openBlock(), createElementBlock("g", y, f)) : a.value === "duotone" ? (openBlock(), createElementBlock("g", w, H)) : a.value === "fill" ? (openBlock(), createElementBlock("g", V, S)) : a.value === "light" ? (openBlock(), createElementBlock("g", z, N)) : a.value === "regular" ? (openBlock(), createElementBlock("g", W, E)) : a.value === "thin" ? (openBlock(), createElementBlock("g", P, j)) : createCommentVNode("", true)
    ], 16, M));
  }
});
export {
  G
};
//# sourceMappingURL=PhWarning.vue-CULKiVIx.js.map
