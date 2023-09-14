<template>
  <div>
    <h2 class="h2">Edit a single product</h2>
    <div class="user-inputs">
      <input class="inputs" placeholder="Name" v-model="product.proName" type="text" />
      <input class="inputs" placeholder="Color" v-model="product.proColor" type="text" />
      <input class="inputs" placeholder="Price" v-model="product.proPrice" type="text" />
      <input class="inputs" placeholder="Stock" v-model="product.proStock" type="text" />
      <input class="inputs" placeholder="Category" v-model="product.proCategory" type="text" />
      <input class="inputs" placeholder="Image/URL" v-model="product.proImage" type="text" />
      <hr>  
      <button class="btn-user" @click="fetchUpdateProducts">Add User</button>
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
        proStock: "",
        proCategory: "",
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
            proStock: this.product.proStock,
            proCategory: this.product.proCategory,
            proImage: this.product.proImage,
          }
        );
        // this.userID = "";
        this.product.proName = "";
        this.product.proColor = "";
        this.product.proPrice = "";
        this.product.proStock = "";
        this.product.proCategory = "";
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
  margin: 90px;
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
.h2 {
  padding: 10px;
  margin: 50px;
}


</style>