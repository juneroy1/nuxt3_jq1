<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/products">Nuxt JQ MERCH </NuxtLink>

        <!-- // this behavior will not be like a single page application or SPA -->
        <!-- <a href="/about">normal link -- about page</a> -->
      </nav>
    </header>
    <div>
      <slot />
    </div>
    <footer>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
    </footer>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
