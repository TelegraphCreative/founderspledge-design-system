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
                        
                        <!-- Gallery Slider -->
                        <div class="gallery-slider | slider-reset -no-nav | opacity-0">

                            <!-- Slides -->
                            <div class="gallery-slides">
                                <slot name="gallery"></slot>
                            </div>

                            <!-- Slider Controls -->
                            <div class="slider-controls -green-box">

                                <!-- Controls/Info -->
                                <div class="controls-info">
                                    <!-- Controls -->
                                    <ul class="controls | flex justify-between">
                                        <li class="prev duration-1 timing-1 property-colors">
                                            <IconArrow :classes="'icon--arrow -flip -sm'"></IconArrow>
                                        </li>
                                        <li class="next duration-1 timing-1 property-colors">
                                            <IconArrow :classes="'icon--arrow -sm'"></IconArrow>
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>
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
                bodyEl: null
            }
        },
        methods: {
            toggleModal(){
                let that = this

                // Handle Modal
                that.isActive = !that.isActive;
                this.bodyEl.classList.toggle('overflow-hidden');
                                
                // Handle Slider
                if(this.isActive) {   
                    
                    // Wait for Transiiton
                    setTimeout(function(){
                        let GallerySlider = that.$el.querySelector('.gallery-slider');
                        let Slides = that.$el.querySelector('.gallery-slides');
                        let Controls = that.$el.querySelector('.controls');
                        var slider = tns({
                            container: Slides,
                            controlsContainer: Controls,
                            slideBy: 1,
                            items: 1,
                            mode: "carousel",
                            loop:  true,
                            lazyload: true,
                            arrowKeys: true,
                            gutter:16,
                            onInit: onInit()
                        });

                        // Initial Load
                        function onInit(){
                            Slides.classList.add('ready');
                            GallerySlider.classList.remove('opacity-0')
                        }

                    },150);

                }
                
            }
        },
        mounted() {

            // Set
            this.bodyEl = document.querySelector('body');
            
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

