<template>
  <div>
    <div class="user-inputs">
      <label for="proName">Product Name</label>
      <input v-model="product.proName" type="text" />
      <label for="proColor">Color</label>
      <input v-model="product.proColor" type="text" />
      <label for="proPrice">Price</label>
      <input v-model="product.proPrice" type="text" />
      <label for="proImage">Image</label>
      <input v-model="product.proImage" type="text" />
      <button @click="fetchUpdateProducts">Add User</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      product: {
        proName: "",
        proColor: "",
        proPrice: "",
        proImage: "",
      },
    };
  },
  methods: {
    async fetchUpdateProducts() {
      try {
        await axios.put(
          `https://capstone-api-r3rp.onrender.com/products/update/${this.id}`,
          {
            // userID: this.users.userID,
            proName: this.product.proName,
            proColor: this.product.proColor,
            proPrice: this.product.proPrice,
            proImage: this.product.proImage,
          }
        );
        // this.userID = "";
        this.product.proName = "";
        this.product.proColor = "";
        this.product.proPrice = "";
        this.product.proImage = "";
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