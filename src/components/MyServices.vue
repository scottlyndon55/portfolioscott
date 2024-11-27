<template>
  <section class="services">
    <div class="content">
      <h2>My Services</h2>
      <div class="service-list">
        <div
          v-for="service in services"
          :key="service.title"
          class="service-box"
          @mouseover="hoveredService = service.title"
          @mouseleave="hoveredService = null"
          :class="{ active: hoveredService === service.title }"
        >
          <div class="icon">
            <i :class="service.icon"></i>
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MyServices",
  data() {
    return {
      hoveredService: null,
      services: [
        { icon: "fas fa-desktop", title: "Web Development", description: "Building responsive, user-friendly websites and applications with a focus on functionality, performance, and seamless user experience." },
        { icon: "fas fa-paint-brush", title: "Graphic Design", description: "Crafting visually appealing designs that communicate ideas effectively and leave a lasting impression.?" },
        { icon: "fas fa-chart-line", title: "Project Management for IT Systems", description: "Leading teams to deliver software development projects on time and within scope. Coordinating system analysis, design, and deployment for custom IT solutions." },
        { icon: "fab fa-android", title: "Icon Design", description: "Creating clean, scalable, and visually consistent icons that enhance user interfaces and effectively communicate functionality." },
        { icon: "fas fa-camera-retro", title: "UI/UX Design", description: "Designing wireframes, prototypes, and high-fidelity mockups for mobile applications. Conducting usability testing to refine interfaces for user satisfaction." },
        { icon: "fas fa-tablet-alt", title: "E-Commerce Platform Development", description: "Developing and managing online marketplaces or grocery delivery platforms with PostgreSQL and hybrid storage solutions." },
      ],
    };
  },
};
</script>

<style scoped>
.services {
  padding: 80px 20px;
  text-align: center;
}

h2 {
  font-size: 28px;
  color: #0e2431;
  margin-bottom: 30px;
  position: relative;
}

h2::after {
  content: "";
  display: block;
  width: 80px;
  height: 3px;
  background: #4070f4;
  margin: 10px auto;
  margin-top: 50px
}

.service-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.service-box {
  width: calc(33% - 20px);
  padding: 20px;
  text-align: center;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.service-box.active {
  background: #4070f4;
  color: #fff;
  transform: translateY(-5px);
}

.service-box h3 {
  margin: 10px 0;
  font-size: 18px;
  color: #0e2431;
  transition: color 0.3s ease;
}

.service-box p {
  font-size: 14px;
  color: #555;
  transition: color 0.3s ease;
}

.service-box .icon {
  font-size: 32px;
  color: #4070f4;
  margin-bottom: 5px;
  transition: color 0.3s ease;
}

.service-box.active h3,
.service-box.active p,
.service-box.active .icon {
  color: #fff;
}

.service-box:hover {
  background: #4070f4;
  color: #fff;
  transform: translateY(-5px);
}

.service-box:hover .icon {
  color: #fff;
}

.service-box:hover h3,
.service-box:hover p {
  color: #fff;
}

/* Responsiveness */
@media (max-width: 900px) {
  .service-box {
    width: calc(50% - 20px);
  }
}

@media (max-width: 600px) {
  .service-box {
    width: 100%;
  }
}
</style>
