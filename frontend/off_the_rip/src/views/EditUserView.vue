<template>
  <div>
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <label for="firstName">User ID</label>
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
      <input v-model="editedUser.userProfile" type="text" />
      <button @click.prevent="updatedUser()">Add User</button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
        editedUser: {
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
    updatedUser() {
        this.$store.dispatch("updatedUser", this.editedUser);
        this.$store.dispatch("fetchUsers")
    }
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
