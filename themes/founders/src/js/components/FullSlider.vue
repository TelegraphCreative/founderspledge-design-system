<template>

    <div class="tiny-slider">
        
        <!-- Slides -->
        <div class="slider | opacity-0">
            <slot name="slides"></slot>
        </div>

        <!-- Slider Controls -->
        <div class="slider-controls">

            <!-- Controls/Info -->
            <div class="controls-info">
                <!-- Controls -->
                <ul class="controls | flex justify-between">
                    <li class="prev | mr-3">
                        <IconArrow :classes="'icon--arrow -flip -sm'"></IconArrow>
                    </li>
                    <li class="next | ml-3">
                        <IconArrow :classes="'icon--arrow -sm'"></IconArrow>
                    </li>
                </ul>
                <!-- Info -->
                <div class="info">
                    <span class="current" v-html="current"></span> of <span class="total" v-html="total"></span>
                </div>
            </div>

            <!-- Nav -->
            <ul class="nav">
                <slot name="slideNav"></slot>
            </ul> 
            
        </div>

    </div>

</template>

<script>

import { tns } from 'tiny-slider/src/tiny-slider';
import IconArrow from '../icons/icon-arrow--r';

import { timeout } from 'q';
    
    export default {
        name: "profileSlider",

        props: [
            'opt'
        ],

        data(){
            return {
                total: null,
                current: null
            }
        },

        mounted() {

            let _this = this
            let Slides = _this.$el.querySelector('.slider')
            let Controls = _this.$el.querySelector('.controls')
            let Nav = _this.$el.querySelector('.nav')
            let Options = _this.opt 

            window.addEventListener('load', function() {
                var slider = tns({
                    container: Slides,
                    slideBy: Options.slideBy,
                    items: Options.items,
                    mode: Options.mode,
                    
                    controlsContainer: Controls,
                    navContainer: Nav,
                    navAsThumbnails: true,

                    autoplay: Options.autoplay,
                    // autoplayTimeout: Options.autoplayTimeout,
                    // mouseDrag: Options.mouseDrag,
                    speed: Options.speed,
                    // center: Options.center,
                    loop:  true,
                    
                    // fixedWidth: Options.fixedWidth,    
                    // controls: Options.controls,
                    lazyload: true,
                    onInit: onInit(),
                    gutter: Options.gutter,
                    responsive: {
                        0: {
                            "edgePadding": 0
                        },
                        991: {
                            "edgePadding": Options.edgePadding
                        }
                    }
                });

                // Initial UI
                setTimeout(function(){
                    let info = slider.getInfo();
                    // console.log(info)
                    customUi();
                }, 1000)

                // Initial Load
                function onInit(){
                    Slides.classList.remove('opacity-0');
                }

                // Update UI on Change
                slider.events.on('transitionEnd', customUi);

                // UI Info
                function customUi(){
                    let info = slider.getInfo();
                    let allSlides = Slides.querySelectorAll('.tns-slide-active')
                    allSlides.forEach(slide => {
                        slide.classList.remove('active');
                    });
                    Slides.querySelector('.tns-slide-active').classList.add('active');

                    _this.total = info.navItems.length
                    _this.current = info.displayIndex

                };

            });
            
        },

        components: {
            IconArrow
        }
    }
</script>
