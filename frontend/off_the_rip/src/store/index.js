import { createStore } from "vuex";
import axios from "axios";
const { cookies } = useCookies();
import swal from "sweetalert";
import { useCookies } from "vue3-cookies";
import authenticateUser from "@/views/Service/Authenticate";
import router from "@/router";

const myURL = "https://capstone-api-r3rp.onrender.com/";

export default createStore({
  state: {
    products: null,
    product: null,
    User: null,
    users: null,
    cart: null,
    msg: null,
    token: null,
    register: null,
  },

  mutations: {
    fetchProducts(state, products) {
      state.products = products;
    },
    fetchProduct(state, product) {
      state.product = product;
    },
    fetchUser(state, User) {
      state.User = User;
    },
    fetchUsers(state, users) {
      state.users = users;
    },
    fetchRegister(state, register) {
      state.register = register;
    },
    fetchCart(state, cart) {
      state.cart = cart;
    },
    setMsg(state, msg) {
      state.msg = msg;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async fetchProducts(context) {
      try {
        let res = await axios.get(`${myURL}products`);
        let products = await res.data;
        context.commit("fetchProducts", products);
      } catch (error) {
        alert(error.message);
      }
    },
    async fetchProduct(context, id) {
      try {
        let res = await axios.get(`${myURL}products/${id}`);
        let product = await res.data;
        context.commit("fetchProduct", product);
      } catch (error) {
        alert(error.message);
      }
    },
    async updatedUser(context, editedUser) {
      try {
        const { data } = await axios.patch(
          `${myURL}user/${editedUser.userID}`,
          editedUser
        );
        const { msg } = await data;
        if (msg) {
          context.commit("setMsg", msg);
        }
      } catch (e) {
        context.commit("setMsg", "An Error Has Occurred.");
      }
    },
    async fetchUser(context) {
      try {
        let res = await axios.get(`${myURL}User`);
        let User = await res.data;
        context.commit("fetchUser", User);
      } catch (error) {
        alert(error.message);
      }
    },
    async fetchUsers(context, id) {
      try {
        let res = await axios.get(`${myURL}User/${id}`);
        let users = await res.data;
        context.commit("fetchUsers", users);
      } catch (error) {
        alert(error.message);
      }
    },

    async fetchCart(context) {
      try {
        let res = await axios.get(`${myURL}cart`);
        let cart = await res.data;
        context.commit("fetchCart", cart);
      } catch (error) {
        alert(error.message);
      }
    },
    async register(context, payload) {
      try {
        const { msg, token, results  } = (await axios.post(`${myURL}User`, payload)).data;
        if (msg) {
          swal({
            title: "Register",
            text: msg,
            icon: "Registered",
            timer: 3000,
          });
          context.dispatch("fetchUser");
        } else {
          router.push("/login");
        }
      } catch (e) {
        context.commit("setMsg", "You have an error");
      }
    },
    async login(context, payload) {
      try {
        const { msg, token, results } = (
          await axios.get(`${myURL}User/login`, payload)
        ).data;
        if (results) {
          context.commit("setUser", { results, msg });
          localStorage.setItem("User", JSON.stringify(results));
          cookies.set("mannUser", { msg, token, results });
          authenticateUser.applyToken(token);
          swal({
            title: msg,
            text: `Glad to have you  back ${results?.firstName}`,
            icon: "Logged in",
            timer: 2000,
          });
          router.push({ name: "home" });
        } else {
          swal({
            title: "error",
            text: msg,
            icon: "error",
            timer: 2000,
          });
        }
      } catch (e) {
        context.commit("setMsg", "The is an Error!");
      }
    },
    logOut(context) {
      // context.commit("fetchUser");
      context.commit("setUser");
      cookies.remove("mannUser");
      localStorage.removeItem("User");
    },
  },
});
