<template>
  <form action="https://formspree.io/f/meqbzajp" method="POST">
    <div class="contact-container">
      <input
        class="contact-input"
        type="firstName"
        name="firstName"
        placeholder="Enter First Name "
      />
      <input
        class="contact-input"
        type="lastName"
        name="lastName"
        placeholder="Enter Last Name"
      />

      <input
        class="contact-input"
        type="email"
        name="email"
        placeholder="Enter email@gmail.com"
      />

    
        <textarea name="message" placeholder="Enter a message"></textarea>
      <!-- your other form fields go here -->
      <hr>
      <button class="contact-btn" type="submit">Send</button>
    </div>
  </form>
</template>

<style>
.contact-container {
  display: grid;
  grid-template-columns: auto;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin: 50px;
  font-size: x-large;
}
.contact-input {
  border: none;
  text-decoration: underline;
  padding: 5px;
}
.contact-btn {
  width: 100px;
  background-color: rgba(154, 13, 13, 1);
color: white;
}

</style>
