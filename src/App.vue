<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Vitesse',
  meta: [
    {
      name: 'description',
      content: 'Opinionated Vite Starter Template',
    },
    {
      name: 'theme-color',
      content: () => '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => '/favicon.svg',
    },
  ],
})
</script>

<template>
  <client-only>
    <RouterView />
  </client-only>
</template>
