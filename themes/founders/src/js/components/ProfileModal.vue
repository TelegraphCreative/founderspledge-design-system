<template>
    <div class="profile-card" v-click-outside="close">

        <div class="profile-card__content" @click="toggleModal" :class='triggerClass'>
            <slot name="trigger"></slot>
        </div>        

        <transition name="fade">
            <div class="modal -profile | modal__box" v-if="isActive">

                    <!-- Close -->
                    <div @click="toggleModal" class="modal__close">
                        <IconClose :classes="'icon--close -sm text-green'"></IconClose>
                    </div>

                    <div class="modal__content">
                        
                        <!-- Aside: Content -->
                        <div class="modal__aside -content">
                            <slot name="aside"></slot>
                        </div>

                        <!-- Main -->
                        <div class="modal__main">
                            <!-- Header -->
                            <header class="modal__header">
                                <slot name="header">
                                    <h3>Modal Header</h3>
                                </slot>
                            </header>

                            <!-- Article -->
                            <article class="modal__detail">
                                <slot name="article">
                                    <p>Article text…</p>
                                </slot>
                            </article>
                        </div>

                        <!-- Asice: Media -->
                        <div class="modal__aside -media" v-if="hasImage">
                            <slot name="image"></slot>
                        </div>      
                        
                    </div>

            </div>

        </transition>

    </div>
</template>
<script>
    import IconClose from '../icons/icon-close';
    import click_outside from '../directives/ClickOutslide';

    export default {
        props: {
            // Classes and btn settings
            triggerClass : { 
                type: String,
                required: false
            },
            options : { 
                type: Object,
                required: false,
                default(){
                    return {}
                }
            }
        },
        data(){
            return {
                isActive: false,
            }
        },
        computed: {
            // Handle layout classes
            modalClasses(){
               if(this.options.modalClass) {
                return this.options.modalClass
               } 
            },

            // Adjust layout for image
            hasImage() {
                return this.$slots.image
            },
        },
        methods: {
            close(){
                this.isActive = false
            },
            toggleModal(){
                this.isActive = !this.isActive;

                document.querySelector('body').classList.toggle('overflow-hidden');
            }
        },
        mounted() {
            // Handle escape key press
            document.body.addEventListener('keyup', e => {
                if (e.keyCode === 27) {
                    this.isActive = false
                }
            })
        },
        components: {
            IconClose
        },
        directives: {
            'click-outside': click_outside
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

