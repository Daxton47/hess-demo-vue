<template>
    <div class="position-relative">
        <TheLandingSection :isScrolled="pageScrolled" />
        <TheBatteryIntroduction />
        <TheBatteryBattle />
        <TheForkliftSection />
        <TheProductsSection />
        <section id="companySection">
            <div class="container text-white">
                <div class="text-center display-container">
                    <h1 class="section-title mb-3">Our Team</h1>
                    <hr class="mb-5" />
                    <p class="brand-blurb">H.E.S.S. Energy Storage Systems is well known as an experienced and professional Northern California -based lithium power source producer. We provide clients with top of the line services that cater to their specific project needs and management requirements, and all at the most competitive rates. Contact us today and find out how we can help.</p>
                    
                    <a href="tel:8888888888" class="call-button">Call Us</a>
                </div>
            </div>
        </section>
    </div>

</template>

<script>
import TheLandingSection from './LandingComponents/TheLandingSection.vue'
import TheBatteryIntroduction from './LandingComponents/TheBatteryIntroduction.vue'
import TheForkliftSection from './LandingComponents/TheForkliftSection.vue'
import TheBatteryBattle from './LandingComponents/TheBatteryBattle.vue'
import TheProductsSection from './LandingComponents/TheProductsSection.vue'

export default {
    components: {
        TheLandingSection,
        TheBatteryIntroduction,
        TheForkliftSection,
        TheBatteryBattle,
        TheProductsSection
    },
    data() {
        return {
            direction: 'forward',
            pageScrolled: false,
            showContactForm: false
        }
    },
    mounted: function() {
        var batteriesRect = document.getElementById('battery-intro').getBoundingClientRect()
        var batteryBattleRect = document.getElementById('battery-battle').getBoundingClientRect()
        var batteriesLocationTop = batteriesRect.top + window.scrollY
        var batteriesLocationBottom = batteryBattleRect.bottom + window.scrollY

        var forkliftRect = document.getElementById('forklift-section').getBoundingClientRect()
        var forkliftSectionLocationTop = forkliftRect.top + window.scrollY
        var forkliftSectionLocationBottom = forkliftRect.bottom + window.scrollY

        var productRect = document.getElementById("products-section").getBoundingClientRect()
        var productSectionLocationTop = productRect.top + window.scrollY
        var productSectionLocationBottom = productRect.bottom + window.scrollY

        var companyRect = document.getElementById('companySection').getBoundingClientRect()
        var companyTop = companyRect.top + window.scrollY
        var companyBottom = companyRect.bottom + window.scrollY

        var landingNavs = document.getElementsByClassName('landing-nav')

        // Had to implement my own scroll-spy since Bootstrap 5 wasn't working with Vue 3
        window.addEventListener('scroll', () => {
            this.pageScrolled = window.scrollY > 40
            for (var i = 0; i < landingNavs.length; i++) {
                landingNavs[i].classList.remove("active")
            }

            if (window.scrollY <= batteriesLocationTop - 2) {
                var navHome = document.getElementById("navHome")
                navHome.classList.add("active")
            }
            else if (window.scrollY >= batteriesLocationTop - 10 &&
                window.scrollY < batteriesLocationBottom - 100) {
                var navBatteries = document.getElementById("navBatteries")
                navBatteries.classList.add("active")
            }
            else if (window.scrollY >= forkliftSectionLocationTop - 100 &&
                window.scrollY < forkliftSectionLocationBottom + 1) {
                    var navForklifts = document.getElementById('navForklifts')
                    navForklifts.classList.add('active')
                }
            else if (window.scrollY >= productSectionLocationTop - 100 &&
                    window.scrollY < productSectionLocationBottom - 100) {
                var navProduct = document.getElementById("navProducts")
                navProduct.classList.add("active")
            }
            else if (window.scrollY > companyTop - 100 &&
                    window.scrollY < companyBottom) {
                var navCompany = document.getElementById("navTeam")
                navCompany.classList.add("active")
            }
        })
    }
}
</script>

<style scoped>
    section {
        position: relative;
    }
    .section-title {
        margin-bottom: 2rem;
        text-transform: uppercase;
        font-weight: 800;
        color: white !important;
        position: relative;
    }
    hr {
        width: 300px;
        margin-left: auto;
        margin-right: auto;
        border-top: 2px solid var(--company-color);
        opacity: 1;
        margin-top: .5rem;
    }
    .brand-blurb {
        opacity: 0.85;
        line-height: 1.9;
        font-weight: 600;
        font-size: 19px;
        margin-bottom: 3rem;
    }

    .display-container {
        background-color: rgba(255,255,255,0.2
        );
        border-radius: 8px;
        padding: 2rem;
        backdrop-filter: blur(14px);
    }

    #companySection {
        padding: 10rem 1rem;
        position: relative;
        background-image: url("../assets/img/city-night.jpg");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }
    #companySection::before {
        content: "";
        position: absolute;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        background-color: rgba(0,0,0,0.5);
    }

    .call-button {
        padding: .5rem 4rem;
        outline: none;
        border: none;
        border-radius: 20rem;
        background-color: var(--company-color);
        color: white !important;
        margin-top: 2rem;
        font-weight: bold;
    }

        .call-button:hover {
            background-color: var(--company-color-dark);
        }

    @media(max-width: 500px) {
        .display-container {
            padding: 2rem .5rem;
        }
        #companySection {
            padding: 10rem .5rem;
        }
    }
</style>
