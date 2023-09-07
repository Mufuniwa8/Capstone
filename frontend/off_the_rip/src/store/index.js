import { createStore } from 'vuex'
import axios from 'axios'

const myURL ="https://capstone-api-r3rp.onrender.com/"

export default createStore({
  state: {
    products: null,
    product: null,
    User: null,
    cart: null,
  },

  mutations: {
    fetchProducts(state,products) {
      state.products = products;
    },
    fetchProduct(state,product) {
      state.product = product;
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
        let res = await axios.get(`${myURL}products`);
        let products = await res.data
        context.commit("fetchProducts", products)
      }
      catch(error) {alert(error.message)}
    },
    async fetchProduct(context, id) {
      try {
        let res = await axios.get(`${myURL}product/${id}`);
        let product = await res.data
        context.commit("fetchProduct", product)
      }
      catch(error) {alert(error.message)}
    },
  },
 
})