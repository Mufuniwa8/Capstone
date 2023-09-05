<template>
    <div>
        <div class="products-container">
    <div class="products" v-for="pro in filteredProducts" :key="pro.proID">
      <img class="pro-img" :src="pro.proImage" :alt="pro.img" />
      <p>{{ pro.proName }} <br> {{ pro.proColor }} <br> {{ pro.proPrice }}</p>
      <div class="pro-btn">
        <div>
          <button class="see-more">See more</button>
        </div>
        <div class="see-more">
          <button class="see-more">+Cart</button>
        </div>
      </div>
    </div>
  </div>
    </div>
</template>

<script>

export default {
    computed: {
    product() {
      return this.$store.state.product;
    },
},
mounted() {
    this.$store.dispatch("getProduct", this.id)
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
