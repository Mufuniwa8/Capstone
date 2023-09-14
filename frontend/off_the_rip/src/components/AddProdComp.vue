<template>
  <div>
    <h2 class="h2">Edit a single product</h2>
    <div class="user-inputs">
      <input
        class="inputs"
        placeholder="Product ID"
        v-model="pro.proID"
        type="text"
      />
      <input
        class="inputs"
        placeholder="Name"
        v-model="pro.proName"
        type="text"
      />
      <input
        class="inputs"
        placeholder="Color"
        v-model="pro.proColor"
        type="text"
      />
      <input
        class="inputs"
        placeholder="Price"
        v-model="pro.proPrice"
        type="text"
      />
      <input
        class="inputs"
        placeholder="Stock"
        v-model="pro.proStock"
        type="text"
      />
      <input
        class="inputs"
        placeholder="Category"
        v-model="pro.proCategory"
        type="text"
      />
      <input
        class="inputs"
        placeholder="Image/URL"
        v-model="pro.proImage"
        type="text"
      />
      <hr />
      <button class="btn-user" @click="createProducts">Add product</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      pro: {
        proID: "",
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
    async createProducts() {
      try {
        await axios.post("https://capstone-api-r3rp.onrender.com/products/", {
          proID: this.pro.proID,
          proName: this.pro.proName,
          proColor: this.pro.proColor,
          proPrice: this.pro.proPrice,
          proStock: this.pro.proStock,
          proCategory: this.pro.proCategory,
          proImage: this.pro.proImage,
        });
        this.pro.proID = "";
        this.pro.proName = "";
        this.pro.proColor = "";
        this.pro.proPrice = "";
        this.pro.proStock = "";
        this.pro.proCategory = "";
        this.pro.proImage = "";
        this.$router.push("/admin");
        alert("A product has been updated");
      } catch (error) {
        console.log(error);
      }
    },
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
