<template>
    <TheLandingSection />
    <TheProductSection />
    <TheBatteryBattle />
    <section class="py-5 my-5">
        <div class="container">
            <div class="text-center">
                <h3 class="section-title">Our Team</h3>
                <p class="brand-blurb">H.E.S.S. Energy Storage Systems is well known as an experienced and professional San Francisco -based lithium power source producer. We provide clients with top of the line services that cater to their specific project needs and management requirements, and all at the most competitive rates. Contact us today and find out how we can help.</p>
            </div>
        </div>
    </section>
</template>

<script>
import TheLandingSection from './LandingComponents/TheLandingSection.vue'
import TheProductSection from './LandingComponents/TheProductSection.vue'
import TheBatteryBattle from './LandingComponents/TheBatteryBattle.vue'

export default {
    components: {
        TheLandingSection,
        TheProductSection,
        TheBatteryBattle
    },
    data() {
        return {
            direction: 'forward',
            isScrolled: false
        }
    },
    mounted: function() {
        window.addEventListener('scroll', () => {
            this.isScrolled = window.scrollY > 40
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
    }
    .brand-blurb {
        opacity: 0.9;
        line-height: 1.8;
        font-weight: 500;
        font-size: 18px;
    }
</style>
