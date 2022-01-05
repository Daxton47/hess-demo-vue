<template>
    <section class="landing-section">
        <div class="container d-flex flex-column py-sm-8 py-md-0 pt-5 pb-2">
            <div class="row align-items-center min-vh-100">
                <div class="col-12">
                    <div class="row align-items-center">
                        <div class="col-lg-9 col-xl-8 col-xxl-7 mb-5">
                            <h1 class="branding-display">
                                H.E.S.S. Energy Solutions
                            </h1>
                            <h3 class="sub-branding-display">The pioneers in lithium batteries.</h3>
                            <div class="d-flex align-items-center" style="margin-top: 2rem;">
                                <button class="me-2">Shop Products</button>
                                <button>Our Team</button>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-9 text-center">

                    <h2 class="pb-3 pt-2 underline"></h2>
                    <p class="brand-blurb">H.E.S.S. Energy Storage Systems is well known as an experienced and professional San Francisco -based lithium power source producer. We provide clients with top of the line services that cater to their specific project needs and management requirements, and all at the most competitive rates. Contact us today and find out how we can help.</p>
                </div>
            </div>
        </div>
        <transition name="fade">
            <div class="scroll-down-button" @click="scrollPage" v-if="!isScrolled">
                <i class="fas fa-arrow-down fa-lg"></i>
            </div>
        </transition>
    </section>

    <section id="product-section" style="margin: 6rem 5rem;">
        <div class="container">
            <div class="text-center">
                <h3 class="section-title">Products</h3>
            </div>
            <div class="d-flex align-items-start justify-content-around">
                <div class="product-card shadow">
                    <div class="position-relative" style="overflow: hidden; border-top-right-radius: 4px; border-top-left-radius: 4px">
                        <img src="@/assets/img/forklift.jpg" alt="">
                    </div>
                    <div class="content">
                        <h5>Forklifts</h5>
                        <p>We boast the best in the industry forklifts: zero maintenace, plug-and-go units. Includes real-time data tracking of battery health.</p>
                        <router-link to="/">Learn More</router-link>
                    </div>
                    <div class="product-progress"></div>
                </div>
                <div class="product-card shadow">
                    <div class="position-relative" style="overflow: hidden; border-top-right-radius: 4px; border-top-left-radius: 4px">
                        <img src="@/assets/img/baggage-tug.jpg" alt="">
                    </div>
                    <div class="content">
                        <h5>Tug Carts</h5>
                        <p>Fast Opportunity Charging
                            High Cycle Life (4,000+ Cycles)
                            Longer Run Times With Increased Power
                            Drop In Units (Plug & Play)
                        </p>
                        <router-link to="/">Learn More</router-link>
                    </div>
                    <div class="product-progress"></div>
                </div>
                <div class="product-card shadow">
                    <div class="position-relative" style="overflow: hidden; border-top-right-radius: 4px; border-top-left-radius: 4px">
                        <img src="@/assets/img/generators.jpg" alt="">
                    </div>
                    <div class="content">
                        <h5>Off-Grid Units</h5>
                        <p>Made Custom To You
                            Quick Delivery Times
                            5 Year, 4,000 Cycle Warranty
                            5 Year BMS Warranty
                        </p>
                        <router-link to="/">Learn More</router-link>
                    </div>
                    <div class="product-progress"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import lottie from 'lottie-web'
var animation = {}

export default {
    data() {
        return {
            direction: 'forward',
            isScrolled: false
        }
    },
    mounted: function() {
        animation = lottie.loadAnimation({
            container: document.getElementById('battery-charging'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            animationData: require('@/assets/animations/battery-charging.json')
        })

        animation.play()

        window.addEventListener('scroll', () => {
            this.isScrolled = window.scrollY > 40
        })
    },
    methods: {
        retriggerAnimation() {
            animation.pause()
            const currentFrame = animation.currentFrame
            console.log(currentFrame)

            if (this.direction == 'forward') {
                animation.setDirection(-1)
                this.direction = 'backward'
            } else {
                animation.setDirection(1)
                this.direction = 'forward'
            }

            animation.play()

        },
        scrollPage() {
            const productSection = document.getElementById('product-section')
            window.scrollTo({
                top: productSection.offsetTop + 60,
                left: 0,
                behavior: 'smooth'
            })
        }
    }
}

</script>

<style scoped>
    section {
        position: relative;
    }

    .landing-section {
        height: 100vh;
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url('../assets/img/power-background.jpg');
        background-size: cover;
        background-attachment: fixed;
        position: relative;
        clip-path: path('M 0 100% Q 150 550 400 550 Q 650 550 800 450 L 800 50 L 0 50 L 0 450')
    }

    .branding-display {
        font-size: 3.5rem;
        color: #282b2d;
        text-shadow: 0 0 3px rgb(0 0 0 / 20%);
        font-weight: 900;
    }

    .branding-display::selection {
        color: #aaa;
        background: #282b2d;
    }

    .section-title {
        margin-bottom: 2rem;
    }

    .scroll-down-button {
        position: absolute;
        left: 50%;
        bottom: 30px;
        transform: translateX(-50%);
        width: 80px;
        height: 80px;
        border-radius: 40px;
        background-color: var(--clean-green);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        cursor: pointer;
    }
        .scroll-down-button i {
            transition: transform .3s ease;
        }

        .scroll-down-button:hover i {
            transform: translateY(6px);
        }


    button {
        outline: none;
        border: 3px solid var(--clean-green);
        padding: 0.8rem 1.6rem;
        width: 240px;
        border-radius: 4px;
        position: relative;
        transition: color .55s;
        overflow: hidden;
        background: transparent;
        display: block;
        z-index: 1;
    }

    button::before,
    button::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: -100%;
        background-color: var(--clean-green);
        transition: all .35s;
        z-index: -1;
    }

    button::before {
        opacity: .5;
    }

    button::after {
        transition-delay: .2s;
    }

    button:hover {
        color: #fff;
    }

    button:hover::before,
    button:hover::after {
        top: 0;
    }

    .bg-dark {
        background-color: #222;
        color: white;
    }
    .brand-blurb {
        opacity: 0.9;
        line-height: 1.8;
        font-weight: 500;
        font-size: 18px;
    }

    .animation-container {
        position: absolute;
        right: 100px;
        bottom: 50%;
        transform: translateY(42%)
    }

    .animation-container div {
        width: 300px;
        cursor: pointer;
        transition: transform .3s ease;
    }

        .animation-container div:hover {
            transform: scale(1.05);
        }

    .product-card {
        background-color: white;
        padding: 0;
        border-radius: 4px;
        position: relative;
        cursor: pointer;
        width: 400px;
    }

        .product-card p {
            line-height: 1.2;
            margin-top: .5rem;
        }

        .product-card img {
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            width: 400px;
            z-index: 1;
            transition: transform .5s ease-out;
        }

        .product-card .content {
            padding: 2rem 1.4rem;
        }

            .product-card .content h5 {
                margin: 0
            }

    .product-progress {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0px;
        background-color: #a6462e;
        height: 4px;
        transition: width .5s ease-out,
                    background-color .5s ease-out;
    }

    .product-card:hover .product-progress {
        width: 100%;
        background-color: var(--clean-green);
    }
    .product-card:hover img {
        transform: scale(1.1);
    }

</style>
