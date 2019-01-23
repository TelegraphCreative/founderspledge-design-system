// Vue
window.Vue = require('vue')

// Imports
import site_menu from './components/SiteMenu';
import profile_slider from './components/ProfileSlider';
import profile_slider_basic from './components/ProfileSlider_basic';
import select_box from './components/SelectBox';


// Vue App
const app = new Vue({
    el: "#app",
    components: {
        site_menu,
        profile_slider,
        profile_slider_basic,
        select_box
    }
});  

