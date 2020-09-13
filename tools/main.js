const nav = document.querySelector('#responsive-nav');
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
    if (dialogue.style.display === 'flex' || (!dialogue.style.display) || dialogue.style.display === 'block') {
        dialogue.style.display = "none";
        document.body.style.overflow = 'auto'
    } else {
        dialogue.style.display = "flex";
        document.body.style.overflow = 'hidden'
    }
}


window.onscroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        nav.style.boxShadow = "0px 0px 20px 0px #00000073";
    } else {
        nav.style.boxShadow = "none";
    }

}