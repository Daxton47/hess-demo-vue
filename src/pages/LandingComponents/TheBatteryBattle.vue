<template>
    <section id="battery-battle">
        <div class="container" id="desktopView">
            <div class="text-center" style="margin-bottom: 5rem !important;">
                <h3>Ever considered the pros of going <span class="battle-tag lithium">Lithium</span> over <span class="battle-tag acid">Lead Acid</span> batteries?</h3>
            </div>

            <div class="position-relative">
                <div class="row position-relative mb-4">
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
                <div id="skull-animation"></div>
                <div class="col-5 lithium-col p-3 px-4">
                    Zero Maintenance Cost
                </div>
                <div class="col-2 comparison-col p-3">
                    Maintenance
                </div>
                <div class="col-5 acid-col p-3">
                    In-House or Outsourced
                </div>
            </div>

            <div class="row justify-content-center comparison-row">
                <div class="col-5 lithium-col p-3 px-4">
                    Less than 2 hours
                </div>
                <div class="col-2 comparison-col p-3">
                    Charge Time
                </div>
                <div class="col-5 acid-col p-3">
                    8-10 hours
                </div>
            </div>

            <div class="row justify-content-center comparison-row">
                <div class="col-5 lithium-col p-3 px-4">
                    100% Fleet Availability
                </div>
                <div class="col-2 comparison-col p-3">
                    Opportunity Charge
                </div>
                <div class="col-5 acid-col p-3">
                    Lower availability due to charging
                </div>
            </div>

            <div class="row justify-content-center comparison-row">
                <div class="col-5 lithium-col p-3 px-4">
                    Double the service life, 3000+ Cycles
                </div>
                <div class="col-2 comparison-col p-3">
                    Service Life
                </div>
                <div class="col-5 acid-col p-3">
                   Periodic replacement with 1500 Cycles
                </div>
            </div>

            <div class="row justify-content-center comparison-row">
                <div class="col-5 lithium-col p-3 px-4">
                    No battery rooms needed; completely sealed batteries.
                </div>
                <div class="col-2 comparison-col p-3">
                    Toxin Danger
                </div>
                <div class="col-5 acid-col p-3">
                   Toxic lead, corrosive acid, and explosive gas. Must be charged in seperate room
                </div>
            </div>

            <div class="row justify-content-center comparison-row">
                <div class="col-5 lithium-col p-3 px-4">
                    Up to 50% Energy Savings
                </div>
                <div class="col-2 comparison-col p-3">
                    Energy Saving
                </div>
                <div class="col-5 acid-col p-3">
                   Outdated and inefficient technology
                </div>
            </div>
        </div>

        <div id="mobileView">
            <div class="container">
                <div class="text-center" style="margin-bottom: 5rem !important;">
                    <h3>Ever considered the pros of going <span class="battle-tag lithium">Lithium</span> over <span class="battle-tag acid">Lead Acid</span> batteries?</h3>
                </div>
            </div>
            <h5 class="text-center mb-3 fw-bold">Maintenance</h5>
            <div class="d-flex w-100">
                <div class="lithium-mobile mobile-card">Zero Maintenance Cost</div>
                <div class="acid-mobile mobile-card">In-House or Outsourced</div>
            </div>

            <h5 class="text-center mb-3 fw-bold mt-4">Charge Time</h5>
            <div class="d-flex w-100">
                <div class="lithium-mobile mobile-card">Less than 2 hours</div>
                <div class="acid-mobile mobile-card">8-10 hours</div>
            </div>

            <h5 class="text-center mb-3 fw-bold mt-4">Opportunity Charge</h5>
            <div class="d-flex w-100">
                <div class="lithium-mobile mobile-card">100% Fleet Availability</div>
                <div class="acid-mobile mobile-card">Lower availability due to charging</div>
            </div>

            <h5 class="text-center mb-3 fw-bold mt-4">Service Life</h5>
            <div class="d-flex w-100">
                <div class="lithium-mobile mobile-card">Double the service life, 3000+ cycle</div>
                <div class="acid-mobile mobile-card">Periodic replacement with 1500 Cycles</div>
            </div>

            <h5 class="text-center mb-3 fw-bold mt-4">Toxin Danger</h5>
            <div class="d-flex w-100">
                <div class="lithium-mobile mobile-card">No battery rooms needed; completely sealed batteries.</div>
                <div class="acid-mobile mobile-card">Toxic lead, corrosive acid, and explosive gas. Must be charged in seperate room</div>
            </div>

            <h5 class="text-center mb-3 fw-bold mt-4">Energy Saving</h5>
            <div class="d-flex w-100">
                <div class="lithium-mobile mobile-card">Up to 50% Energy Savings</div>
                <div class="acid-mobile mobile-card">Outdated and inefficient technology</div>
            </div>
        </div>
    </section>
