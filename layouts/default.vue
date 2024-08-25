<template>
    <div>
        <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex justify-between">
          <NuxtLink to="/" class="font-bold">Nuxt JQ dev </NuxtLink>
            <ul class="flex gap-4">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/products">Products</NuxtLink></li>
            </ul>
        
             <!-- // this behavior will not be like a single page application or SPA -->
             <!-- <a href="/about">normal link -- about page</a> -->
        </nav>
    </header>
    <div class="container mx-auto p-4">
        <slot/>
    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>