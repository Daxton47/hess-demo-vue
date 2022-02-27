<template>
    
    <section id="battery-intro">
        <!-- <div class="moving-cog"></div> -->
        <div class="container">
            <div class="d-flex align-items-center">
                <div style="width: 60%" class="battery-animated">
                    <div class="battery-icon-container">
                        <div class="battery-icon"></div>
                        <div class="square square-1"></div>
                        <div class="square square-2"></div>
                        <div class="square square-3"></div>

                        <div class="power-link"></div>
                        <div class="power-link-down"></div>
                        <div class="power-link-up"></div>
                        <div class="power-link-top"></div>
                        <div class="power-link-bottom"></div>
                        <div class="power-link-right"></div>

                        <div class="hover-circle"></div>
                        <div class="hover-circle-lg"></div>
                    </div>
                </div>
                <div class="d-flex flex-column intro-paragraph text-left" style="width: 45%">
                    <div class="d-flex justify-content-center">
                        <div class="battery-mobile-container">
                            <div class="hover-circle"></div>
                            <div class="hover-circle-lg"></div>
                            <div class="battery-mobile"></div>
                        </div>
                    </div>
                    <div>
                        <h1 class="fw-bold">We know batteries.</h1>
                        <hr style="width: 400px;">
                        <h5 class="my-4">We are dedicated to finding the most efficient solution to your energy needs. Empower your day-to-day with our top-of-the-line industrial batteries.</h5>
                        <h5>Ready from some immediate ROI? <a href="tel:+1(209)402-3044">Give us a call</a> or <a data-bs-toggle="modal" data-bs-target="#contactModal">request a quote</a></h5>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        return {}
    },
})
</script>

<style scoped>

a {
    cursor: pointer;
    color: var(--company-color) !important;
    text-decoration: solid underline !important;
}

section {
    padding: 13rem 0;
    position: relative;
    overflow: hidden;
}

.moving-cog {
    width: 800px;
    height: 800px;
    border-radius: 400px;
    border: 15px dashed #222;
    position: absolute;
    right: -400px;
    top: -400px;
    transform: translateX(300px);
    animation: rotating-counter 100s linear infinite;
}

