<template>

    <h3>Login Page</h3>

    <div class="form-page">
        <form @submit.prevent="formhandler">
        <div v-if="message">{{passworderror}}</div>
        <label for="">Email:</label>
        <input type="text" required v-model="email">
        <label for="">password:</label>
        <input type="password" required v-model="password">
        <div class="submit">
            <button @click="login">Login</button>
            
        </div>
    </form>

    </div>


</template>

<script>


export default{
    name:'LoginView',
    data(){

        return{
            email:'',
            password: '',
            message:'',
            
        }
        
    },
    methods:{
       login:function()
       {
        let email = this.email
        let password = this.password

        this.$store.dispatch('login', { email, password })
          .then(() => this.$router.push('/'))
          .catch(err => {
            console.log(err)
            
            alert(this.status)
          }
          
          

          )
      },
      
    },
      computed:{
        status(){ return this.$store.state.status}
      }

       
            
    
}


</script>