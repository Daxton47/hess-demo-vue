<template>
    <section class="text-white py-5 mt-5" style="height: 80vh; background-color: #282b2d; color: #fff;">
        <div class="container">
            <div class="position-relative">

            <div class="row position-relative mb-3">
                <div class="col-6 text-center justify-content-center d-flex">
                    <div class="team-hess">
                        <h4>Lithium-Ion Batteries</h4>
                    </div>
                </div>
                <div class="col-6 text-center d-flex justify-content-center">
                    <div class="team-acid">
                        <h4>Lead Acid Batteries</h4>
                    </div>
                </div>
            </div>
                <div class="vs-tag">VS</div>
            </div>

            <div class="row justify-content-center comparison-row position-relative">
                <div id="windmill-animation"></div>
                <div class="col-4 lithium-col p-2 px-4">
                    Zero Maintenance Cost
                </div>
                <div class="col-2 comparison-col p-2">
                    Maintenance
                </div>
                <div class="col-4 acid-col p-2">
                    In-House or Outsourced
                </div>
            </div>

            <div class="row justify-content-center comparison-row">
                <div class="col-4 lithium-col p-2 px-4">
                    Less than 2 hours
                </div>
                <div class="col-2 comparison-col p-2">
                    Charge Time
                </div>
                <div class="col-4 acid-col p-2">
                    8-10 hours
                </div>
            </div>

            <div class="row justify-content-center comparison-row">
                <div class="col-4 lithium-col p-2 px-4">
                    100% Fleet Availability
                </div>
                <div class="col-2 comparison-col p-2">
                    Opportunity Charge
                </div>
                <div class="col-4 acid-col p-2">
                    Lower availability due to charging
                </div>
            </div>

            <div class="row justify-content-center comparison-row">
                <div class="col-4 lithium-col p-2 px-4">
                    Double the service life, 3000+ Cycles
                </div>
                <div class="col-2 comparison-col p-2">
                    Service Life
                </div>
                <div class="col-4 acid-col p-2">
                   Periodic replacement with 1500 Cycles
                </div>
            </div>

            <div class="row justify-content-center comparison-row">
                <div class="col-4 lithium-col p-2 px-4">
                    No battery rooms needed; completely sealed batteries.
                </div>
                <div class="col-2 comparison-col p-2">
                    Toxin Danger
                </div>
                <div class="col-4 acid-col p-2">
                   Toxic lead, corrosive acid, and explosive gas. Must be charged in seperate room
                </div>
            </div>

            <div class="row justify-content-center comparison-row">
                <div class="col-4 lithium-col p-2 px-4">
                    Up to 50% Energy Savings
                </div>
                <div class="col-2 comparison-col p-2">
                    Energy Saving
                </div>
                <div class="col-4 acid-col p-2">
                   Outdated and inefficient technology
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import lottie from 'lottie-web'
var animation = {}

export default {
    mounted: function() {
        animation = lottie.loadAnimation({
            container: document.getElementById('windmill-animation'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('@/assets/animations/Windmill.json')
        })

        animation.play()
    },
}
</script>


<style scoped>
    section {
        position: relative;
    }
    .section-title {
        margin-bottom: 2rem;
    }

    .vs-tag {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        font-weight: bold;
    }

#windmill-animation {
    width: 100px;
    position: absolute;
    left: 100px;
    top: -70px;
}

    .team-hess {
        padding: .8rem 3rem;
        color: white;
        /*background: rgb(206,58,70);
        background: linear-gradient(315deg, rgba(206,58,70,1) 0%, rgba(255,96,110,1) 100%);*/
        border-radius: 80px;
    }

        .team-hess h4 {
            margin: 0;
        }

    .team-acid {
        padding: .8rem 3rem;
        color: white;
        /*background: rgb(38,108,157);
        background: linear-gradient(315deg, rgba(38,108,157,1) 0%, rgba(96,177,255,1) 100%);*/
        border-radius: 80px;
    }

        .team-acid h4 {
            margin: 0;
        }

    .lithium-col {
        background-color: var(--company-color);
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        text-align: end;
        box-shadow: inset 0 0 #222;
    }
    .comparison-col {
        background-color: transparent;
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 15px;
    }
    .comparison-row {
        margin-bottom: 1rem;
    }
    .acid-col {
        background-color: rgb(45, 127, 185);
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    }

</style>