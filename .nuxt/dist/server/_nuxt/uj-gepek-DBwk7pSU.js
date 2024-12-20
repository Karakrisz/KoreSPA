import { G } from "./PhWarning.vue-CULKiVIx.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useRouter } from "vue-router";
const _sfc_main = {
  __name: "uj-gepek",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PhosphorIconWarning = G;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 py-8 text-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_PhosphorIconWarning, {
        size: 32,
        weight: "bold",
        class: "inline-block mb-4 text-yellow-500"
      }, null, _parent));
      _push(`<h2 class="mb-2 text-xl font-semibold text-gray-800">Az oldal nem elérhető</h2><p class="mb-4 text-gray-600">Ez a tartalom jelenleg nem elérhető. Kérjük, próbálja meg később.</p><button class="text-Primary hover:underline focus:outline-none"> Vissza </button></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/uj-gepek.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=uj-gepek-DBwk7pSU.js.map
