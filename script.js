const icons = document.querySelectorAll('.icon');

icons.forEach(icon => {
    icon.addEventListener('click', ()=> {
        icon.style.transform = 'rotate(360deg)scale(1.3)';
        icon.style.transition = 'transform 1s';
    });
});

icons.forEach(icon => {
    icon.addEventListener('dblclick', () => {
        icon.style.filter = 'hue-rotate(120deg)';
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'r' || e.key === 'R') {
        resetIcons();
    }
});

document.getElementById('res').addEventListener('click', resetIcons);

function resetIcons() {
    icons.forEach(icon => {
        icon.style.transform = 'scale(1)';
        icon.style.filter = 'none';
    });
}
