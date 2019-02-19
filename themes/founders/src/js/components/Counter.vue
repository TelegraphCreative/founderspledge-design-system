<template>
    <span class="counter | font-integer" id="counter">{{end}}</span>
</template>

<script type="text/babel">
import CountUp from "countup.js";
import inView from "in-view";

export default {
    props: ["start", "end"],
    mounted() {
        const _this = this;

        // Counter Settings
        var options = {
            useEasing: true,
            useGrouping: true
        };

        window.addEventListener("load", function() {
            inView(".counter").once("enter", el => {
                // Initialize Counter
                var counterEl = new CountUp(_this.$el, _this.start, _this.end);
                counterEl.start();
            });

            // let sections = document.querySelectorAll('.counter');
            // sections.forEach(section => {
            //     inView('.counter').once('enter', el => {
            //         // Initialize Counter
            //         var counterEl = new CountUp(section, _this.start, _this.end);
            //         counterEl.start()
            //     });
            // });
        });
    }
};
</script>