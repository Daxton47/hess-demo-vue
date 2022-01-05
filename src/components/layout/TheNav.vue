<template>
    <nav id="app-nav" class="d-flex align-items-center justify-content-between">
        <router-link to="/" class="navbar-brand"><img src="@/assets/logos/HessLogo.webp" alt="Hess Energy Solutions" style="width: 60px;"></router-link>
        <div class="d-flex align-items-center">
            <div class="navigation">
                <router-link to="/" class="nav-link active">Home</router-link>
            </div>
            <div class="navigation">
                <router-link to="/" class="nav-link active">Products</router-link>
            </div>
            <div class="navigation">
                <router-link to="/" class="nav-link active">Free Quote</router-link>
            </div>
            <div class="navigation">
                <router-link to="/" class="nav-link active">Services</router-link>
            </div>
        </div>
        <div>
            <button style="cursor: pointer;" @click="toggleModal">Login / Register</button>
        </div>

        <base-modal :open="loginIsOpen" :header="false" size="xl">
        </base-modal>

    </nav>
</template>

<script>
export default {
    data() {
        return {
            loginIsOpen: false,
        }
    },
    methods: {
        toggleModal() {
            this.loginIsOpen = !this.loginIsOpen
        }
    },
    mounted: function() {
        // Listen to scrolling for the navbar
        var navbar = document.getElementById('app-nav');

        window.addEventListener('scroll', function() {
            navbar.classList.toggle('fixed-nav', window.scrollY > 50);
        })
    }
}
</script>

<style scoped>
    nav {
        background-color: transparent;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        max-height: 80px;
        z-index: 10;
        padding: 1rem;
        border-bottom: 1px solid;
        border-color: rgba(0,0,0,0.1);
        transition: all .4s ease;
    }

    .fixed-nav {
        background-color: white;
        max-height: 50px;
    }

        nav a {
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #444 !important;
        }

            nav a:hover {
                color: var(--clean-green) !important;
            }
</style>
