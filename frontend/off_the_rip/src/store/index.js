import { createStore } from 'vuex'

const MyURL ="https://capstone-api-r3rp.onrender.com/"

export default createStore({
  state: {
    products: null,
    User: null,
    cart: null,
  },

  mutations: {
    fetchProducts(state,products) {
      state.products = products;
    },
    getUser(state,User) {
      state.User = User;
    },
    getCart(state,cart) {
      state.cart = cart;
    }
  },
  actions: {
    async fetchProducts(context) {
      try {
        let res = await fetch(`${MyURL}products`);
        let {products} = await res.json()
        context.commit("fetchProducts", products)
      }
      catch(error) {alert(error.message)}
    },
  },
 
})
