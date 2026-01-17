// Page 4: Motion Analysis Toggle JS
document.addEventListener("DOMContentLoaded", function() {
    const toggles = document.querySelectorAll(".toggle");

    toggles.forEach(toggle => {
        toggle.addEventListener("click", function() {
            const content = this.nextElementSibling; // get the next div
            if (content && content.classList.contains("toggle-content")) {
                content.classList.toggle("show"); // toggle the class, CSS handles max-height
            }
        });
    });
});
