<script setup>
const user = localStorage.getItem("id")
</script>
<template>
    <h1>
        Hi {{ user }}!!
    </h1>
</template>
