<template>
  <div>
    <div class="user-inputs">
      <label for="proName">Product Name</label>
      <input v-model="products.proName" type="text" />
      <label for="proColor">Color</label>
      <input v-model="products.proColor" type="text" />
      <label for="proPrice">Price</label>
      <input v-model="products.proPrice" type="text" />
      <label for="proImage">Image</label>
      <input v-model="products.proImage" type="text" />
      <button @click="updateProductInfo">Add User</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      products: {
        // userID: "",
        proName: "",
        proColor: "",
        proPrice: "",
        proImage: "",
      },
    };
  },
  methods: {
    async updateProductInfo() {
      // this.$store.dispatch("updatedUser", this.editedUser);
      // this.$store.dispatch("fetchUsers")
      try {
        await axios.put(
          `https://capstone-api-r3rp.onrender.com/products/update/${this.id}`,
          {
            // userID: this.users.userID,
            proName: this.products.proName,
            proColor: this.products.proColor,
            proPrice: this.products.proPrice,
            proImage: this.products.proImage,
          }
        );
        // this.userID = "";
        this.products.proName = "";
        this.products.proColor = "";
        this.products.proPrice = "";
        this.products.proImage = "";
        this.$router.push("/admin");
        alert("A product has been updated");
      } catch (error) {
        console.log(error);
      }
    },
  },
  props: ["id"],
  computed: {
    Product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
    this.$store.dispatch("fetchProduct", this.id);
  },
};
</script>
