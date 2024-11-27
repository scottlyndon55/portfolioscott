<template>
  <section class="contact">
    <div class="content">
      <h2>Contact Me</h2>
      <p>Have a project? Let’s work together!
      </p>
      <!-- Updated button with target="_blank" -->
      <a
        href="https://www.facebook.com/scott.matulac.7/"
        class="btn-primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        Let's Chat
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactMe",
};
</script>

<style scoped>
.contact {
  padding: 50px 20px;
  text-align: center;
}

.btn-primary {
  
  padding: 5px 20px;
  font-size: 15px;
  background: #4070f4;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
  text-decoration: none; /* Ensures no underline on the button */
}

.btn-primary:hover {
  background: #3056d3;
}
</style>
