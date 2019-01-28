// Vue
window.Vue = require('vue')

// Imports
import site_menu from './components/SiteMenu';
import smooth_scroll from './components/SmoothScroll';
import full_slider from './components/FullSlider';
import info_slider from './components/InfoSlider';
import slider from './components/Slider';
import select_box from './components/SelectBox';
import section_anchor_states from './components/SectionAnchorStates';
import counter from './components/Counter';


// Vue App
const app = new Vue({
    el: "#app",
    components: {
        site_menu,
        full_slider,
        info_slider,
        slider,
        select_box,
        smooth_scroll,
        counter
    }
});  

// Other Initializations
section_anchor_states();
