<template>
    <button type="button"
        class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg">
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
