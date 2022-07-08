// more text
let more = document.querySelector('.more');
let limit = document.getElementById('limit');
let btnMore = document.getElementById('btnMore');

btnMore.addEventListener('click', function () {
    more.classList.toggle('more');
    btnMore.style.display = 'none';
    limit.style.display = 'none';
});

// scroll to top

const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', function () {
    if (this.window.pageYOffset > 100) {
        toTop.classList.add('on');
    } else {
        toTop.classList.remove('on');
    }
});

// Form
const btnSubmit = document.getElementById('btnSubmit');
const successIcon = document.querySelector('.success');
const formContact = document.querySelector('.form-contact');

$(formContact).on('submit',function(e){
    // e.preventDefault();
    btnSubmit.style.display = 'none';
    $('.success').fadeIn(300).show();

    // setTimeout(function() {
    //     successIcon.style.display = 'none';
    //     $(btnSubmit).fadeIn().show();
    // }, 1500);

});