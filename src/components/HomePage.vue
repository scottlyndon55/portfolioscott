<template>
  <section class="home">
    <!-- Navbar -->
    <div class="navbar" :class="{ scrolled: isScrolled }">
      <div class="navbar-content">
        <!-- Logo (hidden on small screens) -->
        <div v-if="!isSmallScreen" class="logo">
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
      </div>
    </div>

    <!-- Home Content -->
    <div class="home-content">
      <div class="text">
        <div class="text-one">Hello,</div>
        <div class="text-two">I'm Scott Lyndon</div>
        <div class="text-three">UI/UX Designer</div>
        <div class="text-four">From the PHILIPPINES</div>
      </div>
      <div class="button">
        <a href="#contact" class="btn-primary">Hire Me</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      isScrolled: false,
      isMenuOpen: false,
      isSmallScreen: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
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
    handleResize() {
      this.isSmallScreen = window.innerWidth <= 768;
    },
  },
};
</script>

<style scoped>
/* Home Section */
.home {
  height: 100vh;
  background: url("@/assets/backgroundportfolio.png") no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

/* Navbar */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 15px 20px;
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

/* Burger Menu Button */
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

/* Menu Links */
.menu {
  display: flex;
  gap: 20px;
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

/* Mobile Menu */
.menu.active {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 70px;
  right: 0;
  width: 100%;
  background: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  z-index: 1000;
}

/* Social Icons */
.social-icons {
  display: none;
}

/* Home Content */
.home-content {
  text-align: center;
}

.text-one {
  font-size: 20px;
  color: #0e2431;
  margin-bottom: 10px;
}

.text-two {
  font-size: 50px;
  font-weight: bold;
  color: #0e2431;
  margin-bottom: 10px;
}

.text-three {
  font-size: 25px;
  color: #4070f4;
  margin-bottom: 10px;
}

.text-four {
  font-size: 16px;
  color: #0e2431;
  margin-bottom: 20px;
}

/* Button */
.btn-primary {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background: #4070f4;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn-primary:hover {
  background: #3056d3;
}

/* Responsive Styling */
@media (max-width: 768px) {
  .menu {
    display: none;
  }

  .menu-btn {
    display: block;
  }

  .menu-link {
    text-align: center;
    padding: 10px 0;
    color: #4070f4;
    font-size: 18px;
  }

  .logo {
    display: none;
  }

  .text-two {
    font-size: 36px;
  }

  .text-three {
    font-size: 20px;
  }
}
</style>
