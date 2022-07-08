//Filtro do portfolio

$('.filter-btn').on('click', function () {
    let type = $(this).attr('id');
    let boxes = $('.project-card');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if (type == 'btnHtmlCss') {
        eachBoxes('html-css', boxes);
    } else if (type == 'btnJs') {
        eachBoxes('js', boxes);
    } else if (type == 'btnBootstrap') {
        eachBoxes('bootstrap', boxes);
    } else {
        eachBoxes('all', boxes);
    }
});

function eachBoxes(type, boxes) {
    if (type == 'all') {
        $(boxes).fadeIn();
    } else {
        $(boxes).each(function () {
            if (!$(this).hasClass(type)) {
                $(this).fadeOut('slow');
            } else {
                $(this).fadeIn();
            }
        })
    }
}