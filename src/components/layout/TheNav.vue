<template>
    <nav id="app-nav" class="d-flex align-items-center justify-content-between">
        <router-link to="/" class="navbar-brand"><img src="@/assets/logos/hess-logo.png" alt="Hess Energy Solutions" style="width: 140px;"></router-link>
        <div class="d-flex align-items-center">
            <div class="navigation">
                <a href="#home" class="nav-link active landing-nav" id="navHome">Home</a>
            </div>
            <div class="navigation">
                <a href="#battery-intro" class="nav-link landing-nav" id="navBatteries">Batteries</a>
            </div>
            <div class="navigation">
                <a href="#forklift-section" class="nav-link landing-nav" id="navForklifts">Forklifts</a>
            </div>
            <div class="navigation">
                <a href="#products-section" class="nav-link landing-nav" id="navProducts">Products</a>
            </div>
            <div class="navigation">
                <a href="#companySection" class="nav-link landing-nav" id="navTeam">Our Team</a>
            </div>
        </div>
        <div>
            <div class="navigation">
                <a style="cursor: pointer;" data-bs-toggle="modal" data-bs-target="#contactModal">Request a Quote</a>
            </div>
        </div>
        <div class="mobile-spacer"></div>
        <div class="hamburger-container" @click="showSideNav = true">
            <div class="line line-1"></div>
            <div class="line line-2"></div>
            <div class="line line-3"></div>
        </div>
    </nav>

    <transition name="slide-in">
        <div v-if="showSideNav" class="side-nav">
            <div class="side-nav-header">
                <div class="side-nav-logo"></div>
                <button @click="showSideNav = false">
                    <i class="fas fa-times fa-lg"></i>
                </button>
            </div>
            <div class="text-white mt-5">
                <div class="py-4">
                    <a href="#home" class="text-white landing-nav" id="navMobileHome"><h5 class="text-center fw-bolder">Home</h5></a>
                </div>
                <div class="py-4">
                    <a href="#battery-battle" class="text-white landing-nav" id="navMobileBatteries"><h5 class="text-center fw-bolder">Batteries</h5></a>
                </div>
                <div class="py-4">
                    <a href="#forklift-section" class="text-white landing-nav" id="navMobileForklifts"><h5 class="text-center fw-bolder">Forklifts</h5></a>
                </div>
                <div class="py-4">
                    <a href="#products-section" class="text-white landing-nav" id="navMobileProducts"><h5 class="text-center fw-bolder">Products</h5></a>
                </div>
                <div class="py-4">
                    <a href="#companySection" class="text-white landing-nav" id="navMobileTeam"><h5 class="text-center fw-bolder">Our Team</h5></a>
                </div>
                <div class="py-4">
                    <a href="#" @click="showSideNav = false" class="text-white" data-bs-toggle="modal" data-bs-target="#contactModal"><h5 class="text-center fw-bolder">Contact Us</h5></a>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    emits: ['openContactForm'],
    data() {
        return {
            loginIsOpen: false,
            showSideNav: false
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
        z-index: 9999999;
    }

    .side-nav {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        background-color: rgba(0,0,0,0.6);
        backdrop-filter: blur(12px);
        height: 100vh;
        z-index: 99999999;
        display: none;
        font-weight: bolder;
    }

    @media(max-width: 782px) {
        .side-nav {
            display: block;
        }
    }

        .side-nav-logo {
            width: 140px;
            background-image: url('../../assets/logos/hess-logo.png');
            background-position: center center;
            background-repeat: no-repeat;
            background-size: contain;
        }

        .side-nav-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: white;
            padding: 1rem;
            border-bottom: 2px solid var(--company-color);
        }
        .side-nav-header button {
            border: none;
            outline: none;
            background-color: transparent;
            color: white;
            padding: .5rem;
        }

    .fixed-nav {
        background-color: white;
        max-height: 50px;
    }

    .fixed-nav .line {
        background-color: #222335;
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
            background-color: white;
            margin-bottom: 3px;
            border-radius: 4px;
        }

    @media (prefers-color-schema: dark) {
        .fixed-nav {
            background-color: #222;
            color: white;
        }
    }
        .fixed-nav a {
            color: #444 !important;
        }

        nav a {
            letter-spacing: 1px;
            text-transform: uppercase;
            color: white !important;
        }

            nav a:hover {
                color: var(--company-color) !important;
            }

            nav a.active {
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

    .slide-in-enter-active {
        transition: transform .4s ease-in;
    }
    .slide-in-leave-active {
        transition: transform .4s ease-out;
    }

    .slide-in-enter-from,
    .slide-in-leave-to {
        transform: translateX(100%);
    }
    .slide-in-enter-to,
    .slide-in-leave-from {
        transform: translateX(0px);
    }
</style>
