<template>
  <the-nav></the-nav>
  <router-view></router-view>
</template>

<script>
import TheNav from './components/layout/TheNav.vue'

export default {
  name: 'App',
  components: {
    TheNav
  }
}
</script>

<style>
:root {
  --clean-green: #ce3a46;
}

html {
  font-family: Mulish, 'sans-serif';
}

body {
  padding: 0;
  margin: 0;
  font-family: Mulish, 'sans-serif' !important;
}

a {
  color: #666 !important;
  text-decoration: none !important;
  font-weight: bold;
  transition: color .3s ease;
}

a:hover {
  color: var(--clean-green) !important;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease;
}

</style>
