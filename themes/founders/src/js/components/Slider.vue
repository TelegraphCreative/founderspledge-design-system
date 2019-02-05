<template>

    <div class="tiny-slider">
        
        <!-- Slides -->
        <div class="slider | opacity-0">
            <slot name="slides"></slot>
        </div>

        <!-- Slider Controls -->
        <div class="slider-controls -light">

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
            let Options = _this.opt
            
            window.addEventListener('load', function() {
                var slider = tns({
                    container: Slides,
                    items: Options.items,
                    mode: Options.mode,
                    controlsContainer: Controls,
                    navAsThumbnails: true,
                    autoplay: Options.autoplay,
                    onInit: onInit(),
                    lazyload: true,
                    gutter: 10,
                    responsive: {
                        0: {
                            edgePadding: 0
                        },
                        991: {
                            edgePadding: Options.edgePadding
                        }
                    }
                });

                // Initial Load
                function onInit(){
                    Slides.classList.remove('opacity-0');
                }

                // Initial UI
                setTimeout(function(){
                    let info = slider.getInfo();
                    customUi();
                }, 1000)

                // Update UI on Change
                slider.events.on('transitionEnd', customUi);

                // UI Info
                function customUi(){
                    let info = slider.getInfo();

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
