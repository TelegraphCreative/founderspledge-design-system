<template>
    <div v-bind:class="{ '-active': isActive }">
        <div @click="toggle" class="resource__content">
            <slot name="accordion-header"></slot>
        </div>
        <transition name="fade">
            <slot name="accordion-content" v-if="isActive"></slot>
        </transition>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isActive: false
        };
    },
    methods: {
        toggle(e) {
            if (this.isActive) {
                this.isActive = false;
            } else {
                this.isActive = true;
            }
        }
    }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
