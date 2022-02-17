<template>
  <the-nav @openContactForm="showContactForm = true"></the-nav>
  <router-view></router-view>
  <the-initial-loader></the-initial-loader>
  <the-footer></the-footer>
  <ContactModal />
  <div class="mobile-chat">
      <button data-bs-toggle="modal" data-bs-target="#contactModal" class="shadow-lg"><i class="fas fa-comment-alt fa-lg fa-fw"></i></button>
  </div>
</template>

<script>
import TheNav from './components/layout/TheNav.vue'
import TheInitialLoader from './components/layout/TheInitialLoader.vue'
import TheFooter from './components/layout/TheFooter.vue'
import ContactModal from './components/contact/ContactModal.vue'

export default {
  name: 'App',
  components: {
    TheNav,
    TheInitialLoader,
    TheFooter,
    ContactModal
  },
  data() {
    return {
      showContactForm: false
    }
  },
}
</script>

<style>
:root {
  --company-color: #ce3a46;
  --company-color-dark: #ad2f39;
  --dark-background: #222335;
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

    .mobile-chat {
        position: fixed;
        left: 25px;
        bottom: 25px;
        display: none !important;
    }

        .mobile-chat button {
            outline: none;
            border: none;
            background-color: var(--company-color);
            color: #fff;
            width: 72px;
            height: 72px;
            border-radius: 36px;
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

hr {
  border-top: 2px solid var(--company-color) !important;
  opacity: 1 !important;
  margin-top: .5rem !important;
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

@media(max-width: 782px) {
  .mobile-chat {
    display: block !important;
  }
}

</style>
