<template>
  <section class="about">
    <div class="content">
      <div class="title"><span>About Me</span></div>
      <div class="about-details">
        <div class="left">
          <img :src="require('@/assets/SCOTT ID.png')" alt="Scott ID" />
        </div>
        <div class="right">
          <div class="topic">Designing Is My Passion</div>
          <p>
            I am an IT professional specializing in UI/UX design and project management. With a passion for creating intuitive user experiences and a proven ability to lead projects to successful completion, I thrive on turning ideas into impactful digital solutions. Whether designing user interfaces or managing multidisciplinary teams, I am committed to innovation, collaboration, and excellence.
          </p>
          <div class="button">
            <button>Download CV</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style scoped>
/* About Section Styling */
.about {
  padding: 50px 20px; /* Adjust for small screens */
  background-color: #f9f9f9;
}

.content {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  margin-top: 50px;
}

.title span {
  display: inline-block;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: #4070f4;
  margin-bottom: 30px;
  text-transform: uppercase;
}

.about-details {
  display: flex;
  gap: 20px;
  flex-wrap: wrap; /* Wrap items on smaller screens */
  align-items: center;
}

.left {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left img {
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.right {
  flex: 2;
}

.topic {
  font-size: 25px;
  font-weight: bold;
  color: #0e2431;
  margin-bottom: 15px;
}

.right p {
  text-align: justify;
  color: #0e2431;
  line-height: 1.6;
  margin-bottom: 20px;
}

.button button {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #4070f4;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.button button:hover {
  background-color: #3056d3;
}

/* Responsive Styling */
@media (max-width: 768px) {
  .about-details {
    flex-direction: column;
    text-align: center; /* Center-align text for smaller screens */
  }

  .left img {
    margin-bottom: 20px; /* Add spacing between image and text */
  }

  .topic {
    font-size: 22px;
  }

  .right p {
    font-size: 16px;
  }

  .button button {
    font-size: 14px;
    padding: 10px 15px;
  }
}
</style>
