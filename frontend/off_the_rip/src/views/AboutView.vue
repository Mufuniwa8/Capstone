<template>
  <div class="about">
    <div class="about-des">
      <p class="about-p">
        
  Welcome to Off The Rip, where sneaker culture meets style and innovation. At Off The Rip, we're more than just a sneaker store; we're a destination for enthusiasts, collectors, and fashion-forward individuals who understand that the right pair of sneakers can elevate any outfit.
  <br>
  Our passion for sneakers runs deep, and we've curated a handpicked selection of the latest and most sought-after sneaker releases from top brands. Whether you're looking for iconic classics or cutting-edge designs, we've got you covered. From Nike and Adidas to Jordan and Yeezy, our collection spans the spectrum of sneaker greatness.
  <br>
  But Off The Rip isn't just a place to buy sneakers; it's a community. We believe that sneakers are a form of self-expression, and we're here to help you find the perfect pair that speaks to your unique style. Our knowledgeable and friendly staff is always ready to assist you in making informed choices and finding the perfect fit
      </p>
    </div>
    <div class="shops">
      <div class="shops-container">
        <img class="shop-img" src="https://i.postimg.cc/C1wtpMN3/close-up-5.webp" alt="">
      </div>
      <div class="shops-container">
        <img class="shop-img" src="https://i.postimg.cc/VLXVvbVx/download.jpg" alt="">
      </div>
      <div class="shops-container">
        <img class="shop-img" src="https://i.postimg.cc/FHWgHrht/shesha.jpg" alt="">
        
      </div>
    </div>
    <div class="members-container">
      <div class="members-img">
         <img class="about-img" src="https://i.postimg.cc/5t5vTLnm/C12-Mufuniwa-Mbedzi-1.jpg" alt="">
         <h4>Mufuniwa Mbedzi</h4>
        <p>Fullstack developer</p>
      </div>
      <div class="members-img">
         <img class="about-img" src="https://i.postimg.cc/HLS5Td1J/C12-Tara-Snell-2.jpg" alt="">
         <h4>Tara Snell</h4>
         <p>Head of Marketing</p>
      </div>
      <div class="members-img">
         <img class="about-img" src="https://i.postimg.cc/ZqqB72vJ/C12-C2-Connor-Winkworth.jpg" alt="">
         <h4>Connor Winkworth</h4>
         <p>chief executive officer</p>
      </div>
    </div>
    
  </div>
</template>


<style>

.about-des {
  margin: 30px;
}
.about-des {
  font-size: large;
}
.shops {
  display: grid;
  grid-template-columns: auto auto auto;
  /* border: 2px solid black; */
  height: 300px;
}

.shops-container {
  /* border: 2px solid black; */
  height: 200px;
  width: 350px;
  margin: 50px;
}
.shop-img {
  width: 350px;
  height: 200px;
  object-fit: cover;
}
.members-container {
  display: grid;
  grid-template-columns: auto auto auto;
  /* border: 2px solid black; */
  height: 450px;
  justify-content: center;
  gap: 50px;
}
.members-img {
  /* border: 2px solid black; */
  width: 300px;
  height: 400px;
  background-color: rgba(217, 217, 217, 1);

}
.about-img {
  width: 260px;
  height: 310px;
  margin: 15px;
  /* border: 2px solid white; */
  object-fit: cover;
}

</style>