<template>
    <div>
        <NuxtLink :to="`/products/${product.id}`">{{ product.title }}</NuxtLink>
    </div>
</template>

<script setup>
    const { product} = defineProps(['product'])
</script>

<style scoped>

</style>