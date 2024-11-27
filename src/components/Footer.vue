<template>
    <footer class="footer">
      <div class="footer-content">
        <p>Created by Scott Lyndon | &copy; 2024 All Rights Reserved</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #4070f4;
    color: white;
    text-align: center;
    padding: 15px 0;
    position: relative;
    bottom: 0;
    width: 100%;
    font-size: 14px;
  }
  
  .footer-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  