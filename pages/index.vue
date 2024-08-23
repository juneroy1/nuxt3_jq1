<template>
  <div>
    <header>
        <nav>

            <ul>
                <li><NuxLink to="/">Home</NuxLink></li>
                <li><NuxLink to="/about">About</NuxLink></li>
                <li><NuxLink to="/products">Products</NuxLink></li>
            </ul>
        
             <!-- // this behavior will not be like a single page application or SPA -->
             <a href="/about">normal link -- about page</a>
        </nav>
    </header>
    <h2>home</h2>
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
