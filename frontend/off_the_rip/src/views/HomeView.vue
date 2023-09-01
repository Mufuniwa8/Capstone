<template>
  <div class="home-page">
    <div class="ad-container">
      <!-- <img class="ad-img" src="https://i.postimg.cc/43PsY1fq/IMG-2137.jpg" alt=""> -->
      <div class="ad-text">
        <p class="pro-txt">
          stay fly with the latest kicks <br />
          on the streets
        </p>
        <div class="btn-products">
          <router-link class="home-pro" to="/products">Products</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* .ad-img {
  padding: 15px;
  height: 500px !important;
  width: 1000px;
  object-fit: cover;
  /* position: absolute;  
   margin-right: 500px !important;
} */
.ad-text {
  border: 2px solid black;
  position: relative;
  background-color: white;
  width: 500px;
  height: 150px;
  justify-content: center;
}
.pro-txt {
  padding: 5px;
}
.ad-container {
  /* border: 2px solid black; */
  background: url(https://i.postimg.cc/FsGZv3FP/IMG-213712.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 70%;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
}

.home-page {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home-pro {
  color: white;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.btn-products {
text-decoration: none;
  width: 150px;
  height: 50px;
  background-color: rgba(154, 13, 13, 1);
  justify-content: center;
align-items: center;
}
</style>
