<template>
    <div>
       <div class="grid grid-cols-4 gap-5">
            <div v-for="(product, index) in products" :key="index">
                <NuxtLink :to="`/products/${product.id}`">{{ product.title }}</NuxtLink>
            </div>
       </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })
    const {data:products} = await useFetch('https://fakestoreapi.com/products')
</script>

<style  scoped>

</style>