<template>
  <div>
    <div v-if="editedUser" class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <!-- <label for="firstName">User ID</label>
      <input v-model="editedUser.userID" type="text" />
      <label for="firstName">First Name</label>
      <input v-model="editedUser.firstName" type="text" />
      <label for="firstName">Last Name</label>
      <input v-model="editedUser.lastName" type="text" />
      <label for="Role">Role</label>
      <input v-model="editedUser.userRole" type="text" />
      <label for="password">Enter Password</label>
      <input v-model="editedUser.userPassword" type="text" />
      <label for="profile">Image</label>
      <input v-model="editedUser.userProfile" type="text" /> -->
      <label for="firstName">First Name</label>
      <input type="text">
      <label for="lastName">Last Name</label>
      <input type="text">
      <label for="userRole">Role</label>
      <input type="text">
      <label for="userPassword">Password</label>
      <input type="text">
      <label for="userProfile">Profile</label>
      <input type="text">
      <button @click.prevent="updatedUser()">Add User</button>
    </div>
    <h2 v-else>Error</h2>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  data() {
    return {
        // editedUser: {
            userID: "",
            firstName: "",
            lastName: "",
            userRole: "",
            userPassword: "",
            userProfile: "",
        // }
    };
  },
  methods: {
  async  updatedUser() {
        // this.$store.dispatch("updatedUser", this.editedUser);
        // this.$store.dispatch("fetchUsers")
        try {
          await axios.put(
            `https://capstone-api-r3rp.onrender.com/User/update/${this.$route.params.id}`,
            {
              userID: this.users.userID,
            firstName: this.users.firstName,
            lastName: this.users.lastName,
            userRole: this.users.userRole,
            userPassword: this.users.userPassword,
            userProfile: this.users.userProfile,
            }
          );
          this.firstName = "";
          this.lastName = "";
          this.userRole = "";
          this.userPassword = "";
          this.userProfile = "";
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
    this.$store.dispatch("fetchUser", this.id);
    this.$store.dispatch("fetchUsers");
  }
};
</script>
