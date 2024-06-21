document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    const toggleButton = document.createElement('div');
    toggleButton.classList.add('toggle-button');
    toggleButton.innerHTML = '&#9776;';
    document.querySelector('nav').appendChild(toggleButton);

    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
