<template>
    <div class="px-4 py-8 text-center">
      <PhosphorIconWarning :size="32" weight="bold" class="inline-block mb-4 text-yellow-500" />
      <h2 class="mb-2 text-xl font-semibold text-gray-800">Az oldal nem elérhető</h2>
      <p class="mb-4 text-gray-600">Ez a tartalom jelenleg nem elérhető. Kérjük, próbálja meg később.</p>
      <button @click="goBack" class="text-Primary hover:underline focus:outline-none">
        Vissza
      </button>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const goBack = () => {
    router.back()
  }
  </script>