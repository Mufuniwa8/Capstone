<template>
  <div class="admin-container">
    <div class="products">
      <table class="table">
        <thead>
          <tr>
            <th class="table-header">Product Name</th>
            <th class="table-header">Color</th>
            <th class="table-header">Price</th>
            <th class="table-header">Image</th>
            <th class="table-header">
              <router-link class="see-more" :to="{name: 'prod add', }">Add new product</router-link>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pro in products" :key="pro.proID">
            <td class="edit-prod">{{ pro.proName }}</td>
            <td class="edit-prod">{{ pro.proColor }}</td>
            <td class="edit-prod">R{{ pro.proPrice }}</td>
            <td class="edit-prod"><img class="prod-img" :src="pro.proImage" :alt="pro.img" /></td>
            <td class="edit-prod"><div class="btn-container">
              <router-link class="edit-btn" :to="{ name: 'product add', params: {id: pro.proID} }">edit</router-link>
              <!-- <button class="edit-btn">Edit</button> -->
              <button @click="deletePro(pro.proID)" class="see-more">Delete</button></div></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="users">
      <table class="table">
        <thead>
          <tr>
            <th class="table-header">First Name</th>
            <th class="table-header">Last Name</th>
            <th class="table-header">Role</th>
            <th class="table-header">Password</th>
            <th class="table-header">image</th>
            <th class="table-header">
           Add new
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="users in User" :key="users.userID">
            <td class="edit-user">{{ users.firstName }}</td>
            <td class="edit-user">{{ users.lastName }}</td>
            <td class="edit-user">{{ users.userRole }}</td>
            <td class="edit-user">{{ users.userPassword }}</td>
            <td class="edit-user"><img class="user-img" :src="users.userProfile" :alt="users.userProfile" /></td>
            <td class="edit-prod"><div class="btn-container">
              <router-link class="edit-btn" :to="{ name: 'user add', params: {id: users.userID} }">edit</router-link>
              <!-- <button class="edit-btn">Edit</button> -->
              <button @click="deleteUser(users.userID)" class="see-more">Delete</button></div></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import EditComp from '@/components/EditComp.vue';
import ProdEditComp from '@/components/ProdEditComp.vue';

export default {
  comments: {
    EditComp,
    ProdEditComp,
    // AddProdComp,
    
  },
  computed:{
    products() {
    return this.$store.state.products;
  },
  User() {
    return this.$store.state.User;
  },
  },
  mounted() {
    this.$store.dispatch("fetchUser")
    this.$store.dispatch("fetchProducts");
  },
  methods: {
    async deletePro(id) {
      try {
        await axios.delete(`https://capstone-api-r3rp.onrender.com/products/delete/${id}`);
        this.$store.dispatch("fetchProducts");
        alert("Item has been deleted");
      }
      catch(error) {
        alert(error);
      }
    },
    async deleteUser(id) {
      try {
        await axios.delete(`https://capstone-api-r3rp.onrender.com/User/delete/${id}`);
        this.$store.dispatch("fetchUser");
        alert("A user has been deleted");
      }
      catch (error) {
        alert(error);
      }
    },
  }
};
</script>

<style scoped>
.admin-container {
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%; 
}
.table-header {
  background-color: rgba(154, 13, 13, 1);
  border: 20px solid white;
  text-align: center;
  color: white;
}
.users{
  width: 100%;
  height: 100%;
}
.products{
  width: 100%;
  height: 100%;
}
.see-more:hover {
  transition: 0.1s;
  text-decoration: underline;
  font-size: 20px;
}
.see-more {
  width: 100px;
  background-color: rgba(154, 13, 13, 1);
  color: white;
  transition: 0.1s;
  text-decoration: none;
}
.edit-btn {
  width: 70px;
  padding: 7px;
  height: 30px !important;
  background-color: rgba(154, 13, 13, 1);
  color: white;
  transition: 0.1s;
  text-decoration: none;
}
.edit-btn:hover {
  transition: 0.1s;
  text-decoration: underline;
  font-size: 20px;
}
.btn-container {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  margin-top: 10px;
  gap: 5px;
}
.edit-btn {
  background-color: rgba(154, 13, 13, 1);
  color: white;
}
.delete-btn {
  background-color: rgba(154, 13, 13, 1);
  color: white;
}
.edit-user {
  background-color: rgba(217, 217, 217, 1);
  border: 20px solid white;
}
.edit-prod {
  background-color: rgba(217, 217, 217, 1);
  border: 20px solid white;
}
.table{
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  /* border: 2px solid black; */
}
.user-img {
  width: 60px;
  height: 60px;
  object-fit: cover;
}
.prod-img {
  width: 50px;
  height: 50px;
}
tr{
  border: 1px solid black;
}


@media (max-width: 700px) {
  .admin-container {
    grid-template-columns: 1fr;
    justify-content: start; 
  }
}
</style>
