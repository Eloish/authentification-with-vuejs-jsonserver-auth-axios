<template>
  
  <NavbarItem />

</template>

<script>
import NavbarItem from '/src/components/NavbarItem.vue'
import './axios'
export default{
  name:'App',

  components:{NavbarItem}
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  width:100%;
}


</style>
