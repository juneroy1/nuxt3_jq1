<template>
    <div>
        <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex justify-between">
          <NuxtLink to="/">Nuxt JQ dev </NuxtLink>
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/products">Products</NuxtLink></li>
            </ul>
        
             <!-- // this behavior will not be like a single page application or SPA -->
             <!-- <a href="/about">normal link -- about page</a> -->
        </nav>
    </header>
    <div>
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