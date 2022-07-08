// modal

let bgModal = document.getElementById('bgModal');
let modal = document.getElementById('modal');
let btnClose = document.getElementById('btnClose');
let btnModal = document.getElementById('contact');


// alternar janela modal
function openCloseModal() {
    bgModal.classList.toggle('modal-active');
    modal.classList.toggle('modal-active');
    document.body.classList.toggle('scroll');
}

btnModal.addEventListener('click', function () {
    openCloseModal();
});

// fechar modal pelo botão x
btnClose.addEventListener('click', function () {
    openCloseModal();
});

// fechar modal pelo background
bgModal.addEventListener('click', function () {
    openCloseModal();
});

// fechar modal pelo ESC
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        bgModal.classList.remove('modal-active');
        modal.classList.remove('modal-active');
        document.body.classList.remove('scroll');
    }
});