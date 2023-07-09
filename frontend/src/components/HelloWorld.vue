<script setup lang="ts">

defineProps<{ msg: string }>()

</script>

<template>
  <h2 className="text-red-800 dark:text-red-400">{{ msg }}</h2>
</template>

<style scoped>
</style>
