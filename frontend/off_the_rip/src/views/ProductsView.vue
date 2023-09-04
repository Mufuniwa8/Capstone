<template>
    <div class="about">
      <div class="selling" v-for="pro in products" :key="pro.proID">
      <img
        class="sell-img"
        :src="pro.proImage"
        :alt="pro.img"
      />
      <p>{{ pro.proName }} <br> {{ pro.proColor }} <br> {{ pro.proPrice }}</p>
      <div class="home-btn">
        <div>
          <button class="see-more">See more</button>
        </div>
        <div class="see-more">
          <button class="see-more">+Cart</button>
        </div>
      </div>
    </div>
    </div>
  </template>


<script>

export default {
  computed: {
    products() {
      return this.$store.state.products
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts")
  }
}

</script>