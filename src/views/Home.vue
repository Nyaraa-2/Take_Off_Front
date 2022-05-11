<template>
  <div>
    <div class="home">
      <nav-bar />
      <!-- <LayoutButton bg="secondary" color="white">Inscription</LayoutButton> -->
    </div>
  </div>
</template>

<script>
// import LayoutButton from '../components/LayoutButton.vue'
import NavBar from '../components/NavBar.vue'
export default {
  name: 'Home',
  components: { NavBar },
}
</script>
