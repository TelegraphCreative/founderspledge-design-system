<template>
    <div v-click-outside="hide">
        <nav aria-label="Founders Pledge Main Menu" class="site-menu" :class="{'-active' : isActive}">
            <div class="site-header__menu__container | container gutter-lg">

                <a href="/" class="site-header__logo">
                    <slot name="logo"></slot>
                </a>

                <div @click="toggleMenu" class="btn--toggle" :class="{'-active' : isActive}">
                    <span></span><span></span><span></span><span></span>
                </div>

                <slot name="menu"></slot>

            </div>

            <!-- Offscreen Menu -->
            <transition name="fade-right">
                <div v-if="isActive" class="site-header__menu__offscreen">

                    <slot name="menu"></slot>

                </div>
            </transition>
        </nav>
    </div>
</template>

<script type="text/babel">
import click_outside from '../directives/ClickOutslide';
require('intersection-observer');


export default {
    data(){
        return {
            isActive: false
        }
    },
    mounted() {
        // Handle Escape
        document.body.addEventListener('keyup', e => {
            if (e.keyCode === 27) {
                this.isActive = false
            }
        });

    },
    methods: {
        hide(){
            this.isActive = false
        },

        toggleMenu(){
            
            // Handle Toggle
            if(!this.isActive){
                // Open
                this.isActive = true

            } else {
                // Close
                this.isActive = false
            }

        }
    },
    directives: {
        'click-outside': click_outside
    }
}
</script>

<style>
    /* Offscreen Transitions */
    .fade-right-enter-active, .fade-right-leave-active {
        transition: .3s cubic-bezier(0.71, -0.01, 0.25, 0.65) transform;
    }
    .fade-right-enter, .fade-right-leave-to {
        transform: translate(100%, 0);
    }
</style>

