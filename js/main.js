const modal = document.getElementById('modal');
const modalImg = document.querySelector('.modalImg');
const imgs = document.querySelectorAll('.img');
const closeMdl = document.getElementById('close');

imgs.forEach((img) => {
    img.addEventListener('click', function mdl() {
        modal.style.display = 'block';
        modalImg.src = this.src;
    });
});

modal.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none'
    }
})

closeMdl.addEventListener('click', () => {
    modal.style.display = 'none'
})