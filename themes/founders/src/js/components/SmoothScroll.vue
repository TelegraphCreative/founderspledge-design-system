<template>
    <button @click="scrollTo" :href="anchor" class="js-section-anchor">
        <slot></slot>
    </button>
</template>

<script>
    import smoothscroll from 'smoothscroll-polyfill';

    export default {
        props: [
            'anchor',
            'offset'
        ],
        methods: {
            scrollTo(){

                // Kick off the polyfill!
                smoothscroll.polyfill();


                // Handle smooth scroll
                let _this = this,
                    anchor = _this.anchor,
                    offset = _this.offset,
                    anchor_element = document.querySelector(anchor);
                
                window.scroll({
                    behavior: 'smooth',
                    left: 0,
                    top: anchor_element.offsetTop - offset
                });

            }
        }
    }
</script>