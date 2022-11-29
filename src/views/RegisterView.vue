<template>

    <h3>SignUP Page</h3>
    <div class="form-page">
        <form @submit.prevent="formhandler">
        <label for="">Fullname:</label>
        <input type="text" required v-model="Fname">
        <label for="">Email:</label>
        <input type="text" required v-model="email">
        <label for="">password:</label>
        <input type="password" required v-model="password">
        <div v-if="passworderror">{{passworderror}}</div>
        <!--<select v-model="role">
            <option value="web developer">web developper</option>
            <option value="mobile developper">mobile developper</option>
        </select>-->
    
        
        <!--<label for="">skills</label>
            <input type="text" v-model="tempskills" @keyup="addskills">
            <div v-for="skill in skills" :key="skill" class="pill">
               <span @click="deletesklill(skill)">{{skill}}</span> 
            </div>-->
        <div class="terms">
            <input type="checkbox" name="" v-model="terms" >
            <label for="">Terms and condition</label>
            
        </div>
        <div class="submit">
            <button @click="adduser">create an account</button>
            
        </div>
    </form>

    </div>

</template>

<script> 

export default{
    name:'RegisterView',
    data(){
        return {
            Fname:'',
            email:'',
            password: '',
            terms:false,
           
            

        }
    },
    
    methods:{
        adduser:function(){
            let data={
                name:this.Fname,
                email:this.email,
                password:this.password,
                term:this.terms
            }
           
           this.$store.dispatch('register',data)
           .then(()=>this.$router.push('/'))
           .catch((err)=>console.log(err))
        }
       
       
    }
}


</script>
<style >



form{
    max-width: 420px;
    margin: 30px auto;
    text-align: left;
    background-color: white;
    
    padding: 40px;
    border-radius: 10px;
}
label{
    display: inline-block;
    color: crimson;
    background-color: white;
    margin: 25px 0 15px;
    text-transform: uppercase;
    font-size: 0.6rem;
    font-weight: bold;
    letter-spacing: 10px;
}
input,select{
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    background-color:white;
    border-bottom: 1px solid #ddd;
}
input[type='checkbox']
{
    display: inline-block;
    width: 16px;
    position: relative;
    top: 2px;
    margin: 0 10px 0 0;
    

}
.terms{
    background-color: white;
}
.pill{
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 10px;
    font-weight: bold;
    font-size: 12px;
    letter-spacing: 1px;
    color: #777;
    cursor: pointer;

}
button{
    background: blue;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    border-radius: 20px;
    color: white;
    cursor: pointer;
  
}
.submit{
    text-align: center;
    background-color: white;
}
</style>