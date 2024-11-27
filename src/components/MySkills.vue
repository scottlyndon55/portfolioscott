<template>
  <section class="skills">
    <div class="content">
      <div class="left">
        <h2 class="section-title">Skills Reflect Our Expertise</h2>
        <p class="description">
          I bring a diverse skill set to the table, combining technical knowledge with creative problem-solving. As an IT professional, my expertise spans web development, UI/UX design, and project management. I excel in creating user-centric designs, leading collaborative teams, and delivering impactful solutions. With a focus on innovation and precision, my skills ensure every project I undertake is efficient, intuitive, and results-driven.
        </p>
        <div class="experience">
          <h1>10</h1>
          <p>Years of Experience</p>
        </div>
      </div>
      <div class="right">
        <div v-for="skill in skills" :key="skill.name" class="skill">
          <div class="circular-progress">
            <svg>
              <circle cx="50" cy="50" r="45"></circle>
              <circle
                cx="50"
                cy="50"
                r="45"
                :style="{ strokeDashoffset: calculateOffset(skill.level) }"
              ></circle>
            </svg>
            <div class="percentage">
              <h3>{{ skill.level }}%</h3>
            </div>
          </div>
          <p class="skill-name">{{ skill.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MySkills",
  data() {
    return {
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 80 },
        { name: "JavaScript", level: 70 },
        { name: "PHP", level: 60 },
      ],
    };
  },
  methods: {
    calculateOffset(level) {
      const radius = 45;
      const circumference = 2 * Math.PI * radius;
      return circumference - (circumference * level) / 100;
    },
  },
};
</script>

<style scoped>
.skills {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  background-color: #e6f7ff;
  text-align: left;
}

.content {
  display: flex;
  max-width: 1200px;
  width: 100%;
  gap: 50px;
}

.left {
  flex: 1;
}

.right {
  flex: 1.5;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.section-title {
  font-size: 28px;
  color: #0e2431;
  margin-bottom: 20px;
}

.description {
  color: #555;
  line-height: 1.6;
}

.experience {
  margin-top: 50px;
}

.experience h1 {
  font-size: 48px;
  color: #0e2431;
  margin: 0;
}

.experience p {
  color: #4070f4;
  font-size: 16px;
  margin: 0;
}

.skill {
  width: calc(50% - 20px);
  text-align: center;
}

.circular-progress {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto;
}

.circular-progress svg {
  position: relative;
  width: 100px;
  height: 100px;
  transform: rotate(-90deg);
}

.circular-progress circle {
  fill: none;
  stroke-width: 10;
  stroke: #ddd;
}

.circular-progress circle:nth-child(2) {
  stroke: #4070f4;
  stroke-linecap: round;
  stroke-dasharray: 283; /* 2 * PI * radius (45) */
  stroke-dashoffset: 283;
  transition: stroke-dashoffset 1s ease-in-out;
}

.percentage {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.percentage h3 {
  margin: 0;
  font-size: 18px;
  color: #4070f4;
}

.skill-name {
  margin-top: 10px;
  font-size: 16px;
  color: #0e2431;
}

/* Responsive Design */
@media (max-width: 768px) {
  .content {
    flex-direction: column;
    gap: 30px;
  }

  .right {
    justify-content: center;
  }

  .skill {
    width: calc(100% - 20px);
  }
}
</style>
