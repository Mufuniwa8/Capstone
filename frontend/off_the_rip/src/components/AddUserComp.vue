<template>
    <div>
        <div class="user-inputs">
      <input class="inputs" v-model="users.firstName" type="text" placeholder="First Name"/>
      <input class="inputs" v-model="users.lastName" type="text" placeholder="Last Name"/>
      <input class="inputs" v-model="users.userRole" type="text" placeholder="Role"/>
      <input class="inputs" v-model="users.userPassword" type="text" placeholder="Password"/>
      <input class="inputs" v-model="users.userProfile" type="text" placeholder="Profile"/>
      <hr class="hr">
      <button class="btn-user" @click="createUser">Add User</button>
    </div>
    </div>
</template>

<script>
import axios from 'axios';


export default {
  data() {
    return {
        users: {
            // userID: "",
            firstName: "",
            lastName: "",
            userRole: "",
            userPassword: "",
            userProfile: "",
        }
    };
  },
  methods: {
  async  createUser() {
        // this.$store.dispatch("updatedUser", this.editedUser);
        // this.$store.dispatch("fetchUsers")
        try {
          await axios.post(
            "https://capstone-api-r3rp.onrender.com/User/",
            {
              // userID: this.users.userID,
            firstName: this.users.firstName,
            lastName: this.users.lastName,
            userRole: this.users.userRole,
            userPassword: this.users.userPassword,
            userProfile: this.users.userProfile,
            }
          );
          // this.users.userID = "";
          this.users.firstName = "";
          this.users.lastName = "";
          this.users.userRole = "";
          this.users.userPassword = "";
          this.users.userProfile = "";
          this.$router.push("/admin");
          alert("A user has been updated");
        }
        catch (error) {
          console.log(error);
        }
    },
  },
  props: ["id"],
  computed: {
    Users() {
        return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch("fetchUser");
    this.$store.dispatch("fetchUsers", this.id);
  }
};

</script>

<style>

.user-inputs {
  display: grid;
  grid-template-columns: auto;
  gap: 10px;
  width: auto;
  margin: 100px;
  justify-content: center;
  align-items: center;
  /* border: 2px solid black; */
  color: black;
  padding: 5px;
}
.inputs {
  background-color: rgba(217, 217, 217, 1);
  /* color: black ; */
  padding: 10px;
border: none;
text-align: center;
}
.btn-user {
  background-color: rgba(154, 13, 13, 1);
  color: white;
  width: 100px;
}


</style>