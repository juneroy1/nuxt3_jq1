<template>
    <div>
        <header>
        <nav>
            <NuxtLink to="/">Nuxt JQ dev </NuxtLink>
            <ul>
                <li><NuxtLink  to="/" >Home</NuxtLink></li>
                <li><NuxtLink to="/about" >About</NuxtLink></li>
                <li><NuxtLink to="/products" >Products</NuxtLink></li>
            </ul>
        
             <!-- // this behavior will not be like a single page application or SPA -->
             <!-- <a href="/about">normal link -- about page</a> -->
        </nav>
    </header>
      <h2>about</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident
        obcaecati soluta odio, possimus quasi praesentium numquam sequi placeat
        omnis.
      </p>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  h2{
      margin-bottom: 20px;
      font-size: 36px;
  }
  p{
      margin: 20px 0;
  }
  </style>
  