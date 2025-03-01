function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
    toggleMenu();
}

function toggleMenu() {
    document.querySelector('.nav-menu').classList.toggle('active');
}

document.addEventListener('contextmenu', event => event.preventDefault());