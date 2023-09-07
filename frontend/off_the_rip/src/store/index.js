import { createStore } from 'vuex'
import axios from 'axios'

const myURL ="https://capstone-api-r3rp.onrender.com/"

export default createStore({
  state: {
    products: [],
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
    fetchUser(state,User) {
      state.User = User;
    },
    fetchCart(state,cart) {
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
        let res = await axios.get(`${myURL}products/${id}`);
        let product = await res.data
        context.commit("fetchProduct", product)
      }
      catch(error) {alert(error.message)}
    },
    async fetchUser(context) {
      try {
        let res = await axios.get(`${myURL}User`);
        let User = await res.data
        context.commit("fetchUser", User)
      }
      catch(error) {alert(error.message)}
    },
    async fetchCart(context) {
      try {
        let res = await axios.get(`${myURL}cart`);
        let cart = await res.data
        context.commit("fetchCart", cart)
      }
      catch(error) {alert(error.message)}
    }
  },
 
})