<template>
    <div class="gallery-modal">

        <!-- Trigger -->
        <div class="gallery-modal__content" @click="toggleModal">
            <slot name="trigger"></slot>
        </div>        

        <!-- Modal -->
        <transition name="fade">
            <div class="modal -gallery | modal__box" v-if="isActive">

                <!-- Close -->
                <div @click="toggleModal" class="modal__close">
                    <IconClose :classes="'icon--close -sm text-green'"></IconClose>
                </div>
                
                <!-- Content -->
                <div class="modal__content">
                    <!-- Main -->
                    <div class="modal__main">
                        
                        <!-- Slides -->
                        <div class="gallery-slides | slider-reset -no-controls">
                            <slot name="gallery"></slot>
                        </div>

                    </div>
                </div>

            </div>
        </transition>

    </div>
</template>
<script>
    import IconClose from '../icons/icon-close';
    import IconArrow from '../icons/icon-arrow--r';

    import { tns } from 'tiny-slider/src/tiny-slider';

    export default {
        data(){
            return {
                isActive: false,
            }
        },
        methods: {
            toggleModal(){
                let that = this

                // Handle Modal
                that.isActive = !that.isActive;
                document.querySelector('body').classList.toggle('overflow-hidden');
                                
                // Handle Slider
                if(this.isActive) {
                    
                    // Wait for Transiiton
                    setTimeout(function(){
                        let Slides = that.$el.querySelector('.gallery-slides');
                        var slider = tns({
                            container: Slides,
                            slideBy: 1,
                            items: 1,
                            mode: "carousel",
                            loop:  true,
                            lazyload: true,
                            arrowKeys: true,
                            gutter:16
                        });
                    },150);

                }
                
            }
        },
        mounted() {
            
            // Handle escape key press
            document.body.addEventListener('keyup', e => {
                if (e.keyCode === 27) {
                    this.isActive = false
                }
            });

        },
        components: {
            IconClose,
            IconArrow
        }
    }
</script>

<style>
    /* Modal Transitions */
    .fade-enter-active, .fade-leave-active {
        transition: opacity .15s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>

