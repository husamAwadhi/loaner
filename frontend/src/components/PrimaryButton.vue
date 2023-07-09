<template>
    <button
        class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 border border-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
        {{ text }}
        <slot />
    </button>
</template>
<script lang="ts">
export default {
    props: {
        text: String
    }
}
</script>
