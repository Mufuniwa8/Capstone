<template>

<div class="admin-container" v-for="users in User" :key="users">
  <table>
    <tr>
      <th>{{ users.firstName }}</th>
      <th>{{ users.lastName }}</th>
      <th>{{ users.userRole }}</th>
      <th>{{ users.userPassword }}</th>
      <th><img :src="user.userProfile" :alt="user.userProfile"></th>
    </tr>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Role</th>
      <th>Password</th>
      <th>image</th>
    </tr>
  </table>
</div>

<table>
  <tr>
    <th>Action</th>
    <th>image</th>
    <th>Product Name</th>
    <th>Color</th>
    <th>Price</th>
    <!-- <th><button>edit</button><button>delete</button></th> -->
  </tr>
  <tr v-for="pro in products" :key="pro">
    <th> <img :src="pro.proImage" alt="pro.img"></th>
    <th>{{ pro.proName }}</th>
    <th>{{ pro.Color }}</th>
    <th>{{ pro.proPrice }}</th>
    <th><button>edit</button><button>delete</button></th>
  </tr>
</table>

  </template>

  <script>


export default {
  products() {
    return this.$store.state.products;
  },
  User() {
      return this.$store.state.User;
    },
    mounted() {
    this.$store.dispatch("fetchUser"),
     this.$store.dispatch("fetchProducts");
  },
}

</script>