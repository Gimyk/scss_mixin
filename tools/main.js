const icon = document.getElementById('on_mobile');
const nav_items = document.querySelectorAll('#nav_items');
const whenMobile = 800; // make sure this is the same as $mobi_res in variables.scss file
icon.addEventListener('click', () => {
    if (window.innerWidth < whenMobile) {
        icon.classList.toggle('is-open');
        nav_items.forEach(e => {
            e.classList.toggle('is-open');
        });
    }
});