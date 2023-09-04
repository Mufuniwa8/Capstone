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
  <h2>Top selling sneakers of the month</h2>
  <div class="monthly-pro">
    <div class="selling">
      <img
        class="sell-img"
        src="https://i.postimg.cc/029WNL5d/IMG-2188.jpg"
        alt=""
      />
      <p>New Balance 550 <br> Black & white <br> R2199,99</p>
      <div class="home-btn">
        <div>
          <button class="see-more">See more</button>
        </div>
        <div class="see-more">
          <button class="see-more">+Cart</button>
        </div>
      </div>
    </div>
    <div class="selling-2">
      <img
        class="sell-img"
        src="https://i.postimg.cc/029WNL5d/IMG-2188.jpg"
        alt=""
      />
      <p>Nike Jordan 4s <br> Black & white <br> R3499,99</p>
      
      <div class="home-btn">
        <div>
          <button class="see-more">See more</button>
        </div>
        <div class="see-more">
          <button class="see-more">+Cart</button>
        </div>
      </div>
    </div>
    <div class="selling-3">
      <img
        class="sell-img"
        src="https://i.postimg.cc/029WNL5d/IMG-2188.jpg"
        alt=""
      />
      <p>Nike M2K Tekno <br> white <br> R3000,00</p>
      <div class="home-btn">
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
  /* border: 2px solid black; */
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
  text-decoration: none;
  margin-bottom: auto;
}
.btn-products {
  /* text-decoration: none; */
  text-align: center;
  width: 150px;
  height: 50px;
  margin-left: 165px;
  background-color: rgba(154, 13, 13, 1);
  /* justify-content: center;
align-items: center; */
}

.monthly-pro {
  /* border: 2px solid black; */
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  justify-content: center;
  gap: 160px;
  padding: 10px;
  margin: 50px;
}
.selling {
  /* border: 2px solid black; */
  width: 300px;
  height: 500px;
  background-color: rgba(217, 217, 217, 1);
}
.selling-2 {
  /* border: 2px solid black; */
  width: 300px;
  height: 500px;
  background-color: rgba(217, 217, 217, 1);
}
.selling-3 {
  /* border: 2px solid black; */
  width: 300px;
  height: 500px;
  background-color: rgba(217, 217, 217, 1);
}
.sell-img {
  width: 250px;
  height: 300px;
  margin: 20px;
  object-fit: cover;
  position: relative;
}
.home-btn {
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
