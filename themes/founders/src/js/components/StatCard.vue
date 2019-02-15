<template>
   <div class="stat-card" :class="{'-active' : isActive}" @mouseover="onActive" @mouseleave="onInactive">
        <div class="stat-card__content">

            <div class="stat-card__header">
                <slot name="header"></slot>
            </div>

            <slot name="descr"></slot>   

        </div>
    </div>
</template>

<script type="text/babel">
  
  import inView from 'in-view';

  export default {
    props: [
        'active'
    ],
    data(){
        return {
            isActive: null
        }
    },
    mounted(){
        const _this = this;

        window.addEventListener('load', function() {
            let card = _this.$el;

            inView('.stat-card').once('enter', el => {

                setTimeout(() => {
                    if(_this.active){
                        _this.isActive = true
                    }
                }, 800);
            });
            
        });
    },
    methods: {
        onActive(){
            this.isActive = true
            stopPropagation
        },
        onInactive(){
            this.isActive = false
        },
    }
  };

</script>