document.querySelectorAll('.toggle-btn').forEach(h2 => {
    h2.addEventListener('click', () => {
        const content = h2.nextElementSibling;
        content.classList.toggle('show');
    });
});