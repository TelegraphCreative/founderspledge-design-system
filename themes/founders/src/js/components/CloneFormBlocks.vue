<template>
    <div class="form-clone-groups">
        <div class="form-clone-group__content | form-block">
            <slot name="blocks"></slot>
        </div>
        <div class="form-block">
            <button class="btn -dark -small -add" @click="clone">{{group}}</button>
        </div>
    </div>
</template>
<script type="text/babel">
import $ from "jquery";

export default {
    props: ["group"],
    data() {
        return {
            fieldCounter: 0,
            blockCounter: 1
        };
    },
    // mounted() {}
    methods: {
        clone(e) {
            e.preventDefault();

            const _this = this;
            this.fieldCounter += 1;
            this.blockCounter += 1;

            var template = $(this.$el).find(
                ".form-clone-group__content:first-child"
            );

            // loop through each input
            var section = template
                .clone()
                .find(":input")
                .each(function() {
                    //set id to store the updated section number
                    var newId = this.id + _this.fieldCounter;

                    //update for label
                    $(this)
                        .parent()
                        .attr("for", newId);

                    //update id
                    this.id = newId;
                    this.name = this.name + "-" + _this.blockCounter;
                })
                .end()

                //inject new section
                .insertAfter(template);
            return false;
        }
    }
};
</script>
