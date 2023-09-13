<template>
  <div>
      <div class="products-container">
  <div class="products" v-for="product in filteredProducts" :key="product.id">
    <img class="pro-img" :src="product.proImage" :alt="product.img" />
    <p>{{ product.proName }} <br> {{ product.proColor }} <br> {{ product.proPrice }}</p>
    <div class="pro-btn">
    </div>
  </div>
</div>
  </div>
</template>

<script>

export default {
  props: true,
  computed: {
  product() {
    return this.$store.state.product;
  },
  // id() {
  //   return this.$store.param;
  // },
},
mounted() {
  this.$store.dispatch("fetchProduct", this.id);
  this.$store.dispatch("fetchProducts");
}
}

</script>
<style>
.products-container{
display: grid;
grid-template-columns: auto auto auto;
justify-content: center;
gap: 50px;
margin: 20px;
}
.products {
/* border: 2px solid black; */
width: 300px;
height: 500px;
background-color: rgba(217, 217, 217, 1);
}

.pro-img {
width: 250px;
height: 300px;
margin: 20px;
object-fit: cover;
position: relative;
}
.pro-btn {
display: grid;
grid-template-columns: auto auto;
justify-content: center;
align-items: center;
gap: 20px;
}
.see-more {
width: 100px;
background-color: rgba(154, 13, 13, 1);
color: white;
}
.function-container {
display: grid;
grid-template-columns: auto auto auto auto;
justify-content: center;
align-items: center;
gap: 20px;
margin: 20px;
}

</style>