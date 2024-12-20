<script setup lang="ts">
import { ref, computed } from 'vue';
import { categories, items, type CategoryOrSearch } from '~/utils/data';

const selectedCategory = ref<CategoryOrSearch>('Részletes keresés');
const itemsPerPage = 8;
const currentPage = ref(1);

const filteredItems = computed(() =>
  selectedCategory.value === 'Részletes keresés'
    ? items
    : items.filter((item) => item.category === selectedCategory.value),
);

const paginatedItems = computed(() => filteredItems.value.slice(0, currentPage.value * itemsPerPage));

const hasMoreItems = computed(() => paginatedItems.value.length < filteredItems.value.length);

const loadMoreItems = () => {
  currentPage.value++;
};

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('hu-HU', {
    style: 'currency',
    currency: 'HUF',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

const getStatusClass = (status: string) => (status === 'Raktáron' ? 'text-Primary' : 'text-Rendelheto');

const getDotStatusClass = (status: string) => (status === 'Raktáron' ? 'bg-Primary' : 'bg-Rendelheto');

const getConditionClass = (condition: string) => (condition === 'Új' ? 'bg-Primary text-white' : 'bg-Tertiary');

const selectCategory = (category: CategoryOrSearch) => {
  selectedCategory.value = category;
  currentPage.value = 1;
};
</script>

<template>
  <div class="container pt-8 pb-16 mx-auto">
    <nav class="mb-8">
      <ul class="flex flex-wrap gap-5">
        <li v-for="category in categories" :key="category">
          <button
            @click="selectCategory(category)"
            :class="[
              'px-[20px] py-[10px] rounded-rounded-1 text-sm font-medium box-border',
              selectedCategory === category
                ? 'bg-Dark text-white border-2 border-Dark'
                : 'border-Grey-2 border-2 box-content text-gray-700 hover:bg-Grey transition',
            ]"
          >
            {{ category }}
          </button>
        </li>
      </ul>
    </nav>

    <div class="grid grid-cols-1 gap-x-[15px] gap-y-6 md:grid-cols-2 lg:grid-cols-4" v-auto-animate>
      <div
        v-for="item in paginatedItems"
        :key="item.name"
        class="overflow-hidden rounded-rounded-5 shadow-Shadow bg-Light"
      >
        <NuxtImg src="/IMG_Product_DummyImg.jpg" alt="Item" class="object-cover w-full h-48" />
        <div class="p-[19px] space-y-3">
          <div>
            <h2 class="mb-1.5 text-lg font-semibold">{{ item.name }}</h2>
            <p
              :class="[
                'text-xs font-medium inline-flex items-center px-2 py-1 rounded-full',
                getStatusClass(item.status),
              ]"
            >
              <span class="w-2 h-2 rounded-full mr-1.5" :class="getDotStatusClass(item.status)"></span>
              {{ item.status }}
            </p>
          </div>
          <div class="w-full h-[1px] bg-Grey"></div>

          <div class="flex flex-wrap gap-2 mb-4">
            <span :class="['px-3 py-1.5 rounded-[5px] font-sm', getConditionClass(item.condition)]">
              {{ item.condition === 'Új' ? '100% új gép' : item.condition }}
            </span>
            <span v-if="item.leasable" class="px-3 py-1.5 font-sm bg-Grey rounded-[5px]"> Lízingelhető </span>
          </div>
          <div class="flex flex-wrap gap-2 text-sm">
            <div
              v-for="(value, key) in {
                '0_calendar': item.year,
                '4_engine_power': `${item.power} LE`,
                '2_speedometer_2': `${item.speed} km/h`,
                '5_odometer': `${item.hours} óra`,
                '1_gearbox': `${item.weight} kg`,
                '6_guarantee': item.warranty,
              }"
              :key="key"
              class="flex items-center px-3 py-1.5 border border-Gray rounded-[5px] w-fit"
            >
              <img :src="`/icons/${key}.svg`" :alt="key" class="w-4 h-4 mr-2" />
              {{ value }}
            </div>
          </div>
          <div class="w-full h-[1px] bg-Grey"></div>
          <div class="space-y-1 text-sm font-semibold">
            <div class="flex items-center justify-between text-red-600 gap-x-4">
              <span>Akciós ár:</span>
              <span>{{ formatPrice(item.salePrice) }} + ÁFA</span>
            </div>
            <div class="flex items-center justify-between gap-x-4">
              <span class="">Régi ár:</span>
              <span class="line-through">{{ formatPrice(item.originalPrice) }} + ÁFA</span>
            </div>
            <div class="flex items-center justify-between gap-x-4">
              <span v-if="item.leasable" class="text-sm text-gray-700">Lízingre:</span>
              <span class="text-sm text-gray-700">{{ formatPrice(item.leasePrice) }}-tól</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="hasMoreItems" class="mt-8 text-center">
      <button
        @click="loadMoreItems"
        class="px-6 py-3 font-medium text-white transition-colors bg-gray-900 rounded-full hover:bg-gray-800"
      >
        Több termék betöltése
      </button>
    </div>
  </div>
</template>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
</style>
