<template>
    <div class="user-inputs">
      <input
        class="inputs"
        v-model="payload.email"
        type="text"
        placeholder="email@gmail.com"
      />
      <input
        class="inputs"
        v-model="payload.userPassword"
        type="text"
        placeholder="Password"
      />
      <hr class="hr" />
      <button class="btn-user" @click="login">Add User</button>
    </div>
</template>

<script>
import axios from 'axios'


export default {
    name: "Home",
    data(){
        return {
            payload: {
                email: "",
                userPassword: "",
            },
            loading: false,
        }
    },
    computed: {
        users() {
            return this.$store.state.User;
        }
    },
    methods:{
        async login() {
            this.loading = true;
            try {
                await this.$store.dispatch('login', this.payload);
                await new Promise((resolve) => setTimeout(resolve, 5000));
                // await axios.post(
                //     "https://capstone-api-r3rp.onrender.com/User/",
                //     {
                //     email: this.users.email,
                //     userPassword: this.users.userPassword,
                // }
                // );
                // this.users.email = "",
                // this.users.userPassword = "",
                // alert("You have created an account")
                console.log('You in');
            }
            catch (error) {
                console.log(error);
            }
            finally {
                this.loading = false;
            }
        },
},
mounted() {
    this.$store.dispatch("login", this.User)
},
}
</script>
