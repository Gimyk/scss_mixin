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

const dialogue = document.getElementById('dialogue');
dialogue.addEventListener('click', (e) => {
    if (e.target == dialogue) {
        closedialogue()
    }
});

const showDialogue = document.getElementById('showDialogue');
showDialogue.addEventListener('click', (e) => {
    closedialogue()
});


function closedialogue() {
    if (dialogue.style.display === 'flex' || (!dialogue.style.display)) {
        dialogue.style.display = "none"
    } else {
        dialogue.style.display = "flex"
    }
}