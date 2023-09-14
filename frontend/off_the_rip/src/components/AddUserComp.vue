<template>
    <div>
        <div class="user-inputs">
      <input class="inputs" v-model="Users.firstName" type="text" placeholder="First Name"/>
      <input class="inputs" v-model="Users.lastName" type="text" placeholder="Last Name"/>
      <input class="inputs" v-model="Users.userRole" type="text" placeholder="Role"/>
      <input class="inputs" v-model="Users.userPassword" type="text" placeholder="Password"/>
      <input class="inputs" v-model="Users.userProfile" type="text" placeholder="Profile"/>
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
        Users: {
            userID: "",
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
              userID: this.Users.userID,
            firstName: this.Users.firstName,
            lastName: this.Users.lastName,
            userRole: this.Users.userRole,
            userPassword: this.Users.userPassword,
            userProfile: this.Users.userProfile,
            }
          );
          this.Users.userID = "";
          this.Users.firstName = "";
          this.Users.lastName = "";
          this.Users.userRole = "";
          this.Users.userPassword = "";
          this.Users.userProfile = "";
          this.$router.push("/admin");
          alert("A user has been updated");
        }
        catch (error) {
          console.log(error);
        }
    },
  },
//   props: ["id"],
//   computed: {
//     Users() {
//         return this.$store.state.users;
//     },
//   },
//   mounted() {
//     this.$store.dispatch("fetchUser");
//     this.$store.dispatch("fetchUsers", this.id);
//   }
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