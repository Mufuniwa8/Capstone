<template>
  <NavbarComp></NavbarComp>
  <router-view />
  <FooterComp></FooterComp>
</template>

<script>
import NavbarComp from "./components/NavbarComp.vue";
import FooterComp from "./components/FooterComp.vue";
export default {
  components: {
    NavbarComp,
    FooterComp,
  },
};
</script>

<style>
@import url('https://fonts.cdnfonts.com/css/kavoon');
#app {
  font-family: 'Kavoon';
  font-weight: bolder;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: black;
}

nav a.router-link-exact-active {
  color: rgba(154, 13, 13, 1);
}
</style>
