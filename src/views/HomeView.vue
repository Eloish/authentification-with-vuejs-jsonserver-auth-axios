<template>
    <p>This is the Home page</p>
    <div v-if="isLoggedIn">
        
    <h3>welcome <span>{{userinfo.email}}</span></h3>
  </div>  

</template>

<script>


 export default{

    name:'HomeView',
    
    computed:{
        

        userinfo(){ return this.$store.state.user},
        isLoggedIn: function() { return this.$store.getters.isLoggedIn }
    },
    
    
   
 }
</script>