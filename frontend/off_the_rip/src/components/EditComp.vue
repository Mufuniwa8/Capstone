<template>
    <div>
        <div class="user-inputs">
      <label for="firstName">First Name</label>
      <input v-model="User.firstName" type="text" />
      <label for="firstName">Last Name</label>
      <input v-model="User.lastName" type="text" />
      <label for="Role">Role</label>
      <input v-model="User.userRole" type="text" />
      <label for="password">Enter Password</label>
      <input v-model="User.userPassword" type="text" />
      <label for="profile">Image</label>
      <input v-model="User.userProfile" type="text" />
      <!-- <label for="firstName">First Name</label>
      <input type="text">
      <label for="lastName">Last Name</label>
      <input type="text">
      <label for="userRole">Role</label>
      <input type="text">
      <label for="userPassword">Password</label>
      <input type="text">
      <label for="userProfile">Profile</label>
      <input type="text"> -->
      <button @click="updateUserInfo">Add User</button>
    </div>
    </div>
</template>

<script>
import axios from 'axios';


export default {
  data() {
    return {
        User: {
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
  async  updateUserInfo() {
        // this.$store.dispatch("updatedUser", this.editedUser);
        // this.$store.dispatch("fetchUsers")
        try {
          await axios.put(
            `https://capstone-api-r3rp.onrender.com/User/update/${this.id}`,
            {
              // userID: this.users.userID,
            firstName: this.User.firstName,
            lastName: this.User.lastName,
            userRole: this.User.userRole,
            userPassword: this.User.userPassword,
            userProfile: this.User.userProfile,
            }
          );
          // this.userID = "";
          this.User.firstName = "";
          this.User.lastName = "";
          this.User.userRole = "";
          this.User.userPassword = "";
          this.User.userProfile = "";
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