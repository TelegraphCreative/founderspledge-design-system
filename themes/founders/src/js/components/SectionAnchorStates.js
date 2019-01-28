export default function() {
    require('intersection-observer');

    window.addEventListener('load', function () {
        // Handle States for Section InView 
        const sections = document.querySelectorAll('.js-section');
        const sectionAnchors = document.querySelectorAll('.js-section-anchor');

        let sectionConfig = {
            root: null, 
            rootMargin: '0px', 
            threshold: .5
        };

        // Section Observer
        const observeSections = new IntersectionObserver((entries) => {
            entries.forEach(entry => {

                // Get Section Ids
                let id = entry.target.id;
                
                // Section InView
                if (entry.intersectionRatio > 0) {
                    entry.target.classList.add('in-view');
                } 
                
                // Section not InView
                else {
                    entry.target.classList.remove('in-view');
                }
            });
        });

        // Observer Anchors
        function observeAnchors(section){

            let id = section.getAttribute('id');
            let activeAnchor = document.querySelector('button.js-section-anchor[href*=' + id + ']')

            // Remove previous/all active 
            sectionAnchors.forEach(anchor => {
                anchor.classList.remove('section-active');
            });

            // Set current active
            activeAnchor.classList.add('section-active');

        }

        // Initialize Section Observer            
        sections.forEach(section => {
            observeSections.observe(section, sectionConfig);
        });

        // Intialize Anchor Obserer
        if(sectionAnchors.length) {
            window.onscroll = function () {
                var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop
                sections.forEach(section => {

                    if (section.offsetTop-200 <= scrollPosition) {
                        observeAnchors(section);
                    } 
                        
                });
            }
        } 
    
    });

}