<template>
    <div class="profile-card">

        <div class="profile-card__content" @click="open" :class='triggerClass'>
            <slot name="trigger"></slot>
        </div>        

        <transition name="fade">
            <div class="modal -profile | modal__box" v-if="isActive">

                    <!-- Close -->
                    <div @click="close" class="modal__close">
                        <IconClose :classes="'icon--close -sm text-white'"></IconClose>
                    </div>

                    <div class="modal__content ">
                        
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
                            <div class="modal__detail">
                                <slot name="article">
                                    <p>Article text…</p>
                                </slot>
                            </div>
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
                bodyEl: null
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
                this.isActive = false;
                this.bodyEl.classList.remove('overflow-hidden');
            },
            open(){
                this.isActive = true;
                this.bodyEl.classList.add('overflow-hidden');
            }
        },
        mounted() {
            // Set 
            this.bodyEl = document.querySelector('body');  
            
            // Handle escape key press            
            document.body.addEventListener('keyup', e => {
                if (e.keyCode === 27) {
                    this.close();
                }
            })
        },
        components: {
            IconClose
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

