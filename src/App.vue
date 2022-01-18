<template>
  <the-nav></the-nav>
  <router-view></router-view>
  <the-initial-loader></the-initial-loader>
</template>

<script>
import TheNav from './components/layout/TheNav.vue'
import TheInitialLoader from './components/layout/TheInitialLoader.vue'

export default {
  name: 'App',
  components: {
    TheNav,
    TheInitialLoader
  }
}
</script>

<style>
:root {
  --company-color: #ce3a46;
}

::selection {
    color: #aaa;
    background: #282b2d;
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
  color: var(--company-color) !important;
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
