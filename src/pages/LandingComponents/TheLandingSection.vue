<template>
    <section class="landing-section" id="home">
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
                            <div id="lightbulb-animation"></div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        <transition name="fade">
            <div class="scroll-down-button" @click="scrollPage" v-if="!isScrolled">
                <i class="fas fa-arrow-down fa-lg"></i>
            </div>
        </transition>
    </section>
</template>

<script>
import lottie from 'lottie-web'
var animation = {}

export default {
    props: ["isScrolled"],
    data() {
        return {
            direction: 'forward',
        }
    },
    mounted: function() {
        animation = lottie.loadAnimation({
            container: document.getElementById('lightbulb-animation'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            animationData: require('@/assets/animations/lightbulb.json')
        })

        animation.play()
    },
    methods: {
        scrollPage() {
            const productSection = document.getElementById('product-section')
            window.scrollTo({
                top: productSection.offsetTop - 120,
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
        background-position: top top;
        background-repeat: no-repeat;
        background-image: url('../../assets/img/AngularBackground.png');
        background-color: #222335;
        background-size: cover;
        background-attachment: fixed;
        position: relative;
    }

    .branding-display {
        font-size: 3.5rem;
        color: white;
        text-shadow: 0 0 3px rgb(0 0 0 / 20%);
        font-weight: 900;
    }
    .sub-branding-display {
        color: white;
    }

    @media(max-width: 600px) {
        .branding-display {
            font-size: 2.5rem;
        }
    }

    #lightbulb-animation {
        width: 300px;
        height: 300px;
        transform: rotateY(180deg) translateY(-50%) translateX(-50%);
        position: absolute;
        right: 35%;
        top: 50%;
        cursor: pointer;
    }
    
    @media(max-width: 1000px) {
        #lightbulb-animation {
            display: none;
        }
    }

    .scroll-down-button {
        position: absolute;
        left: 50%;
        bottom: 30px;
        transform: translateX(-50%);
        width: 66px;
        height: 66px;
        border-radius: 33px;
        background-color: var(--company-color);
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

    @media(max-width: 784px) {
        .scroll-down-button {
            display: none;
        }
    }

    button {
        color: white;
        outline: none;
        border: 3px solid var(--company-color);
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
    @media(max-width: 600px) {
        button {
            font-size: 15px;
        }
    }

    button::before,
    button::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: -100%;
        background-color: var(--company-color);
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
</style>