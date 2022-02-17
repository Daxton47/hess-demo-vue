<template>
    
    <section id="battery-intro">
        <!-- <div class="moving-cog"></div> -->
        <div class="container">
            <div class="d-flex align-items-center">
                <div style="width: 60%">
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
                <div style="width: 40%" class="text-left">
                    <h1 class="fw-bold">We know batteries.</h1>
                    <hr style="width: 400px;">
                    <h5 class="my-4">We are dedicated to finding the most efficient solution to your energy needs.</h5>
                    <h5>Ready from some immediate ROI? Give us a call or drop us a line</h5>
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

section {
    padding: 20rem 0;
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
</style>
