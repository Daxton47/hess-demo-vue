<template>
    <div class="wrapper" id="initialLoader">
        <div class="fill-circle">
            <div class="eagle-logo"></div>
            <div id="halfclip">
                <div class="halfcircle" id="clipped">
                </div>
            </div>
            <div class="halfcircle" id="fixed">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created: function() {
        setTimeout(() => {
            let wrapper = document.getElementById('initialLoader')
            wrapper.classList.add('wrapper-hidden')
        }, 1600)
    }
}
</script>

<style scoped>

.wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--dark-background);
    z-index: 99999999;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeOutWrapper .8s ease;
    animation-delay: 900ms;
    animation-fill-mode: forwards;
}

.wrapper-hidden {
    display: none;
}

.eagle-logo {
    background-image: url('~@/assets/logos/EagleLogo.svg');
    height: 65%;
    width: 65%;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-30%);
    animation: eagle-flyin 1s ease;
    animation-fill-mode: forwards;
}

@keyframes eagle-flyin {
    from {
        opacity: 0;
    }
    to {
        transform: translateY(-50%) translateX(-50%);
        opacity: 1;
    }
}

.fill-circle {
    width: 100px;
    height: 100px;
    position: relative;
}

@keyframes fadeOutWrapper {
    from { opacity: 1; }
    to { opacity: 0; display: none; }
}

#halfclip {
    width: 50%;
    height: 100%;
    right: 0px;
    position: absolute;
    overflow: hidden;
    transform-origin: left center;
    animation: cliprotate .6s 1;
    transform: rotate(180deg);
}

@keyframes cliprotate {
    0% {transform: rotate(0deg);}
    50% {transform: rotate(0deg);}
    50.01% {transform: rotate(180deg);}
    100% {transform: rotate(180deg);}
}

.halfcircle {
    box-sizing: border-box;
    height: 100%;
    right: 0px;
    position: absolute;
    border: solid 2px transparent;
    border-top-color: #ce3a46;
    border-left-color: #ce3a46;
    border-radius: 50%;
}

#clipped {
    width: 200%;
    transform: rotate(-45deg);
    transform: rotate(135deg);
    animation: rotate .3s linear 2;
}

@keyframes rotate {
    0% {transform: rotate(-45deg);}
    100% {transform: rotate(135deg);}
}

#fixed {
    width: 100%;
    transform: rotate(135deg);  
    opacity: 0;
    opacity: 1;
    animation: showfixed .6s 1;
}

@keyframes showfixed {
    0% {opacity: 0;}
    49.99% {opacity: 0;}
    50% {opacity: 1;}
    100% {opacity: 1;}
}
</style>