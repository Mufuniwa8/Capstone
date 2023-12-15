<template>
  <div>
    <nav class="navbar navbar-expand-lg  bg-body-tertiary">
      <div class="container-fluid">
        <img
          class="logo"
          src="https://i.postimg.cc/X7n4LzHr/IMG-2188.jpg"
          alt=""
        />
        <!-- <a class="navbar-brand" href="#">Navbar</a> -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav comp-nav">
            <router-link class="nav-comp" to="/">Home</router-link>
            <!-- <router-link class="nav-comp" to="/register">Register</router-link>
            <router-link class="nav-comp" to="/login">Login</router-link> -->
            <router-link class="nav-comp" to="/about">About</router-link>
            <router-link class="nav-comp" to="/products">Products</router-link>
            <!-- <router-link to="/product">See more</router-link> -->
            <router-link class="nav-comp" to="/contact">Contact-Us</router-link>
            <router-link class="nav-comp" to="/admin">Admin</router-link>
            <div class="log-reg">
              <router-link class="reg-text" to="/register">Register</router-link>
            <router-link class="reg-text" to="/login">Login</router-link>
            </div>
            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled" aria-disabled="true">Disabled</a> -->
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
.nav-comp {
  font-size: 25px;
  padding: 10px !important;
  text-decoration: none;
}
.reg-text {
  font-size: 20px;
  padding: 10px;
  text-decoration: none;
}
.comp-nav {
    align-items: center !important;
    /* border: 2px solid black; */
    margin-left: 200px;
    /* margin-top: 10px; */
    justify-content: center !important;
}
.log-reg {
  margin-left: 200px;
}
.logo {
  border-radius: 100px;
  width: 90px;
  height: 90px;
  object-fit: cover;
}

@media (max-width: 700px) {
  .nav-comp {
  font-size: 35px;
  padding: 10px !important;
  text-decoration: none;
}
.comp-nav {
    align-items: center !important;
    /* border: 2px solid black; */
    margin-left: 20px;
    margin-top: 50px;
    justify-content: center !important;
}
}
@media (max-width: 700px) {
  .nav-comp {
  font-size: 35px;
  padding: 10px !important;
  text-decoration: none;
}
.comp-nav {
    align-items: center !important;
    /* border: 2px solid black; */
    /* margin-left: 20px; */
    /* margin-top: 50px; */
    justify-content: center !important;
}
}
</style>
