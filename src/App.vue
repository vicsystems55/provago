<script setup>
import { computed } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()

const layout = computed(() => route.meta.layout || "default")
</script>

<template>
  <component :is="`layout-${layout}`">
    <RouterView />
  </component>
</template>