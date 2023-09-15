<template>
  <div class="function-container">
    <div class="filter">
      <button
        type="button"
        class="btn"
        :class="{'active-button': selectedFilter === 'all'}"
        @click="selectFilter('all')"
      >
        All
      </button>

      <button
        type="button"
        class="btn"
        :class="{'active-button': selectedFilter === 'men'}"
        @click="selectFilter('men')"
      >
        Men
      </button>
      <button
        type="button"
        class="btn"
        :class="{'active-button': selectedFilter === 'women'}"
        @click="selectFilter('women')"
      >
        Women
      </button>
      <button
        type="button"
        class="btn"
        :class="{'active-button': selectedFilter === 'Junior'}"
        @click="selectFilter('Junior')"
      >
        Juniors
      </button>
    </div>

    <div class="search">
      <input class="bar-search" type="text" v-model="searchQuery" />
    </div>
    <div class="sort">
      <select name="" class="sort-pro" v-model="selectedSort">
        <option value="Price-high">Sort high to low</option>
        <option value="Price-low">Sort low to high</option>
        <option value="alphabetical">Sort by A-Z</option>
      </select>
    </div>
  </div>

  <div class="products-container">
    <div class="products" v-for="pro in filteredProducts" :key="pro.proID">
      <img class="pro-img" :src="pro.proImage" :alt="pro.img" />
      <p>{{ pro.proName }} <br> {{ pro.proColor }} <br> {{ pro.proPrice }}</p>
      <div class="pro-btn">
        <div>
          <router-link class="see" :to="{name: 'products', params: {id: pro.proId}}">See More</router-link>
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
  // props: ["product"],
  data() {
    return {
      selectedFilter: 'all',
      selectedSort: 'alphabetical',
      searchQuery: '',
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    
    filteredProducts() {
      let filtered = this.products;

      if (this.selectedFilter !== 'all') {
        filtered = filtered.filter((pro) => pro.proCategory === this.selectedFilter);
      }

      if (this.searchQuery) {
        const searchTerm = this.searchQuery.toLowerCase();
        filtered = filtered.filter(
          (pro) =>
            pro.proName.toLowerCase().includes(searchTerm) ||
            pro.proColor.toLowerCase().includes(searchTerm)
        );
      }

      if (this.selectedSort === 'alphabetical') {
        filtered.sort((a, b) => a.proName.localeCompare(b.proName));
      } else if (this.selectedSort === 'Price-high') {
        filtered.sort((a, b) => b.proPrice - a.proPrice);
      } else if (this.selectedSort === 'Price-low') {
        filtered.sort((a, b) => a.proPrice - b.proPrice);
      }

      return filtered;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts").then(() => {
      this.products = this.$store.state.products;
    });
  },
  
  methods: {
    selectFilter(filter) {
      this.selectedFilter = filter;
    },
  },
};
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
.btn {
  font-size: large;
  transition: 0.1s;
}
.btn:hover {
  font-size: 25px;
  text-decoration: underline;
}
.pro-img {
  width: 250px;
  height: 300px;
  margin: 20px;
  object-fit: cover;
  position: relative;
}
.bar-search {
  /* border: none; */
text-decoration: underline;
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
  transition: 0.1s;
  text-decoration: none;
}
.see-more:hover {
  transition: 0.1s;
  text-decoration: underline;
  font-size: 20px;
}
.see {
  width: 100px;
  padding: 3.4px;
  height: 50px !important;
  background-color: rgba(154, 13, 13, 1);
  color: white;
  transition: 1s;
  text-decoration: none;
}
.see:hover {
  transition: 1s;
  font-size: 20px;
  text-decoration: underline;
}
.sort-pro {
  border: none;
  transition: 0.1s;
}
.sort-pro:hover {
  border: 2px solid black;
}
.function-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 20px;
}


/* media */
@media (max-width: 700px) {
  .products-container {
    grid-template-columns: auto auto;
    justify-content: center;
    gap: 30px;
  }
  .products {
    width: 100%;
    max-width: 300px;
  }
}

@media (max-width: 300px) {
  .products-container {
        grid-template-columns: auto;
        gap: 10px;
        margin: 10px;
    }

    .products {
        width: 100%; /* Take up the full width of the screen */
        height: auto; /* Let the height adjust based on content */
        margin: 10px 0; /* Adjust margin for smaller screens */
    }

    .pro-img {
        width: 100%;
        height: auto;
        margin: 10px 0;
    }
}



</style>