<template>
  <v-app>
    <div class="page-container">
      <!-- Navbar -->
      <header :class="['navbar', { scrolled: isScrolled }]">
        <div class="navbar-content">
          <!-- Logo -->
          <div class="logo">
            <a href="#" :class="{ white: isScrolled }">Portfolio.</a>
          </div>
          <!-- Burger Menu Button -->
          <div class="menu-btn" @click="toggleMenu">
            <i class="fas" :class="isMenuOpen ? 'fa-times' : 'fa-bars'"></i>
          </div>
          <!-- Navigation Links -->
          <nav :class="{ menu: true, active: isMenuOpen }">
            <a href="#home" class="menu-link" @click="closeMenu">Home</a>
            <a href="#about" class="menu-link" @click="closeMenu">About</a>
            <a href="#skills" class="menu-link" @click="closeMenu">Skills</a>
            <a href="#services" class="menu-link" @click="closeMenu">Services</a>
            <a href="#contact" class="menu-link" @click="closeMenu">Contact</a>
          </nav>
          <!-- Social Icons -->
          <div class="social-icons">
            <a href="#" :class="{ white: isScrolled }"><i class="fab fa-facebook-f"></i></a>
            <a href="#" :class="{ white: isScrolled }"><i class="fab fa-twitter"></i></a>
            <a href="#" :class="{ white: isScrolled }"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <v-main>
        <div id="home">
          <HomePage />
        </div>
        <div id="about">
          <AboutMe />
        </div>
        <div id="skills">
          <MySkills />
        </div>
        <div id="services">
          <MyServices />
        </div>
        <div id="contact">
          <ContactMe />
        </div>
      </v-main>

      <!-- Footer -->
      <Footer />
    </div>
  </v-app>
</template>
<script>
import HomePage from "./components/HomePage.vue";
import AboutMe from "./components/AboutMe.vue";
import MySkills from "./components/MySkills.vue";
import MyServices from "./components/MyServices.vue";
import ContactMe from "./components/ContactMe.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    HomePage,
    AboutMe,
    MySkills,
    MyServices,
    ContactMe,
    Footer,
  },
  data() {
    return {
      isScrolled: false,
      isMenuOpen: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 20;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>
<style>
/* Page Container */
.page-container {
  margin: 0;
}

/* Navbar Styling */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 15px 30px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: background-color 0.3s ease-in-out;
}

.navbar.scrolled {
  background-color: #4070f4;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Burger Menu */
.menu-btn {
  display: none;
  cursor: pointer;
  font-size: 24px;
  color: #4070f4;
  transition: color 0.3s ease;
}

.menu-btn:hover {
  color: #3056d3;
}

/* Logo Styling */
.logo a {
  font-size: 24px;
  font-weight: bold;
  color: #4070f4;
  text-decoration: none;
  transition: color 0.3s ease;
}

.logo a.white {
  color: white;
}

/* Menu Links */
.menu {
  display: flex;
  gap: 20px;
  align-items: center;
}

.menu-link {
  font-size: 16px;
  color: #0e2431;
  text-decoration: none;
  transition: color 0.3s ease, text-shadow 0.3s ease;
}

.menu-link:hover {
  color: #4070f4;
  text-shadow: 0 0 10px #4070f4, 0 0 20px #4070f4;
}

.navbar.scrolled .menu-link {
  color: white;
}

.navbar.scrolled .menu-link:hover {
  text-shadow: 0 0 10px white, 0 0 20px white;
}

/* Social Icons */
.social-icons {
  display: flex;
  gap: 15px;
}

.social-icons a {
  font-size: 18px;
  color: #4070f4;
  transition: color 0.3s ease, text-shadow 0.3s ease;
}

.social-icons a:hover {
  text-shadow: 0 0 10px #4070f4, 0 0 20px #4070f4;
}

.social-icons a.white {
  color: white;
}

.social-icons a.white:hover {
  text-shadow: 0 0 10px white, 0 0 20px white;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .menu {
    display: none;
  }

  .menu.active {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 70px;
    right: 0;
    width: 250px;
    background: white;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    padding: 15px;
    z-index: 1000;
    gap: 10px;
    border-radius: 0 0 10px 10px;
  }

  .menu-btn {
    display: block;
  }

  .menu-link {
    padding: 10px;
    text-align: center;
    font-size: 18px;
    color: #4070f4;
    transition: all 0.3s ease;
  }

  .menu-link:hover {
    background: #f0f0f0;
    border-radius: 5px;
  }

  .social-icons {
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
  }
}

/* Smooth Scrolling */
html,
body {
  scroll-behavior: smooth;
}
</style>
