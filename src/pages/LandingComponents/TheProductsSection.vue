<template>
    <section id="products-section">
        <div class="container">
            <h3 class="text-center mb-5 fw-bold">Not convinced yet? Here's what we excel at</h3>
            <div class="row mb-4">
                <div class="col-12 col-lg-4 mb-5">
                    <div class="product-card shadow-lg">
                        <div class="forklift-anim-container product-img d-flex justify-content-center">
                            <div id="forkliftAnim" class="pt-4"></div>
                        </div>
                        <div class="product-card-body">
                            <h5 class="text-center fw-bold">Forklifts/Pallet Jacks</h5>
                            While we would never recommend racing a forklift, 😉 our bet is on you and our high powered Lithium-Ion batteries.
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-4 mb-5">
                    <div class="product-card shadow-lg">
                        <div class="product-img d-flex justify-content-center">
                            <div id="chargingAnim" style="width: 250px; height: 250px;" class="pt-5"></div>
                        </div>
                        <div class="product-card-body">
                            <h5 class="text-center fw-bold">Chargers & Accessories</h5>
                            Say hello to lightning-quick, reliable charging. No more twittling thumbs from unexpected outages!
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-4">                    
                    <div class="product-card shadow-lg">
                        <div class="product-img d-flex justify-content-center">
                            <div id="consultingAnim" style="width: 350px; height: 350px;"></div>
                        </div>
                        <div class="product-card-body">
                            <h5 class="text-center fw-bold">Consulting</h5>
                            Problems are our friends. Talk with our experienced technicians to create custom solutions
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import lottie from 'lottie-web'

var animation = {}
var chargingAnim = {}
var consultingAnim = {}
export default {
    mounted: function() {
        animation = lottie.loadAnimation({
            container: document.getElementById('forkliftAnim'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('@/assets/animations/ForkliftAnimation.json')
        })
        chargingAnim = lottie.loadAnimation({
            container: document.getElementById('chargingAnim'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('@/assets/animations/ChargingAnimation.json')
        })
        consultingAnim = lottie.loadAnimation({
            container: document.getElementById('consultingAnim'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('@/assets/animations/ConsultingAnimation.json')
        })
        animation.play()
        chargingAnim.setSpeed(0.6)
        chargingAnim.play()
        consultingAnim.play()
    }
}
</script>

<style scoped>
    section {
        background-color: #dcdfe2;
        padding: 6rem 0;
    }

    .product-card {
        transition: transform .2s ease-in;
        height: 500px;
        background-color: white;
    }
    .product-img {
        background-color: var(--company-color);
        width: 100%;
        height: 66%;
    }
    .product-card-body {
        padding: 1rem;
    }

    .product-card:hover {
        transform: scale(1.04);
    }

    @media(max-width: 992px) {
        .forklift-anim-container {
            padding-bottom: 300px;
        }
        #forkliftAnim {
            width: 550px;
            height: 350px;
            padding-top: 0px !important;
        }
    }
</style>