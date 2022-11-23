<template>
    
    <div class="navbar">
        <div class="nav-brand">
            <h3>Authentification APP</h3>
        </div>
        <div class="menu-left">

            <router-link to="/">Home</router-link>
            <router-link v-if="!isLoggedIn" :to="{name:'Singup'}">Register</router-link>
            <router-link v-if="!isLoggedIn" :to="{name:'signin'}">Login</router-link>
            <router-link v-if="isLoggedIn" :to="{name:'alluser'}">Alluser</router-link>
            <span v-if="isLoggedIn"> | <a @click="logout">Logout</a></span>
            


            
        </div>
   </div>
    <router-view/>

</template>

<script>
export default{
    name:'NavbarItem',
    computed: {
      isLoggedIn: function() { return this.$store.getters.isLoggedIn }
    },
    methods: {
      logout: function() {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
      }
    },
}
</script>

<style>
.navbar{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.nav-brand{
    color: crimson;
    font-style: italic;
    font-size: larger;
}
.menu-left a{
   padding: 10px;
   text-decoration: none;
   color: black;
}
.menu-left a.router-link-active{
    color: white;
    background: crimson;
}


</style>