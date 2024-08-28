<template>
    <div>
        <!-- <p>product details for {{ id }}</p> -->
         <p>{{ product.title }}</p>
         <p>{{ product.price }}</p>
         <p>{{ product.id }}</p>
    </div>
</template>

<script setup>
    const {id} = useRoute().params
    const url = "https://fakestoreapi.com/products/"+id


    // fetch  the product using id
    const {data: product} = await useFetch(url)

    definePageMeta({
        layout: 'products'
    });
</script>
<style></style>

<!-- <style  scoped>

</style> -->