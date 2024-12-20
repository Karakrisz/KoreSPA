<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Kezdőlap` : 'Site Title';
  }
})
</script>
<template>
  <div class="font-montserrat text-Dark">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>