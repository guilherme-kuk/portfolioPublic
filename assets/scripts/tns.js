// TinySlider

let slider = tns({
    container: '.my-slider',
    'slideBy': 1,
    'speed': 400,
    'nav': false,
    controlsContainer: '#controls',
    prevButton: '.previous',
    nextButton: '.next',
    responsive: {
        1600: {
            items: 2
        },
        1024: {
            items: 2
        },
        768: {
            items: 2
        },
        480: {
            items: 1
        }
    }
});