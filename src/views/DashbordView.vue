<template>

    <p>All users</p>
   <div>
    <table>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
        </tr>
        <tr v-for="user in users"  :key="user.id">
            <td>{{user.id}}</td>
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>

        </tr>


    </table>
    
   </div>

</template>

<script>
 export default{
    name:'DashbordView',
     
    mounted(){

        this.getusers()

    },

    methods:{
        getusers(){
            this.$store.dispatch('users')
        }
    },
    computed:
    {
        users() {
            return this.$store.getters.allusers
        }

    }
    
   
 }
 </script>