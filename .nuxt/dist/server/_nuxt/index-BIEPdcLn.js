import { _ as __nuxt_component_0 } from "./nuxt-link-DmHYatqt.js";
import { _ as _sfc_main$2 } from "./NuxtImg-bQEFAF_g.js";
import { defineComponent, ref, computed, resolveDirective, mergeProps, unref, useSSRContext, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrGetDirectiveProps, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
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
const categories = [
  "Részletes keresés",
  "Traktorok",
  "Kombájnok",
  "Silózók",
  "Önjáró Permetezők",
  "Rakodógépek",
  "Autók",
  "Bálázók"
];
const items = [
  {
    category: "Traktorok",
    name: "John Deere 8R 410 (297 üzemórás)",
    status: "Raktáron",
    condition: "Új",
    leasable: true,
    year: 2023,
    power: 410,
    weight: 14e3,
    hours: 297,
    speed: 50,
    warranty: "1 év",
    salePrice: 1295e5,
    originalPrice: 1755e5,
    leasePrice: 48e6
  },
  {
    category: "Traktorok",
    name: "Case IH Magnum 340 (150 üzemórás)",
    status: "Rendelhető",
    condition: "Új",
    leasable: true,
    year: 2023,
    power: 340,
    weight: 13e3,
    hours: 150,
    speed: 40,
    warranty: "2 év",
    salePrice: 115e6,
    originalPrice: 135e6,
    leasePrice: 42e6
  },
  {
    category: "Kombájnok",
    name: "New Holland CR10.90 (150 üzemórás)",
    status: "Raktáron",
    condition: "Új",
    leasable: true,
    year: 2023,
    power: 700,
    weight: 24500,
    hours: 150,
    speed: 40,
    warranty: "2 év",
    salePrice: 245e6,
    originalPrice: 28e7,
    leasePrice: 75e6
  },
  {
    category: "Silózók",
    name: "Claas Jaguar 980 (400 üzemórás)",
    status: "Rendelhető",
    condition: "Használt",
    leasable: true,
    year: 2021,
    power: 884,
    weight: 22e3,
    hours: 400,
    speed: 40,
    warranty: "1 év",
    salePrice: 18e7,
    originalPrice: 22e7,
    leasePrice: 6e7
  },
  {
    category: "Önjáró Permetezők",
    name: "John Deere R4060 (50 üzemórás)",
    status: "Raktáron",
    condition: "Új",
    leasable: true,
    year: 2023,
    power: 375,
    weight: 18e3,
    hours: 50,
    speed: 50,
    warranty: "2 év",
    salePrice: 195e6,
    originalPrice: 21e7,
    leasePrice: 65e6
  },
  {
    category: "Rakodógépek",
    name: "Caterpillar 980M (1000 üzemórás)",
    status: "Raktáron",
    condition: "Használt",
    leasable: true,
    year: 2020,
    power: 386,
    weight: 3e4,
    hours: 1e3,
    speed: 35,
    warranty: "6 hónap",
    salePrice: 14e7,
    originalPrice: 18e7,
    leasePrice: 5e7
  },
  {
    category: "Autók",
    name: "Ford Ranger Wildtrak (5000 km)",
    status: "Raktáron",
    condition: "Használt",
    leasable: true,
    year: 2022,
    power: 213,
    weight: 2246,
    hours: 0,
    speed: 180,
    warranty: "1 év",
    salePrice: 18e6,
    originalPrice: 22e6,
    leasePrice: 7e6
  },
  {
    category: "Bálázók",
    name: "New Holland BigBaler 1290 Plus (200 üzemórás)",
    status: "Rendelhető",
    condition: "Új",
    leasable: true,
    year: 2023,
    power: 130,
    weight: 1e4,
    hours: 200,
    speed: 40,
    warranty: "2 év",
    salePrice: 85e6,
    originalPrice: 95e6,
    leasePrice: 3e7
  },
  {
    category: "Traktorok",
    name: "Fendt 1050 Vario (100 üzemórás)",
    status: "Raktáron",
    condition: "Új",
    leasable: true,
    year: 2023,
    power: 517,
    weight: 15e3,
    hours: 100,
    speed: 60,
    warranty: "2 év",
    salePrice: 16e7,
    originalPrice: 185e6,
    leasePrice: 55e6
  },
  {
    category: "Kombájnok",
    name: "John Deere X9 1100 (50 üzemórás)",
    status: "Rendelhető",
    condition: "Új",
    leasable: true,
    year: 2023,
    power: 700,
    weight: 26e3,
    hours: 50,
    speed: 40,
    warranty: "2 év",
    salePrice: 27e7,
    originalPrice: 3e8,
    leasePrice: 85e6
  },
  {
    category: "Silózók",
    name: "Krone BiG X 1180 (300 üzemórás)",
    status: "Raktáron",
    condition: "Használt",
    leasable: true,
    year: 2022,
    power: 1156,
    weight: 23e3,
    hours: 300,
    speed: 40,
    warranty: "1 év",
    salePrice: 2e8,
    originalPrice: 24e7,
    leasePrice: 7e7
  },
  {
    category: "Önjáró Permetezők",
    name: "Agrifac Condor Endurance II (150 üzemórás)",
    status: "Rendelhető",
    condition: "Új",
    leasable: true,
    year: 2023,
    power: 320,
    weight: 18e3,
    hours: 150,
    speed: 50,
    warranty: "2 év",
    salePrice: 21e7,
    originalPrice: 23e7,
    leasePrice: 7e7
  },
  {
    category: "Rakodógépek",
    name: "JCB 542-70 AGRI Super (500 üzemórás)",
    status: "Raktáron",
    condition: "Használt",
    leasable: true,
    year: 2021,
    power: 145,
    weight: 8e3,
    hours: 500,
    speed: 40,
    warranty: "1 év",
    salePrice: 75e6,
    originalPrice: 9e7,
    leasePrice: 25e6
  },
  {
    category: "Autók",
    name: "Toyota Hilux Invincible (10000 km)",
    status: "Raktáron",
    condition: "Használt",
    leasable: true,
    year: 2022,
    power: 204,
    weight: 2125,
    hours: 0,
    speed: 175,
    warranty: "1 év",
    salePrice: 17e6,
    originalPrice: 2e7,
    leasePrice: 6e6
  },
  {
    category: "Bálázók",
    name: "Claas Quadrant 5300 FC (100 üzemórás)",
    status: "Rendelhető",
    condition: "Új",
    leasable: true,
    year: 2023,
    power: 120,
    weight: 12e3,
    hours: 100,
    speed: 40,
    warranty: "2 év",
    salePrice: 8e7,
    originalPrice: 9e7,
    leasePrice: 28e6
  },
  {
    category: "Traktorok",
    name: "Deutz-Fahr 9340 TTV (200 üzemórás)",
    status: "Raktáron",
    condition: "Új",
    leasable: true,
    year: 2023,
    power: 336,
    weight: 13e3,
    hours: 200,
    speed: 60,
    warranty: "2 év",
    salePrice: 125e6,
    originalPrice: 145e6,
    leasePrice: 45e6
  },
  {
    category: "Kombájnok",
    name: "Claas Lexion 8900 (80 üzemórás)",
    status: "Rendelhető",
    condition: "Új",
    leasable: true,
    year: 2023,
    power: 790,
    weight: 25e3,
    hours: 80,
    speed: 40,
    warranty: "2 év",
    salePrice: 255e6,
    originalPrice: 28e7,
    leasePrice: 8e7
  },
  {
    category: "Silózók",
    name: "John Deere 9800i (250 üzemórás)",
    status: "Raktáron",
    condition: "Használt",
    leasable: true,
    year: 2022,
    power: 970,
    weight: 21e3,
    hours: 250,
    speed: 40,
    warranty: "1 év",
    salePrice: 19e7,
    originalPrice: 225e6,
    leasePrice: 65e6
  },
  {
    category: "Önjáró Permetezők",
    name: "Amazone Pantera 4503 (100 üzemórás)",
    status: "Rendelhető",
    condition: "Új",
    leasable: true,
    year: 2023,
    power: 218,
    weight: 12e3,
    hours: 100,
    speed: 50,
    warranty: "2 év",
    salePrice: 18e7,
    originalPrice: 2e8,
    leasePrice: 6e7
  },
  {
    category: "Rakodógépek",
    name: "Manitou MLT 961-145 V+ L (400 üzemórás)",
    status: "Raktáron",
    condition: "Használt",
    leasable: true,
    year: 2021,
    power: 141,
    weight: 11e3,
    hours: 400,
    speed: 40,
    warranty: "1 év",
    salePrice: 85e6,
    originalPrice: 1e8,
    leasePrice: 3e7
  }
];
const itemsPerPage = 8;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ItemCards",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedCategory = ref("Részletes keresés");
    const currentPage = ref(1);
    const filteredItems = computed(
      () => selectedCategory.value === "Részletes keresés" ? items : items.filter((item) => item.category === selectedCategory.value)
    );
    const paginatedItems = computed(() => filteredItems.value.slice(0, currentPage.value * itemsPerPage));
    const hasMoreItems = computed(() => paginatedItems.value.length < filteredItems.value.length);
    const formatPrice = (price) => {
      return new Intl.NumberFormat("hu-HU", {
        style: "currency",
        currency: "HUF",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(price);
    };
    const getStatusClass = (status) => status === "Raktáron" ? "text-Primary" : "text-Rendelheto";
    const getDotStatusClass = (status) => status === "Raktáron" ? "bg-Primary" : "bg-Rendelheto";
    const getConditionClass = (condition) => condition === "Új" ? "bg-Primary text-white" : "bg-Tertiary";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$2;
      const _directive_auto_animate = resolveDirective("auto-animate");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container pt-8 pb-16 mx-auto" }, _attrs))}><nav class="mb-8"><ul class="flex flex-wrap gap-5"><!--[-->`);
      ssrRenderList(unref(categories), (category) => {
        _push(`<li><button class="${ssrRenderClass([
          "px-[20px] py-[10px] rounded-rounded-1 text-sm font-medium box-border",
          selectedCategory.value === category ? "bg-Dark text-white border-2 border-Dark" : "border-Grey-2 border-2 box-content text-gray-700 hover:bg-Grey transition"
        ])}">${ssrInterpolate(category)}</button></li>`);
      });
      _push(`<!--]--></ul></nav><div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 gap-x-[15px] gap-y-6 md:grid-cols-2 lg:grid-cols-4" }, ssrGetDirectiveProps(_ctx, _directive_auto_animate)))}><!--[-->`);
      ssrRenderList(paginatedItems.value, (item) => {
        _push(`<div class="overflow-hidden rounded-rounded-5 shadow-Shadow bg-Light">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: "/IMG_Product_DummyImg.jpg",
          alt: "Item",
          class: "object-cover w-full h-48"
        }, null, _parent));
        _push(`<div class="p-[19px] space-y-3"><div><h2 class="mb-1.5 text-lg font-semibold">${ssrInterpolate(item.name)}</h2><p class="${ssrRenderClass([
          "text-xs font-medium inline-flex items-center px-2 py-1 rounded-full",
          getStatusClass(item.status)
        ])}"><span class="${ssrRenderClass([getDotStatusClass(item.status), "w-2 h-2 rounded-full mr-1.5"])}"></span> ${ssrInterpolate(item.status)}</p></div><div class="w-full h-[1px] bg-Grey"></div><div class="flex flex-wrap gap-2 mb-4"><span class="${ssrRenderClass(["px-3 py-1.5 rounded-[5px] font-sm", getConditionClass(item.condition)])}">${ssrInterpolate(item.condition === "Új" ? "100% új gép" : item.condition)}</span>`);
        if (item.leasable) {
          _push(`<span class="px-3 py-1.5 font-sm bg-Grey rounded-[5px]"> Lízingelhető </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex flex-wrap gap-2 text-sm"><!--[-->`);
        ssrRenderList({
          "0_calendar": item.year,
          "4_engine_power": `${item.power} LE`,
          "2_speedometer_2": `${item.speed} km/h`,
          "5_odometer": `${item.hours} óra`,
          "1_gearbox": `${item.weight} kg`,
          "6_guarantee": item.warranty
        }, (value, key) => {
          _push(`<div class="flex items-center px-3 py-1.5 border border-Gray rounded-[5px] w-fit"><img${ssrRenderAttr("src", `/icons/${key}.svg`)}${ssrRenderAttr("alt", key)} class="w-4 h-4 mr-2"> ${ssrInterpolate(value)}</div>`);
        });
        _push(`<!--]--></div><div class="w-full h-[1px] bg-Grey"></div><div class="space-y-1 text-sm font-semibold"><div class="flex items-center justify-between text-red-600 gap-x-4"><span>Akciós ár:</span><span>${ssrInterpolate(formatPrice(item.salePrice))} + ÁFA</span></div><div class="flex items-center justify-between gap-x-4"><span class="">Régi ár:</span><span class="line-through">${ssrInterpolate(formatPrice(item.originalPrice))} + ÁFA</span></div><div class="flex items-center justify-between gap-x-4">`);
        if (item.leasable) {
          _push(`<span class="text-sm text-gray-700">Lízingre:</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="text-sm text-gray-700">${ssrInterpolate(formatPrice(item.leasePrice))}-tól</span></div></div></div></div>`);
      });
      _push(`<!--]--></div>`);
      if (hasMoreItems.value) {
        _push(`<div class="mt-8 text-center"><button class="px-6 py-3 font-medium text-white transition-colors bg-gray-900 rounded-full hover:bg-gray-800"> Több termék betöltése </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ItemCards.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_NuxtImg = _sfc_main$2;
  const _component_ItemCards = _sfc_main$1;
  _push(`<!--[--><section class="w-full pb-[53px] pt-16 relative z-0 -mt-5"><div class="container relative z-10"><div class="max-w-lg p-10 bg-Light shadow-Shadow rounded-rounded-5"><h2 class="mb-4 font-semibold">KORE Agro – A mezőgazdaság motorja</h2><div class="mb-6"><p class="leading-[20px]"> Nálunk a technológia találkozik a természettel. Új és használt mezőgazdasági gépek gazdag kínálatával segítjük Önt abban, hogy a legjobb teljesítményt hozza ki földjeiből. Külföldről behozott használt gépeink minden esetben szigorú ellenőrzésen mennek keresztül, így Ön biztos lehet benne, hogy csakis megbízható, kiemelkedő minőségű eszközöket kap. </p><p>Fedezze fel kínálatunkat, és vigye vállalkozását új szintre a legjobb mezőgazdasági gépekkel!</p></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#",
    class: "bg-Tertiary button"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Tekintse meg választékunkat`);
      } else {
        return [
          createTextVNode("Tekintse meg választékunkat")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "IMG_Hero_bg.jpg",
    class: "absolute bottom-0 object-cover w-full h-full"
  }, null, _parent));
  _push(`</section>`);
  _push(ssrRenderComponent(_component_ItemCards, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-BIEPdcLn.js.map
