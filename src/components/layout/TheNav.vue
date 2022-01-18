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
                <router-link to="/" class="nav-link active">Services</router-link>
            </div>
            <div class="navigation">
                <router-link to="/" class="nav-link active">Our Team</router-link>
            </div>
        </div>
        <div>
            <div class="navigation">
                <router-link to="/" class="nav-link active">Get a Free Quote</router-link>
            </div>
        </div>
        <div class="mobile-spacer"></div>
        <div class="hamburger-container">
            <div class="line line-1"></div>
            <div class="line line-2"></div>
            <div class="line line-3"></div>
        </div>
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

    #app-nav .hamburger-container,
    #app-nav .mobile-spacer {
        display: none;
    }

    .hamburger-container {
        width: 30px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
    }

        .line {
            width: 100%;
            height: 3px;
            background-color: #222;
            margin-bottom: 3px;
            border-radius: 4px;
        }

    @media (prefers-color-schema: dark) {
        .fixed-nav {
            background-color: #222;
            color: white;
        }
    }

        nav a {
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #444 !important;
        }

            nav a:hover {
                color: var(--company-color) !important;
            }

    @media(max-width: 780px) {
        #app-nav .navigation {
            display: none;
        }

        #app-nav .hamburger-container,
        #app-nav .mobile-spacer {
            display: block;
        }
    }
</style>
