<template>

<div class="filter">

  <button
      type="button"
      class="filters"
      :class="{ 'active-btn': selectedFilter === 'all' }"
      @click="selectFilter('all')"
    >
      All
    </button>
    <button
      type="button"
      class="filters"
      :class="{ 'active-btn': selectedFilter === 'Men' }"
      @click="selectFilter('all')"
    >
      Men
    </button>
    <button
      type="button"
      class="filters"
      :class="{ 'active-btn': selectedFilter === 'Women' }"
      @click="selectFilter('Women')"
    >
      Women
    </button>
    <button
      type="button"
      class="filters"
      :class="{ 'active-btn': selectedFilter === 'Juniors' }"
      @click="selectFilter('Juniors')"
    >
      Juniors
    </button>
</div>

    <div class="products-container">
      <div class="products" v-for="pro in products" :key="pro.proID">
      <img
        class="pro-img"
        :src="pro.proImage"
        :alt="pro.img"
      />
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

</style>