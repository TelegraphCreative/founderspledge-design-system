

<template>
    <div class="range-slider">
        <div class="range-slider__headsup">
            <!-- Heads Up - Inline -->
            <div class="headsup -inline">
                <div class="headsup__fig">
                    <h4 class="header-md | text-green | mb-1">
                        $
                        <span class="font-integer">7.3</span>%
                    </h4>
                    <h3 class="header-sm -light">Average</h3>
                </div>
                <div class="headsup__fig -highlight">
                    <h4 class="header-lg | text-green | mb-1">
                        $
                        <span class="font-integer">{{selectedValue}}</span>%
                    </h4>
                    <h3 class="header-sm -light">Your Pledge</h3>
                </div>
                <div class="headsup__fig">
                    <h4 class="header-md | text-green | mb-1">
                        $
                        <span class="font-integer">80</span>%
                    </h4>
                    <h3 class="header-sm -light">Highest</h3>
                </div>
            </div>
        </div>

        <div class="range-slider__slider">
            <input
                type="range"
                :min="min"
                :max="max"
                v-model="selectedValue"
                @change="onUpdate"
                v-bind:style="'--min:' + min + '; --max:' + max + '; --val:' + selectedValue + ';'"
            >
        </div>
    </div>
</template>

<script type="text/babel">
export default {
    props: ["min", "max", "start"],
    data() {
        return {
            selectedValue: this.start
        };
    },
    methods: {
        onUpdate() {
            // Set value attribute (for easier form handling)
            var _R = this.$el.querySelector('[type="range"]');
            _R.setAttribute("value", this.selectedValue);
        }
    }
};
</script>        