.battery-mobile-container {
    display: none;
    width: 70px;
    height: 70px;
    z-index: 100;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #f1f2f3;
    
}
.battery-mobile {
    background: url('../../assets/img/BatteryIcon.svg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    width: 70%;
    height: 70%;
}

.battery-icon-container {
    width: 300px;
    height: 300px;
    background-color: #dcdfe2;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    position: relative;
    z-index: 100;
}

    .battery-icon {
        background: url('../../assets/img/BatteryIcon.svg');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
        width: 100%;
        height: 100%;
        z-index: 100;
        cursor: pointer;
    }

.hover-circle {
    width: 400px;
    height: 400px;
    border-radius: 200px;
    border: 5px dashed lightgray;
    position: absolute;
    animation: rotating 10s linear infinite;
    transition: opacity .4s ease;
    transition-delay: 2s;
}

.hover-circle-lg {
    width: 600px;
    height: 600px;
    border-radius: 400px;
    border: 8px dashed lightgray;
    position: absolute;
    animation: rotating-counter 30s linear infinite;
    opacity: .3;
    transition: opacity .4s ease;
    transition-delay: 2s;
}

@keyframes rotating {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
@keyframes rotating-counter {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(-360deg);
    }
}

.square {
    position: absolute;
    width: 300px;
    height: 300px;
    background-color: #dcdfe2;
    transition: all .6s ease;
    cursor: pointer;
    transition-delay: 1.8s;
}
.square-1 {
    transform: rotate(-10deg) scale(1.05);
    opacity: 0.8;
    z-index: 19;
}
.square-2 {
    transform: rotate(-20deg) scale(1.1);
    opacity: 0.6;
    z-index: 18;
}
.square-3 {
    transform: rotate(-30deg) scale(1.2);
    opacity: 0.4;
    z-index: 18;
}

.power-link {
    width: 0px;
    height: 4px;
    background-color: var(--company-color);
    position: absolute;
    z-index: 40;
    left: calc(100% - 1px);
    top: 50%;
    transition: width .4s ease;
    transition-delay: 1.4s;
}
.power-link-down {
    min-height: 0px;
    width: 4px;
    background-color: var(--company-color);
    position: absolute;
    left: calc(100% + 399px);
    top: 50%;
    transition: min-height .4s ease;
    transition-delay: 1s;
}
.power-link-up {
    height: 200px;
    width: 4px;
    background-color: var(--company-color);
    position: absolute;
    left: calc(100% + 399px);
    top: -50px;
    transition: transform .4s ease;
    transition-delay: 1s;
    transform-origin: 0 100%;
    transform: scaleY(0);
}
.power-link-top {
    width: 0px;
    height: 4px;
    background-color: var(--company-color);
    position: absolute;
    left: calc(100% + 399px + 4px);
    top: -50px;
    transition: width .6s ease;
    transition-delay: 0.4s;
}
.power-link-bottom {
    width: 0px;
    height: 4px;
    background-color: var(--company-color);
    position: absolute;
    left: calc(100% + 399px + 4px);
    top: 346px;
    transition: width .6s ease;
    transition-delay: 0.4s;
}
.power-link-right {
    width: 4px;
    min-height: 0px;
    position: absolute;
    top: -50px;
    left: calc(100% + 399px + 4px + 650px);
    background-color: var(--company-color);
    transition: min-height .4s ease;
    transition-delay: 0s;
}

.battery-icon-container:hover .hover-circle,
.battery-icon-container:hover .hover-circle-lg {
    opacity: 0;
    transition-delay: 0s;
}

.battery-icon-container:hover .square-1,
.battery-icon-container:hover .square-2,
.battery-icon-container:hover .square-3 {
    transform: rotate(0deg) scale(1);
    opacity: 1;
    transition-delay: 0s;
}

.battery-icon-container:hover .power-link {
    width: 400px;
    transition-delay: .4s;
}
.battery-icon-container:hover .power-link-down {
    min-height: 200px;
    transition-delay: .8s;
}
.battery-icon-container:hover .power-link-up {
    transform: scaleY(1);
    transition-delay: .8s;
}
.battery-icon-container:hover .power-link-top,
.battery-icon-container:hover .power-link-bottom {
    width: 650px;
    transition-delay: 1.2s;
}
.battery-icon-container:hover .power-link-right {
    min-height: 400px;
    transition-delay: 1.8s;
}

@media(max-width: 1400px) {
    .battery-icon-container:hover .power-link {
        width: 220px;
        transition-delay: .4s;
    }

    .power-link-down {
        left: calc(100% + 219px);
    }
    .power-link-up {
        left: calc(100% + 219px);
    }
    .power-link-top {
        left: calc(100% + 219px + 4px);
    }
    .power-link-bottom {
        left: calc(100% + 219px + 4px);
    }
    .power-link-right {
        left: calc(100% + 219px + 4px + 650px);
    }
}

@media(max-width: 992px) {
    section {
        padding: 6rem 0;
        position: relative;
        overflow: hidden;
    }
    .battery-animated {
        display: none;
    }
    .battery-mobile-container {
        display: flex !important;
        margin-bottom: 4rem;
    }
    .intro-paragraph {
        width: 100% !important;
    }

    .hover-circle {
        width: 80px;
        height: 80px;
        border-radius: 40px;
        border: 3px dashed lightgray;
        position: absolute;
        animation: rotating 10s linear infinite;
        transition: opacity .4s ease;
        transition-delay: 2s;
    }

    .hover-circle-lg {
        width: 120px;
        height: 120px;
        border-radius: 60px;
        border: 2px dashed lightgray;
        position: absolute;
        animation: rotating-counter 30s linear infinite;
        opacity: .3;
        transition: opacity .4s ease;
        transition-delay: 2s;
    }
}
</style>
