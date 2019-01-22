// Vue
window.Vue = require('vue')


// Directives
Vue.directive('click-outside', {
    bind: function (el, binding, vNode) {
        // Provided expression must evaluate to a function.
        if (typeof binding.value !== 'function') {
        const compName = vNode.context.name
        let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`
        if (compName) {
            warn += `Found in component '${compName}'`
        }

        console.warn(warn)
        }
        // Define Handler and cache it on the element
        const bubble = binding.modifiers.bubble
        const handler = (e) => {
        if (bubble || (!el.contains(e.target) && el !== e.target)) {
            binding.value(e)
        }
        }
        el.__vueClickOutside__ = handler

        // add Event Listeners
        document.addEventListener('click', handler)
    },
    unbind: function (el, binding) {
        // Remove Event Listeners
        document.removeEventListener('click', el.__vueClickOutside__)
        el.__vueClickOutside__ = null
    }
})


// Imports
import site_menu from './components/SiteMenu';
import profile_slider from './components/ProfileSlider';
import select_box from './components/SelectBox';


// Vue App
const app = new Vue({
    el: "#app",
    data(){
        return {
            menuActive: false
        }
    },
    
    methods: {
        onMenuActive: function(event){
            this.menuActive = event
        }
    },
    
    components: {
        site_menu,
        profile_slider,
        select_box
    },
});  