</template>

<script>
import lottie from 'lottie-web'
var animation = {}
var skullAnimation = {}

export default {
    mounted: function() {
        animation = lottie.loadAnimation({
            container: document.getElementById('windmill-animation'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('@/assets/animations/Windmill.json')
        })
        skullAnimation = lottie.loadAnimation({
            container: document.getElementById('skull-animation'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('@/assets/animations/skull.json')
        })

        animation.play()
        skullAnimation.play()
    },
}
</script>


<style scoped>
.mobile-card {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    color: #fff;
    font-weight: bold;
    padding: 1rem 1.85rem;
}
.lithium-mobile {
    background-color: var(--company-color);
    clip-path: polygon(0 0, 100% 0, 92.5% 100%, 0% 100%);
}
.acid-mobile {
    background-color: rgb(45, 127, 185);
    clip-path: polygon(7.5% 0, 100% 0, 100% 100%, 0% 100%);
}

#battery-battle {
    background-color: #dcdfe2;
    padding: 8rem 0;
}

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
    left: 50px;
    top: -70px;
}
#skull-animation {
    width: 100px;
    position: absolute;
    right: 0px;
    top: -80px;
}

.battle-tag {
    font-weight: bolder;
    text-decoration: underline dotted;
}

.lithium {
    color: var(--company-color);
}
.acid {
    color: rgb(45, 127, 185);
}

    .team-hess {
        padding: .8rem 3rem;
        font-weight: bold;
        /*background: rgb(206,58,70);
        background: linear-gradient(315deg, rgba(206,58,70,1) 0%, rgba(255,96,110,1) 100%);*/
    }

        .team-hess h4 {
            margin: 0;
        }

    .team-acid {
        padding: .8rem 3rem;
        /*background: rgb(38,108,157);
        background: linear-gradient(315deg, rgba(38,108,157,1) 0%, rgba(96,177,255,1) 100%);*/
    }

        .team-acid h4 {
            margin: 0;
        }

    .lithium-col {
        background-color: var(--company-color);
        text-align: end;
        box-shadow: inset 0 0 #222;
        user-select: none;
        transition: transform .4s ease;
        cursor: pointer;
        color: white;
        border-right: 10px solid var(--company-color-dark);
        position: relative;
    }

    .lithium-col::after {
        content: " ";
        position: absolute;
        width: 30px;
        height: 93px;
        background-color: #dcdfe2;
        left: 10px;
        top: -6px;
        transform: translateX(-100%) rotate(-15deg);
    }
    .comparison-col {
        background-color: transparent;
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 15px;
    }
    .comparison-row {
        margin-bottom: 1.6rem;
    }
    .acid-col {
        background-color: rgb(45, 127, 185);
        user-select: none;
        transition: transform .4s ease;
        cursor: pointer;
        color: white;
        border-left: 10px solid #236594;
        position: relative;
    }

    /* Lol, Clip path wouldn't work with varying heights */
    .acid-col::after {
        content: " ";
        position: absolute;
        width: 30px;
        height: 93.5px;
        background-color: #dcdfe2;
        right: 10px;
        top: -6px;
        transform: translateX(100%) rotate(15deg);
    }
    .lithium-col:hover {
        transform: scale(1.03);
    }
    .acid-col:hover {
        transform: scale(1.03);
    }

    #desktopView {
        display: block;
    }
    #mobileView {
        display: none;
    }

    @media(max-width: 992px) {
        #desktopView {
            display: none;
        }
        #mobileView {
            display: block;
        }
    }


</style>