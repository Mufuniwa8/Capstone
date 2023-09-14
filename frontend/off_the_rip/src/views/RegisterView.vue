<template>
    <div class="user-inputs">
      <input
        class="inputs"
        v-model="users.email"
        type="text"
        placeholder="email@gmail.com"
      />
      <input
        class="inputs"
        v-model="users.userPassword"
        type="text"
        placeholder="Password"
      />
      <hr class="hr" />
      <button class="btn-user" @click="register">Add User</button>
    </div>
</template>

<script>
import axios from 'axios'


export default {
    name: "Home",
    data(){
        return {
            users: {
                email: "",
                userPassword: "",
            }
        }
    },
    computed: {
        users() {
            return this.$store.state.User;
        }
    },
    methods:{
        async register() {
            try {
                await axios.post(
                    "https://capstone-api-r3rp.onrender.com/User/",
                    {
                    email: this.users.email,
                    userPassword: this.users.userPassword,
                }
                );
                this.users.email = "",
                this.users.userPassword = "",
                alert("You have created an account")
            }
            catch (error) {
                console.log(error)
            }
        },
},
mounted() {
    this.$store.dispatch("login", this.User)
},
}
</script>
