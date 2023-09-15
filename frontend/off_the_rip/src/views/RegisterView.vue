<template>
     <div>
        <div class="user-inputs">
      <input class="inputs" v-model="payload.firstName" type="text" placeholder="First Name"/>
      <input class="inputs" v-model="payload.lastName" type="text" placeholder="Last Name"/>
      <input class="inputs" v-model="payload.email" type="text" placeholder="Enter email@gmail.com"/>
      <input class="inputs" v-model="payload.userRole" type="text" placeholder="Role"/>
      <input class="inputs" v-model="payload.userPassword" type="text" placeholder="Password"/>
      <input class="inputs" v-model="payload.userProfile" type="text" placeholder="Profile"/>
      <hr class="hr">
      <button class="btn-user" @click="createUser">Register</button>
    </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
        payload: {
            firstName: "",
            lastName: "",
            email: "",
            userRole: "",
            userPassword: "",
            userProfile: "",
        },
        loading: false,
    }
    },
    methods: {
        async createUser() {
            this.loading = true;
            try {
                await this.$store.dispatch.post("https://capstone-api-r3rp.onrender.com/User/", this.payload);
                await new Promise((resolve) => setTimeout(resolve, 5000));
                this.resetForm();
            }
            catch (error) {
                console.error(error);
            }
            finally {
                this.loading = false;
            }
        },
        resetForm() {
            this.payload.firstName = "",
            this.payload.lastName = "",
            this.payload.email = "",
            this.payload.userRole = "",
            this.payload.userPassword = "",
            this.payload.userProfile = ""
        }
    }
}

</script>