<template>
  <!-- Nav -->
  <nav class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row">
    <div class="container">
      <router-link to="/" class="navbar-brand float-left">PRODUCT CRUD</router-link>
      <ul class="nav navbar-nav flex-row float-right">
        <li class="nav-item">
          <router-link to="/createcategory" class="nav-link mx-2"
            >Create Category</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/createproduct" class="nav-link mx-4"
            >Create Product</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/viewproduct" class="nav-link">View Product</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
