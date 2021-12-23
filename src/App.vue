<template>
  <div>
    <Navbar />
    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import NavBar from "../src/components/layout/navbar.vue";
export default {
  components: {
    Navbar: NavBar,
  },
};
</script>
<style></style>
