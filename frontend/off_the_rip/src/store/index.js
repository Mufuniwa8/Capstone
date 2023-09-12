import { createStore } from 'vuex'
import axios from 'axios'

const myURL ="https://capstone-api-r3rp.onrender.com/"

export default createStore({
  state: {
    products: null,
    product: null,
    User: null,
    users: null,
    cart: null,
    msg: null,
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
    fetchUsers(state,users) {
      state.users = users;
    },

    fetchCart(state,cart) {
      state.cart = cart;
    },
    setMsg(state,msg) {
      state.msg = msg;
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
    async updatedUser(context, editedUser) {
      try {
        const {data} = await axios.patch(
          `${myURL}user/${editedUser.userID}`,
          editedUser
        );
        const {msg} = await data;
        if (msg) {
          context.commit("setMsg", msg)
        }
      } catch (e) {
        context.commit("setMsg", "An Error Has Occurred.")
      }
    },
    async fetchUser(context) {
      try {
        let res = await axios.get(`${myURL}User`);
        let User = await res.data
        context.commit("fetchUser", User)
      }
      catch(error) {alert(error.message)}
    },
    async fetchUsers(context, id) {
      try {
        let res = await axios.get(`${myURL}User/${id}`);
        let users = await res.data
        context.commit("fetchUsers", users)
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