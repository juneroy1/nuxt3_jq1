<template>
    <div>
       
      <h2>about</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident
        obcaecati soluta odio, possimus quasi praesentium numquam sequi placeat
        omnis.
      </p>
      <div>
        {{ data }}
      </div>
    </div>
  </template>
  
  <script setup>
 const {data} = await useFetch('/api/jq?name=juneroy')
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
  