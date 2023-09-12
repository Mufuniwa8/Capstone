<template>
  <div class="admin-container">
    <div class="users">
      <table class="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
            <th>Password</th>
            <th>image</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="users in user" :key="users.userID">
            <td>{{ users.firstName }}</td>
            <td>{{ users.lastName }}</td>
            <td>{{ users.userRole }}</td>
            <td>{{ users.userPassword }}</td>
            <td><img :src="users.userProfile" :alt="users.userProfile" /></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="products">
      <table class="table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Color</th>
            <th>Price</th>
            <th>Image</th>
            <th>Action</th>
            <!-- <th><button>edit</button><button>delete</button></th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="pro in products" :key="pro.proID">
            <td>{{ pro.proName }}</td>
            <td>{{ pro.proColor }}</td>
            <td>{{ pro.proPrice }}</td>
            <td><img :src="pro.proImage" alt="pro.img" /></td>
            <td><button>edit</button><button>delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  products() {
    return this.$store.state.products;
  },
  User() {
    return this.$store.state.User;
  },
  mounted() {
    this.$store.dispatch("fetchUser"), this.$store.dispatch("fetchProducts");
  },
  // methods: {
  //   async fetchUser
  // }
};
</script>

<style scoped>
.admin-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}

.users{
  width: 100%;
  height: 100%;
}
.products{
  width: 100%;
  height: 100%;
}

.table{
  width: 100%;
  height: 100%;
  border: 2px solid black;
}

tr{
  border: 1px solid black;
}
</style>
