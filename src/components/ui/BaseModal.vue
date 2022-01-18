<template>
        <div class="backdrop" v-if="open"></div>
        <div class="hs-modal" :class="modalSize" v-if="open">
            <div class="hs-modal-header">
                <slot v-if="header" name="header"></slot>
            </div>
            <div class="hs-modal-content">
                <slot></slot>
            </div>
        </div>
</template>

<script>
export default {
    props: ['title', 'open', 'size', 'header'],
    computed: {
        modalSize() {
            switch(this.size) {
                case 'sm': return 'hs-modal-sm'
                case 'md': return 'hs-modal-md'
                case 'lg': return 'hs-modal-lg'
                case 'xl': return 'hs-modal-xl'
                default: return 'hs-modal-md'
            }
        }
    },
    watch: {
        open: function(val) {
            console.log("open changed")
            console.log(val)
            if (val) {
                document.body.style.overflow = 'hidden'
            } else {
                document.body.style.overflow = 'initial'
            }
        }
    }
}
</script>

<style scoped>
    .backdrop {
        position: fixed;
        background-color: rgba(0,0,0,0.3);
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: 1000;
        animation: fade-in .3s ease;
    }

    .hs-modal {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        background-color: white;
        min-width: 425px;
        height: 425px;
        z-index: 1001;
        border-radius: 4px;
        animation: fade-in-slide .4s ease;
    }

    .hs-modal-md {
        min-width: 680px;
    }

    .hs-modal-lg {
        min-width: 720px;
    }

    .hs-modal-xl {
        min-width: 800px;
    }

    .hs-modal-header {
        padding: .8rem;
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @keyframes fade-in-slide {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-40%);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(-50%);
        }
    }

</style>
